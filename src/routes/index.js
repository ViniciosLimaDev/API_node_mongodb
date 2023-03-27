import Express from "express";
import livros from "./LivrosRoutes.js";
import autores from "./AutoresRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send("Curso de node")
    })

    app.use(
        Express.json(),
        livros,
        autores
    )
}

export default routes;