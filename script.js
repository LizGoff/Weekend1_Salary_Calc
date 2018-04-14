//console.log("JS");

//let monthlyTotal = (totalBudget.toFixed(2));

$(document).ready(onReady);
//console.log('Sheet ready');

function onReady() {
 //   console.log("See sheet");
    $('button').on("click", clickHandler);
    addEmployee();

    function clickHandler() {
       console.log('was clicked');
    addEmployee();
    //displayTotalMonthly();
    //     "totalMonthly" ?
    }

    //function displayTotalMonthly() {
    //    $("#totalMonthly").text(monthlyTotal);
    //}

    function addEmployee() {
    $("#addNewEmployee").append("<tr>" + "<td>" + $("#newFirstName").val() + "</td>" + "<td>" + $("#newLastName").val() + "</td>" + "<td>" + $("#newId").val() + "</td>" + "<td>" + $("#newJobTitle").val() + "</td>" + "<td>" + $("#newAnnualSalary").val() + "</td>" + "<tr>");
         console.log("addNewEmployee");
    }

    //function totalBudget() {
    //    $("#totalMonthly").val()/12;
    //}

}