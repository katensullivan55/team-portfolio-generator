const Engineer = require('../lib/Engineer');

// creates object
describe('create an engineer object', () => {
    it('creates the engineer object from data', () => {
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');
    expect(engineer.github).toEqual(expect.any(String));
})});

// gets github info
describe('get github from data of engineer', () => {
    it('gets github from data of engineer', () => {
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})});

// if selected engineer then grabs it here for test with addition of github
describe('get role of employee', () => {
    it('gets the role of employee from data', () => {
    
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');

    expect(engineer.getRole()).toEqual('Engineer');
})});