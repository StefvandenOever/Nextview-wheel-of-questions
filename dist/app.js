"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _React = React,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef,
  useState = _React.useState;
// framer-motion exposes different globals depending on the build.
var FM = window.framerMotion || window.FramerMotion || window.framermotion || window.Motion || null;
var motion = FM ? FM.motion : new Proxy({}, {
  get: function get() {
    return function (props) {
      return React.createElement('div', props, props && props.children);
    };
  }
});
var AnimatePresence = FM ? FM.AnimatePresence : function (_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, children);
};

// ---- Zero-dependency confetti engine (Canvas 2D) ----
var ConfettiEngine = /*#__PURE__*/function () {
  function ConfettiEngine(canvas) {
    var _this = this;
    _classCallCheck(this, ConfettiEngine);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dpr = Math.max(1, window.devicePixelRatio || 1);
    this.particles = [];
    this.running = false;
    this._resize = this.resize.bind(this);
    this.resize();
    window.addEventListener('resize', this._resize);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) _this.stop();else _this.start();
    });
    this.colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#a855f7", "#ec4899", "#22c55e", "#eab308"];
  }
  return _createClass(ConfettiEngine, [{
    key: "resize",
    value: function resize() {
      var canvas = this.canvas,
        dpr = this.dpr;
      var rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }
  }, {
    key: "addBurst",
    value: function addBurst(_ref2) {
      var _ref2$x = _ref2.x,
        x = _ref2$x === void 0 ? 0.5 : _ref2$x,
        _ref2$y = _ref2.y,
        y = _ref2$y === void 0 ? 0.5 : _ref2$y,
        _ref2$count = _ref2.count,
        count = _ref2$count === void 0 ? 150 : _ref2$count,
        _ref2$spread = _ref2.spread,
        spread = _ref2$spread === void 0 ? Math.PI / 2 : _ref2$spread,
        _ref2$speed = _ref2.speed,
        speed = _ref2$speed === void 0 ? 8 : _ref2$speed,
        _ref2$scalar = _ref2.scalar,
        scalar = _ref2$scalar === void 0 ? 1 : _ref2$scalar;
      var _this$canvas = this.canvas,
        width = _this$canvas.width,
        height = _this$canvas.height;
      for (var i = 0; i < count; i++) {
        var angle = Math.random() * spread + (Math.PI / 2 - spread / 2);
        var v = speed * (0.6 + Math.random() * 0.8);
        this.particles.push({
          x: x * width,
          y: y * height,
          vx: Math.cos(angle) * v,
          vy: Math.sin(angle) * v * -1,
          g: 0.18 + Math.random() * 0.28,
          w: 4 * scalar + Math.random() * 4 * scalar,
          h: 8 * scalar + Math.random() * 8 * scalar,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          alpha: 1,
          fade: 0.007 + Math.random() * 0.01,
          color: this.colors[Math.random() * this.colors.length | 0]
        });
      }
      this.start();
    }
  }, {
    key: "addCannon",
    value: function addCannon(_ref3) {
      var _ref3$side = _ref3.side,
        side = _ref3$side === void 0 ? 'left' : _ref3$side;
      var x = side === 'left' ? 0.12 : 0.88;
      this.addBurst({
        x: x,
        y: 0.7,
        count: 180,
        spread: Math.PI / 3,
        speed: 10,
        scalar: 1.1
      });
    }
  }, {
    key: "addRain",
    value: function addRain(_ref4) {
      var _ref4$count = _ref4.count,
        count = _ref4$count === void 0 ? 60 : _ref4$count;
      var width = this.canvas.width;
      for (var i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * width,
          y: -20,
          vx: (Math.random() - 0.5) * 1.2,
          vy: 6 + Math.random() * 3,
          g: 0.04,
          w: 3 + Math.random() * 3,
          h: 10 + Math.random() * 14,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.08,
          alpha: 0.9,
          fade: 0.004 + Math.random() * 0.006,
          color: this.colors[Math.random() * this.colors.length | 0]
        });
      }
      this.start();
    }
  }, {
    key: "addComet",
    value: function addComet() {
      var _this$canvas2 = this.canvas,
        width = _this$canvas2.width,
        height = _this$canvas2.height;
      var startX = Math.random() * width * 0.3;
      var startY = Math.random() * height * 0.2;
      for (var i = 0; i < 28; i++) {
        this.particles.push({
          x: startX - i * 8,
          y: startY + i * 5,
          vx: 6,
          vy: 2,
          g: 0.06,
          w: 3,
          h: 3,
          rot: 0,
          vr: 0.02,
          alpha: 1 - i * 0.03,
          fade: 0.01,
          color: this.colors[Math.random() * this.colors.length | 0]
        });
      }
      this.start();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      if (this.running) return;
      this.running = true;
      var last = performance.now();
      var _step = function step(now) {
        if (!_this2.running) return;
        var dt = Math.min(32, now - last);
        last = now;
        _this2.update(dt);
        _this2.draw();
        if (_this2.particles.length > 0) requestAnimationFrame(_step);else _this2.running = false;
      };
      requestAnimationFrame(_step);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "update",
    value: function update(dt) {
      var gdt = dt / 16.6;
      var _this$canvas3 = this.canvas,
        width = _this$canvas3.width,
        height = _this$canvas3.height;
      this.particles = this.particles.filter(function (p) {
        p.vy += p.g * gdt;
        p.x += p.vx * gdt;
        p.y += p.vy * gdt;
        p.rot += p.vr * gdt;
        p.alpha -= p.fade * gdt;
        return p.alpha > 0 && p.y < height + 40 && p.x > -40 && p.x < width + 40;
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx,
        canvas = this.canvas;
      var dpr = this.dpr;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      var _iterator = _createForOfIteratorHelper(this.particles),
        _step2;
      try {
        for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
          var p = _step2.value;
          ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ctx.restore();
    }
  }, {
    key: "megaShow",
    value: function megaShow() {
      var _this3 = this;
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4200;
      var end = Date.now() + duration;
      var _loop = function loop() {
        _this3.addRain({
          count: 6
        });
        if (secureRandomInt(100) < 18) _this3.addComet();
        if (Date.now() < end) requestAnimationFrame(_loop);
      };
      this.addCannon({
        side: 'left'
      });
      this.addCannon({
        side: 'right'
      });
      this.addBurst({
        x: 0.5,
        y: 0.35,
        count: 180,
        spread: Math.PI * 1.2,
        speed: 9,
        scalar: 1.2
      });
      _loop();
    }
  }]);
}();
var PARTY = new ConfettiEngine(document.getElementById('party-canvas'));

// ---- App UI (slots + editors) ----
var STORAGE_KEYS = {
  team: "woq_team_v4",
  questions: "woq_questions_v1",
  settings: "woq_settings_v7"
};
var DEFAULT_QUESTIONS = ["😀 What’s a small thing that made you smile recently?", "🍝 What’s your go-to comfort food?", "🎬 What’s a movie you can quote from memory?", "🌅 Morning person or night owl?", "🎵 What’s a song that’s been stuck in your head?"];
var DEFAULT_TEAM = ["Alex", "Jamie", "Sam", "Taylor"];
var SoundEngine = /*#__PURE__*/function () {
  function SoundEngine() {
    _classCallCheck(this, SoundEngine);
    this.ctx = null;
  }
  return _createClass(SoundEngine, [{
    key: "unlock",
    value: function () {
      var _unlock = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var o, g;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
              if (!(this.ctx.state === "suspended")) {
                _context.n = 1;
                break;
              }
              _context.n = 1;
              return this.ctx.resume();
            case 1:
              o = this.ctx.createOscillator();
              g = this.ctx.createGain();
              g.gain.value = 0.0001;
              o.connect(g).connect(this.ctx.destination);
              o.start();
              o.stop(this.ctx.currentTime + 0.01);
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function unlock() {
        return _unlock.apply(this, arguments);
      }
      return unlock;
    }()
  }, {
    key: "tone",
    value: function tone() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$freq = _ref5.freq,
        freq = _ref5$freq === void 0 ? 880 : _ref5$freq,
        _ref5$dur = _ref5.dur,
        dur = _ref5$dur === void 0 ? 0.08 : _ref5$dur,
        _ref5$type = _ref5.type,
        type = _ref5$type === void 0 ? "sine" : _ref5$type,
        _ref5$vol = _ref5.vol,
        vol = _ref5$vol === void 0 ? 0.06 : _ref5$vol;
      if (!this.ctx) return;
      var o = this.ctx.createOscillator();
      var g = this.ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      o.connect(g).connect(this.ctx.destination);
      var now = this.ctx.currentTime;
      g.gain.setValueAtTime(vol, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      o.start(now);
      o.stop(now + dur);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.tone({
        freq: 900,
        dur: 0.06,
        type: "triangle",
        vol: 0.05
      });
    }
  }, {
    key: "win",
    value: function win() {
      var _this4 = this;
      [660, 880, 1320].forEach(function (f, i) {
        return setTimeout(function () {
          return _this4.tone({
            freq: f,
            dur: 0.09,
            type: "sine",
            vol: 0.06
          });
        }, i * 90);
      });
    }
  }, {
    key: "crazy",
    value: function crazy() {
      var _this5 = this;
      [220, 330, 440, 550, 660, 770, 880].forEach(function (f, i) {
        return setTimeout(function () {
          return _this5.tone({
            freq: f,
            dur: 0.05,
            type: "square",
            vol: 0.07
          });
        }, i * 50);
      });
    }
  }]);
}();
var SFX = new SoundEngine();
var Icon = function Icon(_ref6) {
  var label = _ref6.label,
    className = _ref6.className,
    children = _ref6.children;
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": label,
    role: "img",
    className: "inline-block align-middle ".concat(className !== null && className !== void 0 ? className : "")
  }, children);
};
var Icons = {
  party: function party(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "party",
      className: cls
    }, "\uD83C\uDF89");
  },
  users: function users(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "users",
      className: cls
    }, "\uD83D\uDC65");
  },
  plus: function plus(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "add",
      className: cls
    }, "\uFF0B");
  },
  trash: function trash(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "Remove",
      className: cls
    }, "\uD83D\uDDD1\uFE0F");
  },
  shuffle: function shuffle(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "shuffle",
      className: cls
    }, "\uD83D\uDD00");
  },
  volOn: function volOn(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "volume on",
      className: cls
    }, "\uD83D\uDD0A");
  },
  volOff: function volOff(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "volume off",
      className: cls
    }, "\uD83D\uDD07");
  },
  download: function download(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "download",
      className: cls
    }, "\u2B07\uFE0F");
  },
  upload: function upload(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "upload",
      className: cls
    }, "\u2B06\uFE0F");
  },
  eye: function eye(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "eye",
      className: cls
    }, "\uD83D\uDC41\uFE0F");
  },
  eyeOff: function eyeOff(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "hide",
      className: cls
    }, "\uD83D\uDE48");
  },
  monitor: function monitor(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "test sound",
      className: cls
    }, "\uD83D\uDCF1");
  },
  boom: function boom(cls) {
    return /*#__PURE__*/React.createElement(Icon, {
      label: "boom",
      className: cls
    }, "\uD83D\uDCA5");
  }
};
function Panel(_ref7) {
  var title = _ref7.title,
    icon = _ref7.icon,
    children = _ref7.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative rounded-3xl bg-white/70 backdrop-blur border border-white/30 shadow-xl p-5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-32 bg-[conic-gradient(from_0deg,rgba(255,255,255,.25),transparent_30%,transparent_70%,rgba(255,255,255,.25))] animate-huepulse opacity-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center gap-2 mb-4"
  }, icon, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, children));
}
function TeamManager(_ref8) {
  var team = _ref8.team,
    onToggle = _ref8.onToggle,
    onAdd = _ref8.onAdd,
    onRemove = _ref8.onRemove,
    onSetAll = _ref8.onSetAll;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var presentCount = team.filter(function (t) {
    return t.present;
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") {
        onAdd(name);
        setName("");
      }
    },
    placeholder: "Add teammate name",
    className: "flex-1 rounded-2xl px-4 py-2 bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      onAdd(name);
      setName("");
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-amber-500 text-white shadow hover:shadow-lg"
  }, Icons.plus("text-base"), " Add")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-sm text-slate-600"
  }, /*#__PURE__*/React.createElement("span", null, "Present: ", /*#__PURE__*/React.createElement("strong", null, presentCount), " / ", team.length), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onSetAll(true);
    },
    className: "px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs shadow"
  }, "All present"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onSetAll(false);
    },
    className: "px-3 py-1 rounded-full bg-slate-400/90 text-white text-xs shadow"
  }, "All away"))), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[380px] overflow-auto pr-1"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "divide-y divide-white/40"
  }, team.map(function (p) {
    return /*#__PURE__*/React.createElement("li", {
      key: p.id,
      className: "flex items-center gap-3 py-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: p.present,
      onChange: function onChange() {
        return onToggle(p.id);
      },
      className: "accent-emerald-600 w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", {
      className: "flex-1 ".concat(p.present ? "" : "opacity-50")
    }, p.name), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return onRemove(p.id);
      },
      className: "p-1.5 rounded-full hover:bg-rose-100/60",
      title: "Remove",
      "aria-label": "Remove"
    }, Icons.trash("text-base")));
  }))));
}
function SlotCard(_ref9) {
  var bigText = _ref9.bigText,
    smallText = _ref9.smallText,
    emoji = _ref9.emoji,
    _ref9$highlight = _ref9.highlight,
    highlight = _ref9$highlight === void 0 ? false : _ref9$highlight,
    _ref9$spotlight = _ref9.spotlight,
    spotlight = _ref9$spotlight === void 0 ? false : _ref9$spotlight,
    _ref9$spotlightIcon = _ref9.spotlightIcon,
    spotlightIcon = _ref9$spotlightIcon === void 0 ? '👑' : _ref9$spotlightIcon,
    _ref9$spotlightSubtit = _ref9.spotlightSubtitle,
    spotlightSubtitle = _ref9$spotlightSubtit === void 0 ? 'On the spot!' : _ref9$spotlightSubtit,
    _ref9$spotlightShowBi = _ref9.spotlightShowBig,
    spotlightShowBig = _ref9$spotlightShowBi === void 0 ? true : _ref9$spotlightShowBi;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full min-h-[240px] sm:min-h-[260px] rounded-3xl p-4 sm:p-6 bg-white/90 backdrop-blur border border-white/40 shadow-2xl ring-4 ".concat(highlight ? 'ring-amber-300/70' : 'ring-white/30')
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.6),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.35),transparent_45%)] rounded-3xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-stretch gap-4 h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "self-stretch flex-shrink-0 w-20 sm:w-24 flex items-center justify-center rounded-2xl bg-slate-100/80 border border-white/40 text-5xl select-none animate-floaty"
  }, emoji || '🎰'), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 grid place-items-center text-center px-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, React.createElement(motion.div || 'div', {
    key: bigText,
    initial: {
      y: 8,
      opacity: 0,
      rotate: -0.5
    },
    animate: {
      y: 0,
      opacity: 1,
      rotate: 0
    },
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30
    },
    className: "text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-snug whitespace-pre-wrap break-words"
  }, bigText), smallText && React.createElement(motion.div || 'div', {
    key: smallText,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.25
    },
    className: "mt-3 text-slate-600 text-base sm:text-lg whitespace-pre-wrap break-words"
  }, smallText))))), React.createElement(AnimatePresence, null, spotlight ? React.createElement('div', {
    className: "absolute inset-0 rounded-3xl bg-black/40 backdrop-blur-sm flex items-center justify-center z-10"
  }, React.createElement(motion.div || 'div', {
    initial: {
      scale: 0.9,
      rotate: -2
    },
    animate: {
      scale: 1,
      rotate: 0
    },
    exit: {
      scale: 0.95,
      opacity: 0
    },
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 20
    },
    className: "px-8 py-6 rounded-3xl bg-white/95 border border-white/40 shadow-2xl text-center"
  }, React.createElement('div', {
    className: "text-5xl mb-2"
  }, spotlightIcon), spotlightShowBig ? React.createElement('div', {
    className: "text-2xl font-extrabold tracking-wide"
  }, bigText) : null, React.createElement('div', {
    className: "mt-2 text-sm text-slate-500"
  }, spotlightSubtitle))) : null));
}
function QuestionsEditor(_ref0) {
  var questions = _ref0.questions,
    setQuestions = _ref0.setQuestions;
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    draft = _useState4[0],
    setDraft = _useState4[1];
  function addQuestion(q) {
    var t = (q || "").trim();
    if (!t) return;
    setQuestions([t].concat(_toConsumableArray(questions)));
    setDraft("");
  }
  function removeQuestion(idx) {
    setQuestions(questions.filter(function (_, i) {
      return i !== idx;
    }));
  }
  function resetDefaults() {
    if (confirm("Replace all questions with the default set?")) setQuestions(DEFAULT_QUESTIONS);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    value: draft,
    onChange: function onChange(e) {
      return setDraft(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addQuestion(draft);
    },
    placeholder: "Add a question (tip: start with an emoji!)",
    className: "flex-1 rounded-2xl px-4 py-2 bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return addQuestion(draft);
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-fuchsia-600 text-white shadow hover:shadow-lg"
  }, Icons.plus("text-base"), " Add")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center text-sm text-slate-600"
  }, /*#__PURE__*/React.createElement("span", null, questions.length, " questions"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: resetDefaults,
    className: "px-3 py-1 rounded-full bg-slate-500/90 text-white text-xs shadow"
  }, "Reset defaults")), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[380px] overflow-auto pr-1"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "divide-y divide-white/40"
  }, questions.map(function (q, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "flex items-start gap-3 py-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 text-xs mt-1"
    }, i + 1, "."), /*#__PURE__*/React.createElement("span", {
      className: "flex-1 text-sm"
    }, q), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return removeQuestion(i);
      },
      className: "p-1.5 rounded-full hover:bg-rose-100/60",
      title: "Remove",
      "aria-label": "Remove"
    }, Icons.trash("text-base")));
  }))));
}
function App() {
  var _useState5 = useState(function () {
      var raw = localStorage.getItem(STORAGE_KEYS.team);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (_unused) {
          localStorage.removeItem(STORAGE_KEYS.team);
        }
      }
      var id = function id() {
        return crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9);
      };
      return DEFAULT_TEAM.map(function (n) {
        return {
          id: id(),
          name: n,
          present: true
        };
      });
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    team = _useState6[0],
    setTeam = _useState6[1];
  var _useState7 = useState(function () {
      var raw = localStorage.getItem(STORAGE_KEYS.questions);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (_unused2) {
          localStorage.removeItem(STORAGE_KEYS.questions);
        }
      }
      return DEFAULT_QUESTIONS;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    questions = _useState8[0],
    setQuestions = _useState8[1];
  var _useState9 = useState(function () {
      var raw = localStorage.getItem(STORAGE_KEYS.settings);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (_unused3) {
          localStorage.removeItem(STORAGE_KEYS.settings);
        }
      }
      return {
        sfx: true,
        showTeam: false,
        showQuestions: false,
        party: true
      };
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    settings = _useState0[0],
    setSettings = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedPerson = _useState10[0],
    setSelectedPerson = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedQuestion = _useState12[0],
    setSelectedQuestion = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    slotPersonRunning = _useState14[0],
    setSlotPersonRunning = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    slotQuestionRunning = _useState16[0],
    setSlotQuestionRunning = _useState16[1];
  var _useState17 = useState(""),
    _useState18 = _slicedToArray(_useState17, 2),
    slotName = _useState18[0],
    setSlotName = _useState18[1];
  var _useState19 = useState(""),
    _useState20 = _slicedToArray(_useState19, 2),
    slotText = _useState20[0],
    setSlotText = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showSpotlight = _useState22[0],
    setShowSpotlight = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showQSpotlight = _useState24[0],
    setShowQSpotlight = _useState24[1];
  useEffect(function () {
    localStorage.setItem(STORAGE_KEYS.team, JSON.stringify(team));
  }, [team]);
  useEffect(function () {
    localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(questions));
  }, [questions]);
  useEffect(function () {
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
  }, [settings]);
  useEffect(function () {
    var handler = function handler() {
      SFX.unlock()["catch"](function () {});
    };
    window.addEventListener("pointerdown", handler, {
      once: true
    });
    return function () {
      return window.removeEventListener("pointerdown", handler);
    };
  }, []);
  var personBag = useRef(new ShuffleBag());
  var questionBag = useRef(new ShuffleBag());
  var presentTeam = useMemo(function () {
    return team.filter(function (t) {
      return t.present;
    });
  }, [team]);
  useEffect(function () {
    personBag.current.reset(presentTeam);
  }, [presentTeam]);
  useEffect(function () {
    questionBag.current.reset(questions);
  }, [questions]);
  function pickRandomPersonSlot() {
    if (!presentTeam.length || slotPersonRunning) return;
    setSelectedQuestion(null);
    setSlotPersonRunning(true);
    var i = 0;
    var interval = setInterval(function () {
      var p = presentTeam[i % presentTeam.length];
      setSlotName(p.name);
      if (settings.sfx) SFX.tick();
      if (settings.party && secureRandomInt(100) < 18) PARTY.addRain({
        count: 4
      });
      i++;
    }, 70);
    var stopAfter = secureRandomInt(800) + 1800;
    setTimeout(function () {
      clearInterval(interval);
      var _final = personBag.current.next();
      setSlotName(_final.name);
      setSelectedPerson(_final);
      setSlotPersonRunning(false);
      setShowSpotlight(true);
      if (settings.party) PARTY.megaShow(4800);
      if (settings.sfx) {
        SFX.win();
        SFX.crazy();
      }
      setTimeout(function () {
        return setShowSpotlight(false);
      }, 2600);
    }, stopAfter);
  }
  function pickRandomQuestionSlot() {
    if (!questions.length || slotQuestionRunning) return;
    setSlotQuestionRunning(true);
    var i = 0;
    var interval = setInterval(function () {
      var q = questions[i % questions.length];
      setSlotText(q);
      if (settings.sfx) SFX.tick();
      if (settings.party && secureRandomInt(100) < 18) PARTY.addRain({
        count: 4
      });
      i++;
    }, 70);
    var stopAfter = secureRandomInt(800) + 1800;
    setTimeout(function () {
      clearInterval(interval);
      var _final2 = questionBag.current.next();
      setSlotText(_final2);
      setSelectedQuestion(_final2);
      setSlotQuestionRunning(false);
      setShowQSpotlight(true);
      if (settings.party) PARTY.megaShow(5000);
      if (settings.sfx) {
        SFX.win();
        SFX.crazy();
      }
      setTimeout(function () {
        return setShowQSpotlight(false);
      }, 2600);
    }, stopAfter);
  }
  function importData(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var payload = JSON.parse(String(reader.result));
        if (Array.isArray(payload.team)) {
          var id = function id() {
            return crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9);
          };
          setTeam(payload.team.map(function (n) {
            var _n$name, _n$present;
            return {
              id: id(),
              name: String((_n$name = n.name) !== null && _n$name !== void 0 ? _n$name : n),
              present: Boolean((_n$present = n.present) !== null && _n$present !== void 0 ? _n$present : true)
            };
          }));
        }
        if (Array.isArray(payload.questions)) setQuestions(payload.questions.map(String));
      } catch (_unused4) {
        alert("Couldn’t import JSON. Make sure it contains { team: [], questions: [] }...");
      }
    };
    reader.readAsText(file);
  }
  function exportData() {
    var blob = new Blob([JSON.stringify({
      team: team.map(function (_ref1) {
        var name = _ref1.name,
          present = _ref1.present;
        return {
          name: name,
          present: present
        };
      }),
      questions: questions
    }, null, 2)], {
      type: "application/json"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "wheel-of-questions.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  var layoutCols = settings.showTeam && settings.showQuestions ? "lg:grid-cols-3" : settings.showTeam || settings.showQuestions ? "lg:grid-cols-2" : "lg:grid-cols-1";
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen w-full text-slate-800 relative"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-30 backdrop-blur ".concat(settings.party ? 'bg-gradient-to-r from-rose-200/60 via-amber-200/60 to-lime-200/60' : 'bg-white/40', " border-b border-white/20")
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 py-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: "nextview-logo.png",
    alt: "Nextview Consulting",
    className: "h-7 object-contain ".concat(settings.party ? 'animate-huepulse' : '')
  }), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-semibold"
  }, "Nextview Wheel of Questions"), /*#__PURE__*/React.createElement("span", {
    className: "ml-auto flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseDown: function onMouseDown() {
      return SFX.unlock();
    },
    onClick: function onClick() {
      return setSettings(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          sfx: !s.sfx
        });
      });
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition",
    title: settings.sfx ? "Disable sounds" : "Enable sounds"
  }, settings.sfx ? "🔊" : "🔇", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "SFX")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      SFX.unlock();
      settings.sfx && SFX.tick();
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition",
    title: "Test sound"
  }, "\uD83D\uDCF1", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Test")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSettings(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          showTeam: !s.showTeam
        });
      });
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition",
    title: settings.showTeam ? "Hide team" : "Show team"
  }, settings.showTeam ? "🙈" : "👁️", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Team")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSettings(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          showQuestions: !s.showQuestions
        });
      });
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition",
    title: settings.showQuestions ? "Hide questions" : "Show questions"
  }, settings.showQuestions ? "🙈" : "👁️", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Questions")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: exportData,
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition",
    title: "Export team & questions"
  }, "\u2B07\uFE0F", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Export")), /*#__PURE__*/React.createElement("label", {
    className: "cursor-pointer inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition"
  }, "\u2B06\uFE0F", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "Import"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "application/json",
    className: "hidden",
    onChange: function onChange(e) {
      return e.target.files && importData(e.target.files[0]);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setSettings(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          party: !s.party
        });
      });
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 shadow hover:shadow-lg transition ".concat(settings.party ? 'bg-lime-500 text-white' : 'bg-white/60'),
    title: settings.party ? "Disable party mode" : "Enable party mode"
  }, "\uD83D\uDCA5", /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, settings.party ? 'Party ON' : 'Party')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      PARTY.megaShow(5000);
      if (settings.sfx) {
        SFX.unlock();
        SFX.crazy();
      }
    },
    className: "inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-rose-500 text-white shadow hover:shadow-lg"
  }, "\uD83C\uDF89 Test Party")))), /*#__PURE__*/React.createElement("main", {
    className: "relative z-10 mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 ".concat(layoutCols, " gap-6")
  }, settings.showTeam && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Panel, {
    title: "Team",
    icon: "👥"
  }, /*#__PURE__*/React.createElement(TeamManager, {
    team: team,
    onToggle: function onToggle(id) {
      return setTeam(function (t) {
        return t.map(function (p) {
          return p.id === id ? _objectSpread(_objectSpread({}, p), {}, {
            present: !p.present
          }) : p;
        });
      });
    },
    onAdd: function onAdd(name) {
      var trimmed = (name || "").trim();
      if (trimmed) setTeam(function (t) {
        return [{
          id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9),
          name: trimmed,
          present: true
        }].concat(_toConsumableArray(t));
      });
    },
    onRemove: function onRemove(id) {
      setTeam(function (t) {
        return t.filter(function (p) {
          return p.id !== id;
        });
      });
      if ((selectedPerson === null || selectedPerson === void 0 ? void 0 : selectedPerson.id) === id) setSelectedPerson(null);
    },
    onSetAll: function onSetAll(present) {
      return setTeam(function (t) {
        return t.map(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            present: present
          });
        });
      });
    }
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Panel, {
    title: "The Slots",
    icon: "🎉"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-stretch gap-4"
  }, /*#__PURE__*/React.createElement(SlotCard, {
    bigText: slotName || "—",
    smallText: selectedPerson ? "On the spot!" : "Tap PICK to choose a person",
    emoji: "\uD83D\uDC64",
    highlight: Boolean(selectedPerson),
    spotlight: showSpotlight
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex sm:flex-col gap-3 sm:w-40"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: pickRandomPersonSlot,
    disabled: slotPersonRunning || presentTeam.length === 0,
    className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white shadow hover:shadow-lg active:translate-y-[1px] ".concat(slotPersonRunning || presentTeam.length === 0 ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500")
  }, "\uD83D\uDD00 Pick person"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-stretch gap-4"
  }, /*#__PURE__*/React.createElement(SlotCard, {
    bigText: slotText || "—",
    smallText: selectedQuestion ? "This is what we'd like to know from you" : "Tap SPIN to get a question",
    emoji: "\u2753",
    highlight: Boolean(selectedQuestion),
    spotlight: showQSpotlight,
    spotlightIcon: "\u2753",
    spotlightSubtitle: "This is what we'd like to know from you",
    spotlightShowBig: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex sm:flex-col gap-3 sm:w-40"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: pickRandomQuestionSlot,
    disabled: slotQuestionRunning || questions.length === 0,
    className: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white shadow hover:shadow-lg active:translate-y-[1px] ".concat(slotQuestionRunning || questions.length === 0 ? "bg-fuchsia-300 cursor-not-allowed" : "bg-fuchsia-600")
  }, "\uD83D\uDD00 Spin question")))))), settings.showQuestions && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Panel, {
    title: "Questions",
    icon: "🎉"
  }, /*#__PURE__*/React.createElement(QuestionsEditor, {
    questions: questions,
    setQuestions: setQuestions
  })))), /*#__PURE__*/React.createElement("footer", {
    className: "mx-auto max-w-7xl px-4 pb-10 -mt-2 text-center text-xs text-slate-700 relative z-10"
  }, "Nextview Wheel of Questions \xB7 Party Mode (no external confetti libs) \xB7 Built by ChatGPT"));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
