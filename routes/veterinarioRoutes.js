import express from "express";
import {
    registrar,
    perfil,
    confirmar,
    autentificar
} from "../controllers/veterinarioController.js";

const router = express.Router()

router.post('/',registrar)
router.get('/perfil',perfil)
router.get('/confirmar/:token',confirmar)
router.post('/login',autentificar)

export default router