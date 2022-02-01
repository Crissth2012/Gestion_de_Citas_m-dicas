import express from 'express'
import { hashear } from '../libs/utiles'
import Pacientes from '../models/pacientes'

const router = express.Router()

router.get('/', async function (req, res) {
  try {
    const pacientes = await Pacientes.find()
    res.json(pacientes)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.get('/:identificador', async function (req, res) {
  try {
    const paciente = await Pacientes.findOne({ _id: req.params.identificador })
    res.json(paciente)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.post('/', async function (req, res) {
  try {
    const paciente = new Pacientes(req.body)
    paciente.contrasena = hashear(paciente.contrasena)
    await paciente.save()
    res.json(paciente)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.put('/:identificador', async function (req, res) {
  try {
    const paciente = await Pacientes.findOne({ _id: req.params.identificador })
    paciente.set(req.body)
    if (paciente.isModified('contrasena')) {
      paciente.contrasena = hashear(paciente.contrasena)
    }
    await paciente.save()
    res.json(paciente)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.delete('/:identificador', async function (req, res) {
  try {
    const paciente = await Pacientes.findOne({ _id: req.params.identificador })
    await paciente.remove()
    res.send('hecho')
  } catch (err) { res.status(500).send(err.toString()) }
})

export default router
