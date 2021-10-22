const User = require("../models/User");
const PasswordToken = require("../models/PasswordToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator")

const secret = "fhuidshfhufgdejifpgfgfgnjfgruhifjrolr"

class UserController{

    async index(req, res){
        let users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        let id = req.params.id; //Nessa linha não tem "await"
        let user = await User.findById(id, "usuario");

        if(user == undefined){
            res.status(404);
            res.json({err: "Usuario não encontrado"});
        }else{
            res.status(200);
            res.json(user);
        }
    }

    async createNewUser(req, res){
        var {cpf , name, password, role, data} = req.body;
        var dataOk = 0;

        if(name == undefined){
            res.status(400);
            res.json({err: "Nome não inserido"});
            return;
        }

        if(password == undefined){
            res.status(400);
            res.json({err: "Senha não foi definida"})
            return;
        }

        if(role == undefined){
            role = 0;
        }

        if(data == undefined){
            if(role == 0){
                res.status(400);
                res.json({err: "Medico responsável não foi definido"});
            }else{
                res.status(400);
                res.json({err: "Especialidade não foi definida"});
            }
            return;
        }else{
            console.log(role);
            if(role == 0){
                let isDataOk = await User.medicoConfirm(data);
                dataOk = isDataOk.idMed;

                if(!isDataOk.status){
                    res.status(400);
                    res.json({err: "O médico não existe"})
                    return;
                }
            }else if(role == 1){
                dataOk = data;
            }
            
        }

        let cpfExists = await User.findCPF(cpf);

        if(cpfExists){
            res.status(406);
            res.json({err: "O CPF já está cadastrado"});
            return;
        }
        let isCpfValid = await User.testaCPF(cpf).catch(err =>{
            console.log(err)
        })
            
        if(!isCpfValid){
            res.status(400);
            res.json({err: "CPF inválido"});
            return;
        }

        await User.new(cpf, password, name, role, dataOk);

        res.status(200);
        res.json("Tudo Ok");

    }

    async edit(req, res){
        let {id ,name, cpf, password, data} = req.body;
        let result = await User.update(id ,cpf, name, password, data);
        if(result != undefined){
            if(result.status){
                res.status(200);
                res.send("Tudo Ok!");
            }else{
                res.status(406);
                res.send(result.err);
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor");
        }

    }

    async remove(req, res){
        let id = req.params.id; //Nessa linha não tem "await"

        let result = await User.deleteUser(id);

        if(result.status){
            res.status(200);
            res.send("Tudo ok!");
        }else{
            res.status(406);
            res.send(result.err);
        }

    }

    async recoverPassword(req, res){
        var cpf = req.body.cpf; //Nessa linha não tem "await"
        let result = await PasswordToken.create(cpf);

        if(result.status){
            res.status(200);
            res.send("" + result.token);
            // Nodemail PEGAR DAS AULAS

        }else{
            res.status(406);
            res.send(result.err);
        }
    }

    async changePassword(req, res){
        let token = req.body.token; //Nessa linha não tem "await"
        let password = req.body.password; //Nessa linha não tem "await"

        let isTokenValid = await PasswordToken.validate(token);
        if(isTokenValid.status){

            await User.changePassword(password, isTokenValid.token.user_id);

            try{
                await PasswordToken.setUsed(token);
            }catch(err){
                console.log(err);
                res.status(406);
                res.send("O Token ao ser colocado como usado, acabou dando algum tipo de erro");
            }
            
            res.status(200);
            res.send("Senha Alterada");

        }else{
            res.status(406);
            res.send("Token Inválido");
        }
    }

    async login(req, res){
        let {cpf, password} = req.body;

        let user = await User.findByCPF(cpf);

        if(user.status){
            user = user.result;

            let resultado = bcrypt.compare(password, user.senha);

            if(resultado){
                let token = jwt.sign({cpf : user.cpf, role: user.role}, secret);
                res.status(200);
                res.json({token: token, role: user.role});

            }else{
                res.status(406);
                res.send("Senha incorreta");
            }
        }else{
            res.status(406);
            res.json({status: false, err: user.err});
        }
    }

    async pullPacientes(req, res){

        let pacientes = await User.pullPacientes();

        if(pacientes.length > 0){
            res.status(200);
            res.json(pacientes);
        }else{
            res.status(404);
            res.send("Não foi encontrado nenhum paciente");
        }

    }

    async pullMedicos(req, res){

        let medicos = await User.pullMedicos();

        if(medicos.length > 0){
            res.status(200);
            res.json(medicos);
        }else{
            res.status(404);
            res.send("Não foi encontrado nenhum paciente");
        }

    }

    async validate(req, res){
        res.status(200);
        res.send("Passou na rota");
    }

}

module.exports = new UserController();