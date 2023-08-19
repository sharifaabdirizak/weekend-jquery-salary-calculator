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

    // updating employee table
    updateEmployees();

}

function updateEmployees() {
    // empty exsiting array 
    $('#currentEmployees').empty();

    for (let i=0; i <employees.length; i++){
        if (i===0){
            $('#currentEmployees').append(`
            <tr id="employees">
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].id}</td>
                <td>${employees[i].title}</td>
                <td>${employees[i].annualSalary}</td>
                <td>
                    <button class= "deleteButton"> Delete </button>
                </td>

            </tr>
            `)
        } else {
            $('#currentEmployees').append(`
            <tr id="employees">
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].id}</td>
                <td>${employees[i].title}</td>
                <td>${employees[i].annualSalary}</td>
                <td>
                    <button class= "deleteButton"> Delete </button>
                </td>
            </tr>
            `)
        }

    }
}