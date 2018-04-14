console.log("JS");

$(document).ready(onReady);
console.log('Sheet ready');

function onReady() {
    console.log("See sheet");

    $("button").on("click", clickHandler);
  //  newFirstName();
}

function clickHandler() {
 //   let click = "#newFirstName";
    console.log("This has been clicked!");
  //  console.log(click);
  //  newFirstName();
}