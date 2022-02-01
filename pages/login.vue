<template>
  <div class="columns is-centered is-vcentered" style="height: 100vh; background: #EEE;">
    <div class="column is-4">
      <form class="box" @submit.prevent="onSubmit">
        <b-field label="Correo electrónico">
          <b-input
            v-model="form.correo"
            placeholder="Ingrese el correo electrónico"
            required
          />
        </b-field>
        <b-field label="Contraseña">
          <b-input
            v-model="form.contrasena"
            placeholder="Ingrese el correo electrónico"
            password-reveal
            required
          />
        </b-field>
        <b-button expanded native-type="submit" type="is-primary">
          Iniciar sesión
        </b-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      form: {
        correo: '',
        contrasena: ''
      }
    }
  },
  head: {
    title: 'Inicio de sesión'
  },
  methods: {
    onSubmit () {
      alert('iniciar sesion')
    }
  },
}
</script>
