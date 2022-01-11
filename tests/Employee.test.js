const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an Employee object', () => {
        const employee = new Employee();
        
        expect(typeof(employee)).toBe('object');
    });
    // test name property
    it('Gives a name property to the employee object and getName function returns name property', () => {
        const name = 'Austin';
        const employee = new Employee(name);

        expect(employee.name).toBe('Austin');
        expect(employee.getName()).toBe('Austin');
    });
    // test id property
    it('Gives an id property to the employee object and getId function returns id property', () => {
        const id = 25;
        // give a random name as first value to cover .name property
        const employee = new Employee('Austin', id);

        expect(employee.id).toBe(25);
        expect(employee.getId()).toBe(25);
    });
    // test email property
    it('Gives an email property to the employee object and getEmail function returns email property', () => {
        const email = 'wonkaaustin@gmail.com';
        // give random name and id property to fill .name and .id properties
        const employee = new Employee('Austin', 25, email);

        expect(employee.email).toBe('wonkaaustin@gmail.com');
        expect(employee.getEmail()).toBe('wonkaaustin@gmail.com');
    });
});