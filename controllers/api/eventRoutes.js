const router = require('express').Router();

const { Event } = require('../../models');

router.post('/', async (req, res) => {
    console.log('requestBodyEvent', req.body);
    try {
        const event = await Event.findOne({
            where: {
                eventID: req.body.eventID,
            },
        });

        if (!event) {
            const newEvent = Event.create({
                ...req.body
            });

            res.json(newEvent);
        } else {
            
        }
    } catch (error) {
        res.status(500).json(error);
    }
})