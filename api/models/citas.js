import mongoose from 'mongoose'

const { Schema } = mongoose

const administradorSchema = new Schema({
  paciente: { type: mongoose.Types.ObjectId, required: true, ref: 'pacientes' },
  doctor: { type: mongoose.Types.ObjectId, required: true, ref: 'doctores' },
  especialidad: { type: mongoose.Types.ObjectId, required: true, ref: 'especialidades' },
  horaInicio: { type: Date, required: true },
  horaFin: { type: Date, required: true }
}, { timestamps: true })

export default mongoose.model('citas', administradorSchema)
