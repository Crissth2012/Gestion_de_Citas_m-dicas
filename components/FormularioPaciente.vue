<template>
  <div>
    <b-field label="Identificación">
      <b-input
        :value="value.cedula"
        placeholder="Ingrese el número de cédula, RUC o Pasaporte"
        required
        @input="actualizar({ cedula: $event })"
      />
    </b-field>
    <b-field label="Apellidos y Nombres">
      <b-input
        :value="value.nombre"
        placeholder="Ingrese su nombre completo"
        required
        @input="actualizar({ nombre: $event })"
      />
    </b-field>
    <b-field label="Fecha de nacimiento">
      <b-datepicker
        :value="value.fechaNacimiento"
        placeholder="Seleccione la fecha de nacimiento"
        icon="calendar-today"
        required
        @input="actualizar({ fechaNacimiento: $event })"
      />
    </b-field>
    <b-field label="Teléfono">
      <b-input
        :value="value.telefono"
        placeholder="Ingrese su número de teléfono"
        required
        @input="actualizar({ telefono: $event })"
      />
    </b-field>
    <b-field label="Dirección">
      <b-input
        :value="value.direccion"
        placeholder="Ingrese su dirección"
        required
        @input="actualizar({ direccion: $event })"
      />
    </b-field>
    <b-field label="Ciudad">
      <b-input
        :value="value.ciudad"
        placeholder="Ingrese su ciudad de residencia"
        required
        @input="actualizar({ ciudad: $event })"
      />
    </b-field>
    <b-field label="Género">
      <b-select
        :value="value.genero"
        placeholder="Género"
        @input="actualizar({ genero: $event })"
      >
        <option value="Masculino">
          Masculino
        </option>
        <option value="Femenino">
          Femenino
        </option>
      </b-select>
    </b-field>
    <b-field label="Correo electrónico">
      <b-input
        :value="value.correo"
        type="email"
        required
        placeholder="Ingrese el correo"
        @input="actualizar({ correo: $event })"
      />
    </b-field>
    <b-field label="Contraseña">
      <b-input
        :value="value.contrasena"
        type="password"
        password-reveal
        @input="actualizar({ contrasena: $event })"
      />
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true }
  },
  methods: {
    actualizar (valor) {
      this.$emit('input', { ...this.value, ...valor })
    }
  }
}
</script>
