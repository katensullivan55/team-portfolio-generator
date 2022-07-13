const Intern = require('../lib/Intern');

describe('create a object', () => {
    it('creates an object from the data', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn');
    expect(intern.school).toEqual(expect.any(String));
})});

// gets school from data
describe('get school info', () => {
    it('gets school info from intern data', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})});

// if selected intern then grabs it here for test with addition of school
describe('gets role of intern', () => {
    it('gets the role of intern from data', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn')
    expect(intern.getRole()).toEqual('Intern');
})});