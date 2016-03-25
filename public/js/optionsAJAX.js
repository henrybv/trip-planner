$(document).ready(function() {



$.get('/api/restaurants', function(restaurants) {
  restaurants.forEach(function(restaurant) {
      $("<option>" + restaurant.name + "</option>").appendTo("#restaurant-choices");
  });
})
.fail(console.error.bind(console));

$.get('/api/activities', function(activities) {
        activities.forEach(function(activity) {
            $("<option>" + activity.name + "</option>").appendTo("#activity-choices");
        });
    })
    .fail(console.error.bind(console));

$.get('/api/hotels', function(hotels) {
        console.log("fdsajkfjoejwaofjdlksajfkldjafiojeoif");
        hotels.forEach(function(hotel) {
            console.log("INSIDE HOTEL.FOREACH");
            $("<option>" + hotel.name + "</option>").appendTo("#hotel-choices");
        });
    })
    .fail(console.error.bind(console));

});