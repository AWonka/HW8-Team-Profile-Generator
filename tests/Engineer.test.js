const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('creates an engineer object and getRole function returns Engineer', () => {
        const engineer = new Engineer();

        expect(typeof(engineer)).toBe('object');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('creates name, id, email, and github properties for Engineer object and tests get functions', () => {
        const nametest = 'Derek';
        const idtest = 25
        const emailtest = 'derek@gmail.com'
        const githubtest = 'dgit'
        const engineer = new Engineer(nametest, idtest, emailtest, githubtest);

        // test properties
        expect(engineer.name).toBe('Derek');
        expect(engineer.id).toBe(25);
        expect(engineer.email).toBe('derek@gmail.com');
        expect(engineer.github).toBe('dgit');
        // test get functions
        expect(engineer.getName()).toBe('Derek');
        expect(engineer.getId()).toBe(25);
        expect(engineer.getEmail()).toBe('derek@gmail.com');
        expect(engineer.getGithub()).toBe('dgit');
    });
});