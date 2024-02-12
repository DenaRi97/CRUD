//Importamos el modelo
import BlogModel from "../models/BlogModel.js";

//**Métodos para el CRUD**//

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro concreto por id
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
                where:{
                    id:req.params.id}
                })
                res.json(blog[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un registro
export const createBlog  = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {
                id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteBlog = async (req,res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//IMPORTANTE, al crear la DB en XAMPP hay que especificar que el numero 1 de los ids(o de la tabla) tenga auto-incremento para que las nuevas entradas se vayan registrando en orden: estructura> accion, cambiar> marcar A.I> guardar