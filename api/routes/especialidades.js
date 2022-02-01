import express from 'express'
import Especialidades from '../models/especialidades'

const router = express.Router()

router.get('/', async function (req, res) {
  try {
    const especialidades = await Especialidades.find()
    res.json(especialidades)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.get('/:identificador', async function (req, res) {
  try {
    const especialidad = await Especialidades.findOne({ _id: req.params.identificador })
    res.json(especialidad)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.post('/', async function (req, res) {
  try {
    const especialidad = new Especialidades(req.body)
    await especialidad.save()
    res.json(especialidad)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.put('/:identificador', async function (req, res) {
  try {
    const especialidad = await Especialidades.findOne({ _id: req.params.identificador })
    especialidad.set(req.body)
    await especialidad.save()
    res.json(especialidad)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.delete('/:identificador', async function (req, res) {
  try {
    const especialidad = await Especialidades.findOne({ _id: req.params.identificador })
    await especialidad.remove()
    res.send('hecho')
  } catch (err) { res.status(500).send(err.toString()) }
})

export default router
