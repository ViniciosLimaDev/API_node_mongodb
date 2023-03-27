import  express from "express";
import AutorController from "../controllers/AutoresController.js";


const router = express.Router();

router
    .get("/autores", AutorController.showAutor)
    .get("/autores/:id", AutorController.showIdAutor)
    .post("/autores", AutorController.createAutor)
    .put("/autores/:id", AutorController.updateAutor)
    .delete("/autores/:id", AutorController.excluirAutor)


  export default router;