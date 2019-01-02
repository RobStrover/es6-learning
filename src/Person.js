class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, my name is " + this.name;
    }

}

console.log(new Person('Rob Strover').greet());






class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach((task, index) => console.log('blahh this task is blahh: ' + task + ' it is number ' + (index+=1)));
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();



function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100));