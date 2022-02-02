<template>
  <div>
    <section class="hero is-primary mb-5">
      <div class="hero-body">
        <p class="title">
          Hospital General
        </p>
        <p class="subtitle">
          Sistema de gestión de citas
        </p>
      </div>
    </section>
    <div class="container">
      <b-modal
        :active.sync="mostrarModal"
        has-modal-card
        :can-cancel="false"
        :destroy-on-hide="false"
      >
        <template #default="props">
          <form @submit.prevent="onSubmit">
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">
                  Agendar cita
                </p>
                <button type="button" class="delete" @click="props.close" />
              </header>
              <section class="modal-card-body">
                <input-especialidades
                  v-model="formulario.especialidad"
                  @input="obtenerDoctores"
                />
                <b-field label="Doctor">
                  <b-select
                    v-model="formulario.doctor"
                    placeholder="Seleccione el doctor"
                    expanded
                  >
                    <option
                      v-for="item in doctores"
                      :key="item._id"
                      :value="item._id"
                    >
                      {{ item.cedula }} - {{ item.nombre }}
                    </option>
                  </b-select>
                </b-field>
                <div class="columns">
                  <div class="column">
                    <b-field label="Hora inicio">
                      <b-datetimepicker
                        v-model="formulario.horaInicio"
                        placeholder="Seleccione la hora de inicio"
                        icon="calendar-today"
                        append-to-body
                        horizontal-time-picker
                      />
                    </b-field>
                  </div>
                  <div class="column">
                    <b-field label="Hora fin">
                      <b-datetimepicker
                        v-model="formulario.horaFin"
                        placeholder="Seleccione la hora de fin"
                        icon="calendar-today"
                        append-to-body
                        horizontal-time-picker
                      />
                    </b-field>
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <b-button label="Agendar" native-type="submit" type="is-primary" />
                <b-button label="Cerrar" @click="props.close" />
              </footer>
            </div>
          </form>
        </template>
      </b-modal>
      <div class="buttons is-right">
        <b-button type="is-primary" @click="mostrarModal = true">
          Agendar cita
        </b-button>
      </div>
      <b-table :data="citas" bordered>
        <b-table-column v-slot="props" label="Especialidad">
          {{ props.row.especialidad.especialidad }}
        </b-table-column>
        <b-table-column v-slot="props" label="Doctor">
          {{ props.row.doctor.nombre }}
        </b-table-column>
        <b-table-column v-slot="props" label="Fechas">
          {{ props.row.horaInicio }} - {{ props.row.horaFin }}
        </b-table-column>
        <b-table-column v-slot="props">
          <div class="buttons has-addons">
            <b-button
              tag="nuxt-link"
              icon-right="pencil"
              :to="props.row._id + '/edit'"
              append
            />
            <b-button icon-right="delete" @click="eliminar(props.row)" />
          </div>
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
import { showError } from '~/assets/utiles'

export default {
  name: 'IndexPage',
  data () {
    return {
      mostrarModal: false,
      doctores: [],
      isLoading: false,
      citas: [],
      formulario: {
        doctor: undefined,
        especialidad: undefined,
        horaInicio: undefined,
        horaFin: undefined
      }
    }
  },
  async mounted () {
    await this.init()
  },
  methods: {
    async init () {
      try {
        this.citas = await this.$axios.$get('/api/pacientes/me/citas')
      } catch (err) {
        showError(err)
      }
    },
    async obtenerDoctores (especialidad) {
      try {
        this.doctores = await this.$axios.$get('/api/doctores', {
          params: { especialidad }
        })
      } catch (err) {
        showError(err)
      }
    },
    async onSubmit () {
      try {
        this.isLoading = true
        await this.$axios.$post('/api/pacientes/me/citas', this.formulario)
        this.mostrarModal = false
        await this.init()
      } catch (err) {
        showError(err)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
