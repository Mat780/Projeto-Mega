const express = require("express")
const cors = require("cors");
const multer = require("multer");
const router = express();

router.use(cors());

const UserController = require("../controllers/UserController");
const LaudoController = require("../controllers/LaudoController");
const adminAuth = require("../middleware/admAuth");
const medicoAuth = require("../middleware/medAuth");
const pacienteAuth = require("../middleware/pacienteAuth");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './pdfs');
    },
    filename: (req, file, cb) =>{
        let ts = Date.now();

        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();

        cb(null, (date + '-' + month + '-' + year) + '_' + file.originalname);
    }
});

var upload = multer({
    storage:fileStorageEngine,
    fileFilter: (req, file, cb) =>{
        if (file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return;
        }
    },
}).single('pdf');


router.get('/user', UserController.index);
router.get('/user/:id', UserController.findUser);
router.get('/pacientes', UserController.pullPacientes);
router.get('/medicos', UserController.pullMedicos);


router.post('/user', UserController.createNewUser); // REQ: CPF , NAME , PASSWORD
router.post('/recoverpassword', UserController.recoverPassword); // REQ JSON: CPF
router.post('/changepassword', UserController.changePassword); // REQ JSON: TOKEN, PASSWORD
router.post('/login', UserController.login); // REQ JSON: CPF, SENHA
router.post('/laudos', LaudoController.pullLaudos);

router.post('/login/adm', adminAuth, UserController.validate); 
router.post('/login/medico', medicoAuth, UserController.validate);
router.post('/login/paciente', pacienteAuth, UserController.validate);  


// try{
//     router.post('/upload', upload , LaudoController.add)
// }catch{
//     console.log("Error");
//     res.status(406);
//     res.json({message : "O arquivo está no formato errado, o formato correto é do tipo .pdf"});
// }

router.put('/user', UserController.edit); // REQ JSON: ID  OPC JSON: CPF, NAME, PASSWORD

router.delete('/user/:id', UserController.remove); // REQ: ID
router.delete('/laudo/:id', LaudoController.remove); // REQ: ID

module.exports = router;