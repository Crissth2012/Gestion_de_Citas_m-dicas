import mongoose from 'mongoose'

const { Schema } = mongoose

const administradorSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  contrasena: { type: String, required: true },
  creadoPor: { type: mongoose.Types.ObjectId },
  actualizadoPor: { type: mongoose.Types.ObjectId }
}, { timestamps: true })

export default mongoose.model('administradores', administradorSchema)
