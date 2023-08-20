$(document).ready(onReady);


function onReady() {
    //Testing to see if jquery is working to console
    console.log("my jquery is working");
    $('#addNewEmployee').on('click', submitEmployee);
    $('#currentEmployees').on('click', '.deleteButton', deleteEmployee);
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
    let newTitle= $('#titleInput').val();
    let newAnnualSalary= $('#annualSalaryInput').val();

    //make employee object
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: newid,
        title: newTitle,
        annualSalary: Number(newAnnualSalary)
    }

    //add to newEmployee object to employees array
    employees.push(newEmployee);
    
    // updating employee table
    updateEmployees();

    //update monthly budget
    calculateMonthlyBudget();

    //empty inputs
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

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

//function to calculate the monthly budget
function calculateMonthlyBudget() {
    //start off with budget = 0
    let employeeMonthlyBudget = 0;

    for (let i=0; i <employees.length; i++) {
        employeeMonthlyBudget += Number(employees[i].annualSalary)
    }

    let employeesPaidOut = Math.round(employeeMonthlyBudget/12);
    let monthly = ('$' + employeesPaidOut);
    $('#monthlyBudget').text(`Total Monthly: ${monthly}`);

    //If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

    if(employeesPaidOut >= 20000) {
        $('#totalMonthlyBudget').addClass('overBudget');  
    }else{
        $('#totalMonthlyBudget').removeClass('overBudget'); 
    }
    updateEmployees();

}

//function to delete employee from table
function deleteEmployee() {
    //see if employee button is working 
    console.log("deleted employee");
    $(this).parent().parent().remove();
    
}
