// As a User
// When I visit the site
// I expect to see the names of the all the stations

$.ajax({
 type: 'GET',
 url: 'http://api.citybik.es/citi-bike-nyc.json',
 success: function(stations) {
 console.log(stations)

   stations.forEach(function(stations) {
   $('body').append(stations.name + '<br>')
    })
 },
});

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list
var firstFifty = stations.filter(function (val) {
	return val < 51 ;
});

 or
 stations.filter(stations => stations.length = 50)

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

 stations.filter(stations => stations.free = 50)

// Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

// Unreal, Super Epic Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

