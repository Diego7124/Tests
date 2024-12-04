import { schema, Model } from "mongoose";

const Eschema = new Schema ({
    title:String,
    author:String,
    numPages:Number,
    category:String
})

export const ModeloLibros = new model("Libros", Echema)