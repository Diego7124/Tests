import { ModeloLibros } from "../models/LibrosModel.js"; //error
//error importacion

ModeloLibros.create(
    {
        title:"IT",
        autor:"Stephen King",
        numPages:"X paginas",
        categories:"Terror, Suspenso"
    }
)

export const test = ()=>{
    console.log("Funciona el controlador");
}