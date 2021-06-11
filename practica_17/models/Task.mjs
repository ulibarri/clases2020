import Mongoose from 'mongoose'

const TaskSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
})

const Task = Mongoose.model("Task", TaskSchema)

export default Task
