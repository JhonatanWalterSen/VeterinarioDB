import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js';

const checkAuth = async (req,res,next) => {
    let tokken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            tokken = req.headers.authorization.split(' ')[1]
            const decored = jwt.verify(tokken,process.env.JWT_SECRET)
            req.veterinario = await Veterinario.findById(decored.id).select("-password -token -confirmado")
            return next()
        } catch (error) {
            const e = new Error('Token no válido ')
            res.status(403).json({msg: e.message})
        }
    }

    if (!tokken) {
        const error = new Error ('Token no válido o inexistente')
        return res.status(403).json({msg: error.message})
    }

    next()
}

export default checkAuth