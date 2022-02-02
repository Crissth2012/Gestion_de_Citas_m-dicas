import express from 'express'
import Doctores from '../models/doctores'

const router = express.Router()

router.get('/', async function (req, res) {
  try {
    const doctores = await Doctores.find(req.query || {})
    res.json(doctores)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.get('/:identificador', async function (req, res) {
  try {
    const doctores = await Doctores.findOne({ _id: req.params.identificador })
    res.json(doctores)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.post('/', async function (req, res) {
  try {
    const doctor = new Doctores(req.body)
    await doctor.save()
    res.json(doctor)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.put('/:identificador', async function (req, res) {
  try {
    const doctor = await Doctores.findOne({ _id: req.params.identificador })
    doctor.set(req.body)
    await doctor.save()
    res.json(doctor)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.delete('/:identificador', async function (req, res) {
  try {
    const doctor = await Doctores.findOne({ _id: req.params.identificador })
    await doctor.remove()
    res.send('hecho')
  } catch (err) { res.status(500).send(err.toString()) }
})

export default router
