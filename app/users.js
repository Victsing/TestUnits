module.exports = users => {
    class Users {
        constructor(email, lastName, firstName, password, age) {
            this.email = this.checkMyEmail(email)
            this.lastName = this.checkMyLastName(lastName)
            this.firstName = this.checkMyFirstName(lastName)
            this.password = this.checkMyPassword(password)
            this.age = this.checkMyAge(age)
        }

        checkMyEmail() {
            this.emailCheck.checkEmailService()
        }

        checkMyLastName(lastname) {
            if(lastname.length > 0){
                return this.emailCheck = firstname
            }else{
                throw 'lastname doit etre rempli' 
            }
        }

        checkMyPassword(password) {
            if(password.length > 0 && password.length < 40){
                return this.emailCheck = email
            }else{
                throw 'password doit etre rempli' 
            }
        }

        checkMyAge(age){
            return this.age = age;
        }

        UserBornDate() {
            const birthday = +new Date(this.dateString);
            return ((Date.now() - birthday) / (31557600000));
        }
    }
};

