console.log("JS");

let clickEmployeeName = 0;

$(document).ready(onReady);
console.log('Sheet ready');

function onReady() {
    console.log("See sheet");
    $('button').on("click", clickHandler);
    displayEmployeeName();

    function clickHandler() {
        console.log('was clicked!!!!!!!');
        clickEmployeeName++;
        console.log(clickEmployeeName);
    }
    //     let click = $("#addNewEmployee");
    //     console.log($("#addNewEmployee"));
    //     console.log(click);
        displayEmployeeName();
    //     newFirstName();
    // }

     function displayEmployeeName() {
        let newNameFirst = "#newFirstName";
        $("#totalMonthly").text(clickEmployeeName);
    }

    // function addNewInput() {
    //     $("#addNewEmployee").append("<tr>" + "<td>" + $("#newFirstName").val() + "<td>" + "<td>" + $("#newLastName").val() + "<td>" + "<td>" + $("#newId").val() + "<td>" + "<td>" + $("#newJobTitle").val() + "<td>" + "<td>" + $("#newAnnualSalary").val() + "<td>" + "<tr>");
    //     console.log($("#addNewEmployee"));
    // }

}