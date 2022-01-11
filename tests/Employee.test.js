const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an Employee object', () => {
        const employee = new Employee();
        
        expect(typeof(employee)).toBe('object');
    });

    it('Gives a name property to the employee object', () => {
        const name = 'Austin';
        const employee = new Employee(name);

        expect(employee.name).toBe('Austin');
    });

    it('Gives an id property to the employee object', () => {
        const id = 25;
        // give a random name as first value to cover .name property
        const employee = new Employee('Austin', id);

        expect(employee.id).toBe(25);
    });

    it('Gives an email property to the employee object', () => {
        const email = 'wonkaaustin@gmail.com';
        // give random name and id property to fill .name and .id properties
        const employee = new Employee('Austin', 25, email);

        expect(employee.email).toBe('wonkaaustin@gmail.com');
    });

});