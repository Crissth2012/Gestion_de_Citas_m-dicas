<template>
  <div>
    <b-navbar type="is-primary">
      <template #brand>
        <b-navbar-item tag="nuxt-link" to="/admin">
          Paciente
        </b-navbar-item>
      </template>
      <!-- <template #start>
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
        <b-navbar-item tag="nuxt-link" to="/admin/administradores">
          Administradores
        </b-navbar-item>
      </template> -->
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
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesion () {
      this.$cookies.remove('tokenPaciente')
      window.location = '/login'
    }
  }
}
</script>
