import express from "express";
import {
    registrar,
    perfil,
    confirmar,
    autentificar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    prueba
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js"

const router = express.Router()
//Publico
router.post('/',registrar)
router.get('/confirmar/:token',confirmar)
router.post('/login',autentificar)
router.post('/olvide-password',olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

//prueba
router.get('/prueba/:token',prueba)
//Privado
router.get('/perfil',checkAuth,perfil)
export default router