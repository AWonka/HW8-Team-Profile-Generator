const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an Employee object and getRole returns Employee', () => {
        const employee = new Employee();
        
        expect(typeof(employee)).toBe('object');
        expect(employee.getRole()).toBe('Employee');
    });
    // test name property
    it('Gives a name property to the employee object and getName function returns name property', () => {
        const nametest = 'Austin';
        const idtest = 25;
        const emailtest = 'austin@gmail.com';
        const employee = new Employee(nametest, idtest, emailtest);

        // tests properties
        expect(employee.name).toBe('Austin');
        expect(employee.id).toBe(25);
        expect(employee.email).toBe('austin@gmail.com');
        // tests get functions
        expect(employee.getName()).toBe('Austin');
        expect(employee.getId()).toBe(25);
        expect(employee.getEmail()).toBe('austin@gmail.com');
    });
});