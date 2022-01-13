const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('creates an engineer object', () => {
        const engineer = new Engineer();

        expect(typeof(engineer)).toBe('object');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('creates name, id, email, and github properties for Engineer object', () => {
        const name = 'Derek';
        const id = 25
        const email = 'derek@gmail.com'
        const github = 'dgit'
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.name).toBe('Derek');
        expect(engineer.id).toBe(25);
        expect(engineer.email).toBe('derek@gmail.com');
        expect(engineer.github).toBe('dgit');
        expect(engineer.getName()).toBe('Derek');
        expect(engineer.getId()).toBe(25);
        expect(engineer.getEmail()).toBe('derek@gmail.com');
        expect(engineer.getGithub()).toBe('dgit');
    });
});