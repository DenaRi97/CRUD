import express from 'express'
import { getAllBlogs, getBlog } from '../controllers/BlogControllers.js'
import { createBlog, deleteBlog, updateBlog } from '../controllers/BlogControllers.js'
const router = express.Router()

//Routas para todos los metodos del controlador, una ruta por metodo
//metodos http, get, post, put y delete ('/' hace referrencia a la raiz del archivo, luego se indica el método a traer del controlador)
router.get('/', getAllBlogs)
router.get('/:id', getBlog) //get por que 'trae', especificamos id por que es concreto
router.post('/', createBlog)
router.put('/:id', updateBlog) //put por que 'coloca' una actualizacion, especificamos id por que es concreto
router.delete('/:id', deleteBlog) //delete por que 'elimina', especificamos id por que es concreto

export default router