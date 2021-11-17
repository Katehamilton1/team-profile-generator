const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

//create manager object
test('create manager object', () => {
    const manager = new Manager('kate', 20, 'kate.hamilton828@gmail.com', 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get office number', () => {
    const manager = new Manager('kate', 20, 'kate.hamilton828@gmail.com', 828);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})


// gets role from getRole() 
test('get role of employee', () => {
    const manager = new Manager('kate', 20, 'kate.hamilton', 8);
    expect(manager.getRole()).toEqual("Manager");
});
