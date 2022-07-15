const intern = require("../lib/intern");
const employeeData = "Shawn";
const idData = 555;
const emailData = "shawnSmith@placeholder.net";
const schoolName = "UNLV";


test("get intern's school name", () => {

    const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.schoolName).toBe(this.school);
});

//generates school-name()
test("getSchool()", () => {
    const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.getSchool()).toBe(this.school);
});

//getRole ()

test("getRole()", () => {
   const employee = new intern (employeeData,idData,emailData,schoolName); 
    expect(employee.getRole()).toBe(intern);
});