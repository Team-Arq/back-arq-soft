const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { User } = require('../3 - Infrastructure/db');

async function CreateUser(req, res) {

    const user = await User.findOne({ where: { email: req.body.email } });

    if(user){
        res.status(401).json({ error: 'Ya existe un usuario registrado con el email: ' + req.body.email })
    }
    else{
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
        res.res.status(200).json(user);
    }
}

async function LoginUser(req, res) {

    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            req.session.email = req.body.email; 
            res.status(200).json({ success: createToken(user) });
        } else {
            res.status(401).json({ error: 'Error en usuario y/o contraseña' })
        }
    } else {
        res.status(401).json({ error: 'Error en usuario y/o contraseña' })
    }
}

async function GetUser(req, res) {

    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        res.status(200).json({ success: user })
    }
    else {
        res.status(404).json({ error: 'Error el usuario no existe' })
    }
}

async function EditUser(req, res) {

    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        User.update(
            // Values to update
            {
                username:  req.body.username,
                password: req.body.password
            },
            { // Clause
                where: 
                {
                    email: req.body.email
                }
            }
        ).then(() => { res.json({ success: req.body });}
        ).catch((error) => { throw new Error(error)});
    } else {
        res.status(200).json({ error: 'Error el usuario no existe' })
    }
}

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        usuarioEmail: user.email,
        createdAt: moment().unix(),
        expiredAt: moment().add(1440, 'minutes').unix()
    }

    return jwt.encode(payload, 'secret-phrase');
}

module.exports = { LoginUser, CreateUser, GetUser, EditUser };

