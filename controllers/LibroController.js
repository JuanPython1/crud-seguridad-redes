//importamos modelo
import LibroModel from "../models/LibroModel.js";

/* Metodo para el CRUD */


//Mostrar todos los registros
export const getAllLibros = async (req, res) => {
    try {
        const Libros =  await LibroModel.findAll()
        res.json(Libros)
    } catch (error) {
        res.json( {message: error.message} )
        
    }
}

//Montrar un registro

export const getLibro = async (req, res) => {
    try {
        const libro = await LibroModel.findAll({
            where:{ id:req.params.id
            }
        })
        res.json(libro[0])
    } catch (error) {
        res.json( {message: error.message} )    }
}


//Crear un registro
export const creatLibro = async (req ,res) => {
    try {
        await LibroModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )    
    }
}

//Actualizar un registro
export const updatedLibro = async (req, res) =>{
    try {
        await LibroModel.update(req.body , {
            where: {id: req.params.id}
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// Eliminar un registro
export const deleteLibro = async (req, res) => {
    try {
        await LibroModel.destroy({
            where: {id : req.params.id}
        })
        res.json({
            "message": "¡Libro borrado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
} 

