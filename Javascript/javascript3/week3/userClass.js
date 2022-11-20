class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        console.log(`First_Name: ${this.firstName}`);
    }

    getFullName() {
        console.log(`Full_Name: ${this.firstName + " " + this.lastName}`);
    }
}

let user1 = new User('Shravya', 'Gurmitkal');
user1.getFirstName();
user1.getFullName();