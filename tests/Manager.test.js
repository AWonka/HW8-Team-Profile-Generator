const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('creates a Manager object and getRole function returns Manager', () => {
        const manager = new Manager();

        expect(typeof(manager)).toBe('object');
        expect(manager.getRole()).toBe('Manager');
    });

    it('creates properties for manager and get functions return those properties' , () => {
        const nametest = 'Shannon';
        const idtest = 45;
        const emailtest = 'shannon@gmail.com';
        const officeNumbertest = 78;
        const manager = new Manager(nametest, idtest, emailtest, officeNumbertest);

        // test properties
        expect(manager.name).toBe('Shannon');
        expect(manager.id).toBe(45);
        expect(manager.email).toBe('shannon@gmail.com');
        expect(manager.officeNumber).toBe(78);
        // test get functions
        expect(manager.getName()).toBe('Shannon');
        expect(manager.getId()).toBe(45);
        expect(manager.getEmail()).toBe('shannon@gmail.com');
        expect(manager.getOfficeNumber()).toBe(78);
    })
});