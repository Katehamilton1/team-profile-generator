// using Engineer constructor 
const Engineer = require('../lib/Engineer');

//create engineer object 
test('create an engineer object', () => {
    const engineer = new Engineer('kate', 20, 'kate.hamilton828@gmail.com', 'kjhamilton1')
    
    expect(engineer.github) .toEqual(expect.any(String));
});


// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('kate', 20, 'kate.hamilton828@gmail.com', 'kjhamilton1');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('get role of employee', () => {
    const engineer = new Engineer('kate', 20, 'kate.hamilton@gmail.com', 'kjhamilton1');
    expect(engineer.getRole()).toEqual("Engineer");
});