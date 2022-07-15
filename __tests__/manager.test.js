const Manager = require("../lib/manager");
const employeeData = "Shawn";
const idData = 555;
const emailData = "shawnSmith@placeholder.net";
const officeNumber = "7555";

test("get manager office number", () => {

    const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.officeNumber).toEqual(this.office);
});

//generate office number, w/ getOfficeNumber()
test("getOfficeNumber()", () => {
    const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.getOfficeNumber()).toEqual(this.office);
});

//getRole ()

test("getRole()", () => {
  
   const employee = new Manager (employeeData,idData,emailData,officeNumber); 
    expect(employee.getRole()).toEqual(Manager);
});