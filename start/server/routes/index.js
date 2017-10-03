const router = require('express').Router();
const {Hotel, Restaurant, Activity} = require('../../models');

router.get('/api', function(req, res, next){
   Promise.all([Hotel.findAll(),
        Restaurant.findAll(),
         Activity.findAll()])
    .then(attractions => {
        const [hotel, restaurant, activity] = attractions;
        res.json({
            hotels: hotel,
            restaurants: restaurant,
            activities: activity
        })
    })
    .catch(next);
});
module.exports = router;
