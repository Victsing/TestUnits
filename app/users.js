module.exports = users => {
    class Users {
        constructor(email, lastName, firstName, dateString) {
            this.email = email
            this.lastName = lastName
            this.firstName = firstName
            this.dateString = dateString
            this.emailCheck = new EmailService()
        }

        checkMyEmail() {
            this.emailCheck.checkEmailService()
        }

        UserEmail() {
            return this.email
        }

        UserLastName() {
            return this.lastName
        }

        UserFirstName() {
            return this.firstName
        }

        UserBornDate() {
            const birthday = +new Date(this.dateString);
            return ((Date.now() - birthday) / (31557600000));
        }
    }
};

