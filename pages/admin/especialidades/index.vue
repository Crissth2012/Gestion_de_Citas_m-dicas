<template>
  <div>
    <h1 class="title">
      Especialidades
    </h1>
    <div class="buttons is-right">
      <b-button type="is-primary" to="insert" append tag="nuxt-link">
        Insertar
      </b-button>
    </div>
    <b-table :data="especialidades" bordered>
      <b-table-column v-slot="props" label="Nombre de especialidad">
        {{ props.row.especialidad }}
      </b-table-column>
      <b-table-column v-slot="props" label="Fecha de registro">
        {{ props.row.fechaRegistro }}
      </b-table-column>
      <b-table-column v-slot="props">
        <div class="buttons has-addons">
          <b-button
            tag="nuxt-link"
            icon-right="pencil"
            :to="props.row._id + '/edit'"
            append
          />
          <b-button icon-right="delete" @click="eliminar(props.row)" />
        </div>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      especialidades: []
    }
  },
  async mounted () {
    await this.iniciar()
  },
  methods: {
    async iniciar () {
      try {
        this.especialidades = await this.$axios.$get('/api/especialidades')
      } catch (err) {
        console.error(err)
      }
    },
    async eliminar (row) {
      if (!confirm('¿Seguro que desea eliminar el especialidad?')) { return }
      try {
        await this.$axios.$delete('/api/especialidades/' + row._id)
        await this.iniciar()
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
