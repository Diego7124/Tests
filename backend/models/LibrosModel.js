import { Schema, model } from "mongoose"; //error

const Eschema = new Schema ({
    title:String,
    author:String,
    numPages:String, //error
    category:String
})

export const ModeloLibros = new model("Libros", Eschema)