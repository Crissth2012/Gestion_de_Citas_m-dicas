<template>
  <div>
    <inicio-sesion @iniciar-sesion="onSubmit">
      <template #title>
        <h3 class="subtitle is-4">
          Inicio de sesión · Pacientes
        </h3>
      </template>
      <template #botones>
        <b-button expanded class="mt-1" tag="nuxt-link" to="/registro">
          Registrarme
        </b-button>
      </template>
    </inicio-sesion>
  </div>
</template>

<script>
import { showError } from '~/assets/utiles'

export default {
  layout: 'empty',
  head: {
    title: 'Inicio de sesión'
  },
  methods: {
    async onSubmit (datos) {
      try {
        const token = await this.$axios.$post('/api/auth/paciente', datos)
        this.$cookies.set('tokenPaciente', token)
        this.$router.push(this.$route.query.redirect || '/')
      } catch (err) {
        showError(err)
      }
    }
  }
}
</script>
