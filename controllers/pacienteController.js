import Paciente from "../models/Paciente.js";

const agregarPaciente = async (req,res) =>{
    const paciente = new Paciente(req.body)
    paciente.veterinario = req.veterinario._id
    try {
        console.log(paciente);
        const pacienteAlmacenado = await paciente.save()
        res.json(pacienteAlmacenado)
    } catch (error) {
        console.log(error);
    }
}
const obtenerPacientes = async (req,res) =>{
    const pacientes = await Paciente.find()
        .where("veterinario")
        .equals(req.veterinario)
    res.json(pacientes)
}

const obtenerPaciente = async (req, res) => {
    console.log(req.params.id.toString());
};

const actualizarPaciente = async (req,res) =>{

}

const eliminarPaciente = async (req,res) =>{

}

export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}