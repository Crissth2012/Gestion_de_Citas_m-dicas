import mongoose from 'mongoose'

const { Schema } = mongoose

const doctorSchema = new Schema({
  cedula: { type: String, required: true },
  nombre: { type: String, required: true },
  correoElectronico: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  ciudad: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  genero: { type: String, required: true },
  especialidad: { type: mongoose.Types.ObjectId, required: true }
})

export default mongoose.model('doctores', doctorSchema)
