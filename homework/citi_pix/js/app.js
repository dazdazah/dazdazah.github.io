// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

// $("#city-type").change(changeCity);

// function changeCity() {
//   var userSelection = $("#city-type").val();

//   $("   ").addClass(userSelection);
// }

$("#city-type").change(changeCity);

function changeCity() {
  var userSelection = $("#city-type").val();
  if (userSelection === nyc){
  	 $("body").addClass("nyc")
  } else if (userSelection === sf){
  	 $("body").addClass("sf")
  } else if(userSelection === la){
  	 $("body").addClass("la")
  }

}
