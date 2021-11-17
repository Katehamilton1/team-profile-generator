// using Employee constructor
const Employee = require('../lib/Employee');

// creates employee object 

test('creates an employee object', () => {
    const employee = new Employee('kate', 20, 'kate.hamilton828@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Get employee name', () => {
  
    const employee = new Employee('kate', 20, 'kate.hamilton828@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
})

test('Get employee Id', () => {
    const employee = new Employee('kate', 20, 'kate.hamilton828@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
})

test('Get employee email', () => {

    const employee = new Employee('kate', 20, 'kate.hamilton828@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})
