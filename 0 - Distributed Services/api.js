const router = require('express').Router();

const middleware = require('./middleware');
const apiUsersController = require('./api/userController');
const apiServiceController = require('./api/serviceController');
const apiServiceTypes = require('./api/serviceTypeController');
const apiPaypalController = require('./api/paypalController');

//router.use('/appointment, middleware.checkToken, apiAppointmentController');
router.use('/users', apiUsersController);
router.use('/services', apiServiceController);
router.use('/ServiceTypes', apiServiceTypes);
router.use('/paypal', apiPaypalController);


module.exports = router;