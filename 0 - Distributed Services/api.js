const router = require('express').Router();

const middleware = require('./middleware');
const apiUsersController = require('./api/userController');

//router.use('/appointment, middleware.checkToken, apiAppointmentController');
router.use('/users', apiUsersController);

module.exports = router;