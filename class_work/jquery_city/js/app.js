// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked



// $('#first').click(showFirst)

// $("#bigimage").fadeIn("1000");

// function showFirst() {

//   $("#bigimage").attr("src", "img/1.jpg");


// }



$(".thumb").click(showSecond);

function showSecond(event) {
var newSrc = $(event.currentTarget).attr("src");

  $("#bigimage").attr("src", newSrc);

}



// $('#third').click(showThird)

// function showThird() {
//   $("#bigimage").attr("src", "img/3.jpg");
// }


// $('#fourth').click(showFourth)

// function showFourth() {
//   $("#bigimage").attr("src", "img/4.jpg");
// }



