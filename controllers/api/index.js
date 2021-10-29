const router = require('express').Router();
const userRoute = require('./userRoute.js');
const eventRoutes = require('./eventRoutes.js');
const temporaryRoutes = require('./temporaryRoutes.js');


router.use('/user', userRoute);
router.use('/event', eventRoutes);
router.use('/temporary', temporaryRoutes);

module.exports = router;