// do stuff here
const router = require('express').Router();

const { Temporary } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const event = await ({
            //id, tempEmail, tempPassword, geoLat, geoLon
            // tempEmail: req.body.email,
            // tempPassword: req.body.password,
            // geoLat: req.body.DERP,
            // geoLon: req.body.DERP,
        });
        
        if (!tempEvent) {
            const tempEvent = tempEvent.create({

            });

            res.json(tempEvent);
        } else {

        }
    } catch (err) {
        res.status(500).json(err);
    }
});

