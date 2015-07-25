function randomRestaurant() {
  var randomNumber = Math.floor(Math.random() * 7 + 1);
  if (randomNumber === 1) {
    document.getElementById("selection").innerHTML = "How about<br>Bistro Vida?";
  } else if (randomNumber === 2) {
    document.getElementById("selection").innerHTML = "How about<br>Refuge?";
  } else if (randomNumber === 3) {
    document.getElementById("selection").innerHTML = "How about<br>Shiok?";
  } else if (randomNumber === 4) {
    document.getElementById("selection").innerHTML = "How about<br>Cafe Del Sol?";
  } else if (randomNumber === 5) {
    document.getElementById("selection").innerHTML = "How about<br>Akasaka?";
  } else if (randomNumber === 6) {
    document.getElementById("selection").innerHTML = "How about<br>Juban?";
  } else {
    document.getElementById("selection").innerHTML = "How about<br>Sultana?";
  }
}
