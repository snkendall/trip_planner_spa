const Sequelize = require('sequelize');
const {STRING, ARRAY, INTEGER, DOUBLE} = Sequelize;
const db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

const Place = db.define('place', {
    address: {
        type: STRING
    },
    city: {
        type: STRING
    },
    state: {
        type: STRING
    },
    phone: {
        type: STRING
    },
    location: {
        type: ARRAY(DOUBLE(3))
    }
})

const Hotel = db.define('hotel', {
    name: {
        type: STRING
    },
    num_stars: {
        type: DOUBLE(1, 5)
    },
    amenities: {
        type: STRING
    }
})

const Activity = db.define('activity', {
    name: {
        type: STRING
    },
    age_range: {
        type: STRING
    }
})

const Restaurant = db.define('restaurant', {
    name: {
        type: STRING
    },
    cuisine: {
        type: STRING
    },
    price: {
        type: INTEGER
    }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = { db: db, Place: Place, Hotel: Hotel, Activity: Activity, Restaurant: Restaurant }
