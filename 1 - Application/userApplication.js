const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { User } = require('../3 - Infrastructure/db');

async function createUser (req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
}

async function loginUser (req, res) {
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

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'secret-phrase');
}

module.exports = { loginUser, createUser };

