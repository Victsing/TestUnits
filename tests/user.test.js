import user from "../app/users";
import { DateTime } from 'luxon';

describe('tests for user', () => {
    
    test('Is user field : email is a good format', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dezsssssssssss', '1998-05-15')
        expect(usr.email).toEqual(usr.email);
    });
    
    test('Is user field : Last name is empty', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dezsssssssssss', '1998-05-15')
        expect(usr.lastName).toEqual('dibi');

    });

    test('Is user field : Last name is empty', () => {
        const usrNot = new user('Leandre', '', 'ezezezez@ezez.fr' , 'dezssssssssssss', '1998-05-15')
        expect(usrNot.lastName).toEqual(false);
    });

    test('Is user field : First Name is empty', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'desssssssssssssz', '1998-05-15')
        expect(usr.firstName).toEqual('Leandre');

    });

    test('Is user field : First Name is empty', () => {
        const usr = new user('', 'dibi', 'ezezezez@ezez.fr' , 'desssssssssssssz', '1998-05-15')
        expect(usr.firstName).toEqual(false);

    });

    test('Is user field : password between 8 and 40 characters', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dsssssssssssss', '1998-05-15')
        expect(usr.password).toEqual('dsssssssssssss');
    });
    
    test('Is user field : password between 8 and 40 characters', () => {
        const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dss', '1998-05-15')
        expect(usr.password).toThrow(new Error('erreur'));
    });
    // test('Is user field : Age is equal or superior to 13', () => {
    //     const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
    //     expect(usr.dateString).toBeGreaterThanOrEqual(13);
    // });

    //test('')
    //jest.mock('./emailCheck')

    //test('Expect the checkEmail to fail', () => {
    //    const usr = new user('Leandre', 'dibi', 'ezezezez@ezez.fr' , 'dez', '1998-05-15')
    //    const emailChecker = usr.email
    //    expect(() => emailChecker.checkMyEmail());
    //}) 
  
})
