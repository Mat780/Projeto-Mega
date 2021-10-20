const jwt = require("jsonwebtoken");
const secret = "fhuidshfhufgdejifpgfgfgnjfgruhifjrolr"

module.exports = function(req, res, next){

    const authToken = req.headers['authorization']

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        let token = bearer[1];

        try{
            var decoded = jwt.verify(token, secret);
            console.log(decoded);
            if(decoded.role == 2){
                next();
            }else{
                res.status(403);
                res.send("Você não tem permissão para isso!")
                return;
            }

        }catch(err){
            res.status(403);
            res.send("Você não está autenticado");
        }
    

    }else{
        res.status(403);
        res.send("Você não está autenticado");
        return;
    }

}