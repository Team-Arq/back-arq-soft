const router = require('express').Router();

const { CreateService, GetService, EditService, DeleteService } = require('../../1 - Application/serviceApplication')
const { check, validationResult } = require('express-validator');


router.post('/create-service',[
    check('name', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('description', 'La descripcion del servicio es obligatoria').not().isEmpty(),
    check('typeService', 'Debe terner un tipo de servicio').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){ return res.status(422).json({errores: errors.array()}) }
    await CreateService(req, res);    
});

router.get('/get-services', [],async (req, res) => {
    await GetService(req, res); 
})

router.put('/edit-service', [
    check('description', 'La descripcion es obligatoria').not().isEmpty(),
    check('typeService', 'El tipo de servicio es obligatorio').not().isEmpty(),
], async (req, res) => {
    await EditService(req, res); 
})

router.delete('/delete-service', [
    check('idService', 'Debe enviar el id del servicio para poder eliminarlo').not().isEmpty(),
], async (req, res) => {
    await DeleteService(req, res); 
})

module.exports = router;