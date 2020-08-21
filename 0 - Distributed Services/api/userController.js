const router = require('express').Router();

const { loginUser, createUser } = require('../../1 - Application/userApplication');
const { check, validationResult } = require('express-validator');

router.post('/register',[
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El formato del email es incorrecto').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){ return res.status(422).json({errores: errors.array()}) }
    await createUser(req, res);    
});

router.post('/login', async (req, res) => {
    await loginUser(req, res); 
})

module.exports = router;