const knex = require("../database/connection");

class Laudo{

    async findById(id, tabela){

        try{
            let result = await knex.select(["idPaciente"]).where({idLaudos: id}).table(tabela);
            
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }

    }

    async puxarLaudos(id){
        console.log(id);
        try{
            let result = await knex.select(["idLaudos" , "data", "nameLaudo"]).where({idPaciente: id}).table("laudos");
            
            if(result.length > 0){
                return {status: true, result: result};
            }else{
                return {status: false, err: "Erro ao puxar laudos"};
            }

        }catch(err){
            console.log(err);
            //Nessa linha não tem "return undefined"
            return {status: false, err: "Erro ao consultar o banco de dados em busca de laudos"};
        }

    }

    async deleteLaudo(id){

        var laudo = await this.findById(id, "laudos");

        if(laudo != undefined){
            try{
                await knex.delete().where({idLaudos: id}).table("laudos");
                return {status: true};
            }catch(err){
                return {status: false, err: "Ocorreu um erro durante o delete"}
            }
        }else{
            return {status: false, err: "O laudo não existe por isso não pode ser deletado"}
        }

    }


    async addLaudo(idPaciente){

        // Pegar ID do MedicoResp

    }


}

module.exports = new Laudo()