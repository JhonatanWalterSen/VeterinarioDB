import Veterinario from '../models/Veterinario.js'

const registrar = async (req,res)=>{
    const {email} = req.body

    //Usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email})
    if (existeUsuario) {
        const error = new Error("Usuario ya existe")
        return res.status(400).json({msg: error.message})
    }

    try {
        // Guardar un veterinario
        const veterinario = new Veterinario(req.body)
        const veterinarioGuardado = await veterinario.save()
        res.json(veterinarioGuardado);

    } catch (error) {
        console.log(error.msg);
    }
}
const perfil = (req,res)=>{
    res.json({msg:"Mostrando perfil"});
}

const confirmar = async (req,res)=>{
    const {token} = req.params
    const usuarioConfirmar = await Veterinario.findOne({token})
    if (!usuarioConfirmar) {
        const error = new Error('Token no válido')
        return res.status(404).json({msg:error.message})
    }

    try {
        usuarioConfirmar.token = null
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()
        res.json({msg:"Usuario confirmado Correctamente"});
    } catch (error) {
        console.log(error);
    }
}

const autentificar = async (req, res) =>{
    const {email} = req.body

    const usuario = await Veterinario.findOne({email})
    if (!usuario) {
        const error = new Error("Usuario No Existe")
        return res.status(404).json({msg: error.message})
    }
    console.log(`Bienvenid0 ${usuario.email}`);

    //comprobar si confirmó su cuenta
    if (!usuario.confirmado) {
        const error = new Error("Tu Cuenta no ha sido confirmada")
        return res.status(403).json({msg: error.message})
        
    }
}

export {
    registrar,
    perfil,
    confirmar,
    autentificar
}