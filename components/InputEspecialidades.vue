<template>
  <b-field label="Especialidad">
    <b-select
      :value="value"
      placeholder="Seleccione la especialidad"
      @input="$emit('input', $event)"
    >
      <option
        v-for="item in especialidades"
        :key="item._id"
        :value="item._id"
      >
        {{ item.especialidad }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' }
  },
  data () {
    return {
      especialidades: []
    }
  },
  async mounted () {
    this.especialidades = await this.$axios.$get('/api/especialidades')
  }
}
</script>
