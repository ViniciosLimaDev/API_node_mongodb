import autores from "../models/Autor.js";

class AutorController {

    static showAutor = async (req, res) => {
        const Mautores = await autores.find()
        return res.status(200).json(Mautores)
    }

    static showIdAutor = async (req, res) => {
        try {
            let {id} = req.params;
            const Mautores = await autores.findById(id)
            return res.status(200).json(Mautores)
        } catch (err) {
            return res.status(400).send({message: `${err} - O id Autor do não foi localizado`})
        }
    }

    static createAutor = async (req, res) => {
        try {
            await autores.create(req.body)
            return res.status(201).send({message:'Autor Cadastrado com sucesso!'});
        }catch (err) {
            return res.status(500).send({message: `${err} falha ao criar seu Autor campo não preenchido`})
        }
    }

    static updateAutor = async (req,res) => {
        try {
            let {id} = req.params;
            await autores.findByIdAndUpdate(id, req.body)
            return res.status(200).send({message:"Autor alterado com sucesso!!!"});
        } catch (err) {
            return res.status(500).send({message: `${err} falha ao atualizar o Autor`})
        }
    }

    static excluirAutor = async (req, res) => {
        try {
            let {id} = req.params;
            await autores.findByIdAndDelete(id)
            return res.status(200).send({message:'Autor excluido com sucesso!'});
        } catch (err) {
            return res.status(500).send({message: `${err} falha ao exluir Autor`})
        }
    }


}

export default AutorController;