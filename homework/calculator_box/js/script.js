
function calculatorBox() {
  // 1. Store inputs as variables here:
  var a10 = document.querySelector("#a10").value;
  var a20 = document.querySelector("#a20").value;
  var a30 = document.querySelector("#a30").value;

  var red = document.querySelector("#red").value;
  var blue = document.querySelector("#blue").value;

  var n10 = document.querySelector("#n10").value;
  var n20 = document.querySelector("#n20").value;
  var n30 = document.querySelector("#n30").value;

// 2. Calculate row
  // var centerOutput = (a10 + a20 +a30)
  var centerOutput = ("red")
  // var centerOutput = (n10 + n20 +n30)


// 3. Output result for user to see:
  document.querySelector("#out").innerHTML = centerOutput;


  // 3. Output result for user to see:
  // document.querySelector('#total-num-of-drinks-output').innerHTML = drinksLeft;
  // document.querySelector('#drink-output').innerHTML = favDrink;

}



document.querySelector('#red').onclick = centerOutput;