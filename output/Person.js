'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'greet',
        value: function greet() {
            return "Hi, my name is " + this.name;
        }
    }]);

    return Person;
}();

console.log(new Person('Rob Strover').greet());

// ____________________________________________________________________

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: 'log',
        value: function log() {
            this.tasks.forEach(function (task, index) {
                return console.log('blahh this task is blahh: ' + task + ' it is number ' + (index += 1));
            });
        }
    }]);

    return TaskCollection;
}();

// ____________________________________________________________________

var Task = function Task() {
    _classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).log();

function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;

    return cost - cost * discount;
}

console.log(applyDiscount(100));

// ____________________________________________________________________


function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    // return numbers.reduce(function(prev, current) {
    //     return prev + current;
    // })

    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(sum(1, 2, 3, 4, 5, 6));

// ____________________________________________________________________


function sum2(x, y) {
    return x + y;
}

var nums = [1, 2];

console.log(sum2.apply(undefined, nums));

// ____________________________________________________________________

var template = ['<p class="message">', 'Hello my name is Rob', '</p>'].join('');

var name = 'Rob';
var template2 = '\n    \'<p class="message">\',\n        \'Hello my name is ' + name + '\',\n    \'</p>\'\n';

console.log(template, template2);

// ____________________________________________________________________

function getPerson() {

    var name = 'Rob';
    var age = 25;

    return {
        name: name,
        age: age,
        greet: function greet() {
            return 'Hello my name ' + name + ' and I am ' + age + ' years old.';
        }
    };
}

console.log(getPerson().greet());

// ____________________________________________________________________

var person = {
    fname: 'Rob',
    age: 25,
    moods: ['happy', 'sad', 'angry'],
    count: 3
};

var moods = person.moods,
    count = person.count;

console.log(moods, count);

function outputPerson(_ref) {
    var fname = _ref.fname,
        moods = _ref.moods;

    console.log(fname, moods);
}

outputPerson(person);

// ____________________________________________________________________