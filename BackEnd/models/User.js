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
                // FALTA MUDAR AQUI: RAUL
                return undefined;
            }

        }catch(err){
            console.log(err);
            //FALTA MUDAR AQUI: RAUL
            return undefined;
        }

    }

    async findByCPF(cpf){

        if(cpf.length == 11){
            try{
                let result = await knex.select(["id", "nome", "cpf", "senha", "role"]).where({cpf: cpf}).table("usuario");
                if(result.length > 0){
                    result = result[0];
                    return {status: true, result};
                }else{
                    return {status: false, err: "Erro usuario não existe"};
                }
    
            }catch(err){
                console.log(err);
                return {status: false, err: "Erro ao achar o usuario"};
            }
        }else{
            return {status: false, err: "Este numero não é um CPF"}
        }

    }

    async testaCPF(strCPF) {
        let Soma;
        let Resto;
        let i;
        Soma = 0;
        
        // if (
        //     !strCPF ||
        //     strCPF.length != 11 ||
        //     //strCPF == "00000000000" ||
        //     // strCPF == "11111111111" ||
        //     // strCPF == "22222222222" ||
        //     // strCPF == "33333333333" ||
        //     // strCPF == "44444444444" ||
        //     // strCPF == "55555555555" ||
        //     // strCPF == "66666666666" ||
        //     // strCPF == "77777777777" ||
        //     // strCPF == "88888888888" ||
        //     // strCPF == "99999999999" 
        // ){
        //     return false
        // }

        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;

        return true;
    
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
                            console.log(role);
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
            console.log(result);
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
    async update(id ,cpf, name, password, data) {
        //let user = await this.findById(id);
        let user = await this.findByCPF(cpf).catch(err => {
            return {status: false, err: err};
        });

        if(user != undefined){
            var editUser = {};
            user = user.result;
            //ASSIM QUE PEGAR O ID HABILITAR
            /*
            if(cpf != undefined && cpf !=user.cpf){
                let isNewCpf = await this.findCPF(cpf);
                if(!isNewCpf){
                    user.cpf = cpf;
                }
            }
            */

            if(name != undefined && name != user.name){
                editUser.nome = name;
            }

            if(password != undefined){
                var password = await bcrypt.hash(password, 10);
                editUser.senha = password;
            }
            
            try{
                await knex.update(editUser).where({id: user.id}).table("usuario").catch(err => {
                    console.log(err);
                    return {status: false, err: "Erro ao atualizar tabela usuario"};
                });
                
                let role = await knex.select("role").table("usuario").where({id: user.id}).catch(err => {
                    console.log(err);
                    return {status: false, err: "Erro ao pegar a role de usuario"}
                })

                role = role[0].role;
                role = 2;

                if(role == 1 || role == 2) {
                    await knex.update({especialidade: data}).where({idUser: user.id}).table("medico").then(d =>{
                        console.log(d);
                    }).catch( err => {
                        console.log(err);
                        return {status: false, err: "Erro ao atualizar tabela medico"};
                    });
                }
                
                return {status: true}
            }catch(err){
                console.log(err);
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
            let result = await knex.select(["paciente.idPaciente","usuario.cpf", "usuario.nome"])
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
            let result = await knex.select(["medico.idUser","usuario.cpf", "usuario.nome"])
                                .table("medico")
                                .innerJoin("usuario", "usuario.id", "medico.idUser");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async medicoConfirm(data){
        try{
            var result = await knex.select(["medico.idMedico"])
                .where({nome: data})
                .table("usuario")
                .innerJoin("medico", "medico.idUser", "usuario.id")
            
        }catch(err){
            console.log(err);
            return {status: false, err: "Erro ao achar o medico informado"};
        }

        let idMed = (result[0].idMedico);

        return {status: true, idMed}
        
    }

}

module.exports = new User();