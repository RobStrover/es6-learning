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

