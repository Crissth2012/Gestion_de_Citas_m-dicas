import express from 'express'
import { hashear } from '../libs/utiles'
import Administradores from '../models/administradores'

const router = express.Router()

router.get('/', async function (req, res) {
  try {
    const administradores = await Administradores.find()
    res.json(administradores)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.get('/:identificador', async function (req, res) {
  try {
    const administrador = await Administradores.findOne({ _id: req.params.identificador })
    res.json(administrador)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.post('/', async function (req, res) {
  try {
    const administrador = new Administradores(req.body)
    administrador.contrasena = hashear(administrador.contrasena)
    await administrador.save()
    res.json(administrador)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.put('/:identificador', async function (req, res) {
  try {
    const administrador = await Administradores.findOne({ _id: req.params.identificador })
    administrador.set(req.body)
    if (administrador.isModified('contrasena')) {
      administrador.contrasena = hashear(administrador.contrasena)
    }
    await administrador.save()
    res.json(administrador)
  } catch (err) { res.status(500).send(err.toString()) }
})

router.delete('/:identificador', async function (req, res) {
  try {
    const administrador = await Administradores.findOne({ _id: req.params.identificador })
    await administrador.remove()
    res.send('hecho')
  } catch (err) { res.status(500).send(err.toString()) }
})

export default router
