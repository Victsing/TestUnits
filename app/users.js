class Users {
    constructor(firstName, lastName, email , password, age) {
        this.firstName = this.checkMyFirstName(firstName)
        this.lastName = this.checkMyLastName(lastName)
        this.email = this.checkMyEmail(email)
        this.password = this.checkMyPassword(password)
        this.age = this.checkMyAge(age)
    }


    checkMyEmail(email) {
        var condition = ['@','.'];
        if(this.email && this.email.includes(condition)){
            return this.email = email
        }else{
            throw 'email doit etre rempli' 
        }
    }
    
    checkMyFirstName(firstname) {
        if(firstname.length > 0){
            return this.firstName = firstname
        }else{
            throw 'firstname doit etre rempli' 
        }
    }

    checkMyLastName(lastname) {
        if(lastname.length > 0){
            return this.lastName = lastname
        }else{
            throw 'lastname doit etre rempli' 
        }
    }

    checkMyPassword(password) {
        if(password.length > 0 && password.length < 40){
            return this.password = password
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

module.exports = Users
