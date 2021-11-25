
const TarefasService = require('../services/tarefas.service');

const tarefasService = new TarefasService;

class TarefasController {
    getTarefas = async (req, res) => {
        const tarefas = await tarefasService.findAll();
        res.status(200).send(tarefas);
    }

    getTarefa = async (req, res) => {
        const tarefa = await tarefasService.findById(req.params.id);
        if(!tarefa) {
            res.status(404).send({error: 'Essa tarefa não foi encontrada!'})
            return;
        }
        res.status(200).send(tarefa);
    }

    createTarefa = async (req, res) => {
        if(!req.body){
            return;
        }
        await tarefasService.create(req.body)
        .then(() => {
            res.send({message: `Tarefa criada com sucesso.`})
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({message: `Erro no servidor!!`})
        })
    }

    editTarefa =  async (req, res) => {
        const idParam = req.params.id;
        const tarefaEdit = req.body;
        await tarefasService.edit(idParam, tarefaEdit)
        .then(() => {
            res.send({message: ` A tarefa foi editada com sucesso.`})
        })
        .catch(err => {
            res.status(500).send({message: 'Um erro foi encontrado'})
        })
    }

    deleteTarefa = async (req, res) => {
        const idParam = req.params.id;
        await musicasService.delete(idParam)
        .then(() => {
          res.send({message: 'Excluido com sucesso'})
        })
        .catch(err => {
          res.status(500).send({error: `Error: ${err}`});
        })
    }
}

module.exports = TarefasController;




