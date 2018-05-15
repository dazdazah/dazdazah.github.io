function initMap() {
     
   var options = {
      	zoom: 13,
      	center: {lat: 40.7128, lng:-74.0060},
	}
	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);

    // Adding marker
    var marker = new google.maps.Marker({
    position: {lat: 40.7308, lng: -73.9973},
    map: map,
    title: "Wahington Sqaure Park"
    })}



// As a User
// When I view the site
// I want to see a marker on NYC

// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

    
  
