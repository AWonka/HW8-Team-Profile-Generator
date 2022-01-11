const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('creates an engineer object', () => {
        const engineer = new Engineer();

        expect(typeof(engineer)).toBe('object');
    });

    it('creates a name property for engineer object and getName returns the name value', () => {
        const name = 'Derek';
        const engineer = new Engineer(name);

        expect(engineer.name).toBe('Derek');
        expect(engineer.getName()).toBe('Derek');
    });

    it('creates an id property for engineer object and getId returns the id value', () => {
        const id = 48;
        const engineer = new Engineer('Derek', id);

        expect(engineer.id).toBe(48);
        expect(engineer.getId()).toBe(48);
    });

    it('creates an email property for engineer object and getEmail returns the email value', () => {
        const email = 'derek@gmail.com';
        const engineer = new Engineer('Derek', 48, email);

        expect(engineer.email).toBe('derek@gmail.com');
        expect(engineer.getEmail()).toBe('derek@gmail.com');
    });

    it('creates a github property for engineer object and getGithub returns github value', () => {
        const github = 'dgit';
        const engineer = new Engineer('Derek', 48, 'derek@gmail.com', github);

        expect(engineer.github).toBe('dgit');
        expect(engineer.getGithub()).toBe('dgit');
    });
    // test getRole function
    it('returns Engineer with getRole function', () => {
        const engineer = new Engineer();

        expect(engineer.getRole()).toBe('Engineer');
    });
});