let monthlyTotal = 0;

$(document).ready(onReady);

function onReady() {
    $('button').on("click", clickHandler);
    addEmployee();
    totalBudget();

    function clickHandler() {
    console.log('was clicked');
    addEmployee();
    totalBudget();
    }

    function addEmployee() {
    $("#addNewEmployee").append("<tr>" + "<td>" + $("#newFirstName").val() + "</td>" + "<td>" + $("#newLastName").val() + "</td>" + "<td>" + $("#newId").val() + "</td>" + "<td>" + $("#newJobTitle").val() + "</td>" + "<td>" + $("#newAnnualSalary").val() + "</td>" + "<tr>");
         console.log("addNewEmployee");

    }

    function totalBudget() {
        let thisThing = $("#newAnnualSalary").val();
        let salaryTotal = thisThing/12;
        monthlyTotal += salaryTotal;

        $("#totalMonthly").text("Total Monthly; " + monthlyTotal.toFixed(2));
    }

    totalBudget();
}