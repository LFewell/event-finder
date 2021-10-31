const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoute = require('./homePage.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;