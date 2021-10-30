const router = require('express').Router();

const { Event } = require('../../models');

router.post('/', async (req, res) => {
    console.log('requestBodyEvent', req.body);
    const body = req.body;
    try {
        const event = await Event.findOne({
            where: {
                eventID: req.body.eventID,
            },
        });

        if (!event) {
            const newEvent = Event.create({
                ...body, userId: req.session.userId
            });

            res.json(newEvent);
        } else {
            res.json(event);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})