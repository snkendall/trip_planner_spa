'use strict'

const router = require('express').Router();
const {Hotel, Restaurant, Activity} = require('../../models');

router.get('/api', function(req, res, next){
   Promise.all([Hotel.findAll({ include: [{ all: true }] }),
        Restaurant.findAll({ include: [{ all: true }] }),
         Activity.findAll({ include: [{ all: true }] })])
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
