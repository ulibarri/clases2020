import { TaskModel } from '#models/index.mjs'
import { compact } from '#utils/object.mjs'
import { isValidId } from '#utils/models.mjs'

//? GET: /tasks
const taskList = async(_, res) => {
  const tasks = await TaskModel.find({})
  console.log(tasks)
  res.json({ tasks })
}

//? POST: /tasks
const taskCreation = async(req, res) => {
  const args = taskParams(req.body)
  const task = new TaskModel(args)

  try {
    await task.save()

    res.json({ task })
  } catch (error) {
    res.status(500).json({ error })
  }
}

//? GET: /tasks/:id
const taskDetails = async(req, res) => {
  const id = req.params.id || ''
  const task = await TaskModel.findById(id)

  res.json({ task })
}

//? PUT: /tasks/:id
const taskUpdate = async(req, res) => {
  const taskId = req.params.id
  const args = compact(taskParams(req.body))
  const task = await TaskModel.findByIdAndUpdate(taskId, args)
  await task.save()

  res.json({ task })
}

//? DELETE: /tasks/:id
const taskDelete = async(req, res) => {
  const taskId = req.params.id
  if(!isValidId(taskId)) return throwTaskError()

  const task = await TaskModel.findByIdAndDelete(taskId)

  if (!task) return throwTaskError()

  res.json({ task })
}

// ----------------
//      PRIVATE
// ----------------
const taskParams = ({ title, description }) => ({ title, description })

const throwTaskError = res => res.status(404).json({ error: "No task found" })

export default { list: taskList, details: taskDetails, create: taskCreation,
                 update: taskUpdate, delete: taskDelete }
