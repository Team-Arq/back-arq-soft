const router = require('express').Router();

const { LoginUser, CreateUser, GetUser, EditUser } = require('../../1 - Application/userApplication');
const { check, validationResult } = require('express-validator');

router.post('/register',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('surname', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El formato del email es incorrecto').not().isEmpty().isEmail(),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){ return res.status(422).json({errores: errors.array()}) }
    await CreateUser(req, res);    
});

router.post('/login', async (req, res) => {
    await LoginUser(req, res); 
})

router.get('/get-user', [
    check('email', 'El email es obligatorio').not().isEmpty()
],async (req, res) => {
    if(req.session.email){
        await GetUser(req, res); 
     }else{
        res.redirect('/account/login');
     }
})

router.put('/edit-user', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty()
], async (req, res) => {
    if(req.session.email){
        await EditUser(req, res); 
     }else{
        res.redirect('/account/login');
     }
})

router.get('/logout',async (req, res) => {
    if(req.session.email){
        req.session.nombre = null;
        res.redirect('/account/login');
        await GetUser(req, res); 
     }else{
        res.redirect('/account/profile');
     }
})

module.exports = router;