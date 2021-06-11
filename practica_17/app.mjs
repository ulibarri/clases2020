import Express from 'express'
import Mongoose from 'mongoose'
import dotenv from 'dotenv'
import { taskRoute } from './routes/index.mjs'

// -----------------------------
//        Env config
// -----------------------------
dotenv.config({ path: 'practica_17/.env' })
const envs = process.env

// -----------------------------
//        Server config
// -----------------------------
const app = Express();
const port = envs.PORT || 3500;

// -----------------------------
//        Db config
// -----------------------------
Mongoose.connect(
  `mongodb+srv://${envs.DB_USER}:${envs.DB_PASS}@${envs.DB_HOST}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
)

// -----------------------------
//        Middlewares
// -----------------------------
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// -----------------------------
//          Routes
// -----------------------------
app.use('/tasks', taskRoute)

// -----------------------------
//        Loggers
// -----------------------------
app.use((error, _, res) => {
  res.json({ error })
})

app.listen(port, () => {
  console.log(`http://localhost:${port} is running`);
})
