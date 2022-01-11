const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Creates an Employee object', () => {
        const employee = new Employee();
        
        expect(typeof(employee)).toBe('object');

        

    })
})