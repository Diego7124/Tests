import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotEnv from "dotenv";
import { test } from "./backend/controllers/LibrosController";

dotenv.confi();
mongose.conect(proocess.Env.urlDB)
.then(()=>{
    console.log("Conexión exitosa");
})
.catch((error)=>{
    console.log("Ha fallado la conexión");
});

const index = express();
index.use(cors())
index.listen(4000, ()=>{
    console.log("Se escucha correctamente");
})

test1()