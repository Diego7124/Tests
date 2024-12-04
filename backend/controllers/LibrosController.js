import { Modelolibros } from "../models/LibrosModel";

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