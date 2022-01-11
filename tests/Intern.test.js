const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('creates an intern object', () => {
        const intern = new Intern();

        expect(typeof(intern)).toBe('object');
    });

    it('creates a name property for intern object and getName returns the name value', () => {
        const name = 'Matt';
        const intern = new Intern(name);

        expect(intern.name).toBe('Matt');
        expect(intern.getName()).toBe('Matt');
    });

    it('creates an id property for intern object and getId returns the id value', () => {
        const id = 19;
        const intern = new Intern('Matt', id);

        expect(intern.id).toBe(19);
        expect(intern.getId()).toBe(19);
    });

    it('creates an email property for intern object and getEmail returns the email value', () => {
        const email = 'matt@gmail.com';
        const intern = new Intern('Matt', 19, email);

        expect(intern.email).toBe('matt@gmail.com');
        expect(intern.getEmail()).toBe('matt@gmail.com');
    });

    it('creates a school property for intern object and getSchool returns the school value', () => {
        const school = 'Georgia Tech';
        const intern = new Intern('Matt', 19, 'matt@gmail.com', school);

        expect(intern.school).toBe('Georgia Tech');
        expect(intern.getSchool()).toBe('Georgia Tech');
    });
    // test getRole function
    it('returns Intern with getRole function', () => {
        const intern = new Intern();

        expect(intern.getRole()).toBe('Intern');
    });
});