// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

$("#newEntry").submit(){
	var text = $("#newEntry").val();
	var output = "<th>" + text + "</th>";
	var total = $("#newEntry").append(output);

}


// $("#clickme").click(function () {
//   var text = $("input").val();
//   var output = "<p>" + text + "</p>";
//   $("#list").append(output);
//   $("#item").val("");

// });


// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

			// var total = 0;

			// function clickCount() {
			//   total = total + 1;

			//   $("#click-num").html(total)

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared


// hint: parseInt()





