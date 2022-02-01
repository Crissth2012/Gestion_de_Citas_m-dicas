<template>
  <div>
    <b-navbar type="is-primary">
      <template #brand>
        <b-navbar-item tag="nuxt-link" to="/admin">
          Administrador
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-dropdown label="Usuarios">
          <b-navbar-item tag="nuxt-link" to="/admin/pacientes">
            Pacientes
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" to="/admin/secretarias">
            Secretarias
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" to="/admin/doctores">
            Doctores
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="nuxt-link" to="/admin/especialidades">
          Especialidades
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/admin/administradores">
          Administradores
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button @click="cerrarSesion">
              Cerrar sesión
            </b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container mt-6">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesion () {
      this.$cookies.remove('tokenAdmin')
      window.location = '/admin/login'
    }
  }
}
</script>
