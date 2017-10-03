const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic25rZW5kYWxsIiwiYSI6ImNqOGJyMHNyYjAxMGMzM29rY3pjZ3FjZmkifQ.6Cdj5EK8VDNRkKfZrZ3YuA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', [-74.009, 40.705]);
marker.addTo(map);
