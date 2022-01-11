const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('creates a Manager object', () => {
        const manager = new Manager();

        expect(typeof(manager)).toBe('object');
    });

    it('creates a name property for manager object and getName returns name value' , () => {
        const name = 'Shannon';
        const manager = new Manager(name);

        expect(manager.name).toBe('Shannon');
        expect(manager.getName()).toBe('Shannon');
    });

    it('creates an id property for manager object and getId returns id value', () => {
        const id = 25;
        const manager = new Manager('Shannon', id);

        expect(manager.id).toBe(25);
        expect(manager.getId()).toBe(25);
    });

    it('creates an email property for manager object and getEmail returns email value', () => {
        const email = 'thisemail@gmail.com';
        const manager = new Manager('Shannon', 25, email);

        expect(manager.email).toBe('thisemail@gmail.com');
        expect(manager.getEmail()).toBe('thisemail@gmail.com');
    });
    // test officeNumber property
    it('creates an officeNumber property for manager object and getOfficeNumber returns officeNumber value', () => {
        const officeNumber = 3;
        const manager = new Manager('Shannon', 25, 'thisemail@gmail.com', officeNumber);

        expect(manager.officeNumber).toBe(3);
        expect(manager.getOfficeNumber()).toBe(3);
    });
    // test getRole function
    it('should return Manager instead of Employee', () => {
        const manager = new Manager();

        expect(manager.getRole()).toBe('Manager');
    })
})