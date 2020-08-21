const router = require('express').Router();

const middleware = require('./middleware');
const apiUsersRouter = require('./api/userController');

//router.use('/appointment, middleware.checkToken, apiAppointmentRouter');
router.use('/users', apiUsersRouter);

module.exports = router;