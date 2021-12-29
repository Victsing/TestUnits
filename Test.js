import user from "./app/users";

test('Is user field : email is empty', () => {
    expect().toMatch(/^\d*[a-zA-Z][a-zA-Z]*$/)
});

test('Is user field : email is a good format', () => {
    expect(user.email).toMatch(/^\S+@\S+\.\S+$/);
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


jest.mock('./emailCheck')

test('Expect the checkEmail to fail', () => {
    const emailChecker = new EmailService()
    expect(() => emailChecker.checkEmailService()).toThrow();
})


