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

var Task = function Task() {
    _classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).log();

function applyDiscount(cost) {
    var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;

    return cost - cost * discount;
}

console.log(applyDiscount(100));