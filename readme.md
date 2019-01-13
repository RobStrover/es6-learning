# ES6 Learning #
Notes from the [ES2015 crash course from Laracasts](https://laracasts.com/series/es6-cliffsnotes/episodes/1).
## Browser Compatibility ##
To support older browsers use the [babel compiler](https://babeljs.io/). This will make all ES5 browsers happy, a must for clients that want IE support.
## Simple Babel Setup ##
Install Babel with NPM: ```npm install --save-dev babel-cli```

Also make sure to include the ES6 presets: ```npm install babel-preset-es2015 --save-dev```.

Create a .babelrc file and include your installed presets:
```json
{
  "presets": ["es2015"]
}
```

in your package.json, include a build script:
```json
"scripts": {
       "build": "babel src -d output"
     }
```
<sup>first argument is the source directory in this case, the 'src' folder and -d flag is the 'destination', in this case 'output'.</sup>

Then run ```npm run build``` and hey presto! All js in the source folder will now be compiled from ES6 to ES5 and put in the output folder. Happy days!

### With Laravel ###
Laravel Elixir comes with all of this out of the box so you don't need to worry!

## Getting Started with ES6 ##
### Block Level Declarations ###
Follow their lexical scopes.
#### let ####
Behaves as you would expect a normal variable to work.
#### const ####
This is used when you want assignment of the variable to be immutable. The value can still be modified however.
Use this as a way of telling other developers how you want the variable to be used. No reassignment!
It is possible to force immutability in a const variable with freeze:

```js
const months = Object.freeze([...]);
```

## Function Arrow Syntax ##
Look upon this sorcery. Consider the following code:
```js

this.tasks.forEach(function(task){
            console.log('blahh this task is blahh: ' + task);
        });

```
We can remove the function keyword entirely from the declaration using the arrow syntax:
```js

this.tasks.forEach((task) => {
            console.log('blahh this task is blahh: ' + task);
        });

```

If we are writing a [unary function](https://www.google.co.uk/search?q=unery+function&rlz=1C1CHBF_enGB768GB768&oq=unery+function&aqs=chrome..69i57j0l5.8394j1j7&sourceid=chrome&ie=UTF-8) then we can also remove the parenthesis as well!
```js

this.tasks.forEach(task => {
            console.log('blahh this task is blahh: ' + task);
        });

```
For simple functions, we can even remove the curly braces (returning is implicit):
```js

this.tasks.forEach(task => console.log('blahh this task is blahh: ' + task));

```

### Side Effects ###
Removing the function keyword causes the value of ```this``` to change
- Using the function keyword makes ```this``` refer to the window object.
- Using arrow syntax means that the binding does not change from parent scope.

## Default Parameters ##
Like any other modern language, you can now define default parameters in function declarations.

Before:
```js
function applyDiscount(cost, discount) {
    
    discount = discount || .10;
    
    return cost - (cost * discount);
}

console.log(applyDiscount(100));
```

After:

```js
function applyDiscount(cost, discount = .10) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100));
```
## Rest and Spread Operators
### Rest Operators
Rest Operators map a set of function arguments into an array. For example:
```javascript
function sum(...numbers) {
    return numbers.reduce(function(prev, current) {
        return prev + current;
    })
}

console.log(sum(1, 2, 3, 4, 5, 6));
```
In the code above, the arguments in the function signature are mapped into the ...numbers argument in the declaration. Perfect for use with a map or a reduce whilst keeping the code as user friendly as possible.

### Spread Operators
Spread Operators map an array of parameters to arguments in a function signature. For example:
```javascript
function sum2(x, y) {
    return x + y;
}

let nums = [1, 2];

console.log(sum2(...nums));
```
The nums array is mapped to the x and y arguments in the function declaration by the ...nums variable in the signature.

## String Templates ##
String Templates offer a much nicer approach to creating strings with dynamic properties. For example:
```javascript
let name = 'Rob';
let colour = 'Red';
let message = 'Hello my name is ' + name + ' and my favourite colour is ' + colour;
```

can now become 

```javascript
let name = 'Rob';
let colour = 'Red';
let message = `Hello my name is ${name} and my favourite colour is ${colour}`;
```
Simply use the backtick character `` instead of single or double quotes to get started with this.

## Property Shorthand ##
In situations when returning an object from a function such as:
```javascript
function getPerson() {

    let name = 'Rob';
    let age = 25;

    return {
        name: name,
        age: age,
    };
}
```
If the property being returned is the same name as the property in the function, we can now express this as:
```javascript
function getPerson() {

    let name = 'Rob';
    let age = 25;

    return {
        name,
        age,
    };
}
```

## Short Methods ##
Short methods are great as return properies:
```javascript
function getPerson() {

    let name = 'Rob';
    let age = 25;

    return {
        name,
        age,
        greet() { return `Hello my name ${name} and I am ${age} years old.` }
    };
}
```

## Object Destructuring ##
Object Destructuring is great for when you want to parse only a few bits of data that matter from an object to a function. Consider the following example:
```javascript
let person = {
    fname: 'Rob',
    age: 25,
    moods: ['happy', 'sad', 'angry'],
    count: 3
};

function outputPersonNameAndMoods(person) {
    console.log(person.fname, person.moods);
}

outputPersonNameAndMoods(person);
```
Rather than pass through the entire person object to the function, we can pass through only what matters (fname and moods) with:
```javascript
let person = {
    fname: 'Rob',
    age: 25,
    moods: ['happy', 'sad', 'angry'],
    count: 3
};

function outputPerson({ fname, moods }) {
    console.log(fname, moods);
}

outputPerson(person);
```
This also works this way as well:
```javascript
let person = {
    fname: 'Rob',
    age: 25,
    moods: ['happy', 'sad', 'angry'],
    count: 3
};

let { fname, moods } = person;
console.log(fname, moods);
```
## Classes ##
### Constructors ###
Classes can now be defined using a similar syntax (including a constructor) to other languages:
```javascript
class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}
```
This can be called using:
```javascript
let someone = new user('RobStrover', 'blahh@gmail.com');
```
### Methods ###
Extra methods can be added like so:
```javascript
changeEmail(newEmail) {
        this.email = newEmail;
    }
```
This will add the function to the prototype behind the scenes. Methods can be called in the same way like this:
```javascript
someone.changeEmail('robstrover@gmail.com');
```
### Static Functions ###
Static functions can now also be added:
```javascript
class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(...details) {
        return new user(...details);
    }
}
```
In this example, Rest and Spread operators are used to handle the arguments. This static method can be used like so:
```javascript
let someoneElse = user.register('RobStrover2', 'robstrover+01@gmail.com');
```
### Getters ###
Getters can be added to a class like this:
```javascript
class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    get getUsername() {
        return this.username;
    }
}
```
And used without parenthesis, nice and neat in a string template:
```javascript
console.log(`The username is ${someone.getUsername}`);
```
### Setters ###
Setters can be added to a class like this:
```javascript
class user {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    set setUsername(newUsername) {
        this.username = newUsername;
    }
}
```
And then used (again, without parenthesis) like this:
```javascript
someone.setUsername = 'ATestOfSetters';
```
## Modules ##
It is possible to export multiple items from a JS file:
```javascript
export class TaskCollectionModule {
    constructor (tasks = []) {
        this.tasls = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let TaskCollectionTitle = 'My task Collection';
```
In this example, both the ```TaskCollectionModule``` class and the ```TaskCollectionTitle``` variable are exported.
These items can then be imported:
```javascript
import { TaskCollectionModule, TaskCollectionTitle } from "./modules/TaskCollection";
```
In scenarios where you are only exporting one item, you can use the ```default``` keyword:
```javascript
export default let TaskCollectionTitle = 'My task Collection';
```
Using this means you can then clean up your import:
```javascript
import TaskCollectionTitle from "./modules/TaskCollection";
```
If you change your mind later and want to export something else as well as the default then simply export it as you did before and use the following as your import:
```javascript
import TaskCollectionTitle, { TaskCollectionModule } from "./modules/TaskCollection";
```
