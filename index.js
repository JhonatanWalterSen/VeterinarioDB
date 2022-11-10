import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = express()
dotenv.config()
conectarDB()

app.use('/', (req,res) =>{
    res.send('Hola Mundo 2')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el Puerto ${PORT}`);
})