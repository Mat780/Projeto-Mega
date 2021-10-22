//const knex = require("../database/connection");
const Laudo = require("../models/Laudo");

class LaudoController{

    async remove(req, res){

        let id = req.params.id;

        let result = await Laudo.deleteLaudo(id);

        if(result.status){
            res.status(200);
            res.send("Tudo ok!");
        }else{
            res.status(406);
            res.send(result.err);
        }


    }

    async pullLaudos(req, res){

        let { idPaciente } = req.body;

        let puxa = await Laudo.puxarLaudos(idPaciente);
        console.log(puxa.result);
        if(puxa.status){
            res.status(200);
            res.json(puxa.result);
        }else{
            res.status(404);
            res.send("Erro ao encontrar o usuario!");
        }
    }


    // FUNÇÃO PARA ADICIONAR LAUDO
    // async add(req, res){

    //     if(req.file == undefined){
    //         res.status(406);
    //         res.send("O arquivo está no formato errado, o formato correto é do tipo .pdf");
    //         return;
    //     }

    //     let {name, data, date} = req.body;
    //     console.log(name + " " + data + " " + date);
        
        
    //     let result = await Laudo.addLaudo(id)

    //     if(result.status){
    //         res.status(200);
    //         res.send("Laudo adicionado!");

    //     }else{
    //         res.status(406);
    //         res.json(result.err);
    //     }

    // }


}

module.exports = new LaudoController()