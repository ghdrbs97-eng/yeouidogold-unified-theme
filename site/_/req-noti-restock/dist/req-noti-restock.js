/**
* @im/req-noti-restock v0.0.1.2026-06-01T06:51:08.834Z
* production
*/
var ad = (s) => {
  throw TypeError(s);
};
var Ou = (s, i, l) => i.has(s) || ad("Cannot " + l);
var w = (s, i, l) => (Ou(s, i, "read from private field"), l ? l.call(s) : i.get(s)), we = (s, i, l) => i.has(s) ? ad("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(s) : i.set(s, l), ue = (s, i, l, a) => (Ou(s, i, "write to private field"), a ? a.call(s, l) : i.set(s, l), l), Oe = (s, i, l) => (Ou(s, i, "access private method"), l);
var _s = (s, i, l, a) => ({
  set _(d) {
    ue(s, i, d, l);
  },
  get _() {
    return w(s, i, a);
  }
});
function km(s, i) {
  for (var l = 0; l < i.length; l++) {
    const a = i[l];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const d in a)
        if (d !== "default" && !(d in s)) {
          const v = Object.getOwnPropertyDescriptor(a, d);
          v && Object.defineProperty(s, d, v.get ? v : {
            enumerable: !0,
            get: () => a[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
function Jd(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Tu = { exports: {} }, to = {}, Iu = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Em() {
  if (cd) return Ie;
  cd = 1;
  var s = Symbol.for("react.element"), i = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), O = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), V = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ne(C) {
    return C === null || typeof C != "object" ? null : (C = U && C[U] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, z = Object.assign, L = {};
  function k(C, E, q) {
    this.props = C, this.context = E, this.refs = L, this.updater = q || ie;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(C, E) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, E, "setState");
  }, k.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function B() {
  }
  B.prototype = k.prototype;
  function H(C, E, q) {
    this.props = C, this.context = E, this.refs = L, this.updater = q || ie;
  }
  var b = H.prototype = new B();
  b.constructor = H, z(b, k.prototype), b.isPureReactComponent = !0;
  var $ = Array.isArray, F = Object.prototype.hasOwnProperty, x = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(C, E, q) {
    var te, ge = {}, Ee = null, Se = null;
    if (E != null) for (te in E.ref !== void 0 && (Se = E.ref), E.key !== void 0 && (Ee = "" + E.key), E) F.call(E, te) && !R.hasOwnProperty(te) && (ge[te] = E[te]);
    var Q = arguments.length - 2;
    if (Q === 1) ge.children = q;
    else if (1 < Q) {
      for (var f = Array(Q), m = 0; m < Q; m++) f[m] = arguments[m + 2];
      ge.children = f;
    }
    if (C && C.defaultProps) for (te in Q = C.defaultProps, Q) ge[te] === void 0 && (ge[te] = Q[te]);
    return { $$typeof: s, type: C, key: Ee, ref: Se, props: ge, _owner: x.current };
  }
  function g(C, E) {
    return { $$typeof: s, type: C.type, key: E, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function p(C) {
    return typeof C == "object" && C !== null && C.$$typeof === s;
  }
  function T(C) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(q) {
      return E[q];
    });
  }
  var N = /\/+/g;
  function me(C, E) {
    return typeof C == "object" && C !== null && C.key != null ? T("" + C.key) : E.toString(36);
  }
  function de(C, E, q, te, ge) {
    var Ee = typeof C;
    (Ee === "undefined" || Ee === "boolean") && (C = null);
    var Se = !1;
    if (C === null) Se = !0;
    else switch (Ee) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case s:
          case i:
            Se = !0;
        }
    }
    if (Se) return Se = C, ge = ge(Se), C = te === "" ? "." + me(Se, 0) : te, $(ge) ? (q = "", C != null && (q = C.replace(N, "$&/") + "/"), de(ge, E, q, "", function(m) {
      return m;
    })) : ge != null && (p(ge) && (ge = g(ge, q + (!ge.key || Se && Se.key === ge.key ? "" : ("" + ge.key).replace(N, "$&/") + "/") + C)), E.push(ge)), 1;
    if (Se = 0, te = te === "" ? "." : te + ":", $(C)) for (var Q = 0; Q < C.length; Q++) {
      Ee = C[Q];
      var f = te + me(Ee, Q);
      Se += de(Ee, E, q, f, ge);
    }
    else if (f = ne(C), typeof f == "function") for (C = f.call(C), Q = 0; !(Ee = C.next()).done; ) Ee = Ee.value, f = te + me(Ee, Q++), Se += de(Ee, E, q, f, ge);
    else if (Ee === "object") throw E = String(C), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function ve(C, E, q) {
    if (C == null) return C;
    var te = [], ge = 0;
    return de(C, te, "", "", function(Ee) {
      return E.call(q, Ee, ge++);
    }), te;
  }
  function oe(C) {
    if (C._status === -1) {
      var E = C._result;
      E = E(), E.then(function(q) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = q);
      }, function(q) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = q);
      }), C._status === -1 && (C._status = 0, C._result = E);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var _e = { current: null }, ee = { transition: null }, se = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: ee, ReactCurrentOwner: x };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ie.Children = { map: ve, forEach: function(C, E, q) {
    ve(C, function() {
      E.apply(this, arguments);
    }, q);
  }, count: function(C) {
    var E = 0;
    return ve(C, function() {
      E++;
    }), E;
  }, toArray: function(C) {
    return ve(C, function(E) {
      return E;
    }) || [];
  }, only: function(C) {
    if (!p(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, Ie.Component = k, Ie.Fragment = l, Ie.Profiler = d, Ie.PureComponent = H, Ie.StrictMode = a, Ie.Suspense = D, Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Ie.act = Z, Ie.cloneElement = function(C, E, q) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var te = z({}, C.props), ge = C.key, Ee = C.ref, Se = C._owner;
    if (E != null) {
      if (E.ref !== void 0 && (Ee = E.ref, Se = x.current), E.key !== void 0 && (ge = "" + E.key), C.type && C.type.defaultProps) var Q = C.type.defaultProps;
      for (f in E) F.call(E, f) && !R.hasOwnProperty(f) && (te[f] = E[f] === void 0 && Q !== void 0 ? Q[f] : E[f]);
    }
    var f = arguments.length - 2;
    if (f === 1) te.children = q;
    else if (1 < f) {
      Q = Array(f);
      for (var m = 0; m < f; m++) Q[m] = arguments[m + 2];
      te.children = Q;
    }
    return { $$typeof: s, type: C.type, key: ge, ref: Ee, props: te, _owner: Se };
  }, Ie.createContext = function(C) {
    return C = { $$typeof: O, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: v, _context: C }, C.Consumer = C;
  }, Ie.createElement = h, Ie.createFactory = function(C) {
    var E = h.bind(null, C);
    return E.type = C, E;
  }, Ie.createRef = function() {
    return { current: null };
  }, Ie.forwardRef = function(C) {
    return { $$typeof: M, render: C };
  }, Ie.isValidElement = p, Ie.lazy = function(C) {
    return { $$typeof: K, _payload: { _status: -1, _result: C }, _init: oe };
  }, Ie.memo = function(C, E) {
    return { $$typeof: V, type: C, compare: E === void 0 ? null : E };
  }, Ie.startTransition = function(C) {
    var E = ee.transition;
    ee.transition = {};
    try {
      C();
    } finally {
      ee.transition = E;
    }
  }, Ie.unstable_act = Z, Ie.useCallback = function(C, E) {
    return _e.current.useCallback(C, E);
  }, Ie.useContext = function(C) {
    return _e.current.useContext(C);
  }, Ie.useDebugValue = function() {
  }, Ie.useDeferredValue = function(C) {
    return _e.current.useDeferredValue(C);
  }, Ie.useEffect = function(C, E) {
    return _e.current.useEffect(C, E);
  }, Ie.useId = function() {
    return _e.current.useId();
  }, Ie.useImperativeHandle = function(C, E, q) {
    return _e.current.useImperativeHandle(C, E, q);
  }, Ie.useInsertionEffect = function(C, E) {
    return _e.current.useInsertionEffect(C, E);
  }, Ie.useLayoutEffect = function(C, E) {
    return _e.current.useLayoutEffect(C, E);
  }, Ie.useMemo = function(C, E) {
    return _e.current.useMemo(C, E);
  }, Ie.useReducer = function(C, E, q) {
    return _e.current.useReducer(C, E, q);
  }, Ie.useRef = function(C) {
    return _e.current.useRef(C);
  }, Ie.useState = function(C) {
    return _e.current.useState(C);
  }, Ie.useSyncExternalStore = function(C, E, q) {
    return _e.current.useSyncExternalStore(C, E, q);
  }, Ie.useTransition = function() {
    return _e.current.useTransition();
  }, Ie.version = "18.3.1", Ie;
}
var fd;
function la() {
  return fd || (fd = 1, Iu.exports = Em()), Iu.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dd;
function _m() {
  if (dd) return to;
  dd = 1;
  var s = la(), i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, d = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(M, D, V) {
    var K, U = {}, ne = null, ie = null;
    V !== void 0 && (ne = "" + V), D.key !== void 0 && (ne = "" + D.key), D.ref !== void 0 && (ie = D.ref);
    for (K in D) a.call(D, K) && !v.hasOwnProperty(K) && (U[K] = D[K]);
    if (M && M.defaultProps) for (K in D = M.defaultProps, D) U[K] === void 0 && (U[K] = D[K]);
    return { $$typeof: i, type: M, key: ne, ref: ie, props: U, _owner: d.current };
  }
  return to.Fragment = l, to.jsx = O, to.jsxs = O, to;
}
var hd;
function Cm() {
  return hd || (hd = 1, Tu.exports = _m()), Tu.exports;
}
var di = Cm(), pe = la();
const io = /* @__PURE__ */ Jd(pe), pd = /* @__PURE__ */ km({
  __proto__: null,
  default: io
}, [pe]);
function Pm(s) {
  if (s.sheet)
    return s.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === s)
      return document.styleSheets[i];
}
function Rm(s) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", s.key), s.nonce !== void 0 && i.setAttribute("nonce", s.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var Om = /* @__PURE__ */ function() {
  function s(l) {
    var a = this;
    this._insertTag = function(d) {
      var v;
      a.tags.length === 0 ? a.insertionPoint ? v = a.insertionPoint.nextSibling : a.prepend ? v = a.container.firstChild : v = a.before : v = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(d, v), a.tags.push(d);
    }, this.isSpeedy = l.speedy === void 0 ? !0 : l.speedy, this.tags = [], this.ctr = 0, this.nonce = l.nonce, this.key = l.key, this.container = l.container, this.prepend = l.prepend, this.insertionPoint = l.insertionPoint, this.before = null;
  }
  var i = s.prototype;
  return i.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, i.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rm(this));
    var d = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var v = Pm(d);
      try {
        v.insertRule(a, v.cssRules.length);
      } catch {
      }
    } else
      d.appendChild(document.createTextNode(a));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(a) {
      var d;
      return (d = a.parentNode) == null ? void 0 : d.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, s;
}(), gt = "-ms-", As = "-moz-", Fe = "-webkit-", Zd = "comm", ua = "rule", aa = "decl", Tm = "@import", eh = "@keyframes", Im = "@layer", Nm = Math.abs, js = String.fromCharCode, Lm = Object.assign;
function Am(s, i) {
  return dt(s, 0) ^ 45 ? (((i << 2 ^ dt(s, 0)) << 2 ^ dt(s, 1)) << 2 ^ dt(s, 2)) << 2 ^ dt(s, 3) : 0;
}
function th(s) {
  return s.trim();
}
function Fm(s, i) {
  return (s = i.exec(s)) ? s[0] : s;
}
function Me(s, i, l) {
  return s.replace(i, l);
}
function Hu(s, i) {
  return s.indexOf(i);
}
function dt(s, i) {
  return s.charCodeAt(i) | 0;
}
function oo(s, i, l) {
  return s.slice(i, l);
}
function hn(s) {
  return s.length;
}
function ca(s) {
  return s.length;
}
function Cs(s, i) {
  return i.push(s), s;
}
function Mm(s, i) {
  return s.map(i).join("");
}
var zs = 1, hi = 1, nh = 0, Lt = 0, tt = 0, pi = "";
function Ds(s, i, l, a, d, v, O) {
  return { value: s, root: i, parent: l, type: a, props: d, children: v, line: zs, column: hi, length: O, return: "" };
}
function no(s, i) {
  return Lm(Ds("", null, null, "", null, null, 0), s, { length: -s.length }, i);
}
function jm() {
  return tt;
}
function zm() {
  return tt = Lt > 0 ? dt(pi, --Lt) : 0, hi--, tt === 10 && (hi = 1, zs--), tt;
}
function zt() {
  return tt = Lt < nh ? dt(pi, Lt++) : 0, hi++, tt === 10 && (hi = 1, zs++), tt;
}
function mn() {
  return dt(pi, Lt);
}
function Ts() {
  return Lt;
}
function po(s, i) {
  return oo(pi, s, i);
}
function so(s) {
  switch (s) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rh(s) {
  return zs = hi = 1, nh = hn(pi = s), Lt = 0, [];
}
function ih(s) {
  return pi = "", s;
}
function Is(s) {
  return th(po(Lt - 1, Vu(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function Dm(s) {
  for (; (tt = mn()) && tt < 33; )
    zt();
  return so(s) > 2 || so(tt) > 3 ? "" : " ";
}
function bm(s, i) {
  for (; --i && zt() && !(tt < 48 || tt > 102 || tt > 57 && tt < 65 || tt > 70 && tt < 97); )
    ;
  return po(s, Ts() + (i < 6 && mn() == 32 && zt() == 32));
}
function Vu(s) {
  for (; zt(); )
    switch (tt) {
      // ] ) " '
      case s:
        return Lt;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && Vu(tt);
        break;
      // (
      case 40:
        s === 41 && Vu(s);
        break;
      // \
      case 92:
        zt();
        break;
    }
  return Lt;
}
function Um(s, i) {
  for (; zt() && s + tt !== 57; )
    if (s + tt === 84 && mn() === 47)
      break;
  return "/*" + po(i, Lt - 1) + "*" + js(s === 47 ? s : zt());
}
function Bm(s) {
  for (; !so(mn()); )
    zt();
  return po(s, Lt);
}
function $m(s) {
  return ih(Ns("", null, null, null, [""], s = rh(s), 0, [0], s));
}
function Ns(s, i, l, a, d, v, O, M, D) {
  for (var V = 0, K = 0, U = O, ne = 0, ie = 0, z = 0, L = 1, k = 1, B = 1, H = 0, b = "", $ = d, F = v, x = a, R = b; k; )
    switch (z = H, H = zt()) {
      // (
      case 40:
        if (z != 108 && dt(R, U - 1) == 58) {
          Hu(R += Me(Is(H), "&", "&\f"), "&\f") != -1 && (B = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        R += Is(H);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        R += Dm(z);
        break;
      // \
      case 92:
        R += bm(Ts() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            Cs(Qm(Um(zt(), Ts()), i, l), D);
            break;
          default:
            R += "/";
        }
        break;
      // {
      case 123 * L:
        M[V++] = hn(R) * B;
      // } ; \0
      case 125 * L:
      case 59:
      case 0:
        switch (H) {
          // \0 }
          case 0:
          case 125:
            k = 0;
          // ;
          case 59 + K:
            B == -1 && (R = Me(R, /\f/g, "")), ie > 0 && hn(R) - U && Cs(ie > 32 ? yd(R + ";", a, l, U - 1) : yd(Me(R, " ", "") + ";", a, l, U - 2), D);
            break;
          // @ ;
          case 59:
            R += ";";
          // { rule/at-rule
          default:
            if (Cs(x = md(R, i, l, V, K, d, M, b, $ = [], F = [], U), v), H === 123)
              if (K === 0)
                Ns(R, i, x, x, $, v, U, M, F);
              else
                switch (ne === 99 && dt(R, 3) === 110 ? 100 : ne) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ns(s, x, x, a && Cs(md(s, x, x, 0, 0, d, M, b, d, $ = [], U), F), d, F, U, M, a ? $ : F);
                    break;
                  default:
                    Ns(R, x, x, x, [""], F, 0, M, F);
                }
        }
        V = K = ie = 0, L = B = 1, b = R = "", U = O;
        break;
      // :
      case 58:
        U = 1 + hn(R), ie = z;
      default:
        if (L < 1) {
          if (H == 123)
            --L;
          else if (H == 125 && L++ == 0 && zm() == 125)
            continue;
        }
        switch (R += js(H), H * L) {
          // &
          case 38:
            B = K > 0 ? 1 : (R += "\f", -1);
            break;
          // ,
          case 44:
            M[V++] = (hn(R) - 1) * B, B = 1;
            break;
          // @
          case 64:
            mn() === 45 && (R += Is(zt())), ne = mn(), K = U = hn(b = R += Bm(Ts())), H++;
            break;
          // -
          case 45:
            z === 45 && hn(R) == 2 && (L = 0);
        }
    }
  return v;
}
function md(s, i, l, a, d, v, O, M, D, V, K) {
  for (var U = d - 1, ne = d === 0 ? v : [""], ie = ca(ne), z = 0, L = 0, k = 0; z < a; ++z)
    for (var B = 0, H = oo(s, U + 1, U = Nm(L = O[z])), b = s; B < ie; ++B)
      (b = th(L > 0 ? ne[B] + " " + H : Me(H, /&\f/g, ne[B]))) && (D[k++] = b);
  return Ds(s, i, l, d === 0 ? ua : M, D, V, K);
}
function Qm(s, i, l) {
  return Ds(s, i, l, Zd, js(jm()), oo(s, 2, -2), 0);
}
function yd(s, i, l, a) {
  return Ds(s, i, l, aa, oo(s, 0, a), oo(s, a + 1, -1), a);
}
function Xr(s, i) {
  for (var l = "", a = ca(s), d = 0; d < a; d++)
    l += i(s[d], d, s, i) || "";
  return l;
}
function Hm(s, i, l, a) {
  switch (s.type) {
    case Im:
      if (s.children.length) break;
    case Tm:
    case aa:
      return s.return = s.return || s.value;
    case Zd:
      return "";
    case eh:
      return s.return = s.value + "{" + Xr(s.children, a) + "}";
    case ua:
      s.value = s.props.join(",");
  }
  return hn(l = Xr(s.children, a)) ? s.return = s.value + "{" + l + "}" : "";
}
function Vm(s) {
  var i = ca(s);
  return function(l, a, d, v) {
    for (var O = "", M = 0; M < i; M++)
      O += s[M](l, a, d, v) || "";
    return O;
  };
}
function qm(s) {
  return function(i) {
    i.root || (i = i.return) && s(i);
  };
}
function Km(s) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return i[l] === void 0 && (i[l] = s(l)), i[l];
  };
}
var Wm = function(i, l, a) {
  for (var d = 0, v = 0; d = v, v = mn(), d === 38 && v === 12 && (l[a] = 1), !so(v); )
    zt();
  return po(i, Lt);
}, Ym = function(i, l) {
  var a = -1, d = 44;
  do
    switch (so(d)) {
      case 0:
        d === 38 && mn() === 12 && (l[a] = 1), i[a] += Wm(Lt - 1, l, a);
        break;
      case 2:
        i[a] += Is(d);
        break;
      case 4:
        if (d === 44) {
          i[++a] = mn() === 58 ? "&\f" : "", l[a] = i[a].length;
          break;
        }
      // fallthrough
      default:
        i[a] += js(d);
    }
  while (d = zt());
  return i;
}, Gm = function(i, l) {
  return ih(Ym(rh(i), l));
}, gd = /* @__PURE__ */ new WeakMap(), Xm = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var l = i.value, a = i.parent, d = i.column === a.column && i.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(i.props.length === 1 && l.charCodeAt(0) !== 58 && !gd.get(a)) && !d) {
      gd.set(i, !0);
      for (var v = [], O = Gm(l, v), M = a.props, D = 0, V = 0; D < O.length; D++)
        for (var K = 0; K < M.length; K++, V++)
          i.props[V] = v[D] ? O[D].replace(/&\f/g, M[K]) : M[K] + " " + O[D];
    }
  }
}, Jm = function(i) {
  if (i.type === "decl") {
    var l = i.value;
    // charcode for l
    l.charCodeAt(0) === 108 && // charcode for b
    l.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function oh(s, i) {
  switch (Am(s, i)) {
    // color-adjust
    case 5103:
      return Fe + "print-" + s + s;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Fe + s + s;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Fe + s + As + s + gt + s + s;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Fe + s + gt + s + s;
    // order
    case 6165:
      return Fe + s + gt + "flex-" + s + s;
    // align-items
    case 5187:
      return Fe + s + Me(s, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + gt + "flex-$1$2") + s;
    // align-self
    case 5443:
      return Fe + s + gt + "flex-item-" + Me(s, /flex-|-self/, "") + s;
    // align-content
    case 4675:
      return Fe + s + gt + "flex-line-pack" + Me(s, /align-content|flex-|-self/, "") + s;
    // flex-shrink
    case 5548:
      return Fe + s + gt + Me(s, "shrink", "negative") + s;
    // flex-basis
    case 5292:
      return Fe + s + gt + Me(s, "basis", "preferred-size") + s;
    // flex-grow
    case 6060:
      return Fe + "box-" + Me(s, "-grow", "") + Fe + s + gt + Me(s, "grow", "positive") + s;
    // transition
    case 4554:
      return Fe + Me(s, /([^-])(transform)/g, "$1" + Fe + "$2") + s;
    // cursor
    case 6187:
      return Me(Me(Me(s, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), s, "") + s;
    // background, background-image
    case 5495:
    case 3959:
      return Me(s, /(image-set\([^]*)/, Fe + "$1$`$1");
    // justify-content
    case 4968:
      return Me(Me(s, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + gt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + s + s;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(s, /(.+)-inline(.+)/, Fe + "$1$2") + s;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (hn(s) - 1 - i > 6) switch (dt(s, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (dt(s, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Me(s, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + As + (dt(s, i + 3) == 108 ? "$3" : "$2-$3")) + s;
        // (s)tretch
        case 115:
          return ~Hu(s, "stretch") ? oh(Me(s, "stretch", "fill-available"), i) + s : s;
      }
      break;
    // position: sticky
    case 4949:
      if (dt(s, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (dt(s, hn(s) - 3 - (~Hu(s, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Me(s, ":", ":" + Fe) + s;
        // (inline-)?fl(e)x
        case 101:
          return Me(s, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (dt(s, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + gt + "$2box$3") + s;
      }
      break;
    // writing-mode
    case 5936:
      switch (dt(s, i + 11)) {
        // vertical-l(r)
        case 114:
          return Fe + s + gt + Me(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        // vertical-r(l)
        case 108:
          return Fe + s + gt + Me(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        // horizontal(-)tb
        case 45:
          return Fe + s + gt + Me(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
      return Fe + s + gt + s + s;
  }
  return s;
}
var Zm = function(i, l, a, d) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case aa:
      i.return = oh(i.value, i.length);
      break;
    case eh:
      return Xr([no(i, {
        value: Me(i.value, "@", "@" + Fe)
      })], d);
    case ua:
      if (i.length) return Mm(i.props, function(v) {
        switch (Fm(v, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Xr([no(i, {
              props: [Me(v, /:(read-\w+)/, ":" + As + "$1")]
            })], d);
          // :placeholder
          case "::placeholder":
            return Xr([no(i, {
              props: [Me(v, /:(plac\w+)/, ":" + Fe + "input-$1")]
            }), no(i, {
              props: [Me(v, /:(plac\w+)/, ":" + As + "$1")]
            }), no(i, {
              props: [Me(v, /:(plac\w+)/, gt + "input-$1")]
            })], d);
        }
        return "";
      });
  }
}, ey = [Zm], sh = function(i) {
  var l = i.key;
  if (l === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(L) {
      var k = L.getAttribute("data-emotion");
      k.indexOf(" ") !== -1 && (document.head.appendChild(L), L.setAttribute("data-s", ""));
    });
  }
  var d = i.stylisPlugins || ey, v = {}, O, M = [];
  O = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + l + ' "]'),
    function(L) {
      for (var k = L.getAttribute("data-emotion").split(" "), B = 1; B < k.length; B++)
        v[k[B]] = !0;
      M.push(L);
    }
  );
  var D, V = [Xm, Jm];
  {
    var K, U = [Hm, qm(function(L) {
      K.insert(L);
    })], ne = Vm(V.concat(d, U)), ie = function(k) {
      return Xr($m(k), ne);
    };
    D = function(k, B, H, b) {
      K = H, ie(k ? k + "{" + B.styles + "}" : B.styles), b && (z.inserted[B.name] = !0);
    };
  }
  var z = {
    key: l,
    sheet: new Om({
      key: l,
      container: O,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: v,
    registered: {},
    insert: D
  };
  return z.sheet.hydrate(M), z;
}, Nu = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function ty() {
  if (vd) return je;
  vd = 1;
  var s = typeof Symbol == "function" && Symbol.for, i = s ? Symbol.for("react.element") : 60103, l = s ? Symbol.for("react.portal") : 60106, a = s ? Symbol.for("react.fragment") : 60107, d = s ? Symbol.for("react.strict_mode") : 60108, v = s ? Symbol.for("react.profiler") : 60114, O = s ? Symbol.for("react.provider") : 60109, M = s ? Symbol.for("react.context") : 60110, D = s ? Symbol.for("react.async_mode") : 60111, V = s ? Symbol.for("react.concurrent_mode") : 60111, K = s ? Symbol.for("react.forward_ref") : 60112, U = s ? Symbol.for("react.suspense") : 60113, ne = s ? Symbol.for("react.suspense_list") : 60120, ie = s ? Symbol.for("react.memo") : 60115, z = s ? Symbol.for("react.lazy") : 60116, L = s ? Symbol.for("react.block") : 60121, k = s ? Symbol.for("react.fundamental") : 60117, B = s ? Symbol.for("react.responder") : 60118, H = s ? Symbol.for("react.scope") : 60119;
  function b(F) {
    if (typeof F == "object" && F !== null) {
      var x = F.$$typeof;
      switch (x) {
        case i:
          switch (F = F.type, F) {
            case D:
            case V:
            case a:
            case v:
            case d:
            case U:
              return F;
            default:
              switch (F = F && F.$$typeof, F) {
                case M:
                case K:
                case z:
                case ie:
                case O:
                  return F;
                default:
                  return x;
              }
          }
        case l:
          return x;
      }
    }
  }
  function $(F) {
    return b(F) === V;
  }
  return je.AsyncMode = D, je.ConcurrentMode = V, je.ContextConsumer = M, je.ContextProvider = O, je.Element = i, je.ForwardRef = K, je.Fragment = a, je.Lazy = z, je.Memo = ie, je.Portal = l, je.Profiler = v, je.StrictMode = d, je.Suspense = U, je.isAsyncMode = function(F) {
    return $(F) || b(F) === D;
  }, je.isConcurrentMode = $, je.isContextConsumer = function(F) {
    return b(F) === M;
  }, je.isContextProvider = function(F) {
    return b(F) === O;
  }, je.isElement = function(F) {
    return typeof F == "object" && F !== null && F.$$typeof === i;
  }, je.isForwardRef = function(F) {
    return b(F) === K;
  }, je.isFragment = function(F) {
    return b(F) === a;
  }, je.isLazy = function(F) {
    return b(F) === z;
  }, je.isMemo = function(F) {
    return b(F) === ie;
  }, je.isPortal = function(F) {
    return b(F) === l;
  }, je.isProfiler = function(F) {
    return b(F) === v;
  }, je.isStrictMode = function(F) {
    return b(F) === d;
  }, je.isSuspense = function(F) {
    return b(F) === U;
  }, je.isValidElementType = function(F) {
    return typeof F == "string" || typeof F == "function" || F === a || F === V || F === v || F === d || F === U || F === ne || typeof F == "object" && F !== null && (F.$$typeof === z || F.$$typeof === ie || F.$$typeof === O || F.$$typeof === M || F.$$typeof === K || F.$$typeof === k || F.$$typeof === B || F.$$typeof === H || F.$$typeof === L);
  }, je.typeOf = b, je;
}
var wd;
function ny() {
  return wd || (wd = 1, Nu.exports = ty()), Nu.exports;
}
var Lu, Sd;
function ry() {
  if (Sd) return Lu;
  Sd = 1;
  var s = ny(), i = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, l = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, a = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, d = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, v = {};
  v[s.ForwardRef] = a, v[s.Memo] = d;
  function O(z) {
    return s.isMemo(z) ? d : v[z.$$typeof] || i;
  }
  var M = Object.defineProperty, D = Object.getOwnPropertyNames, V = Object.getOwnPropertySymbols, K = Object.getOwnPropertyDescriptor, U = Object.getPrototypeOf, ne = Object.prototype;
  function ie(z, L, k) {
    if (typeof L != "string") {
      if (ne) {
        var B = U(L);
        B && B !== ne && ie(z, B, k);
      }
      var H = D(L);
      V && (H = H.concat(V(L)));
      for (var b = O(z), $ = O(L), F = 0; F < H.length; ++F) {
        var x = H[F];
        if (!l[x] && !(k && k[x]) && !($ && $[x]) && !(b && b[x])) {
          var R = K(L, x);
          try {
            M(z, x, R);
          } catch {
          }
        }
      }
    }
    return z;
  }
  return Lu = ie, Lu;
}
ry();
var iy = !0;
function oy(s, i, l) {
  var a = "";
  return l.split(" ").forEach(function(d) {
    s[d] !== void 0 ? i.push(s[d] + ";") : d && (a += d + " ");
  }), a;
}
var lh = function(i, l, a) {
  var d = i.key + "-" + l.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  iy === !1) && i.registered[d] === void 0 && (i.registered[d] = l.styles);
}, sy = function(i, l, a) {
  lh(i, l, a);
  var d = i.key + "-" + l.name;
  if (i.inserted[l.name] === void 0) {
    var v = l;
    do
      i.insert(l === v ? "." + d : "", v, i.sheet, !0), v = v.next;
    while (v !== void 0);
  }
};
function ly(s) {
  for (var i = 0, l, a = 0, d = s.length; d >= 4; ++a, d -= 4)
    l = s.charCodeAt(a) & 255 | (s.charCodeAt(++a) & 255) << 8 | (s.charCodeAt(++a) & 255) << 16 | (s.charCodeAt(++a) & 255) << 24, l = /* Math.imul(k, m): */
    (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16), l ^= /* k >>> r: */
    l >>> 24, i = /* Math.imul(k, m): */
    (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (d) {
    case 3:
      i ^= (s.charCodeAt(a + 2) & 255) << 16;
    case 2:
      i ^= (s.charCodeAt(a + 1) & 255) << 8;
    case 1:
      i ^= s.charCodeAt(a) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var uy = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ay = /[A-Z]|^ms/g, cy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, uh = function(i) {
  return i.charCodeAt(1) === 45;
}, xd = function(i) {
  return i != null && typeof i != "boolean";
}, Au = /* @__PURE__ */ Km(function(s) {
  return uh(s) ? s : s.replace(ay, "-$&").toLowerCase();
}), kd = function(i, l) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof l == "string")
        return l.replace(cy, function(a, d, v) {
          return pn = {
            name: d,
            styles: v,
            next: pn
          }, d;
        });
  }
  return uy[i] !== 1 && !uh(i) && typeof l == "number" && l !== 0 ? l + "px" : l;
};
function lo(s, i, l) {
  if (l == null)
    return "";
  var a = l;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof l) {
    case "boolean":
      return "";
    case "object": {
      var d = l;
      if (d.anim === 1)
        return pn = {
          name: d.name,
          styles: d.styles,
          next: pn
        }, d.name;
      var v = l;
      if (v.styles !== void 0) {
        var O = v.next;
        if (O !== void 0)
          for (; O !== void 0; )
            pn = {
              name: O.name,
              styles: O.styles,
              next: pn
            }, O = O.next;
        var M = v.styles + ";";
        return M;
      }
      return fy(s, i, l);
    }
    case "function": {
      if (s !== void 0) {
        var D = pn, V = l(s);
        return pn = D, lo(s, i, V);
      }
      break;
    }
  }
  var K = l;
  return K;
}
function fy(s, i, l) {
  var a = "";
  if (Array.isArray(l))
    for (var d = 0; d < l.length; d++)
      a += lo(s, i, l[d]) + ";";
  else
    for (var v in l) {
      var O = l[v];
      if (typeof O != "object") {
        var M = O;
        xd(M) && (a += Au(v) + ":" + kd(v, M) + ";");
      } else if (Array.isArray(O) && typeof O[0] == "string" && i == null)
        for (var D = 0; D < O.length; D++)
          xd(O[D]) && (a += Au(v) + ":" + kd(v, O[D]) + ";");
      else {
        var V = lo(s, i, O);
        switch (v) {
          case "animation":
          case "animationName": {
            a += Au(v) + ":" + V + ";";
            break;
          }
          default:
            a += v + "{" + V + "}";
        }
      }
    }
  return a;
}
var Ed = /label:\s*([^\s;{]+)\s*(;|$)/g, pn;
function ah(s, i, l) {
  if (s.length === 1 && typeof s[0] == "object" && s[0] !== null && s[0].styles !== void 0)
    return s[0];
  var a = !0, d = "";
  pn = void 0;
  var v = s[0];
  if (v == null || v.raw === void 0)
    a = !1, d += lo(l, i, v);
  else {
    var O = v;
    d += O[0];
  }
  for (var M = 1; M < s.length; M++)
    if (d += lo(l, i, s[M]), a) {
      var D = v;
      d += D[M];
    }
  Ed.lastIndex = 0;
  for (var V = "", K; (K = Ed.exec(d)) !== null; )
    V += "-" + K[1];
  var U = ly(d) + V;
  return {
    name: U,
    styles: d,
    next: pn
  };
}
var dy = function(i) {
  return i();
}, hy = pd.useInsertionEffect ? pd.useInsertionEffect : !1, py = hy || dy, ch = /* @__PURE__ */ pe.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sh({
    key: "css"
  }) : null
), my = ch.Provider, yy = function(i) {
  return /* @__PURE__ */ pe.forwardRef(function(l, a) {
    var d = pe.useContext(ch);
    return i(l, d, a);
  });
}, gy = /* @__PURE__ */ pe.createContext({}), mo = {}.hasOwnProperty, qu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fa = function(i, l) {
  var a = {};
  for (var d in l)
    mo.call(l, d) && (a[d] = l[d]);
  return a[qu] = i, a;
}, vy = function(i) {
  var l = i.cache, a = i.serialized, d = i.isStringTag;
  return lh(l, a, d), py(function() {
    return sy(l, a, d);
  }), null;
}, wy = /* @__PURE__ */ yy(function(s, i, l) {
  var a = s.css;
  typeof a == "string" && i.registered[a] !== void 0 && (a = i.registered[a]);
  var d = s[qu], v = [a], O = "";
  typeof s.className == "string" ? O = oy(i.registered, v, s.className) : s.className != null && (O = s.className + " ");
  var M = ah(v, void 0, pe.useContext(gy));
  O += i.key + "-" + M.name;
  var D = {};
  for (var V in s)
    mo.call(s, V) && V !== "css" && V !== qu && (D[V] = s[V]);
  return D.className = O, l && (D.ref = l), /* @__PURE__ */ pe.createElement(pe.Fragment, null, /* @__PURE__ */ pe.createElement(vy, {
    cache: i,
    serialized: M,
    isStringTag: typeof d == "string"
  }), /* @__PURE__ */ pe.createElement(d, D));
}), da = wy, Fu = di.Fragment, Pe = function(i, l, a) {
  return mo.call(l, "css") ? di.jsx(da, fa(i, l), a) : di.jsx(i, l, a);
}, at = function(i, l, a) {
  return mo.call(l, "css") ? di.jsxs(da, fa(i, l), a) : di.jsxs(i, l, a);
}, _d = function(i, l) {
  var a = arguments;
  if (l == null || !mo.call(l, "css"))
    return pe.createElement.apply(void 0, a);
  var d = a.length, v = new Array(d);
  v[0] = da, v[1] = fa(i, l);
  for (var O = 2; O < d; O++)
    v[O] = a[O];
  return pe.createElement.apply(null, v);
};
(function(s) {
  var i;
  i || (i = s.JSX || (s.JSX = {}));
})(_d || (_d = {}));
function Re() {
  for (var s = arguments.length, i = new Array(s), l = 0; l < s; l++)
    i[l] = arguments[l];
  return ah(i);
}
var mi = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(s) {
    return this.listeners.add(s), this.onSubscribe(), () => {
      this.listeners.delete(s), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Cr = typeof window > "u" || "Deno" in globalThis;
function qt() {
}
function Sy(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function Ku(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function fh(s, i) {
  return Math.max(s + (i || 0) - Date.now(), 0);
}
function Jr(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function nn(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function Cd(s, i) {
  const {
    type: l = "all",
    exact: a,
    fetchStatus: d,
    predicate: v,
    queryKey: O,
    stale: M
  } = s;
  if (O) {
    if (a) {
      if (i.queryHash !== ha(O, i.options))
        return !1;
    } else if (!uo(i.queryKey, O))
      return !1;
  }
  if (l !== "all") {
    const D = i.isActive();
    if (l === "active" && !D || l === "inactive" && D)
      return !1;
  }
  return !(typeof M == "boolean" && i.isStale() !== M || d && d !== i.state.fetchStatus || v && !v(i));
}
function Pd(s, i) {
  const { exact: l, status: a, predicate: d, mutationKey: v } = s;
  if (v) {
    if (!i.options.mutationKey)
      return !1;
    if (l) {
      if (Pr(i.options.mutationKey) !== Pr(v))
        return !1;
    } else if (!uo(i.options.mutationKey, v))
      return !1;
  }
  return !(a && i.state.status !== a || d && !d(i));
}
function ha(s, i) {
  return ((i == null ? void 0 : i.queryKeyHashFn) || Pr)(s);
}
function Pr(s) {
  return JSON.stringify(
    s,
    (i, l) => Wu(l) ? Object.keys(l).sort().reduce((a, d) => (a[d] = l[d], a), {}) : l
  );
}
function uo(s, i) {
  return s === i ? !0 : typeof s != typeof i ? !1 : s && i && typeof s == "object" && typeof i == "object" ? !Object.keys(i).some((l) => !uo(s[l], i[l])) : !1;
}
function dh(s, i) {
  if (s === i)
    return s;
  const l = Rd(s) && Rd(i);
  if (l || Wu(s) && Wu(i)) {
    const a = l ? s : Object.keys(s), d = a.length, v = l ? i : Object.keys(i), O = v.length, M = l ? [] : {};
    let D = 0;
    for (let V = 0; V < O; V++) {
      const K = l ? V : v[V];
      (!l && a.includes(K) || l) && s[K] === void 0 && i[K] === void 0 ? (M[K] = void 0, D++) : (M[K] = dh(s[K], i[K]), M[K] === s[K] && s[K] !== void 0 && D++);
    }
    return d === O && D === d ? s : M;
  }
  return i;
}
function Fs(s, i) {
  if (!i || Object.keys(s).length !== Object.keys(i).length)
    return !1;
  for (const l in s)
    if (s[l] !== i[l])
      return !1;
  return !0;
}
function Rd(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function Wu(s) {
  if (!Od(s))
    return !1;
  const i = s.constructor;
  if (i === void 0)
    return !0;
  const l = i.prototype;
  return !(!Od(l) || !l.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(s) !== Object.prototype);
}
function Od(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function xy(s) {
  return new Promise((i) => {
    setTimeout(i, s);
  });
}
function Yu(s, i, l) {
  return typeof l.structuralSharing == "function" ? l.structuralSharing(s, i) : l.structuralSharing !== !1 ? dh(s, i) : i;
}
function ky(s, i, l = 0) {
  const a = [...s, i];
  return l && a.length > l ? a.slice(1) : a;
}
function Ey(s, i, l = 0) {
  const a = [i, ...s];
  return l && a.length > l ? a.slice(0, -1) : a;
}
var pa = Symbol();
function hh(s, i) {
  return !s.queryFn && (i != null && i.initialPromise) ? () => i.initialPromise : !s.queryFn || s.queryFn === pa ? () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`)) : s.queryFn;
}
var gr, Yn, Zr, $d, _y = ($d = class extends mi {
  constructor() {
    super();
    we(this, gr);
    we(this, Yn);
    we(this, Zr);
    ue(this, Zr, (i) => {
      if (!Cr && window.addEventListener) {
        const l = () => i();
        return window.addEventListener("visibilitychange", l, !1), () => {
          window.removeEventListener("visibilitychange", l);
        };
      }
    });
  }
  onSubscribe() {
    w(this, Yn) || this.setEventListener(w(this, Zr));
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || ((i = w(this, Yn)) == null || i.call(this), ue(this, Yn, void 0));
  }
  setEventListener(i) {
    var l;
    ue(this, Zr, i), (l = w(this, Yn)) == null || l.call(this), ue(this, Yn, i((a) => {
      typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
    }));
  }
  setFocused(i) {
    w(this, gr) !== i && (ue(this, gr, i), this.onFocus());
  }
  onFocus() {
    const i = this.isFocused();
    this.listeners.forEach((l) => {
      l(i);
    });
  }
  isFocused() {
    var i;
    return typeof w(this, gr) == "boolean" ? w(this, gr) : ((i = globalThis.document) == null ? void 0 : i.visibilityState) !== "hidden";
  }
}, gr = new WeakMap(), Yn = new WeakMap(), Zr = new WeakMap(), $d), ma = new _y(), ei, Gn, ti, Qd, Cy = (Qd = class extends mi {
  constructor() {
    super();
    we(this, ei, !0);
    we(this, Gn);
    we(this, ti);
    ue(this, ti, (i) => {
      if (!Cr && window.addEventListener) {
        const l = () => i(!0), a = () => i(!1);
        return window.addEventListener("online", l, !1), window.addEventListener("offline", a, !1), () => {
          window.removeEventListener("online", l), window.removeEventListener("offline", a);
        };
      }
    });
  }
  onSubscribe() {
    w(this, Gn) || this.setEventListener(w(this, ti));
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || ((i = w(this, Gn)) == null || i.call(this), ue(this, Gn, void 0));
  }
  setEventListener(i) {
    var l;
    ue(this, ti, i), (l = w(this, Gn)) == null || l.call(this), ue(this, Gn, i(this.setOnline.bind(this)));
  }
  setOnline(i) {
    w(this, ei) !== i && (ue(this, ei, i), this.listeners.forEach((a) => {
      a(i);
    }));
  }
  isOnline() {
    return w(this, ei);
  }
}, ei = new WeakMap(), Gn = new WeakMap(), ti = new WeakMap(), Qd), Ms = new Cy();
function Gu() {
  let s, i;
  const l = new Promise((d, v) => {
    s = d, i = v;
  });
  l.status = "pending", l.catch(() => {
  });
  function a(d) {
    Object.assign(l, d), delete l.resolve, delete l.reject;
  }
  return l.resolve = (d) => {
    a({
      status: "fulfilled",
      value: d
    }), s(d);
  }, l.reject = (d) => {
    a({
      status: "rejected",
      reason: d
    }), i(d);
  }, l;
}
function Py(s) {
  return Math.min(1e3 * 2 ** s, 3e4);
}
function ph(s) {
  return (s ?? "online") === "online" ? Ms.isOnline() : !0;
}
var mh = class extends Error {
  constructor(s) {
    super("CancelledError"), this.revert = s == null ? void 0 : s.revert, this.silent = s == null ? void 0 : s.silent;
  }
};
function Mu(s) {
  return s instanceof mh;
}
function yh(s) {
  let i = !1, l = 0, a = !1, d;
  const v = Gu(), O = (L) => {
    var k;
    a || (ne(new mh(L)), (k = s.abort) == null || k.call(s));
  }, M = () => {
    i = !0;
  }, D = () => {
    i = !1;
  }, V = () => ma.isFocused() && (s.networkMode === "always" || Ms.isOnline()) && s.canRun(), K = () => ph(s.networkMode) && s.canRun(), U = (L) => {
    var k;
    a || (a = !0, (k = s.onSuccess) == null || k.call(s, L), d == null || d(), v.resolve(L));
  }, ne = (L) => {
    var k;
    a || (a = !0, (k = s.onError) == null || k.call(s, L), d == null || d(), v.reject(L));
  }, ie = () => new Promise((L) => {
    var k;
    d = (B) => {
      (a || V()) && L(B);
    }, (k = s.onPause) == null || k.call(s);
  }).then(() => {
    var L;
    d = void 0, a || (L = s.onContinue) == null || L.call(s);
  }), z = () => {
    if (a)
      return;
    let L;
    const k = l === 0 ? s.initialPromise : void 0;
    try {
      L = k ?? s.fn();
    } catch (B) {
      L = Promise.reject(B);
    }
    Promise.resolve(L).then(U).catch((B) => {
      var x;
      if (a)
        return;
      const H = s.retry ?? (Cr ? 0 : 3), b = s.retryDelay ?? Py, $ = typeof b == "function" ? b(l, B) : b, F = H === !0 || typeof H == "number" && l < H || typeof H == "function" && H(l, B);
      if (i || !F) {
        ne(B);
        return;
      }
      l++, (x = s.onFail) == null || x.call(s, l, B), xy($).then(() => V() ? void 0 : ie()).then(() => {
        i ? ne(B) : z();
      });
    });
  };
  return {
    promise: v,
    cancel: O,
    continue: () => (d == null || d(), v),
    cancelRetry: M,
    continueRetry: D,
    canStart: K,
    start: () => (K() ? z() : ie().then(z), v)
  };
}
function Ry() {
  let s = [], i = 0, l = (M) => {
    M();
  }, a = (M) => {
    M();
  }, d = (M) => setTimeout(M, 0);
  const v = (M) => {
    i ? s.push(M) : d(() => {
      l(M);
    });
  }, O = () => {
    const M = s;
    s = [], M.length && d(() => {
      a(() => {
        M.forEach((D) => {
          l(D);
        });
      });
    });
  };
  return {
    batch: (M) => {
      let D;
      i++;
      try {
        D = M();
      } finally {
        i--, i || O();
      }
      return D;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (M) => (...D) => {
      v(() => {
        M(...D);
      });
    },
    schedule: v,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (M) => {
      l = M;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (M) => {
      a = M;
    },
    setScheduler: (M) => {
      d = M;
    }
  };
}
var it = Ry(), vr, Hd, gh = (Hd = class {
  constructor() {
    we(this, vr);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ku(this.gcTime) && ue(this, vr, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(s) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      s ?? (Cr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    w(this, vr) && (clearTimeout(w(this, vr)), ue(this, vr, void 0));
  }
}, vr = new WeakMap(), Hd), ni, ri, Vt, wr, vt, ao, Sr, en, Cn, Vd, Oy = (Vd = class extends gh {
  constructor(i) {
    super();
    we(this, en);
    we(this, ni);
    we(this, ri);
    we(this, Vt);
    we(this, wr);
    we(this, vt);
    we(this, ao);
    we(this, Sr);
    ue(this, Sr, !1), ue(this, ao, i.defaultOptions), this.setOptions(i.options), this.observers = [], ue(this, wr, i.client), ue(this, Vt, w(this, wr).getQueryCache()), this.queryKey = i.queryKey, this.queryHash = i.queryHash, ue(this, ni, Ty(this.options)), this.state = i.state ?? w(this, ni), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var i;
    return (i = w(this, vt)) == null ? void 0 : i.promise;
  }
  setOptions(i) {
    this.options = { ...w(this, ao), ...i }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && w(this, Vt).remove(this);
  }
  setData(i, l) {
    const a = Yu(this.state.data, i, this.options);
    return Oe(this, en, Cn).call(this, {
      data: a,
      type: "success",
      dataUpdatedAt: l == null ? void 0 : l.updatedAt,
      manual: l == null ? void 0 : l.manual
    }), a;
  }
  setState(i, l) {
    Oe(this, en, Cn).call(this, { type: "setState", state: i, setStateOptions: l });
  }
  cancel(i) {
    var a, d;
    const l = (a = w(this, vt)) == null ? void 0 : a.promise;
    return (d = w(this, vt)) == null || d.cancel(i), l ? l.then(qt).catch(qt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(w(this, ni));
  }
  isActive() {
    return this.observers.some(
      (i) => nn(i.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === pa || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (i) => i.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(i = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !fh(this.state.dataUpdatedAt, i);
  }
  onFocus() {
    var l;
    const i = this.observers.find((a) => a.shouldFetchOnWindowFocus());
    i == null || i.refetch({ cancelRefetch: !1 }), (l = w(this, vt)) == null || l.continue();
  }
  onOnline() {
    var l;
    const i = this.observers.find((a) => a.shouldFetchOnReconnect());
    i == null || i.refetch({ cancelRefetch: !1 }), (l = w(this, vt)) == null || l.continue();
  }
  addObserver(i) {
    this.observers.includes(i) || (this.observers.push(i), this.clearGcTimeout(), w(this, Vt).notify({ type: "observerAdded", query: this, observer: i }));
  }
  removeObserver(i) {
    this.observers.includes(i) && (this.observers = this.observers.filter((l) => l !== i), this.observers.length || (w(this, vt) && (w(this, Sr) ? w(this, vt).cancel({ revert: !0 }) : w(this, vt).cancelRetry()), this.scheduleGc()), w(this, Vt).notify({ type: "observerRemoved", query: this, observer: i }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Oe(this, en, Cn).call(this, { type: "invalidate" });
  }
  fetch(i, l) {
    var D, V, K;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (l != null && l.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (w(this, vt))
        return w(this, vt).continueRetry(), w(this, vt).promise;
    }
    if (i && this.setOptions(i), !this.options.queryFn) {
      const U = this.observers.find((ne) => ne.options.queryFn);
      U && this.setOptions(U.options);
    }
    const a = new AbortController(), d = (U) => {
      Object.defineProperty(U, "signal", {
        enumerable: !0,
        get: () => (ue(this, Sr, !0), a.signal)
      });
    }, v = () => {
      const U = hh(this.options, l), ne = {
        client: w(this, wr),
        queryKey: this.queryKey,
        meta: this.meta
      };
      return d(ne), ue(this, Sr, !1), this.options.persister ? this.options.persister(
        U,
        ne,
        this
      ) : U(ne);
    }, O = {
      fetchOptions: l,
      options: this.options,
      queryKey: this.queryKey,
      client: w(this, wr),
      state: this.state,
      fetchFn: v
    };
    d(O), (D = this.options.behavior) == null || D.onFetch(
      O,
      this
    ), ue(this, ri, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((V = O.fetchOptions) == null ? void 0 : V.meta)) && Oe(this, en, Cn).call(this, { type: "fetch", meta: (K = O.fetchOptions) == null ? void 0 : K.meta });
    const M = (U) => {
      var ne, ie, z, L;
      Mu(U) && U.silent || Oe(this, en, Cn).call(this, {
        type: "error",
        error: U
      }), Mu(U) || ((ie = (ne = w(this, Vt).config).onError) == null || ie.call(
        ne,
        U,
        this
      ), (L = (z = w(this, Vt).config).onSettled) == null || L.call(
        z,
        this.state.data,
        U,
        this
      )), this.scheduleGc();
    };
    return ue(this, vt, yh({
      initialPromise: l == null ? void 0 : l.initialPromise,
      fn: O.fetchFn,
      abort: a.abort.bind(a),
      onSuccess: (U) => {
        var ne, ie, z, L;
        if (U === void 0) {
          M(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(U);
        } catch (k) {
          M(k);
          return;
        }
        (ie = (ne = w(this, Vt).config).onSuccess) == null || ie.call(ne, U, this), (L = (z = w(this, Vt).config).onSettled) == null || L.call(
          z,
          U,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: M,
      onFail: (U, ne) => {
        Oe(this, en, Cn).call(this, { type: "failed", failureCount: U, error: ne });
      },
      onPause: () => {
        Oe(this, en, Cn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Oe(this, en, Cn).call(this, { type: "continue" });
      },
      retry: O.options.retry,
      retryDelay: O.options.retryDelay,
      networkMode: O.options.networkMode,
      canRun: () => !0
    })), w(this, vt).start();
  }
}, ni = new WeakMap(), ri = new WeakMap(), Vt = new WeakMap(), wr = new WeakMap(), vt = new WeakMap(), ao = new WeakMap(), Sr = new WeakMap(), en = new WeakSet(), Cn = function(i) {
  const l = (a) => {
    switch (i.type) {
      case "failed":
        return {
          ...a,
          fetchFailureCount: i.failureCount,
          fetchFailureReason: i.error
        };
      case "pause":
        return {
          ...a,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...a,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...a,
          ...vh(a.data, this.options),
          fetchMeta: i.meta ?? null
        };
      case "success":
        return {
          ...a,
          data: i.data,
          dataUpdateCount: a.dataUpdateCount + 1,
          dataUpdatedAt: i.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!i.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const d = i.error;
        return Mu(d) && d.revert && w(this, ri) ? { ...w(this, ri), fetchStatus: "idle" } : {
          ...a,
          error: d,
          errorUpdateCount: a.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: a.fetchFailureCount + 1,
          fetchFailureReason: d,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...a,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...a,
          ...i.state
        };
    }
  };
  this.state = l(this.state), it.batch(() => {
    this.observers.forEach((a) => {
      a.onQueryUpdate();
    }), w(this, Vt).notify({ query: this, type: "updated", action: i });
  });
}, Vd);
function vh(s, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ph(i.networkMode) ? "fetching" : "paused",
    ...s === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Ty(s) {
  const i = typeof s.initialData == "function" ? s.initialData() : s.initialData, l = i !== void 0, a = l ? typeof s.initialDataUpdatedAt == "function" ? s.initialDataUpdatedAt() : s.initialDataUpdatedAt : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? a ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var an, qd, Iy = (qd = class extends mi {
  constructor(i = {}) {
    super();
    we(this, an);
    this.config = i, ue(this, an, /* @__PURE__ */ new Map());
  }
  build(i, l, a) {
    const d = l.queryKey, v = l.queryHash ?? ha(d, l);
    let O = this.get(v);
    return O || (O = new Oy({
      client: i,
      queryKey: d,
      queryHash: v,
      options: i.defaultQueryOptions(l),
      state: a,
      defaultOptions: i.getQueryDefaults(d)
    }), this.add(O)), O;
  }
  add(i) {
    w(this, an).has(i.queryHash) || (w(this, an).set(i.queryHash, i), this.notify({
      type: "added",
      query: i
    }));
  }
  remove(i) {
    const l = w(this, an).get(i.queryHash);
    l && (i.destroy(), l === i && w(this, an).delete(i.queryHash), this.notify({ type: "removed", query: i }));
  }
  clear() {
    it.batch(() => {
      this.getAll().forEach((i) => {
        this.remove(i);
      });
    });
  }
  get(i) {
    return w(this, an).get(i);
  }
  getAll() {
    return [...w(this, an).values()];
  }
  find(i) {
    const l = { exact: !0, ...i };
    return this.getAll().find(
      (a) => Cd(l, a)
    );
  }
  findAll(i = {}) {
    const l = this.getAll();
    return Object.keys(i).length > 0 ? l.filter((a) => Cd(i, a)) : l;
  }
  notify(i) {
    it.batch(() => {
      this.listeners.forEach((l) => {
        l(i);
      });
    });
  }
  onFocus() {
    it.batch(() => {
      this.getAll().forEach((i) => {
        i.onFocus();
      });
    });
  }
  onOnline() {
    it.batch(() => {
      this.getAll().forEach((i) => {
        i.onOnline();
      });
    });
  }
}, an = new WeakMap(), qd), cn, xt, xr, fn, Wn, Kd, Ny = (Kd = class extends gh {
  constructor(i) {
    super();
    we(this, fn);
    we(this, cn);
    we(this, xt);
    we(this, xr);
    this.mutationId = i.mutationId, ue(this, xt, i.mutationCache), ue(this, cn, []), this.state = i.state || wh(), this.setOptions(i.options), this.scheduleGc();
  }
  setOptions(i) {
    this.options = i, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(i) {
    w(this, cn).includes(i) || (w(this, cn).push(i), this.clearGcTimeout(), w(this, xt).notify({
      type: "observerAdded",
      mutation: this,
      observer: i
    }));
  }
  removeObserver(i) {
    ue(this, cn, w(this, cn).filter((l) => l !== i)), this.scheduleGc(), w(this, xt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: i
    });
  }
  optionalRemove() {
    w(this, cn).length || (this.state.status === "pending" ? this.scheduleGc() : w(this, xt).remove(this));
  }
  continue() {
    var i;
    return ((i = w(this, xr)) == null ? void 0 : i.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(i) {
    var d, v, O, M, D, V, K, U, ne, ie, z, L, k, B, H, b, $, F, x, R;
    ue(this, xr, yh({
      fn: () => this.options.mutationFn ? this.options.mutationFn(i) : Promise.reject(new Error("No mutationFn found")),
      onFail: (h, g) => {
        Oe(this, fn, Wn).call(this, { type: "failed", failureCount: h, error: g });
      },
      onPause: () => {
        Oe(this, fn, Wn).call(this, { type: "pause" });
      },
      onContinue: () => {
        Oe(this, fn, Wn).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => w(this, xt).canRun(this)
    }));
    const l = this.state.status === "pending", a = !w(this, xr).canStart();
    try {
      if (!l) {
        Oe(this, fn, Wn).call(this, { type: "pending", variables: i, isPaused: a }), await ((v = (d = w(this, xt).config).onMutate) == null ? void 0 : v.call(
          d,
          i,
          this
        ));
        const g = await ((M = (O = this.options).onMutate) == null ? void 0 : M.call(O, i));
        g !== this.state.context && Oe(this, fn, Wn).call(this, {
          type: "pending",
          context: g,
          variables: i,
          isPaused: a
        });
      }
      const h = await w(this, xr).start();
      return await ((V = (D = w(this, xt).config).onSuccess) == null ? void 0 : V.call(
        D,
        h,
        i,
        this.state.context,
        this
      )), await ((U = (K = this.options).onSuccess) == null ? void 0 : U.call(K, h, i, this.state.context)), await ((ie = (ne = w(this, xt).config).onSettled) == null ? void 0 : ie.call(
        ne,
        h,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((L = (z = this.options).onSettled) == null ? void 0 : L.call(z, h, null, i, this.state.context)), Oe(this, fn, Wn).call(this, { type: "success", data: h }), h;
    } catch (h) {
      try {
        throw await ((B = (k = w(this, xt).config).onError) == null ? void 0 : B.call(
          k,
          h,
          i,
          this.state.context,
          this
        )), await ((b = (H = this.options).onError) == null ? void 0 : b.call(
          H,
          h,
          i,
          this.state.context
        )), await ((F = ($ = w(this, xt).config).onSettled) == null ? void 0 : F.call(
          $,
          void 0,
          h,
          this.state.variables,
          this.state.context,
          this
        )), await ((R = (x = this.options).onSettled) == null ? void 0 : R.call(
          x,
          void 0,
          h,
          i,
          this.state.context
        )), h;
      } finally {
        Oe(this, fn, Wn).call(this, { type: "error", error: h });
      }
    } finally {
      w(this, xt).runNext(this);
    }
  }
}, cn = new WeakMap(), xt = new WeakMap(), xr = new WeakMap(), fn = new WeakSet(), Wn = function(i) {
  const l = (a) => {
    switch (i.type) {
      case "failed":
        return {
          ...a,
          failureCount: i.failureCount,
          failureReason: i.error
        };
      case "pause":
        return {
          ...a,
          isPaused: !0
        };
      case "continue":
        return {
          ...a,
          isPaused: !1
        };
      case "pending":
        return {
          ...a,
          context: i.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: i.isPaused,
          status: "pending",
          variables: i.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...a,
          data: i.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...a,
          data: void 0,
          error: i.error,
          failureCount: a.failureCount + 1,
          failureReason: i.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = l(this.state), it.batch(() => {
    w(this, cn).forEach((a) => {
      a.onMutationUpdate(i);
    }), w(this, xt).notify({
      mutation: this,
      type: "updated",
      action: i
    });
  });
}, Kd);
function wh() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Pn, tn, co, Wd, Ly = (Wd = class extends mi {
  constructor(i = {}) {
    super();
    we(this, Pn);
    we(this, tn);
    we(this, co);
    this.config = i, ue(this, Pn, /* @__PURE__ */ new Set()), ue(this, tn, /* @__PURE__ */ new Map()), ue(this, co, 0);
  }
  build(i, l, a) {
    const d = new Ny({
      mutationCache: this,
      mutationId: ++_s(this, co)._,
      options: i.defaultMutationOptions(l),
      state: a
    });
    return this.add(d), d;
  }
  add(i) {
    w(this, Pn).add(i);
    const l = Ps(i);
    if (typeof l == "string") {
      const a = w(this, tn).get(l);
      a ? a.push(i) : w(this, tn).set(l, [i]);
    }
    this.notify({ type: "added", mutation: i });
  }
  remove(i) {
    if (w(this, Pn).delete(i)) {
      const l = Ps(i);
      if (typeof l == "string") {
        const a = w(this, tn).get(l);
        if (a)
          if (a.length > 1) {
            const d = a.indexOf(i);
            d !== -1 && a.splice(d, 1);
          } else a[0] === i && w(this, tn).delete(l);
      }
    }
    this.notify({ type: "removed", mutation: i });
  }
  canRun(i) {
    const l = Ps(i);
    if (typeof l == "string") {
      const a = w(this, tn).get(l), d = a == null ? void 0 : a.find(
        (v) => v.state.status === "pending"
      );
      return !d || d === i;
    } else
      return !0;
  }
  runNext(i) {
    var a;
    const l = Ps(i);
    if (typeof l == "string") {
      const d = (a = w(this, tn).get(l)) == null ? void 0 : a.find((v) => v !== i && v.state.isPaused);
      return (d == null ? void 0 : d.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    it.batch(() => {
      w(this, Pn).forEach((i) => {
        this.notify({ type: "removed", mutation: i });
      }), w(this, Pn).clear(), w(this, tn).clear();
    });
  }
  getAll() {
    return Array.from(w(this, Pn));
  }
  find(i) {
    const l = { exact: !0, ...i };
    return this.getAll().find(
      (a) => Pd(l, a)
    );
  }
  findAll(i = {}) {
    return this.getAll().filter((l) => Pd(i, l));
  }
  notify(i) {
    it.batch(() => {
      this.listeners.forEach((l) => {
        l(i);
      });
    });
  }
  resumePausedMutations() {
    const i = this.getAll().filter((l) => l.state.isPaused);
    return it.batch(
      () => Promise.all(
        i.map((l) => l.continue().catch(qt))
      )
    );
  }
}, Pn = new WeakMap(), tn = new WeakMap(), co = new WeakMap(), Wd);
function Ps(s) {
  var i;
  return (i = s.options.scope) == null ? void 0 : i.id;
}
function Td(s) {
  return {
    onFetch: (i, l) => {
      var K, U, ne, ie, z;
      const a = i.options, d = (ne = (U = (K = i.fetchOptions) == null ? void 0 : K.meta) == null ? void 0 : U.fetchMore) == null ? void 0 : ne.direction, v = ((ie = i.state.data) == null ? void 0 : ie.pages) || [], O = ((z = i.state.data) == null ? void 0 : z.pageParams) || [];
      let M = { pages: [], pageParams: [] }, D = 0;
      const V = async () => {
        let L = !1;
        const k = (b) => {
          Object.defineProperty(b, "signal", {
            enumerable: !0,
            get: () => (i.signal.aborted ? L = !0 : i.signal.addEventListener("abort", () => {
              L = !0;
            }), i.signal)
          });
        }, B = hh(i.options, i.fetchOptions), H = async (b, $, F) => {
          if (L)
            return Promise.reject();
          if ($ == null && b.pages.length)
            return Promise.resolve(b);
          const x = {
            client: i.client,
            queryKey: i.queryKey,
            pageParam: $,
            direction: F ? "backward" : "forward",
            meta: i.options.meta
          };
          k(x);
          const R = await B(
            x
          ), { maxPages: h } = i.options, g = F ? Ey : ky;
          return {
            pages: g(b.pages, R, h),
            pageParams: g(b.pageParams, $, h)
          };
        };
        if (d && v.length) {
          const b = d === "backward", $ = b ? Ay : Id, F = {
            pages: v,
            pageParams: O
          }, x = $(a, F);
          M = await H(F, x, b);
        } else {
          const b = s ?? v.length;
          do {
            const $ = D === 0 ? O[0] ?? a.initialPageParam : Id(a, M);
            if (D > 0 && $ == null)
              break;
            M = await H(M, $), D++;
          } while (D < b);
        }
        return M;
      };
      i.options.persister ? i.fetchFn = () => {
        var L, k;
        return (k = (L = i.options).persister) == null ? void 0 : k.call(
          L,
          V,
          {
            client: i.client,
            queryKey: i.queryKey,
            meta: i.options.meta,
            signal: i.signal
          },
          l
        );
      } : i.fetchFn = V;
    }
  };
}
function Id(s, { pages: i, pageParams: l }) {
  const a = i.length - 1;
  return i.length > 0 ? s.getNextPageParam(
    i[a],
    i,
    l[a],
    l
  ) : void 0;
}
function Ay(s, { pages: i, pageParams: l }) {
  var a;
  return i.length > 0 ? (a = s.getPreviousPageParam) == null ? void 0 : a.call(s, i[0], i, l[0], l) : void 0;
}
var Ge, Xn, Jn, ii, oi, Zn, si, li, Yd, Fy = (Yd = class {
  constructor(s = {}) {
    we(this, Ge);
    we(this, Xn);
    we(this, Jn);
    we(this, ii);
    we(this, oi);
    we(this, Zn);
    we(this, si);
    we(this, li);
    ue(this, Ge, s.queryCache || new Iy()), ue(this, Xn, s.mutationCache || new Ly()), ue(this, Jn, s.defaultOptions || {}), ue(this, ii, /* @__PURE__ */ new Map()), ue(this, oi, /* @__PURE__ */ new Map()), ue(this, Zn, 0);
  }
  mount() {
    _s(this, Zn)._++, w(this, Zn) === 1 && (ue(this, si, ma.subscribe(async (s) => {
      s && (await this.resumePausedMutations(), w(this, Ge).onFocus());
    })), ue(this, li, Ms.subscribe(async (s) => {
      s && (await this.resumePausedMutations(), w(this, Ge).onOnline());
    })));
  }
  unmount() {
    var s, i;
    _s(this, Zn)._--, w(this, Zn) === 0 && ((s = w(this, si)) == null || s.call(this), ue(this, si, void 0), (i = w(this, li)) == null || i.call(this), ue(this, li, void 0));
  }
  isFetching(s) {
    return w(this, Ge).findAll({ ...s, fetchStatus: "fetching" }).length;
  }
  isMutating(s) {
    return w(this, Xn).findAll({ ...s, status: "pending" }).length;
  }
  getQueryData(s) {
    var l;
    const i = this.defaultQueryOptions({ queryKey: s });
    return (l = w(this, Ge).get(i.queryHash)) == null ? void 0 : l.state.data;
  }
  ensureQueryData(s) {
    const i = this.defaultQueryOptions(s), l = w(this, Ge).build(this, i), a = l.state.data;
    return a === void 0 ? this.fetchQuery(s) : (s.revalidateIfStale && l.isStaleByTime(Jr(i.staleTime, l)) && this.prefetchQuery(i), Promise.resolve(a));
  }
  getQueriesData(s) {
    return w(this, Ge).findAll(s).map(({ queryKey: i, state: l }) => {
      const a = l.data;
      return [i, a];
    });
  }
  setQueryData(s, i, l) {
    const a = this.defaultQueryOptions({ queryKey: s }), d = w(this, Ge).get(
      a.queryHash
    ), v = d == null ? void 0 : d.state.data, O = Sy(i, v);
    if (O !== void 0)
      return w(this, Ge).build(this, a).setData(O, { ...l, manual: !0 });
  }
  setQueriesData(s, i, l) {
    return it.batch(
      () => w(this, Ge).findAll(s).map(({ queryKey: a }) => [
        a,
        this.setQueryData(a, i, l)
      ])
    );
  }
  getQueryState(s) {
    var l;
    const i = this.defaultQueryOptions({ queryKey: s });
    return (l = w(this, Ge).get(
      i.queryHash
    )) == null ? void 0 : l.state;
  }
  removeQueries(s) {
    const i = w(this, Ge);
    it.batch(() => {
      i.findAll(s).forEach((l) => {
        i.remove(l);
      });
    });
  }
  resetQueries(s, i) {
    const l = w(this, Ge);
    return it.batch(() => (l.findAll(s).forEach((a) => {
      a.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...s
      },
      i
    )));
  }
  cancelQueries(s, i = {}) {
    const l = { revert: !0, ...i }, a = it.batch(
      () => w(this, Ge).findAll(s).map((d) => d.cancel(l))
    );
    return Promise.all(a).then(qt).catch(qt);
  }
  invalidateQueries(s, i = {}) {
    return it.batch(() => (w(this, Ge).findAll(s).forEach((l) => {
      l.invalidate();
    }), (s == null ? void 0 : s.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...s,
        type: (s == null ? void 0 : s.refetchType) ?? (s == null ? void 0 : s.type) ?? "active"
      },
      i
    )));
  }
  refetchQueries(s, i = {}) {
    const l = {
      ...i,
      cancelRefetch: i.cancelRefetch ?? !0
    }, a = it.batch(
      () => w(this, Ge).findAll(s).filter((d) => !d.isDisabled()).map((d) => {
        let v = d.fetch(void 0, l);
        return l.throwOnError || (v = v.catch(qt)), d.state.fetchStatus === "paused" ? Promise.resolve() : v;
      })
    );
    return Promise.all(a).then(qt);
  }
  fetchQuery(s) {
    const i = this.defaultQueryOptions(s);
    i.retry === void 0 && (i.retry = !1);
    const l = w(this, Ge).build(this, i);
    return l.isStaleByTime(
      Jr(i.staleTime, l)
    ) ? l.fetch(i) : Promise.resolve(l.state.data);
  }
  prefetchQuery(s) {
    return this.fetchQuery(s).then(qt).catch(qt);
  }
  fetchInfiniteQuery(s) {
    return s.behavior = Td(s.pages), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(s) {
    return this.fetchInfiniteQuery(s).then(qt).catch(qt);
  }
  ensureInfiniteQueryData(s) {
    return s.behavior = Td(s.pages), this.ensureQueryData(s);
  }
  resumePausedMutations() {
    return Ms.isOnline() ? w(this, Xn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return w(this, Ge);
  }
  getMutationCache() {
    return w(this, Xn);
  }
  getDefaultOptions() {
    return w(this, Jn);
  }
  setDefaultOptions(s) {
    ue(this, Jn, s);
  }
  setQueryDefaults(s, i) {
    w(this, ii).set(Pr(s), {
      queryKey: s,
      defaultOptions: i
    });
  }
  getQueryDefaults(s) {
    const i = [...w(this, ii).values()], l = {};
    return i.forEach((a) => {
      uo(s, a.queryKey) && Object.assign(l, a.defaultOptions);
    }), l;
  }
  setMutationDefaults(s, i) {
    w(this, oi).set(Pr(s), {
      mutationKey: s,
      defaultOptions: i
    });
  }
  getMutationDefaults(s) {
    const i = [...w(this, oi).values()], l = {};
    return i.forEach((a) => {
      uo(s, a.mutationKey) && Object.assign(l, a.defaultOptions);
    }), l;
  }
  defaultQueryOptions(s) {
    if (s._defaulted)
      return s;
    const i = {
      ...w(this, Jn).queries,
      ...this.getQueryDefaults(s.queryKey),
      ...s,
      _defaulted: !0
    };
    return i.queryHash || (i.queryHash = ha(
      i.queryKey,
      i
    )), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === pa && (i.enabled = !1), i;
  }
  defaultMutationOptions(s) {
    return s != null && s._defaulted ? s : {
      ...w(this, Jn).mutations,
      ...(s == null ? void 0 : s.mutationKey) && this.getMutationDefaults(s.mutationKey),
      ...s,
      _defaulted: !0
    };
  }
  clear() {
    w(this, Ge).clear(), w(this, Xn).clear();
  }
}, Ge = new WeakMap(), Xn = new WeakMap(), Jn = new WeakMap(), ii = new WeakMap(), oi = new WeakMap(), Zn = new WeakMap(), si = new WeakMap(), li = new WeakMap(), Yd), It, Ne, fo, kt, kr, ui, er, dn, ho, ai, ci, Er, _r, tr, fi, ze, ro, Xu, Ju, Zu, ea, ta, na, ra, Sh, Gd, My = (Gd = class extends mi {
  constructor(i, l) {
    super();
    we(this, ze);
    we(this, It);
    we(this, Ne);
    we(this, fo);
    we(this, kt);
    we(this, kr);
    we(this, ui);
    we(this, er);
    we(this, dn);
    we(this, ho);
    we(this, ai);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    we(this, ci);
    we(this, Er);
    we(this, _r);
    we(this, tr);
    we(this, fi, /* @__PURE__ */ new Set());
    this.options = l, ue(this, It, i), ue(this, dn, null), ue(this, er, Gu()), this.options.experimental_prefetchInRender || w(this, er).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(l);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (w(this, Ne).addObserver(this), Nd(w(this, Ne), this.options) ? Oe(this, ze, ro).call(this) : this.updateResult(), Oe(this, ze, ea).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ia(
      w(this, Ne),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ia(
      w(this, Ne),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Oe(this, ze, ta).call(this), Oe(this, ze, na).call(this), w(this, Ne).removeObserver(this);
  }
  setOptions(i) {
    const l = this.options, a = w(this, Ne);
    if (this.options = w(this, It).defaultQueryOptions(i), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof nn(this.options.enabled, w(this, Ne)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Oe(this, ze, ra).call(this), w(this, Ne).setOptions(this.options), l._defaulted && !Fs(this.options, l) && w(this, It).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: w(this, Ne),
      observer: this
    });
    const d = this.hasListeners();
    d && Ld(
      w(this, Ne),
      a,
      this.options,
      l
    ) && Oe(this, ze, ro).call(this), this.updateResult(), d && (w(this, Ne) !== a || nn(this.options.enabled, w(this, Ne)) !== nn(l.enabled, w(this, Ne)) || Jr(this.options.staleTime, w(this, Ne)) !== Jr(l.staleTime, w(this, Ne))) && Oe(this, ze, Xu).call(this);
    const v = Oe(this, ze, Ju).call(this);
    d && (w(this, Ne) !== a || nn(this.options.enabled, w(this, Ne)) !== nn(l.enabled, w(this, Ne)) || v !== w(this, tr)) && Oe(this, ze, Zu).call(this, v);
  }
  getOptimisticResult(i) {
    const l = w(this, It).getQueryCache().build(w(this, It), i), a = this.createResult(l, i);
    return zy(this, a) && (ue(this, kt, a), ue(this, ui, this.options), ue(this, kr, w(this, Ne).state)), a;
  }
  getCurrentResult() {
    return w(this, kt);
  }
  trackResult(i, l) {
    const a = {};
    return Object.keys(i).forEach((d) => {
      Object.defineProperty(a, d, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(d), l == null || l(d), i[d])
      });
    }), a;
  }
  trackProp(i) {
    w(this, fi).add(i);
  }
  getCurrentQuery() {
    return w(this, Ne);
  }
  refetch({ ...i } = {}) {
    return this.fetch({
      ...i
    });
  }
  fetchOptimistic(i) {
    const l = w(this, It).defaultQueryOptions(i), a = w(this, It).getQueryCache().build(w(this, It), l);
    return a.fetch().then(() => this.createResult(a, l));
  }
  fetch(i) {
    return Oe(this, ze, ro).call(this, {
      ...i,
      cancelRefetch: i.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), w(this, kt)));
  }
  createResult(i, l) {
    var h;
    const a = w(this, Ne), d = this.options, v = w(this, kt), O = w(this, kr), M = w(this, ui), V = i !== a ? i.state : w(this, fo), { state: K } = i;
    let U = { ...K }, ne = !1, ie;
    if (l._optimisticResults) {
      const g = this.hasListeners(), p = !g && Nd(i, l), T = g && Ld(i, a, l, d);
      (p || T) && (U = {
        ...U,
        ...vh(K.data, i.options)
      }), l._optimisticResults === "isRestoring" && (U.fetchStatus = "idle");
    }
    let { error: z, errorUpdatedAt: L, status: k } = U;
    if (l.select && U.data !== void 0)
      if (v && U.data === (O == null ? void 0 : O.data) && l.select === w(this, ho))
        ie = w(this, ai);
      else
        try {
          ue(this, ho, l.select), ie = l.select(U.data), ie = Yu(v == null ? void 0 : v.data, ie, l), ue(this, ai, ie), ue(this, dn, null);
        } catch (g) {
          ue(this, dn, g);
        }
    else
      ie = U.data;
    if (l.placeholderData !== void 0 && ie === void 0 && k === "pending") {
      let g;
      if (v != null && v.isPlaceholderData && l.placeholderData === (M == null ? void 0 : M.placeholderData))
        g = v.data;
      else if (g = typeof l.placeholderData == "function" ? l.placeholderData(
        (h = w(this, ci)) == null ? void 0 : h.state.data,
        w(this, ci)
      ) : l.placeholderData, l.select && g !== void 0)
        try {
          g = l.select(g), ue(this, dn, null);
        } catch (p) {
          ue(this, dn, p);
        }
      g !== void 0 && (k = "success", ie = Yu(
        v == null ? void 0 : v.data,
        g,
        l
      ), ne = !0);
    }
    w(this, dn) && (z = w(this, dn), ie = w(this, ai), L = Date.now(), k = "error");
    const B = U.fetchStatus === "fetching", H = k === "pending", b = k === "error", $ = H && B, F = ie !== void 0, R = {
      status: k,
      fetchStatus: U.fetchStatus,
      isPending: H,
      isSuccess: k === "success",
      isError: b,
      isInitialLoading: $,
      isLoading: $,
      data: ie,
      dataUpdatedAt: U.dataUpdatedAt,
      error: z,
      errorUpdatedAt: L,
      failureCount: U.fetchFailureCount,
      failureReason: U.fetchFailureReason,
      errorUpdateCount: U.errorUpdateCount,
      isFetched: U.dataUpdateCount > 0 || U.errorUpdateCount > 0,
      isFetchedAfterMount: U.dataUpdateCount > V.dataUpdateCount || U.errorUpdateCount > V.errorUpdateCount,
      isFetching: B,
      isRefetching: B && !H,
      isLoadingError: b && !F,
      isPaused: U.fetchStatus === "paused",
      isPlaceholderData: ne,
      isRefetchError: b && F,
      isStale: ya(i, l),
      refetch: this.refetch,
      promise: w(this, er)
    };
    if (this.options.experimental_prefetchInRender) {
      const g = (N) => {
        R.status === "error" ? N.reject(R.error) : R.data !== void 0 && N.resolve(R.data);
      }, p = () => {
        const N = ue(this, er, R.promise = Gu());
        g(N);
      }, T = w(this, er);
      switch (T.status) {
        case "pending":
          i.queryHash === a.queryHash && g(T);
          break;
        case "fulfilled":
          (R.status === "error" || R.data !== T.value) && p();
          break;
        case "rejected":
          (R.status !== "error" || R.error !== T.reason) && p();
          break;
      }
    }
    return R;
  }
  updateResult() {
    const i = w(this, kt), l = this.createResult(w(this, Ne), this.options);
    if (ue(this, kr, w(this, Ne).state), ue(this, ui, this.options), w(this, kr).data !== void 0 && ue(this, ci, w(this, Ne)), Fs(l, i))
      return;
    ue(this, kt, l);
    const a = () => {
      if (!i)
        return !0;
      const { notifyOnChangeProps: d } = this.options, v = typeof d == "function" ? d() : d;
      if (v === "all" || !v && !w(this, fi).size)
        return !0;
      const O = new Set(
        v ?? w(this, fi)
      );
      return this.options.throwOnError && O.add("error"), Object.keys(w(this, kt)).some((M) => {
        const D = M;
        return w(this, kt)[D] !== i[D] && O.has(D);
      });
    };
    Oe(this, ze, Sh).call(this, { listeners: a() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Oe(this, ze, ea).call(this);
  }
}, It = new WeakMap(), Ne = new WeakMap(), fo = new WeakMap(), kt = new WeakMap(), kr = new WeakMap(), ui = new WeakMap(), er = new WeakMap(), dn = new WeakMap(), ho = new WeakMap(), ai = new WeakMap(), ci = new WeakMap(), Er = new WeakMap(), _r = new WeakMap(), tr = new WeakMap(), fi = new WeakMap(), ze = new WeakSet(), ro = function(i) {
  Oe(this, ze, ra).call(this);
  let l = w(this, Ne).fetch(
    this.options,
    i
  );
  return i != null && i.throwOnError || (l = l.catch(qt)), l;
}, Xu = function() {
  Oe(this, ze, ta).call(this);
  const i = Jr(
    this.options.staleTime,
    w(this, Ne)
  );
  if (Cr || w(this, kt).isStale || !Ku(i))
    return;
  const a = fh(w(this, kt).dataUpdatedAt, i) + 1;
  ue(this, Er, setTimeout(() => {
    w(this, kt).isStale || this.updateResult();
  }, a));
}, Ju = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(w(this, Ne)) : this.options.refetchInterval) ?? !1;
}, Zu = function(i) {
  Oe(this, ze, na).call(this), ue(this, tr, i), !(Cr || nn(this.options.enabled, w(this, Ne)) === !1 || !Ku(w(this, tr)) || w(this, tr) === 0) && ue(this, _r, setInterval(() => {
    (this.options.refetchIntervalInBackground || ma.isFocused()) && Oe(this, ze, ro).call(this);
  }, w(this, tr)));
}, ea = function() {
  Oe(this, ze, Xu).call(this), Oe(this, ze, Zu).call(this, Oe(this, ze, Ju).call(this));
}, ta = function() {
  w(this, Er) && (clearTimeout(w(this, Er)), ue(this, Er, void 0));
}, na = function() {
  w(this, _r) && (clearInterval(w(this, _r)), ue(this, _r, void 0));
}, ra = function() {
  const i = w(this, It).getQueryCache().build(w(this, It), this.options);
  if (i === w(this, Ne))
    return;
  const l = w(this, Ne);
  ue(this, Ne, i), ue(this, fo, i.state), this.hasListeners() && (l == null || l.removeObserver(this), i.addObserver(this));
}, Sh = function(i) {
  it.batch(() => {
    i.listeners && this.listeners.forEach((l) => {
      l(w(this, kt));
    }), w(this, It).getQueryCache().notify({
      query: w(this, Ne),
      type: "observerResultsUpdated"
    });
  });
}, Gd);
function jy(s, i) {
  return nn(i.enabled, s) !== !1 && s.state.data === void 0 && !(s.state.status === "error" && i.retryOnMount === !1);
}
function Nd(s, i) {
  return jy(s, i) || s.state.data !== void 0 && ia(s, i, i.refetchOnMount);
}
function ia(s, i, l) {
  if (nn(i.enabled, s) !== !1) {
    const a = typeof l == "function" ? l(s) : l;
    return a === "always" || a !== !1 && ya(s, i);
  }
  return !1;
}
function Ld(s, i, l, a) {
  return (s !== i || nn(a.enabled, s) === !1) && (!l.suspense || s.state.status !== "error") && ya(s, l);
}
function ya(s, i) {
  return nn(i.enabled, s) !== !1 && s.isStaleByTime(Jr(i.staleTime, s));
}
function zy(s, i) {
  return !Fs(s.getCurrentResult(), i);
}
var nr, rr, Nt, Rn, On, Ls, oa, Xd, Dy = (Xd = class extends mi {
  constructor(i, l) {
    super();
    we(this, On);
    we(this, nr);
    we(this, rr);
    we(this, Nt);
    we(this, Rn);
    ue(this, nr, i), this.setOptions(l), this.bindMethods(), Oe(this, On, Ls).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(i) {
    var a;
    const l = this.options;
    this.options = w(this, nr).defaultMutationOptions(i), Fs(this.options, l) || w(this, nr).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: w(this, Nt),
      observer: this
    }), l != null && l.mutationKey && this.options.mutationKey && Pr(l.mutationKey) !== Pr(this.options.mutationKey) ? this.reset() : ((a = w(this, Nt)) == null ? void 0 : a.state.status) === "pending" && w(this, Nt).setOptions(this.options);
  }
  onUnsubscribe() {
    var i;
    this.hasListeners() || (i = w(this, Nt)) == null || i.removeObserver(this);
  }
  onMutationUpdate(i) {
    Oe(this, On, Ls).call(this), Oe(this, On, oa).call(this, i);
  }
  getCurrentResult() {
    return w(this, rr);
  }
  reset() {
    var i;
    (i = w(this, Nt)) == null || i.removeObserver(this), ue(this, Nt, void 0), Oe(this, On, Ls).call(this), Oe(this, On, oa).call(this);
  }
  mutate(i, l) {
    var a;
    return ue(this, Rn, l), (a = w(this, Nt)) == null || a.removeObserver(this), ue(this, Nt, w(this, nr).getMutationCache().build(w(this, nr), this.options)), w(this, Nt).addObserver(this), w(this, Nt).execute(i);
  }
}, nr = new WeakMap(), rr = new WeakMap(), Nt = new WeakMap(), Rn = new WeakMap(), On = new WeakSet(), Ls = function() {
  var l;
  const i = ((l = w(this, Nt)) == null ? void 0 : l.state) ?? wh();
  ue(this, rr, {
    ...i,
    isPending: i.status === "pending",
    isSuccess: i.status === "success",
    isError: i.status === "error",
    isIdle: i.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, oa = function(i) {
  it.batch(() => {
    var l, a, d, v, O, M, D, V;
    if (w(this, Rn) && this.hasListeners()) {
      const K = w(this, rr).variables, U = w(this, rr).context;
      (i == null ? void 0 : i.type) === "success" ? ((a = (l = w(this, Rn)).onSuccess) == null || a.call(l, i.data, K, U), (v = (d = w(this, Rn)).onSettled) == null || v.call(d, i.data, null, K, U)) : (i == null ? void 0 : i.type) === "error" && ((M = (O = w(this, Rn)).onError) == null || M.call(O, i.error, K, U), (V = (D = w(this, Rn)).onSettled) == null || V.call(
        D,
        void 0,
        i.error,
        K,
        U
      ));
    }
    this.listeners.forEach((K) => {
      K(w(this, rr));
    });
  });
}, Xd), xh = pe.createContext(
  void 0
), ga = (s) => {
  const i = pe.useContext(xh);
  if (!i)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return i;
}, by = ({
  client: s,
  children: i
}) => (pe.useEffect(() => (s.mount(), () => {
  s.unmount();
}), [s]), /* @__PURE__ */ di.jsx(xh.Provider, { value: s, children: i })), kh = pe.createContext(!1), Uy = () => pe.useContext(kh);
kh.Provider;
function By() {
  let s = !1;
  return {
    clearReset: () => {
      s = !1;
    },
    reset: () => {
      s = !0;
    },
    isReset: () => s
  };
}
var $y = pe.createContext(By()), Qy = () => pe.useContext($y);
function Eh(s, i) {
  return typeof s == "function" ? s(...i) : !!s;
}
function sa() {
}
var Hy = (s, i) => {
  (s.suspense || s.throwOnError || s.experimental_prefetchInRender) && (i.isReset() || (s.retryOnMount = !1));
}, Vy = (s) => {
  pe.useEffect(() => {
    s.clearReset();
  }, [s]);
}, qy = ({
  result: s,
  errorResetBoundary: i,
  throwOnError: l,
  query: a,
  suspense: d
}) => s.isError && !i.isReset() && !s.isFetching && a && (d && s.data === void 0 || Eh(l, [s.error, a])), Ky = (s, i) => i.state.data === void 0, Wy = (s) => {
  const i = s.staleTime;
  s.suspense && (s.staleTime = typeof i == "function" ? (...l) => Math.max(i(...l), 1e3) : Math.max(i ?? 1e3, 1e3), typeof s.gcTime == "number" && (s.gcTime = Math.max(s.gcTime, 1e3)));
}, Yy = (s, i) => s.isLoading && s.isFetching && !i, Gy = (s, i) => (s == null ? void 0 : s.suspense) && i.isPending, Ad = (s, i, l) => i.fetchOptimistic(s).catch(() => {
  l.clearReset();
});
function Xy(s, i, l) {
  var U, ne, ie, z, L;
  const a = ga(), d = Uy(), v = Qy(), O = a.defaultQueryOptions(s);
  (ne = (U = a.getDefaultOptions().queries) == null ? void 0 : U._experimental_beforeQuery) == null || ne.call(
    U,
    O
  ), O._optimisticResults = d ? "isRestoring" : "optimistic", Wy(O), Hy(O, v), Vy(v);
  const M = !a.getQueryCache().get(O.queryHash), [D] = pe.useState(
    () => new i(
      a,
      O
    )
  ), V = D.getOptimisticResult(O), K = !d && s.subscribed !== !1;
  if (pe.useSyncExternalStore(
    pe.useCallback(
      (k) => {
        const B = K ? D.subscribe(it.batchCalls(k)) : sa;
        return D.updateResult(), B;
      },
      [D, K]
    ),
    () => D.getCurrentResult(),
    () => D.getCurrentResult()
  ), pe.useEffect(() => {
    D.setOptions(O);
  }, [O, D]), Gy(O, V))
    throw Ad(O, D, v);
  if (qy({
    result: V,
    errorResetBoundary: v,
    throwOnError: O.throwOnError,
    query: a.getQueryCache().get(O.queryHash),
    suspense: O.suspense
  }))
    throw V.error;
  if ((z = (ie = a.getDefaultOptions().queries) == null ? void 0 : ie._experimental_afterQuery) == null || z.call(
    ie,
    O,
    V
  ), O.experimental_prefetchInRender && !Cr && Yy(V, d)) {
    const k = M ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ad(O, D, v)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (L = a.getQueryCache().get(O.queryHash)) == null ? void 0 : L.promise
    );
    k == null || k.catch(sa).finally(() => {
      D.updateResult();
    });
  }
  return O.notifyOnChangeProps ? V : D.trackResult(V);
}
function Ht(s, i) {
  return Xy(
    {
      ...s,
      enabled: !0,
      suspense: !0,
      throwOnError: Ky,
      placeholderData: void 0
    },
    My
  );
}
function Jy(s, i) {
  const l = ga(), [a] = pe.useState(
    () => new Dy(
      l,
      s
    )
  );
  pe.useEffect(() => {
    a.setOptions(s);
  }, [a, s]);
  const d = pe.useSyncExternalStore(
    pe.useCallback(
      (O) => a.subscribe(it.batchCalls(O)),
      [a]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), v = pe.useCallback(
    (O, M) => {
      a.mutate(O, M).catch(sa);
    },
    [a]
  );
  if (d.error && Eh(a.options.throwOnError, [d.error]))
    throw d.error;
  return { ...d, mutate: v, mutateAsync: d.mutate };
}
var Rs = {}, ju = { exports: {} }, Tt = {}, zu = { exports: {} }, Du = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fd;
function Zy() {
  return Fd || (Fd = 1, function(s) {
    function i(ee, se) {
      var Z = ee.length;
      ee.push(se);
      e: for (; 0 < Z; ) {
        var C = Z - 1 >>> 1, E = ee[C];
        if (0 < d(E, se)) ee[C] = se, ee[Z] = E, Z = C;
        else break e;
      }
    }
    function l(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function a(ee) {
      if (ee.length === 0) return null;
      var se = ee[0], Z = ee.pop();
      if (Z !== se) {
        ee[0] = Z;
        e: for (var C = 0, E = ee.length, q = E >>> 1; C < q; ) {
          var te = 2 * (C + 1) - 1, ge = ee[te], Ee = te + 1, Se = ee[Ee];
          if (0 > d(ge, Z)) Ee < E && 0 > d(Se, ge) ? (ee[C] = Se, ee[Ee] = Z, C = Ee) : (ee[C] = ge, ee[te] = Z, C = te);
          else if (Ee < E && 0 > d(Se, Z)) ee[C] = Se, ee[Ee] = Z, C = Ee;
          else break e;
        }
      }
      return se;
    }
    function d(ee, se) {
      var Z = ee.sortIndex - se.sortIndex;
      return Z !== 0 ? Z : ee.id - se.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      s.unstable_now = function() {
        return v.now();
      };
    } else {
      var O = Date, M = O.now();
      s.unstable_now = function() {
        return O.now() - M;
      };
    }
    var D = [], V = [], K = 1, U = null, ne = 3, ie = !1, z = !1, L = !1, k = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(ee) {
      for (var se = l(V); se !== null; ) {
        if (se.callback === null) a(V);
        else if (se.startTime <= ee) a(V), se.sortIndex = se.expirationTime, i(D, se);
        else break;
        se = l(V);
      }
    }
    function $(ee) {
      if (L = !1, b(ee), !z) if (l(D) !== null) z = !0, oe(F);
      else {
        var se = l(V);
        se !== null && _e($, se.startTime - ee);
      }
    }
    function F(ee, se) {
      z = !1, L && (L = !1, B(h), h = -1), ie = !0;
      var Z = ne;
      try {
        for (b(se), U = l(D); U !== null && (!(U.expirationTime > se) || ee && !T()); ) {
          var C = U.callback;
          if (typeof C == "function") {
            U.callback = null, ne = U.priorityLevel;
            var E = C(U.expirationTime <= se);
            se = s.unstable_now(), typeof E == "function" ? U.callback = E : U === l(D) && a(D), b(se);
          } else a(D);
          U = l(D);
        }
        if (U !== null) var q = !0;
        else {
          var te = l(V);
          te !== null && _e($, te.startTime - se), q = !1;
        }
        return q;
      } finally {
        U = null, ne = Z, ie = !1;
      }
    }
    var x = !1, R = null, h = -1, g = 5, p = -1;
    function T() {
      return !(s.unstable_now() - p < g);
    }
    function N() {
      if (R !== null) {
        var ee = s.unstable_now();
        p = ee;
        var se = !0;
        try {
          se = R(!0, ee);
        } finally {
          se ? me() : (x = !1, R = null);
        }
      } else x = !1;
    }
    var me;
    if (typeof H == "function") me = function() {
      H(N);
    };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), ve = de.port2;
      de.port1.onmessage = N, me = function() {
        ve.postMessage(null);
      };
    } else me = function() {
      k(N, 0);
    };
    function oe(ee) {
      R = ee, x || (x = !0, me());
    }
    function _e(ee, se) {
      h = k(function() {
        ee(s.unstable_now());
      }, se);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, s.unstable_continueExecution = function() {
      z || ie || (z = !0, oe(F));
    }, s.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return ne;
    }, s.unstable_getFirstCallbackNode = function() {
      return l(D);
    }, s.unstable_next = function(ee) {
      switch (ne) {
        case 1:
        case 2:
        case 3:
          var se = 3;
          break;
        default:
          se = ne;
      }
      var Z = ne;
      ne = se;
      try {
        return ee();
      } finally {
        ne = Z;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(ee, se) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var Z = ne;
      ne = ee;
      try {
        return se();
      } finally {
        ne = Z;
      }
    }, s.unstable_scheduleCallback = function(ee, se, Z) {
      var C = s.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? C + Z : C) : Z = C, ee) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = Z + E, ee = { id: K++, callback: se, priorityLevel: ee, startTime: Z, expirationTime: E, sortIndex: -1 }, Z > C ? (ee.sortIndex = Z, i(V, ee), l(D) === null && ee === l(V) && (L ? (B(h), h = -1) : L = !0, _e($, Z - C))) : (ee.sortIndex = E, i(D, ee), z || ie || (z = !0, oe(F))), ee;
    }, s.unstable_shouldYield = T, s.unstable_wrapCallback = function(ee) {
      var se = ne;
      return function() {
        var Z = ne;
        ne = se;
        try {
          return ee.apply(this, arguments);
        } finally {
          ne = Z;
        }
      };
    };
  }(Du)), Du;
}
var Md;
function e1() {
  return Md || (Md = 1, zu.exports = Zy()), zu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function t1() {
  if (jd) return Tt;
  jd = 1;
  var s = la(), i = e1();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), d = {};
  function v(e, t) {
    O(e, t), O(e + "Capture", t);
  }
  function O(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var M = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = Object.prototype.hasOwnProperty, V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, K = {}, U = {};
  function ne(e) {
    return D.call(U, e) ? !0 : D.call(K, e) ? !1 : V.test(e) ? U[e] = !0 : (K[e] = !0, !1);
  }
  function ie(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || ie(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function L(e, t, n, r, o, u, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = c;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    k[e] = new L(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    k[t] = new L(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    k[e] = new L(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    k[e] = new L(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    k[e] = new L(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    k[e] = new L(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    k[e] = new L(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    k[e] = new L(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var B = /[\-:]([a-z])/g;
  function H(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      B,
      H
    );
    k[t] = new L(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(B, H);
    k[t] = new L(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(B, H);
    k[t] = new L(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    k[e] = new L(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function b(e, t, n, r) {
    var o = k.hasOwnProperty(t) ? k[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (z(t, n, o, r) && (n = null), r || o === null ? ne(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var $ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = Symbol.for("react.element"), x = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), T = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), de = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object" ? null : (e = ee && e[ee] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Object.assign, C;
  function E(e) {
    if (C === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
  }
  var q = !1;
  function te(e, t) {
    if (!e || q) return "";
    q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (j) {
          var r = j;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (j) {
          r = j;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (j) {
          r = j;
        }
        e();
      }
    } catch (j) {
      if (j && r && typeof j.stack == "string") {
        for (var o = j.stack.split(`
`), u = r.stack.split(`
`), c = o.length - 1, y = u.length - 1; 1 <= c && 0 <= y && o[c] !== u[y]; ) y--;
        for (; 1 <= c && 0 <= y; c--, y--) if (o[c] !== u[y]) {
          if (c !== 1 || y !== 1)
            do
              if (c--, y--, 0 > y || o[c] !== u[y]) {
                var S = `
` + o[c].replace(" at new ", " at ");
                return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S;
              }
            while (1 <= c && 0 <= y);
          break;
        }
      }
    } finally {
      q = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = te(e.type, !1), e;
      case 11:
        return e = te(e.type.render, !1), e;
      case 1:
        return e = te(e.type, !0), e;
      default:
        return "";
    }
  }
  function Ee(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case R:
        return "Fragment";
      case x:
        return "Portal";
      case g:
        return "Profiler";
      case h:
        return "StrictMode";
      case me:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case T:
        return (e.displayName || "Context") + ".Consumer";
      case p:
        return (e._context.displayName || "Context") + ".Provider";
      case N:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ve:
        return t = e.displayName || null, t !== null ? t : Ee(e.type) || "Memo";
      case oe:
        t = e._payload, e = e._init;
        try {
          return Ee(e(t));
        } catch {
        }
    }
    return null;
  }
  function Se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ee(t);
      case 8:
        return t === h ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Q(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function f(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function m(e) {
    var t = f(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(c) {
        r = "" + c, u.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function P(e) {
    e._valueTracker || (e._valueTracker = m(e));
  }
  function X(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = f(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function G(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function le(e, t) {
    var n = t.checked;
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Te(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Q(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Ue(e, t) {
    t = t.checked, t != null && b(e, "checked", t, !1);
  }
  function We(e, t) {
    Ue(e, t);
    var n = Q(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ot(e, t.type, n) : t.hasOwnProperty("defaultValue") && ot(e, t.type, Q(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Et(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ot(e, t, n) {
    (t !== "number" || G(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ze = Array.isArray;
  function Be(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Q(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function He(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function yn(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (Ze(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function yi(e, t) {
    var n = Q(t.value), r = Q(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Sa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function xa(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function bs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var yo, ka = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (yo = yo || document.createElement("div"), yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function gi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var vi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ph = ["Webkit", "ms", "Moz", "O"];
  Object.keys(vi).forEach(function(e) {
    Ph.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), vi[t] = vi[e];
    });
  });
  function Ea(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vi.hasOwnProperty(e) && vi[e] ? ("" + t).trim() : t + "px";
  }
  function _a(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Ea(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var Rh = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Us(e, t) {
    if (t) {
      if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Bs(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $s = null;
  function Qs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Hs = null, Rr = null, Or = null;
  function Ca(e) {
    if (e = Ui(e)) {
      if (typeof Hs != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = bo(t), Hs(e.stateNode, e.type, t));
    }
  }
  function Pa(e) {
    Rr ? Or ? Or.push(e) : Or = [e] : Rr = e;
  }
  function Ra() {
    if (Rr) {
      var e = Rr, t = Or;
      if (Or = Rr = null, Ca(e), t) for (e = 0; e < t.length; e++) Ca(t[e]);
    }
  }
  function Oa(e, t) {
    return e(t);
  }
  function Ta() {
  }
  var Vs = !1;
  function Ia(e, t, n) {
    if (Vs) return e(t, n);
    Vs = !0;
    try {
      return Oa(e, t, n);
    } finally {
      Vs = !1, (Rr !== null || Or !== null) && (Ta(), Ra());
    }
  }
  function wi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = bo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var qs = !1;
  if (M) try {
    var Si = {};
    Object.defineProperty(Si, "passive", { get: function() {
      qs = !0;
    } }), window.addEventListener("test", Si, Si), window.removeEventListener("test", Si, Si);
  } catch {
    qs = !1;
  }
  function Oh(e, t, n, r, o, u, c, y, S) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var xi = !1, go = null, vo = !1, Ks = null, Th = { onError: function(e) {
    xi = !0, go = e;
  } };
  function Ih(e, t, n, r, o, u, c, y, S) {
    xi = !1, go = null, Oh.apply(Th, arguments);
  }
  function Nh(e, t, n, r, o, u, c, y, S) {
    if (Ih.apply(this, arguments), xi) {
      if (xi) {
        var j = go;
        xi = !1, go = null;
      } else throw Error(l(198));
      vo || (vo = !0, Ks = j);
    }
  }
  function ir(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Na(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function La(e) {
    if (ir(e) !== e) throw Error(l(188));
  }
  function Lh(e) {
    var t = e.alternate;
    if (!t) {
      if (t = ir(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return La(o), e;
          if (u === r) return La(o), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = o, r = u;
      else {
        for (var c = !1, y = o.child; y; ) {
          if (y === n) {
            c = !0, n = o, r = u;
            break;
          }
          if (y === r) {
            c = !0, r = o, n = u;
            break;
          }
          y = y.sibling;
        }
        if (!c) {
          for (y = u.child; y; ) {
            if (y === n) {
              c = !0, n = u, r = o;
              break;
            }
            if (y === r) {
              c = !0, r = u, n = o;
              break;
            }
            y = y.sibling;
          }
          if (!c) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Aa(e) {
    return e = Lh(e), e !== null ? Fa(e) : null;
  }
  function Fa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ma = i.unstable_scheduleCallback, ja = i.unstable_cancelCallback, Ah = i.unstable_shouldYield, Fh = i.unstable_requestPaint, Xe = i.unstable_now, Mh = i.unstable_getCurrentPriorityLevel, Ws = i.unstable_ImmediatePriority, za = i.unstable_UserBlockingPriority, wo = i.unstable_NormalPriority, jh = i.unstable_LowPriority, Da = i.unstable_IdlePriority, So = null, rn = null;
  function zh(e) {
    if (rn && typeof rn.onCommitFiberRoot == "function") try {
      rn.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Kt = Math.clz32 ? Math.clz32 : Uh, Dh = Math.log, bh = Math.LN2;
  function Uh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Dh(e) / bh | 0) | 0;
  }
  var xo = 64, ko = 4194304;
  function ki(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Eo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, u = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var y = c & ~o;
      y !== 0 ? r = ki(y) : (u &= c, u !== 0 && (r = ki(u)));
    } else c = n & ~o, c !== 0 ? r = ki(c) : u !== 0 && (r = ki(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Kt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Bh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $h(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var c = 31 - Kt(u), y = 1 << c, S = o[c];
      S === -1 ? ((y & n) === 0 || (y & r) !== 0) && (o[c] = Bh(y, t)) : S <= t && (e.expiredLanes |= y), u &= ~y;
    }
  }
  function Ys(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ba() {
    var e = xo;
    return xo <<= 1, (xo & 4194240) === 0 && (xo = 64), e;
  }
  function Gs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ei(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Kt(t), e[t] = n;
  }
  function Qh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Kt(n), u = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function Xs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Kt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var De = 0;
  function Ua(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ba, Js, $a, Qa, Ha, Zs = !1, _o = [], Tn = null, In = null, Nn = null, _i = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), Ln = [], Hh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Va(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tn = null;
        break;
      case "dragenter":
      case "dragleave":
        In = null;
        break;
      case "mouseover":
      case "mouseout":
        Nn = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ci.delete(t.pointerId);
    }
  }
  function Pi(e, t, n, r, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [o] }, t !== null && (t = Ui(t), t !== null && Js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Vh(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Tn = Pi(Tn, e, t, n, r, o), !0;
      case "dragenter":
        return In = Pi(In, e, t, n, r, o), !0;
      case "mouseover":
        return Nn = Pi(Nn, e, t, n, r, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return _i.set(u, Pi(_i.get(u) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, Ci.set(u, Pi(Ci.get(u) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function qa(e) {
    var t = or(e.target);
    if (t !== null) {
      var n = ir(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Na(n), t !== null) {
            e.blockedOn = t, Ha(e.priority, function() {
              $a(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Co(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $s = r, n.target.dispatchEvent(r), $s = null;
      } else return t = Ui(n), t !== null && Js(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ka(e, t, n) {
    Co(e) && n.delete(t);
  }
  function qh() {
    Zs = !1, Tn !== null && Co(Tn) && (Tn = null), In !== null && Co(In) && (In = null), Nn !== null && Co(Nn) && (Nn = null), _i.forEach(Ka), Ci.forEach(Ka);
  }
  function Ri(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, qh)));
  }
  function Oi(e) {
    function t(o) {
      return Ri(o, e);
    }
    if (0 < _o.length) {
      Ri(_o[0], e);
      for (var n = 1; n < _o.length; n++) {
        var r = _o[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tn !== null && Ri(Tn, e), In !== null && Ri(In, e), Nn !== null && Ri(Nn, e), _i.forEach(t), Ci.forEach(t), n = 0; n < Ln.length; n++) r = Ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && (n = Ln[0], n.blockedOn === null); ) qa(n), n.blockedOn === null && Ln.shift();
  }
  var Tr = $.ReactCurrentBatchConfig, Po = !0;
  function Kh(e, t, n, r) {
    var o = De, u = Tr.transition;
    Tr.transition = null;
    try {
      De = 1, el(e, t, n, r);
    } finally {
      De = o, Tr.transition = u;
    }
  }
  function Wh(e, t, n, r) {
    var o = De, u = Tr.transition;
    Tr.transition = null;
    try {
      De = 4, el(e, t, n, r);
    } finally {
      De = o, Tr.transition = u;
    }
  }
  function el(e, t, n, r) {
    if (Po) {
      var o = tl(e, t, n, r);
      if (o === null) vl(e, t, r, Ro, n), Va(e, r);
      else if (Vh(o, e, t, n, r)) r.stopPropagation();
      else if (Va(e, r), t & 4 && -1 < Hh.indexOf(e)) {
        for (; o !== null; ) {
          var u = Ui(o);
          if (u !== null && Ba(u), u = tl(e, t, n, r), u === null && vl(e, t, r, Ro, n), u === o) break;
          o = u;
        }
        o !== null && r.stopPropagation();
      } else vl(e, t, r, null, n);
    }
  }
  var Ro = null;
  function tl(e, t, n, r) {
    if (Ro = null, e = Qs(r), e = or(e), e !== null) if (t = ir(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Na(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ro = e, null;
  }
  function Wa(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Mh()) {
          case Ws:
            return 1;
          case za:
            return 4;
          case wo:
          case jh:
            return 16;
          case Da:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var An = null, nl = null, Oo = null;
  function Ya() {
    if (Oo) return Oo;
    var e, t = nl, n = t.length, r, o = "value" in An ? An.value : An.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === o[u - r]; r++) ;
    return Oo = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function To(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Io() {
    return !0;
  }
  function Ga() {
    return !1;
  }
  function At(e) {
    function t(n, r, o, u, c) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var y in e) e.hasOwnProperty(y) && (n = e[y], this[y] = n ? n(u) : u[y]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Io : Ga, this.isPropagationStopped = Ga, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Io);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Io);
    }, persist: function() {
    }, isPersistent: Io }), t;
  }
  var Ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, rl = At(Ir), Ti = Z({}, Ir, { view: 0, detail: 0 }), Yh = At(Ti), il, ol, Ii, No = Z({}, Ti, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ll, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ii && (Ii && e.type === "mousemove" ? (il = e.screenX - Ii.screenX, ol = e.screenY - Ii.screenY) : ol = il = 0, Ii = e), il);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ol;
  } }), Xa = At(No), Gh = Z({}, No, { dataTransfer: 0 }), Xh = At(Gh), Jh = Z({}, Ti, { relatedTarget: 0 }), sl = At(Jh), Zh = Z({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ep = At(Zh), tp = Z({}, Ir, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), np = At(tp), rp = Z({}, Ir, { data: 0 }), Ja = At(rp), ip = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, sp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function lp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sp[e]) ? !!t[e] : !1;
  }
  function ll() {
    return lp;
  }
  var up = Z({}, Ti, { key: function(e) {
    if (e.key) {
      var t = ip[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = To(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? op[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ll, charCode: function(e) {
    return e.type === "keypress" ? To(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? To(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), ap = At(up), cp = Z({}, No, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Za = At(cp), fp = Z({}, Ti, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ll }), dp = At(fp), hp = Z({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pp = At(hp), mp = Z({}, No, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yp = At(mp), gp = [9, 13, 27, 32], ul = M && "CompositionEvent" in window, Ni = null;
  M && "documentMode" in document && (Ni = document.documentMode);
  var vp = M && "TextEvent" in window && !Ni, ec = M && (!ul || Ni && 8 < Ni && 11 >= Ni), tc = " ", nc = !1;
  function rc(e, t) {
    switch (e) {
      case "keyup":
        return gp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ic(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Nr = !1;
  function wp(e, t) {
    switch (e) {
      case "compositionend":
        return ic(t);
      case "keypress":
        return t.which !== 32 ? null : (nc = !0, tc);
      case "textInput":
        return e = t.data, e === tc && nc ? null : e;
      default:
        return null;
    }
  }
  function Sp(e, t) {
    if (Nr) return e === "compositionend" || !ul && rc(e, t) ? (e = Ya(), Oo = nl = An = null, Nr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ec && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xp[e.type] : t === "textarea";
  }
  function sc(e, t, n, r) {
    Pa(r), t = jo(t, "onChange"), 0 < t.length && (n = new rl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Li = null, Ai = null;
  function kp(e) {
    _c(e, 0);
  }
  function Lo(e) {
    var t = jr(e);
    if (X(t)) return e;
  }
  function Ep(e, t) {
    if (e === "change") return t;
  }
  var lc = !1;
  if (M) {
    var al;
    if (M) {
      var cl = "oninput" in document;
      if (!cl) {
        var uc = document.createElement("div");
        uc.setAttribute("oninput", "return;"), cl = typeof uc.oninput == "function";
      }
      al = cl;
    } else al = !1;
    lc = al && (!document.documentMode || 9 < document.documentMode);
  }
  function ac() {
    Li && (Li.detachEvent("onpropertychange", cc), Ai = Li = null);
  }
  function cc(e) {
    if (e.propertyName === "value" && Lo(Ai)) {
      var t = [];
      sc(t, Ai, e, Qs(e)), Ia(kp, t);
    }
  }
  function _p(e, t, n) {
    e === "focusin" ? (ac(), Li = t, Ai = n, Li.attachEvent("onpropertychange", cc)) : e === "focusout" && ac();
  }
  function Cp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Lo(Ai);
  }
  function Pp(e, t) {
    if (e === "click") return Lo(t);
  }
  function Rp(e, t) {
    if (e === "input" || e === "change") return Lo(t);
  }
  function Op(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Wt = typeof Object.is == "function" ? Object.is : Op;
  function Fi(e, t) {
    if (Wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!D.call(t, o) || !Wt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dc(e, t) {
    var n = fc(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = fc(n);
    }
  }
  function hc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function pc() {
    for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = G(e.document);
    }
    return t;
  }
  function fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Tp(e) {
    var t = pc(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && hc(n.ownerDocument.documentElement, n)) {
      if (r !== null && fl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(r.start, o);
          r = r.end === void 0 ? u : Math.min(r.end, o), !e.extend && u > r && (o = r, r = u, u = o), o = dc(n, u);
          var c = dc(
            n,
            r
          );
          o && c && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ip = M && "documentMode" in document && 11 >= document.documentMode, Lr = null, dl = null, Mi = null, hl = !1;
  function mc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hl || Lr == null || Lr !== G(r) || (r = Lr, "selectionStart" in r && fl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mi && Fi(Mi, r) || (Mi = r, r = jo(dl, "onSelect"), 0 < r.length && (t = new rl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Lr)));
  }
  function Ao(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ar = { animationend: Ao("Animation", "AnimationEnd"), animationiteration: Ao("Animation", "AnimationIteration"), animationstart: Ao("Animation", "AnimationStart"), transitionend: Ao("Transition", "TransitionEnd") }, pl = {}, yc = {};
  M && (yc = document.createElement("div").style, "AnimationEvent" in window || (delete Ar.animationend.animation, delete Ar.animationiteration.animation, delete Ar.animationstart.animation), "TransitionEvent" in window || delete Ar.transitionend.transition);
  function Fo(e) {
    if (pl[e]) return pl[e];
    if (!Ar[e]) return e;
    var t = Ar[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in yc) return pl[e] = t[n];
    return e;
  }
  var gc = Fo("animationend"), vc = Fo("animationiteration"), wc = Fo("animationstart"), Sc = Fo("transitionend"), xc = /* @__PURE__ */ new Map(), kc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fn(e, t) {
    xc.set(e, t), v(t, [e]);
  }
  for (var ml = 0; ml < kc.length; ml++) {
    var yl = kc[ml], Np = yl.toLowerCase(), Lp = yl[0].toUpperCase() + yl.slice(1);
    Fn(Np, "on" + Lp);
  }
  Fn(gc, "onAnimationEnd"), Fn(vc, "onAnimationIteration"), Fn(wc, "onAnimationStart"), Fn("dblclick", "onDoubleClick"), Fn("focusin", "onFocus"), Fn("focusout", "onBlur"), Fn(Sc, "onTransitionEnd"), O("onMouseEnter", ["mouseout", "mouseover"]), O("onMouseLeave", ["mouseout", "mouseover"]), O("onPointerEnter", ["pointerout", "pointerover"]), O("onPointerLeave", ["pointerout", "pointerover"]), v("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), v("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), v("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), v("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), v("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ji = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
  function Ec(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Nh(r, t, void 0, e), e.currentTarget = null;
  }
  function _c(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var c = r.length - 1; 0 <= c; c--) {
          var y = r[c], S = y.instance, j = y.currentTarget;
          if (y = y.listener, S !== u && o.isPropagationStopped()) break e;
          Ec(o, y, j), u = S;
        }
        else for (c = 0; c < r.length; c++) {
          if (y = r[c], S = y.instance, j = y.currentTarget, y = y.listener, S !== u && o.isPropagationStopped()) break e;
          Ec(o, y, j), u = S;
        }
      }
    }
    if (vo) throw e = Ks, vo = !1, Ks = null, e;
  }
  function $e(e, t) {
    var n = t[_l];
    n === void 0 && (n = t[_l] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Cc(t, e, 2, !1), n.add(r));
  }
  function gl(e, t, n) {
    var r = 0;
    t && (r |= 4), Cc(n, e, r, t);
  }
  var Mo = "_reactListening" + Math.random().toString(36).slice(2);
  function zi(e) {
    if (!e[Mo]) {
      e[Mo] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (Ap.has(n) || gl(n, !1, e), gl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Mo] || (t[Mo] = !0, gl("selectionchange", !1, t));
    }
  }
  function Cc(e, t, n, r) {
    switch (Wa(t)) {
      case 1:
        var o = Kh;
        break;
      case 4:
        o = Wh;
        break;
      default:
        o = el;
    }
    n = o.bind(null, t, n, e), o = void 0, !qs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function vl(e, t, n, r, o) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var c = r.tag;
      if (c === 3 || c === 4) {
        var y = r.stateNode.containerInfo;
        if (y === o || y.nodeType === 8 && y.parentNode === o) break;
        if (c === 4) for (c = r.return; c !== null; ) {
          var S = c.tag;
          if ((S === 3 || S === 4) && (S = c.stateNode.containerInfo, S === o || S.nodeType === 8 && S.parentNode === o)) return;
          c = c.return;
        }
        for (; y !== null; ) {
          if (c = or(y), c === null) return;
          if (S = c.tag, S === 5 || S === 6) {
            r = u = c;
            continue e;
          }
          y = y.parentNode;
        }
      }
      r = r.return;
    }
    Ia(function() {
      var j = u, Y = Qs(n), J = [];
      e: {
        var W = xc.get(e);
        if (W !== void 0) {
          var ae = rl, fe = e;
          switch (e) {
            case "keypress":
              if (To(n) === 0) break e;
            case "keydown":
            case "keyup":
              ae = ap;
              break;
            case "focusin":
              fe = "focus", ae = sl;
              break;
            case "focusout":
              fe = "blur", ae = sl;
              break;
            case "beforeblur":
            case "afterblur":
              ae = sl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = Xa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = Xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = dp;
              break;
            case gc:
            case vc:
            case wc:
              ae = ep;
              break;
            case Sc:
              ae = pp;
              break;
            case "scroll":
              ae = Yh;
              break;
            case "wheel":
              ae = yp;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = np;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = Za;
          }
          var he = (t & 4) !== 0, Je = !he && e === "scroll", I = he ? W !== null ? W + "Capture" : null : W;
          he = [];
          for (var _ = j, A; _ !== null; ) {
            A = _;
            var re = A.stateNode;
            if (A.tag === 5 && re !== null && (A = re, I !== null && (re = wi(_, I), re != null && he.push(Di(_, re, A)))), Je) break;
            _ = _.return;
          }
          0 < he.length && (W = new ae(W, fe, null, n, Y), J.push({ event: W, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", ae = e === "mouseout" || e === "pointerout", W && n !== $s && (fe = n.relatedTarget || n.fromElement) && (or(fe) || fe[gn])) break e;
          if ((ae || W) && (W = Y.window === Y ? Y : (W = Y.ownerDocument) ? W.defaultView || W.parentWindow : window, ae ? (fe = n.relatedTarget || n.toElement, ae = j, fe = fe ? or(fe) : null, fe !== null && (Je = ir(fe), fe !== Je || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ae = null, fe = j), ae !== fe)) {
            if (he = Xa, re = "onMouseLeave", I = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (he = Za, re = "onPointerLeave", I = "onPointerEnter", _ = "pointer"), Je = ae == null ? W : jr(ae), A = fe == null ? W : jr(fe), W = new he(re, _ + "leave", ae, n, Y), W.target = Je, W.relatedTarget = A, re = null, or(Y) === j && (he = new he(I, _ + "enter", fe, n, Y), he.target = A, he.relatedTarget = Je, re = he), Je = re, ae && fe) t: {
              for (he = ae, I = fe, _ = 0, A = he; A; A = Fr(A)) _++;
              for (A = 0, re = I; re; re = Fr(re)) A++;
              for (; 0 < _ - A; ) he = Fr(he), _--;
              for (; 0 < A - _; ) I = Fr(I), A--;
              for (; _--; ) {
                if (he === I || I !== null && he === I.alternate) break t;
                he = Fr(he), I = Fr(I);
              }
              he = null;
            }
            else he = null;
            ae !== null && Pc(J, W, ae, he, !1), fe !== null && Je !== null && Pc(J, Je, fe, he, !0);
          }
        }
        e: {
          if (W = j ? jr(j) : window, ae = W.nodeName && W.nodeName.toLowerCase(), ae === "select" || ae === "input" && W.type === "file") var ye = Ep;
          else if (oc(W)) if (lc) ye = Rp;
          else {
            ye = Cp;
            var xe = _p;
          }
          else (ae = W.nodeName) && ae.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (ye = Pp);
          if (ye && (ye = ye(e, j))) {
            sc(J, ye, n, Y);
            break e;
          }
          xe && xe(e, W, j), e === "focusout" && (xe = W._wrapperState) && xe.controlled && W.type === "number" && ot(W, "number", W.value);
        }
        switch (xe = j ? jr(j) : window, e) {
          case "focusin":
            (oc(xe) || xe.contentEditable === "true") && (Lr = xe, dl = j, Mi = null);
            break;
          case "focusout":
            Mi = dl = Lr = null;
            break;
          case "mousedown":
            hl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hl = !1, mc(J, n, Y);
            break;
          case "selectionchange":
            if (Ip) break;
          case "keydown":
          case "keyup":
            mc(J, n, Y);
        }
        var ke;
        if (ul) e: {
          switch (e) {
            case "compositionstart":
              var Ce = "onCompositionStart";
              break e;
            case "compositionend":
              Ce = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ce = "onCompositionUpdate";
              break e;
          }
          Ce = void 0;
        }
        else Nr ? rc(e, n) && (Ce = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (ec && n.locale !== "ko" && (Nr || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Nr && (ke = Ya()) : (An = Y, nl = "value" in An ? An.value : An.textContent, Nr = !0)), xe = jo(j, Ce), 0 < xe.length && (Ce = new Ja(Ce, e, null, n, Y), J.push({ event: Ce, listeners: xe }), ke ? Ce.data = ke : (ke = ic(n), ke !== null && (Ce.data = ke)))), (ke = vp ? wp(e, n) : Sp(e, n)) && (j = jo(j, "onBeforeInput"), 0 < j.length && (Y = new Ja("onBeforeInput", "beforeinput", null, n, Y), J.push({ event: Y, listeners: j }), Y.data = ke));
      }
      _c(J, t);
    });
  }
  function Di(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function jo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = wi(e, n), u != null && r.unshift(Di(e, u, o)), u = wi(e, t), u != null && r.push(Di(e, u, o))), e = e.return;
    }
    return r;
  }
  function Fr(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Pc(e, t, n, r, o) {
    for (var u = t._reactName, c = []; n !== null && n !== r; ) {
      var y = n, S = y.alternate, j = y.stateNode;
      if (S !== null && S === r) break;
      y.tag === 5 && j !== null && (y = j, o ? (S = wi(n, u), S != null && c.unshift(Di(n, S, y))) : o || (S = wi(n, u), S != null && c.push(Di(n, S, y)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Fp = /\r\n?/g, Mp = /\u0000|\uFFFD/g;
  function Rc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Fp, `
`).replace(Mp, "");
  }
  function zo(e, t, n) {
    if (t = Rc(t), Rc(e) !== t && n) throw Error(l(425));
  }
  function Do() {
  }
  var wl = null, Sl = null;
  function xl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var kl = typeof setTimeout == "function" ? setTimeout : void 0, jp = typeof clearTimeout == "function" ? clearTimeout : void 0, Oc = typeof Promise == "function" ? Promise : void 0, zp = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oc < "u" ? function(e) {
    return Oc.resolve(null).then(e).catch(Dp);
  } : kl;
  function Dp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function El(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Oi(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    Oi(t);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Tc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Mr = Math.random().toString(36).slice(2), on = "__reactFiber$" + Mr, bi = "__reactProps$" + Mr, gn = "__reactContainer$" + Mr, _l = "__reactEvents$" + Mr, bp = "__reactListeners$" + Mr, Up = "__reactHandles$" + Mr;
  function or(e) {
    var t = e[on];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[gn] || n[on]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Tc(e); e !== null; ) {
          if (n = e[on]) return n;
          e = Tc(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ui(e) {
    return e = e[on] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function jr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function bo(e) {
    return e[bi] || null;
  }
  var Cl = [], zr = -1;
  function jn(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > zr || (e.current = Cl[zr], Cl[zr] = null, zr--);
  }
  function be(e, t) {
    zr++, Cl[zr] = e.current, e.current = t;
  }
  var zn = {}, ht = jn(zn), _t = jn(!1), sr = zn;
  function Dr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Ct(e) {
    return e = e.childContextTypes, e != null;
  }
  function Uo() {
    Qe(_t), Qe(ht);
  }
  function Ic(e, t, n) {
    if (ht.current !== zn) throw Error(l(168));
    be(ht, t), be(_t, n);
  }
  function Nc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(l(108, Se(e) || "Unknown", o));
    return Z({}, n, r);
  }
  function Bo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zn, sr = ht.current, be(ht, e), be(_t, _t.current), !0;
  }
  function Lc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Nc(e, t, sr), r.__reactInternalMemoizedMergedChildContext = e, Qe(_t), Qe(ht), be(ht, e)) : Qe(_t), be(_t, n);
  }
  var vn = null, $o = !1, Pl = !1;
  function Ac(e) {
    vn === null ? vn = [e] : vn.push(e);
  }
  function Bp(e) {
    $o = !0, Ac(e);
  }
  function Dn() {
    if (!Pl && vn !== null) {
      Pl = !0;
      var e = 0, t = De;
      try {
        var n = vn;
        for (De = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        vn = null, $o = !1;
      } catch (o) {
        throw vn !== null && (vn = vn.slice(e + 1)), Ma(Ws, Dn), o;
      } finally {
        De = t, Pl = !1;
      }
    }
    return null;
  }
  var br = [], Ur = 0, Qo = null, Ho = 0, Dt = [], bt = 0, lr = null, wn = 1, Sn = "";
  function ur(e, t) {
    br[Ur++] = Ho, br[Ur++] = Qo, Qo = e, Ho = t;
  }
  function Fc(e, t, n) {
    Dt[bt++] = wn, Dt[bt++] = Sn, Dt[bt++] = lr, lr = e;
    var r = wn;
    e = Sn;
    var o = 32 - Kt(r) - 1;
    r &= ~(1 << o), n += 1;
    var u = 32 - Kt(t) + o;
    if (30 < u) {
      var c = o - o % 5;
      u = (r & (1 << c) - 1).toString(32), r >>= c, o -= c, wn = 1 << 32 - Kt(t) + o | n << o | r, Sn = u + e;
    } else wn = 1 << u | n << o | r, Sn = e;
  }
  function Rl(e) {
    e.return !== null && (ur(e, 1), Fc(e, 1, 0));
  }
  function Ol(e) {
    for (; e === Qo; ) Qo = br[--Ur], br[Ur] = null, Ho = br[--Ur], br[Ur] = null;
    for (; e === lr; ) lr = Dt[--bt], Dt[bt] = null, Sn = Dt[--bt], Dt[bt] = null, wn = Dt[--bt], Dt[bt] = null;
  }
  var Ft = null, Mt = null, Ve = !1, Yt = null;
  function Mc(e, t) {
    var n = Qt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function jc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ft = e, Mt = Mn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ft = e, Mt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = lr !== null ? { id: wn, overflow: Sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Qt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ft = e, Mt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Tl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Il(e) {
    if (Ve) {
      var t = Mt;
      if (t) {
        var n = t;
        if (!jc(e, t)) {
          if (Tl(e)) throw Error(l(418));
          t = Mn(n.nextSibling);
          var r = Ft;
          t && jc(e, t) ? Mc(r, n) : (e.flags = e.flags & -4097 | 2, Ve = !1, Ft = e);
        }
      } else {
        if (Tl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ve = !1, Ft = e;
      }
    }
  }
  function zc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ft = e;
  }
  function Vo(e) {
    if (e !== Ft) return !1;
    if (!Ve) return zc(e), Ve = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xl(e.type, e.memoizedProps)), t && (t = Mt)) {
      if (Tl(e)) throw Dc(), Error(l(418));
      for (; t; ) Mc(e, t), t = Mn(t.nextSibling);
    }
    if (zc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Mt = Mn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Mt = null;
      }
    } else Mt = Ft ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Dc() {
    for (var e = Mt; e; ) e = Mn(e.nextSibling);
  }
  function Br() {
    Mt = Ft = null, Ve = !1;
  }
  function Nl(e) {
    Yt === null ? Yt = [e] : Yt.push(e);
  }
  var $p = $.ReactCurrentBatchConfig;
  function Bi(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var o = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(c) {
          var y = o.refs;
          c === null ? delete y[u] : y[u] = c;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function qo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function bc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Uc(e) {
    function t(I, _) {
      if (e) {
        var A = I.deletions;
        A === null ? (I.deletions = [_], I.flags |= 16) : A.push(_);
      }
    }
    function n(I, _) {
      if (!e) return null;
      for (; _ !== null; ) t(I, _), _ = _.sibling;
      return null;
    }
    function r(I, _) {
      for (I = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? I.set(_.key, _) : I.set(_.index, _), _ = _.sibling;
      return I;
    }
    function o(I, _) {
      return I = qn(I, _), I.index = 0, I.sibling = null, I;
    }
    function u(I, _, A) {
      return I.index = A, e ? (A = I.alternate, A !== null ? (A = A.index, A < _ ? (I.flags |= 2, _) : A) : (I.flags |= 2, _)) : (I.flags |= 1048576, _);
    }
    function c(I) {
      return e && I.alternate === null && (I.flags |= 2), I;
    }
    function y(I, _, A, re) {
      return _ === null || _.tag !== 6 ? (_ = ku(A, I.mode, re), _.return = I, _) : (_ = o(_, A), _.return = I, _);
    }
    function S(I, _, A, re) {
      var ye = A.type;
      return ye === R ? Y(I, _, A.props.children, re, A.key) : _ !== null && (_.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === oe && bc(ye) === _.type) ? (re = o(_, A.props), re.ref = Bi(I, _, A), re.return = I, re) : (re = ys(A.type, A.key, A.props, null, I.mode, re), re.ref = Bi(I, _, A), re.return = I, re);
    }
    function j(I, _, A, re) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== A.containerInfo || _.stateNode.implementation !== A.implementation ? (_ = Eu(A, I.mode, re), _.return = I, _) : (_ = o(_, A.children || []), _.return = I, _);
    }
    function Y(I, _, A, re, ye) {
      return _ === null || _.tag !== 7 ? (_ = yr(A, I.mode, re, ye), _.return = I, _) : (_ = o(_, A), _.return = I, _);
    }
    function J(I, _, A) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = ku("" + _, I.mode, A), _.return = I, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case F:
            return A = ys(_.type, _.key, _.props, null, I.mode, A), A.ref = Bi(I, null, _), A.return = I, A;
          case x:
            return _ = Eu(_, I.mode, A), _.return = I, _;
          case oe:
            var re = _._init;
            return J(I, re(_._payload), A);
        }
        if (Ze(_) || se(_)) return _ = yr(_, I.mode, A, null), _.return = I, _;
        qo(I, _);
      }
      return null;
    }
    function W(I, _, A, re) {
      var ye = _ !== null ? _.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number") return ye !== null ? null : y(I, _, "" + A, re);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return A.key === ye ? S(I, _, A, re) : null;
          case x:
            return A.key === ye ? j(I, _, A, re) : null;
          case oe:
            return ye = A._init, W(
              I,
              _,
              ye(A._payload),
              re
            );
        }
        if (Ze(A) || se(A)) return ye !== null ? null : Y(I, _, A, re, null);
        qo(I, A);
      }
      return null;
    }
    function ae(I, _, A, re, ye) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return I = I.get(A) || null, y(_, I, "" + re, ye);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case F:
            return I = I.get(re.key === null ? A : re.key) || null, S(_, I, re, ye);
          case x:
            return I = I.get(re.key === null ? A : re.key) || null, j(_, I, re, ye);
          case oe:
            var xe = re._init;
            return ae(I, _, A, xe(re._payload), ye);
        }
        if (Ze(re) || se(re)) return I = I.get(A) || null, Y(_, I, re, ye, null);
        qo(_, re);
      }
      return null;
    }
    function fe(I, _, A, re) {
      for (var ye = null, xe = null, ke = _, Ce = _ = 0, ut = null; ke !== null && Ce < A.length; Ce++) {
        ke.index > Ce ? (ut = ke, ke = null) : ut = ke.sibling;
        var Ae = W(I, ke, A[Ce], re);
        if (Ae === null) {
          ke === null && (ke = ut);
          break;
        }
        e && ke && Ae.alternate === null && t(I, ke), _ = u(Ae, _, Ce), xe === null ? ye = Ae : xe.sibling = Ae, xe = Ae, ke = ut;
      }
      if (Ce === A.length) return n(I, ke), Ve && ur(I, Ce), ye;
      if (ke === null) {
        for (; Ce < A.length; Ce++) ke = J(I, A[Ce], re), ke !== null && (_ = u(ke, _, Ce), xe === null ? ye = ke : xe.sibling = ke, xe = ke);
        return Ve && ur(I, Ce), ye;
      }
      for (ke = r(I, ke); Ce < A.length; Ce++) ut = ae(ke, I, Ce, A[Ce], re), ut !== null && (e && ut.alternate !== null && ke.delete(ut.key === null ? Ce : ut.key), _ = u(ut, _, Ce), xe === null ? ye = ut : xe.sibling = ut, xe = ut);
      return e && ke.forEach(function(Kn) {
        return t(I, Kn);
      }), Ve && ur(I, Ce), ye;
    }
    function he(I, _, A, re) {
      var ye = se(A);
      if (typeof ye != "function") throw Error(l(150));
      if (A = ye.call(A), A == null) throw Error(l(151));
      for (var xe = ye = null, ke = _, Ce = _ = 0, ut = null, Ae = A.next(); ke !== null && !Ae.done; Ce++, Ae = A.next()) {
        ke.index > Ce ? (ut = ke, ke = null) : ut = ke.sibling;
        var Kn = W(I, ke, Ae.value, re);
        if (Kn === null) {
          ke === null && (ke = ut);
          break;
        }
        e && ke && Kn.alternate === null && t(I, ke), _ = u(Kn, _, Ce), xe === null ? ye = Kn : xe.sibling = Kn, xe = Kn, ke = ut;
      }
      if (Ae.done) return n(
        I,
        ke
      ), Ve && ur(I, Ce), ye;
      if (ke === null) {
        for (; !Ae.done; Ce++, Ae = A.next()) Ae = J(I, Ae.value, re), Ae !== null && (_ = u(Ae, _, Ce), xe === null ? ye = Ae : xe.sibling = Ae, xe = Ae);
        return Ve && ur(I, Ce), ye;
      }
      for (ke = r(I, ke); !Ae.done; Ce++, Ae = A.next()) Ae = ae(ke, I, Ce, Ae.value, re), Ae !== null && (e && Ae.alternate !== null && ke.delete(Ae.key === null ? Ce : Ae.key), _ = u(Ae, _, Ce), xe === null ? ye = Ae : xe.sibling = Ae, xe = Ae);
      return e && ke.forEach(function(xm) {
        return t(I, xm);
      }), Ve && ur(I, Ce), ye;
    }
    function Je(I, _, A, re) {
      if (typeof A == "object" && A !== null && A.type === R && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            e: {
              for (var ye = A.key, xe = _; xe !== null; ) {
                if (xe.key === ye) {
                  if (ye = A.type, ye === R) {
                    if (xe.tag === 7) {
                      n(I, xe.sibling), _ = o(xe, A.props.children), _.return = I, I = _;
                      break e;
                    }
                  } else if (xe.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === oe && bc(ye) === xe.type) {
                    n(I, xe.sibling), _ = o(xe, A.props), _.ref = Bi(I, xe, A), _.return = I, I = _;
                    break e;
                  }
                  n(I, xe);
                  break;
                } else t(I, xe);
                xe = xe.sibling;
              }
              A.type === R ? (_ = yr(A.props.children, I.mode, re, A.key), _.return = I, I = _) : (re = ys(A.type, A.key, A.props, null, I.mode, re), re.ref = Bi(I, _, A), re.return = I, I = re);
            }
            return c(I);
          case x:
            e: {
              for (xe = A.key; _ !== null; ) {
                if (_.key === xe) if (_.tag === 4 && _.stateNode.containerInfo === A.containerInfo && _.stateNode.implementation === A.implementation) {
                  n(I, _.sibling), _ = o(_, A.children || []), _.return = I, I = _;
                  break e;
                } else {
                  n(I, _);
                  break;
                }
                else t(I, _);
                _ = _.sibling;
              }
              _ = Eu(A, I.mode, re), _.return = I, I = _;
            }
            return c(I);
          case oe:
            return xe = A._init, Je(I, _, xe(A._payload), re);
        }
        if (Ze(A)) return fe(I, _, A, re);
        if (se(A)) return he(I, _, A, re);
        qo(I, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" ? (A = "" + A, _ !== null && _.tag === 6 ? (n(I, _.sibling), _ = o(_, A), _.return = I, I = _) : (n(I, _), _ = ku(A, I.mode, re), _.return = I, I = _), c(I)) : n(I, _);
    }
    return Je;
  }
  var $r = Uc(!0), Bc = Uc(!1), Ko = jn(null), Wo = null, Qr = null, Ll = null;
  function Al() {
    Ll = Qr = Wo = null;
  }
  function Fl(e) {
    var t = Ko.current;
    Qe(Ko), e._currentValue = t;
  }
  function Ml(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Hr(e, t) {
    Wo = e, Ll = Qr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Pt = !0), e.firstContext = null);
  }
  function Ut(e) {
    var t = e._currentValue;
    if (Ll !== e) if (e = { context: e, memoizedValue: t, next: null }, Qr === null) {
      if (Wo === null) throw Error(l(308));
      Qr = e, Wo.dependencies = { lanes: 0, firstContext: e };
    } else Qr = Qr.next = e;
    return t;
  }
  var ar = null;
  function jl(e) {
    ar === null ? ar = [e] : ar.push(e);
  }
  function $c(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, jl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xn(e, r);
  }
  function xn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var bn = !1;
  function zl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Qc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function kn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Le & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xn(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, jl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xn(e, n);
  }
  function Yo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xs(e, n);
    }
  }
  function Hc(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? o = u = c : u = u.next = c, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Go(e, t, n, r) {
    var o = e.updateQueue;
    bn = !1;
    var u = o.firstBaseUpdate, c = o.lastBaseUpdate, y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var S = y, j = S.next;
      S.next = null, c === null ? u = j : c.next = j, c = S;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, y = Y.lastBaseUpdate, y !== c && (y === null ? Y.firstBaseUpdate = j : y.next = j, Y.lastBaseUpdate = S));
    }
    if (u !== null) {
      var J = o.baseState;
      c = 0, Y = j = S = null, y = u;
      do {
        var W = y.lane, ae = y.eventTime;
        if ((r & W) === W) {
          Y !== null && (Y = Y.next = {
            eventTime: ae,
            lane: 0,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null
          });
          e: {
            var fe = e, he = y;
            switch (W = t, ae = n, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  J = fe.call(ae, J, W);
                  break e;
                }
                J = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, W = typeof fe == "function" ? fe.call(ae, J, W) : fe, W == null) break e;
                J = Z({}, J, W);
                break e;
              case 2:
                bn = !0;
            }
          }
          y.callback !== null && y.lane !== 0 && (e.flags |= 64, W = o.effects, W === null ? o.effects = [y] : W.push(y));
        } else ae = { eventTime: ae, lane: W, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, Y === null ? (j = Y = ae, S = J) : Y = Y.next = ae, c |= W;
        if (y = y.next, y === null) {
          if (y = o.shared.pending, y === null) break;
          W = y, y = W.next, W.next = null, o.lastBaseUpdate = W, o.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (S = J), o.baseState = S, o.firstBaseUpdate = j, o.lastBaseUpdate = Y, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      dr |= c, e.lanes = c, e.memoizedState = J;
    }
  }
  function Vc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(l(191, o));
        o.call(r);
      }
    }
  }
  var $i = {}, sn = jn($i), Qi = jn($i), Hi = jn($i);
  function cr(e) {
    if (e === $i) throw Error(l(174));
    return e;
  }
  function Dl(e, t) {
    switch (be(Hi, t), be(Qi, e), be(sn, $i), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bs(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bs(t, e);
    }
    Qe(sn), be(sn, t);
  }
  function Vr() {
    Qe(sn), Qe(Qi), Qe(Hi);
  }
  function qc(e) {
    cr(Hi.current);
    var t = cr(sn.current), n = bs(t, e.type);
    t !== n && (be(Qi, e), be(sn, n));
  }
  function bl(e) {
    Qi.current === e && (Qe(sn), Qe(Qi));
  }
  var qe = jn(0);
  function Xo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ul = [];
  function Bl() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0;
  }
  var Jo = $.ReactCurrentDispatcher, $l = $.ReactCurrentBatchConfig, fr = 0, Ke = null, nt = null, st = null, Zo = !1, Vi = !1, qi = 0, Qp = 0;
  function pt() {
    throw Error(l(321));
  }
  function Ql(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Wt(e[n], t[n])) return !1;
    return !0;
  }
  function Hl(e, t, n, r, o, u) {
    if (fr = u, Ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jo.current = e === null || e.memoizedState === null ? Kp : Wp, e = n(r, o), Vi) {
      u = 0;
      do {
        if (Vi = !1, qi = 0, 25 <= u) throw Error(l(301));
        u += 1, st = nt = null, t.updateQueue = null, Jo.current = Yp, e = n(r, o);
      } while (Vi);
    }
    if (Jo.current = ns, t = nt !== null && nt.next !== null, fr = 0, st = nt = Ke = null, Zo = !1, t) throw Error(l(300));
    return e;
  }
  function Vl() {
    var e = qi !== 0;
    return qi = 0, e;
  }
  function ln() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return st === null ? Ke.memoizedState = st = e : st = st.next = e, st;
  }
  function Bt() {
    if (nt === null) {
      var e = Ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var t = st === null ? Ke.memoizedState : st.next;
    if (t !== null) st = t, nt = e;
    else {
      if (e === null) throw Error(l(310));
      nt = e, e = { memoizedState: nt.memoizedState, baseState: nt.baseState, baseQueue: nt.baseQueue, queue: nt.queue, next: null }, st === null ? Ke.memoizedState = st = e : st = st.next = e;
    }
    return st;
  }
  function Ki(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ql(e) {
    var t = Bt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = nt, o = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var c = o.next;
        o.next = u.next, u.next = c;
      }
      r.baseQueue = o = u, n.pending = null;
    }
    if (o !== null) {
      u = o.next, r = r.baseState;
      var y = c = null, S = null, j = u;
      do {
        var Y = j.lane;
        if ((fr & Y) === Y) S !== null && (S = S.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), r = j.hasEagerState ? j.eagerState : e(r, j.action);
        else {
          var J = {
            lane: Y,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          S === null ? (y = S = J, c = r) : S = S.next = J, Ke.lanes |= Y, dr |= Y;
        }
        j = j.next;
      } while (j !== null && j !== u);
      S === null ? c = r : S.next = y, Wt(r, t.memoizedState) || (Pt = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = S, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, Ke.lanes |= u, dr |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Kl(e) {
    var t = Bt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var c = o = o.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== o);
      Wt(u, t.memoizedState) || (Pt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Kc() {
  }
  function Wc(e, t) {
    var n = Ke, r = Bt(), o = t(), u = !Wt(r.memoizedState, o);
    if (u && (r.memoizedState = o, Pt = !0), r = r.queue, Wl(Xc.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || st !== null && st.memoizedState.tag & 1) {
      if (n.flags |= 2048, Wi(9, Gc.bind(null, n, r, o, t), void 0, null), lt === null) throw Error(l(349));
      (fr & 30) !== 0 || Yc(n, t, o);
    }
    return o;
  }
  function Yc(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Gc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Jc(t) && Zc(e);
  }
  function Xc(e, t, n) {
    return n(function() {
      Jc(t) && Zc(e);
    });
  }
  function Jc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Wt(e, n);
    } catch {
      return !0;
    }
  }
  function Zc(e) {
    var t = xn(e, 1);
    t !== null && Zt(t, e, 1, -1);
  }
  function ef(e) {
    var t = ln();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ki, lastRenderedState: e }, t.queue = e, e = e.dispatch = qp.bind(null, Ke, e), [t.memoizedState, e];
  }
  function Wi(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function tf() {
    return Bt().memoizedState;
  }
  function es(e, t, n, r) {
    var o = ln();
    Ke.flags |= e, o.memoizedState = Wi(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ts(e, t, n, r) {
    var o = Bt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (nt !== null) {
      var c = nt.memoizedState;
      if (u = c.destroy, r !== null && Ql(r, c.deps)) {
        o.memoizedState = Wi(t, n, u, r);
        return;
      }
    }
    Ke.flags |= e, o.memoizedState = Wi(1 | t, n, u, r);
  }
  function nf(e, t) {
    return es(8390656, 8, e, t);
  }
  function Wl(e, t) {
    return ts(2048, 8, e, t);
  }
  function rf(e, t) {
    return ts(4, 2, e, t);
  }
  function of(e, t) {
    return ts(4, 4, e, t);
  }
  function sf(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function lf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ts(4, 4, sf.bind(null, t, e), n);
  }
  function Yl() {
  }
  function uf(e, t) {
    var n = Bt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ql(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function af(e, t) {
    var n = Bt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ql(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function cf(e, t, n) {
    return (fr & 21) === 0 ? (e.baseState && (e.baseState = !1, Pt = !0), e.memoizedState = n) : (Wt(n, t) || (n = ba(), Ke.lanes |= n, dr |= n, e.baseState = !0), t);
  }
  function Hp(e, t) {
    var n = De;
    De = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
      e(!1), t();
    } finally {
      De = n, $l.transition = r;
    }
  }
  function ff() {
    return Bt().memoizedState;
  }
  function Vp(e, t, n) {
    var r = Hn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, df(e)) hf(t, n);
    else if (n = $c(e, t, n, r), n !== null) {
      var o = St();
      Zt(n, e, r, o), pf(n, t, r);
    }
  }
  function qp(e, t, n) {
    var r = Hn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (df(e)) hf(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var c = t.lastRenderedState, y = u(c, n);
        if (o.hasEagerState = !0, o.eagerState = y, Wt(y, c)) {
          var S = t.interleaved;
          S === null ? (o.next = o, jl(t)) : (o.next = S.next, S.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = $c(e, t, o, r), n !== null && (o = St(), Zt(n, e, r, o), pf(n, t, r));
    }
  }
  function df(e) {
    var t = e.alternate;
    return e === Ke || t !== null && t === Ke;
  }
  function hf(e, t) {
    Vi = Zo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function pf(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xs(e, n);
    }
  }
  var ns = { readContext: Ut, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useInsertionEffect: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useSyncExternalStore: pt, useId: pt, unstable_isNewReconciler: !1 }, Kp = { readContext: Ut, useCallback: function(e, t) {
    return ln().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Ut, useEffect: nf, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, es(
      4194308,
      4,
      sf.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return es(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return es(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = ln();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = ln();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vp.bind(null, Ke, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = ln();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ef, useDebugValue: Yl, useDeferredValue: function(e) {
    return ln().memoizedState = e;
  }, useTransition: function() {
    var e = ef(!1), t = e[0];
    return e = Hp.bind(null, e[1]), ln().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ke, o = ln();
    if (Ve) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), lt === null) throw Error(l(349));
      (fr & 30) !== 0 || Yc(r, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, nf(Xc.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, Wi(9, Gc.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = ln(), t = lt.identifierPrefix;
    if (Ve) {
      var n = Sn, r = wn;
      n = (r & ~(1 << 32 - Kt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Qp++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Wp = {
    readContext: Ut,
    useCallback: uf,
    useContext: Ut,
    useEffect: Wl,
    useImperativeHandle: lf,
    useInsertionEffect: rf,
    useLayoutEffect: of,
    useMemo: af,
    useReducer: ql,
    useRef: tf,
    useState: function() {
      return ql(Ki);
    },
    useDebugValue: Yl,
    useDeferredValue: function(e) {
      var t = Bt();
      return cf(t, nt.memoizedState, e);
    },
    useTransition: function() {
      var e = ql(Ki)[0], t = Bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Kc,
    useSyncExternalStore: Wc,
    useId: ff,
    unstable_isNewReconciler: !1
  }, Yp = { readContext: Ut, useCallback: uf, useContext: Ut, useEffect: Wl, useImperativeHandle: lf, useInsertionEffect: rf, useLayoutEffect: of, useMemo: af, useReducer: Kl, useRef: tf, useState: function() {
    return Kl(Ki);
  }, useDebugValue: Yl, useDeferredValue: function(e) {
    var t = Bt();
    return nt === null ? t.memoizedState = e : cf(t, nt.memoizedState, e);
  }, useTransition: function() {
    var e = Kl(Ki)[0], t = Bt().memoizedState;
    return [e, t];
  }, useMutableSource: Kc, useSyncExternalStore: Wc, useId: ff, unstable_isNewReconciler: !1 };
  function Gt(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var rs = { isMounted: function(e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), o = Hn(e), u = kn(r, o);
    u.payload = t, n != null && (u.callback = n), t = Un(e, u, o), t !== null && (Zt(t, e, o, r), Yo(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = St(), o = Hn(e), u = kn(r, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Un(e, u, o), t !== null && (Zt(t, e, o, r), Yo(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = St(), r = Hn(e), o = kn(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Un(e, o, r), t !== null && (Zt(t, e, r, n), Yo(t, e, r));
  } };
  function mf(e, t, n, r, o, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Fi(n, r) || !Fi(o, u) : !0;
  }
  function yf(e, t, n) {
    var r = !1, o = zn, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Ut(u) : (o = Ct(t) ? sr : ht.current, r = t.contextTypes, u = (r = r != null) ? Dr(e, o) : zn), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function gf(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function Xl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, zl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = Ut(u) : (u = Ct(t) ? sr : ht.current, o.context = Dr(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Gl(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && rs.enqueueReplaceState(o, o.state, null), Go(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function qr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ge(r), r = r.return;
      while (r);
      var o = n;
    } catch (u) {
      o = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Jl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Gp = typeof WeakMap == "function" ? WeakMap : Map;
  function vf(e, t, n) {
    n = kn(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      cs || (cs = !0, pu = r), Zl(e, t);
    }, n;
  }
  function wf(e, t, n) {
    n = kn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        Zl(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Zl(e, t), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function Sf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Gp();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = cm.bind(null, e, t, n), t.then(e, e));
  }
  function xf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function kf(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kn(-1, 1), t.tag = 2, Un(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var Xp = $.ReactCurrentOwner, Pt = !1;
  function wt(e, t, n, r) {
    t.child = e === null ? Bc(t, null, n, r) : $r(t, e.child, n, r);
  }
  function Ef(e, t, n, r, o) {
    n = n.render;
    var u = t.ref;
    return Hr(t, o), r = Hl(e, t, n, r, u, o), n = Vl(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, En(e, t, o)) : (Ve && n && Rl(t), t.flags |= 1, wt(e, t, r, o), t.child);
  }
  function _f(e, t, n, r, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !xu(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Cf(e, t, u, r, o)) : (e = ys(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var c = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Fi, n(c, r) && e.ref === t.ref) return En(e, t, o);
    }
    return t.flags |= 1, e = qn(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cf(e, t, n, r, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Fi(u, r) && e.ref === t.ref) if (Pt = !1, t.pendingProps = r = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (Pt = !0);
      else return t.lanes = e.lanes, En(e, t, o);
    }
    return eu(e, t, n, r, o);
  }
  function Pf(e, t, n) {
    var r = t.pendingProps, o = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, be(Wr, jt), jt |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, be(Wr, jt), jt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, be(Wr, jt), jt |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, be(Wr, jt), jt |= r;
    return wt(e, t, o, n), t.child;
  }
  function Rf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function eu(e, t, n, r, o) {
    var u = Ct(n) ? sr : ht.current;
    return u = Dr(t, u), Hr(t, o), n = Hl(e, t, n, r, u, o), r = Vl(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, En(e, t, o)) : (Ve && r && Rl(t), t.flags |= 1, wt(e, t, n, o), t.child);
  }
  function Of(e, t, n, r, o) {
    if (Ct(n)) {
      var u = !0;
      Bo(t);
    } else u = !1;
    if (Hr(t, o), t.stateNode === null) os(e, t), yf(t, n, r), Xl(t, n, r, o), r = !0;
    else if (e === null) {
      var c = t.stateNode, y = t.memoizedProps;
      c.props = y;
      var S = c.context, j = n.contextType;
      typeof j == "object" && j !== null ? j = Ut(j) : (j = Ct(n) ? sr : ht.current, j = Dr(t, j));
      var Y = n.getDerivedStateFromProps, J = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      J || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== r || S !== j) && gf(t, c, r, j), bn = !1;
      var W = t.memoizedState;
      c.state = W, Go(t, r, c, o), S = t.memoizedState, y !== r || W !== S || _t.current || bn ? (typeof Y == "function" && (Gl(t, n, Y, r), S = t.memoizedState), (y = bn || mf(t, n, y, r, W, S, j)) ? (J || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = S), c.props = r, c.state = S, c.context = j, r = y) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Qc(e, t), y = t.memoizedProps, j = t.type === t.elementType ? y : Gt(t.type, y), c.props = j, J = t.pendingProps, W = c.context, S = n.contextType, typeof S == "object" && S !== null ? S = Ut(S) : (S = Ct(n) ? sr : ht.current, S = Dr(t, S));
      var ae = n.getDerivedStateFromProps;
      (Y = typeof ae == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (y !== J || W !== S) && gf(t, c, r, S), bn = !1, W = t.memoizedState, c.state = W, Go(t, r, c, o);
      var fe = t.memoizedState;
      y !== J || W !== fe || _t.current || bn ? (typeof ae == "function" && (Gl(t, n, ae, r), fe = t.memoizedState), (j = bn || mf(t, n, j, r, W, fe, S) || !1) ? (Y || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, fe, S), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, fe, S)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = fe), c.props = r, c.state = fe, c.context = S, r = j) : (typeof c.componentDidUpdate != "function" || y === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return tu(e, t, n, r, u, o);
  }
  function tu(e, t, n, r, o, u) {
    Rf(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return o && Lc(t, n, !1), En(e, t, u);
    r = t.stateNode, Xp.current = t;
    var y = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = $r(t, e.child, null, u), t.child = $r(t, null, y, u)) : wt(e, t, y, u), t.memoizedState = r.state, o && Lc(t, n, !0), t.child;
  }
  function Tf(e) {
    var t = e.stateNode;
    t.pendingContext ? Ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ic(e, t.context, !1), Dl(e, t.containerInfo);
  }
  function If(e, t, n, r, o) {
    return Br(), Nl(o), t.flags |= 256, wt(e, t, n, r), t.child;
  }
  var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nf(e, t, n) {
    var r = t.pendingProps, o = qe.current, u = !1, c = (t.flags & 128) !== 0, y;
    if ((y = c) || (y = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), y ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), be(qe, o & 1), e === null)
      return Il(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (c = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, c = { mode: "hidden", children: c }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = c) : u = gs(c, r, 0, null), e = yr(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = ru(n), t.memoizedState = nu, e) : iu(t, c));
    if (o = e.memoizedState, o !== null && (y = o.dehydrated, y !== null)) return Jp(e, t, c, r, y, o, n);
    if (u) {
      u = r.fallback, c = t.mode, o = e.child, y = o.sibling;
      var S = { mode: "hidden", children: r.children };
      return (c & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = S, t.deletions = null) : (r = qn(o, S), r.subtreeFlags = o.subtreeFlags & 14680064), y !== null ? u = qn(y, u) : (u = yr(u, c, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, c = e.child.memoizedState, c = c === null ? ru(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, u.memoizedState = c, u.childLanes = e.childLanes & ~n, t.memoizedState = nu, r;
    }
    return u = e.child, e = u.sibling, r = qn(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function iu(e, t) {
    return t = gs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function is(e, t, n, r) {
    return r !== null && Nl(r), $r(t, e.child, null, n), e = iu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Jp(e, t, n, r, o, u, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Jl(Error(l(422))), is(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, o = t.mode, r = gs({ mode: "visible", children: r.children }, o, 0, null), u = yr(u, o, c, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && $r(t, e.child, null, c), t.child.memoizedState = ru(c), t.memoizedState = nu, u);
    if ((t.mode & 1) === 0) return is(e, t, c, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var y = r.dgst;
      return r = y, u = Error(l(419)), r = Jl(u, r, void 0), is(e, t, c, r);
    }
    if (y = (c & e.childLanes) !== 0, Pt || y) {
      if (r = lt, r !== null) {
        switch (c & -c) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | c)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, xn(e, o), Zt(r, e, o, -1));
      }
      return Su(), r = Jl(Error(l(421))), is(e, t, c, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fm.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, Mt = Mn(o.nextSibling), Ft = t, Ve = !0, Yt = null, e !== null && (Dt[bt++] = wn, Dt[bt++] = Sn, Dt[bt++] = lr, wn = e.id, Sn = e.overflow, lr = t), t = iu(t, r.children), t.flags |= 4096, t);
  }
  function Lf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ml(e.return, t, n);
  }
  function ou(e, t, n, r, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = o);
  }
  function Af(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, u = r.tail;
    if (wt(e, t, r.children, n), r = qe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lf(e, n, t);
        else if (e.tag === 19) Lf(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (be(qe, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Xo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ou(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Xo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        ou(t, !0, n, null, u);
        break;
      case "together":
        ou(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function os(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function En(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), dr |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Zp(e, t, n) {
    switch (t.tag) {
      case 3:
        Tf(t), Br();
        break;
      case 5:
        qc(t);
        break;
      case 1:
        Ct(t.type) && Bo(t);
        break;
      case 4:
        Dl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        be(Ko, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (be(qe, qe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Nf(e, t, n) : (be(qe, qe.current & 1), e = En(e, t, n), e !== null ? e.sibling : null);
        be(qe, qe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Af(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), be(qe, qe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Pf(e, t, n);
    }
    return En(e, t, n);
  }
  var Ff, su, Mf, jf;
  Ff = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, su = function() {
  }, Mf = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, cr(sn.current);
      var u = null;
      switch (n) {
        case "input":
          o = le(e, o), r = le(e, r), u = [];
          break;
        case "select":
          o = Z({}, o, { value: void 0 }), r = Z({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = He(e, o), r = He(e, r), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Do);
      }
      Us(n, r);
      var c;
      n = null;
      for (j in o) if (!r.hasOwnProperty(j) && o.hasOwnProperty(j) && o[j] != null) if (j === "style") {
        var y = o[j];
        for (c in y) y.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
      } else j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (d.hasOwnProperty(j) ? u || (u = []) : (u = u || []).push(j, null));
      for (j in r) {
        var S = r[j];
        if (y = o != null ? o[j] : void 0, r.hasOwnProperty(j) && S !== y && (S != null || y != null)) if (j === "style") if (y) {
          for (c in y) !y.hasOwnProperty(c) || S && S.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
          for (c in S) S.hasOwnProperty(c) && y[c] !== S[c] && (n || (n = {}), n[c] = S[c]);
        } else n || (u || (u = []), u.push(
          j,
          n
        )), n = S;
        else j === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, y = y ? y.__html : void 0, S != null && y !== S && (u = u || []).push(j, S)) : j === "children" ? typeof S != "string" && typeof S != "number" || (u = u || []).push(j, "" + S) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (d.hasOwnProperty(j) ? (S != null && j === "onScroll" && $e("scroll", e), u || y === S || (u = [])) : (u = u || []).push(j, S));
      }
      n && (u = u || []).push("style", n);
      var j = u;
      (t.updateQueue = j) && (t.flags |= 4);
    }
  }, jf = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Yi(e, t) {
    if (!Ve) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function mt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function em(e, t, n) {
    var r = t.pendingProps;
    switch (Ol(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(t), null;
      case 1:
        return Ct(t.type) && Uo(), mt(t), null;
      case 3:
        return r = t.stateNode, Vr(), Qe(_t), Qe(ht), Bl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Vo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yt !== null && (gu(Yt), Yt = null))), su(e, t), mt(t), null;
      case 5:
        bl(t);
        var o = cr(Hi.current);
        if (n = t.type, e !== null && t.stateNode != null) Mf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return mt(t), null;
          }
          if (e = cr(sn.current), Vo(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[on] = t, r[bi] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                $e("cancel", r), $e("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ji.length; o++) $e(ji[o], r);
                break;
              case "source":
                $e("error", r);
                break;
              case "img":
              case "image":
              case "link":
                $e(
                  "error",
                  r
                ), $e("load", r);
                break;
              case "details":
                $e("toggle", r);
                break;
              case "input":
                Te(r, u), $e("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, $e("invalid", r);
                break;
              case "textarea":
                yn(r, u), $e("invalid", r);
            }
            Us(n, u), o = null;
            for (var c in u) if (u.hasOwnProperty(c)) {
              var y = u[c];
              c === "children" ? typeof y == "string" ? r.textContent !== y && (u.suppressHydrationWarning !== !0 && zo(r.textContent, y, e), o = ["children", y]) : typeof y == "number" && r.textContent !== "" + y && (u.suppressHydrationWarning !== !0 && zo(
                r.textContent,
                y,
                e
              ), o = ["children", "" + y]) : d.hasOwnProperty(c) && y != null && c === "onScroll" && $e("scroll", r);
            }
            switch (n) {
              case "input":
                P(r), Et(r, u, !0);
                break;
              case "textarea":
                P(r), Sa(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Do);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[on] = t, e[bi] = r, Ff(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Bs(n, r), n) {
                case "dialog":
                  $e("cancel", e), $e("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $e("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < ji.length; o++) $e(ji[o], e);
                  o = r;
                  break;
                case "source":
                  $e("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  $e(
                    "error",
                    e
                  ), $e("load", e), o = r;
                  break;
                case "details":
                  $e("toggle", e), o = r;
                  break;
                case "input":
                  Te(e, r), o = le(e, r), $e("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = Z({}, r, { value: void 0 }), $e("invalid", e);
                  break;
                case "textarea":
                  yn(e, r), o = He(e, r), $e("invalid", e);
                  break;
                default:
                  o = r;
              }
              Us(n, o), y = o;
              for (u in y) if (y.hasOwnProperty(u)) {
                var S = y[u];
                u === "style" ? _a(e, S) : u === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && ka(e, S)) : u === "children" ? typeof S == "string" ? (n !== "textarea" || S !== "") && gi(e, S) : typeof S == "number" && gi(e, "" + S) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (d.hasOwnProperty(u) ? S != null && u === "onScroll" && $e("scroll", e) : S != null && b(e, u, S, c));
              }
              switch (n) {
                case "input":
                  P(e), Et(e, r, !1);
                  break;
                case "textarea":
                  P(e), Sa(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Be(e, !!r.multiple, u, !1) : r.defaultValue != null && Be(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Do);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return mt(t), null;
      case 6:
        if (e && t.stateNode != null) jf(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = cr(Hi.current), cr(sn.current), Vo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[on] = t, (u = r.nodeValue !== n) && (e = Ft, e !== null)) switch (e.tag) {
              case 3:
                zo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && zo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[on] = t, t.stateNode = r;
        }
        return mt(t), null;
      case 13:
        if (Qe(qe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ve && Mt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Dc(), Br(), t.flags |= 98560, u = !1;
          else if (u = Vo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(l(317));
              u[on] = t;
            } else Br(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            mt(t), u = !1;
          } else Yt !== null && (gu(Yt), Yt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (qe.current & 1) !== 0 ? rt === 0 && (rt = 3) : Su())), t.updateQueue !== null && (t.flags |= 4), mt(t), null);
      case 4:
        return Vr(), su(e, t), e === null && zi(t.stateNode.containerInfo), mt(t), null;
      case 10:
        return Fl(t.type._context), mt(t), null;
      case 17:
        return Ct(t.type) && Uo(), mt(t), null;
      case 19:
        if (Qe(qe), u = t.memoizedState, u === null) return mt(t), null;
        if (r = (t.flags & 128) !== 0, c = u.rendering, c === null) if (r) Yi(u, !1);
        else {
          if (rt !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (c = Xo(e), c !== null) {
              for (t.flags |= 128, Yi(u, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, c = u.alternate, c === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = c.childLanes, u.lanes = c.lanes, u.child = c.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = c.memoizedProps, u.memoizedState = c.memoizedState, u.updateQueue = c.updateQueue, u.type = c.type, e = c.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return be(qe, qe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Xe() > Yr && (t.flags |= 128, r = !0, Yi(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Xo(c), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yi(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !Ve) return mt(t), null;
          } else 2 * Xe() - u.renderingStartTime > Yr && n !== 1073741824 && (t.flags |= 128, r = !0, Yi(u, !1), t.lanes = 4194304);
          u.isBackwards ? (c.sibling = t.child, t.child = c) : (n = u.last, n !== null ? n.sibling = c : t.child = c, u.last = c);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Xe(), t.sibling = null, n = qe.current, be(qe, r ? n & 1 | 2 : n & 1), t) : (mt(t), null);
      case 22:
      case 23:
        return wu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (jt & 1073741824) !== 0 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : mt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function tm(e, t) {
    switch (Ol(t), t.tag) {
      case 1:
        return Ct(t.type) && Uo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Vr(), Qe(_t), Qe(ht), Bl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return bl(t), null;
      case 13:
        if (Qe(qe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          Br();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Qe(qe), null;
      case 4:
        return Vr(), null;
      case 10:
        return Fl(t.type._context), null;
      case 22:
      case 23:
        return wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ss = !1, yt = !1, nm = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Kr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ye(e, t, r);
    }
    else n.current = null;
  }
  function lu(e, t, n) {
    try {
      n();
    } catch (r) {
      Ye(e, t, r);
    }
  }
  var zf = !1;
  function rm(e, t) {
    if (wl = Po, e = pc(), fl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var c = 0, y = -1, S = -1, j = 0, Y = 0, J = e, W = null;
          t: for (; ; ) {
            for (var ae; J !== n || o !== 0 && J.nodeType !== 3 || (y = c + o), J !== u || r !== 0 && J.nodeType !== 3 || (S = c + r), J.nodeType === 3 && (c += J.nodeValue.length), (ae = J.firstChild) !== null; )
              W = J, J = ae;
            for (; ; ) {
              if (J === e) break t;
              if (W === n && ++j === o && (y = c), W === u && ++Y === r && (S = c), (ae = J.nextSibling) !== null) break;
              J = W, W = J.parentNode;
            }
            J = ae;
          }
          n = y === -1 || S === -1 ? null : { start: y, end: S };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Sl = { focusedElem: e, selectionRange: n }, Po = !1, ce = t; ce !== null; ) if (t = ce, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ce = e;
    else for (; ce !== null; ) {
      t = ce;
      try {
        var fe = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var he = fe.memoizedProps, Je = fe.memoizedState, I = t.stateNode, _ = I.getSnapshotBeforeUpdate(t.elementType === t.type ? he : Gt(t.type, he), Je);
              I.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var A = t.stateNode.containerInfo;
            A.nodeType === 1 ? A.textContent = "" : A.nodeType === 9 && A.documentElement && A.removeChild(A.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (re) {
        Ye(t, t.return, re);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ce = e;
        break;
      }
      ce = t.return;
    }
    return fe = zf, zf = !1, fe;
  }
  function Gi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && lu(t, n, u);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ls(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function uu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Df(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[on], delete t[bi], delete t[_l], delete t[bp], delete t[Up])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function au(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Do));
    else if (r !== 4 && (e = e.child, e !== null)) for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), e = e.sibling;
  }
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), e = e.sibling;
  }
  var ct = null, Xt = !1;
  function Bn(e, t, n) {
    for (n = n.child; n !== null; ) Bf(e, t, n), n = n.sibling;
  }
  function Bf(e, t, n) {
    if (rn && typeof rn.onCommitFiberUnmount == "function") try {
      rn.onCommitFiberUnmount(So, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        yt || Kr(n, t);
      case 6:
        var r = ct, o = Xt;
        ct = null, Bn(e, t, n), ct = r, Xt = o, ct !== null && (Xt ? (e = ct, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ct.removeChild(n.stateNode));
        break;
      case 18:
        ct !== null && (Xt ? (e = ct, n = n.stateNode, e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n), Oi(e)) : El(ct, n.stateNode));
        break;
      case 4:
        r = ct, o = Xt, ct = n.stateNode.containerInfo, Xt = !0, Bn(e, t, n), ct = r, Xt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var u = o, c = u.destroy;
            u = u.tag, c !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && lu(n, t, c), o = o.next;
          } while (o !== r);
        }
        Bn(e, t, n);
        break;
      case 1:
        if (!yt && (Kr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (y) {
          Ye(n, t, y);
        }
        Bn(e, t, n);
        break;
      case 21:
        Bn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (yt = (r = yt) || n.memoizedState !== null, Bn(e, t, n), yt = r) : Bn(e, t, n);
        break;
      default:
        Bn(e, t, n);
    }
  }
  function $f(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new nm()), t.forEach(function(r) {
        var o = dm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function Jt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var u = e, c = t, y = c;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 5:
              ct = y.stateNode, Xt = !1;
              break e;
            case 3:
              ct = y.stateNode.containerInfo, Xt = !0;
              break e;
            case 4:
              ct = y.stateNode.containerInfo, Xt = !0;
              break e;
          }
          y = y.return;
        }
        if (ct === null) throw Error(l(160));
        Bf(u, c, o), ct = null, Xt = !1;
        var S = o.alternate;
        S !== null && (S.return = null), o.return = null;
      } catch (j) {
        Ye(o, t, j);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Qf(t, e), t = t.sibling;
  }
  function Qf(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jt(t, e), un(e), r & 4) {
          try {
            Gi(3, e, e.return), ls(3, e);
          } catch (he) {
            Ye(e, e.return, he);
          }
          try {
            Gi(5, e, e.return);
          } catch (he) {
            Ye(e, e.return, he);
          }
        }
        break;
      case 1:
        Jt(t, e), un(e), r & 512 && n !== null && Kr(n, n.return);
        break;
      case 5:
        if (Jt(t, e), un(e), r & 512 && n !== null && Kr(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            gi(o, "");
          } catch (he) {
            Ye(e, e.return, he);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, c = n !== null ? n.memoizedProps : u, y = e.type, S = e.updateQueue;
          if (e.updateQueue = null, S !== null) try {
            y === "input" && u.type === "radio" && u.name != null && Ue(o, u), Bs(y, c);
            var j = Bs(y, u);
            for (c = 0; c < S.length; c += 2) {
              var Y = S[c], J = S[c + 1];
              Y === "style" ? _a(o, J) : Y === "dangerouslySetInnerHTML" ? ka(o, J) : Y === "children" ? gi(o, J) : b(o, Y, J, j);
            }
            switch (y) {
              case "input":
                We(o, u);
                break;
              case "textarea":
                yi(o, u);
                break;
              case "select":
                var W = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var ae = u.value;
                ae != null ? Be(o, !!u.multiple, ae, !1) : W !== !!u.multiple && (u.defaultValue != null ? Be(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Be(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[bi] = u;
          } catch (he) {
            Ye(e, e.return, he);
          }
        }
        break;
      case 6:
        if (Jt(t, e), un(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (he) {
            Ye(e, e.return, he);
          }
        }
        break;
      case 3:
        if (Jt(t, e), un(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Oi(t.containerInfo);
        } catch (he) {
          Ye(e, e.return, he);
        }
        break;
      case 4:
        Jt(t, e), un(e);
        break;
      case 13:
        Jt(t, e), un(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (hu = Xe())), r & 4 && $f(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (yt = (j = yt) || Y, Jt(t, e), yt = j) : Jt(t, e), un(e), r & 8192) {
          if (j = e.memoizedState !== null, (e.stateNode.isHidden = j) && !Y && (e.mode & 1) !== 0) for (ce = e, Y = e.child; Y !== null; ) {
            for (J = ce = Y; ce !== null; ) {
              switch (W = ce, ae = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gi(4, W, W.return);
                  break;
                case 1:
                  Kr(W, W.return);
                  var fe = W.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    r = W, n = W.return;
                    try {
                      t = r, fe.props = t.memoizedProps, fe.state = t.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      Ye(r, n, he);
                    }
                  }
                  break;
                case 5:
                  Kr(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    qf(J);
                    continue;
                  }
              }
              ae !== null ? (ae.return = W, ce = ae) : qf(J);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, J = e; ; ) {
            if (J.tag === 5) {
              if (Y === null) {
                Y = J;
                try {
                  o = J.stateNode, j ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (y = J.stateNode, S = J.memoizedProps.style, c = S != null && S.hasOwnProperty("display") ? S.display : null, y.style.display = Ea("display", c));
                } catch (he) {
                  Ye(e, e.return, he);
                }
              }
            } else if (J.tag === 6) {
              if (Y === null) try {
                J.stateNode.nodeValue = j ? "" : J.memoizedProps;
              } catch (he) {
                Ye(e, e.return, he);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              Y === J && (Y = null), J = J.return;
            }
            Y === J && (Y = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        Jt(t, e), un(e), r & 4 && $f(e);
        break;
      case 21:
        break;
      default:
        Jt(
          t,
          e
        ), un(e);
    }
  }
  function un(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (bf(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (gi(o, ""), r.flags &= -33);
            var u = Uf(e);
            cu(e, u, o);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, y = Uf(e);
            au(e, y, c);
            break;
          default:
            throw Error(l(161));
        }
      } catch (S) {
        Ye(e, e.return, S);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function im(e, t, n) {
    ce = e, Hf(e);
  }
  function Hf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ce !== null; ) {
      var o = ce, u = o.child;
      if (o.tag === 22 && r) {
        var c = o.memoizedState !== null || ss;
        if (!c) {
          var y = o.alternate, S = y !== null && y.memoizedState !== null || yt;
          y = ss;
          var j = yt;
          if (ss = c, (yt = S) && !j) for (ce = o; ce !== null; ) c = ce, S = c.child, c.tag === 22 && c.memoizedState !== null ? Kf(o) : S !== null ? (S.return = c, ce = S) : Kf(o);
          for (; u !== null; ) ce = u, Hf(u), u = u.sibling;
          ce = o, ss = y, yt = j;
        }
        Vf(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, ce = u) : Vf(e);
    }
  }
  function Vf(e) {
    for (; ce !== null; ) {
      var t = ce;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || ls(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : Gt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Vc(t, u, r);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Vc(t, c, n);
              }
              break;
            case 5:
              var y = t.stateNode;
              if (n === null && t.flags & 4) {
                n = y;
                var S = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    S.autoFocus && n.focus();
                    break;
                  case "img":
                    S.src && (n.src = S.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var j = t.alternate;
                if (j !== null) {
                  var Y = j.memoizedState;
                  if (Y !== null) {
                    var J = Y.dehydrated;
                    J !== null && Oi(J);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(l(163));
          }
          yt || t.flags & 512 && uu(t);
        } catch (W) {
          Ye(t, t.return, W);
        }
      }
      if (t === e) {
        ce = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, ce = n;
        break;
      }
      ce = t.return;
    }
  }
  function qf(e) {
    for (; ce !== null; ) {
      var t = ce;
      if (t === e) {
        ce = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, ce = n;
        break;
      }
      ce = t.return;
    }
  }
  function Kf(e) {
    for (; ce !== null; ) {
      var t = ce;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ls(4, t);
            } catch (S) {
              Ye(t, n, S);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (S) {
                Ye(t, o, S);
              }
            }
            var u = t.return;
            try {
              uu(t);
            } catch (S) {
              Ye(t, u, S);
            }
            break;
          case 5:
            var c = t.return;
            try {
              uu(t);
            } catch (S) {
              Ye(t, c, S);
            }
        }
      } catch (S) {
        Ye(t, t.return, S);
      }
      if (t === e) {
        ce = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        y.return = t.return, ce = y;
        break;
      }
      ce = t.return;
    }
  }
  var om = Math.ceil, us = $.ReactCurrentDispatcher, fu = $.ReactCurrentOwner, $t = $.ReactCurrentBatchConfig, Le = 0, lt = null, et = null, ft = 0, jt = 0, Wr = jn(0), rt = 0, Xi = null, dr = 0, as = 0, du = 0, Ji = null, Rt = null, hu = 0, Yr = 1 / 0, _n = null, cs = !1, pu = null, $n = null, fs = !1, Qn = null, ds = 0, Zi = 0, mu = null, hs = -1, ps = 0;
  function St() {
    return (Le & 6) !== 0 ? Xe() : hs !== -1 ? hs : hs = Xe();
  }
  function Hn(e) {
    return (e.mode & 1) === 0 ? 1 : (Le & 2) !== 0 && ft !== 0 ? ft & -ft : $p.transition !== null ? (ps === 0 && (ps = ba()), ps) : (e = De, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wa(e.type)), e);
  }
  function Zt(e, t, n, r) {
    if (50 < Zi) throw Zi = 0, mu = null, Error(l(185));
    Ei(e, n, r), ((Le & 2) === 0 || e !== lt) && (e === lt && ((Le & 2) === 0 && (as |= n), rt === 4 && Vn(e, ft)), Ot(e, r), n === 1 && Le === 0 && (t.mode & 1) === 0 && (Yr = Xe() + 500, $o && Dn()));
  }
  function Ot(e, t) {
    var n = e.callbackNode;
    $h(e, t);
    var r = Eo(e, e === lt ? ft : 0);
    if (r === 0) n !== null && ja(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ja(n), t === 1) e.tag === 0 ? Bp(Yf.bind(null, e)) : Ac(Yf.bind(null, e)), zp(function() {
        (Le & 6) === 0 && Dn();
      }), n = null;
      else {
        switch (Ua(r)) {
          case 1:
            n = Ws;
            break;
          case 4:
            n = za;
            break;
          case 16:
            n = wo;
            break;
          case 536870912:
            n = Da;
            break;
          default:
            n = wo;
        }
        n = rd(n, Wf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Wf(e, t) {
    if (hs = -1, ps = 0, (Le & 6) !== 0) throw Error(l(327));
    var n = e.callbackNode;
    if (Gr() && e.callbackNode !== n) return null;
    var r = Eo(e, e === lt ? ft : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ms(e, r);
    else {
      t = r;
      var o = Le;
      Le |= 2;
      var u = Xf();
      (lt !== e || ft !== t) && (_n = null, Yr = Xe() + 500, pr(e, t));
      do
        try {
          um();
          break;
        } catch (y) {
          Gf(e, y);
        }
      while (!0);
      Al(), us.current = u, Le = o, et !== null ? t = 0 : (lt = null, ft = 0, t = rt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Ys(e), o !== 0 && (r = o, t = yu(e, o))), t === 1) throw n = Xi, pr(e, 0), Vn(e, r), Ot(e, Xe()), n;
      if (t === 6) Vn(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !sm(o) && (t = ms(e, r), t === 2 && (u = Ys(e), u !== 0 && (r = u, t = yu(e, u))), t === 1)) throw n = Xi, pr(e, 0), Vn(e, r), Ot(e, Xe()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            mr(e, Rt, _n);
            break;
          case 3:
            if (Vn(e, r), (r & 130023424) === r && (t = hu + 500 - Xe(), 10 < t)) {
              if (Eo(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                St(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = kl(mr.bind(null, e, Rt, _n), t);
              break;
            }
            mr(e, Rt, _n);
            break;
          case 4:
            if (Vn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var c = 31 - Kt(r);
              u = 1 << c, c = t[c], c > o && (o = c), r &= ~u;
            }
            if (r = o, r = Xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * om(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = kl(mr.bind(null, e, Rt, _n), r);
              break;
            }
            mr(e, Rt, _n);
            break;
          case 5:
            mr(e, Rt, _n);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Ot(e, Xe()), e.callbackNode === n ? Wf.bind(null, e) : null;
  }
  function yu(e, t) {
    var n = Ji;
    return e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256), e = ms(e, t), e !== 2 && (t = Rt, Rt = n, t !== null && gu(t)), e;
  }
  function gu(e) {
    Rt === null ? Rt = e : Rt.push.apply(Rt, e);
  }
  function sm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Vn(e, t) {
    for (t &= ~du, t &= ~as, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Kt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Yf(e) {
    if ((Le & 6) !== 0) throw Error(l(327));
    Gr();
    var t = Eo(e, 0);
    if ((t & 1) === 0) return Ot(e, Xe()), null;
    var n = ms(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ys(e);
      r !== 0 && (t = r, n = yu(e, r));
    }
    if (n === 1) throw n = Xi, pr(e, 0), Vn(e, t), Ot(e, Xe()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, mr(e, Rt, _n), Ot(e, Xe()), null;
  }
  function vu(e, t) {
    var n = Le;
    Le |= 1;
    try {
      return e(t);
    } finally {
      Le = n, Le === 0 && (Yr = Xe() + 500, $o && Dn());
    }
  }
  function hr(e) {
    Qn !== null && Qn.tag === 0 && (Le & 6) === 0 && Gr();
    var t = Le;
    Le |= 1;
    var n = $t.transition, r = De;
    try {
      if ($t.transition = null, De = 1, e) return e();
    } finally {
      De = r, $t.transition = n, Le = t, (Le & 6) === 0 && Dn();
    }
  }
  function wu() {
    jt = Wr.current, Qe(Wr);
  }
  function pr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jp(n)), et !== null) for (n = et.return; n !== null; ) {
      var r = n;
      switch (Ol(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Uo();
          break;
        case 3:
          Vr(), Qe(_t), Qe(ht), Bl();
          break;
        case 5:
          bl(r);
          break;
        case 4:
          Vr();
          break;
        case 13:
          Qe(qe);
          break;
        case 19:
          Qe(qe);
          break;
        case 10:
          Fl(r.type._context);
          break;
        case 22:
        case 23:
          wu();
      }
      n = n.return;
    }
    if (lt = e, et = e = qn(e.current, null), ft = jt = t, rt = 0, Xi = null, du = as = dr = 0, Rt = Ji = null, ar !== null) {
      for (t = 0; t < ar.length; t++) if (n = ar[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, u = n.pending;
        if (u !== null) {
          var c = u.next;
          u.next = o, r.next = c;
        }
        n.pending = r;
      }
      ar = null;
    }
    return e;
  }
  function Gf(e, t) {
    do {
      var n = et;
      try {
        if (Al(), Jo.current = ns, Zo) {
          for (var r = Ke.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Zo = !1;
        }
        if (fr = 0, st = nt = Ke = null, Vi = !1, qi = 0, fu.current = null, n === null || n.return === null) {
          rt = 1, Xi = t, et = null;
          break;
        }
        e: {
          var u = e, c = n.return, y = n, S = t;
          if (t = ft, y.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
            var j = S, Y = y, J = Y.tag;
            if ((Y.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
              var W = Y.alternate;
              W ? (Y.updateQueue = W.updateQueue, Y.memoizedState = W.memoizedState, Y.lanes = W.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var ae = xf(c);
            if (ae !== null) {
              ae.flags &= -257, kf(ae, c, y, u, t), ae.mode & 1 && Sf(u, j, t), t = ae, S = j;
              var fe = t.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(S), t.updateQueue = he;
              } else fe.add(S);
              break e;
            } else {
              if ((t & 1) === 0) {
                Sf(u, j, t), Su();
                break e;
              }
              S = Error(l(426));
            }
          } else if (Ve && y.mode & 1) {
            var Je = xf(c);
            if (Je !== null) {
              (Je.flags & 65536) === 0 && (Je.flags |= 256), kf(Je, c, y, u, t), Nl(qr(S, y));
              break e;
            }
          }
          u = S = qr(S, y), rt !== 4 && (rt = 2), Ji === null ? Ji = [u] : Ji.push(u), u = c;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var I = vf(u, S, t);
                Hc(u, I);
                break e;
              case 1:
                y = S;
                var _ = u.type, A = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || A !== null && typeof A.componentDidCatch == "function" && ($n === null || !$n.has(A)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var re = wf(u, y, t);
                  Hc(u, re);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Zf(n);
      } catch (ye) {
        t = ye, et === n && n !== null && (et = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xf() {
    var e = us.current;
    return us.current = ns, e === null ? ns : e;
  }
  function Su() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4), lt === null || (dr & 268435455) === 0 && (as & 268435455) === 0 || Vn(lt, ft);
  }
  function ms(e, t) {
    var n = Le;
    Le |= 2;
    var r = Xf();
    (lt !== e || ft !== t) && (_n = null, pr(e, t));
    do
      try {
        lm();
        break;
      } catch (o) {
        Gf(e, o);
      }
    while (!0);
    if (Al(), Le = n, us.current = r, et !== null) throw Error(l(261));
    return lt = null, ft = 0, rt;
  }
  function lm() {
    for (; et !== null; ) Jf(et);
  }
  function um() {
    for (; et !== null && !Ah(); ) Jf(et);
  }
  function Jf(e) {
    var t = nd(e.alternate, e, jt);
    e.memoizedProps = e.pendingProps, t === null ? Zf(e) : et = t, fu.current = null;
  }
  function Zf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = em(n, t, jt), n !== null) {
          et = n;
          return;
        }
      } else {
        if (n = tm(n, t), n !== null) {
          n.flags &= 32767, et = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          rt = 6, et = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        et = t;
        return;
      }
      et = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function mr(e, t, n) {
    var r = De, o = $t.transition;
    try {
      $t.transition = null, De = 1, am(e, t, n, r);
    } finally {
      $t.transition = o, De = r;
    }
    return null;
  }
  function am(e, t, n, r) {
    do
      Gr();
    while (Qn !== null);
    if ((Le & 6) !== 0) throw Error(l(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Qh(e, u), e === lt && (et = lt = null, ft = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || fs || (fs = !0, rd(wo, function() {
      return Gr(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = $t.transition, $t.transition = null;
      var c = De;
      De = 1;
      var y = Le;
      Le |= 4, fu.current = null, rm(e, n), Qf(n, e), Tp(Sl), Po = !!wl, Sl = wl = null, e.current = n, im(n), Fh(), Le = y, De = c, $t.transition = u;
    } else e.current = n;
    if (fs && (fs = !1, Qn = e, ds = o), u = e.pendingLanes, u === 0 && ($n = null), zh(n.stateNode), Ot(e, Xe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (cs) throw cs = !1, e = pu, pu = null, e;
    return (ds & 1) !== 0 && e.tag !== 0 && Gr(), u = e.pendingLanes, (u & 1) !== 0 ? e === mu ? Zi++ : (Zi = 0, mu = e) : Zi = 0, Dn(), null;
  }
  function Gr() {
    if (Qn !== null) {
      var e = Ua(ds), t = $t.transition, n = De;
      try {
        if ($t.transition = null, De = 16 > e ? 16 : e, Qn === null) var r = !1;
        else {
          if (e = Qn, Qn = null, ds = 0, (Le & 6) !== 0) throw Error(l(331));
          var o = Le;
          for (Le |= 4, ce = e.current; ce !== null; ) {
            var u = ce, c = u.child;
            if ((ce.flags & 16) !== 0) {
              var y = u.deletions;
              if (y !== null) {
                for (var S = 0; S < y.length; S++) {
                  var j = y[S];
                  for (ce = j; ce !== null; ) {
                    var Y = ce;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gi(8, Y, u);
                    }
                    var J = Y.child;
                    if (J !== null) J.return = Y, ce = J;
                    else for (; ce !== null; ) {
                      Y = ce;
                      var W = Y.sibling, ae = Y.return;
                      if (Df(Y), Y === j) {
                        ce = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = ae, ce = W;
                        break;
                      }
                      ce = ae;
                    }
                  }
                }
                var fe = u.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var Je = he.sibling;
                      he.sibling = null, he = Je;
                    } while (he !== null);
                  }
                }
                ce = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && c !== null) c.return = u, ce = c;
            else e: for (; ce !== null; ) {
              if (u = ce, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Gi(9, u, u.return);
              }
              var I = u.sibling;
              if (I !== null) {
                I.return = u.return, ce = I;
                break e;
              }
              ce = u.return;
            }
          }
          var _ = e.current;
          for (ce = _; ce !== null; ) {
            c = ce;
            var A = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && A !== null) A.return = c, ce = A;
            else e: for (c = _; ce !== null; ) {
              if (y = ce, (y.flags & 2048) !== 0) try {
                switch (y.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ls(9, y);
                }
              } catch (ye) {
                Ye(y, y.return, ye);
              }
              if (y === c) {
                ce = null;
                break e;
              }
              var re = y.sibling;
              if (re !== null) {
                re.return = y.return, ce = re;
                break e;
              }
              ce = y.return;
            }
          }
          if (Le = o, Dn(), rn && typeof rn.onPostCommitFiberRoot == "function") try {
            rn.onPostCommitFiberRoot(So, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        De = n, $t.transition = t;
      }
    }
    return !1;
  }
  function ed(e, t, n) {
    t = qr(n, t), t = vf(e, t, 1), e = Un(e, t, 1), t = St(), e !== null && (Ei(e, 1, t), Ot(e, t));
  }
  function Ye(e, t, n) {
    if (e.tag === 3) ed(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
          e = qr(n, e), e = wf(t, e, 1), t = Un(t, e, 1), e = St(), t !== null && (Ei(t, 1, e), Ot(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function cm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = St(), e.pingedLanes |= e.suspendedLanes & n, lt === e && (ft & n) === n && (rt === 4 || rt === 3 && (ft & 130023424) === ft && 500 > Xe() - hu ? pr(e, 0) : du |= n), Ot(e, t);
  }
  function td(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ko, ko <<= 1, (ko & 130023424) === 0 && (ko = 4194304)));
    var n = St();
    e = xn(e, t), e !== null && (Ei(e, t, n), Ot(e, n));
  }
  function fm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), td(e, n);
  }
  function dm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), td(e, n);
  }
  var nd;
  nd = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || _t.current) Pt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Pt = !1, Zp(e, t, n);
      Pt = (e.flags & 131072) !== 0;
    }
    else Pt = !1, Ve && (t.flags & 1048576) !== 0 && Fc(t, Ho, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        os(e, t), e = t.pendingProps;
        var o = Dr(t, ht.current);
        Hr(t, n), o = Hl(null, t, r, e, o, n);
        var u = Vl();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ct(r) ? (u = !0, Bo(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, zl(t), o.updater = rs, t.stateNode = o, o._reactInternals = t, Xl(t, r, e, n), t = tu(null, t, r, !0, u, n)) : (t.tag = 0, Ve && u && Rl(t), wt(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (os(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = pm(r), e = Gt(r, e), o) {
            case 0:
              t = eu(null, t, r, e, n);
              break e;
            case 1:
              t = Of(null, t, r, e, n);
              break e;
            case 11:
              t = Ef(null, t, r, e, n);
              break e;
            case 14:
              t = _f(null, t, r, Gt(r.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), eu(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Of(e, t, r, o, n);
      case 3:
        e: {
          if (Tf(t), e === null) throw Error(l(387));
          r = t.pendingProps, u = t.memoizedState, o = u.element, Qc(e, t), Go(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = qr(Error(l(423)), t), t = If(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = qr(Error(l(424)), t), t = If(e, t, r, n, o);
            break e;
          } else for (Mt = Mn(t.stateNode.containerInfo.firstChild), Ft = t, Ve = !0, Yt = null, n = Bc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Br(), r === o) {
              t = En(e, t, n);
              break e;
            }
            wt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return qc(t), e === null && Il(t), r = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, c = o.children, xl(r, o) ? c = null : u !== null && xl(r, u) && (t.flags |= 32), Rf(e, t), wt(e, t, c, n), t.child;
      case 6:
        return e === null && Il(t), null;
      case 13:
        return Nf(e, t, n);
      case 4:
        return Dl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $r(t, null, r, n) : wt(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), Ef(e, t, r, o, n);
      case 7:
        return wt(e, t, t.pendingProps, n), t.child;
      case 8:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return wt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, u = t.memoizedProps, c = o.value, be(Ko, r._currentValue), r._currentValue = c, u !== null) if (Wt(u.value, c)) {
            if (u.children === o.children && !_t.current) {
              t = En(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var y = u.dependencies;
            if (y !== null) {
              c = u.child;
              for (var S = y.firstContext; S !== null; ) {
                if (S.context === r) {
                  if (u.tag === 1) {
                    S = kn(-1, n & -n), S.tag = 2;
                    var j = u.updateQueue;
                    if (j !== null) {
                      j = j.shared;
                      var Y = j.pending;
                      Y === null ? S.next = S : (S.next = Y.next, Y.next = S), j.pending = S;
                    }
                  }
                  u.lanes |= n, S = u.alternate, S !== null && (S.lanes |= n), Ml(
                    u.return,
                    n,
                    t
                  ), y.lanes |= n;
                  break;
                }
                S = S.next;
              }
            } else if (u.tag === 10) c = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (c = u.return, c === null) throw Error(l(341));
              c.lanes |= n, y = c.alternate, y !== null && (y.lanes |= n), Ml(c, n, t), c = u.sibling;
            } else c = u.child;
            if (c !== null) c.return = u;
            else for (c = u; c !== null; ) {
              if (c === t) {
                c = null;
                break;
              }
              if (u = c.sibling, u !== null) {
                u.return = c.return, c = u;
                break;
              }
              c = c.return;
            }
            u = c;
          }
          wt(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Hr(t, n), o = Ut(o), r = r(o), t.flags |= 1, wt(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = Gt(r, t.pendingProps), o = Gt(r.type, o), _f(e, t, r, o, n);
      case 15:
        return Cf(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Gt(r, o), os(e, t), t.tag = 1, Ct(r) ? (e = !0, Bo(t)) : e = !1, Hr(t, n), yf(t, r, o), Xl(t, r, o, n), tu(null, t, r, !0, e, n);
      case 19:
        return Af(e, t, n);
      case 22:
        return Pf(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function rd(e, t) {
    return Ma(e, t);
  }
  function hm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qt(e, t, n, r) {
    return new hm(e, t, n, r);
  }
  function xu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function pm(e) {
    if (typeof e == "function") return xu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === N) return 11;
      if (e === ve) return 14;
    }
    return 2;
  }
  function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ys(e, t, n, r, o, u) {
    var c = 2;
    if (r = e, typeof e == "function") xu(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else e: switch (e) {
      case R:
        return yr(n.children, o, u, t);
      case h:
        c = 8, o |= 8;
        break;
      case g:
        return e = Qt(12, n, t, o | 2), e.elementType = g, e.lanes = u, e;
      case me:
        return e = Qt(13, n, t, o), e.elementType = me, e.lanes = u, e;
      case de:
        return e = Qt(19, n, t, o), e.elementType = de, e.lanes = u, e;
      case _e:
        return gs(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case p:
            c = 10;
            break e;
          case T:
            c = 9;
            break e;
          case N:
            c = 11;
            break e;
          case ve:
            c = 14;
            break e;
          case oe:
            c = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = Qt(c, n, t, o), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function yr(e, t, n, r) {
    return e = Qt(7, e, r, t), e.lanes = n, e;
  }
  function gs(e, t, n, r) {
    return e = Qt(22, e, r, t), e.elementType = _e, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function ku(e, t, n) {
    return e = Qt(6, e, null, t), e.lanes = n, e;
  }
  function Eu(e, t, n) {
    return t = Qt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function mm(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gs(0), this.expirationTimes = Gs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function _u(e, t, n, r, o, u, c, y, S) {
    return e = new mm(e, t, n, y, S), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Qt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, zl(u), e;
  }
  function ym(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: x, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function id(e) {
    if (!e) return zn;
    e = e._reactInternals;
    e: {
      if (ir(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ct(n)) return Nc(e, n, t);
    }
    return t;
  }
  function od(e, t, n, r, o, u, c, y, S) {
    return e = _u(n, r, !0, e, o, u, c, y, S), e.context = id(null), n = e.current, r = St(), o = Hn(n), u = kn(r, o), u.callback = t ?? null, Un(n, u, o), e.current.lanes = o, Ei(e, o, r), Ot(e, r), e;
  }
  function vs(e, t, n, r) {
    var o = t.current, u = St(), c = Hn(o);
    return n = id(n), t.context === null ? t.context = n : t.pendingContext = n, t = kn(u, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Un(o, t, c), e !== null && (Zt(e, o, c, u), Yo(e, o, c)), c;
  }
  function ws(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function sd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Cu(e, t) {
    sd(e, t), (e = e.alternate) && sd(e, t);
  }
  function gm() {
    return null;
  }
  var ld = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Pu(e) {
    this._internalRoot = e;
  }
  Ss.prototype.render = Pu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    vs(e, t, null, null);
  }, Ss.prototype.unmount = Pu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      hr(function() {
        vs(null, e, null, null);
      }), t[gn] = null;
    }
  };
  function Ss(e) {
    this._internalRoot = e;
  }
  Ss.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Qa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++) ;
      Ln.splice(n, 0, e), n === 0 && qa(e);
    }
  };
  function Ru(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ud() {
  }
  function vm(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var j = ws(c);
          u.call(j);
        };
      }
      var c = od(t, r, e, 0, null, !1, !1, "", ud);
      return e._reactRootContainer = c, e[gn] = c.current, zi(e.nodeType === 8 ? e.parentNode : e), hr(), c;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var y = r;
      r = function() {
        var j = ws(S);
        y.call(j);
      };
    }
    var S = _u(e, 0, !1, null, null, !1, !1, "", ud);
    return e._reactRootContainer = S, e[gn] = S.current, zi(e.nodeType === 8 ? e.parentNode : e), hr(function() {
      vs(t, S, n, r);
    }), S;
  }
  function ks(e, t, n, r, o) {
    var u = n._reactRootContainer;
    if (u) {
      var c = u;
      if (typeof o == "function") {
        var y = o;
        o = function() {
          var S = ws(c);
          y.call(S);
        };
      }
      vs(t, c, e, o);
    } else c = vm(n, t, e, o, r);
    return ws(c);
  }
  Ba = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ki(t.pendingLanes);
          n !== 0 && (Xs(t, n | 1), Ot(t, Xe()), (Le & 6) === 0 && (Yr = Xe() + 500, Dn()));
        }
        break;
      case 13:
        hr(function() {
          var r = xn(e, 1);
          if (r !== null) {
            var o = St();
            Zt(r, e, 1, o);
          }
        }), Cu(e, 1);
    }
  }, Js = function(e) {
    if (e.tag === 13) {
      var t = xn(e, 134217728);
      if (t !== null) {
        var n = St();
        Zt(t, e, 134217728, n);
      }
      Cu(e, 134217728);
    }
  }, $a = function(e) {
    if (e.tag === 13) {
      var t = Hn(e), n = xn(e, t);
      if (n !== null) {
        var r = St();
        Zt(n, e, t, r);
      }
      Cu(e, t);
    }
  }, Qa = function() {
    return De;
  }, Ha = function(e, t) {
    var n = De;
    try {
      return De = e, t();
    } finally {
      De = n;
    }
  }, Hs = function(e, t, n) {
    switch (t) {
      case "input":
        if (We(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = bo(r);
              if (!o) throw Error(l(90));
              X(r), We(r, o);
            }
          }
        }
        break;
      case "textarea":
        yi(e, n);
        break;
      case "select":
        t = n.value, t != null && Be(e, !!n.multiple, t, !1);
    }
  }, Oa = vu, Ta = hr;
  var wm = { usingClientEntryPoint: !1, Events: [Ui, jr, bo, Pa, Ra, vu] }, eo = { findFiberByHostInstance: or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: eo.bundleType, version: eo.version, rendererPackageName: eo.rendererPackageName, rendererConfig: eo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Aa(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: eo.findFiberByHostInstance || gm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Es.isDisabled && Es.supportsFiber) try {
      So = Es.inject(Sm), rn = Es;
    } catch {
    }
  }
  return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm, Tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ru(t)) throw Error(l(200));
    return ym(e, t, null, n);
  }, Tt.createRoot = function(e, t) {
    if (!Ru(e)) throw Error(l(299));
    var n = !1, r = "", o = ld;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _u(e, 1, !1, null, null, n, !1, r, o), e[gn] = t.current, zi(e.nodeType === 8 ? e.parentNode : e), new Pu(t);
  }, Tt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Aa(t), e = e === null ? null : e.stateNode, e;
  }, Tt.flushSync = function(e) {
    return hr(e);
  }, Tt.hydrate = function(e, t, n) {
    if (!xs(t)) throw Error(l(200));
    return ks(null, e, t, !0, n);
  }, Tt.hydrateRoot = function(e, t, n) {
    if (!Ru(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, o = !1, u = "", c = ld;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, o, !1, u, c), e[gn] = t.current, zi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Ss(t);
  }, Tt.render = function(e, t, n) {
    if (!xs(t)) throw Error(l(200));
    return ks(null, e, t, !1, n);
  }, Tt.unmountComponentAtNode = function(e) {
    if (!xs(e)) throw Error(l(40));
    return e._reactRootContainer ? (hr(function() {
      ks(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gn] = null;
      });
    }), !0) : !1;
  }, Tt.unstable_batchedUpdates = vu, Tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!xs(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return ks(e, t, n, !1, r);
  }, Tt.version = "18.3.1-next-f1338f8080-20240426", Tt;
}
var zd;
function n1() {
  if (zd) return ju.exports;
  zd = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), ju.exports = t1(), ju.exports;
}
var Dd;
function r1() {
  if (Dd) return Rs;
  Dd = 1;
  var s = n1();
  return Rs.createRoot = s.createRoot, Rs.hydrateRoot = s.hydrateRoot, Rs;
}
var i1 = r1();
const bu = "oms_token", _h = pe.createContext(void 0), o1 = () => {
  const s = io.useContext(_h);
  if (!s)
    throw new Error("useAuth must be used within an AuthProvider");
  if (s.loading === !0 || !(s != null && s.token))
    throw new Promise((i) => setTimeout(i, 0));
  return s;
}, s1 = ({ children: s }) => {
  const [i, l] = pe.useState(!1), [a, d] = pe.useState(null), [v, O] = pe.useState(null), M = () => {
    fetch("/ajax/oms/OMS_auth.cm").then((D) => {
      if (!D.ok)
        throw new Error("Network response was not ok");
      return D.json();
    }).then((D) => {
      if (!D.token)
        throw new Error("No token");
      window.sessionStorage.setItem(bu, D.token), d(D.token), l(!1), O(null);
    }).catch((D) => {
      D instanceof Error && O(D), console.error(D);
    }), l(!0), O(null), d(null);
  };
  if (pe.useEffect(() => {
    (async () => {
      try {
        l(!0);
        const V = window.sessionStorage.getItem(bu) || window.localStorage.getItem(bu) || await fetch("/ajax/oms/OMS_auth.cm").then((K) => K.json()).then(({ token: K }) => K);
        if (!V)
          throw new Error("No token");
        d(V);
      } catch (V) {
        V instanceof Error && O(V), console.error(V);
      } finally {
        l(!1);
      }
    })();
  }, []), v)
    throw v;
  return /* @__PURE__ */ Pe(_h.Provider, { value: { loading: i, token: a, refresh: M }, children: s });
};
function Os(s) {
  throw new Error('Could not dynamically require "' + s + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Uu = { exports: {} }, bd;
function l1() {
  return bd || (bd = 1, function(s, i) {
    (function(l) {
      s.exports = l();
    })(function() {
      return function l(a, d, v) {
        function O(V, K) {
          if (!d[V]) {
            if (!a[V]) {
              var U = typeof Os == "function" && Os;
              if (!K && U) return U(V, !0);
              if (M) return M(V, !0);
              throw new Error("Cannot find module '" + V + "'");
            }
            K = d[V] = { exports: {} }, a[V][0].call(K.exports, function(ne) {
              var ie = a[V][1][ne];
              return O(ie || ne);
            }, K, K.exports, l, a, d, v);
          }
          return d[V].exports;
        }
        for (var M = typeof Os == "function" && Os, D = 0; D < v.length; D++) O(v[D]);
        return O;
      }({ 1: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          var z = l("crypto");
          function L(x, R) {
            R = H(x, R);
            var h;
            return (h = R.algorithm !== "passthrough" ? z.createHash(R.algorithm) : new F()).write === void 0 && (h.write = h.update, h.end = h.update), $(R, h).dispatch(x), h.update || h.end(""), h.digest ? h.digest(R.encoding === "buffer" ? void 0 : R.encoding) : (x = h.read(), R.encoding !== "buffer" ? x.toString(R.encoding) : x);
          }
          (d = a.exports = L).sha1 = function(x) {
            return L(x);
          }, d.keys = function(x) {
            return L(x, { excludeValues: !0, algorithm: "sha1", encoding: "hex" });
          }, d.MD5 = function(x) {
            return L(x, { algorithm: "md5", encoding: "hex" });
          }, d.keysMD5 = function(x) {
            return L(x, { algorithm: "md5", encoding: "hex", excludeValues: !0 });
          };
          var k = z.getHashes ? z.getHashes().slice() : ["sha1", "md5"], B = (k.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function H(x, R) {
            var h = {};
            if (h.algorithm = (R = R || {}).algorithm || "sha1", h.encoding = R.encoding || "hex", h.excludeValues = !!R.excludeValues, h.algorithm = h.algorithm.toLowerCase(), h.encoding = h.encoding.toLowerCase(), h.ignoreUnknown = R.ignoreUnknown === !0, h.respectType = R.respectType !== !1, h.respectFunctionNames = R.respectFunctionNames !== !1, h.respectFunctionProperties = R.respectFunctionProperties !== !1, h.unorderedArrays = R.unorderedArrays === !0, h.unorderedSets = R.unorderedSets !== !1, h.unorderedObjects = R.unorderedObjects !== !1, h.replacer = R.replacer || void 0, h.excludeKeys = R.excludeKeys || void 0, x === void 0) throw new Error("Object argument required.");
            for (var g = 0; g < k.length; ++g) k[g].toLowerCase() === h.algorithm.toLowerCase() && (h.algorithm = k[g]);
            if (k.indexOf(h.algorithm) === -1) throw new Error('Algorithm "' + h.algorithm + '"  not supported. supported values: ' + k.join(", "));
            if (B.indexOf(h.encoding) === -1 && h.algorithm !== "passthrough") throw new Error('Encoding "' + h.encoding + '"  not supported. supported values: ' + B.join(", "));
            return h;
          }
          function b(x) {
            if (typeof x == "function") return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(x)) != null;
          }
          function $(x, R, h) {
            h = h || [];
            function g(p) {
              return R.update ? R.update(p, "utf8") : R.write(p, "utf8");
            }
            return { dispatch: function(p) {
              return this["_" + ((p = x.replacer ? x.replacer(p) : p) === null ? "null" : typeof p)](p);
            }, _object: function(p) {
              var T, N = Object.prototype.toString.call(p), me = /\[object (.*)\]/i.exec(N);
              if (me = (me = me ? me[1] : "unknown:[" + N + "]").toLowerCase(), 0 <= (N = h.indexOf(p))) return this.dispatch("[CIRCULAR:" + N + "]");
              if (h.push(p), M !== void 0 && M.isBuffer && M.isBuffer(p)) return g("buffer:"), g(p);
              if (me === "object" || me === "function" || me === "asyncfunction") return N = Object.keys(p), x.unorderedObjects && (N = N.sort()), x.respectType === !1 || b(p) || N.splice(0, 0, "prototype", "__proto__", "constructor"), x.excludeKeys && (N = N.filter(function(de) {
                return !x.excludeKeys(de);
              })), g("object:" + N.length + ":"), T = this, N.forEach(function(de) {
                T.dispatch(de), g(":"), x.excludeValues || T.dispatch(p[de]), g(",");
              });
              if (!this["_" + me]) {
                if (x.ignoreUnknown) return g("[" + me + "]");
                throw new Error('Unknown object type "' + me + '"');
              }
              this["_" + me](p);
            }, _array: function(p, de) {
              de = de !== void 0 ? de : x.unorderedArrays !== !1;
              var N = this;
              if (g("array:" + p.length + ":"), !de || p.length <= 1) return p.forEach(function(ve) {
                return N.dispatch(ve);
              });
              var me = [], de = p.map(function(ve) {
                var oe = new F(), _e = h.slice();
                return $(x, oe, _e).dispatch(ve), me = me.concat(_e.slice(h.length)), oe.read().toString();
              });
              return h = h.concat(me), de.sort(), this._array(de, !1);
            }, _date: function(p) {
              return g("date:" + p.toJSON());
            }, _symbol: function(p) {
              return g("symbol:" + p.toString());
            }, _error: function(p) {
              return g("error:" + p.toString());
            }, _boolean: function(p) {
              return g("bool:" + p.toString());
            }, _string: function(p) {
              g("string:" + p.length + ":"), g(p.toString());
            }, _function: function(p) {
              g("fn:"), b(p) ? this.dispatch("[native]") : this.dispatch(p.toString()), x.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(p.name)), x.respectFunctionProperties && this._object(p);
            }, _number: function(p) {
              return g("number:" + p.toString());
            }, _xml: function(p) {
              return g("xml:" + p.toString());
            }, _null: function() {
              return g("Null");
            }, _undefined: function() {
              return g("Undefined");
            }, _regexp: function(p) {
              return g("regex:" + p.toString());
            }, _uint8array: function(p) {
              return g("uint8array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _uint8clampedarray: function(p) {
              return g("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(p));
            }, _int8array: function(p) {
              return g("int8array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _uint16array: function(p) {
              return g("uint16array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _int16array: function(p) {
              return g("int16array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _uint32array: function(p) {
              return g("uint32array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _int32array: function(p) {
              return g("int32array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _float32array: function(p) {
              return g("float32array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _float64array: function(p) {
              return g("float64array:"), this.dispatch(Array.prototype.slice.call(p));
            }, _arraybuffer: function(p) {
              return g("arraybuffer:"), this.dispatch(new Uint8Array(p));
            }, _url: function(p) {
              return g("url:" + p.toString());
            }, _map: function(p) {
              return g("map:"), p = Array.from(p), this._array(p, x.unorderedSets !== !1);
            }, _set: function(p) {
              return g("set:"), p = Array.from(p), this._array(p, x.unorderedSets !== !1);
            }, _file: function(p) {
              return g("file:"), this.dispatch([p.name, p.size, p.type, p.lastModfied]);
            }, _blob: function() {
              if (x.ignoreUnknown) return g("[blob]");
              throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
            }, _domwindow: function() {
              return g("domwindow");
            }, _bigint: function(p) {
              return g("bigint:" + p.toString());
            }, _process: function() {
              return g("process");
            }, _timer: function() {
              return g("timer");
            }, _pipe: function() {
              return g("pipe");
            }, _tcp: function() {
              return g("tcp");
            }, _udp: function() {
              return g("udp");
            }, _tty: function() {
              return g("tty");
            }, _statwatcher: function() {
              return g("statwatcher");
            }, _securecontext: function() {
              return g("securecontext");
            }, _connection: function() {
              return g("connection");
            }, _zlib: function() {
              return g("zlib");
            }, _context: function() {
              return g("context");
            }, _nodescript: function() {
              return g("nodescript");
            }, _httpparser: function() {
              return g("httpparser");
            }, _dataview: function() {
              return g("dataview");
            }, _signal: function() {
              return g("signal");
            }, _fsevent: function() {
              return g("fsevent");
            }, _tlswrap: function() {
              return g("tlswrap");
            } };
          }
          function F() {
            return { buf: "", write: function(x) {
              this.buf += x;
            }, end: function(x) {
              this.buf += x;
            }, read: function() {
              return this.buf;
            } };
          }
          d.writeToStream = function(x, R, h) {
            return h === void 0 && (h = R, R = {}), $(R = H(x, R), h).dispatch(x);
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          (function(z) {
            var L = typeof Uint8Array < "u" ? Uint8Array : Array, k = 43, B = 47, H = 48, b = 97, $ = 65, F = 45, x = 95;
            function R(h) {
              return h = h.charCodeAt(0), h === k || h === F ? 62 : h === B || h === x ? 63 : h < H ? -1 : h < H + 10 ? h - H + 26 + 26 : h < $ + 26 ? h - $ : h < b + 26 ? h - b + 26 : void 0;
            }
            z.toByteArray = function(h) {
              var g, p;
              if (0 < h.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var T = h.length, T = h.charAt(T - 2) === "=" ? 2 : h.charAt(T - 1) === "=" ? 1 : 0, N = new L(3 * h.length / 4 - T), me = 0 < T ? h.length - 4 : h.length, de = 0;
              function ve(oe) {
                N[de++] = oe;
              }
              for (g = 0; g < me; g += 4, 0) ve((16711680 & (p = R(h.charAt(g)) << 18 | R(h.charAt(g + 1)) << 12 | R(h.charAt(g + 2)) << 6 | R(h.charAt(g + 3)))) >> 16), ve((65280 & p) >> 8), ve(255 & p);
              return T == 2 ? ve(255 & (p = R(h.charAt(g)) << 2 | R(h.charAt(g + 1)) >> 4)) : T == 1 && (ve((p = R(h.charAt(g)) << 10 | R(h.charAt(g + 1)) << 4 | R(h.charAt(g + 2)) >> 2) >> 8 & 255), ve(255 & p)), N;
            }, z.fromByteArray = function(h) {
              var g, p, T, N, me = h.length % 3, de = "";
              function ve(oe) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(oe);
              }
              for (g = 0, T = h.length - me; g < T; g += 3) p = (h[g] << 16) + (h[g + 1] << 8) + h[g + 2], de += ve((N = p) >> 18 & 63) + ve(N >> 12 & 63) + ve(N >> 6 & 63) + ve(63 & N);
              switch (me) {
                case 1:
                  de = (de += ve((p = h[h.length - 1]) >> 2)) + ve(p << 4 & 63) + "==";
                  break;
                case 2:
                  de = (de = (de += ve((p = (h[h.length - 2] << 8) + h[h.length - 1]) >> 10)) + ve(p >> 4 & 63)) + ve(p << 2 & 63) + "=";
              }
              return de;
            };
          })(d === void 0 ? this.base64js = {} : d);
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(l, a, d) {
        (function(v, O, k, D, V, K, U, ne, ie) {
          var z = l("base64-js"), L = l("ieee754");
          function k(f, m, P) {
            if (!(this instanceof k)) return new k(f, m, P);
            var X, G, le, Te, Ue = typeof f;
            if (m === "base64" && Ue == "string") for (f = (Te = f).trim ? Te.trim() : Te.replace(/^\s+|\s+$/g, ""); f.length % 4 != 0; ) f += "=";
            if (Ue == "number") X = ee(f);
            else if (Ue == "string") X = k.byteLength(f, m);
            else {
              if (Ue != "object") throw new Error("First argument needs to be a number, array or string.");
              X = ee(f.length);
            }
            if (k._useTypedArrays ? G = k._augment(new Uint8Array(X)) : ((G = this).length = X, G._isBuffer = !0), k._useTypedArrays && typeof f.byteLength == "number") G._set(f);
            else if (se(Te = f) || k.isBuffer(Te) || Te && typeof Te == "object" && typeof Te.length == "number") for (le = 0; le < X; le++) k.isBuffer(f) ? G[le] = f.readUInt8(le) : G[le] = f[le];
            else if (Ue == "string") G.write(f, 0, m);
            else if (Ue == "number" && !k._useTypedArrays && !P) for (le = 0; le < X; le++) G[le] = 0;
            return G;
          }
          function B(f, m, P, X) {
            return k._charsWritten = q(function(G) {
              for (var le = [], Te = 0; Te < G.length; Te++) le.push(255 & G.charCodeAt(Te));
              return le;
            }(m), f, P, X);
          }
          function H(f, m, P, X) {
            return k._charsWritten = q(function(G) {
              for (var le, Te, Ue = [], We = 0; We < G.length; We++) Te = G.charCodeAt(We), le = Te >> 8, Te = Te % 256, Ue.push(Te), Ue.push(le);
              return Ue;
            }(m), f, P, X);
          }
          function b(f, m, P) {
            var X = "";
            P = Math.min(f.length, P);
            for (var G = m; G < P; G++) X += String.fromCharCode(f[G]);
            return X;
          }
          function $(f, m, P, le) {
            le || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m != null, "missing offset"), Q(m + 1 < f.length, "Trying to read beyond buffer length"));
            var G, le = f.length;
            if (!(le <= m)) return P ? (G = f[m], m + 1 < le && (G |= f[m + 1] << 8)) : (G = f[m] << 8, m + 1 < le && (G |= f[m + 1])), G;
          }
          function F(f, m, P, le) {
            le || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m != null, "missing offset"), Q(m + 3 < f.length, "Trying to read beyond buffer length"));
            var G, le = f.length;
            if (!(le <= m)) return P ? (m + 2 < le && (G = f[m + 2] << 16), m + 1 < le && (G |= f[m + 1] << 8), G |= f[m], m + 3 < le && (G += f[m + 3] << 24 >>> 0)) : (m + 1 < le && (G = f[m + 1] << 16), m + 2 < le && (G |= f[m + 2] << 8), m + 3 < le && (G |= f[m + 3]), G += f[m] << 24 >>> 0), G;
          }
          function x(f, m, P, X) {
            if (X || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m != null, "missing offset"), Q(m + 1 < f.length, "Trying to read beyond buffer length")), !(f.length <= m)) return X = $(f, m, P, !0), 32768 & X ? -1 * (65535 - X + 1) : X;
          }
          function R(f, m, P, X) {
            if (X || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m != null, "missing offset"), Q(m + 3 < f.length, "Trying to read beyond buffer length")), !(f.length <= m)) return X = F(f, m, P, !0), 2147483648 & X ? -1 * (4294967295 - X + 1) : X;
          }
          function h(f, m, P, X) {
            return X || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m + 3 < f.length, "Trying to read beyond buffer length")), L.read(f, m, P, 23, 4);
          }
          function g(f, m, P, X) {
            return X || (Q(typeof P == "boolean", "missing or invalid endian"), Q(m + 7 < f.length, "Trying to read beyond buffer length")), L.read(f, m, P, 52, 8);
          }
          function p(f, m, P, X, G) {
            if (G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 1 < f.length, "trying to write beyond buffer length"), ge(m, 65535)), G = f.length, !(G <= P)) for (var le = 0, Te = Math.min(G - P, 2); le < Te; le++) f[P + le] = (m & 255 << 8 * (X ? le : 1 - le)) >>> 8 * (X ? le : 1 - le);
          }
          function T(f, m, P, X, G) {
            if (G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 3 < f.length, "trying to write beyond buffer length"), ge(m, 4294967295)), G = f.length, !(G <= P)) for (var le = 0, Te = Math.min(G - P, 4); le < Te; le++) f[P + le] = m >>> 8 * (X ? le : 3 - le) & 255;
          }
          function N(f, m, P, X, G) {
            G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 1 < f.length, "Trying to write beyond buffer length"), Ee(m, 32767, -32768)), f.length <= P || p(f, 0 <= m ? m : 65535 + m + 1, P, X, G);
          }
          function me(f, m, P, X, G) {
            G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 3 < f.length, "Trying to write beyond buffer length"), Ee(m, 2147483647, -2147483648)), f.length <= P || T(f, 0 <= m ? m : 4294967295 + m + 1, P, X, G);
          }
          function de(f, m, P, X, G) {
            G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 3 < f.length, "Trying to write beyond buffer length"), Se(m, 34028234663852886e22, -34028234663852886e22)), f.length <= P || L.write(f, m, P, X, 23, 4);
          }
          function ve(f, m, P, X, G) {
            G || (Q(m != null, "missing value"), Q(typeof X == "boolean", "missing or invalid endian"), Q(P != null, "missing offset"), Q(P + 7 < f.length, "Trying to write beyond buffer length"), Se(m, 17976931348623157e292, -17976931348623157e292)), f.length <= P || L.write(f, m, P, X, 52, 8);
          }
          d.Buffer = k, d.SlowBuffer = k, d.INSPECT_MAX_BYTES = 50, k.poolSize = 8192, k._useTypedArrays = function() {
            try {
              var f = new ArrayBuffer(0), m = new Uint8Array(f);
              return m.foo = function() {
                return 42;
              }, m.foo() === 42 && typeof m.subarray == "function";
            } catch {
              return !1;
            }
          }(), k.isEncoding = function(f) {
            switch (String(f).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }, k.isBuffer = function(f) {
            return !(f == null || !f._isBuffer);
          }, k.byteLength = function(f, m) {
            var P;
            switch (f += "", m || "utf8") {
              case "hex":
                P = f.length / 2;
                break;
              case "utf8":
              case "utf-8":
                P = C(f).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                P = f.length;
                break;
              case "base64":
                P = E(f).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                P = 2 * f.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return P;
          }, k.concat = function(f, m) {
            if (Q(se(f), `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`), f.length === 0) return new k(0);
            if (f.length === 1) return f[0];
            if (typeof m != "number") for (G = m = 0; G < f.length; G++) m += f[G].length;
            for (var P = new k(m), X = 0, G = 0; G < f.length; G++) {
              var le = f[G];
              le.copy(P, X), X += le.length;
            }
            return P;
          }, k.prototype.write = function(f, m, P, X) {
            isFinite(m) ? isFinite(P) || (X = P, P = void 0) : (We = X, X = m, m = P, P = We), m = Number(m) || 0;
            var G, le, Te, Ue, We = this.length - m;
            switch ((!P || We < (P = Number(P))) && (P = We), X = String(X || "utf8").toLowerCase()) {
              case "hex":
                G = function(Et, ot, Ze, Be) {
                  Ze = Number(Ze) || 0;
                  var He = Et.length - Ze;
                  (!Be || He < (Be = Number(Be))) && (Be = He), Q((He = ot.length) % 2 == 0, "Invalid hex string"), He / 2 < Be && (Be = He / 2);
                  for (var yn = 0; yn < Be; yn++) {
                    var yi = parseInt(ot.substr(2 * yn, 2), 16);
                    Q(!isNaN(yi), "Invalid hex string"), Et[Ze + yn] = yi;
                  }
                  return k._charsWritten = 2 * yn, yn;
                }(this, f, m, P);
                break;
              case "utf8":
              case "utf-8":
                le = this, Te = m, Ue = P, G = k._charsWritten = q(C(f), le, Te, Ue);
                break;
              case "ascii":
              case "binary":
                G = B(this, f, m, P);
                break;
              case "base64":
                le = this, Te = m, Ue = P, G = k._charsWritten = q(E(f), le, Te, Ue);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                G = H(this, f, m, P);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return G;
          }, k.prototype.toString = function(f, m, P) {
            var X, G, le, Te, Ue = this;
            if (f = String(f || "utf8").toLowerCase(), m = Number(m) || 0, (P = P !== void 0 ? Number(P) : Ue.length) === m) return "";
            switch (f) {
              case "hex":
                X = function(We, Et, ot) {
                  var Ze = We.length;
                  (!Et || Et < 0) && (Et = 0), (!ot || ot < 0 || Ze < ot) && (ot = Ze);
                  for (var Be = "", He = Et; He < ot; He++) Be += Z(We[He]);
                  return Be;
                }(Ue, m, P);
                break;
              case "utf8":
              case "utf-8":
                X = function(We, Et, ot) {
                  var Ze = "", Be = "";
                  ot = Math.min(We.length, ot);
                  for (var He = Et; He < ot; He++) We[He] <= 127 ? (Ze += te(Be) + String.fromCharCode(We[He]), Be = "") : Be += "%" + We[He].toString(16);
                  return Ze + te(Be);
                }(Ue, m, P);
                break;
              case "ascii":
              case "binary":
                X = b(Ue, m, P);
                break;
              case "base64":
                G = Ue, Te = P, X = (le = m) === 0 && Te === G.length ? z.fromByteArray(G) : z.fromByteArray(G.slice(le, Te));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                X = function(We, Et, ot) {
                  for (var Ze = We.slice(Et, ot), Be = "", He = 0; He < Ze.length; He += 2) Be += String.fromCharCode(Ze[He] + 256 * Ze[He + 1]);
                  return Be;
                }(Ue, m, P);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return X;
          }, k.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, k.prototype.copy = function(f, m, P, X) {
            if (m = m || 0, (X = X || X === 0 ? X : this.length) !== (P = P || 0) && f.length !== 0 && this.length !== 0) {
              Q(P <= X, "sourceEnd < sourceStart"), Q(0 <= m && m < f.length, "targetStart out of bounds"), Q(0 <= P && P < this.length, "sourceStart out of bounds"), Q(0 <= X && X <= this.length, "sourceEnd out of bounds"), X > this.length && (X = this.length);
              var G = (X = f.length - m < X - P ? f.length - m + P : X) - P;
              if (G < 100 || !k._useTypedArrays) for (var le = 0; le < G; le++) f[le + m] = this[le + P];
              else f._set(this.subarray(P, P + G), m);
            }
          }, k.prototype.slice = function(f, m) {
            var P = this.length;
            if (f = _e(f, P, 0), m = _e(m, P, P), k._useTypedArrays) return k._augment(this.subarray(f, m));
            for (var X = m - f, G = new k(X, void 0, !0), le = 0; le < X; le++) G[le] = this[le + f];
            return G;
          }, k.prototype.get = function(f) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(f);
          }, k.prototype.set = function(f, m) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(f, m);
          }, k.prototype.readUInt8 = function(f, m) {
            if (m || (Q(f != null, "missing offset"), Q(f < this.length, "Trying to read beyond buffer length")), !(f >= this.length)) return this[f];
          }, k.prototype.readUInt16LE = function(f, m) {
            return $(this, f, !0, m);
          }, k.prototype.readUInt16BE = function(f, m) {
            return $(this, f, !1, m);
          }, k.prototype.readUInt32LE = function(f, m) {
            return F(this, f, !0, m);
          }, k.prototype.readUInt32BE = function(f, m) {
            return F(this, f, !1, m);
          }, k.prototype.readInt8 = function(f, m) {
            if (m || (Q(f != null, "missing offset"), Q(f < this.length, "Trying to read beyond buffer length")), !(f >= this.length)) return 128 & this[f] ? -1 * (255 - this[f] + 1) : this[f];
          }, k.prototype.readInt16LE = function(f, m) {
            return x(this, f, !0, m);
          }, k.prototype.readInt16BE = function(f, m) {
            return x(this, f, !1, m);
          }, k.prototype.readInt32LE = function(f, m) {
            return R(this, f, !0, m);
          }, k.prototype.readInt32BE = function(f, m) {
            return R(this, f, !1, m);
          }, k.prototype.readFloatLE = function(f, m) {
            return h(this, f, !0, m);
          }, k.prototype.readFloatBE = function(f, m) {
            return h(this, f, !1, m);
          }, k.prototype.readDoubleLE = function(f, m) {
            return g(this, f, !0, m);
          }, k.prototype.readDoubleBE = function(f, m) {
            return g(this, f, !1, m);
          }, k.prototype.writeUInt8 = function(f, m, P) {
            P || (Q(f != null, "missing value"), Q(m != null, "missing offset"), Q(m < this.length, "trying to write beyond buffer length"), ge(f, 255)), m >= this.length || (this[m] = f);
          }, k.prototype.writeUInt16LE = function(f, m, P) {
            p(this, f, m, !0, P);
          }, k.prototype.writeUInt16BE = function(f, m, P) {
            p(this, f, m, !1, P);
          }, k.prototype.writeUInt32LE = function(f, m, P) {
            T(this, f, m, !0, P);
          }, k.prototype.writeUInt32BE = function(f, m, P) {
            T(this, f, m, !1, P);
          }, k.prototype.writeInt8 = function(f, m, P) {
            P || (Q(f != null, "missing value"), Q(m != null, "missing offset"), Q(m < this.length, "Trying to write beyond buffer length"), Ee(f, 127, -128)), m >= this.length || (0 <= f ? this.writeUInt8(f, m, P) : this.writeUInt8(255 + f + 1, m, P));
          }, k.prototype.writeInt16LE = function(f, m, P) {
            N(this, f, m, !0, P);
          }, k.prototype.writeInt16BE = function(f, m, P) {
            N(this, f, m, !1, P);
          }, k.prototype.writeInt32LE = function(f, m, P) {
            me(this, f, m, !0, P);
          }, k.prototype.writeInt32BE = function(f, m, P) {
            me(this, f, m, !1, P);
          }, k.prototype.writeFloatLE = function(f, m, P) {
            de(this, f, m, !0, P);
          }, k.prototype.writeFloatBE = function(f, m, P) {
            de(this, f, m, !1, P);
          }, k.prototype.writeDoubleLE = function(f, m, P) {
            ve(this, f, m, !0, P);
          }, k.prototype.writeDoubleBE = function(f, m, P) {
            ve(this, f, m, !1, P);
          }, k.prototype.fill = function(f, m, P) {
            if (m = m || 0, P = P || this.length, Q(typeof (f = typeof (f = f || 0) == "string" ? f.charCodeAt(0) : f) == "number" && !isNaN(f), "value is not a number"), Q(m <= P, "end < start"), P !== m && this.length !== 0) {
              Q(0 <= m && m < this.length, "start out of bounds"), Q(0 <= P && P <= this.length, "end out of bounds");
              for (var X = m; X < P; X++) this[X] = f;
            }
          }, k.prototype.inspect = function() {
            for (var f = [], m = this.length, P = 0; P < m; P++) if (f[P] = Z(this[P]), P === d.INSPECT_MAX_BYTES) {
              f[P + 1] = "...";
              break;
            }
            return "<Buffer " + f.join(" ") + ">";
          }, k.prototype.toArrayBuffer = function() {
            if (typeof Uint8Array > "u") throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (k._useTypedArrays) return new k(this).buffer;
            for (var f = new Uint8Array(this.length), m = 0, P = f.length; m < P; m += 1) f[m] = this[m];
            return f.buffer;
          };
          var oe = k.prototype;
          function _e(f, m, P) {
            return typeof f != "number" ? P : m <= (f = ~~f) ? m : 0 <= f || 0 <= (f += m) ? f : 0;
          }
          function ee(f) {
            return (f = ~~Math.ceil(+f)) < 0 ? 0 : f;
          }
          function se(f) {
            return (Array.isArray || function(m) {
              return Object.prototype.toString.call(m) === "[object Array]";
            })(f);
          }
          function Z(f) {
            return f < 16 ? "0" + f.toString(16) : f.toString(16);
          }
          function C(f) {
            for (var m = [], P = 0; P < f.length; P++) {
              var X = f.charCodeAt(P);
              if (X <= 127) m.push(f.charCodeAt(P));
              else for (var G = P, le = (55296 <= X && X <= 57343 && P++, encodeURIComponent(f.slice(G, P + 1)).substr(1).split("%")), Te = 0; Te < le.length; Te++) m.push(parseInt(le[Te], 16));
            }
            return m;
          }
          function E(f) {
            return z.toByteArray(f);
          }
          function q(f, m, P, X) {
            for (var G = 0; G < X && !(G + P >= m.length || G >= f.length); G++) m[G + P] = f[G];
            return G;
          }
          function te(f) {
            try {
              return decodeURIComponent(f);
            } catch {
              return "�";
            }
          }
          function ge(f, m) {
            Q(typeof f == "number", "cannot write a non-number as a number"), Q(0 <= f, "specified a negative value for writing an unsigned value"), Q(f <= m, "value is larger than maximum value for type"), Q(Math.floor(f) === f, "value has a fractional component");
          }
          function Ee(f, m, P) {
            Q(typeof f == "number", "cannot write a non-number as a number"), Q(f <= m, "value larger than maximum allowed value"), Q(P <= f, "value smaller than minimum allowed value"), Q(Math.floor(f) === f, "value has a fractional component");
          }
          function Se(f, m, P) {
            Q(typeof f == "number", "cannot write a non-number as a number"), Q(f <= m, "value larger than maximum allowed value"), Q(P <= f, "value smaller than minimum allowed value");
          }
          function Q(f, m) {
            if (!f) throw new Error(m || "Failed assertion");
          }
          k._augment = function(f) {
            return f._isBuffer = !0, f._get = f.get, f._set = f.set, f.get = oe.get, f.set = oe.set, f.write = oe.write, f.toString = oe.toString, f.toLocaleString = oe.toString, f.toJSON = oe.toJSON, f.copy = oe.copy, f.slice = oe.slice, f.readUInt8 = oe.readUInt8, f.readUInt16LE = oe.readUInt16LE, f.readUInt16BE = oe.readUInt16BE, f.readUInt32LE = oe.readUInt32LE, f.readUInt32BE = oe.readUInt32BE, f.readInt8 = oe.readInt8, f.readInt16LE = oe.readInt16LE, f.readInt16BE = oe.readInt16BE, f.readInt32LE = oe.readInt32LE, f.readInt32BE = oe.readInt32BE, f.readFloatLE = oe.readFloatLE, f.readFloatBE = oe.readFloatBE, f.readDoubleLE = oe.readDoubleLE, f.readDoubleBE = oe.readDoubleBE, f.writeUInt8 = oe.writeUInt8, f.writeUInt16LE = oe.writeUInt16LE, f.writeUInt16BE = oe.writeUInt16BE, f.writeUInt32LE = oe.writeUInt32LE, f.writeUInt32BE = oe.writeUInt32BE, f.writeInt8 = oe.writeInt8, f.writeInt16LE = oe.writeInt16LE, f.writeInt16BE = oe.writeInt16BE, f.writeInt32LE = oe.writeInt32LE, f.writeInt32BE = oe.writeInt32BE, f.writeFloatLE = oe.writeFloatLE, f.writeFloatBE = oe.writeFloatBE, f.writeDoubleLE = oe.writeDoubleLE, f.writeDoubleBE = oe.writeDoubleBE, f.fill = oe.fill, f.inspect = oe.inspect, f.toArrayBuffer = oe.toArrayBuffer, f;
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(l, a, d) {
        (function(v, O, z, D, V, K, U, ne, ie) {
          var z = l("buffer").Buffer, L = 4, k = new z(L);
          k.fill(0), a.exports = { hash: function(B, H, b, $) {
            for (var F = H(function(p, T) {
              p.length % L != 0 && (N = p.length + (L - p.length % L), p = z.concat([p, k], N));
              for (var N, me = [], de = T ? p.readInt32BE : p.readInt32LE, ve = 0; ve < p.length; ve += L) me.push(de.call(p, ve));
              return me;
            }(B = z.isBuffer(B) ? B : new z(B), $), 8 * B.length), H = $, x = new z(b), R = H ? x.writeInt32BE : x.writeInt32LE, h = 0; h < F.length; h++) R.call(x, F[h], 4 * h, !0);
            return x;
          } };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(l, a, d) {
        (function(v, O, z, D, V, K, U, ne, ie) {
          var z = l("buffer").Buffer, L = l("./sha"), k = l("./sha256"), B = l("./rng"), H = { sha1: L, sha256: k, md5: l("./md5") }, b = 64, $ = new z(b);
          function F(p, T) {
            var N = H[p = p || "sha1"], me = [];
            return N || x("algorithm:", p, "is not yet supported"), { update: function(de) {
              return z.isBuffer(de) || (de = new z(de)), me.push(de), de.length, this;
            }, digest: function(de) {
              var ve = z.concat(me), ve = T ? function(oe, _e, ee) {
                z.isBuffer(_e) || (_e = new z(_e)), z.isBuffer(ee) || (ee = new z(ee)), _e.length > b ? _e = oe(_e) : _e.length < b && (_e = z.concat([_e, $], b));
                for (var se = new z(b), Z = new z(b), C = 0; C < b; C++) se[C] = 54 ^ _e[C], Z[C] = 92 ^ _e[C];
                return ee = oe(z.concat([se, ee])), oe(z.concat([Z, ee]));
              }(N, T, ve) : N(ve);
              return me = null, de ? ve.toString(de) : ve;
            } };
          }
          function x() {
            var p = [].slice.call(arguments).join(" ");
            throw new Error([p, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join(`
`));
          }
          $.fill(0), d.createHash = function(p) {
            return F(p);
          }, d.createHmac = F, d.randomBytes = function(p, T) {
            if (!T || !T.call) return new z(B(p));
            try {
              T.call(this, void 0, new z(B(p)));
            } catch (N) {
              T(N);
            }
          };
          var R, h = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], g = function(p) {
            d[p] = function() {
              x("sorry,", p, "is not implemented yet");
            };
          };
          for (R in h) g(h[R]);
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          var z = l("./helpers");
          function L(x, R) {
            x[R >> 5] |= 128 << R % 32, x[14 + (R + 64 >>> 9 << 4)] = R;
            for (var h = 1732584193, g = -271733879, p = -1732584194, T = 271733878, N = 0; N < x.length; N += 16) {
              var me = h, de = g, ve = p, oe = T, h = B(h, g, p, T, x[N + 0], 7, -680876936), T = B(T, h, g, p, x[N + 1], 12, -389564586), p = B(p, T, h, g, x[N + 2], 17, 606105819), g = B(g, p, T, h, x[N + 3], 22, -1044525330);
              h = B(h, g, p, T, x[N + 4], 7, -176418897), T = B(T, h, g, p, x[N + 5], 12, 1200080426), p = B(p, T, h, g, x[N + 6], 17, -1473231341), g = B(g, p, T, h, x[N + 7], 22, -45705983), h = B(h, g, p, T, x[N + 8], 7, 1770035416), T = B(T, h, g, p, x[N + 9], 12, -1958414417), p = B(p, T, h, g, x[N + 10], 17, -42063), g = B(g, p, T, h, x[N + 11], 22, -1990404162), h = B(h, g, p, T, x[N + 12], 7, 1804603682), T = B(T, h, g, p, x[N + 13], 12, -40341101), p = B(p, T, h, g, x[N + 14], 17, -1502002290), h = H(h, g = B(g, p, T, h, x[N + 15], 22, 1236535329), p, T, x[N + 1], 5, -165796510), T = H(T, h, g, p, x[N + 6], 9, -1069501632), p = H(p, T, h, g, x[N + 11], 14, 643717713), g = H(g, p, T, h, x[N + 0], 20, -373897302), h = H(h, g, p, T, x[N + 5], 5, -701558691), T = H(T, h, g, p, x[N + 10], 9, 38016083), p = H(p, T, h, g, x[N + 15], 14, -660478335), g = H(g, p, T, h, x[N + 4], 20, -405537848), h = H(h, g, p, T, x[N + 9], 5, 568446438), T = H(T, h, g, p, x[N + 14], 9, -1019803690), p = H(p, T, h, g, x[N + 3], 14, -187363961), g = H(g, p, T, h, x[N + 8], 20, 1163531501), h = H(h, g, p, T, x[N + 13], 5, -1444681467), T = H(T, h, g, p, x[N + 2], 9, -51403784), p = H(p, T, h, g, x[N + 7], 14, 1735328473), h = b(h, g = H(g, p, T, h, x[N + 12], 20, -1926607734), p, T, x[N + 5], 4, -378558), T = b(T, h, g, p, x[N + 8], 11, -2022574463), p = b(p, T, h, g, x[N + 11], 16, 1839030562), g = b(g, p, T, h, x[N + 14], 23, -35309556), h = b(h, g, p, T, x[N + 1], 4, -1530992060), T = b(T, h, g, p, x[N + 4], 11, 1272893353), p = b(p, T, h, g, x[N + 7], 16, -155497632), g = b(g, p, T, h, x[N + 10], 23, -1094730640), h = b(h, g, p, T, x[N + 13], 4, 681279174), T = b(T, h, g, p, x[N + 0], 11, -358537222), p = b(p, T, h, g, x[N + 3], 16, -722521979), g = b(g, p, T, h, x[N + 6], 23, 76029189), h = b(h, g, p, T, x[N + 9], 4, -640364487), T = b(T, h, g, p, x[N + 12], 11, -421815835), p = b(p, T, h, g, x[N + 15], 16, 530742520), h = $(h, g = b(g, p, T, h, x[N + 2], 23, -995338651), p, T, x[N + 0], 6, -198630844), T = $(T, h, g, p, x[N + 7], 10, 1126891415), p = $(p, T, h, g, x[N + 14], 15, -1416354905), g = $(g, p, T, h, x[N + 5], 21, -57434055), h = $(h, g, p, T, x[N + 12], 6, 1700485571), T = $(T, h, g, p, x[N + 3], 10, -1894986606), p = $(p, T, h, g, x[N + 10], 15, -1051523), g = $(g, p, T, h, x[N + 1], 21, -2054922799), h = $(h, g, p, T, x[N + 8], 6, 1873313359), T = $(T, h, g, p, x[N + 15], 10, -30611744), p = $(p, T, h, g, x[N + 6], 15, -1560198380), g = $(g, p, T, h, x[N + 13], 21, 1309151649), h = $(h, g, p, T, x[N + 4], 6, -145523070), T = $(T, h, g, p, x[N + 11], 10, -1120210379), p = $(p, T, h, g, x[N + 2], 15, 718787259), g = $(g, p, T, h, x[N + 9], 21, -343485551), h = F(h, me), g = F(g, de), p = F(p, ve), T = F(T, oe);
            }
            return Array(h, g, p, T);
          }
          function k(x, R, h, g, p, T) {
            return F((R = F(F(R, x), F(g, T))) << p | R >>> 32 - p, h);
          }
          function B(x, R, h, g, p, T, N) {
            return k(R & h | ~R & g, x, R, p, T, N);
          }
          function H(x, R, h, g, p, T, N) {
            return k(R & g | h & ~g, x, R, p, T, N);
          }
          function b(x, R, h, g, p, T, N) {
            return k(R ^ h ^ g, x, R, p, T, N);
          }
          function $(x, R, h, g, p, T, N) {
            return k(h ^ (R | ~g), x, R, p, T, N);
          }
          function F(x, R) {
            var h = (65535 & x) + (65535 & R);
            return (x >> 16) + (R >> 16) + (h >> 16) << 16 | 65535 & h;
          }
          a.exports = function(x) {
            return z.hash(x, L, 16);
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          a.exports = function(z) {
            for (var L, k = new Array(z), B = 0; B < z; B++) (3 & B) == 0 && (L = 4294967296 * Math.random()), k[B] = L >>> ((3 & B) << 3) & 255;
            return k;
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          var z = l("./helpers");
          function L(H, b) {
            H[b >> 5] |= 128 << 24 - b % 32, H[15 + (b + 64 >> 9 << 4)] = b;
            for (var $, F, x, R = Array(80), h = 1732584193, g = -271733879, p = -1732584194, T = 271733878, N = -1009589776, me = 0; me < H.length; me += 16) {
              for (var de = h, ve = g, oe = p, _e = T, ee = N, se = 0; se < 80; se++) {
                R[se] = se < 16 ? H[me + se] : B(R[se - 3] ^ R[se - 8] ^ R[se - 14] ^ R[se - 16], 1);
                var Z = k(k(B(h, 5), (Z = g, F = p, x = T, ($ = se) < 20 ? Z & F | ~Z & x : !($ < 40) && $ < 60 ? Z & F | Z & x | F & x : Z ^ F ^ x)), k(k(N, R[se]), ($ = se) < 20 ? 1518500249 : $ < 40 ? 1859775393 : $ < 60 ? -1894007588 : -899497514)), N = T, T = p, p = B(g, 30), g = h, h = Z;
              }
              h = k(h, de), g = k(g, ve), p = k(p, oe), T = k(T, _e), N = k(N, ee);
            }
            return Array(h, g, p, T, N);
          }
          function k(H, b) {
            var $ = (65535 & H) + (65535 & b);
            return (H >> 16) + (b >> 16) + ($ >> 16) << 16 | 65535 & $;
          }
          function B(H, b) {
            return H << b | H >>> 32 - b;
          }
          a.exports = function(H) {
            return z.hash(H, L, 20, !0);
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          function z(b, $) {
            var F = (65535 & b) + (65535 & $);
            return (b >> 16) + ($ >> 16) + (F >> 16) << 16 | 65535 & F;
          }
          function L(b, $) {
            var F, x = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), R = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), h = new Array(64);
            b[$ >> 5] |= 128 << 24 - $ % 32, b[15 + ($ + 64 >> 9 << 4)] = $;
            for (var g, p, T = 0; T < b.length; T += 16) {
              for (var N = R[0], me = R[1], de = R[2], ve = R[3], oe = R[4], _e = R[5], ee = R[6], se = R[7], Z = 0; Z < 64; Z++) h[Z] = Z < 16 ? b[Z + T] : z(z(z((p = h[Z - 2], B(p, 17) ^ B(p, 19) ^ H(p, 10)), h[Z - 7]), (p = h[Z - 15], B(p, 7) ^ B(p, 18) ^ H(p, 3))), h[Z - 16]), F = z(z(z(z(se, B(p = oe, 6) ^ B(p, 11) ^ B(p, 25)), oe & _e ^ ~oe & ee), x[Z]), h[Z]), g = z(B(g = N, 2) ^ B(g, 13) ^ B(g, 22), N & me ^ N & de ^ me & de), se = ee, ee = _e, _e = oe, oe = z(ve, F), ve = de, de = me, me = N, N = z(F, g);
              R[0] = z(N, R[0]), R[1] = z(me, R[1]), R[2] = z(de, R[2]), R[3] = z(ve, R[3]), R[4] = z(oe, R[4]), R[5] = z(_e, R[5]), R[6] = z(ee, R[6]), R[7] = z(se, R[7]);
            }
            return R;
          }
          var k = l("./helpers"), B = function(b, $) {
            return b >>> $ | b << 32 - $;
          }, H = function(b, $) {
            return b >>> $;
          };
          a.exports = function(b) {
            return k.hash(b, L, 32, !0);
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          d.read = function(z, L, k, B, T) {
            var b, $, F = 8 * T - B - 1, x = (1 << F) - 1, R = x >> 1, h = -7, g = k ? T - 1 : 0, p = k ? -1 : 1, T = z[L + g];
            for (g += p, b = T & (1 << -h) - 1, T >>= -h, h += F; 0 < h; b = 256 * b + z[L + g], g += p, h -= 8) ;
            for ($ = b & (1 << -h) - 1, b >>= -h, h += B; 0 < h; $ = 256 * $ + z[L + g], g += p, h -= 8) ;
            if (b === 0) b = 1 - R;
            else {
              if (b === x) return $ ? NaN : 1 / 0 * (T ? -1 : 1);
              $ += Math.pow(2, B), b -= R;
            }
            return (T ? -1 : 1) * $ * Math.pow(2, b - B);
          }, d.write = function(z, L, k, B, H, N) {
            var $, F, x = 8 * N - H - 1, R = (1 << x) - 1, h = R >> 1, g = H === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = B ? 0 : N - 1, T = B ? 1 : -1, N = L < 0 || L === 0 && 1 / L < 0 ? 1 : 0;
            for (L = Math.abs(L), isNaN(L) || L === 1 / 0 ? (F = isNaN(L) ? 1 : 0, $ = R) : ($ = Math.floor(Math.log(L) / Math.LN2), L * (B = Math.pow(2, -$)) < 1 && ($--, B *= 2), 2 <= (L += 1 <= $ + h ? g / B : g * Math.pow(2, 1 - h)) * B && ($++, B /= 2), R <= $ + h ? (F = 0, $ = R) : 1 <= $ + h ? (F = (L * B - 1) * Math.pow(2, H), $ += h) : (F = L * Math.pow(2, h - 1) * Math.pow(2, H), $ = 0)); 8 <= H; z[k + p] = 255 & F, p += T, F /= 256, H -= 8) ;
            for ($ = $ << H | F, x += H; 0 < x; z[k + p] = 255 & $, p += T, $ /= 256, x -= 8) ;
            z[k + p - T] |= 128 * N;
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(l, a, d) {
        (function(v, O, M, D, V, K, U, ne, ie) {
          var z, L, k;
          function B() {
          }
          (v = a.exports = {}).nextTick = (L = typeof window < "u" && window.setImmediate, k = typeof window < "u" && window.postMessage && window.addEventListener, L ? function(H) {
            return window.setImmediate(H);
          } : k ? (z = [], window.addEventListener("message", function(H) {
            var b = H.source;
            b !== window && b !== null || H.data !== "process-tick" || (H.stopPropagation(), 0 < z.length && z.shift()());
          }, !0), function(H) {
            z.push(H), window.postMessage("process-tick", "*");
          }) : function(H) {
            setTimeout(H, 0);
          }), v.title = "browser", v.browser = !0, v.env = {}, v.argv = [], v.on = B, v.addListener = B, v.once = B, v.off = B, v.removeListener = B, v.removeAllListeners = B, v.emit = B, v.binding = function(H) {
            throw new Error("process.binding is not supported");
          }, v.cwd = function() {
            return "/";
          }, v.chdir = function(H) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, l("lYpoI2"), typeof self < "u" ? self : typeof window < "u" ? window : {}, l("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  }(Uu)), Uu.exports;
}
var u1 = l1();
const Bu = /* @__PURE__ */ Jd(u1), $u = pe.forwardRef((s, i) => {
  const { initialOpen: l, onClose: a } = s, [d, v] = pe.useState(l);
  return pe.useImperativeHandle(i, () => ({
    openDialog: () => v(!0),
    closeDialog: () => v(!1)
  })), /* @__PURE__ */ Pe(
    "div",
    {
      onClick: (M) => {
        M.target === M.currentTarget && a();
      },
      css: Re`
        display: ${d ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-family: Pretendard;
        @media (max-width: 768px) {
          align-items: flex-end;
        }
      `,
      children: /* @__PURE__ */ Pe(
        "div",
        {
          css: Re`
          display: flex;
          position: relative;
          padding: 0;
          flex-direction: column;
          border-radius: 16px;
          background-color: #ffffff;
          overflow: auto;

          width: 380px;
          max-height: calc(100vh - 40px - 40px);
          @media (max-width: 768px) {
            width: 100%;
            max-height: calc(100vh - 12px - 12px);
            margin: auto 12px 12px;
          }
        `,
          children: s.children
        }
      )
    }
  );
}), Ch = (s = !1) => ({
  ct: io.useCallback((l, ...a) => typeof window.LOCALIZE > "u" || typeof window.LOCALIZE[l] > "u" ? (console.warn(l, "에 대한 번역을 찾을 수 없습니다."), s ? "" : l) : window.LOCALIZE[l].apply(null, a), [])
}), Ud = io.forwardRef(({ disabled: s, options: i, selected: l, setSelected: a, closeCallback: d, openCallback: v }, O) => {
  var z;
  const { ct: M } = Ch(), D = io.useRef(null), [V, K] = pe.useState(!1), U = d ?? (() => {
  }), ne = v ?? (() => {
  });
  pe.useImperativeHandle(O, () => ({
    close: () => {
      K(!1), U();
    }
  }));
  const ie = (L) => {
    K(!1), U(), a(L);
  };
  return /* @__PURE__ */ at(
    "div",
    {
      ref: D,
      css: Re`
        position: relative;
      `,
      children: [
        /* @__PURE__ */ Pe(
          "button",
          {
            disabled: s,
            css: Re`
          appearance: none;
          background-color: #ffffff;
          width: 100%;
          height: 48px;
          color: #717680;
          border: 1px solid #D2D7E0;
          border-radius: 8px;
          cursor: pointer;
          padding: 0 16px;
          background-image: url("data:image/svg+xml;utf8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%206L8%2010L12%206%22%20stroke%3D%22%2315181E%22%20stroke-width%3D%221.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E%0A");
          background-repeat: no-repeat;
          background-position: right 16px center;
          :focus {
            border: 1px solid #15181e;
          }
          :focus-visible {
            border: 1px solid #15181e;
            outline: none;
          }
          :hover:not(:disabled) {
            border: 1px solid #15181e;
          }
          :disabled {
            background-color: #F8F9FB;
            color: #D2D7E0;
            cursor: not-allowed
          }
        `,
            onClick: () => {
              s || K((L) => (L ? U() : ne(), !L));
            },
            tabIndex: 0,
            children: /* @__PURE__ */ Pe(
              "div",
              {
                css: Re`
            font-family: Pretendard;
            font-weight: 400;
            font-size: 15px;
            color: #717680;
            flex: 1;
            text-align: left;
          `,
                children: ((z = i.find((L) => L.key === l)) == null ? void 0 : z.name) ?? M("설명_옵션을선택해주세요")
              }
            )
          }
        ),
        V && /* @__PURE__ */ Pe(
          "div",
          {
            css: Re`
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            z-index: 1001;
            `,
            children: /* @__PURE__ */ Pe(
              "ul",
              {
                "data-dropdown-list": !0,
                css: Re`
            list-style: none;
            font-size: 14px;
            padding: 4px 8px;
            margin: 0 0 24px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow:
              0px 14px 32px 0px #4b515b1f,
              0px 10px 14px 0px #4b515b0f,
              0px 0px 0px 1px #4b515b08,
              0px 0px 1px 0px #4b515b33;
          `,
                children: V && i.map((L) => /* @__PURE__ */ Pe("li", { children: /* @__PURE__ */ Pe(
                  "button",
                  {
                    css: Re`
                    appearance: none;
                    background-color: #ffffff;
                    position: relative;
                    width: 100%;
                    height: 48px;
                    padding: 12px;
                    margin: 4px 0;
                    font-family: Pretendard;
                    font-weight: 400;
                    font-size: 15px;
                    color: #15181E;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    display: flex;
                    padding: 0 16px;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${l === L.key ? "rgba(113, 118, 128, 0.1)" : "#FFFFFF"};
                    :hover {
                      background-color: rgba(248, 249, 251, 1);
                    }
                    `,
                    onClick: () => ie(L.key),
                    role: "button",
                    tabIndex: 0,
                    children: /* @__PURE__ */ Pe(
                      "div",
                      {
                        css: Re`
                      font-family: Pretendard;
                      font-weight: 400;
                      font-size: 14px;
                      flex: 1;
                      text-align: left;
                    `,
                        children: L.name
                      }
                    )
                  },
                  L.key
                ) }, L.key))
              }
            )
          }
        )
      ]
    }
  );
}), Qu = pe.forwardRef(({ message: s }, i) => {
  const [l, a] = pe.useState(!1), [d, v] = pe.useState(!1);
  if (pe.useImperativeHandle(i, () => ({
    show: () => {
      l || a(!0);
    },
    hide: () => a(!1)
  })), pe.useEffect(() => {
    if (l) {
      const O = setTimeout(() => {
        a(!1);
      }, 1e3);
      return () => {
        clearTimeout(O);
      };
    }
  }, [l]), pe.useEffect(() => {
    if (l) {
      const O = setTimeout(() => {
        v(!0);
      }, 0), M = setTimeout(() => {
        v(!1);
      }, 700);
      return () => {
        clearTimeout(M), clearTimeout(O);
      };
    }
  }, [l]), !!l)
    return /* @__PURE__ */ Pe(
      "div",
      {
        onClick: () => a(!1),
        css: Re`
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 32px;
      padding: 15px 30px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--clay-surface, #FFFFFF);
      background-color: rgba(0, 0, 0, 0.60);
      opacity: ${d ? "1" : "0"};
      transition: opacity 0.2s;
      z-index: 9999;
      `,
        children: s
      }
    );
});
function a1(s, i, l) {
  const a = (d) => {
    if (!(d.target instanceof Element))
      return;
    const v = d.target.closest(i);
    v instanceof HTMLElement && l(v, d);
  };
  return s.addEventListener("click", a, !0), () => {
    s.removeEventListener("click", a, !0);
  };
}
const Bd = (s) => !!s;
function c1() {
  var se, Z, C;
  const { token: s, refresh: i } = o1(), { ct: l } = Ch(), a = ga(), d = (C = (Z = (se = window.SITE_SHOP_DETAIL) == null ? void 0 : se.getCurrentProdNo) == null ? void 0 : Z.call(se)) == null ? void 0 : C.toString(), v = pe.useRef(null), O = pe.useRef(null), M = pe.useRef(null), D = pe.useRef(), { current: V } = pe.useRef(new ResizeObserver(([E]) => {
    E.target instanceof HTMLElement && E.target.scrollHeight > 0 && (E.target.style.height = `${Math.ceil(E.target.scrollHeight)}px`);
  })), K = pe.useRef([]), [U, ne] = pe.useState([]), [ie, z] = pe.useState([]), [L, k] = pe.useState(!1), { data: B } = Ht({
    queryKey: ["UseLoginPopup"],
    queryFn: async () => {
      const E = new URL("/ajax/ui/custom_styles.cm", window.location.origin);
      return (await fetch(E, { method: "GET" })).json();
    },
    select: (E) => {
      var q, te;
      switch ((q = E == null ? void 0 : E.data.use_login_popup) == null ? void 0 : q.type) {
        case "boolean":
          return ((te = E == null ? void 0 : E.data.use_login_popup) == null ? void 0 : te.value) ?? null;
        default:
          return null;
      }
    }
  }), { data: H } = Ht({
    queryKey: ["MaxRestockRequestReached"],
    queryFn: async () => {
      if (window.IS_GUEST === !0)
        return !1;
      const E = new URL("/customer/v1/restock-notification", window.TEST_SERVER ? "https://api.oms.imstage.me" : "https://api.oms.imweb.me"), q = new Headers();
      return q.set("Content-Type", "application/json"), q.set("Authorization", `Bearer ${s}`), fetch(E, { method: "GET", headers: q }).then((te) => te.json());
    },
    select: (E) => (E.data ?? []).filter((q) => q.sendStatus === "WAIT" || q.sendStatus === "FAILED").length >= 10
  }), { data: b } = Ht({
    queryKey: ["SiteMemberHasCallNum"],
    queryFn: async () => {
      const E = new URL("/ajax/oms/OMS_get_site_member.cm", window.location.origin);
      return fetch(E, { method: "GET", credentials: "include" }).then((q) => q.json());
    },
    select: (E) => !!E.data.callnum
  }), $ = () => {
    var E;
    ne((q) => T ? [] : q.map(() => "")), z((q) => T ? [] : q.map(() => "")), (E = O.current) == null || E.closeDialog(), K.current.forEach((q) => {
      q == null || q.close();
    });
  }, { mutateAsync: F } = Jy({
    mutationKey: ["RequestRestockNotification"],
    mutationFn: async ({
      productCode: E,
      selectedOptionCodes: q
    }) => {
      var f;
      const te = new URL("/customer/v1/restock-notification", window.TEST_SERVER ? "https://api.oms.imstage.me" : "https://api.oms.imweb.me"), ge = new Headers();
      ge.set("Content-Type", "application/json"), ge.set("Authorization", `Bearer ${s}`);
      const Ee = JSON.stringify({
        prodCode: E,
        optionDetailCodes: (q == null ? void 0 : q.length) > 0 ? q : void 0
      }), Se = new AbortController();
      D.current = Se;
      const Q = await fetch(te, {
        method: "POST",
        headers: ge,
        body: Ee,
        signal: Se.signal
      });
      if (Q.status === 200)
        return a.invalidateQueries({ queryKey: ["MaxRestockRequestReached"] }), D.current = void 0, $(), (f = v.current) == null || f.show(), Q.json();
      if (Q.status === 403)
        throw i(), new Error("Token expired");
      switch ((await Q.json()).code) {
        case "40308": {
          a.invalidateQueries({ queryKey: ["SiteMemberHasCallNum"] });
          break;
        }
        case "40310": {
          alert(l("설명_이미재입고알림신청이등록된상품이에요")), $();
          break;
        }
        case "40316": {
          alert(l("설명_재고가있어구매할수있는옵션이에요다시시도해주세요")), $();
          break;
        }
        default:
          alert(l("설명_재입고알림신청에실패했어요")), $();
      }
    },
    retry: 1
  }), { data: x } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => E.data.code
  }), { data: R } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => E.data.name
  }), { data: h } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => E.data.prod_status === "soldout"
  }), { data: g } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => {
      var te;
      const [q] = Object.values(((te = E == null ? void 0 : E.data) == null ? void 0 : te.image_url) ?? {});
      return q ?? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PF6dJQAAAABJRU5ErkJggg==";
    }
  }), { data: p } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => {
      var te;
      return (E.data.options ?? []).filter((ge) => ge.is_require && ["default", "color"].includes(ge.type)).length > 0 ? null : (te = E == null ? void 0 : E.data) == null ? void 0 : te.stock_no_option;
    }
  }), { data: T } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => {
      var q;
      return ((q = E == null ? void 0 : E.data) == null ? void 0 : q.option_mix_type) === "MIX";
    }
  }), { data: N } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => !Bd(E) || E.data.options.length > 0 && E.data.options.some((te) => te.type === "") ? (window.TEST_SERVER && alert("[개발]: 상품 정보가 손상된 상품입니다. 다른 상품으로 테스트해주세요."), []) : ((E == null ? void 0 : E.data.options) ?? []).filter((te) => te.is_require).filter((te) => ["default", "color"].includes(te.type)).map((te) => ({
      ...te,
      optionName: te.name,
      optionCode: te.code,
      values: Object.entries(te.value_list).map(([ge, Ee]) => ({
        optionValueCode: ge,
        optionValueName: Ee
      }))
    }))
  }), { data: me } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => {
      var q;
      return Bd(E) ? (q = E == null ? void 0 : E.data) == null ? void 0 : q.options_detail.filter((te) => te.status !== "HIDDEN").reduce((te, ge) => {
        const Ee = Bu(ge.value_code_list, { unorderedArrays: !0 });
        return {
          ...te,
          [Ee]: ge.code
        };
      }, {}) : {};
    }
  }), { data: de } = Ht({
    queryKey: ["ProductOptions", d],
    queryFn: async () => await (await fetch(`/ajax/oms/OMS_get_product.cm?prod_idx=${d}`)).json(),
    select: (E) => {
      var q;
      return (q = E == null ? void 0 : E.data) == null ? void 0 : q.options_detail.filter((te) => te.status !== "HIDDEN");
    }
  }), ve = () => {
    var E;
    (E = M.current) == null || E.style.setProperty("height", "initial");
  };
  pe.useEffect(() => {
    D.current && b === !1 && D.current.abort();
  }, [b]), pe.useEffect(() => {
    T || (z(Array.from({ length: N.length ?? 0 }, () => "")), ne(Array.from({ length: N.length ?? 0 }, () => "")));
  }, [N, T]), pe.useEffect(() => {
    (N ?? []).length !== 0 && (K.current = Array.from({ length: N.length }, () => null));
  }, [N]), pe.useEffect(() => {
    if (O.current === null)
      return;
    const E = (q) => {
      var ge, Ee, Se;
      if (window.IS_GUEST === !0) {
        if (B === !0) {
          const { pathname: Q, search: f } = window.location;
          window.SITE_MEMBER.openLogin(window.base64Encode(`${Q}${f}`), "null", null, "Y");
          return;
        }
        window.location.href = "/login?back_url=" + window.base64Encode(window.location.href);
        return;
      }
      a.invalidateQueries({ queryKey: ["SiteMemberHasCallNum"] });
      const te = JSON.parse(((ge = q.dataset) == null ? void 0 : ge.reqNotiRestockOpenDialog) || "{}");
      if (k(Object.keys(te).length > 0), Object.keys(te).length > 0)
        if (T) {
          const Q = ((Ee = de.find((f) => f.code === te.option_detail_code)) == null ? void 0 : Ee.value_code_list) ?? [];
          z(te.option_detail_code ? [te.option_detail_code] : []), ne(Q);
        } else
          z(Array.from({ length: te.opt_no + 1 }, (Q, f) => te.opt_no === f ? te.option_detail_code : "")), ne(Array.from({ length: te.opt_no + 1 }, (Q, f) => te.opt_no === f ? te.value_code : ""));
      (Se = O == null ? void 0 : O.current) == null || Se.openDialog();
    };
    return a1(document.body, "[data-req-noti-restock-open-dialog]", E);
  }, [O == null ? void 0 : O.current, B]), pe.useEffect(() => {
    if (M.current !== null)
      return V.observe(M.current), () => {
        V.disconnect();
      };
  }, [M.current]);
  const oe = h !== !0 && (ie.reduce((E, q) => {
    const te = de.find((ge) => ge.code === q);
    return E && (te == null ? void 0 : te.status) !== "SOLDOUT" && ((te == null ? void 0 : te.stock) ?? 0) > 0;
  }, N.length > 0 && ie.length === N.length) || (p ?? 0) > 0), ee = window.getComputedStyle(window.document.documentElement).getPropertyValue("--unit-style-button_sb_use_set") === "Y" ? Re`
    color: var(--unit-style-button_sb_font_color);
    background-color: var(--unit-style-button_sb_background_color);
    border: calc(var(--unit-style-button_sb_border_width) * 1px) solid var(--unit-style-button_sb_border_color);
    :hover:not(:disabled) {
      color: var(--unit-style-button_sb_hover_font_color);
      background-color: var(--unit-style-button_sb_hover_background_color);
      border: calc(var(--unit-style-button_sb_hover_border_width) * 1px) solid var(--unit-style-button_sb_hover_border_color);
    }
  ` : Re`
    color: #FFFFFF;
    background-color: var(--unit-style-brand_color);
    border: calc(var(--unit-style-button_border_width) * 1px) solid var(--unit-style-brand_color);
    :hover:not(:disabled) {
      background-color: var(--unit-style-brand_color);
      color: #FFFFFF;
      border: calc(var(--unit-style-button_hover_border_width) * 1px) solid var(--unit-style-brand_color);
    }
  `;
  return b === !1 ? /* @__PURE__ */ at(Fu, { children: [
    /* @__PURE__ */ at(
      $u,
      {
        ref: O,
        initialOpen: !1,
        isMixOption: T,
        onClose: $,
        productOptions: N,
        children: [
          /* @__PURE__ */ at(
            "div",
            {
              css: Re`
          padding: 20px;
        `,
              children: [
                /* @__PURE__ */ Pe(
                  "h6",
                  {
                    css: Re`
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 700;
            margin: 0;
          `,
                    children: l("설명_연락처를등록해주세요")
                  }
                ),
                /* @__PURE__ */ Pe(
                  "p",
                  {
                    css: Re`
            font-family: Pretendard;
            margin: 4px 0 0;
            font-size: 14px;
            font-weight: 400;
            color: #717680;
            >span {
              color: var(--unit-style-brand_color);
            }
          `,
                    dangerouslySetInnerHTML: { __html: l("설명_상품재입고시마이페이지에등록된연락처로안내마이페이지정보수정") }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ Pe(
            "div",
            {
              css: Re`
          display: flex;
          padding: 16px 20px 20px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          background-color: #ffffff;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          ${""};
          z-index: 1002;
        `,
              children: /* @__PURE__ */ Pe(
                "button",
                {
                  css: Re`
            cursor: pointer;
            flex: 1;
            appearance: none;
            height: 48px;
            border: 0;
            border-radius: calc(var(--unit-style-button_radius) * 1px);
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 400;
            ${ee};
          `,
                  onClick: $,
                  children: l("버튼_확인")
                }
              )
            },
            "SiteMemberHasCallNumCase"
          )
        ]
      }
    ),
    /* @__PURE__ */ Pe(Qu, { ref: v, message: l("설명_재입고알림신청이완료됐어요") })
  ] }) : H === !0 ? /* @__PURE__ */ at(Fu, { children: [
    /* @__PURE__ */ at(
      $u,
      {
        ref: O,
        initialOpen: !1,
        isMixOption: T,
        onClose: $,
        productOptions: N,
        children: [
          /* @__PURE__ */ at(
            "div",
            {
              css: Re`
          padding: 20px;
        `,
              children: [
                /* @__PURE__ */ Pe(
                  "h6",
                  {
                    css: Re`
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 700;
            margin: 0;
          `,
                    children: l("설명_재입고알림신청은최대n개까지가능해요", "10")
                  }
                ),
                /* @__PURE__ */ Pe(
                  "p",
                  {
                    css: Re`
            font-family: Pretendard;
            margin: 4px 0 0;
            font-size: 14px;
            font-weight: 400;
            color: #717680;
          `,
                    children: l("설명_마이페이지에서기존재입고알림신청목록을삭제하고다시신청해주세요")
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ at(
            "div",
            {
              css: Re`
          display: flex;
          padding: 16px 20px 20px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          background-color: #ffffff;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          ${""};
          z-index: 1002;
        `,
              children: [
                /* @__PURE__ */ Pe(
                  "button",
                  {
                    css: Re`
            cursor: pointer;
            flex: 1;
            appearance: none;
            height: 48px;
            border-width: 1px;
            border-color: transparent;
            border-radius: calc(var(--unit-style-button_radius) * 1px);
            border-style: solid;
            background-color: #ffffff;
            color: #4b515b;
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 400;
          `,
                    onClick: $,
                    children: l("버튼_취소")
                  }
                ),
                /* @__PURE__ */ Pe(
                  "a",
                  {
                    href: "/shop_mypage/?m2=restock_notification",
                    css: Re`
            display: flex;
            cursor: pointer;
            flex: 1;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            appearance: none;
            height: 48px;
            border: 0;
            border-radius: calc(var(--unit-style-button_radius) * 1px);
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 400;
            ${ee};
          `,
                    children: l("버튼_재입고알림관리")
                  }
                )
              ]
            },
            "MaxRestockRequestReachedCase"
          )
        ]
      }
    ),
    /* @__PURE__ */ Pe(Qu, { ref: v, message: l("설명_재입고알림신청이완료됐어요") })
  ] }) : /* @__PURE__ */ at(Fu, { children: [
    /* @__PURE__ */ at(
      $u,
      {
        ref: O,
        initialOpen: !1,
        isMixOption: T,
        onClose: $,
        productOptions: N,
        children: [
          /* @__PURE__ */ at(
            "div",
            {
              css: Re`
            padding: 20px;
          `,
              children: [
                /* @__PURE__ */ Pe(
                  "h6",
                  {
                    css: Re`
              font-family: Pretendard;
              font-size: 20px;
              font-weight: 700;
              margin: 0;
            `,
                    children: l("타이틀_재입고알림신청")
                  }
                ),
                /* @__PURE__ */ Pe(
                  "p",
                  {
                    css: Re`
              font-family: Pretendard;
              margin: 4px 0 0;
              font-size: 14px;
              font-weight: 400;
              color: #717680;
            `,
                    children: l("설명_상품재입고시마이페이지에등록된연락처로안내드려요")
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ at(
            "div",
            {
              ref: M,
              css: Re`
            max-height: 100vh;
            padding: 0 24px;
            overflow-y: auto;
          `,
              children: [
                /* @__PURE__ */ at(
                  "div",
                  {
                    css: Re`
              display: flex;
              align-items: center;
              gap: 16px;
            `,
                    children: [
                      /* @__PURE__ */ Pe(
                        "img",
                        {
                          width: 56,
                          height: 56,
                          css: Re`
                display: block;
                width: 56px;
                height: 56px;
                object-fit: cover;
                border-radius: 12px;
                border-width: 0px;
              `,
                          src: g,
                          alt: "Product thumbnail"
                        }
                      ),
                      /* @__PURE__ */ Pe(
                        "div",
                        {
                          css: Re`
                font-family: Pretendard;
                font-size: 16px;
                font-weight: 400;
              `,
                          children: R
                        }
                      )
                    ]
                  }
                ),
                U.some(Boolean) ? /* @__PURE__ */ Pe(
                  "div",
                  {
                    css: Re`
              /* display: none; */
              padding: 12px;
              margin: 12px 0;
              background-color: #f8f9fb;
              border-radius: 8px;
            `,
                    children: /* @__PURE__ */ Pe(
                      "div",
                      {
                        css: Re`
                display: flex;
                flex-wrap: wrap;
              `,
                        children: U.map((E, q) => {
                          const te = q === U.length - 1, ge = N[q].values.find((Ee) => Ee.optionValueCode === E);
                          return ge ? /* @__PURE__ */ at(
                            "div",
                            {
                              css: Re`
                      display: flex;
                      flex-wrap: no-wrap;
                      align-items: center;
                      color: #717680;
                      font-family: Pretendard;
                    `,
                              children: [
                                /* @__PURE__ */ Pe(
                                  "div",
                                  {
                                    css: Re`
                        font-family: Pretendard;
                        font-weight: 400;
                        font-size: 14px;
                      `,
                                    children: `${N[q].optionName}: ${ge.optionValueName}`
                                  }
                                ),
                                te ? null : /* @__PURE__ */ Pe(
                                  "div",
                                  {
                                    css: Re`
                          width: 12px;
                          height: 1px;
                          background-color: #e2e5e9;
                          transform: rotate(90deg);
                        `
                                  }
                                )
                              ]
                            },
                            N[q].optionCode
                          ) : null;
                        })
                      }
                    )
                  }
                ) : null,
                oe ? /* @__PURE__ */ at(
                  "div",
                  {
                    css: Re`
                display: flex;
                padding: 12px 16px;
                gap: 8px;
                align-items: center;
                font-size: 14px;
                color: rgba(21, 24, 30, 1);
                background-color: rgba(255, 251, 216, 1);
                border-radius: 8px;
                margin-bottom: 12px;
              `,
                    children: [
                      /* @__PURE__ */ Pe("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ Pe("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.00026 0.93335C7.62936 0.93335 7.26528 1.03137 6.94323 1.21722C6.62127 1.40304 6.3526 1.67008 6.1623 1.99167L1.22231 10.4452L1.21921 10.4508C1.03287 10.7815 0.934642 11.1558 0.933602 11.5365C0.932562 11.9171 1.02875 12.292 1.21326 12.6238C1.3978 12.9557 1.66459 13.2334 1.98805 13.4285C2.31155 13.6237 2.68008 13.7291 3.05691 13.7333L12.9327 13.7334L12.9436 13.7333C13.3204 13.729 13.6889 13.6237 14.0125 13.4285C14.3359 13.2334 14.6027 12.9557 14.7873 12.6238C14.9718 12.292 15.068 11.9171 15.0669 11.5365C15.0659 11.1559 14.9678 10.7815 14.7814 10.4507L9.83933 1.99357L9.83821 1.99168C9.64791 1.67009 9.37926 1.40304 9.05729 1.21722C8.73524 1.03137 8.37116 0.93335 8.00026 0.93335ZM8.60024 5.33342C8.60024 5.00204 8.33161 4.73342 8.00024 4.73342C7.66887 4.73342 7.40024 5.00204 7.40024 5.33342V8.66675C7.40024 8.99812 7.66887 9.26675 8.00024 9.26675C8.33161 9.26675 8.60024 8.99812 8.60024 8.66675V5.33342ZM8.60024 10.6667C8.60024 10.3354 8.33161 10.0667 8.00024 10.0667C7.66887 10.0667 7.40024 10.3354 7.40024 10.6667V10.7334C7.40024 11.0648 7.66887 11.3334 8.00024 11.3334C8.33161 11.3334 8.60024 11.0648 8.60024 10.7334V10.6667Z", fill: "#E28100" }) }),
                      /* @__PURE__ */ Pe("span", { children: l("설명_재고가있어구매할수있는옵션이에요") })
                    ]
                  }
                ) : null,
                /* @__PURE__ */ Pe(
                  "div",
                  {
                    css: Re`
              padding: 12px 0;
            `,
                    children: (!T || !L) && N.map((E, q) => {
                      const te = (Se) => {
                        ne((Q) => {
                          const f = [...Q.slice(0, q), Se], m = Bu(f, { unorderedArrays: !0 });
                          return z(typeof me[m] == "string" ? [me[m]] : []), f;
                        });
                      }, ge = (Se) => {
                        ne((Q) => {
                          const f = [...Q.slice(0, q), Se, ...Q.slice(q + 1)];
                          return z(f.map((m) => me[Bu([m])] ?? "")), f;
                        });
                      };
                      if (T) {
                        const Se = ((E == null ? void 0 : E.values) ?? []).filter((Q) => U[q] !== void 0 || de.some((f) => [...U, Q.optionValueCode].reduce(
                          (m, P, X) => m && f.value_code_list[X] === P,
                          !0
                        ))).map((Q) => ({ key: Q.optionValueCode, name: Q.optionValueName }));
                        return /* @__PURE__ */ at(
                          "div",
                          {
                            css: Re`
                      margin-bottom: 24px;
                    `,
                            children: [
                              /* @__PURE__ */ Pe(
                                "div",
                                {
                                  css: Re`
                        color: #15181e;
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 6px;
                      `,
                                  children: E.optionName
                                }
                              ),
                              /* @__PURE__ */ Pe(
                                Ud,
                                {
                                  ref: (Q) => K.current[q] = Q,
                                  disabled: q === 0 ? !1 : U[q - 1] === void 0,
                                  options: Se,
                                  selected: U[q],
                                  setSelected: te,
                                  closeCallback: ve,
                                  openCallback: () => {
                                    K.current.forEach((Q, f) => {
                                      f !== q && (Q == null || Q.close());
                                    });
                                  }
                                }
                              )
                            ]
                          },
                          E.optionCode
                        );
                      }
                      const Ee = ((E == null ? void 0 : E.values) ?? []).filter((Se) => de.filter((Q) => Q.option_code_list.includes(E.optionCode)).some((Q) => Q.value_code_list.includes(Se.optionValueCode))).map((Se) => ({ key: Se.optionValueCode, name: Se.optionValueName }));
                      return /* @__PURE__ */ at(
                        "div",
                        {
                          css: Re`
                  margin-bottom: 24px;
                `,
                          children: [
                            /* @__PURE__ */ Pe(
                              "div",
                              {
                                css: Re`
                    color: #15181e;
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 6px;
                  `,
                                children: E.optionName
                              }
                            ),
                            /* @__PURE__ */ Pe(
                              Ud,
                              {
                                ref: (Se) => K.current[q] = Se,
                                disabled: !1,
                                options: Ee,
                                selected: U[q],
                                setSelected: ge,
                                closeCallback: ve,
                                openCallback: () => {
                                  K.current.forEach((Se, Q) => {
                                    Q !== q && (Se == null || Se.close());
                                  });
                                }
                              }
                            )
                          ]
                        },
                        E.optionCode
                      );
                    })
                  }
                )
              ]
            },
            "ReqNotiRestockCase"
          ),
          /* @__PURE__ */ at(
            "div",
            {
              css: Re`
            display: flex;
            padding: 16px 20px 20px;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
            background-color: #ffffff;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            box-shadow:
              0px 14px 32px 0px #4B515B1F,
              0px 10px 14px 0px #4B515B1A,
              0px 0px 0px 1px #4B515B08,
              0px 0px 1px 0px #4B515B33;
            z-index: 1002;
          `,
              children: [
                /* @__PURE__ */ Pe(
                  "button",
                  {
                    css: Re`
              cursor: pointer;
              flex: 1;
              appearance: none;
              height: 48px;
              border-width: 1px;
              border-color: transparent;
              border-radius: calc(var(--unit-style-button_radius) * 1px);
              border-style: solid;
              background-color: #ffffff;
              color: #4b515b;
              font-family: Pretendard;
              font-size: 16px;
              font-weight: 400;
            `,
                    onClick: $,
                    children: l("버튼_취소")
                  }
                ),
                /* @__PURE__ */ Pe(
                  "button",
                  {
                    disabled: oe || (T ? N.length !== 0 && ie.length === 0 : ie.includes("") || ie.length !== N.length),
                    css: Re`
              cursor: pointer;
              flex: 1;
              appearance: none;
              height: 48px;
              border: 0;
              border-radius: calc(var(--unit-style-button_radius) * 1px);
              font-family: Pretendard;
              font-size: 16px;
              font-weight: 400;
              &:disabled {
                cursor: not-allowed;
                opacity: 0.3;
              }
              ${ee}
            `,
                    onClick: () => {
                      a.invalidateQueries({ queryKey: ["SiteMemberHasCallNum"] }), F({
                        productCode: x,
                        selectedOptionCodes: ie
                      });
                    },
                    children: l("버튼_신청")
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ Pe(Qu, { ref: v, message: l("설명_재입고알림신청이완료됐어요") })
  ] });
}
const va = document.getElementById("@im/req-noti-restock");
if (!va)
  throw new Error("Root element not found for `@im/req-noti-restock`");
va.attachShadow({ mode: "open" });
const wa = va.shadowRoot;
if (wa === null)
  throw new Error("Shadow root not found for `@im/req-noti-restock`");
const f1 = new Fy(), d1 = sh({
  key: "req-noti-restock",
  container: wa
});
i1.createRoot(wa).render(
  /* @__PURE__ */ Pe(pe.StrictMode, { children: /* @__PURE__ */ Pe(my, { value: d1, children: /* @__PURE__ */ Pe(s1, { children: /* @__PURE__ */ Pe(by, { client: f1, children: /* @__PURE__ */ Pe(pe.Suspense, { fallback: null, children: /* @__PURE__ */ Pe(c1, {}) }) }) }) }) })
);
export {
  d1 as myCache
};
