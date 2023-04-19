// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin {\n  height:100%;\n  background-color: rgb(255, 213, 28);\n  position: relative;\n}\n\n/* \u773C\u775B */\n.eye {\n  width: 50px;\n  height: 50px;\n  background-color: rgb(54, 54, 54);\n  border-radius: 50%;\n  border: 1px solid black;\n  position: absolute;\n  top: 80px;\n  right: 50%;\n  margin-right: -25px;\n}\n.eye.left {\n  transform: translateX(-100px);\n}\n.eye.right {\n  transform: translateX(100px);\n}\n.eye::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  position: relative;\n  top: 2px;\n  left: 8px;\n}\n\n/* \u9F3B\u5B50 */\n.nose {\n  width: 0px;\n  height: 0px;\n  border: 10px solid rgb(0, 0, 0);\n  border-bottom: none;\n  border-color: black transparent transparent;\n  position: absolute;\n  left: 50%;\n  top: 120px;\n  margin-left: -10px;\n  z-index: 100;\n}\n\n.nose .yuanhu {\n  width: 20px;\n  height: 5px;\n  background-color: rgb(0, 0, 0);\n  position: relative;\n  top: -15px;\n  left: -10px;\n  border-radius: 10px 10px 0 0 ;\n}\n\n.mouth .lip {\n  border: 4px solid rgb(0, 0, 0);\n  width: 90px;\n  height: 26px;\n  border-top: none;\n  position: absolute;\n  background-color: rgb(255, 213, 28);\n  z-index: 10;\n}\n.mouth .left{\n  border-radius: 0 0 0 50px;\n  border-right: none;\n  transform: rotate(-15deg);\n}\n.mouth .right{\n  border-radius: 0 0 50px 0;\n  border-left: none;\n  transform: rotate(15deg);\n  right: 0;\n}\n.mouth .mouth-down {\n  width: 100%;\n  height: 180px;\n  position: absolute;\n  top: 8px;\n  overflow: hidden;\n}\n.mouth .mouth-down .yuan1{\n  width: 150px;\n  height: 1000px;\n  background-color: rgb(158, 39, 39);\n  border: 3px solid black;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin-left: 15px;\n  border-radius: 75px/300px;\n  overflow: hidden;\n}\n.mouth .mouth-down .yuan2{\n  width: 200px;\n  height: 200px;\n  background-color: rgb(255, 108, 108);\n  position: absolute;\n  bottom: -50px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n\n/* \u8138\u90E8 */\n.skin .face{\n  width: 80px;\n  height: 80px;\n  border: 3px solid black;\n  background-color: red;\n  border-radius: 50%;\n  position: absolute;\n  top: 200px;\n  left: 50%;\n  margin-left: -40px;\n}\n\n.skin .face-left {\n  transform: translateX(-140px);\n}\n.skin .face-right {\n  transform: translateX(140px);\n}\n\n.face img {\n  display: block;\n}\n\n/* \u6709\u672C\u4E8B\u70B9\u6211\u9F3B\u5B50\u4E0A\u8BD5\u8BD5 */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    html: document.querySelector('#html'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.html.innerText = _css.default.substr(0, player.n);
    player.ui.style.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.html.innerText = _css.default.substr(0, player.n);
    player.ui.style.innerHTML = _css.default.substr(0, player.n);
    player.ui.html.scrollTop = player.ui.html.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=/main.fa59cd71.js.map