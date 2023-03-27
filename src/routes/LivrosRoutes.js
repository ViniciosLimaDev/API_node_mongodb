import  express from "express";
import LivroController from "../controllers/LivrosController.js";


const router = express.Router();

router
    .get("/livros", LivroController.show)
    .get("/livros/busca", LivroController.showEditora)
    .get("/livros/:id", LivroController.showId)
    .post("/livros", LivroController.create)
    .put("/livros/:id", LivroController.update)
    .delete("/livros/:id", LivroController.excluir)



  export default router;