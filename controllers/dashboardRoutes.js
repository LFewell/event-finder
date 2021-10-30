const router = require('express').Router();
const { Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const eventData = await Event.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        const events = eventData.map((event) => event.get({ plain: true }));

        res.render('user-events', {
            layout: 'dashboard',
            events,
        });

    } catch (error) {
        res.redirect('login');
    };
});

module.exports = router;