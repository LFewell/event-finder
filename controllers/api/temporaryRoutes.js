// do stuff here
const router = require('express').Router();

const { Temporary } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log("This one?", req.body);
        const newTemp = await Temporary.create({
            //id, tempEmail, tempPassword, geoLat, geoLon
            tempEmail: req.body.email,
            tempPassword: req.body.password,
            // geoLat: req.body.DERP,
            // geoLon: req.body.DERP,
        });
        console.log("Temporary Data", newTemp);
        if (newTemp) {
            await req.session.save(() => {
                req.session.tempEmail = newTemp.email;
                req.session.tempPassword = newTemp.password;
                // req.session.geoLat = newTemp.DERP;
                // req.session.geoLon = newTemp.DERP;
                req.session.loggedIn = true;

                res.json(newTemp);
            })
        };
    } catch (err) {
        res.status(500).json(err);
    }
});

 
//  module.exports = router;