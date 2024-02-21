//importamos la conexion a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


const LibroModel = db.define('libros',{
    Titulo: { type: DataTypes.STRING },
    Descripcion: { type: DataTypes.STRING },
})

export default LibroModel