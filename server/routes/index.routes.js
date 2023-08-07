const router = require('express').Router();

const ducksApiRoute = require('./api/ducks.routes');

router.use('/api/ducks', ducksApiRoute);

module.exports = router;
