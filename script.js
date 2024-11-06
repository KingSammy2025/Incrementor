 // INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "Once upon a time, ";
var minus50btn = document.getElementById("minus50");
var displayEl = document.getElementById("display");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");
var roundBtn4 = document.getElementById("rand4");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

// Event Listener
minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);
plus1btn.addEventListener("click", plus1fcn);
plus10btn.addEventListener("click", plus10fcn);
plus50btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Function
function minus50fcn() {
  // Update the value of the counter (35)
  counter = counter - 50;
  console.log(counter);

  // Use the counter to update the website (HTML)
  displayEl.innerHTML = counter;
}

function minus10fcn() {
  // Update counter
  counter -= 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function minus1fcn() {
  // Update counter
  // counter = counter - 1 or
  // counter -= 1 or
  counter--;

  // Update site
  displayEl.innerHTML = counter;
}

function plus1fcn() {
  // Update counter
  counter++;

  // Update site
  displayEl.innerHTML = counter;
}

function plus10fcn() {
  // Update counter
  counter += 10;

  // Update site
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  // Update counter
  counter += 50;

  // 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

  // Update site
  displayEl.innerHTML = counter;
}

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;

  // Update the story varaiable (JS)
  story += word + " ";
  console.log(story);

  // Clear the input field
  stringInEl.value = "";

  // Update the website to show the story
  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);
roundBtn4.addEventListener("click", round4);
function round1() {
  // Create random dec 0-1
  let rand = Math.random();

  // Round to 3 dec places
  rand = rand.toFixed(3);

  // Update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round3() {
  //  var rand =  Math.random() * ( 5 - (-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML +=
    "<img src='images/starburst candy image.jpg' width = 300> ";
}

// Random # from x to y:
// Math.random() * (y - x) + x

// E.g. If i want random0 # from 1 to 3:
// var rand = Math.random() * ( 3 - 1 ) + 1

// Check your understanding
// 1. Complete the rest of the incrementing buttons.

// 2. Complete the random __ to __ button.

var roundBtn4 = document.getElementById("rand4");
roundBtn4.addEventListener("click", round4);
function round4() {
  // var rand = Math.random() * ( 10 - 5) + 5
  let rand = Math.random() * 5 + 5;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}

// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
var randomSize = document.getElementById("random-size");
randomSize.addEventListener("click", randomsize);
function randomsize() {
  let rand = Math.random() * 75;
  rand = Math.round(rand);
  let string = rand + "px";
  document.getElementById("thebody").style.fontSize = string;
}

// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.
var randomColor = document.getElementById("random-rgb");
randomColor.addEventListener("click", randomcolor);
function randomcolor() {
  let r = Math.random() * 255;
  r = Math.round(r);
  let g = Math.random() * 255;
  g = Math.round(g);
  let b = Math.random() * 255;
  b = Math.round(b);
  let rgbString = "rgb" + "(" + r + ", " + g + ", " + b + ")";
  document.getElementById("HTML").style.background = rgbString;
}

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// Not allowed to use window.location.reload (which simply refreshes the page)
var resetPage = document.getElementById("reset");
resetPage.addEventListener("click", pagereset);
function pagereset() {
  document.getElementById("display").innerHTML = 0;
  storyEl.innerHTML = "Once upon a time,";
  counter = 0;
  story = "Once upon a time, ";
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("random-size");
  document.getElementById("random-rgb");
}

// 6. Create a button that when pressed, add an image of your favorite toy to the website.
// Each click adds another toy.

var picbtn = document.getElementById("pic-btn2");
var piccontainer = document.getElementById("pic-container2");
picbtn.addEventListener("click", favoritetoy);
function favoritetoy() {
  piccontainer.innerHTML +=
    "<img src = 'images/supra toy car image.jpg' width = 300px>";
}
