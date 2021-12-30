import user from "./app/users";


test('Is user field : email is a good format', () => {
    expect(user.checkMyEmail()).toMatch(/^\S+@\S+\.\S+$/);
});

test('Is user field : Last name is empty', () => {
    expect(user.lastName).toEqual('Idk');
});

test('Is user field : First Name is empty', () => {
    expect(user.firstName).toEqual('Quentin');
});

test('Is user field : Age is equal or superior to 13', () => {
    expect(user.dateString).toBeGreaterThanOrEqual(13);
});

test('')
jest.mock('./emailCheck')

test('Expect the checkEmail to fail', () => {
    const emailChecker = new EmailService()
    expect(() => emailChecker.checkEmailService()).toThrow();
})


