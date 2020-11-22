const { Payment } = require('../3 - Infrastructure/db');

async function createPayment(req, res) {
    const typeService = await ServiceType.create(req.body);
    res.json(typeService);
}
async function GetAllPayment(req, res) {

    const payment = await Payment.findAll();
    if (payment) {
        res.json({ success: payment })
    }
    else {
        res.json({ error: 'Error al obtener el historial de  pagos' })
    }
}

module.exports = { createPayment, GetAllPayment };