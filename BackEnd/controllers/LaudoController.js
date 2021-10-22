//const knex = require("../database/connection");
const Laudo = require("../models/Laudo");

class LaudoController{

    async remove(req, res){

        let id = req.params.id; //Nessa linha não tem "await"

        let result = await Laudo.deleteLaudo(id);

        if(result.status){
            res.status(200);
            res.send("Tudo ok!");
        }else{
            res.status(406);
            res.send(result.err);
        }


    }

}

module.exports = new LaudoController()