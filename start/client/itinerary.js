'use strict'

const createButton = function(li) {
  let removeButton = document.createElement('button');
  let t = document.createTextNode('x');
  removeButton.appendChild(t);
  li.appendChild(removeButton);
}

// const remove = function(elem) {
//   elem.parentNode.removeChild(elem);
//   // let parent = node.parentNode;
//   // let grandparent = parent.parentNode;
//   //   grandparent.removeChild(parent);
// };

const hotelButton = document.getElementById('hotels-add');

hotelButton.addEventListener('click', function() {
  const hotelSelect = document.getElementById('hotels-choices');
  const hotelSelectId = hotelSelect.value;
  let text = document.createTextNode(hotelSelectId);
  let ul = document.getElementById('hotels-list');
  let hotelLi = document.createElement('li');
  hotelLi.append(text);
  let btn = createButton(hotelLi);
  // btn.onclick = function() {
  //   hotelLi.remove();
  // };
  ul.append(hotelLi);
})

const restaurantButton = document.getElementById('restaurants-add');

restaurantButton.addEventListener('click', function() {
  const restaurantSelect = document.getElementById('restaurants-choices');
  const restaurantSelectId = restaurantSelect.value;
  let text = document.createTextNode(restaurantSelectId);
  let ul = document.getElementById('restaurants-list');
  let restaurantLi = document.createElement('li');
  restaurantLi.append(text);
  ul.append(restaurantLi);
})

const activityButton = document.getElementById('activities-add');

activityButton.addEventListener('click', function() {
  const activitySelect = document.getElementById('activities-choices');
  const activitySelectId = activitySelect.value;
  let text = document.createTextNode(activitySelectId);
  let ul = document.getElementById('activities-list');
  let activityLi = document.createElement('li');
  activityLi.append(text);
  ul.append(activityLi);
})

module.exports = itinerary;
