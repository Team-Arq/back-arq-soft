const router = require('express').Router();

const middleware = require('./middleware');
const apiUsersController = require('./api/userController');
const apiServiceController = require('./api/serviceController');
const apiServiceTypes = require('./api/serviceTypeController');
const apiPaypalController = require('./api/paypalController');
const apiPaymentController = require('./api/payment_historyController');

//router.use('/appointment, middleware.checkToken, apiAppointmentController');
router.use('/users', apiUsersController);
router.use('/services', apiServiceController);
router.use('/ServiceTypes', apiServiceTypes);
router.use('/paypal', apiPaypalController);
router.use('/payment', apiPaymentController);


module.exports = router;