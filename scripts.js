$(document).ready(onReady);


function onReady() {
    //Testing to see if jquery is working to console
    console.log("my jquery is working");
    $('#addNewEmployee').on('click', submitEmployee);

}
//created employee array
let employees = [];

//function to submit a new employee to the table
function submitEmployee(){
    //test to see if employee button is added
    console.log("added a new employee");

    // getting input values
    let newFirstName= $('#firstNameInput').val();
    let newLastName= $('#lastNameInput').val();
    let newid= $('#idInput').val();
    let newTile= $('#tileInput').val();
    let newAnnualSalary= $('#annualSalaryInput').val();

    //make employee object
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: newid,
        title: newTile,
        annualSalary: newAnnualSalary
    }

    //add to newEmployee object to employees array
    employees.push(newEmployee);
    
    
    

}