const router = require('express').Router();

const { favEvent } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const event = await favEvent.findOne({
            where: {
                eventID: req.body.eventID,
            },
        });

        if (!event) {
            const newEvent = favEvent.create({

            });

            res.json(newEvent);
        } else {
            
        }
    } catch (error) {
        res.status(500).json(error);
    }
})