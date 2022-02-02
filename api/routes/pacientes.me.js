import express from 'express'
import Citas from '../models/citas'
import { getVerificadorPaciente } from './autenticacion'

const router = express.Router()

router.get('/citas', getVerificadorPaciente(), async function (req, res) {
  try {
    const cita = await Citas.find({ paciente: req.payload.usuario })
      .populate('paciente')
      .populate('doctor')
      .populate('especialidad')
      .exec()
    res.json(cita)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.post('/citas', getVerificadorPaciente(), async function (req, res) {
  try {
    req.body.paciente = req.payload.usuario
    const cita = await Citas.create(req.body)
    res.send(cita)
  } catch (err) { res.status(500).send(err.toString()) }
})

export default router
