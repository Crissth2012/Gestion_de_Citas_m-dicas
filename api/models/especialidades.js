import mongoose from 'mongoose'

const { Schema } = mongoose

const especialidadSchema = new Schema({
  especialidad: { type: String, required: true },
  fechaRegistro: { type: String, required: true }
})

export default mongoose.model('especialidades', especialidadSchema)
