const Employee = require('../lib/employee');
const employeeData = "Shawn";

test('creates a employee object' , () => {

    const employee = new Employee(employeeData);

    expect(employee.name).toBe(employeeData);

});

//get name using getName

test('get employee name', () => {

    const employee = new Employee(employeeData); 
    expect(employee.name).toBe(employeeData);
});


//get ID using getID

test('get employee ID', () => {
    const idData = 555;
    const employee = new Employee(employeeData,idData); 
    expect(employee.id).toEqual(idData);
});

//get Email using getEmail

test('get employee Email', () => {
    const emailData = "shawnSmith@placeholder.net";
    const idData = 555;
    const employee = new Employee(employeeData,idData,emailData); 
    expect(employee.email).toEqual(emailData);
});


//getrole ()

test('getRole()', () => {
    const emailData = "shawnSmith@placeholder.net";
    const idData = 555;
    const employee = new Employee(employeeData,idData,emailData); 
    expect(employee.getRole()).toEqual(Employee);
});