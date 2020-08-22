const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { User } = require('../3 - Infrastructure/db');

async function CreateUser (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
}

async function LoginUser (req, res) {

    const user = await User.findOne({where: { email: req.body.email }});
    if(user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales){
            res.json({success: createToken(user)});
        } else {
            res.json({error: 'Error en usuario y/o contraseña'})
        }
    } else {
        res.json({error: 'Error en usuario y/o contraseña'})
    }
}

async function GetUser (req, res){

    const user = await User.findOne({where: { email: req.body.email }});
    if(user){
        res.json({success: user})
    }
    else{
        res.json({error: 'Error el usuario no existe'})
    }
}

async function EditUser (req, res){
    await User.findOne({ where: { email: req.body.email } })
    .on('success', function (user) {
        // Check if record exists in db
        if (user) {
            user.update({
                username: user.username,
                password: user.password
            })
            .success(function () {
                res.json({success: 'Usuario Actualizado'})
            })
            .error(function(){
                res.json({error: 'Error el usuario no pudo ser actualizado'})
            })
        }
        else{
            res.json({error: 'Error el usuario no existe'})
        }
    })
}

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'secret-phrase');
}

module.exports = { LoginUser, CreateUser, GetUser, EditUser };

