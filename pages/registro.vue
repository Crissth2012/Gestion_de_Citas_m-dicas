<template>
  <div style="min-height: 100vh; background: #EEE;">
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          Registro de paciente
        </p>
        <p class="subtitle">
          Registrese como paciente para poder acceder al agendamiento de citas.
        </p>
      </div>
    </section>
    <div class="container">
      <form class="box m-5" @submit.prevent="onSubmit">
        <FormularioPaciente v-model="formulario" />
        <div class="buttons mt-5">
          <b-button native-type="submit" type="is-primary">
            Registrarme
          </b-button>
          <b-button to="/login" append tag="nuxt-link">
            Cancelar
          </b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { showError } from '~/assets/utiles'

export default {
  layout: 'empty',
  data () {
    return {
      formulario: {
        cedula: '',
        nombre: '',
        fechaNacimiento: undefined,
        telefono: '',
        direccion: '',
        ciudad: '',
        genero: '',
        correo: '',
        contrasena: ''
      }
    }
  },
  head: {
    title: 'Registro de paciente'
  },
  methods: {
    async onSubmit (datos) {
      try {
        await this.$axios.$post('/api/pacientes', this.formulario)
        this.$buefy.notification.open({
          message: 'Paciente creado correctamente. Ingrese sus credenciales para iniciar sesión',
          type: 'is-success',
          duration: 10 * 1000
        })
        this.$router.push('/login')
      } catch (err) {
        showError(err)
      }
    }
  }
}
</script>
