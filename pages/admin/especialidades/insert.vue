<template>
  <div>
    <h1 class="title">
      Especialidades
    </h1>
    <h2 class="subtitle">
      {{ subtitulo }}
    </h2>

    <form @submit.prevent="enviarFormulario">
      <b-field label="Nombre de la Especialidad">
        <b-input
          v-model="formulario.especialidad"
          placeholder="Ingrese el Nombre de especialidad"
          required
        />
      </b-field>
      <b-field label="Fecha de registro">
        <b-datepicker
          v-model="formulario.fechaRegistro"
          placeholder="Seleccione la fecha"
          icon="calendar-today"
          required
        />
      </b-field>
      <div class="buttons">
        <b-button native-type="submit" type="is-primary">
          Guardar
        </b-button>
        <b-button to=".." append tag="nuxt-link">
          Cancelar
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  /**
   * Esta es una función que retorna un objeto. Cada propiedad del objeto son
   * variables que utiliza el vue para mostrar en la vista.
   */
  data () {
    return {
      formulario: {
        especialidad: '',
        fechaRegistro: undefined
      }
    }
  },
  computed: {
    subtitulo () {
      return this.$route.params.id ? 'Editar' : 'Insertar'
    }
  },
  async mounted () {
    if (this.$route.params.id) {
      const especialidad = await this.$axios.$get('/api/especialidades/' + this.$route.params.id)
      especialidad.fechaRegistro = new Date(especialidad.fechaRegistro)
      this.especialidad = especialidad
    }
  },
  /**
   * Las funciones de las cuales va a hacer uso vuejs para gestionar la lógica.
   */
  methods: {
    async enviarFormulario () {
      try {
        if (this.$route.params.id) {
          await this.$axios.$put('/api/especialidades/' + this.$route.params.id, this.formulario)
        } else {
          await this.$axios.$post('/api/especialidades', this.formulario)
        }
        this.$router.push('/admin/especialidades')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
