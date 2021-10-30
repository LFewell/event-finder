const router = require('express').Router();
const { Temp } = require('../../models');

router.post('/', async (req, res) => {
    console.log('tempRequestBody', req.body);
    try {
        const temp = await Temp.findOne({
            where: {
                tempID: req.body.temp.id,
            }
        })

        if(!temp) {
            const newTempEvent = Temp.create({
                ...req.body
            });

            res.json(newTempEvent);
        } else {
            res.json(temp);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})