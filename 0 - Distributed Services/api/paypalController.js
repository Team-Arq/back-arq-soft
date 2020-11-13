const router = require('express').Router();

const { GetTokenPaypal, GeneratePayOut } = require('../../1 - Application/paypalApplication')

router.get('/paypal-token', async (req, res) => {
    await GetTokenPaypal(req, res);
});

router.post('/payout', async (req, res) => {
    await GeneratePayOut(req, res);
});

module.exports = router;