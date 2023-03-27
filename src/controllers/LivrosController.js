import livros from "../models/Livro.js";

class LivroController {

    static show = async (req, res) => {
        const Mlivros = await livros.find()
        .populate('autor')
        .exec()
        return res.status(200).json(Mlivros)
    }

    static showId = async (req, res) => {
        try {
            let {id} = req.params;
            const Mlivros = await livros.findById(id)
            .populate('autor', 'nome')
            .exec()
            return res.status(200).json(Mlivros)
        } catch (err) {
            return res.status(400).send({message: `${err} - O id livro do não foi localizado`})
        }
    }

    static create = async (req, res) => {
        try {
            await livros.create(req.body)
            return res.status(201).send({message:'Livro Cadastrado com sucesso!'});
        }catch (err) {
            return res.status(500).send({message: `${err} falha ao criar seu livro campo não preenchido`})
        }
    }

    static update = async (req,res) => {
        try {
            let {id} = req.params;
            await livros.findByIdAndUpdate(id, req.body)
            return res.status(200).send({message:"Livro alterado com sucesso!!!"});
        } catch (err) {
            return res.status(500).send({message: `${err} falha ao atualizar o livro`})
        }
    }

    static excluir = async (req, res) => {
        try {
            let {id} = req.params;
            await livros.findByIdAndDelete(id)
            return res.status(200).send({message:'Livro excluido com sucesso!'});
        } catch (err) {
            return res.status(500).send({message: `${err} falha ao exluir livro`})
        }
    }

    static showEditora = async (req,res) => {
        const editora = req.query.editora

        const Mlivros = await livros.find({'editora': editora}, {},)
        return res.status(200).json(Mlivros)

    }


}

export default LivroController;