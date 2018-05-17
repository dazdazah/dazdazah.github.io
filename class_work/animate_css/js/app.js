// As a User
// When I click on the button
// I want the header to bounce

// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

// As a User
// When I click the button
// I want to see the globe move to the right of the screen

// As a User
// When I click the button again
// I want the globe to return

// $("h1").click(bounce);

//   function bounce(){
//     $("h1").animate({

//     }, 2000)
//   }



$("#animate-me").click(function() {
$("h1").addClass('animated bounce infinite');	
})


$("#shrink").click(function() {
	$("img").animate({
		width: 10
	})
})





// $("#click-me").click(moveBox);

//   function moveBox(){
//     $(".box").animate({
//       top: 400
//     }, 2000)
//   }


// $("h1").click(bounce);
// 	function bounce(){
// 	$('h1').addClass('animated bounce');
// 	}
// }	
