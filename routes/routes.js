import express from 'express'
import { getAllLibros, getLibro, creatLibro, updatedLibro, deleteLibro } from '../controllers/LibroController.js'
const router = express.Router()

router.get('/', getAllLibros)
router.get('/:id', getLibro)
router.post('/', creatLibro)
router.put('/:id', updatedLibro)
router.delete('/:id', deleteLibro)

export default router
