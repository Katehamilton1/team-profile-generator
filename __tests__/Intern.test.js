const Intern = require('../lib/Intern');

//create Intern object 
test('create Intern object', () => {
    const intern = new Intern('kate', 20, 'kate.hamilton828@gmail.com', 'Western')

    expect(intern.school).toEqual(expect.any(String));
});

//get school

test('get school', () => {
    const intern = new Intern('kate', 20, 'kate.hamilton828@gmail.com', 'Western');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets role from getRole() 
test('get role of employee', () => {
    const intern = new Intern('kate', 20, 'kate.hamilton828@gmail.com', 'Western');
    expect(intern.getRole()).toEqual("Intern");
});