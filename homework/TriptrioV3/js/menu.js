$(".burger").click(function() {
  $(".mobile-nav").slideToggle();
});

$(window).resize(function() {
  var windowWidth = $(window).width();

  if (windowWidth > 1024) {
    $(".mobile-nav").hide();
  }
});

document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

