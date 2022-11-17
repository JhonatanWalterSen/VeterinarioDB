import express from 'express'
import {
    agregarPaciente,
    obtenerPacientes
} from '../controllers/pacienteController.js'
import checkAuth from '../middleware/authMiddleware.js'

const router = express.Router()

/* EndPoints */
router.route('/')
    .post(checkAuth, agregarPaciente)
    .get(obtenerPacientes)


export default router