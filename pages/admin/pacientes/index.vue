<template>
  <div>
    <h1 class="title">
      Pacientes
    </h1>
    <div class="buttons is-right">
      <b-button type="is-primary" to="insert" append tag="nuxt-link">
        Insertar
      </b-button>
    </div>
    <b-table :data="pacientes" bordered>
      <b-table-column v-slot="props" label="Identificación">
        {{ props.row.cedula }}
      </b-table-column>
      <b-table-column v-slot="props" label="Nombre">
        {{ props.row.nombre }}
      </b-table-column>
      <b-table-column v-slot="props" label="Telefono">
        {{ props.row.telefono }}
      </b-table-column>
      <b-table-column v-slot="props" label="Dirección">
        {{ props.row.direccion }}
      </b-table-column>
      <b-table-column v-slot="props" label="Ciudad">
        {{ props.row.ciudad }}
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
      pacientes: []
    }
  },
  async mounted () {
    await this.iniciar()
  },
  methods: {
    async iniciar () {
      try {
        this.pacientes = await this.$axios.$get('/api/pacientes')
      } catch (err) {
        console.error(err)
      }
    },
    async eliminar (row) {
      if (!confirm('¿Seguro que desea eliminar el paciente?')) { return }
      try {
        await this.$axios.$delete('/api/pacientes/' + row._id)
        await this.iniciar()
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
