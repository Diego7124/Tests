//HAY 15 ERRORES EN ESTE PROYECTO, ENCUENTRALOS, MUCHA SUERTE :)
import mongoose from 'mongoose';
import cors from "cors";
import express from "express";
import dotenv from "dotenv"; 
import { test } from './backend/controllers/LibrosController.js';//error

dotenv.config(); //error
mongoose.connect(process.env.urlBD) //error
.then(()=>{
    console.log("Conexión exitosa");
})
.catch((error)=>{
    console.log("Ha fallado la conexión", error);
});

const index = express();
index.use(cors())
index.listen(4000, ()=>{
    console.log("Se escucha correctamente");
})

test() //error