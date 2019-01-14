// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"modules/TaskCollection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskCollectionTitle = exports.TaskCollectionModule = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TaskCollectionModule =
/*#__PURE__*/
function () {
  function TaskCollectionModule() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollectionModule);

    this.tasls = tasks;
  }

  _createClass(TaskCollectionModule, [{
    key: "dump",
    value: function dump() {
      console.log(this.tasks);
    }
  }]);

  return TaskCollectionModule;
}();

exports.TaskCollectionModule = TaskCollectionModule;
var TaskCollectionTitle = 'My task Collection';
exports.TaskCollectionTitle = TaskCollectionTitle;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _TaskCollection = require("./modules/TaskCollection");

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      return "Hi, my name is " + this.name;
    }
  }]);

  return Person;
}();

console.log(new Person('Rob Strover').greet()); // ____________________________________________________________________

var TaskCollection =
/*#__PURE__*/
function () {
  function TaskCollection() {
    var tasks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, TaskCollection);

    this.tasks = tasks;
  }

  _createClass(TaskCollection, [{
    key: "log",
    value: function log() {
      this.tasks.forEach(function (task, index) {
        return console.log('blahh this task is blahh: ' + task + ' it is number ' + (index += 1));
      });
    }
  }]);

  return TaskCollection;
}(); // ____________________________________________________________________


var Task = function Task() {
  _classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).log();

function applyDiscount(cost) {
  var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;
  return cost - cost * discount;
}

console.log(applyDiscount(100)); // ____________________________________________________________________

function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  // return numbers.reduce(function(prev, current) {
  //     return prev + current;
  // })
  return numbers.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log(sum(1, 2, 3, 4, 5, 6)); // ____________________________________________________________________

function sum2(x, y) {
  return x + y;
}

var nums = [1, 2];
console.log(sum2.apply(void 0, nums)); // ____________________________________________________________________

var template = ['<p class="message">', 'Hello my name is Rob', '</p>'].join('');
var name = 'Rob';
var template2 = "\n    '<p class=\"message\">',\n        'Hello my name is ".concat(name, "',\n    '</p>'\n");
console.log(template, template2); // ____________________________________________________________________

function getPerson() {
  var name = 'Rob';
  var age = 25;
  return {
    name: name,
    age: age,
    greet: function greet() {
      return "Hello my name ".concat(name, " and I am ").concat(age, " years old.");
    }
  };
}

console.log(getPerson().greet()); // ____________________________________________________________________

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

outputPerson(person); // ____________________________________________________________________

var user =
/*#__PURE__*/
function () {
  function user(username, email) {
    _classCallCheck(this, user);

    this.username = username;
    this.email = email;
  }

  _createClass(user, [{
    key: "changeEmail",
    value: function changeEmail(newEmail) {
      this.email = newEmail;
    }
  }, {
    key: "getUsername",
    get: function get() {
      return this.username;
    }
  }, {
    key: "setUsername",
    set: function set(newUsername) {
      console.log('Changing the username...');
      this.username = newUsername;
    }
  }], [{
    key: "register",
    value: function register() {
      for (var _len2 = arguments.length, details = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        details[_key2] = arguments[_key2];
      }

      return _construct(user, details);
    }
  }]);

  return user;
}();

var someone = new user('RobStrover', 'blahh@gmail.com');
someone.changeEmail('robstrover@gmail.com'); // console.dir(someone);

console.log(someone);
var someoneElse = user.register('RobStrover2', 'robstrover+01@gmail.com');
console.log(someoneElse);
console.log("The username is ".concat(someone.getUsername));
someone.setUsername = 'ATestOfSetters';
console.log("The username is now ".concat(someone.getUsername)); // ____________________________________________________________________

function log(strategy) {
  strategy.handle();
}

var ConsoleLogger =
/*#__PURE__*/
function () {
  function ConsoleLogger() {
    _classCallCheck(this, ConsoleLogger);
  }

  _createClass(ConsoleLogger, [{
    key: "handle",
    value: function handle() {
      console.log('Using the console strategy to log');
    }
  }]);

  return ConsoleLogger;
}();

log(new ConsoleLogger()); // ____________________________________________________________________

console.log(_TaskCollection.TaskCollectionTitle);
new _TaskCollection.TaskCollectionModule(['Go eat some steak.', 'Go eat some chips.', 'Go eat some cake.']).dump();
},{"./modules/TaskCollection":"modules/TaskCollection.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45083" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.map