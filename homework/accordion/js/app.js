// As a user
// When I click on the row
// I expect to see the text appear underneath

// As a user
// When I click on an opened row
// I expect to see the text disappear

// It should animate like this: https://imgur.com/ivlcesG

// Hint: remember traversal (parent, child) and event arguments
// Also, might be worth looking into event.target vs. event.currentTarget

// Extra Credit:
// 
// As a user
// When I click on an opened row
// I expect the text to disappear more slowly than how it appeared


$(".row").click(showParagraph1);


function showParagraph1() {
	// $(event.target).slideToggle(300);
	// $(".wrapper").slideToggle(300);

	$(event.currentTarget).children(".wrapper").slideToggle(300);
}

