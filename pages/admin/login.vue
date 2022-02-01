<template>
  <inicio-sesion @iniciar-sesion="onSubmit" />
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
        const token = await this.$axios.$post('/api/auth/administrador', datos)
        this.$cookies.set('tokenAdmin', token)
        this.$router.push(this.$route.query.redirect || '/admin')
      } catch (err) {
        showError(err)
      }
    }
  }
}
</script>
