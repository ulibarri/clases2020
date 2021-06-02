import mongoose from "mongoose";
import config from "./config";

/*
Este es el archivo que se utiliza en la aplicación de notas del vídeo que nos compartió como referencia
para poder conctarse a la base de datos, es necesario hacerle unos cambios que ya hice, comparto solo 
este archivo porque toda la app es mucho xd(si jala bien la app, se corre en el localhost/4000).
*/

(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://nuevo:nuevo@cluster0.rjaxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
