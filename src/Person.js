class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, my name is " + this.name;
    }

}

console.log(new Person('Rob Strover').greet());


// ____________________________________________________________________

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach((task, index) => console.log('blahh this task is blahh: ' + task + ' it is number ' + (index+=1)));
    }
}

// ____________________________________________________________________

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();



function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100));


// ____________________________________________________________________


function sum(...numbers) {
    // return numbers.reduce(function(prev, current) {
    //     return prev + current;
    // })

    return numbers.reduce((prev, current) => prev + current);
}



console.log(sum(1, 2, 3, 4, 5, 6));

// ____________________________________________________________________


function sum2(x, y) {
    return x + y;
}

let nums = [1, 2];

console.log(sum2(...nums));

// ____________________________________________________________________

let template = [
        '<p class="message">',
            'Hello my name is Rob',
        '</p>'
    ].join('');


let name = 'Rob';
let template2 = `
    '<p class="message">',
        'Hello my name is ${name}',
    '</p>'
`;

console.log(template, template2);

// ____________________________________________________________________

function getPerson() {

    let name = 'Rob';
    let age = 25;

    return {
        name,
        age,
        greet() {
            return `Hello my name ${name} and I am ${age} years old.`
        }
    };
}

console.log(getPerson().greet());

// ____________________________________________________________________

let person = {
    fname: 'Rob',
    age: 25,
    moods: ['happy', 'sad', 'angry'],
    count: 3
};

let { moods, count } = person;
console.log(moods, count);


function outputPerson({ fname, moods }) {
    console.log(fname, moods);
}

outputPerson(person);

// ____________________________________________________________________

class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(...details) {
        return new user(...details);
    }

    get getUsername() {
        return this.username;
    }

    set setUsername(newUsername) {
        console.log('Changing the username...');
        this.username = newUsername;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

let someone = new user('RobStrover', 'blahh@gmail.com');
someone.changeEmail('robstrover@gmail.com');
// console.dir(someone);
console.log(someone);

let someoneElse = user.register('RobStrover2', 'robstrover+01@gmail.com');
console.log(someoneElse);

console.log(`The username is ${someone.getUsername}`);
someone.setUsername = 'ATestOfSetters';
console.log(`The username is now ${someone.getUsername}`);

// ____________________________________________________________________

function log(strategy) {
    strategy.handle();
}

class ConsoleLogger{
    handle() {
        console.log('Using the console strategy to log');
    }
}



log(new ConsoleLogger);