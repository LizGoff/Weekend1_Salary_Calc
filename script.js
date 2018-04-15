//console.log("JS");

//let monthlyTotal = (totalBudget.toFixed(2));

$(document).ready(onReady);
//console.log('Sheet ready');

function onReady() {
 //   console.log("See sheet");
    $('button').on("click", clickHandler);
    addEmployee();
    //totalBudget();

    function clickHandler() {
    console.log('was clicked');
    addEmployee();
    //totalBudget();
    }

    //function displayTotalMonthly() {
    //    $("#totalMonthly").text(monthlyTotal);
    //}

    function addEmployee() {
    $("#addNewEmployee").append("<tr>" + "<td>" + $("#newFirstName").val() + "</td>" + "<td>" + $("#newLastName").val() + "</td>" + "<td>" + $("#newId").val() + "</td>" + "<td>" + $("#newJobTitle").val() + "</td>" + "<td>" + $("#newAnnualSalary").val() + "</td>" + "<tr>");
         console.log("addNewEmployee");

    }

    //function to feed in employee salaries

    //function totalBudget() {
    //    $("#totalMonthly").val()/12;
    //}

    //function to clear feilds ?
    //$('#myform')[0].reset();
    //or
    //document.getElementById("myform").reset();
}