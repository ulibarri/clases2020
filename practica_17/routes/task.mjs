import Express from 'express'
import { TaskController } from '#controllers/index.mjs'

const router = Express.Router()

router.get('/', TaskController.list)
router.post('/', TaskController.create)
router.get('/:id', TaskController.details)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)

export default router
