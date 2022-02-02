<template>
  <div>
    <h1 class="title">
      Doctores
    </h1>
    <h2 class="subtitle">
      Insertar
    </h2>

    <form @submit.prevent="enviarFormulario">
      <b-field label="Identificación">
        <b-input
          v-model="formulario.cedula"
          placeholder="Ingrese el número de cédula, RUC o Pasaporte"
          required
        />
      </b-field>
      <b-field label="Apellidos y Nombres">
        <b-input
          v-model="formulario.nombre"
          placeholder="Ingrese su nombre completo"
          required
        />
      </b-field>
      <b-field label="Correo Electrónico">
        <b-input
          v-model="formulario.correoElectronico"
          placeholder="Ingrese su correo electrónico"
          required
        />
      </b-field>
      <b-field label="Teléfono">
        <b-input
          v-model="formulario.telefono"
          placeholder="Ingrese su número de teléfono"
          required
        />
      </b-field>
      <b-field label="Dirección">
        <b-input
          v-model="formulario.direccion"
          placeholder="Ingrese su dirección"
          required
        />
      </b-field>
      <b-field label="Ciudad">
        <b-input
          v-model="formulario.ciudad"
          placeholder="Ingrese su ciudad de residencia"
          required
        />
      </b-field>
      <b-field label="Fecha de nacimiento">
        <b-datepicker
          v-model="formulario.fechaNacimiento"
          placeholder="Seleccione la fecha de nacimiento"
          icon="calendar-today"
          required
        />
      </b-field>
      <b-field label="Género">
        <b-select
          v-model="formulario.genero"
          placeholder="Género"
          expanded
        >
          <option value="Masculino">
            Masculino
          </option>
          <option value="Femenino">
            Femenino
          </option>
        </b-select>
      </b-field>
      <InputEspecialidades v-model="formulario.especialidad" />
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
        cedula: '',
        nombre: '',
        correoElectronico: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        fechaNacimiento: undefined,
        genero: '',
        especialidad: ''
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
      const doctor = await this.$axios.$get('/api/doctores/' + this.$route.params.id)
      doctor.fechaNacimiento = new Date(doctor.fechaNacimiento)
      this.formulario = doctor
    }
  },
  /**
   * Las funciones de las cuales va a hacer uso vuejs para gestionar la lógica.
   */
  methods: {
    async enviarFormulario () {
      try {
        if (this.$route.params.id) {
          await this.$axios.$put('/api/doctores/' + this.$route.params.id, this.formulario)
        } else {
          await this.$axios.$post('/api/doctores', this.formulario)
        }
        this.$router.push('/doctores')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
