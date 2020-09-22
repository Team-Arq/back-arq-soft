const router = require('express').Router();

const middleware = require('./middleware');
const apiUsersController = require('./api/userController');
const apiServiceController = require('./api/serviceController');
const apiServiceTypes = require('./api/serviceTypeController');

//router.use('/appointment, middleware.checkToken, apiAppointmentController');
router.use('/users', apiUsersController);
router.use('/services', apiServiceController);
router.use('/ServiceTypes', apiServiceTypes);


module.exports = router;