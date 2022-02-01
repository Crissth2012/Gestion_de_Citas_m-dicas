<template>
  <div class="columns is-centered is-vcentered" style="height: 100vh; background: #EEE;">
    <div class="column is-4">
      <form class="box" @submit.prevent="$emit('iniciar-sesion', form)">
        <slot name="title" />
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
            type="password"
            required
          />
        </b-field>
        <b-button expanded native-type="submit" type="is-primary">
          Iniciar sesión
        </b-button>
        <slot name="botones" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        correo: '',
        contrasena: ''
      }
    }
  }
}
</script>
