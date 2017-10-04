'use strict';

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');
const itinerary = require('./itinerary.js');
// const fetchStuff = require('./fetch.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic25rZW5kYWxsIiwiYSI6ImNqOGJyMHNyYjAxMGMzM29rY3pjZ3FjZmkifQ.6Cdj5EK8VDNRkKfZrZ3YuA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);

// const results = fetchStuff();
//   console.log(results);
fetch('/api')
.then(result => result.json())
.then(data => {
  const {hotels, restaurants, activities} = data;
  const hotelParent = document.getElementById('hotels-choices');
  hotels.forEach(function(hotel) {
    let hotelOption = new Option(hotel.name);
    hotelParent.append(hotelOption);
  })
  const restaurantParent = document.getElementById('restaurants-choices');
  restaurants.forEach(function(restaurant) {
    let restaurantOption = new Option(restaurant.name);
    restaurantParent.append(restaurantOption);
  })
  const activityParent = document.getElementById('activities-choices');
  activities.forEach(function(activity) {
    let activityOption = new Option(activity.name);
    activityParent.append(activityOption);
  })
})
.catch(console.error)
