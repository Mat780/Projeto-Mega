const knex = require("../database/connection");
const bcrypt = require("bcrypt");

class User{

    async findAll(){

        try{
            let result = await knex.select(["id", "nome", "cpf"]).table("usuario");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }

    }

    async findById(id, tabela){

        try{
            let result = await knex.select(["id", "nome", "cpf"]).where({id: id}).table(tabela);
            
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

    async findByCPF(cpf){

        if(cpf.length == 11){
            try{
                let result = await knex.select(["id", "nome", "cpf", "senha", "role"]).where({cpf: cpf}).table("usuario");
                if(result.length > 0){
                    return result[0];
                }else{
                    return undefined;
                }
    
            }catch(err){
                console.log(err);
                return undefined;
            }
        }else{
            return {status: false, err: "Este numero não é um CPF"}
        }

    }


    async new(cpf, password, name, role, data){

        try{

            var password = await bcrypt.hash(password, 10);

            let result = await this.findCPF(cpf);
                    if(!result){
                        await knex.insert({cpf, senha:password, nome:name, role: role}).table("usuario").catch(err =>{
                            console.log(err);
                            return {status: false, err: "Erro ao cadastrar usuario"};
                        });

                        await knex.select('id').where('cpf', cpf).table("usuario").then(dataIn =>{

                            if(role == 0){
                                knex.insert({idUser: dataIn[0].id, medicoResp: data}).table("paciente").then(d =>{
                                    console.log(d);
                                }).catch(err =>{
                                    console.log(err);
                                    return {status: false, err: "Erro ao cadastrar paciente"};
                                });
                            } else if(role == 1){
                                knex.insert({idUser: dataIn[0].id, especialidade: data}).table("medico").then(d =>{
                                    console.log(d);
                                }).catch(err =>{
                                    console.log(err);
                                    return {status: false, err: "Erro ao cadastrar médico"};
                                });
                            } else if(role == 2){
                                knex.insert({idUser: dataIn[0].id, especialidade: data}).table("administrador").then(d =>{
                                    console.log(d);
                                }).catch(err =>{
                                    console.log(err);
                                    return {status: false, err: "Erro ao cadastrar administrador"};
                                });
                            }

                        }).catch(err =>{
                            console.log(err);
                        })
    

                    }else{
                        return {status: false, err: "O CPF já está cadastrado"}
                    }

        }catch(err){
            console.log(err);
        }

    }

    async findCPF(cpf){

        try{
            let result = await knex.select("*").from("usuario").where({cpf: cpf});

            if(result.length > 0){
                return true;
            }else{
                return false;
            }

        }catch(err){
            console.log(err);
            return false;
        }

    }

    
    // Lembrar de no frontEnd puxar o id antes de qq coisa
    async update(id, cpf, name, password) {
        var user = await this.findById(id, "usuario");

        if(user != undefined){

            var editUser = {};

            if(cpf != undefined){
                if(cpf != user.cpf){
                    let result = await this.findCPF(cpf);
                    if(!result){
                        editUser.cpf = cpf;
                    }else{
                        return {status: false, err: "O CPF já está cadastrado"}
                    }
                }
            }

            if(name != undefined){
                if(name != user.name){
                    editUser.nome = name;
                }
            }

            if(password != undefined){
                var password = await bcrypt.hash(password, 10);
                editUser.senha = password;
            }

            try{
                await knex.update(editUser).where({id: id}).table("usuario");
                return {status: true}
            }catch(err){
                return {status: false, err: "O usuario não existe"};
            }

        } else {
            return {status: false, err: "O usuario não existe"};
        }

    }

    async deleteUser(id){
        var user = await this.findById(id, "usuario");

        if(user != undefined){
            try{
                await knex.delete().where({id: id}).table("usuario");
                return {status: true};
            }catch(err){
                return {status: false, err: "Ocorreu um erro durante o delete"}
            }
        }else{
            return {status: false, err: "O usuário não existe por isso não pode ser deletado"}
        }
    }

    async changePassword(newPassword, id){
        let hash = await bcrypt.hash(newPassword, 10);

        await knex.update({senha: hash}).where({id: id}).table("usuario");

    }

    async pullPacientes(){

        try{
            let result = await knex.select(["paciente.medicoResp", "paciente.idUser", "usuario.cpf", "usuario.nome"])
                                .table("paciente")
                                .innerJoin("usuario", "usuario.id", "paciente.idUser");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async pullMedicos(){

        try{
            let result = await knex.select(["medico.especialidade", "medico.idUser", "usuario.cpf", "usuario.nome"])
                                .table("medico")
                                .innerJoin("usuario", "usuario.id", "medico.idUser");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

}

module.exports = new User();