const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

const { ServiceType } = require('../3 - Infrastructure/db');

async function CreateTypeService(req, res) {
    const typeService = await ServiceType.create(req.body);
    res.json(typeService);
}

async function GetTypeService(req, res) {

    const typeServices = await ServiceType.findAll();
    if (typeServices) {
        res.json({ success: typeServices })
    }
    else {
        res.json({ error: 'Error al obtener el listado de servicios' })
    }
}


async function EditTypeService(req, res) {

    const typeService = await ServiceType.findOne({ where: { idTypeService: req.body.idTypeService } });

    if (typeService) {
        typeService.update(

            {
                nameTypeService: req.body.nameTypeService,
                description: req.body.description
            },
            {
                where:
                {
                    idTypeService: req.body.idTypeService
                }
            }
        ).then(() => { res.json({ success: req.body }); }
        ).catch((error) => { throw new Error(error) });
    } else {
        res.json({ error: 'El tipo de servicio no existe'})
    }
}

async function DeleteTypeService(req, res) {

    const typeService = await ServiceType.findOne({ where: { idTypeService: req.body.idTypeService } });

    if (typeService) {

        typeService.destroy({
            where: {
                idTypeService: req.body.idTypeService
            }

        }).then(() => { res.json({ success: 'Se elimino correctamente el tipo de servicio' }); }
        ).catch((error) => { throw new Error(error) });

    } else {
        res.json({ error: 'El tipo de servicio no existe' })
    }
}

module.exports = { CreateTypeService, GetTypeService, EditTypeService, DeleteTypeService };