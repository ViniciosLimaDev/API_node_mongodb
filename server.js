import app from "./src/app.js";

const port = process.env.POT || 3000;

app.listen(port, () => {
    console.log(`Servvidor escutando na porta em  http://localhost:${port}`)
})