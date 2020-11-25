const { Payment } = require('../3 - Infrastructure/db');

async function createPayment(req, res) {
    const payment = await Payment.create(req.body);
    res.json(payment);
}
async function GetAllPayment(req, res) {

    const payment = await Payment.findAll({where:{id_user:req.query.iduser}});
    if (payment) {
        res.json({ success: payment })
    }
    else {
        res.json({ error: 'Error al obtener el historial de  pagos' })
    }
}

module.exports = { createPayment, GetAllPayment };