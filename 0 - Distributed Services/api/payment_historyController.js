const router = require('express').Router();

const { createPayment, GetAllPayment } = require('../../1 - Application/payment_historyApplication')
const { check, validationResult } = require('express-validator');

router.post('/create-payment', [
    check('description', 'La descripcion del pago res obligatoria').not().isEmpty()
], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.status(422).json({ errores: errors.array() }) }
        await createPayment(req, res);
});

router.get('/get-payments', [], async (req, res) => {
        await GetAllPayment(req, res);
})

module.exports=router;