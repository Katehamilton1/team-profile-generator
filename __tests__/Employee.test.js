// using Employee constructor
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

// creates employee object 

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Can set name via constructor', () => {
    const name = '';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test('can set id via constructor', () => {
    const idValue='' ;
    const employee = new Employee(idValue);
    expect(employee.id).toBe(idValue);
})

test('can set email via constructor', () => {
    const getEmail='' ;
    const employee = new Employee(getEmail);
    expect(employee.getEmail).toBe(getEmail);
})
