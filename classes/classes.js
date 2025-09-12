

class User {
    constructor(name, lastName) {
        console.log('User created');
        this.name = name;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello' + ' ' + this.name + ' ' + this.lastName);
    }
}

class Admin extends User {
    constructor(name, lastName) {
        super(name, lastName);
        console.log('Mexican user created');
    }
        
    sayHello() {
        console.log('Hello');
    }
    walk() {
        console.log('Mexican user walking');
    }
}



const user1 = new User('Carlos', 'Gomez');
user1.sayHello(); // Hello Carlos Gomez

const user2 = new User('Mahdia', 'Khan');
user2.sayHello();
const user3 = new Admin('Jose', 'Pesina');






