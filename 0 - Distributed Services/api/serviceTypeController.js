const router = require('express').Router();

const { CreateTypeService, GetTypeService, EditTypeService, DeleteTypeService } = require('../../1 - Application/serviceTypeApplication')
const { check, validationResult } = require('express-validator');


router.post('/create-type-service', [
    check('nameTypeService', 'El nombre del tipo de servicio es obligatorio').not().isEmpty(),
    check('description', 'La descripcion del tipo de servicio es obligatoria').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errores: errors.array() }) }
    await CreateTypeService(req, res);
});

router.get('/get-types-services', [], async (req, res) => {
    await GetTypeService(req, res);
})

router.put('/edit-types-service', [
    check('nameTypeService', 'El nombre del tipo es obligatoria').not().isEmpty(),
    check('description', 'La descripcion del tipo es obligatoria').not().isEmpty()
], async (req, res) => {
    await EditTypeService(req, res);
})

router.delete('/delete-type-service', [
    check('idTypeService', 'Debe enviar el id del tipo servicio para poder eliminarlo').not().isEmpty(),
], async (req, res) => {
    await DeleteTypeService(req, res);
})

module.exports = router;