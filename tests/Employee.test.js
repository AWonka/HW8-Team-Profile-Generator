const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an Employee object', () => {
        const employee = new Employee('Austin', 25, 'wonkaaustin@gmail.com'); 

        expect(employee.name).toEqual('Austin');
        expect(employee.id).toEqual(25);
        expect(employee.email).toEqual('wonkaaustin@gmail.com');

    })
})