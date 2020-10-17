const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

const { Service } = require('../3 - Infrastructure/db');

async function CreateService(req, res) {
    const service = await Service.create(req.body);
    res.json(service);
}

async function GetService(req, res) {

    const services = await Service.findAll();
    if (services) {
        res.json({ success: services })
    }
    else {
        res.json({ error: 'Error al obtener Servicios' })
    }
}

async function EditService(req, res) {

    const service = await Service.findOne({ where: { id: req.body.id} });

    if (service) {
        Service.update(
 
            {
                name: req.body.name,
                typeService: req.body.type,
                description: req.body.description,
                price: req.body.price
            },
            { 
                where:
                {
                    id: req.body.id
                }
            }
        ).then(() => { res.json({ success: req.body }); }
        ).catch((error) => { throw new Error(error) });
    } else {
        res.json({ error: 'El servicio no existe' })
    }
}

async function DeleteService(req, res) {

    const service = await Service.findOne({ where: { id: req.query.idService } });

    if (service) {

        service.destroy({
            where: {
                id: req.query.idService
            }

        }).then(() => { res.json({ success: 'Se elimino correctamente el servicio' }); }
        ).catch((error) => { throw new Error(error) });

    } else {
        res.json({ error: 'El servicio no existe' })
    }
}

module.exports = { CreateService, GetService, EditService, DeleteService };