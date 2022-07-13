// require employee.js
const employee = require("../lib/employee");

// creates employee object
describe('creates am employee object', () => {
    it('creates an object of the employee', () => {

    
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');
        console.log(employee.name);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})});

// gets namefrom employee data
describe('get employee name', () => {
    it('gets employee name from data', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
})});

// get id from employee data
describe('get employee id', () => {
    it('it gets employee id from data', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
})});

// get email from employee data
describe('get employee email', () => {
    it('gets employee email from data', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    
})});

// get role of employee
describe('get role of employee', () => {
    it('gets the role of employee from data', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})});