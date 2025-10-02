var _Symbol$metadata, _a$1$litPropertyMetad, _a$1$reactiveElementV, _t$litHtmlVersions, _s$litElementHydrateS, _s$litElementVersions, _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf(derived);
  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
}
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e9) { throw _e9; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e0) { didErr = true; err = _e0; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1 = globalThis,
  e$4 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s$2 = Symbol(),
  o$4 = new WeakMap();
var n$3 = /*#__PURE__*/function () {
  function n(t, e, o) {
    _classCallCheck(this, n);
    if (this._$cssResult$ = true, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  return _createClass(n, [{
    key: "styleSheet",
    get: function get() {
      var t = this.o;
      var s = this.t;
      if (e$4 && void 0 === t) {
        var _e2 = void 0 !== s && 1 === s.length;
        _e2 && (t = o$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e2 && o$4.set(s, t));
      }
      return t;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);
}();
var r$4 = function r$4(t) {
    return new n$3("string" == typeof t ? t : t + "", void 0, s$2);
  },
  i$3 = function i$3(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    var o = 1 === t.length ? t[0] : e.reduce(function (e, s, o) {
      return e + function (t) {
        if (true === t._$cssResult$) return t.cssText;
        if ("number" == typeof t) return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      }(s) + t[o + 1];
    }, t[0]);
    return new n$3(o, t, s$2);
  },
  S$1 = function S$1(s, o) {
    if (e$4) s.adoptedStyleSheets = o.map(function (t) {
      return t instanceof CSSStyleSheet ? t : t.styleSheet;
    });else {
      var _iterator = _createForOfIteratorHelper(o),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e3 = _step.value;
          var _o = document.createElement("style"),
            _n = t$1.litNonce;
          void 0 !== _n && _o.setAttribute("nonce", _n), _o.textContent = _e3.cssText, s.appendChild(_o);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  },
  c$2 = e$4 ? function (t) {
    return t;
  } : function (t) {
    return t instanceof CSSStyleSheet ? function (t) {
      var e = "";
      var _iterator2 = _createForOfIteratorHelper(t.cssRules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s = _step2.value;
          e += _s.cssText;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return r$4(e);
    }(t) : t;
  };

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i$2 = Object.is,
  e$3 = Object.defineProperty,
  h$1 = Object.getOwnPropertyDescriptor,
  r$3 = Object.getOwnPropertyNames,
  o$3 = Object.getOwnPropertySymbols,
  n$2 = Object.getPrototypeOf,
  a$1 = globalThis,
  c$1 = a$1.trustedTypes,
  l$1 = c$1 ? c$1.emptyScript : "",
  p$1 = a$1.reactiveElementPolyfillSupport,
  d$1 = function d$1(t, s) {
    return t;
  },
  u$1 = {
    toAttribute: function toAttribute(t, s) {
      switch (s) {
        case Boolean:
          t = t ? l$1 : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute: function fromAttribute(t, s) {
      var i = t;
      switch (s) {
        case Boolean:
          i = null !== t;
          break;
        case Number:
          i = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            i = JSON.parse(t);
          } catch (t) {
            i = null;
          }
      }
      return i;
    }
  },
  f$1 = function f$1(t, s) {
    return !i$2(t, s);
  },
  b = {
    attribute: true,
    type: String,
    converter: u$1,
    reflect: false,
    useDefault: false,
    hasChanged: f$1
  };
(_Symbol$metadata = Symbol.metadata) !== null && _Symbol$metadata !== void 0 ? _Symbol$metadata : Symbol.metadata = Symbol("metadata"), (_a$1$litPropertyMetad = a$1.litPropertyMetadata) !== null && _a$1$litPropertyMetad !== void 0 ? _a$1$litPropertyMetad : a$1.litPropertyMetadata = new WeakMap();
var y$1 = /*#__PURE__*/function (_HTMLElement) {
  function y() {
    var _this2;
    _classCallCheck(this, y);
    _this2 = _callSuper(this, y), _this2._$Ep = void 0, _this2.isUpdatePending = false, _this2.hasUpdated = false, _this2._$Em = null, _this2._$Ev();
    return _this2;
  }
  _inherits(y, _HTMLElement);
  return _createClass(y, [{
    key: "_$Ev",
    value: function _$Ev() {
      var _this3 = this,
        _this$constructor$l;
      this._$ES = new Promise(function (t) {
        return _this3.enableUpdating = t;
      }), this._$AL = new Map(), this._$E_(), this.requestUpdate(), (_this$constructor$l = this.constructor.l) === null || _this$constructor$l === void 0 ? void 0 : _this$constructor$l.forEach(function (t) {
        return t(_this3);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var _this$_$EO, _t$hostConnected;
      ((_this$_$EO = this._$EO) !== null && _this$_$EO !== void 0 ? _this$_$EO : this._$EO = new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && ((_t$hostConnected = t.hostConnected) === null || _t$hostConnected === void 0 ? void 0 : _t$hostConnected.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var _this$_$EO2;
      (_this$_$EO2 = this._$EO) === null || _this$_$EO2 === void 0 || _this$_$EO2["delete"](t);
    }
  }, {
    key: "_$E_",
    value: function _$E_() {
      var t = new Map(),
        s = this.constructor.elementProperties;
      var _iterator3 = _createForOfIteratorHelper(s.keys()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i = _step3.value;
          this.hasOwnProperty(_i) && (t.set(_i, this[_i]), delete this[_i]);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      t.size > 0 && (this._$Ep = t);
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var _this$shadowRoot;
      var t = (_this$shadowRoot = this.shadowRoot) !== null && _this$shadowRoot !== void 0 ? _this$shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
      return S$1(t, this.constructor.elementStyles), t;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$renderRoot, _this$_$EO3;
      (_this$renderRoot = this.renderRoot) !== null && _this$renderRoot !== void 0 ? _this$renderRoot : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_this$_$EO3 = this._$EO) === null || _this$_$EO3 === void 0 ? void 0 : _this$_$EO3.forEach(function (t) {
        var _t$hostConnected2;
        return (_t$hostConnected2 = t.hostConnected) === null || _t$hostConnected2 === void 0 ? void 0 : _t$hostConnected2.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$_$EO4;
      (_this$_$EO4 = this._$EO) === null || _this$_$EO4 === void 0 || _this$_$EO4.forEach(function (t) {
        var _t$hostDisconnected;
        return (_t$hostDisconnected = t.hostDisconnected) === null || _t$hostDisconnected === void 0 ? void 0 : _t$hostDisconnected.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, s, i) {
      this._$AK(t, i);
    }
  }, {
    key: "_$ET",
    value: function _$ET(t, s) {
      var i = this.constructor.elementProperties.get(t),
        e = this.constructor._$Eu(t, i);
      if (void 0 !== e && true === i.reflect) {
        var _i$converter;
        var _h = (void 0 !== ((_i$converter = i.converter) === null || _i$converter === void 0 ? void 0 : _i$converter.toAttribute) ? i.converter : u$1).toAttribute(s, i.type);
        this._$Em = t, null == _h ? this.removeAttribute(e) : this.setAttribute(e, _h), this._$Em = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, s) {
      var i = this.constructor,
        e = i._$Eh.get(t);
      if (void 0 !== e && this._$Em !== e) {
        var _t$converter, _ref, _h2$fromAttribute, _this$_$Ej;
        var _t = i.getPropertyOptions(e),
          _h2 = "function" == typeof _t.converter ? {
            fromAttribute: _t.converter
          } : void 0 !== ((_t$converter = _t.converter) === null || _t$converter === void 0 ? void 0 : _t$converter.fromAttribute) ? _t.converter : u$1;
        this._$Em = e, this[e] = (_ref = (_h2$fromAttribute = _h2.fromAttribute(s, _t.type)) !== null && _h2$fromAttribute !== void 0 ? _h2$fromAttribute : (_this$_$Ej = this._$Ej) === null || _this$_$Ej === void 0 ? void 0 : _this$_$Ej.get(e)) !== null && _ref !== void 0 ? _ref : null, this._$Em = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, s, i) {
      if (void 0 !== t) {
        var _i$hasChanged, _this$_$Ej2;
        var _e4 = this.constructor,
          _h3 = this[t];
        if (i !== null && i !== void 0 ? i : i = _e4.getPropertyOptions(t), !(((_i$hasChanged = i.hasChanged) !== null && _i$hasChanged !== void 0 ? _i$hasChanged : f$1)(_h3, s) || i.useDefault && i.reflect && _h3 === ((_this$_$Ej2 = this._$Ej) === null || _this$_$Ej2 === void 0 ? void 0 : _this$_$Ej2.get(t)) && !this.hasAttribute(_e4._$Eu(t, i)))) return;
        this.C(t, s, i);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
  }, {
    key: "C",
    value: function C(t, s, _ref2, r) {
      var _this$_$Ej3, _ref3, _this$_$Eq;
      var i = _ref2.useDefault,
        e = _ref2.reflect,
        h = _ref2.wrapped;
      i && !((_this$_$Ej3 = this._$Ej) !== null && _this$_$Ej3 !== void 0 ? _this$_$Ej3 : this._$Ej = new Map()).has(t) && (this._$Ej.set(t, (_ref3 = r !== null && r !== void 0 ? r : s) !== null && _ref3 !== void 0 ? _ref3 : this[t]), true !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), true === e && this._$Em !== t && ((_this$_$Eq = this._$Eq) !== null && _this$_$Eq !== void 0 ? _this$_$Eq : this._$Eq = new Set()).add(t));
    }
  }, {
    key: "_$EP",
    value: function () {
      var _$EP2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var t, _t2, _t3;
        return _regeneratorRuntime().wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.isUpdatePending = true;
              _context.prev = 1;
              _context.next = 2;
              return this._$ES;
            case 2:
              _context.next = 4;
              break;
            case 3:
              _context.prev = 3;
              _t2 = _context["catch"](1);
              Promise.reject(_t2);
            case 4:
              t = this.scheduleUpdate();
              _t3 = null != t;
              if (!_t3) {
                _context.next = 5;
                break;
              }
              _context.next = 5;
              return t;
            case 5:
              return _context.abrupt("return", !this.isUpdatePending);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 3]]);
      }));
      function _$EP() {
        return _$EP2.apply(this, arguments);
      }
      return _$EP;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        var _this$renderRoot2;
        if ((_this$renderRoot2 = this.renderRoot) !== null && _this$renderRoot2 !== void 0 ? _this$renderRoot2 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
          var _iterator4 = _createForOfIteratorHelper(this._$Ep),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                _t4 = _step4$value[0],
                _s2 = _step4$value[1];
              this[_t4] = _s2;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          this._$Ep = void 0;
        }
        var _t5 = this.constructor.elementProperties;
        if (_t5.size > 0) {
          var _iterator5 = _createForOfIteratorHelper(_t5),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                _s3 = _step5$value[0],
                _i2 = _step5$value[1];
              var _t6 = _i2.wrapped,
                _e5 = this[_s3];
              true !== _t6 || this._$AL.has(_s3) || void 0 === _e5 || this.C(_s3, void 0, _i2, _e5);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
      var t = false;
      var s = this._$AL;
      try {
        var _this$_$EO5;
        t = this.shouldUpdate(s), t ? (this.willUpdate(s), (_this$_$EO5 = this._$EO) !== null && _this$_$EO5 !== void 0 && _this$_$EO5.forEach(function (t) {
          var _t$hostUpdate;
          return (_t$hostUpdate = t.hostUpdate) === null || _t$hostUpdate === void 0 ? void 0 : _t$hostUpdate.call(t);
        }), this.update(s)) : this._$EM();
      } catch (s) {
        throw t = false, this._$EM(), s;
      }
      t && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var _this$_$EO6;
      (_this$_$EO6 = this._$EO) !== null && _this$_$EO6 !== void 0 && _this$_$EO6.forEach(function (t) {
        var _t$hostUpdated;
        return (_t$hostUpdated = t.hostUpdated) === null || _t$hostUpdated === void 0 ? void 0 : _t$hostUpdated.call(t);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$EM",
    value: function _$EM() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$ES;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return true;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this4 = this;
      this._$Eq && (this._$Eq = this._$Eq.forEach(function (t) {
        return _this4._$ET(t, _this4[t]);
      })), this._$EM();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var _this$l;
      this._$Ei(), ((_this$l = this.l) !== null && _this$l !== void 0 ? _this$l : this.l = []).push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return this.finalize(), this._$Eh && _toConsumableArray(this._$Eh.keys());
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : b;
      if (s.state && (s.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = true), this.elementProperties.set(t, s), !s.noAccessor) {
        var _i3 = Symbol(),
          _h4 = this.getPropertyDescriptor(t, _i3, s);
        void 0 !== _h4 && e$3(this.prototype, t, _h4);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, s, i) {
      var _h$;
      var _ref4 = (_h$ = h$1(this.prototype, t)) !== null && _h$ !== void 0 ? _h$ : {
          get: function get() {
            return this[s];
          },
          set: function set(t) {
            this[s] = t;
          }
        },
        e = _ref4.get,
        r = _ref4.set;
      return {
        get: e,
        set: function set(s) {
          var h = e === null || e === void 0 ? void 0 : e.call(this);
          r !== null && r !== void 0 && r.call(this, s), this.requestUpdate(t, h, i);
        },
        configurable: true,
        enumerable: true
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      var _this$elementProperti;
      return (_this$elementProperti = this.elementProperties.get(t)) !== null && _this$elementProperti !== void 0 ? _this$elementProperti : b;
    }
  }, {
    key: "_$Ei",
    value: function _$Ei() {
      if (this.hasOwnProperty(d$1("elementProperties"))) return;
      var t = n$2(this);
      t.finalize(), void 0 !== t.l && (this.l = _toConsumableArray(t.l)), this.elementProperties = new Map(t.elementProperties);
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(d$1("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
        var _t7 = this.properties,
          _s4 = [].concat(_toConsumableArray(r$3(_t7)), _toConsumableArray(o$3(_t7)));
        var _iterator6 = _createForOfIteratorHelper(_s4),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _i4 = _step6.value;
            this.createProperty(_i4, _t7[_i4]);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      var t = this[Symbol.metadata];
      if (null !== t) {
        var _s5 = litPropertyMetadata.get(t);
        if (void 0 !== _s5) {
          var _iterator7 = _createForOfIteratorHelper(_s5),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                _t8 = _step7$value[0],
                _i5 = _step7$value[1];
              this.elementProperties.set(_t8, _i5);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      }
      this._$Eh = new Map();
      var _iterator8 = _createForOfIteratorHelper(this.elementProperties),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = _slicedToArray(_step8.value, 2),
            _t9 = _step8$value[0],
            _s6 = _step8$value[1];
          var _i6 = this._$Eu(_t9, _s6);
          void 0 !== _i6 && this._$Eh.set(_i6, _t9);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(s) {
      var i = [];
      if (Array.isArray(s)) {
        var _e6 = new Set(s.flat(1 / 0).reverse());
        var _iterator9 = _createForOfIteratorHelper(_e6),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _s7 = _step9.value;
            i.unshift(c$2(_s7));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      } else void 0 !== s && i.push(c$2(s));
      return i;
    }
  }, {
    key: "_$Eu",
    value: function _$Eu(t, s) {
      var i = s.attribute;
      return false === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
y$1.elementStyles = [], y$1.shadowRootOptions = {
  mode: "open"
}, y$1[d$1("elementProperties")] = new Map(), y$1[d$1("finalized")] = new Map(), p$1 !== null && p$1 !== void 0 && p$1({
  ReactiveElement: y$1
}), ((_a$1$reactiveElementV = a$1.reactiveElementVersions) !== null && _a$1$reactiveElementV !== void 0 ? _a$1$reactiveElementV : a$1.reactiveElementVersions = []).push("2.1.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t = globalThis,
  i$1 = t.trustedTypes,
  s$1 = i$1 ? i$1.createPolicy("lit-html", {
    createHTML: function createHTML(t) {
      return t;
    }
  }) : void 0,
  e$2 = "$lit$",
  h = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
  o$2 = "?" + h,
  n$1 = "<".concat(o$2, ">"),
  r$2 = document,
  l = function l() {
    return r$2.createComment("");
  },
  c = function c(t) {
    return null === t || "object" != _typeof(t) && "function" != typeof t;
  },
  a = Array.isArray,
  u = function u(t) {
    return a(t) || "function" == typeof (t === null || t === void 0 ? void 0 : t[Symbol.iterator]);
  },
  d = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  v = /-->/g,
  _ = />/g,
  m = RegExp(">|".concat(d, "(?:([^\\s\"'>=/]+)(").concat(d, "*=").concat(d, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
  p = /'/g,
  g = /"/g,
  $ = /^(?:script|style|textarea|title)$/i,
  y = function y(t) {
    return function (i) {
      for (var _len2 = arguments.length, s = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        s[_key2 - 1] = arguments[_key2];
      }
      return {
        _$litType$: t,
        strings: i,
        values: s
      };
    };
  },
  x = y(1),
  T = Symbol["for"]("lit-noChange"),
  E = Symbol["for"]("lit-nothing"),
  A = new WeakMap(),
  C = r$2.createTreeWalker(r$2, 129);
function P(t, i) {
  if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i) : i;
}
var V = function V(t, i) {
  var s = t.length - 1,
    o = [];
  var r,
    l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "",
    c = f;
  for (var _i7 = 0; _i7 < s; _i7++) {
    var _s8 = t[_i7];
    var _a2 = void 0,
      _u = void 0,
      _d2 = -1,
      _y = 0;
    for (; _y < _s8.length && (c.lastIndex = _y, _u = c.exec(_s8), null !== _u);) _y = c.lastIndex, c === f ? "!--" === _u[1] ? c = v : void 0 !== _u[1] ? c = _ : void 0 !== _u[2] ? ($.test(_u[2]) && (r = RegExp("</" + _u[2], "g")), c = m) : void 0 !== _u[3] && (c = m) : c === m ? ">" === _u[0] ? (c = r !== null && r !== void 0 ? r : f, _d2 = -1) : void 0 === _u[1] ? _d2 = -2 : (_d2 = c.lastIndex - _u[2].length, _a2 = _u[1], c = void 0 === _u[3] ? m : '"' === _u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
    var _x = c === m && t[_i7 + 1].startsWith("/>") ? " " : "";
    l += c === f ? _s8 + n$1 : _d2 >= 0 ? (o.push(_a2), _s8.slice(0, _d2) + e$2 + _s8.slice(_d2) + h + _x) : _s8 + h + (-2 === _d2 ? _i7 : _x);
  }
  return [P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), o];
};
var N = /*#__PURE__*/function () {
  function N(_ref5, n) {
    var t = _ref5.strings,
      s = _ref5._$litType$;
    _classCallCheck(this, N);
    var r;
    this.parts = [];
    var c = 0,
      a = 0;
    var u = t.length - 1,
      d = this.parts,
      _V = V(t, s),
      _V2 = _slicedToArray(_V, 2),
      f = _V2[0],
      v = _V2[1];
    if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
      var _t0 = this.el.content.firstChild;
      _t0.replaceWith.apply(_t0, _toConsumableArray(_t0.childNodes));
    }
    for (; null !== (r = C.nextNode()) && d.length < u;) {
      if (1 === r.nodeType) {
        if (r.hasAttributes()) {
          var _iterator0 = _createForOfIteratorHelper(r.getAttributeNames()),
            _step0;
          try {
            for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
              var _t1 = _step0.value;
              if (_t1.endsWith(e$2)) {
                var _i8 = v[a++],
                  _s9 = r.getAttribute(_t1).split(h),
                  _e7 = /([.?@])?(.*)/.exec(_i8);
                d.push({
                  type: 1,
                  index: c,
                  name: _e7[2],
                  strings: _s9,
                  ctor: "." === _e7[1] ? H : "?" === _e7[1] ? I : "@" === _e7[1] ? L : k
                }), r.removeAttribute(_t1);
              } else _t1.startsWith(h) && (d.push({
                type: 6,
                index: c
              }), r.removeAttribute(_t1));
            }
          } catch (err) {
            _iterator0.e(err);
          } finally {
            _iterator0.f();
          }
        }
        if ($.test(r.tagName)) {
          var _t10 = r.textContent.split(h),
            _s0 = _t10.length - 1;
          if (_s0 > 0) {
            r.textContent = i$1 ? i$1.emptyScript : "";
            for (var _i9 = 0; _i9 < _s0; _i9++) r.append(_t10[_i9], l()), C.nextNode(), d.push({
              type: 2,
              index: ++c
            });
            r.append(_t10[_s0], l());
          }
        }
      } else if (8 === r.nodeType) if (r.data === o$2) d.push({
        type: 2,
        index: c
      });else {
        var _t11 = -1;
        for (; -1 !== (_t11 = r.data.indexOf(h, _t11 + 1));) d.push({
          type: 7,
          index: c
        }), _t11 += h.length - 1;
      }
      c++;
    }
  }
  return _createClass(N, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = r$2.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);
}();
function S(t, i) {
  var _s$_$Co, _h5, _h6, _h6$_$AO, _s$_$Co2;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  if (i === T) return i;
  var h = void 0 !== e ? (_s$_$Co = s._$Co) === null || _s$_$Co === void 0 ? void 0 : _s$_$Co[e] : s._$Cl;
  var o = c(i) ? void 0 : i._$litDirective$;
  return ((_h5 = h) === null || _h5 === void 0 ? void 0 : _h5.constructor) !== o && ((_h6 = h) !== null && _h6 !== void 0 && (_h6$_$AO = _h6._$AO) !== null && _h6$_$AO !== void 0 && _h6$_$AO.call(_h6, false), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? ((_s$_$Co2 = s._$Co) !== null && _s$_$Co2 !== void 0 ? _s$_$Co2 : s._$Co = [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
}
var M = /*#__PURE__*/function () {
  function M(t, i) {
    _classCallCheck(this, M);
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  return _createClass(M, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "u",
    value: function u(t) {
      var _t$creationScope;
      var _this$_$AD = this._$AD,
        i = _this$_$AD.el.content,
        s = _this$_$AD.parts,
        e = ((_t$creationScope = t === null || t === void 0 ? void 0 : t.creationScope) !== null && _t$creationScope !== void 0 ? _t$creationScope : r$2).importNode(i, true);
      C.currentNode = e;
      var h = C.nextNode(),
        o = 0,
        n = 0,
        l = s[0];
      for (; void 0 !== l;) {
        var _l;
        if (o === l.index) {
          var _i0 = void 0;
          2 === l.type ? _i0 = new R(h, h.nextSibling, this, t) : 1 === l.type ? _i0 = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (_i0 = new z(h, this, t)), this._$AV.push(_i0), l = s[++n];
        }
        o !== ((_l = l) === null || _l === void 0 ? void 0 : _l.index) && (h = C.nextNode(), o++);
      }
      return C.currentNode = r$2, e;
    }
  }, {
    key: "p",
    value: function p(t) {
      var i = 0;
      var _iterator1 = _createForOfIteratorHelper(this._$AV),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var _s1 = _step1.value;
          void 0 !== _s1 && (void 0 !== _s1.strings ? (_s1._$AI(t, _s1, i), i += _s1.strings.length - 2) : _s1._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
    }
  }]);
}();
var R = /*#__PURE__*/function () {
  function R(t, i, s, e) {
    var _e$isConnected;
    _classCallCheck(this, R);
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = (_e$isConnected = e === null || e === void 0 ? void 0 : e.isConnected) !== null && _e$isConnected !== void 0 ? _e$isConnected : true;
  }
  return _createClass(R, [{
    key: "_$AU",
    get: function get() {
      var _this$_$AM$_$AU, _this$_$AM;
      return (_this$_$AM$_$AU = (_this$_$AM = this._$AM) === null || _this$_$AM === void 0 ? void 0 : _this$_$AM._$AU) !== null && _this$_$AM$_$AU !== void 0 ? _this$_$AM$_$AU : this._$Cv;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var _t12;
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === ((_t12 = t) === null || _t12 === void 0 ? void 0 : _t12.nodeType) && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
  }, {
    key: "O",
    value: function O(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
  }, {
    key: "T",
    value: function T(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
  }, {
    key: "_",
    value: function _(t) {
      this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r$2.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "$",
    value: function $(t) {
      var _this$_$AH;
      var i = t.values,
        s = t._$litType$,
        e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
      if (((_this$_$AH = this._$AH) === null || _this$_$AH === void 0 ? void 0 : _this$_$AH._$AD) === e) this._$AH.p(i);else {
        var _t13 = new M(e, this),
          _s10 = _t13.u(this.options);
        _t13.p(i), this.T(_s10), this._$AH = _t13;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = A.get(t.strings);
      return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
  }, {
    key: "k",
    value: function k(t) {
      a(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
        e = 0;
      var _iterator10 = _createForOfIteratorHelper(t),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _h7 = _step10.value;
          e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(_h7), e++;
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      for ((_this$_$AP = this._$AP) === null || _this$_$AP === void 0 ? void 0 : _this$_$AP.call(this, false, true, i); t && t !== this._$AB;) {
        var _this$_$AP;
        var _i1 = t.nextSibling;
        t.remove(), t = _i1;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var _this$_$AP2;
      void 0 === this._$AM && (this._$Cv = t, (_this$_$AP2 = this._$AP) === null || _this$_$AP2 === void 0 ? void 0 : _this$_$AP2.call(this, t));
    }
  }]);
}();
var k = /*#__PURE__*/function () {
  function k(t, i, s, e, h) {
    _classCallCheck(this, k);
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = E;
  }
  return _createClass(k, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var h = this.strings;
      var o = false;
      if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);else {
        var _e8 = t;
        var _n2, _r;
        for (t = h[0], _n2 = 0; _n2 < h.length - 1; _n2++) _r = S(this, _e8[s + _n2], i, _n2), _r === T && (_r = this._$AH[_n2]), o || (o = !c(_r) || _r !== this._$AH[_n2]), _r === E ? t = E : t !== E && (t += (_r !== null && _r !== void 0 ? _r : "") + h[_n2 + 1]), this._$AH[_n2] = _r;
      }
      o && !e && this.j(t);
    }
  }, {
    key: "j",
    value: function j(t) {
      t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
    }
  }]);
}();
var H = /*#__PURE__*/function (_k) {
  function H() {
    var _this5;
    _classCallCheck(this, H);
    _this5 = _callSuper(this, H, arguments), _this5.type = 3;
    return _this5;
  }
  _inherits(H, _k);
  return _createClass(H, [{
    key: "j",
    value: function j(t) {
      this.element[this.name] = t === E ? void 0 : t;
    }
  }]);
}(k);
var I = /*#__PURE__*/function (_k2) {
  function I() {
    var _this6;
    _classCallCheck(this, I);
    _this6 = _callSuper(this, I, arguments), _this6.type = 4;
    return _this6;
  }
  _inherits(I, _k2);
  return _createClass(I, [{
    key: "j",
    value: function j(t) {
      this.element.toggleAttribute(this.name, !!t && t !== E);
    }
  }]);
}(k);
var L = /*#__PURE__*/function (_k3) {
  function L(t, i, s, e, h) {
    var _this7;
    _classCallCheck(this, L);
    _this7 = _callSuper(this, L, [t, i, s, e, h]), _this7.type = 5;
    return _this7;
  }
  _inherits(L, _k3);
  return _createClass(L, [{
    key: "_$AI",
    value: function _$AI(t) {
      var _S;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      if ((t = (_S = S(this, t, i, 0)) !== null && _S !== void 0 ? _S : E) === T) return;
      var s = this._$AH,
        e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
        h = t !== E && (s === E || e);
      e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var _this$options$host, _this$options;
      "function" == typeof this._$AH ? this._$AH.call((_this$options$host = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.host) !== null && _this$options$host !== void 0 ? _this$options$host : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);
}(k);
var z = /*#__PURE__*/function () {
  function z(t, i, s) {
    _classCallCheck(this, z);
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  return _createClass(z, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      S(this, t);
    }
  }]);
}();
var j = t.litHtmlPolyfillSupport;
j !== null && j !== void 0 && j(N, R), ((_t$litHtmlVersions = t.litHtmlVersions) !== null && _t$litHtmlVersions !== void 0 ? _t$litHtmlVersions : t.litHtmlVersions = []).push("3.3.0");
var B = function B(t, i, s) {
  var _s$renderBefore;
  var e = (_s$renderBefore = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore !== void 0 ? _s$renderBefore : i;
  var h = e._$litPart$;
  if (void 0 === h) {
    var _s$renderBefore2;
    var _t14 = (_s$renderBefore2 = s === null || s === void 0 ? void 0 : s.renderBefore) !== null && _s$renderBefore2 !== void 0 ? _s$renderBefore2 : null;
    e._$litPart$ = h = new R(i.insertBefore(l(), _t14), _t14, void 0, s !== null && s !== void 0 ? s : {});
  }
  return h._$AI(t), h;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s = globalThis;
var i = /*#__PURE__*/function (_y$) {
  function i() {
    var _this8;
    _classCallCheck(this, i);
    _this8 = _callSuper(this, i, arguments), _this8.renderOptions = {
      host: _assertThisInitialized(_this8)
    }, _this8._$Do = void 0;
    return _this8;
  }
  _inherits(i, _y$);
  return _createClass(i, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var _this$renderOptions, _this$renderOptions$r;
      var t = _get(_getPrototypeOf(i.prototype), "createRenderRoot", this).call(this);
      return (_this$renderOptions$r = (_this$renderOptions = this.renderOptions).renderBefore) !== null && _this$renderOptions$r !== void 0 ? _this$renderOptions$r : _this$renderOptions.renderBefore = t.firstChild, t;
    }
  }, {
    key: "update",
    value: function update(t) {
      var r = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(i.prototype), "update", this).call(this, t), this._$Do = B(r, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$_$Do;
      _get(_getPrototypeOf(i.prototype), "connectedCallback", this).call(this), (_this$_$Do = this._$Do) === null || _this$_$Do === void 0 ? void 0 : _this$_$Do.setConnected(true);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this$_$Do2;
      _get(_getPrototypeOf(i.prototype), "disconnectedCallback", this).call(this), (_this$_$Do2 = this._$Do) === null || _this$_$Do2 === void 0 ? void 0 : _this$_$Do2.setConnected(false);
    }
  }, {
    key: "render",
    value: function render() {
      return T;
    }
  }]);
}(y$1);
i._$litElement$ = true, i["finalized"] = true, (_s$litElementHydrateS = s.litElementHydrateSupport) === null || _s$litElementHydrateS === void 0 ? void 0 : _s$litElementHydrateS.call(s, {
  LitElement: i
});
var o$1 = s.litElementPolyfillSupport;
o$1 === null || o$1 === void 0 || o$1({
  LitElement: i
});
((_s$litElementVersions = s.litElementVersions) !== null && _s$litElementVersions !== void 0 ? _s$litElementVersions : s.litElementVersions = []).push("4.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var o = {
    attribute: true,
    type: String,
    converter: u$1,
    reflect: false,
    hasChanged: f$1
  },
  r$1 = function r$1() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o;
    var e = arguments.length > 1 ? arguments[1] : undefined;
    var r = arguments.length > 2 ? arguments[2] : undefined;
    var n = r.kind,
      i = r.metadata;
    var s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map()), "setter" === n && ((t = Object.create(t)).wrapped = true), s.set(r.name, t), "accessor" === n) {
      var _o2 = r.name;
      return {
        set: function set(r) {
          var n = e.get.call(this);
          e.set.call(this, r), this.requestUpdate(_o2, n, t);
        },
        init: function init(e) {
          return void 0 !== e && this.C(_o2, void 0, t, e), e;
        }
      };
    }
    if ("setter" === n) {
      var _o3 = r.name;
      return function (r) {
        var n = this[_o3];
        e.call(this, r), this.requestUpdate(_o3, n, t);
      };
    }
    throw Error("Unsupported decorator location: " + n);
  };
function n(t) {
  return function (e, o) {
    return "object" == _typeof(o) ? r$1(t, e, o) : function (t, e, o) {
      var r = e.hasOwnProperty(o);
      return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
    }(t, e, o);
  };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r) {
  return n(_objectSpread(_objectSpread({}, r), {}, {
    state: true,
    attribute: false
  }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e$1 = function e$1(e, t, c) {
  return c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != _typeof(t) && Object.defineProperty(e, t, c), c;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e, r) {
  return function (n, s, i) {
    var o = function o(t) {
      var _t$renderRoot$querySe, _t$renderRoot;
      return (_t$renderRoot$querySe = (_t$renderRoot = t.renderRoot) === null || _t$renderRoot === void 0 ? void 0 : _t$renderRoot.querySelector(e)) !== null && _t$renderRoot$querySe !== void 0 ? _t$renderRoot$querySe : null;
    };
    return e$1(n, s, {
      get: function get() {
        return o(this);
      }
    });
  };
}
var Controller = /*#__PURE__*/function () {
  function Controller(config, parent) {
    _classCallCheck(this, Controller);
    this._config = config;
  }
  return _createClass(Controller, [{
    key: "hass",
    set: function set(hass) {
      this._hass = hass;
      this.stateObj = hass.states[this._config.entity];
    }
  }, {
    key: "value",
    get: function get() {
      if (this._value) return Math.round(this._value / this.step) * this.step;
      return 0;
    },
    set: function set(value) {
      if (value !== this.value) this._value = value;
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(this.value);
    }
  }, {
    key: "hidden",
    get: function get() {
      return false;
    }
  }, {
    key: "hasSlider",
    get: function get() {
      return true;
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return true;
    }
  }, {
    key: "background",
    get: function get() {
      return undefined;
    }
  }, {
    key: "renderToggle",
    value: function renderToggle(hass) {
      return this.hasToggle ? x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          <ha-entity-toggle\n            .stateObj=", "\n            .hass=", "\n            .class=\"state\"\n          ></ha-entity-toggle>\n        "])), hass.states[this.stateObj.entity_id], hass) : undefined;
    }
  }, {
    key: "isOff",
    get: function get() {
      if (!this.stateObj || this.stateObj.state === "unavailable") return true;
      return this.stateObj.state === "off" || this.value === 0;
    }
  }, {
    key: "min",
    get: function get() {
      var _a, _b;
      return (_b = (_a = this._config.min) !== null && _a !== void 0 ? _a : this._min) !== null && _b !== void 0 ? _b : 0;
    }
  }, {
    key: "max",
    get: function get() {
      var _a, _b;
      return (_b = (_a = this._config.max) !== null && _a !== void 0 ? _a : this._max) !== null && _b !== void 0 ? _b : 100;
    }
  }, {
    key: "step",
    get: function get() {
      var _a, _b;
      return (_b = (_a = this._config.step) !== null && _a !== void 0 ? _a : this._step) !== null && _b !== void 0 ? _b : 5;
    }
  }, {
    key: "dir",
    get: function get() {
      var _a;
      return (_a = this._config.dir) !== null && _a !== void 0 ? _a : undefined;
    }
  }]);
}();
Controller.allowed_attributes = [];
var RGB_INDEX = {
  red: 0,
  green: 1,
  blue: 2,
  white: 3,
  cold_white: 3,
  warm_white: 4
};
var HS_INDEX = {
  hue: 0,
  saturation: 1
};
var LightController = /*#__PURE__*/function (_Controller) {
  function LightController() {
    _classCallCheck(this, LightController);
    return _callSuper(this, LightController, arguments);
  }
  _inherits(LightController, _Controller);
  return _createClass(LightController, [{
    key: "attribute",
    get: function get() {
      return this._config.attribute || "brightness_pct";
    }
  }, {
    key: "_rgbww",
    get: function get() {
      var attr = this.stateObj.attributes;
      switch (attr.color_mode) {
        case "rgb":
        case "hs":
        case "xy":
          return [].concat(_toConsumableArray(attr.rgb_color), [0, 0]);
        case "rgbw":
          return [].concat(_toConsumableArray(attr.rgbw_color), [0]);
        case "rgbww":
          return _toConsumableArray(attr.rgbww_color);
        default:
          return [0, 0, 0, 0, 0];
      }
    }
  }, {
    key: "_value",
    get: function get() {
      if (!this.stateObj || this.stateObj.state !== "on") return 0;
      var attr = this.stateObj.attributes;
      switch (this.attribute) {
        case "color_temp":
          return Math.round(attr.color_temp_kelvin);
        case "white_value":
          return Math.round(attr.white_value);
        case "brightness":
          return Math.round(attr.brightness);
        case "brightness_pct":
          return Math.round(attr.brightness * 100.0 / 255);
        case "red":
        case "green":
        case "blue":
          return attr.rgb_color ? Math.round(this._rgbww[RGB_INDEX[this.attribute]]) : 0;
        case "white":
          return attr.rgbw_color ? Math.round(this._rgbww[RGB_INDEX[this.attribute]] * 100.0 / 255) : 0;
        case "cold_white":
        case "warm_white":
          return attr.rgbww_color ? Math.round(this._rgbww[RGB_INDEX[this.attribute]] * 100.0 / 255) : 0;
        case "hue":
        case "saturation":
          return attr.hs_color ? Math.round(attr.hs_color[HS_INDEX[this.attribute]]) : 0;
        case "effect":
          if (attr.effect_list) return attr.effect_list.indexOf(attr.effect);
          return 0;
        default:
          return 0;
      }
    },
    set: function set(value) {
      if (!this.stateObj) return;
      var color_mode = this.stateObj.attributes.color_mode;
      var attr = this.attribute;
      var on = true;
      var _value;
      switch (attr) {
        case "brightness":
        case "brightness_pct":
          value = attr === "brightness" ? Math.round(value) : Math.round(value / 100.0 * 255);
          if (!value) on = false;
          attr = "brightness";
          break;
        case "red":
        case "green":
        case "blue":
          _value = this._rgbww;
          _value[RGB_INDEX[attr]] = value;
          if (color_mode === "rgbww") {
            attr = "rgbww_color";
            value = _value;
            break;
          }
          if (color_mode === "rgbw") {
            attr = "rgbw_color";
            value = _value.slice(0, 4);
            break;
          }
          attr = "rgb_color";
          value = _value.slice(0, 3);
          break;
        case "white":
          _value = this._rgbww;
          _value[RGB_INDEX[attr]] = Math.round(value / 100.0 * 255);
          value = _value.slice(0, 4);
          attr = "rgbw_color";
          break;
        case "cold_white":
        case "warm_white":
          _value = this._rgbww;
          _value[RGB_INDEX[attr]] = Math.round(value / 100.0 * 255);
          value = _value;
          attr = "rgbww_color";
          break;
        case "hue":
        case "saturation":
          _value = this.stateObj.attributes.hs_color || [0, 0];
          _value[HS_INDEX[attr]] = value;
          value = _value;
          attr = "hs_color";
          break;
        case "effect":
          value = this.stateObj.attributes.effect_list[value];
          attr = "effect";
          break;
        case "color_temp":
          attr = "color_temp_kelvin";
          break;
      }
      console.log(attr, value);
      if (on) {
        this._hass.callService("light", "turn_on", _defineProperty({
          entity_id: this.stateObj.entity_id
        }, attr, value));
      } else {
        this._hass.callService("light", "turn_off", {
          entity_id: this.stateObj.entity_id
        });
      }
    }
  }, {
    key: "_step",
    get: function get() {
      switch (this.attribute) {
        case "effect":
          return 1;
        default:
          return 5;
      }
    }
  }, {
    key: "_min",
    get: function get() {
      switch (this.attribute) {
        case "color_temp":
          return this.stateObj ? this.stateObj.attributes.min_color_temp_kelvin : 0;
        default:
          return 0;
      }
    }
  }, {
    key: "_max",
    get: function get() {
      switch (this.attribute) {
        case "color_temp":
          return this.stateObj ? this.stateObj.attributes.max_color_temp_kelvin : 0;
        case "red":
        case "green":
        case "blue":
        case "white_value":
        case "brightness":
          return 255;
        case "hue":
          return 360;
        case "effect":
          return this.stateObj ? this.stateObj.attributes.effect_list ? this.stateObj.attributes.effect_list.length - 1 : 0 : 0;
        default:
          return 100;
      }
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state !== "on";
    }
  }, {
    key: "string",
    get: function get() {
      if (this.stateObj && this.stateObj.state === "off") return this._hass.localize("component.light.entity_component._.state.off");
      switch (this.attribute) {
        case "brightness":
          return "".concat(this.value);
        case "color_temp":
          return "".concat(this.value, " K");
        case "brightness_pct":
        case "saturation":
          return "".concat(this.value, " %");
        case "hue":
          return "".concat(this.value, " \xB0");
        case "effect":
          return this.stateObj ? this.stateObj.attributes.effect : "";
        default:
          return this.value;
      }
    }
  }, {
    key: "hasSlider",
    get: function get() {
      var _a, _b, _c, _d, _e, _f, _g;
      var attr = this.stateObj.attributes;
      var support_temp = attr.supported_features & 2 || ((_a = attr.supported_color_modes) === null || _a === void 0 ? void 0 : _a.some(function (mode) {
        return ["color_temp"].includes(mode);
      }));
      var support_rgb = attr.supported_features & 16 || ((_b = attr.supported_color_modes) === null || _b === void 0 ? void 0 : _b.some(function (mode) {
        return ["rgb", "rgbw", "rgbww"].includes(mode);
      }));
      var support_w = (_c = attr.supported_color_modes) === null || _c === void 0 ? void 0 : _c.some(function (mode) {
        return ["rgbw"].includes(mode);
      });
      var support_ww = (_d = attr.supported_color_modes) === null || _d === void 0 ? void 0 : _d.some(function (mode) {
        return ["rgbww"].includes(mode);
      });
      var support_hs = attr.supported_features & 16 || ((_e = attr.supported_color_modes) === null || _e === void 0 ? void 0 : _e.some(function (mode) {
        return ["hs"].includes(mode);
      }));
      var support_xy = (_f = attr.supported_color_modes) === null || _f === void 0 ? void 0 : _f.some(function (mode) {
        return ["xy"].includes(mode);
      });
      var support_brightness = attr.supported_features & 1 || support_temp || support_rgb || support_hs || support_xy || ((_g = attr.supported_color_modes) === null || _g === void 0 ? void 0 : _g.some(function (mode) {
        return ["brightness"].includes(mode);
      }));
      var support_color = support_rgb || support_hs;
      if (!this.stateObj) return false;
      switch (this.attribute) {
        case "brightness":
        case "brightness_pct":
          if ("brightness" in this.stateObj.attributes || support_brightness) return true;
          return false;
        case "color_temp":
          if ("color_temp" in this.stateObj.attributes || "color_temp_kelvin" in this.stateObj.attributes || support_temp) return true;
          return false;
        case "white_value":
          if (attr.supported_features & 128 || "white_value" in this.stateObj.attributes) return true;
          return false;
        case "white":
          return !!support_w;
        case "cold_white":
        case "warm_white":
          return !!support_ww;
        case "red":
        case "green":
        case "blue":
          if ("rgb_color" in this.stateObj.attributes || support_color) return true;
          return false;
        case "hue":
        case "saturation":
          if ("hs_color" in this.stateObj.attributes || support_color) return true;
          return false;
        case "effect":
          if ("effect" in this.stateObj.attributes || "effect_list" in this.stateObj.attributes) return true;
          return false;
        default:
          return false;
      }
    }
  }, {
    key: "background",
    get: function get() {
      if (this.attribute === "hue") return "linear-gradient(to right,red,yellow,green,cyan,blue,magenta,red)";
      if (this.attribute === "color_temp") return "linear-gradient(to left,rgb(166,209,255),rgb(255,255,255),rgb(255,160,0))";
      if (this.attribute === "red") return "linear-gradient(to right,rgb(0,0,0),rgb(255,0,0))";
      if (this.attribute === "green") return "linear-gradient(to right,rgb(0,0,0),rgb(0,255,0))";
      if (this.attribute === "blue") return "linear-gradient(to right,rgb(0,0,0),rgb(0,0,255))";
      if (this.attribute === "brightness") return "linear-gradient(to right,rgb(0,0,0),rgb(255,255,255))";
      return undefined;
    }
  }]);
}(Controller);
LightController.allowed_attributes = ["brightness_pct", "brightness", "color_temp", "hue", "saturation", "red", "green", "blue", "effect", "white", "cold_white", "warm_white"];
var MediaPlayerController = /*#__PURE__*/function (_Controller2) {
  function MediaPlayerController() {
    _classCallCheck(this, MediaPlayerController);
    return _callSuper(this, MediaPlayerController, arguments);
  }
  _inherits(MediaPlayerController, _Controller2);
  return _createClass(MediaPlayerController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.attributes.is_volume_muted ? 0 : Math.round(this.stateObj.attributes.volume_level * 100.0);
    },
    set: function set(value) {
      value = value / 100.0;
      this._hass.callService("media_player", "volume_set", {
        entity_id: this.stateObj.entity_id,
        volume_level: value
      });
      if (value && this.stateObj.attributes.is_volume_muted) this._hass.callService("media_player", "volume_mute", {
        entity_id: this.stateObj.entity_id,
        is_volume_muted: false
      });
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "string",
    get: function get() {
      if (this.stateObj.attributes.is_volume_muted) return "-";
      return !!this.stateObj.attributes.volume_level ? "".concat(this.value, " %") : this._hass.localize("component.media_player.entity_component._.state.off");
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return true;
    }
  }, {
    key: "_handleMute",
    value: function _handleMute() {
      this._hass.callService("media_player", "volume_mute", {
        entity_id: this.stateObj.entity_id,
        is_volume_muted: !this.stateObj.attributes.is_volume_muted
      });
    }
  }, {
    key: "renderToggle",
    value: function renderToggle(hass) {
      var _this9 = this;
      var stateObj = hass.states[this.stateObj.entity_id];
      var icon = document.createElement("ha-icon");
      icon.style.display = "flex";
      icon.icon = stateObj.attributes.is_volume_muted ? "mdi:volume-off" : "mdi:volume-high";
      var btn = document.createElement("ha-icon-button");
      btn.appendChild(icon);
      btn.addEventListener("click", function () {
        return _this9._handleMute();
      });
      return this.hasToggle ? btn : undefined;
    }
  }]);
}(Controller);
var ClimateController = /*#__PURE__*/function (_Controller3) {
  function ClimateController() {
    _classCallCheck(this, ClimateController);
    return _callSuper(this, ClimateController, arguments);
  }
  _inherits(ClimateController, _Controller3);
  return _createClass(ClimateController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.attributes.temperature;
    },
    set: function set(value) {
      this._hass.callService("climate", "set_temperature", {
        entity_id: this.stateObj.entity_id,
        temperature: value
      });
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(this.value, " ").concat(this._hass.config.unit_system.temperature);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "_min",
    get: function get() {
      return this.stateObj.attributes.min_temp;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.max_temp;
    }
  }, {
    key: "_step",
    get: function get() {
      return 1;
    }
  }]);
}(Controller);
var CoverController = /*#__PURE__*/function (_Controller4) {
  function CoverController() {
    _classCallCheck(this, CoverController);
    return _callSuper(this, CoverController, arguments);
  }
  _inherits(CoverController, _Controller4);
  return _createClass(CoverController, [{
    key: "attribute",
    get: function get() {
      return this._config.attribute || "position";
    }
  }, {
    key: "_value",
    get: function get() {
      switch (this.attribute) {
        case "position":
          return this.stateObj.state === "closed" ? 0 : this.stateObj.attributes.current_position;
        case "tilt":
          return this.stateObj.attributes.current_tilt_position;
        default:
          return 0;
      }
    },
    set: function set(value) {
      switch (this.attribute) {
        case "position":
          this._hass.callService("cover", "set_cover_position", {
            entity_id: this.stateObj.entity_id,
            position: value
          });
          break;
        case "tilt":
          this._hass.callService("cover", "set_cover_tilt_position", {
            entity_id: this.stateObj.entity_id,
            tilt_position: value
          });
          break;
      }
    }
  }, {
    key: "string",
    get: function get() {
      if (!this.hasSlider) return "";
      switch (this.attribute) {
        case "position":
          if (this.stateObj.state === "closed") return this._hass.localize("component.cover.entity_component._.state.closed");
          if (this.value === 100) return this._hass.localize("component.cover.entity_component._.state.open");
          return "".concat(this.value, " %");
        case "tilt":
          return "".concat(this.value, " %");
      }
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return true;
    }
  }, {
    key: "renderToggle",
    value: function renderToggle(hass) {
      var stateObj = hass.states[this.stateObj.entity_id];
      console.log("Toggle", hass);
      return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    <ha-cover-controls .hass=", " .stateObj=", "></ha-cover_controls>\n    "])), hass, stateObj);
    }
  }, {
    key: "hasSlider",
    get: function get() {
      switch (this.attribute) {
        case "position":
          if ("current_position" in this.stateObj.attributes) return true;
          if ("supported_features" in this.stateObj.attributes && this.stateObj.attributes.supported_features & 4) return true;
        case "tilt":
          if ("current_tilt_position" in this.stateObj.attributes) return true;
          if ("supported_features" in this.stateObj.attributes && this.stateObj.attributes.supported_features & 128) return true;
        default:
          return false;
      }
    }
  }, {
    key: "_step",
    get: function get() {
      return 10;
    }
  }]);
}(Controller);
CoverController.allowed_attributes = ["position", "tilt"];
var FanController = /*#__PURE__*/function (_Controller5) {
  function FanController() {
    _classCallCheck(this, FanController);
    return _callSuper(this, FanController, arguments);
  }
  _inherits(FanController, _Controller5);
  return _createClass(FanController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.state !== "off" ? this.stateObj.attributes.percentage : 0;
    },
    set: function set(value) {
      if (value > 0) {
        this._hass.callService("fan", "set_percentage", {
          entity_id: this.stateObj.entity_id,
          percentage: value
        });
      } else {
        this._hass.callService("fan", "turn_off", {
          entity_id: this.stateObj.entity_id
        });
      }
    }
  }, {
    key: "string",
    get: function get() {
      if (this.stateObj.state === "off") return this._hass.localize("component.light.entity_component._.state.off");
      return "".concat(this.stateObj.attributes.percentage, " %");
    }
  }, {
    key: "hasSlider",
    get: function get() {
      if ("percentage" in this.stateObj.attributes) return true;
      return false;
    }
  }, {
    key: "_step",
    get: function get() {
      return this.stateObj.attributes.percentage_step;
    }
  }]);
}(Controller);
var InputNumberController = /*#__PURE__*/function (_Controller6) {
  function InputNumberController() {
    _classCallCheck(this, InputNumberController);
    return _callSuper(this, InputNumberController, arguments);
  }
  _inherits(InputNumberController, _Controller6);
  return _createClass(InputNumberController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.state;
    },
    set: function set(value) {
      this._hass.callService("input_number", "set_value", {
        entity_id: this.stateObj.entity_id,
        value: value
      });
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(parseFloat(this.stateObj.state), " ").concat(this.stateObj.attributes.unit_of_measurement || "").trim();
    }
  }, {
    key: "isOff",
    get: function get() {
      return false;
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return false;
    }
  }, {
    key: "hasSlider",
    get: function get() {
      return this.stateObj.attributes.mode === "slider";
    }
  }, {
    key: "_min",
    get: function get() {
      return this.stateObj.attributes.min;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.max;
    }
  }, {
    key: "_step",
    get: function get() {
      return this.stateObj.attributes.step;
    }
  }]);
}(Controller);
var InputSelectController = /*#__PURE__*/function (_Controller7) {
  function InputSelectController() {
    _classCallCheck(this, InputSelectController);
    return _callSuper(this, InputSelectController, arguments);
  }
  _inherits(InputSelectController, _Controller7);
  return _createClass(InputSelectController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.attributes.options.indexOf(this.stateObj.state);
    },
    set: function set(value) {
      if (value in this.stateObj.attributes.options) this._hass.callService("input_select", "select_option", {
        entity_id: this.stateObj.entity_id,
        option: this.stateObj.attributes.options[value]
      });
    }
  }, {
    key: "string",
    get: function get() {
      return this.stateObj.state;
    }
  }, {
    key: "isOff",
    get: function get() {
      return false;
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return false;
    }
  }, {
    key: "hasSlider",
    get: function get() {
      return this.stateObj.attributes.options && this.stateObj.attributes.options.length > 0;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.options.length - 1;
    }
  }, {
    key: "_step",
    get: function get() {
      return 1;
    }
  }]);
}(Controller);
var NumberController = /*#__PURE__*/function (_Controller8) {
  function NumberController() {
    _classCallCheck(this, NumberController);
    return _callSuper(this, NumberController, arguments);
  }
  _inherits(NumberController, _Controller8);
  return _createClass(NumberController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.state;
    },
    set: function set(value) {
      this._hass.callService("number", "set_value", {
        entity_id: this.stateObj.entity_id,
        value: value
      });
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(parseFloat(this.stateObj.state), " ").concat(this.stateObj.attributes.unit_of_measurement || "").trim();
    }
  }, {
    key: "isOff",
    get: function get() {
      return false;
    }
  }, {
    key: "hasToggle",
    get: function get() {
      return false;
    }
  }, {
    key: "hasSlider",
    get: function get() {
      return true;
    }
  }, {
    key: "_min",
    get: function get() {
      return this.stateObj.attributes.min;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.max;
    }
  }, {
    key: "_step",
    get: function get() {
      return this.stateObj.attributes.step;
    }
  }]);
}(Controller);
var WaterHeaterController = /*#__PURE__*/function (_Controller9) {
  function WaterHeaterController() {
    _classCallCheck(this, WaterHeaterController);
    return _callSuper(this, WaterHeaterController, arguments);
  }
  _inherits(WaterHeaterController, _Controller9);
  return _createClass(WaterHeaterController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.attributes.temperature;
    },
    set: function set(value) {
      this._hass.callService("water_heater", "set_temperature", {
        entity_id: this.stateObj.entity_id,
        temperature: value
      });
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(this.value, " ").concat(this._hass.config.unit_system.temperature);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "_min",
    get: function get() {
      return this.stateObj.attributes.min_temp;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.max_temp;
    }
  }, {
    key: "_step",
    get: function get() {
      return 1;
    }
  }]);
}(Controller);
var HumidifierController = /*#__PURE__*/function (_Controller0) {
  function HumidifierController() {
    _classCallCheck(this, HumidifierController);
    return _callSuper(this, HumidifierController, arguments);
  }
  _inherits(HumidifierController, _Controller0);
  return _createClass(HumidifierController, [{
    key: "_value",
    get: function get() {
      return this.stateObj.attributes.humidity;
    },
    set: function set(value) {
      this._hass.callService("humidifier", "set_humidity", {
        entity_id: this.stateObj.entity_id,
        humidity: value
      });
    }
  }, {
    key: "string",
    get: function get() {
      return "".concat(this.value, " %");
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "_min",
    get: function get() {
      return this.stateObj.attributes.min_humidity;
    }
  }, {
    key: "_max",
    get: function get() {
      return this.stateObj.attributes.max_humidity;
    }
  }, {
    key: "_step",
    get: function get() {
      return 1;
    }
  }]);
}(Controller);
var TimerController = /*#__PURE__*/function (_Controller1) {
  function TimerController(config, parent) {
    var _this0;
    _classCallCheck(this, TimerController);
    _this0 = _callSuper(this, TimerController, [config, parent]);
    _this0._calcvalue = 0;
    _this0._calcvalue = 0;
    _this0._interval = window.setInterval(function () {
      _this0._calcvalue = _this0.calculate_value();
      parent.requestUpdate();
    }, 1000);
    return _this0;
  }
  _inherits(TimerController, _Controller1);
  return _createClass(TimerController, [{
    key: "_value",
    get: function get() {
      return this._calcvalue;
    },
    set: function set(value) {
      if (!value) {
        this._hass.callService("timer", "finish", {
          entity_id: this.stateObj.entity_id
        });
      } else {
        this._hass.callService("timer", "start", {
          entity_id: this.stateObj.entity_id,
          duration: value
        });
      }
    }
  }, {
    key: "calculate_value",
    value: function calculate_value() {
      if (!this.stateObj) return 0;
      var timeRemaining = this.stateObj.attributes.remaining;
      if (!timeRemaining) return 0;
      var parts = timeRemaining.split(":").map(Number);
      timeRemaining = parts[0] * 3600 + parts[1] * 60 + parts[2];
      if (this.stateObj.state === "active") {
        var now = new Date().getTime();
        var madeActive = new Date(this.stateObj.last_changed).getTime();
        timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
      }
      return timeRemaining;
    }
  }, {
    key: "string",
    get: function get() {
      if (this.stateObj.state === "active") {
        var leftpad = function leftpad(num) {
          return num < 10 ? "0".concat(num) : "".concat(num);
        };
        var _h8 = Math.floor(this.value / 3600);
        var _m = Math.floor(this.value % 3600 / 60);
        var _s11 = Math.floor(this.value % 60);
        if (_h8 > 0) {
          return "".concat(_h8, ":").concat(leftpad(_m), ":").concat(leftpad(_s11));
        }
        if (_m > 0) {
          return "".concat(_m, ":").concat(leftpad(_s11));
        }
        return "".concat(_s11);
      }
      return this._hass.localize("component.timer.entity_component._.state.idle");
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state !== "active";
    }
  }, {
    key: "_min",
    get: function get() {
      return 0;
    }
  }, {
    key: "_max",
    get: function get() {
      return 300;
    }
  }, {
    key: "_step",
    get: function get() {
      return 1;
    }
  }]);
}(Controller);
var controllers = {
  light: LightController,
  media_player: MediaPlayerController,
  climate: ClimateController,
  water_heater: WaterHeaterController,
  cover: CoverController,
  fan: FanController,
  input_number: InputNumberController,
  input_select: InputSelectController,
  number: NumberController,
  humidifier: HumidifierController,
  timer: TimerController
};
function getController(domain) {
  return controllers[domain];
}
var version = "17.5.0";
var pjson = {
  version: version
};
var SliderEntityRowEditor = /*#__PURE__*/function (_i10) {
  function SliderEntityRowEditor() {
    _classCallCheck(this, SliderEntityRowEditor);
    return _callSuper(this, SliderEntityRowEditor, arguments);
  }
  _inherits(SliderEntityRowEditor, _i10);
  return _createClass(SliderEntityRowEditor, [{
    key: "setConfig",
    value: function setConfig(config) {
      this._config = config;
    }
  }, {
    key: "_schema",
    value: function _schema(selected_domain) {
      var _a, _b, _c;
      var domains = Object.keys(controllers);
      console.log(selected_domain, controllers[selected_domain], (_a = controllers[selected_domain]) === null || _a === void 0 ? void 0 : _a.allowed_attributes);
      var attributes = (_c = (_b = controllers[selected_domain]) === null || _b === void 0 ? void 0 : _b.allowed_attributes) !== null && _c !== void 0 ? _c : [];
      return [{
        name: "entity",
        required: true,
        selector: {
          entity: {
            filter: [{
              domain: domains
            }]
          }
        }
      }, {
        type: "grid",
        name: "",
        schema: [{
          name: "name",
          selector: {
            text: {}
          }
        }, {
          name: "icon",
          selector: {
            icon: {}
          },
          context: {
            icon_entity: "entity"
          }
        }]
      }, {
        type: "grid",
        name: "",
        schema: [{
          name: "min",
          selector: {
            number: {
              min: -1e32,
              max: 1e32,
              mode: "box"
            }
          }
        }, {
          name: "max",
          selector: {
            number: {
              min: -1e32,
              max: 1e32,
              mode: "box"
            }
          }
        }, {
          name: "step",
          selector: {
            number: {
              min: -1e32,
              max: 1e32,
              mode: "box"
            }
          }
        }]
      }, {
        type: "grid",
        name: "",
        schema: [{
          name: "toggle",
          selector: {
            "boolean": {}
          }
        }, {
          name: "hide_state",
          selector: {
            "boolean": {}
          }
        }, {
          name: "hide_when_off",
          selector: {
            "boolean": {}
          }
        }, {
          name: "full_row",
          selector: {
            "boolean": {}
          }
        }, {
          name: "show_icon",
          selector: {
            "boolean": {}
          }
        }]
      }, attributes.length ? {
        type: "grid",
        name: "",
        schema: [{
          name: "attribute",
          selector: {
            select: {
              options: attributes
            }
          }
        }, {
          name: "colorize",
          selector: {
            "boolean": {}
          }
        }]
      } : {}];
    }
  }, {
    key: "render",
    value: function render() {
      var _a, _b;
      if (!this.hass || !this._config) {
        return "";
      }
      var schema = this._schema((_b = (_a = this._config.entity) === null || _a === void 0 ? void 0 : _a.split(".")) === null || _b === void 0 ? void 0 : _b[0]);
      return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <ha-form\n        .hass=", "\n        .data=", "\n        .schema=", "\n        @value-changed=", "\n      ></ha-form>\n    "])), this.hass, this._config, schema, this._valueChanged);
    }
  }, {
    key: "_valueChanged",
    value: function _valueChanged(ev) {
      this.dispatchEvent(new CustomEvent("config-changed", {
        detail: {
          config: ev.detail.value
        }
      }));
    }
  }]);
}(i);
__decorate([n()], SliderEntityRowEditor.prototype, "hass", void 0);
__decorate([r()], SliderEntityRowEditor.prototype, "_config", void 0);
customElements.define("slider-entity-row-editor", SliderEntityRowEditor);
var SliderEntityRow = /*#__PURE__*/function (_i11) {
  function SliderEntityRow() {
    _classCallCheck(this, SliderEntityRow);
    return _callSuper(this, SliderEntityRow, arguments);
  }
  _inherits(SliderEntityRow, _i11);
  return _createClass(SliderEntityRow, [{
    key: "setConfig",
    value: function setConfig(config) {
      if (config.attribute === "color_temp_mired") throw Error("color_temp_mired has been removed");
      this._config = config;
      if (!config.entity) throw new Error("No entity specified.");
      var domain = config.entity.split(".")[0];
      var ctrlClass = getController(domain);
      if (!ctrlClass) throw new Error("Unsupported entity type: ".concat(domain));
      this.ctrl = new ctrlClass(config, this);
    }
  }, {
    key: "resized",
    value: function () {
      var _resized = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _a, _b;
        return _regeneratorRuntime().wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 1;
              return this.updateComplete;
            case 1:
              if (!(!this.shadowRoot || !this.parentElement)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              this.hide_state = this._config.full_row ? ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.clientWidth) <= 180 : ((_b = this.parentElement) === null || _b === void 0 ? void 0 : _b.clientWidth) <= 335;
              return _context2.abrupt("return");
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resized() {
        return _resized.apply(this, arguments);
      }
      return resized;
    }()
  }, {
    key: "firstUpdated",
    value: function () {
      var _firstUpdated = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 1;
              return this.resized();
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function firstUpdated() {
        return _firstUpdated.apply(this, arguments);
      }
      return firstUpdated;
    }()
  }, {
    key: "updated",
    value: function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _a, styleEl;
        return _regeneratorRuntime().wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (this._slider) {
                _context4.next = 1;
                break;
              }
              return _context4.abrupt("return");
            case 1:
              _context4.next = 2;
              return this._slider.updateComplete;
            case 2:
              if (!this._slider.shadowRoot.querySelector("style.slider-entity-row")) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");
            case 3:
              styleEl = document.createElement("style");
              styleEl.classList.add("slider-entity-row");
              styleEl.innerHTML = ".container .track::before{background: var(--_inactive-track-color);}\n    .container .track::after{background: var(--_active-track-color);}";
              (_a = this._slider.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(styleEl);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function (_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _get(_getPrototypeOf(SliderEntityRow.prototype), "connectedCallback", this).call(this);
              _context5.next = 1;
              return this.resized();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }
      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this1 = this;
      var _a;
      var c = this.ctrl;
      c.hass = this.hass;
      if (!c.stateObj) return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        <hui-warning>\n          ", "\n        </hui-warning>\n      "])), this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity));
      var dir = ((_a = c.dir) !== null && _a !== void 0 ? _a : this.hass.translationMetadata.translations[this.hass.language || "en"].isRTL) ? "rtl" : "ltr";
      var showSlider = c.stateObj.state !== "unavailable" && c.hasSlider && !(c.isOff && this._config.hide_when_off);
      var showToggle = this._config.toggle && c.hasToggle;
      var showValue = showToggle ? false : this._config.hide_state === false ? true : this._config.hide_state || this.hide_state ? false : c.isOff && this._config.hide_when_off ? false : true;
      var content = x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <div class=\"wrapper\" @click=", ">\n        ", "\n        ", "\n        ", "\n      </div>\n    "])), function (ev) {
        return ev.stopPropagation();
      }, showSlider ? x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n              ", "\n              <ha-slider\n                .min=", "\n                .max=", "\n                .step=", "\n                .value=", "\n                .dir=", "\n                labeled\n                pin\n                @change=", "\n                class=", "\n                ignore-bar-touch\n              ></ha-slider>\n            "])), this._config.colorize && c.background ? x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n                    <style>\n                      ha-slider::part(track) {\n                        background: ", ";\n                      }\n                      ha-slider::part(indicator) {\n                        background: transparent;\n                      }\n                      ha-slider {\n                        --paper-slider-container-color: ", ";\n                        --_inactive-track-color: ", ";\n                        --_active-track-color: ", ";\n                        --paper-progress-active-color: transparent;\n                      }\n                    </style>\n                  "])), c.background, c.background, c.background, c.background) : "", c.min, c.max, c.step, c.value, dir, function (ev) {
        return c.value = _this1.shadowRoot.querySelector("ha-slider").value;
      }, this._config.full_row || this._config.grow ? "full" : "") : "", showToggle ? c.renderToggle(this.hass) : "", showValue ? x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<span class=\"state\">\n              ", "\n            </span>"])), c.stateObj.state === "unavailable" ? this.hass.localize("state.default.unavailable") : c.string) : "");
      if (this._config.full_row) if (this._config.hide_when_off && c.isOff) return x(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));else if (this._config.show_icon === true) {
        var conf = this._config;
        return x(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["\n          <div class=\"wrapper\">\n            <state-badge\n              .hass=", "\n              .stateObj=", "\n              .overrideIcon=", "\n              .overrideImage=", "\n              .stateColor=", "\n            ></state-badge>\n            ", "\n          </div>\n        "])), this.hass, c.stateObj, conf.icon, conf.image, conf.state_color, content);
      } else return content;
      return x(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["\n      <hui-generic-entity-row\n        .hass=", "\n        .config=", "\n        .catchInteraction=", "\n      >\n        ", "\n      </hui-generic-entity-row>\n    "])), this.hass, this._config, false, content);
    }
  }], [{
    key: "getConfigElement",
    value: function getConfigElement() {
      console.log("GetConfigElement");
      return document.createElement("slider-entity-row-editor");
    }
  }, {
    key: "styles",
    get: function get() {
      return i$3(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      .wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n        flex: 7;\n        height: 40px;\n      }\n      .state {\n        min-width: 45px;\n        text-align: end;\n      }\n      ha-entity-toggle {\n        min-width: auto;\n        margin-left: 8px;\n      }\n      ha-slider {\n        width: 100%;\n        min-width: 100px;\n        --paper-slider-secondary-color: transparent;\n      }\n      ha-slider:not(.full) {\n        max-width: 200px;\n      }\n    "])));
    }
  }]);
}(i);
__decorate([n()], SliderEntityRow.prototype, "hass", void 0);
__decorate([n()], SliderEntityRow.prototype, "hide_state", void 0);
__decorate([e("ha-slider")], SliderEntityRow.prototype, "_slider", void 0);
if (!customElements.get("slider-entity-row")) {
  customElements.define("slider-entity-row", SliderEntityRow);
  console.info("%cSLIDER-ENTITY-ROW ".concat(pjson.version, " IS INSTALLED"), "color: green; font-weight: bold", "");
}
