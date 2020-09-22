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

    const service = await Service.findOne({ where: { idService: req.body.idService } });

    if (service) {
        Service.update(
 
            {
                description: req.body.description,
                type: req.body.type
            },
            { 
                where:
                {
                    idService: req.body.idService
                }
            }
        ).then(() => { res.json({ success: req.body }); }
        ).catch((error) => { throw new Error(error) });
    } else {
        res.json({ error: 'El servicio no existe' })
    }
}

async function DeleteService(req, res) {

    const service = await Service.findOne({ where: { idService: req.body.idService } });

    if (service) {

        service.destroy({
            where: {
                idService: req.body.idService
            }

        }).then(() => { res.json({ success: 'Se elimino correctamente el servicio' }); }
        ).catch((error) => { throw new Error(error) });

    } else {
        res.json({ error: 'El servicio no existe' })
    }
}

module.exports = { CreateService, GetService, EditService, DeleteService };