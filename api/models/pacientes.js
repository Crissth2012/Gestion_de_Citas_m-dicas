import mongoose from 'mongoose'

const { Schema } = mongoose

const pacienteSchema = new Schema({
  cedula: { type: String, required: true },
  nombre: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  ciudad: { type: String, required: true },
  genero: { type: String, required: true },
  correo: { type: String, required: true },
  contrasena: { type: String, required: true }
})

export default mongoose.model('pacientes', pacienteSchema)
