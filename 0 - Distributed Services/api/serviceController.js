const router = require('express').Router();

const { CreateService, GetService, EditService, DeleteService } = require('../../1 - Application/serviceApplication')
const { check, validationResult } = require('express-validator');


router.post('/create-service',[
    check('name', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('description', 'La descripcion del servicio es obligatoria').not().isEmpty(),
    check('typeService', 'Debe terner un tipo de servicio').not().isEmpty()
], async (req, res) => {
    // if(req.session.email){
        const errors = validationResult(req);
        if(!errors.isEmpty()){ return res.status(422).json({errores: errors.array()}) }
        await CreateService(req, res);  
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
});

router.get('/get-services', [],async (req, res) => {
    // if(req.session.email){
        await GetService(req, res); 
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
})

router.put('/edit-service', [
    check('description', 'La descripcion es obligatoria').not().isEmpty(),
    check('typeService', 'El tipo de servicio es obligatorio').not().isEmpty(),
], async (req, res) => {
    // if(req.session.email){
        await EditService(req, res);  
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
})

router.delete('/delete-service', [
    check('idService', 'Debe enviar el id del servicio para poder eliminarlo').not().isEmpty(),
], async (req, res) => {
    // if(req.session.email){
        await DeleteService(req, res);
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  } 
})

module.exports = router;