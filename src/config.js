// Read environment variables
import { config } from "dotenv";
config();

const configurations = {
  PORT: process.env.PORT || 4000,
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "notes-app",
  MONGODB_URI: `mongodb+srv://UsuarioGabino:gabino1234@cluster0.k0b4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};

export default configurations;
