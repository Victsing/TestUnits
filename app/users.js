import { DateTime } from 'luxon'

class Users {
    email;
    firstName;
    lastName;
    password;
    age;

    constructor(firstName, lastName, email , password, age) {
        this.firstName = this.checkMyFirstName(firstName)
        this.lastName = this.checkMyLastName(lastName)
        this.email = this.checkMyEmail(email)
        this.password = this.checkMyPassword(password)
        this.age = this.checkMyAge(age)
    }


    checkMyEmail(email) {
        if(this.email && this.email.match(/^\S+@\S+\.\S+$/)){
            return this.email = email
        }
    }
    
    checkMyFirstName(firstname) {
        if(firstname.length > 0){
            return this.firstName = firstname
        }else{
            return false
        }
    }

    checkMyLastName(lastname) {
        if(lastname.length > 0){
            return this.lastName = lastname
        }else{
            return false
        }
    }

    checkMyPassword(password) {
        if(password.length > 8 && password.length < 40){
            return this.password = password
        }else{
            throw 'erreur';
        }
    }

    checkMyAge(age){
        return this.age = DateTime.fromJSDate(age).diffNow('years').years < -13;
    }

    UserBornDate() {
        const birthday = +new Date(this.dateString);
        return ((Date.now() - birthday) / (31557600000));
    }
}

module.exports = Users
