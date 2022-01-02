import user from "./app/users";

describe('tests for user', () => {
    test('Is user field : email is a good format', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.email).toMatch(/^\S+@\S+\.\S+$/).toEqual(usr.email);
    });
    
    test('Is user field : Last name is empty', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.lastName).toEqual('dibi');
    
        const usrNot = new user('Leandre', '', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usrNot.lastName).toEqual(false);
    });
    
    test('Is user field : First Name is empty', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.firstName).toEqual('Quentin');
    });
    
    test('Is user field : Age is equal or superior to 13', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.dateString).toBeGreaterThanOrEqual(13);
    });
    
    
    test('Is user field : password between 8 and 40 characters', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.password).toBeGreaterThanOrEqual(8);
    });
    
    test('Is user field : password between 8 and 40 characters', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        expect(usr.password).toBeLessThanOrEqual(40);
    });

    test('')
    jest.mock('./emailCheck')

    test('Expect the checkEmail to fail', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
        const emailChecker = usr.email
        expect(() => emailChecker.checkMyEmail());
    })


})


describe('tests for tasks', () => {

}) 

