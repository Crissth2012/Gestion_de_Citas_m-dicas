import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import pacientes from './routes/pacientes'
import doctores from './routes/doctores'
import especialidades from './routes/especialidades'
import administradores from './routes/administradores'
import autenticacion, { getVerificador } from './routes/autenticacion'

const mongouri = process.env.MONGO || 'mongodb://localhost:27017/tarea1'

mongoose.connect(mongouri)

const app = express()
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/pacientes', getVerificador(['admin']), pacientes)
app.use('/doctores', getVerificador(['admin']), doctores)
app.use('/especialidades', getVerificador(['admin']), especialidades)
app.use('/administradores', getVerificador(['admin']), administradores)
app.use('/auth', autenticacion)

export default app
