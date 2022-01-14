const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('creates an intern object and getRole function returns Intern', () => {
        const intern = new Intern();

        expect(typeof(intern)).toBe('object');
        expect(intern.getRole()).toBe('Intern');
    });

    it('creates properties for intern object and get functions return those properties', () => {
        const nametest = 'Matt';
        const idtest = 19;
        const emailtest = 'matt@gmail.com';
        const schooltest = 'Georgia Tech';
        const intern = new Intern(nametest, idtest, emailtest, schooltest);

        // test properties
        expect(intern.name).toBe('Matt');
        expect(intern.id).toBe(19);
        expect(intern.email).toBe('matt@gmail.com');
        expect(intern.school).toBe('Georgia Tech');
        // test get functions
        expect(intern.getName()).toBe('Matt');
        expect(intern.getId()).toBe(19);
        expect(intern.getEmail()).toBe('matt@gmail.com');
        expect(intern.getSchool()).toBe('Georgia Tech');
    });
});