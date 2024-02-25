(() => {
  var ol = Object.create;
  var xn = Object.defineProperty;
  var sl = Object.getOwnPropertyDescriptor;
  var nl = Object.getOwnPropertyNames;
  var il = Object.getPrototypeOf,
    al = Object.prototype.hasOwnProperty;
  var Jt = (r, t) => () => (
    t || r((t = { exports: {} }).exports, t), t.exports
  );
  var cl = (r, t, e, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of nl(t))
        !al.call(r, s) &&
          s !== e &&
          xn(r, s, {
            get: () => t[s],
            enumerable: !(o = sl(t, s)) || o.enumerable
          });
    return r;
  };
  var yn = (r, t, e) => (
    (e = r != null ? ol(il(r)) : {}),
    cl(
      t || !r || !r.__esModule
        ? xn(e, "default", { value: r, enumerable: !0 })
        : e,
      r
    )
  );
  var vn = Jt((Zp, eo) => {
    function ul(r) {
      if (Array.isArray(r)) return r;
    }
    (eo.exports = ul),
      (eo.exports.__esModule = !0),
      (eo.exports.default = eo.exports);
  });
  var wn = Jt((Qp, ro) => {
    function ll(r, t) {
      var e =
        r == null
          ? null
          : (typeof Symbol < "u" && r[Symbol.iterator]) || r["@@iterator"];
      if (e != null) {
        var o,
          s,
          n,
          a,
          i = [],
          c = !0,
          u = !1;
        try {
          if (((n = (e = e.call(r)).next), t === 0)) {
            if (Object(e) !== e) return;
            c = !1;
          } else
            for (
              ;
              !(c = (o = n.call(e)).done) && (i.push(o.value), i.length !== t);
              c = !0
            );
        } catch (l) {
          (u = !0), (s = l);
        } finally {
          try {
            if (!c && e.return != null && ((a = e.return()), Object(a) !== a))
              return;
          } finally {
            if (u) throw s;
          }
        }
        return i;
      }
    }
    (ro.exports = ll),
      (ro.exports.__esModule = !0),
      (ro.exports.default = ro.exports);
  });
  var Tn = Jt((Xp, oo) => {
    function hl(r, t) {
      (t == null || t > r.length) && (t = r.length);
      for (var e = 0, o = new Array(t); e < t; e++) o[e] = r[e];
      return o;
    }
    (oo.exports = hl),
      (oo.exports.__esModule = !0),
      (oo.exports.default = oo.exports);
  });
  var Sn = Jt((Yp, so) => {
    var bn = Tn();
    function pl(r, t) {
      if (r) {
        if (typeof r == "string") return bn(r, t);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        if (
          (e === "Object" && r.constructor && (e = r.constructor.name),
          e === "Map" || e === "Set")
        )
          return Array.from(r);
        if (
          e === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        )
          return bn(r, t);
      }
    }
    (so.exports = pl),
      (so.exports.__esModule = !0),
      (so.exports.default = so.exports);
  });
  var An = Jt((Hp, no) => {
    function ml() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    (no.exports = ml),
      (no.exports.__esModule = !0),
      (no.exports.default = no.exports);
  });
  var Cn = Jt(($p, io) => {
    var fl = vn(),
      dl = wn(),
      gl = Sn(),
      _l = An();
    function xl(r, t) {
      return fl(r) || dl(r, t) || gl(r, t) || _l();
    }
    (io.exports = xl),
      (io.exports.__esModule = !0),
      (io.exports.default = io.exports);
  });
  var Nn = Jt((Kp, ao) => {
    function yl(r, t) {
      if (!(r instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    (ao.exports = yl),
      (ao.exports.__esModule = !0),
      (ao.exports.default = ao.exports);
  });
  var Ns = Jt((Jp, Ee) => {
    function Cs(r) {
      "@babel/helpers - typeof";
      return (
        (Ee.exports = Cs =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Ee.exports.__esModule = !0),
        (Ee.exports.default = Ee.exports),
        Cs(r)
      );
    }
    (Ee.exports = Cs),
      (Ee.exports.__esModule = !0),
      (Ee.exports.default = Ee.exports);
  });
  var kn = Jt((tm, co) => {
    var On = Ns().default;
    function vl(r, t) {
      if (On(r) !== "object" || r === null) return r;
      var e = r[Symbol.toPrimitive];
      if (e !== void 0) {
        var o = e.call(r, t || "default");
        if (On(o) !== "object") return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(r);
    }
    (co.exports = vl),
      (co.exports.__esModule = !0),
      (co.exports.default = co.exports);
  });
  var Dn = Jt((em, uo) => {
    var wl = Ns().default,
      Tl = kn();
    function bl(r) {
      var t = Tl(r, "string");
      return wl(t) === "symbol" ? t : String(t);
    }
    (uo.exports = bl),
      (uo.exports.__esModule = !0),
      (uo.exports.default = uo.exports);
  });
  var Mn = Jt((rm, lo) => {
    var Sl = Dn();
    function En(r, t) {
      for (var e = 0; e < t.length; e++) {
        var o = t[e];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(r, Sl(o.key), o);
      }
    }
    function Al(r, t, e) {
      return (
        t && En(r.prototype, t),
        e && En(r, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    }
    (lo.exports = Al),
      (lo.exports.__esModule = !0),
      (lo.exports.default = lo.exports);
  });
  var Os = Jt((Eo, Fn) => {
    (function (r, t) {
      typeof Eo == "object" && typeof Fn < "u"
        ? t(Eo, Cn(), Nn(), Mn())
        : typeof define == "function" && define.amd
        ? define(
            [
              "exports",
              "@babel/runtime/helpers/slicedToArray",
              "@babel/runtime/helpers/classCallCheck",
              "@babel/runtime/helpers/createClass"
            ],
            t
          )
        : ((r = typeof globalThis < "u" ? globalThis : r || self),
          t(
            (r.automationEvents = {}),
            r._slicedToArray,
            r._classCallCheck,
            r._createClass
          ));
    })(Eo, function (r, t, e, o) {
      "use strict";
      var s = function (A, O, b) {
          return {
            endTime: O,
            insertTime: b,
            type: "exponentialRampToValue",
            value: A
          };
        },
        n = function (A, O, b) {
          return {
            endTime: O,
            insertTime: b,
            type: "linearRampToValue",
            value: A
          };
        },
        a = function (A, O) {
          return { startTime: O, type: "setValue", value: A };
        },
        i = function (A, O, b) {
          return {
            duration: b,
            startTime: O,
            type: "setValueCurve",
            values: A
          };
        },
        c = function (A, O, b) {
          var P = b.startTime,
            k = b.target,
            L = b.timeConstant;
          return k + (O - k) * Math.exp((P - A) / L);
        },
        u = function (A) {
          return A.type === "exponentialRampToValue";
        },
        l = function (A) {
          return A.type === "linearRampToValue";
        },
        h = function (A) {
          return u(A) || l(A);
        },
        f = function (A) {
          return A.type === "setValue";
        },
        m = function (A) {
          return A.type === "setValueCurve";
        },
        p = function F(A, O, b, P) {
          var k = A[O];
          return k === void 0
            ? P
            : h(k) || f(k)
            ? k.value
            : m(k)
            ? k.values[k.values.length - 1]
            : c(b, F(A, O - 1, k.startTime, P), k);
        },
        d = function (A, O, b, P, k) {
          return b === void 0
            ? [P.insertTime, k]
            : h(b)
            ? [b.endTime, b.value]
            : f(b)
            ? [b.startTime, b.value]
            : m(b)
            ? [b.startTime + b.duration, b.values[b.values.length - 1]]
            : [b.startTime, p(A, O - 1, b.startTime, k)];
        },
        _ = function (A) {
          return A.type === "cancelAndHold";
        },
        y = function (A) {
          return A.type === "cancelScheduledValues";
        },
        S = function (A) {
          return _(A) || y(A)
            ? A.cancelTime
            : u(A) || l(A)
            ? A.endTime
            : A.startTime;
        },
        C = function (A, O, b, P) {
          var k = P.endTime,
            L = P.value;
          return b === L
            ? L
            : (0 < b && 0 < L) || (b < 0 && L < 0)
            ? b * Math.pow(L / b, (A - O) / (k - O))
            : 0;
        },
        D = function (A, O, b, P) {
          var k = P.endTime,
            L = P.value;
          return b + ((A - O) / (k - O)) * (L - b);
        },
        x = function (A, O) {
          var b = Math.floor(O),
            P = Math.ceil(O);
          return b === P ? A[b] : (1 - (O - b)) * A[b] + (1 - (P - O)) * A[P];
        },
        w = function (A, O) {
          var b = O.duration,
            P = O.startTime,
            k = O.values,
            L = ((A - P) / b) * (k.length - 1);
          return x(k, L);
        },
        T = function (A) {
          return A.type === "setTarget";
        },
        v = (function (F) {
          function A(O) {
            e(this, A),
              (this._automationEvents = []),
              (this._currenTime = 0),
              (this._defaultValue = O);
          }
          return (
            o(A, [
              {
                key: F,
                value: function () {
                  return this._automationEvents[Symbol.iterator]();
                }
              },
              {
                key: "add",
                value: function (b) {
                  var P = S(b);
                  if (_(b) || y(b)) {
                    var k = this._automationEvents.findIndex(function (U) {
                        return y(b) && m(U)
                          ? U.startTime + U.duration >= P
                          : S(U) >= P;
                      }),
                      L = this._automationEvents[k];
                    if (
                      (k !== -1 &&
                        (this._automationEvents = this._automationEvents.slice(
                          0,
                          k
                        )),
                      _(b))
                    ) {
                      var R =
                        this._automationEvents[
                          this._automationEvents.length - 1
                        ];
                      if (L !== void 0 && h(L)) {
                        if (R !== void 0 && T(R))
                          throw new Error("The internal list is malformed.");
                        var J =
                            R === void 0
                              ? L.insertTime
                              : m(R)
                              ? R.startTime + R.duration
                              : S(R),
                          St =
                            R === void 0
                              ? this._defaultValue
                              : m(R)
                              ? R.values[R.values.length - 1]
                              : R.value,
                          Dt = u(L) ? C(P, J, St, L) : D(P, J, St, L),
                          Y = u(L)
                            ? s(Dt, P, this._currenTime)
                            : n(Dt, P, this._currenTime);
                        this._automationEvents.push(Y);
                      }
                      if (
                        (R !== void 0 &&
                          T(R) &&
                          this._automationEvents.push(a(this.getValue(P), P)),
                        R !== void 0 && m(R) && R.startTime + R.duration > P)
                      ) {
                        var st = P - R.startTime,
                          _t = (R.values.length - 1) / R.duration,
                          G = Math.max(2, 1 + Math.ceil(st * _t)),
                          Ht = (st / (G - 1)) * _t,
                          $t = R.values.slice(0, G);
                        if (Ht < 1)
                          for (var Qt = 1; Qt < G; Qt += 1) {
                            var De = (Ht * Qt) % 1;
                            $t[Qt] =
                              R.values[Qt - 1] * (1 - De) + R.values[Qt] * De;
                          }
                        this._automationEvents[
                          this._automationEvents.length - 1
                        ] = i($t, R.startTime, st);
                      }
                    }
                  } else {
                    var Je = this._automationEvents.findIndex(function (U) {
                        return S(U) > P;
                      }),
                      mr =
                        Je === -1
                          ? this._automationEvents[
                              this._automationEvents.length - 1
                            ]
                          : this._automationEvents[Je - 1];
                    if (mr !== void 0 && m(mr) && S(mr) + mr.duration > P)
                      return !1;
                    var W = u(b)
                      ? s(b.value, b.endTime, this._currenTime)
                      : l(b)
                      ? n(b.value, P, this._currenTime)
                      : b;
                    if (Je === -1) this._automationEvents.push(W);
                    else {
                      if (
                        m(b) &&
                        P + b.duration > S(this._automationEvents[Je])
                      )
                        return !1;
                      this._automationEvents.splice(Je, 0, W);
                    }
                  }
                  return !0;
                }
              },
              {
                key: "flush",
                value: function (b) {
                  var P = this._automationEvents.findIndex(function (R) {
                    return S(R) > b;
                  });
                  if (P > 1) {
                    var k = this._automationEvents.slice(P - 1),
                      L = k[0];
                    T(L) &&
                      k.unshift(
                        a(
                          p(
                            this._automationEvents,
                            P - 2,
                            L.startTime,
                            this._defaultValue
                          ),
                          L.startTime
                        )
                      ),
                      (this._automationEvents = k);
                  }
                }
              },
              {
                key: "getValue",
                value: function (b) {
                  if (this._automationEvents.length === 0)
                    return this._defaultValue;
                  var P = this._automationEvents.findIndex(function ($t) {
                      return S($t) > b;
                    }),
                    k = this._automationEvents[P],
                    L = (P === -1 ? this._automationEvents.length : P) - 1,
                    R = this._automationEvents[L];
                  if (
                    R !== void 0 &&
                    T(R) &&
                    (k === void 0 || !h(k) || k.insertTime > b)
                  )
                    return c(
                      b,
                      p(
                        this._automationEvents,
                        L - 1,
                        R.startTime,
                        this._defaultValue
                      ),
                      R
                    );
                  if (R !== void 0 && f(R) && (k === void 0 || !h(k)))
                    return R.value;
                  if (
                    R !== void 0 &&
                    m(R) &&
                    (k === void 0 || !h(k) || R.startTime + R.duration > b)
                  )
                    return b < R.startTime + R.duration
                      ? w(b, R)
                      : R.values[R.values.length - 1];
                  if (R !== void 0 && h(R) && (k === void 0 || !h(k)))
                    return R.value;
                  if (k !== void 0 && u(k)) {
                    var J = d(
                        this._automationEvents,
                        L,
                        R,
                        k,
                        this._defaultValue
                      ),
                      St = t(J, 2),
                      Dt = St[0],
                      Y = St[1];
                    return C(b, Dt, Y, k);
                  }
                  if (k !== void 0 && l(k)) {
                    var st = d(
                        this._automationEvents,
                        L,
                        R,
                        k,
                        this._defaultValue
                      ),
                      _t = t(st, 2),
                      G = _t[0],
                      Ht = _t[1];
                    return D(b, G, Ht, k);
                  }
                  return this._defaultValue;
                }
              }
            ]),
            A
          );
        })(Symbol.iterator),
        q = function (A) {
          return { cancelTime: A, type: "cancelAndHold" };
        },
        M = function (A) {
          return { cancelTime: A, type: "cancelScheduledValues" };
        },
        E = function (A, O) {
          return { endTime: O, type: "exponentialRampToValue", value: A };
        },
        N = function (A, O) {
          return { endTime: O, type: "linearRampToValue", value: A };
        },
        j = function (A, O, b) {
          return {
            startTime: O,
            target: A,
            timeConstant: b,
            type: "setTarget"
          };
        };
      (r.AutomationEventList = v),
        (r.createCancelAndHoldAutomationEvent = q),
        (r.createCancelScheduledValuesAutomationEvent = M),
        (r.createExponentialRampToValueAutomationEvent = E),
        (r.createLinearRampToValueAutomationEvent = N),
        (r.createSetTargetAutomationEvent = j),
        (r.createSetValueAutomationEvent = a),
        (r.createSetValueCurveAutomationEvent = i);
    });
  });
  var to = "14.7.77";
  var Gt = yn(Os());
  var Rn = () => new DOMException("", "AbortError");
  var In =
    (r) =>
    (t, e, [o, s, n], a) => {
      r(t[s], [e, o, n], (i) => i[0] === e && i[1] === o, a);
    };
  var qn = (r) => (t, e, o) => {
    let s = [];
    for (let n = 0; n < o.numberOfInputs; n += 1) s.push(new Set());
    r.set(t, {
      activeInputs: s,
      outputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: e
    });
  };
  var Pn = (r) => (t, e) => {
    r.set(t, {
      activeInputs: new Set(),
      passiveInputs: new WeakMap(),
      renderer: e
    });
  };
  var ve = new WeakSet(),
    Mo = new WeakMap(),
    fr = new WeakMap(),
    Fo = new WeakMap(),
    ho = new WeakMap(),
    dr = new WeakMap(),
    Ro = new WeakMap(),
    po = new WeakMap(),
    mo = new WeakMap(),
    fo = new WeakMap();
  var Vn = {
      construct() {
        return Vn;
      }
    },
    Ln = (r) => {
      try {
        let t = new Proxy(r, Vn);
        new t();
      } catch {
        return !1;
      }
      return !0;
    };
  var Wn =
      /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
    ks = (r, t) => {
      let e = [],
        o = r.replace(/^[\s]+/, ""),
        s = o.match(Wn);
      for (; s !== null; ) {
        let n = s[1].slice(1, -1),
          a = s[0]
            .replace(/([\s]+)?;?$/, "")
            .replace(n, new URL(n, t).toString());
        e.push(a),
          (o = o.slice(s[0].length).replace(/^[\s]+/, "")),
          (s = o.match(Wn));
      }
      return [e.join(";"), o];
    };
  var jn = (r) => {
      if (r !== void 0 && !Array.isArray(r))
        throw new TypeError(
          "The parameterDescriptors property of given value for processorCtor is not an array."
        );
    },
    Bn = (r) => {
      if (!Ln(r))
        throw new TypeError(
          "The given value for processorCtor should be a constructor."
        );
      if (r.prototype === null || typeof r.prototype != "object")
        throw new TypeError(
          "The given value for processorCtor should have a prototype."
        );
    },
    Gn = (r, t, e, o, s, n, a, i, c, u, l, h, f) => {
      let m = 0;
      return (p, d, _ = { credentials: "omit" }) => {
        let y = l.get(p);
        if (y !== void 0 && y.has(d)) return Promise.resolve();
        let S = u.get(p);
        if (S !== void 0) {
          let x = S.get(d);
          if (x !== void 0) return x;
        }
        let C = n(p),
          D =
            C.audioWorklet === void 0
              ? s(d)
                  .then(([x, w]) => {
                    let [T, v] = ks(x, w),
                      q = `${T};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${v}
})})(window,'_AWGS')`;
                    return e(q);
                  })
                  .then(() => {
                    let x = f._AWGS.pop();
                    if (x === void 0) throw new SyntaxError();
                    o(C.currentTime, C.sampleRate, () =>
                      x(
                        class {},
                        void 0,
                        (w, T) => {
                          if (w.trim() === "") throw t();
                          let v = mo.get(C);
                          if (v !== void 0) {
                            if (v.has(w)) throw t();
                            Bn(T), jn(T.parameterDescriptors), v.set(w, T);
                          } else
                            Bn(T),
                              jn(T.parameterDescriptors),
                              mo.set(C, new Map([[w, T]]));
                        },
                        C.sampleRate,
                        void 0,
                        void 0
                      )
                    );
                  })
              : Promise.all([s(d), Promise.resolve(r(h, h))]).then(
                  ([[x, w], T]) => {
                    let v = m + 1;
                    m = v;
                    let [q, M] = ks(x, w),
                      F = `${q};((AudioWorkletProcessor,registerProcessor)=>{${M}
})(${
                        T
                          ? "AudioWorkletProcessor"
                          : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"
                      },(n,p)=>registerProcessor(n,class extends p{${
                        T
                          ? ""
                          : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"
                      }process(i,o,p){${
                        T
                          ? ""
                          : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"
                      }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${v}',class extends AudioWorkletProcessor{process(){return !1}})`,
                      A = new Blob([F], {
                        type: "application/javascript; charset=utf-8"
                      }),
                      O = URL.createObjectURL(A);
                    return C.audioWorklet
                      .addModule(O, _)
                      .then(() => {
                        if (i(C)) return C;
                        let b = a(C);
                        return b.audioWorklet.addModule(O, _).then(() => b);
                      })
                      .then((b) => {
                        if (c === null) throw new SyntaxError();
                        try {
                          new c(b, `__sac${v}`);
                        } catch {
                          throw new SyntaxError();
                        }
                      })
                      .finally(() => URL.revokeObjectURL(O));
                  }
                );
        return (
          S === void 0 ? u.set(p, new Map([[d, D]])) : S.set(d, D),
          D.then(() => {
            let x = l.get(p);
            x === void 0 ? l.set(p, new Set([d])) : x.add(d);
          }).finally(() => {
            let x = u.get(p);
            x !== void 0 && x.delete(d);
          }),
          D
        );
      };
    };
  var wt = (r, t) => {
    let e = r.get(t);
    if (e === void 0)
      throw new Error("A value with the given key could not be found.");
    return e;
  };
  var je = (r, t) => {
    let e = Array.from(r).filter(t);
    if (e.length > 1) throw Error("More than one element was found.");
    if (e.length === 0) throw Error("No element was found.");
    let [o] = e;
    return r.delete(o), o;
  };
  var Io = (r, t, e, o) => {
    let s = wt(r, t),
      n = je(s, (a) => a[0] === e && a[1] === o);
    return s.size === 0 && r.delete(t), n;
  };
  var we = (r) => wt(Ro, r);
  var ue = (r) => {
    if (ve.has(r)) throw new Error("The AudioNode is already stored.");
    ve.add(r), we(r).forEach((t) => t(!0));
  };
  var qo = (r) => "port" in r;
  var Te = (r) => {
    if (!ve.has(r)) throw new Error("The AudioNode is not stored.");
    ve.delete(r), we(r).forEach((t) => t(!1));
  };
  var go = (r, t) => {
    !qo(r) && t.every((e) => e.size === 0) && Te(r);
  };
  var zn = (r, t, e, o, s, n, a, i, c, u, l, h, f) => {
    let m = new WeakMap();
    return (p, d, _, y, S) => {
      let { activeInputs: C, passiveInputs: D } = n(d),
        { outputs: x } = n(p),
        w = i(p),
        T = (v) => {
          let q = c(d),
            M = c(p);
          if (v) {
            let E = Io(D, p, _, y);
            r(C, p, E, !1), !S && !h(p) && e(M, q, _, y), f(d) && ue(d);
          } else {
            let E = o(C, p, _, y);
            t(D, y, E, !1), !S && !h(p) && s(M, q, _, y);
            let N = a(d);
            if (N === 0) l(d) && go(d, C);
            else {
              let j = m.get(d);
              j !== void 0 && clearTimeout(j),
                m.set(
                  d,
                  setTimeout(() => {
                    l(d) && go(d, C);
                  }, N * 1e3)
                );
            }
          }
        };
      return u(x, [d, _, y], (v) => v[0] === d && v[1] === _ && v[2] === y, !0)
        ? (w.add(T), l(p) ? r(C, p, [_, y, T], !0) : t(D, y, [p, _, T], !0), !0)
        : !1;
    };
  };
  var Un =
    (r) =>
    (t, e, [o, s, n], a) => {
      let i = t.get(o);
      i === void 0
        ? t.set(o, new Set([[s, e, n]]))
        : r(i, [s, e, n], (c) => c[0] === s && c[1] === e, a);
    };
  var Zn = (r) => (t, e) => {
    let o = r(t, {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      gain: 0
    });
    e.connect(o).connect(t.destination);
    let s = () => {
      e.removeEventListener("ended", s), e.disconnect(o), o.disconnect();
    };
    e.addEventListener("ended", s);
  };
  var Qn = (r) => (t, e) => {
    r(t).add(e);
  };
  var Cl = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      fftSize: 2048,
      maxDecibels: -30,
      minDecibels: -100,
      smoothingTimeConstant: 0.8
    },
    Xn = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = s(i),
            l = { ...Cl, ...c },
            h = o(u, l),
            f = n(u) ? t() : null;
          super(i, !1, h, f), (this._nativeAnalyserNode = h);
        }
        get fftSize() {
          return this._nativeAnalyserNode.fftSize;
        }
        set fftSize(i) {
          this._nativeAnalyserNode.fftSize = i;
        }
        get frequencyBinCount() {
          return this._nativeAnalyserNode.frequencyBinCount;
        }
        get maxDecibels() {
          return this._nativeAnalyserNode.maxDecibels;
        }
        set maxDecibels(i) {
          let c = this._nativeAnalyserNode.maxDecibels;
          if (
            ((this._nativeAnalyserNode.maxDecibels = i),
            !(i > this._nativeAnalyserNode.minDecibels))
          )
            throw ((this._nativeAnalyserNode.maxDecibels = c), e());
        }
        get minDecibels() {
          return this._nativeAnalyserNode.minDecibels;
        }
        set minDecibels(i) {
          let c = this._nativeAnalyserNode.minDecibels;
          if (
            ((this._nativeAnalyserNode.minDecibels = i),
            !(this._nativeAnalyserNode.maxDecibels > i))
          )
            throw ((this._nativeAnalyserNode.minDecibels = c), e());
        }
        get smoothingTimeConstant() {
          return this._nativeAnalyserNode.smoothingTimeConstant;
        }
        set smoothingTimeConstant(i) {
          this._nativeAnalyserNode.smoothingTimeConstant = i;
        }
        getByteFrequencyData(i) {
          this._nativeAnalyserNode.getByteFrequencyData(i);
        }
        getByteTimeDomainData(i) {
          this._nativeAnalyserNode.getByteTimeDomainData(i);
        }
        getFloatFrequencyData(i) {
          this._nativeAnalyserNode.getFloatFrequencyData(i);
        }
        getFloatTimeDomainData(i) {
          this._nativeAnalyserNode.getFloatTimeDomainData(i);
        }
      };
  var tt = (r, t) => r.context === t;
  var Yn = (r, t, e) => () => {
    let o = new WeakMap(),
      s = async (n, a) => {
        let i = t(n);
        if (!tt(i, a)) {
          let u = {
            channelCount: i.channelCount,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            fftSize: i.fftSize,
            maxDecibels: i.maxDecibels,
            minDecibels: i.minDecibels,
            smoothingTimeConstant: i.smoothingTimeConstant
          };
          i = r(a, u);
        }
        return o.set(a, i), await e(n, a, i), i;
      };
    return {
      render(n, a) {
        let i = o.get(a);
        return i !== void 0 ? Promise.resolve(i) : s(n, a);
      }
    };
  };
  var gr = (r) => {
    try {
      r.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return !1;
    }
    return !0;
  };
  var te = () => new DOMException("", "IndexSizeError");
  var _r = (r) => {
    r.getChannelData = ((t) => (e) => {
      try {
        return t.call(r, e);
      } catch (o) {
        throw o.code === 12 ? te() : o;
      }
    })(r.getChannelData);
  };
  var Nl = { numberOfChannels: 1 },
    Hn = (r, t, e, o, s, n, a, i) => {
      let c = null;
      return class $n {
        constructor(l) {
          if (s === null)
            throw new Error(
              "Missing the native OfflineAudioContext constructor."
            );
          let {
            length: h,
            numberOfChannels: f,
            sampleRate: m
          } = { ...Nl, ...l };
          c === null && (c = new s(1, 1, 44100));
          let p =
            o !== null && t(n, n)
              ? new o({ length: h, numberOfChannels: f, sampleRate: m })
              : c.createBuffer(f, h, m);
          if (p.numberOfChannels === 0) throw e();
          return (
            typeof p.copyFromChannel != "function"
              ? (a(p), _r(p))
              : t(gr, () => gr(p)) || i(p),
            r.add(p),
            p
          );
        }
        static [Symbol.hasInstance](l) {
          return (
            (l !== null &&
              typeof l == "object" &&
              Object.getPrototypeOf(l) === $n.prototype) ||
            r.has(l)
          );
        }
      };
    };
  var xt = -34028234663852886e22,
    ft = -xt;
  var Pt = (r) => ve.has(r);
  var Ol = {
      buffer: null,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      loop: !1,
      loopEnd: 0,
      loopStart: 0,
      playbackRate: 1
    },
    Kn = (r, t, e, o, s, n, a, i) =>
      class extends r {
        constructor(u, l) {
          let h = n(u),
            f = { ...Ol, ...l },
            m = s(h, f),
            p = a(h),
            d = p ? t() : null;
          super(u, !1, m, d),
            (this._audioBufferSourceNodeRenderer = d),
            (this._isBufferNullified = !1),
            (this._isBufferSet = f.buffer !== null),
            (this._nativeAudioBufferSourceNode = m),
            (this._onended = null),
            (this._playbackRate = e(this, p, m.playbackRate, ft, xt));
        }
        get buffer() {
          return this._isBufferNullified
            ? null
            : this._nativeAudioBufferSourceNode.buffer;
        }
        set buffer(u) {
          if (((this._nativeAudioBufferSourceNode.buffer = u), u !== null)) {
            if (this._isBufferSet) throw o();
            this._isBufferSet = !0;
          }
        }
        get loop() {
          return this._nativeAudioBufferSourceNode.loop;
        }
        set loop(u) {
          this._nativeAudioBufferSourceNode.loop = u;
        }
        get loopEnd() {
          return this._nativeAudioBufferSourceNode.loopEnd;
        }
        set loopEnd(u) {
          this._nativeAudioBufferSourceNode.loopEnd = u;
        }
        get loopStart() {
          return this._nativeAudioBufferSourceNode.loopStart;
        }
        set loopStart(u) {
          this._nativeAudioBufferSourceNode.loopStart = u;
        }
        get onended() {
          return this._onended;
        }
        set onended(u) {
          let l = typeof u == "function" ? i(this, u) : null;
          this._nativeAudioBufferSourceNode.onended = l;
          let h = this._nativeAudioBufferSourceNode.onended;
          this._onended = h !== null && h === l ? u : h;
        }
        get playbackRate() {
          return this._playbackRate;
        }
        start(u = 0, l = 0, h) {
          if (
            (this._nativeAudioBufferSourceNode.start(u, l, h),
            this._audioBufferSourceNodeRenderer !== null &&
              (this._audioBufferSourceNodeRenderer.start =
                h === void 0 ? [u, l] : [u, l, h]),
            this.context.state !== "closed")
          ) {
            ue(this);
            let f = () => {
              this._nativeAudioBufferSourceNode.removeEventListener("ended", f),
                Pt(this) && Te(this);
            };
            this._nativeAudioBufferSourceNode.addEventListener("ended", f);
          }
        }
        stop(u = 0) {
          this._nativeAudioBufferSourceNode.stop(u),
            this._audioBufferSourceNodeRenderer !== null &&
              (this._audioBufferSourceNodeRenderer.stop = u);
        }
      };
  var Jn = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = null,
      i = null,
      c = async (u, l) => {
        let h = e(u),
          f = tt(h, l);
        if (!f) {
          let m = {
            buffer: h.buffer,
            channelCount: h.channelCount,
            channelCountMode: h.channelCountMode,
            channelInterpretation: h.channelInterpretation,
            loop: h.loop,
            loopEnd: h.loopEnd,
            loopStart: h.loopStart,
            playbackRate: h.playbackRate.value
          };
          (h = t(l, m)), a !== null && h.start(...a), i !== null && h.stop(i);
        }
        return (
          n.set(l, h),
          f
            ? await r(l, u.playbackRate, h.playbackRate)
            : await o(l, u.playbackRate, h.playbackRate),
          await s(u, l, h),
          h
        );
      };
    return {
      set start(u) {
        a = u;
      },
      set stop(u) {
        i = u;
      },
      render(u, l) {
        let h = n.get(l);
        return h !== void 0 ? Promise.resolve(h) : c(u, l);
      }
    };
  };
  var ti = (r) => "playbackRate" in r;
  var ei = (r) => "frequency" in r && "gain" in r;
  var ri = (r) => "offset" in r;
  var oi = (r) => !("frequency" in r) && "gain" in r;
  var si = (r) => "detune" in r && "frequency" in r;
  var ni = (r) => "pan" in r;
  var Ct = (r) => wt(Mo, r);
  var Be = (r) => wt(Fo, r);
  var Po = (r, t) => {
    let { activeInputs: e } = Ct(r);
    e.forEach((s) =>
      s.forEach(([n]) => {
        t.includes(r) || Po(n, [...t, r]);
      })
    );
    let o = ti(r)
      ? [r.playbackRate]
      : qo(r)
      ? Array.from(r.parameters.values())
      : ei(r)
      ? [r.Q, r.detune, r.frequency, r.gain]
      : ri(r)
      ? [r.offset]
      : oi(r)
      ? [r.gain]
      : si(r)
      ? [r.detune, r.frequency]
      : ni(r)
      ? [r.pan]
      : [];
    for (let s of o) {
      let n = Be(s);
      n !== void 0 && n.activeInputs.forEach(([a]) => Po(a, t));
    }
    Pt(r) && Te(r);
  };
  var Ge = (r) => {
    Po(r.destination, []);
  };
  var Vo = (r) =>
    r === void 0 ||
    typeof r == "number" ||
    (typeof r == "string" &&
      (r === "balanced" || r === "interactive" || r === "playback"));
  var ii = (r, t, e, o, s, n, a, i, c) =>
    class extends r {
      constructor(l = {}) {
        if (c === null)
          throw new Error("Missing the native AudioContext constructor.");
        let h;
        try {
          h = new c(l);
        } catch (p) {
          throw p.code === 12 && p.message === "sampleRate is not in range"
            ? e()
            : p;
        }
        if (h === null) throw o();
        if (!Vo(l.latencyHint))
          throw new TypeError(
            `The provided value '${l.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        if (l.sampleRate !== void 0 && h.sampleRate !== l.sampleRate) throw e();
        super(h, 2);
        let { latencyHint: f } = l,
          { sampleRate: m } = h;
        if (
          ((this._baseLatency =
            typeof h.baseLatency == "number"
              ? h.baseLatency
              : f === "balanced"
              ? 512 / m
              : f === "interactive" || f === void 0
              ? 256 / m
              : f === "playback"
              ? 1024 / m
              : (Math.max(2, Math.min(128, Math.round((f * m) / 128))) * 128) /
                m),
          (this._nativeAudioContext = h),
          c.name === "webkitAudioContext"
            ? ((this._nativeGainNode = h.createGain()),
              (this._nativeOscillatorNode = h.createOscillator()),
              (this._nativeGainNode.gain.value = 1e-37),
              this._nativeOscillatorNode
                .connect(this._nativeGainNode)
                .connect(h.destination),
              this._nativeOscillatorNode.start())
            : ((this._nativeGainNode = null),
              (this._nativeOscillatorNode = null)),
          (this._state = null),
          h.state === "running")
        ) {
          this._state = "suspended";
          let p = () => {
            this._state === "suspended" && (this._state = null),
              h.removeEventListener("statechange", p);
          };
          h.addEventListener("statechange", p);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null
          ? this._state
          : this._nativeAudioContext.state;
      }
      close() {
        return this.state === "closed"
          ? this._nativeAudioContext.close().then(() => {
              throw t();
            })
          : (this._state === "suspended" && (this._state = null),
            this._nativeAudioContext.close().then(() => {
              this._nativeGainNode !== null &&
                this._nativeOscillatorNode !== null &&
                (this._nativeOscillatorNode.stop(),
                this._nativeGainNode.disconnect(),
                this._nativeOscillatorNode.disconnect()),
                Ge(this);
            }));
      }
      createMediaElementSource(l) {
        return new s(this, { mediaElement: l });
      }
      createMediaStreamDestination() {
        return new n(this);
      }
      createMediaStreamSource(l) {
        return new a(this, { mediaStream: l });
      }
      createMediaStreamTrackSource(l) {
        return new i(this, { mediaStreamTrack: l });
      }
      resume() {
        return this._state === "suspended"
          ? new Promise((l, h) => {
              let f = () => {
                this._nativeAudioContext.removeEventListener("statechange", f),
                  this._nativeAudioContext.state === "running"
                    ? l()
                    : this.resume().then(l, h);
              };
              this._nativeAudioContext.addEventListener("statechange", f);
            })
          : this._nativeAudioContext.resume().catch((l) => {
              throw l === void 0 || l.code === 15 ? t() : l;
            });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((l) => {
          throw l === void 0 ? t() : l;
        });
      }
    };
  var ai = (r, t, e, o, s, n, a, i) =>
    class extends r {
      constructor(u, l) {
        let h = n(u),
          f = a(h),
          m = s(h, l, f),
          p = f ? t(i) : null;
        super(u, !1, m, p),
          (this._isNodeOfNativeOfflineAudioContext = f),
          (this._nativeAudioDestinationNode = m);
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw o();
        if (u > this._nativeAudioDestinationNode.maxChannelCount) throw e();
        this._nativeAudioDestinationNode.channelCount = u;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(u) {
        if (this._isNodeOfNativeOfflineAudioContext) throw o();
        this._nativeAudioDestinationNode.channelCountMode = u;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  var ci = (r) => {
    let t = new WeakMap(),
      e = async (o, s) => {
        let n = s.destination;
        return t.set(s, n), await r(o, s, n), n;
      };
    return {
      render(o, s) {
        let n = t.get(s);
        return n !== void 0 ? Promise.resolve(n) : e(o, s);
      }
    };
  };
  var ui = (r, t, e, o, s, n, a, i) => (c, u) => {
    let l = u.listener,
      h = () => {
        let x = new Float32Array(1),
          w = t(u, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 9
          }),
          T = a(u),
          v = !1,
          q = [0, 0, -1, 0, 1, 0],
          M = [0, 0, 0],
          E = () => {
            if (v) return;
            v = !0;
            let A = o(u, 256, 9, 0);
            (A.onaudioprocess = ({ inputBuffer: O }) => {
              let b = [
                n(O, x, 0),
                n(O, x, 1),
                n(O, x, 2),
                n(O, x, 3),
                n(O, x, 4),
                n(O, x, 5)
              ];
              b.some((k, L) => k !== q[L]) && (l.setOrientation(...b), (q = b));
              let P = [n(O, x, 6), n(O, x, 7), n(O, x, 8)];
              P.some((k, L) => k !== M[L]) && (l.setPosition(...P), (M = P));
            }),
              w.connect(A);
          },
          N = (A) => (O) => {
            O !== q[A] && ((q[A] = O), l.setOrientation(...q));
          },
          j = (A) => (O) => {
            O !== M[A] && ((M[A] = O), l.setPosition(...M));
          },
          F = (A, O, b) => {
            let P = e(u, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              offset: O
            });
            P.connect(w, 0, A),
              P.start(),
              Object.defineProperty(P.offset, "defaultValue", {
                get() {
                  return O;
                }
              });
            let k = r({ context: c }, T, P.offset, ft, xt);
            return (
              i(
                k,
                "value",
                (L) => () => L.call(k),
                (L) => (R) => {
                  try {
                    L.call(k, R);
                  } catch (J) {
                    if (J.code !== 9) throw J;
                  }
                  E(), T && b(R);
                }
              ),
              (k.cancelAndHoldAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.cancelAndHoldAtTime)),
              (k.cancelScheduledValues = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.cancelScheduledValues)),
              (k.exponentialRampToValueAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.exponentialRampToValueAtTime)),
              (k.linearRampToValueAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.linearRampToValueAtTime)),
              (k.setTargetAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.setTargetAtTime)),
              (k.setValueAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.setValueAtTime)),
              (k.setValueCurveAtTime = ((L) =>
                T
                  ? () => {
                      throw s();
                    }
                  : (...R) => {
                      let J = L.apply(k, R);
                      return E(), J;
                    })(k.setValueCurveAtTime)),
              k
            );
          };
        return {
          forwardX: F(0, 0, N(0)),
          forwardY: F(1, 0, N(1)),
          forwardZ: F(2, -1, N(2)),
          positionX: F(6, 0, j(0)),
          positionY: F(7, 0, j(1)),
          positionZ: F(8, 0, j(2)),
          upX: F(3, 0, N(3)),
          upY: F(4, 1, N(4)),
          upZ: F(5, 0, N(5))
        };
      },
      {
        forwardX: f,
        forwardY: m,
        forwardZ: p,
        positionX: d,
        positionY: _,
        positionZ: y,
        upX: S,
        upY: C,
        upZ: D
      } = l.forwardX === void 0 ? h() : l;
    return {
      get forwardX() {
        return f;
      },
      get forwardY() {
        return m;
      },
      get forwardZ() {
        return p;
      },
      get positionX() {
        return d;
      },
      get positionY() {
        return _;
      },
      get positionZ() {
        return y;
      },
      get upX() {
        return S;
      },
      get upY() {
        return C;
      },
      get upZ() {
        return D;
      }
    };
  };
  var tr = (r) => "context" in r;
  var ze = (r) => tr(r[0]);
  var le = (r, t, e, o) => {
    for (let s of r)
      if (e(s)) {
        if (o) return !1;
        throw Error("The set contains at least one similar element.");
      }
    return r.add(t), !0;
  };
  var Ds = (r, t, [e, o], s) => {
    le(r, [t, e, o], (n) => n[0] === t && n[1] === e, s);
  };
  var Es = (r, [t, e, o], s) => {
    let n = r.get(t);
    n === void 0
      ? r.set(t, new Set([[e, o]]))
      : le(n, [e, o], (a) => a[0] === e, s);
  };
  var ee = (r) => "inputs" in r;
  var xr = (r, t, e, o) => {
    if (ee(t)) {
      let s = t.inputs[o];
      return r.connect(s, e, 0), [s, e, 0];
    }
    return r.connect(t, e, o), [t, e, o];
  };
  var Ms = (r, t, e) => {
    for (let o of r) if (o[0] === t && o[1] === e) return r.delete(o), o;
    return null;
  };
  var li = (r, t, e) => je(r, (o) => o[0] === t && o[1] === e);
  var Fs = (r, t) => {
    if (!we(r).delete(t))
      throw new Error("Missing the expected event listener.");
  };
  var Rs = (r, t, e) => {
    let o = wt(r, t),
      s = je(o, (n) => n[0] === e);
    return o.size === 0 && r.delete(t), s;
  };
  var yr = (r, t, e, o) => {
    ee(t) ? r.disconnect(t.inputs[o], e, 0) : r.disconnect(t, e, o);
  };
  var it = (r) => wt(fr, r);
  var er = (r) => wt(ho, r);
  var Me = (r) => po.has(r);
  var vr = (r) => !ve.has(r);
  var Is = (r, t) =>
    new Promise((e) => {
      if (t !== null) e(!0);
      else {
        let o = r.createScriptProcessor(256, 1, 1),
          s = r.createGain(),
          n = r.createBuffer(1, 2, 44100),
          a = n.getChannelData(0);
        (a[0] = 1), (a[1] = 1);
        let i = r.createBufferSource();
        (i.buffer = n),
          (i.loop = !0),
          i.connect(o).connect(r.destination),
          i.connect(s),
          i.disconnect(s),
          (o.onaudioprocess = (c) => {
            let u = c.inputBuffer.getChannelData(0);
            Array.prototype.some.call(u, (l) => l === 1) ? e(!0) : e(!1),
              i.stop(),
              (o.onaudioprocess = null),
              i.disconnect(o),
              o.disconnect(r.destination);
          }),
          i.start();
      }
    });
  var Lo = (r, t) => {
    let e = new Map();
    for (let o of r)
      for (let s of o) {
        let n = e.get(s);
        e.set(s, n === void 0 ? 1 : n + 1);
      }
    e.forEach((o, s) => t(s, o));
  };
  var rr = (r) => "context" in r;
  var hi = (r) => {
    let t = new Map();
    (r.connect = (
      (e) =>
      (o, s = 0, n = 0) => {
        let a = rr(o) ? e(o, s, n) : e(o, s),
          i = t.get(o);
        return (
          i === void 0
            ? t.set(o, [{ input: n, output: s }])
            : i.every((c) => c.input !== n || c.output !== s) &&
              i.push({ input: n, output: s }),
          a
        );
      }
    )(r.connect.bind(r))),
      (r.disconnect = ((e) => (o, s, n) => {
        if ((e.apply(r), o === void 0)) t.clear();
        else if (typeof o == "number")
          for (let [a, i] of t) {
            let c = i.filter((u) => u.output !== o);
            c.length === 0 ? t.delete(a) : t.set(a, c);
          }
        else if (t.has(o))
          if (s === void 0) t.delete(o);
          else {
            let a = t.get(o);
            if (a !== void 0) {
              let i = a.filter(
                (c) => c.output !== s && (c.input !== n || n === void 0)
              );
              i.length === 0 ? t.delete(o) : t.set(o, i);
            }
          }
        for (let [a, i] of t)
          i.forEach((c) => {
            rr(a) ? r.connect(a, c.output, c.input) : r.connect(a, c.output);
          });
      })(r.disconnect));
  };
  var kl = (r, t, e, o) => {
      let { activeInputs: s, passiveInputs: n } = Be(t),
        { outputs: a } = Ct(r),
        i = we(r),
        c = (u) => {
          let l = it(r),
            h = er(t);
          if (u) {
            let f = Rs(n, r, e);
            Ds(s, r, f, !1), !o && !Me(r) && l.connect(h, e);
          } else {
            let f = li(s, r, e);
            Es(n, f, !1), !o && !Me(r) && l.disconnect(h, e);
          }
        };
      return le(a, [t, e], (u) => u[0] === t && u[1] === e, !0)
        ? (i.add(c), Pt(r) ? Ds(s, r, [e, c], !0) : Es(n, [r, e, c], !0), !0)
        : !1;
    },
    Dl = (r, t, e, o) => {
      let { activeInputs: s, passiveInputs: n } = Ct(t),
        a = Ms(s[o], r, e);
      return a === null ? [Io(n, r, e, o)[2], !1] : [a[2], !0];
    },
    El = (r, t, e) => {
      let { activeInputs: o, passiveInputs: s } = Be(t),
        n = Ms(o, r, e);
      return n === null ? [Rs(s, r, e)[1], !1] : [n[2], !0];
    },
    qs = (r, t, e, o, s) => {
      let [n, a] = Dl(r, e, o, s);
      if (
        (n !== null && (Fs(r, n), a && !t && !Me(r) && yr(it(r), it(e), o, s)),
        Pt(e))
      ) {
        let { activeInputs: i } = Ct(e);
        go(e, i);
      }
    },
    Ps = (r, t, e, o) => {
      let [s, n] = El(r, e, o);
      s !== null && (Fs(r, s), n && !t && !Me(r) && it(r).disconnect(er(e), o));
    },
    Ml = (r, t) => {
      let e = Ct(r),
        o = [];
      for (let s of e.outputs)
        ze(s) ? qs(r, t, ...s) : Ps(r, t, ...s), o.push(s[0]);
      return e.outputs.clear(), o;
    },
    Fl = (r, t, e) => {
      let o = Ct(r),
        s = [];
      for (let n of o.outputs)
        n[1] === e &&
          (ze(n) ? qs(r, t, ...n) : Ps(r, t, ...n),
          s.push(n[0]),
          o.outputs.delete(n));
      return s;
    },
    Rl = (r, t, e, o, s) => {
      let n = Ct(r);
      return Array.from(n.outputs)
        .filter(
          (a) =>
            a[0] === e &&
            (o === void 0 || a[1] === o) &&
            (s === void 0 || a[2] === s)
        )
        .map(
          (a) => (
            ze(a) ? qs(r, t, ...a) : Ps(r, t, ...a), n.outputs.delete(a), a[0]
          )
        );
    },
    pi = (r, t, e, o, s, n, a, i, c, u, l, h, f, m, p, d) =>
      class extends u {
        constructor(y, S, C, D) {
          super(C), (this._context = y), (this._nativeAudioNode = C);
          let x = l(y);
          h(x) && e(Is, () => Is(x, d)) !== !0 && hi(C),
            fr.set(this, C),
            Ro.set(this, new Set()),
            y.state !== "closed" && S && ue(this),
            r(this, D, C);
        }
        get channelCount() {
          return this._nativeAudioNode.channelCount;
        }
        set channelCount(y) {
          this._nativeAudioNode.channelCount = y;
        }
        get channelCountMode() {
          return this._nativeAudioNode.channelCountMode;
        }
        set channelCountMode(y) {
          this._nativeAudioNode.channelCountMode = y;
        }
        get channelInterpretation() {
          return this._nativeAudioNode.channelInterpretation;
        }
        set channelInterpretation(y) {
          this._nativeAudioNode.channelInterpretation = y;
        }
        get context() {
          return this._context;
        }
        get numberOfInputs() {
          return this._nativeAudioNode.numberOfInputs;
        }
        get numberOfOutputs() {
          return this._nativeAudioNode.numberOfOutputs;
        }
        connect(y, S = 0, C = 0) {
          if (S < 0 || S >= this._nativeAudioNode.numberOfOutputs) throw s();
          let D = l(this._context),
            x = p(D);
          if (f(y) || m(y)) throw n();
          if (tr(y)) {
            let v = it(y);
            try {
              let M = xr(this._nativeAudioNode, v, S, C),
                E = vr(this);
              (x || E) && this._nativeAudioNode.disconnect(...M),
                this.context.state !== "closed" && !E && vr(y) && ue(y);
            } catch (M) {
              throw M.code === 12 ? n() : M;
            }
            if (t(this, y, S, C, x)) {
              let M = c([this], y);
              Lo(M, o(x));
            }
            return y;
          }
          let w = er(y);
          if (w.name === "playbackRate" && w.maxValue === 1024) throw a();
          try {
            this._nativeAudioNode.connect(w, S),
              (x || vr(this)) && this._nativeAudioNode.disconnect(w, S);
          } catch (v) {
            throw v.code === 12 ? n() : v;
          }
          if (kl(this, y, S, x)) {
            let v = c([this], y);
            Lo(v, o(x));
          }
        }
        disconnect(y, S, C) {
          let D,
            x = l(this._context),
            w = p(x);
          if (y === void 0) D = Ml(this, w);
          else if (typeof y == "number") {
            if (y < 0 || y >= this.numberOfOutputs) throw s();
            D = Fl(this, w, y);
          } else {
            if (
              (S !== void 0 && (S < 0 || S >= this.numberOfOutputs)) ||
              (tr(y) && C !== void 0 && (C < 0 || C >= y.numberOfInputs))
            )
              throw s();
            if (((D = Rl(this, w, y, S, C)), D.length === 0)) throw n();
          }
          for (let T of D) {
            let v = c([this], T);
            Lo(v, i);
          }
        }
      };
  var mi = yn(Os()),
    fi =
      (r, t, e, o, s, n, a, i, c, u, l, h, f) =>
      (m, p, d, _ = null, y = null) => {
        let S = d.value,
          C = new mi.AutomationEventList(S),
          D = p ? o(C) : null,
          x = {
            get defaultValue() {
              return S;
            },
            get maxValue() {
              return _ === null ? d.maxValue : _;
            },
            get minValue() {
              return y === null ? d.minValue : y;
            },
            get value() {
              return d.value;
            },
            set value(w) {
              (d.value = w), x.setValueAtTime(w, m.context.currentTime);
            },
            cancelAndHoldAtTime(w) {
              if (typeof d.cancelAndHoldAtTime == "function")
                D === null && C.flush(m.context.currentTime),
                  C.add(s(w)),
                  d.cancelAndHoldAtTime(w);
              else {
                let T = Array.from(C).pop();
                D === null && C.flush(m.context.currentTime), C.add(s(w));
                let v = Array.from(C).pop();
                d.cancelScheduledValues(w),
                  T !== v &&
                    v !== void 0 &&
                    (v.type === "exponentialRampToValue"
                      ? d.exponentialRampToValueAtTime(v.value, v.endTime)
                      : v.type === "linearRampToValue"
                      ? d.linearRampToValueAtTime(v.value, v.endTime)
                      : v.type === "setValue"
                      ? d.setValueAtTime(v.value, v.startTime)
                      : v.type === "setValueCurve" &&
                        d.setValueCurveAtTime(
                          v.values,
                          v.startTime,
                          v.duration
                        ));
              }
              return x;
            },
            cancelScheduledValues(w) {
              return (
                D === null && C.flush(m.context.currentTime),
                C.add(n(w)),
                d.cancelScheduledValues(w),
                x
              );
            },
            exponentialRampToValueAtTime(w, T) {
              if (w === 0) throw new RangeError();
              if (!Number.isFinite(T) || T < 0) throw new RangeError();
              let v = m.context.currentTime;
              return (
                D === null && C.flush(v),
                Array.from(C).length === 0 &&
                  (C.add(u(S, v)), d.setValueAtTime(S, v)),
                C.add(a(w, T)),
                d.exponentialRampToValueAtTime(w, T),
                x
              );
            },
            linearRampToValueAtTime(w, T) {
              let v = m.context.currentTime;
              return (
                D === null && C.flush(v),
                Array.from(C).length === 0 &&
                  (C.add(u(S, v)), d.setValueAtTime(S, v)),
                C.add(i(w, T)),
                d.linearRampToValueAtTime(w, T),
                x
              );
            },
            setTargetAtTime(w, T, v) {
              return (
                D === null && C.flush(m.context.currentTime),
                C.add(c(w, T, v)),
                d.setTargetAtTime(w, T, v),
                x
              );
            },
            setValueAtTime(w, T) {
              return (
                D === null && C.flush(m.context.currentTime),
                C.add(u(w, T)),
                d.setValueAtTime(w, T),
                x
              );
            },
            setValueCurveAtTime(w, T, v) {
              let q = w instanceof Float32Array ? w : new Float32Array(w);
              if (h !== null && h.name === "webkitAudioContext") {
                let M = T + v,
                  E = m.context.sampleRate,
                  N = Math.ceil(T * E),
                  j = Math.floor(M * E),
                  F = j - N,
                  A = new Float32Array(F);
                for (let b = 0; b < F; b += 1) {
                  let P = ((q.length - 1) / v) * ((N + b) / E - T),
                    k = Math.floor(P),
                    L = Math.ceil(P);
                  A[b] =
                    k === L
                      ? q[k]
                      : (1 - (P - k)) * q[k] + (1 - (L - P)) * q[L];
                }
                D === null && C.flush(m.context.currentTime),
                  C.add(l(A, T, v)),
                  d.setValueCurveAtTime(A, T, v);
                let O = j / E;
                O < M && f(x, A[A.length - 1], O), f(x, q[q.length - 1], M);
              } else
                D === null && C.flush(m.context.currentTime),
                  C.add(l(q, T, v)),
                  d.setValueCurveAtTime(q, T, v);
              return x;
            }
          };
        return e.set(x, d), t.set(x, m), r(x, D), x;
      };
  var di = (r) => ({
    replay(t) {
      for (let e of r)
        if (e.type === "exponentialRampToValue") {
          let { endTime: o, value: s } = e;
          t.exponentialRampToValueAtTime(s, o);
        } else if (e.type === "linearRampToValue") {
          let { endTime: o, value: s } = e;
          t.linearRampToValueAtTime(s, o);
        } else if (e.type === "setTarget") {
          let { startTime: o, target: s, timeConstant: n } = e;
          t.setTargetAtTime(s, o, n);
        } else if (e.type === "setValue") {
          let { startTime: o, value: s } = e;
          t.setValueAtTime(s, o);
        } else if (e.type === "setValueCurve") {
          let { duration: o, startTime: s, values: n } = e;
          t.setValueCurveAtTime(n, s, o);
        } else throw new Error("Can't apply an unknown automation.");
    }
  });
  var wr = class {
    constructor(t) {
      this._map = new Map(t);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(t, e = null) {
      return this._map.forEach((o, s) => t.call(e, o, s, this));
    }
    get(t) {
      return this._map.get(t);
    }
    has(t) {
      return this._map.has(t);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };
  var Il = {
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers",
      numberOfInputs: 1,
      numberOfOutputs: 1,
      parameterData: {},
      processorOptions: {}
    },
    gi = (r, t, e, o, s, n, a, i, c, u, l, h, f, m) =>
      class extends t {
        constructor(d, _, y) {
          var S;
          let C = i(d),
            D = c(C),
            x = l({ ...Il, ...y });
          f(x);
          let w = mo.get(C),
            T = w?.get(_),
            v =
              D || C.state !== "closed"
                ? C
                : (S = a(C)) !== null && S !== void 0
                ? S
                : C,
            q = s(v, D ? null : d.baseLatency, u, _, T, x),
            M = D ? o(_, x, T) : null;
          super(d, !0, q, M);
          let E = [];
          q.parameters.forEach((j, F) => {
            let A = e(this, D, j);
            E.push([F, A]);
          }),
            (this._nativeAudioWorkletNode = q),
            (this._onprocessorerror = null),
            (this._parameters = new wr(E)),
            D && r(C, this);
          let { activeInputs: N } = n(this);
          h(q, N);
        }
        get onprocessorerror() {
          return this._onprocessorerror;
        }
        set onprocessorerror(d) {
          let _ = typeof d == "function" ? m(this, d) : null;
          this._nativeAudioWorkletNode.onprocessorerror = _;
          let y = this._nativeAudioWorkletNode.onprocessorerror;
          this._onprocessorerror = y !== null && y === _ ? d : y;
        }
        get parameters() {
          return this._parameters === null
            ? this._nativeAudioWorkletNode.parameters
            : this._parameters;
        }
        get port() {
          return this._nativeAudioWorkletNode.port;
        }
      };
  function Tr(r, t, e, o, s) {
    if (typeof r.copyFromChannel == "function")
      t[e].byteLength === 0 && (t[e] = new Float32Array(128)),
        r.copyFromChannel(t[e], o, s);
    else {
      let n = r.getChannelData(o);
      if (t[e].byteLength === 0) t[e] = n.slice(s, s + 128);
      else {
        let a = new Float32Array(
          n.buffer,
          s * Float32Array.BYTES_PER_ELEMENT,
          128
        );
        t[e].set(a);
      }
    }
  }
  var Wo = (r, t, e, o, s) => {
    typeof r.copyToChannel == "function"
      ? t[e].byteLength !== 0 && r.copyToChannel(t[e], o, s)
      : t[e].byteLength !== 0 && r.getChannelData(o).set(t[e], s);
  };
  var br = (r, t) => {
    let e = [];
    for (let o = 0; o < r; o += 1) {
      let s = [],
        n = typeof t == "number" ? t : t[o];
      for (let a = 0; a < n; a += 1) s.push(new Float32Array(128));
      e.push(s);
    }
    return e;
  };
  var _i = (r, t) => {
    let e = wt(fo, r),
      o = it(t);
    return wt(e, o);
  };
  var ql = async (r, t, e, o, s, n, a) => {
      let i = t === null ? Math.ceil(r.context.length / 128) * 128 : t.length,
        c = o.channelCount * o.numberOfInputs,
        u = s.reduce((_, y) => _ + y, 0),
        l = u === 0 ? null : e.createBuffer(u, i, e.sampleRate);
      if (n === void 0) throw new Error("Missing the processor constructor.");
      let h = Ct(r),
        f = await _i(e, r),
        m = br(o.numberOfInputs, o.channelCount),
        p = br(o.numberOfOutputs, s),
        d = Array.from(r.parameters.keys()).reduce(
          (_, y) => ({ ..._, [y]: new Float32Array(128) }),
          {}
        );
      for (let _ = 0; _ < i; _ += 128) {
        if (o.numberOfInputs > 0 && t !== null)
          for (let y = 0; y < o.numberOfInputs; y += 1)
            for (let S = 0; S < o.channelCount; S += 1) Tr(t, m[y], S, S, _);
        n.parameterDescriptors !== void 0 &&
          t !== null &&
          n.parameterDescriptors.forEach(({ name: y }, S) => {
            Tr(t, d, y, c + S, _);
          });
        for (let y = 0; y < o.numberOfInputs; y += 1)
          for (let S = 0; S < s[y]; S += 1)
            p[y][S].byteLength === 0 && (p[y][S] = new Float32Array(128));
        try {
          let y = m.map((C, D) => (h.activeInputs[D].size === 0 ? [] : C)),
            S = a(_ / e.sampleRate, e.sampleRate, () => f.process(y, p, d));
          if (l !== null)
            for (let C = 0, D = 0; C < o.numberOfOutputs; C += 1) {
              for (let x = 0; x < s[C]; x += 1) Wo(l, p[C], x, D + x, _);
              D += s[C];
            }
          if (!S) break;
        } catch (y) {
          r.dispatchEvent(
            new ErrorEvent("processorerror", {
              colno: y.colno,
              filename: y.filename,
              lineno: y.lineno,
              message: y.message
            })
          );
          break;
        }
      }
      return l;
    },
    xi = (r, t, e, o, s, n, a, i, c, u, l, h, f, m, p, d) => (_, y, S) => {
      let C = new WeakMap(),
        D = null,
        x = async (w, T) => {
          let v = l(w),
            q = null,
            M = tt(v, T),
            E = Array.isArray(y.outputChannelCount)
              ? y.outputChannelCount
              : Array.from(y.outputChannelCount);
          if (h === null) {
            let N = E.reduce((O, b) => O + b, 0),
              j = s(T, {
                channelCount: Math.max(1, N),
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: Math.max(1, N)
              }),
              F = [];
            for (let O = 0; O < w.numberOfOutputs; O += 1)
              F.push(
                o(T, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "speakers",
                  numberOfInputs: E[O]
                })
              );
            let A = a(T, {
              channelCount: y.channelCount,
              channelCountMode: y.channelCountMode,
              channelInterpretation: y.channelInterpretation,
              gain: 1
            });
            (A.connect = t.bind(null, F)),
              (A.disconnect = c.bind(null, F)),
              (q = [j, F, A]);
          } else M || (v = new h(T, _));
          if ((C.set(T, q === null ? v : q[2]), q !== null)) {
            if (D === null) {
              if (S === void 0)
                throw new Error("Missing the processor constructor.");
              if (f === null)
                throw new Error(
                  "Missing the native OfflineAudioContext constructor."
                );
              let b = w.channelCount * w.numberOfInputs,
                P =
                  S.parameterDescriptors === void 0
                    ? 0
                    : S.parameterDescriptors.length,
                k = b + P;
              D = ql(
                w,
                k === 0
                  ? null
                  : await (async () => {
                      let R = new f(
                          k,
                          Math.ceil(w.context.length / 128) * 128,
                          T.sampleRate
                        ),
                        J = [],
                        St = [];
                      for (let st = 0; st < y.numberOfInputs; st += 1)
                        J.push(
                          a(R, {
                            channelCount: y.channelCount,
                            channelCountMode: y.channelCountMode,
                            channelInterpretation: y.channelInterpretation,
                            gain: 1
                          })
                        ),
                          St.push(
                            s(R, {
                              channelCount: y.channelCount,
                              channelCountMode: "explicit",
                              channelInterpretation: "discrete",
                              numberOfOutputs: y.channelCount
                            })
                          );
                      let Dt = await Promise.all(
                          Array.from(w.parameters.values()).map(async (st) => {
                            let _t = n(R, {
                              channelCount: 1,
                              channelCountMode: "explicit",
                              channelInterpretation: "discrete",
                              offset: st.value
                            });
                            return await m(R, st, _t.offset), _t;
                          })
                        ),
                        Y = o(R, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "speakers",
                          numberOfInputs: Math.max(1, b + P)
                        });
                      for (let st = 0; st < y.numberOfInputs; st += 1) {
                        J[st].connect(St[st]);
                        for (let _t = 0; _t < y.channelCount; _t += 1)
                          St[st].connect(Y, _t, st * y.channelCount + _t);
                      }
                      for (let [st, _t] of Dt.entries())
                        _t.connect(Y, 0, b + st), _t.start(0);
                      return (
                        Y.connect(R.destination),
                        await Promise.all(J.map((st) => p(w, R, st))),
                        d(R)
                      );
                    })(),
                T,
                y,
                E,
                S,
                u
              );
            }
            let N = await D,
              j = e(T, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
              }),
              [F, A, O] = q;
            N !== null && ((j.buffer = N), j.start(0)), j.connect(F);
            for (let b = 0, P = 0; b < w.numberOfOutputs; b += 1) {
              let k = A[b];
              for (let L = 0; L < E[b]; L += 1) F.connect(k, P + L, L);
              P += E[b];
            }
            return O;
          }
          if (M)
            for (let [N, j] of w.parameters.entries())
              await r(T, j, v.parameters.get(N));
          else
            for (let [N, j] of w.parameters.entries())
              await m(T, j, v.parameters.get(N));
          return await p(w, T, v), v;
        };
      return {
        render(w, T) {
          i(T, w);
          let v = C.get(T);
          return v !== void 0 ? Promise.resolve(v) : x(w, T);
        }
      };
    };
  var yi = (r, t, e, o, s, n, a, i, c, u, l, h, f, m, p, d, _, y, S, C) =>
    class extends p {
      constructor(x, w) {
        super(x, w),
          (this._nativeContext = x),
          (this._audioWorklet =
            r === void 0 ? void 0 : { addModule: (T, v) => r(this, T, v) });
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new t(this);
      }
      createBiquadFilter() {
        return new s(this);
      }
      createBuffer(x, w, T) {
        return new e({ length: w, numberOfChannels: x, sampleRate: T });
      }
      createBufferSource() {
        return new o(this);
      }
      createChannelMerger(x = 6) {
        return new n(this, { numberOfInputs: x });
      }
      createChannelSplitter(x = 6) {
        return new a(this, { numberOfOutputs: x });
      }
      createConstantSource() {
        return new i(this);
      }
      createConvolver() {
        return new c(this);
      }
      createDelay(x = 1) {
        return new l(this, { maxDelayTime: x });
      }
      createDynamicsCompressor() {
        return new h(this);
      }
      createGain() {
        return new f(this);
      }
      createIIRFilter(x, w) {
        return new m(this, { feedback: w, feedforward: x });
      }
      createOscillator() {
        return new d(this);
      }
      createPanner() {
        return new _(this);
      }
      createPeriodicWave(x, w, T = { disableNormalization: !1 }) {
        return new y(this, { ...T, imag: w, real: x });
      }
      createStereoPanner() {
        return new S(this);
      }
      createWaveShaper() {
        return new C(this);
      }
      decodeAudioData(x, w, T) {
        return u(this._nativeContext, x).then(
          (v) => (typeof w == "function" && w(v), v),
          (v) => {
            throw (typeof T == "function" && T(v), v);
          }
        );
      }
    };
  var Pl = {
      Q: 1,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      detune: 0,
      frequency: 350,
      gain: 0,
      type: "lowpass"
    },
    vi = (r, t, e, o, s, n, a, i) =>
      class extends r {
        constructor(u, l) {
          let h = n(u),
            f = { ...Pl, ...l },
            m = s(h, f),
            p = a(h),
            d = p ? e() : null;
          super(u, !1, m, d),
            (this._Q = t(this, p, m.Q, ft, xt)),
            (this._detune = t(
              this,
              p,
              m.detune,
              1200 * Math.log2(ft),
              -1200 * Math.log2(ft)
            )),
            (this._frequency = t(this, p, m.frequency, u.sampleRate / 2, 0)),
            (this._gain = t(this, p, m.gain, 40 * Math.log10(ft), xt)),
            (this._nativeBiquadFilterNode = m),
            i(this, 1);
        }
        get detune() {
          return this._detune;
        }
        get frequency() {
          return this._frequency;
        }
        get gain() {
          return this._gain;
        }
        get Q() {
          return this._Q;
        }
        get type() {
          return this._nativeBiquadFilterNode.type;
        }
        set type(u) {
          this._nativeBiquadFilterNode.type = u;
        }
        getFrequencyResponse(u, l, h) {
          try {
            this._nativeBiquadFilterNode.getFrequencyResponse(u, l, h);
          } catch (f) {
            throw f.code === 11 ? o() : f;
          }
          if (u.length !== l.length || l.length !== h.length) throw o();
        }
      };
  var wi = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = async (i, c) => {
        let u = e(i),
          l = tt(u, c);
        if (!l) {
          let h = {
            Q: u.Q.value,
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            detune: u.detune.value,
            frequency: u.frequency.value,
            gain: u.gain.value,
            type: u.type
          };
          u = t(c, h);
        }
        return (
          n.set(c, u),
          l
            ? (await r(c, i.Q, u.Q),
              await r(c, i.detune, u.detune),
              await r(c, i.frequency, u.frequency),
              await r(c, i.gain, u.gain))
            : (await o(c, i.Q, u.Q),
              await o(c, i.detune, u.detune),
              await o(c, i.frequency, u.frequency),
              await o(c, i.gain, u.gain)),
          await s(i, c, u),
          u
        );
      };
    return {
      render(i, c) {
        let u = n.get(c);
        return u !== void 0 ? Promise.resolve(u) : a(i, c);
      }
    };
  };
  var Ti = (r, t) => (e, o) => {
    let s = t.get(e);
    if (s !== void 0) return s;
    let n = r.get(e);
    if (n !== void 0) return n;
    try {
      let a = o();
      return a instanceof Promise
        ? (r.set(e, a),
          a.catch(() => !1).then((i) => (r.delete(e), t.set(e, i), i)))
        : (t.set(e, a), a);
    } catch {
      return t.set(e, !1), !1;
    }
  };
  var Vl = {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "speakers",
      numberOfInputs: 6
    },
    bi = (r, t, e, o, s) =>
      class extends r {
        constructor(a, i) {
          let c = o(a),
            u = { ...Vl, ...i },
            l = e(c, u),
            h = s(c) ? t() : null;
          super(a, !1, l, h);
        }
      };
  var Si = (r, t, e) => () => {
    let o = new WeakMap(),
      s = async (n, a) => {
        let i = t(n);
        if (!tt(i, a)) {
          let u = {
            channelCount: i.channelCount,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            numberOfInputs: i.numberOfInputs
          };
          i = r(a, u);
        }
        return o.set(a, i), await e(n, a, i), i;
      };
    return {
      render(n, a) {
        let i = o.get(a);
        return i !== void 0 ? Promise.resolve(i) : s(n, a);
      }
    };
  };
  var Ll = {
      channelCount: 6,
      channelCountMode: "explicit",
      channelInterpretation: "discrete",
      numberOfOutputs: 6
    },
    Ai = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = o(i),
            l = n({ ...Ll, ...c }),
            h = e(u, l),
            f = s(u) ? t() : null;
          super(i, !1, h, f);
        }
      };
  var Ci = (r, t, e) => () => {
    let o = new WeakMap(),
      s = async (n, a) => {
        let i = t(n);
        if (!tt(i, a)) {
          let u = {
            channelCount: i.channelCount,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            numberOfOutputs: i.numberOfOutputs
          };
          i = r(a, u);
        }
        return o.set(a, i), await e(n, a, i), i;
      };
    return {
      render(n, a) {
        let i = o.get(a);
        return i !== void 0 ? Promise.resolve(i) : s(n, a);
      }
    };
  };
  var Ni = (r) => (t, e, o) => r(e, t, o);
  var Oi =
    (r) =>
    (t, e, o = 0, s = 0) => {
      let n = t[o];
      if (n === void 0) throw r();
      return rr(e) ? n.connect(e, 0, s) : n.connect(e, 0);
    };
  var ki = (r) => (t, e) => {
    let o = r(t, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      }),
      s = t.createBuffer(1, 2, 44100);
    return (
      (o.buffer = s),
      (o.loop = !0),
      o.connect(e),
      o.start(),
      () => {
        o.stop(), o.disconnect(e);
      }
    );
  };
  var Wl = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      offset: 1
    },
    Di = (r, t, e, o, s, n, a) =>
      class extends r {
        constructor(c, u) {
          let l = s(c),
            h = { ...Wl, ...u },
            f = o(l, h),
            m = n(l),
            p = m ? e() : null;
          super(c, !1, f, p),
            (this._constantSourceNodeRenderer = p),
            (this._nativeConstantSourceNode = f),
            (this._offset = t(this, m, f.offset, ft, xt)),
            (this._onended = null);
        }
        get offset() {
          return this._offset;
        }
        get onended() {
          return this._onended;
        }
        set onended(c) {
          let u = typeof c == "function" ? a(this, c) : null;
          this._nativeConstantSourceNode.onended = u;
          let l = this._nativeConstantSourceNode.onended;
          this._onended = l !== null && l === u ? c : l;
        }
        start(c = 0) {
          if (
            (this._nativeConstantSourceNode.start(c),
            this._constantSourceNodeRenderer !== null &&
              (this._constantSourceNodeRenderer.start = c),
            this.context.state !== "closed")
          ) {
            ue(this);
            let u = () => {
              this._nativeConstantSourceNode.removeEventListener("ended", u),
                Pt(this) && Te(this);
            };
            this._nativeConstantSourceNode.addEventListener("ended", u);
          }
        }
        stop(c = 0) {
          this._nativeConstantSourceNode.stop(c),
            this._constantSourceNodeRenderer !== null &&
              (this._constantSourceNodeRenderer.stop = c);
        }
      };
  var Ei = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = null,
      i = null,
      c = async (u, l) => {
        let h = e(u),
          f = tt(h, l);
        if (!f) {
          let m = {
            channelCount: h.channelCount,
            channelCountMode: h.channelCountMode,
            channelInterpretation: h.channelInterpretation,
            offset: h.offset.value
          };
          (h = t(l, m)), a !== null && h.start(a), i !== null && h.stop(i);
        }
        return (
          n.set(l, h),
          f ? await r(l, u.offset, h.offset) : await o(l, u.offset, h.offset),
          await s(u, l, h),
          h
        );
      };
    return {
      set start(u) {
        a = u;
      },
      set stop(u) {
        i = u;
      },
      render(u, l) {
        let h = n.get(l);
        return h !== void 0 ? Promise.resolve(h) : c(u, l);
      }
    };
  };
  var Mi = (r) => (t) => ((r[0] = t), r[0]);
  var jl = {
      buffer: null,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers",
      disableNormalization: !1
    },
    Fi = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = o(i),
            l = { ...jl, ...c },
            h = e(u, l),
            m = s(u) ? t() : null;
          super(i, !1, h, m),
            (this._isBufferNullified = !1),
            (this._nativeConvolverNode = h),
            l.buffer !== null && n(this, l.buffer.duration);
        }
        get buffer() {
          return this._isBufferNullified
            ? null
            : this._nativeConvolverNode.buffer;
        }
        set buffer(i) {
          if (
            ((this._nativeConvolverNode.buffer = i),
            i === null && this._nativeConvolverNode.buffer !== null)
          ) {
            let c = this._nativeConvolverNode.context;
            (this._nativeConvolverNode.buffer = c.createBuffer(
              1,
              1,
              c.sampleRate
            )),
              (this._isBufferNullified = !0),
              n(this, 0);
          } else
            (this._isBufferNullified = !1),
              n(
                this,
                this._nativeConvolverNode.buffer === null
                  ? 0
                  : this._nativeConvolverNode.buffer.duration
              );
        }
        get normalize() {
          return this._nativeConvolverNode.normalize;
        }
        set normalize(i) {
          this._nativeConvolverNode.normalize = i;
        }
      };
  var Ri = (r, t, e) => () => {
    let o = new WeakMap(),
      s = async (n, a) => {
        let i = t(n);
        if (!tt(i, a)) {
          let u = {
            buffer: i.buffer,
            channelCount: i.channelCount,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            disableNormalization: !i.normalize
          };
          i = r(a, u);
        }
        return (
          o.set(a, i), ee(i) ? await e(n, a, i.inputs[0]) : await e(n, a, i), i
        );
      };
    return {
      render(n, a) {
        let i = o.get(a);
        return i !== void 0 ? Promise.resolve(i) : s(n, a);
      }
    };
  };
  var Ii = (r, t) => (e, o, s) => {
    if (t === null)
      throw new Error("Missing the native OfflineAudioContext constructor.");
    try {
      return new t(e, o, s);
    } catch (n) {
      throw n.name === "SyntaxError" ? r() : n;
    }
  };
  var qi = () => new DOMException("", "DataCloneError");
  var Vs = (r) => {
    let { port1: t, port2: e } = new MessageChannel();
    return new Promise((o) => {
      let s = () => {
        (e.onmessage = null), t.close(), e.close(), o();
      };
      e.onmessage = () => s();
      try {
        t.postMessage(r, [r]);
      } catch {
      } finally {
        s();
      }
    });
  };
  var Pi = (r, t, e, o, s, n, a, i, c, u, l) => (h, f) => {
    let m = a(h) ? h : n(h);
    if (s.has(f)) {
      let p = e();
      return Promise.reject(p);
    }
    try {
      s.add(f);
    } catch {}
    return t(c, () => c(m))
      ? m
          .decodeAudioData(f)
          .then(
            (p) => (
              Vs(f).catch(() => {}), t(i, () => i(p)) || l(p), r.add(p), p
            )
          )
      : new Promise((p, d) => {
          let _ = async () => {
              try {
                await Vs(f);
              } catch {}
            },
            y = (S) => {
              d(S), _();
            };
          try {
            m.decodeAudioData(
              f,
              (S) => {
                typeof S.copyFromChannel != "function" && (u(S), _r(S)),
                  r.add(S),
                  _().then(() => p(S));
              },
              (S) => {
                y(S === null ? o() : S);
              }
            );
          } catch (S) {
            y(S);
          }
        });
  };
  var Vi = (r, t, e, o, s, n, a, i) => (c, u) => {
    let l = t.get(c);
    if (l === void 0) throw new Error("Missing the expected cycle count.");
    let h = n(c.context),
      f = i(h);
    if (l === u) {
      if ((t.delete(c), !f && a(c))) {
        let m = o(c),
          { outputs: p } = e(c);
        for (let d of p)
          if (ze(d)) {
            let _ = o(d[0]);
            r(m, _, d[1], d[2]);
          } else {
            let _ = s(d[0]);
            m.connect(_, d[1]);
          }
      }
    } else t.set(c, l - u);
  };
  var Bl = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      delayTime: 0,
      maxDelayTime: 1
    },
    Li = (r, t, e, o, s, n, a) =>
      class extends r {
        constructor(c, u) {
          let l = s(c),
            h = { ...Bl, ...u },
            f = o(l, h),
            m = n(l),
            p = m ? e(h.maxDelayTime) : null;
          super(c, !1, f, p),
            (this._delayTime = t(this, m, f.delayTime)),
            a(this, h.maxDelayTime);
        }
        get delayTime() {
          return this._delayTime;
        }
      };
  var Wi = (r, t, e, o, s) => (n) => {
    let a = new WeakMap(),
      i = async (c, u) => {
        let l = e(c),
          h = tt(l, u);
        if (!h) {
          let f = {
            channelCount: l.channelCount,
            channelCountMode: l.channelCountMode,
            channelInterpretation: l.channelInterpretation,
            delayTime: l.delayTime.value,
            maxDelayTime: n
          };
          l = t(u, f);
        }
        return (
          a.set(u, l),
          h
            ? await r(u, c.delayTime, l.delayTime)
            : await o(u, c.delayTime, l.delayTime),
          await s(c, u, l),
          l
        );
      };
    return {
      render(c, u) {
        let l = a.get(u);
        return l !== void 0 ? Promise.resolve(l) : i(c, u);
      }
    };
  };
  var ji = (r) => (t, e, o, s) => r(t[s], (n) => n[0] === e && n[1] === o);
  var Bi = (r) => (t, e) => {
    r(t).delete(e);
  };
  var Gi = (r) => "delayTime" in r;
  var zi = (r, t, e) =>
    function o(s, n) {
      let a = tr(n) ? n : e(r, n);
      if (Gi(a)) return [];
      if (s[0] === a) return [s];
      if (s.includes(a)) return [];
      let { outputs: i } = t(a);
      return Array.from(i)
        .map((c) => o([...s, a], c[0]))
        .reduce((c, u) => c.concat(u), []);
    };
  var jo = (r, t, e) => {
      let o = t[e];
      if (o === void 0) throw r();
      return o;
    },
    Ui =
      (r) =>
      (t, e = void 0, o = void 0, s = 0) =>
        e === void 0
          ? t.forEach((n) => n.disconnect())
          : typeof e == "number"
          ? jo(r, t, e).disconnect()
          : rr(e)
          ? o === void 0
            ? t.forEach((n) => n.disconnect(e))
            : s === void 0
            ? jo(r, t, o).disconnect(e, 0)
            : jo(r, t, o).disconnect(e, 0, s)
          : o === void 0
          ? t.forEach((n) => n.disconnect(e))
          : jo(r, t, o).disconnect(e, 0);
  var Gl = {
      attack: 0.003,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers",
      knee: 30,
      ratio: 12,
      release: 0.25,
      threshold: -24
    },
    Zi = (r, t, e, o, s, n, a, i) =>
      class extends r {
        constructor(u, l) {
          let h = n(u),
            f = { ...Gl, ...l },
            m = o(h, f),
            p = a(h),
            d = p ? e() : null;
          super(u, !1, m, d),
            (this._attack = t(this, p, m.attack)),
            (this._knee = t(this, p, m.knee)),
            (this._nativeDynamicsCompressorNode = m),
            (this._ratio = t(this, p, m.ratio)),
            (this._release = t(this, p, m.release)),
            (this._threshold = t(this, p, m.threshold)),
            i(this, 0.006);
        }
        get attack() {
          return this._attack;
        }
        get channelCount() {
          return this._nativeDynamicsCompressorNode.channelCount;
        }
        set channelCount(u) {
          let l = this._nativeDynamicsCompressorNode.channelCount;
          if (((this._nativeDynamicsCompressorNode.channelCount = u), u > 2))
            throw ((this._nativeDynamicsCompressorNode.channelCount = l), s());
        }
        get channelCountMode() {
          return this._nativeDynamicsCompressorNode.channelCountMode;
        }
        set channelCountMode(u) {
          let l = this._nativeDynamicsCompressorNode.channelCountMode;
          if (
            ((this._nativeDynamicsCompressorNode.channelCountMode = u),
            u === "max")
          )
            throw (
              ((this._nativeDynamicsCompressorNode.channelCountMode = l), s())
            );
        }
        get knee() {
          return this._knee;
        }
        get ratio() {
          return this._ratio;
        }
        get reduction() {
          return typeof this._nativeDynamicsCompressorNode.reduction.value ==
            "number"
            ? this._nativeDynamicsCompressorNode.reduction.value
            : this._nativeDynamicsCompressorNode.reduction;
        }
        get release() {
          return this._release;
        }
        get threshold() {
          return this._threshold;
        }
      };
  var Qi = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = async (i, c) => {
        let u = e(i),
          l = tt(u, c);
        if (!l) {
          let h = {
            attack: u.attack.value,
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            knee: u.knee.value,
            ratio: u.ratio.value,
            release: u.release.value,
            threshold: u.threshold.value
          };
          u = t(c, h);
        }
        return (
          n.set(c, u),
          l
            ? (await r(c, i.attack, u.attack),
              await r(c, i.knee, u.knee),
              await r(c, i.ratio, u.ratio),
              await r(c, i.release, u.release),
              await r(c, i.threshold, u.threshold))
            : (await o(c, i.attack, u.attack),
              await o(c, i.knee, u.knee),
              await o(c, i.ratio, u.ratio),
              await o(c, i.release, u.release),
              await o(c, i.threshold, u.threshold)),
          await s(i, c, u),
          u
        );
      };
    return {
      render(i, c) {
        let u = n.get(c);
        return u !== void 0 ? Promise.resolve(u) : a(i, c);
      }
    };
  };
  var Xi = () => new DOMException("", "EncodingError");
  var Yi = (r) => (t) =>
    new Promise((e, o) => {
      if (r === null) {
        o(new SyntaxError());
        return;
      }
      let s = r.document.head;
      if (s === null) o(new SyntaxError());
      else {
        let n = r.document.createElement("script"),
          a = new Blob([t], { type: "application/javascript" }),
          i = URL.createObjectURL(a),
          c = r.onerror,
          u = () => {
            (r.onerror = c), URL.revokeObjectURL(i);
          };
        (r.onerror = (l, h, f, m, p) => {
          if (h === i || (h === r.location.href && f === 1 && m === 1))
            return u(), o(p), !1;
          if (c !== null) return c(l, h, f, m, p);
        }),
          (n.onerror = () => {
            u(), o(new SyntaxError());
          }),
          (n.onload = () => {
            u(), e();
          }),
          (n.src = i),
          (n.type = "module"),
          s.appendChild(n);
      }
    });
  var Hi = (r) =>
    class {
      constructor(e) {
        (this._nativeEventTarget = e), (this._listeners = new WeakMap());
      }
      addEventListener(e, o, s) {
        if (o !== null) {
          let n = this._listeners.get(o);
          n === void 0 &&
            ((n = r(this, o)),
            typeof o == "function" && this._listeners.set(o, n)),
            this._nativeEventTarget.addEventListener(e, n, s);
        }
      }
      dispatchEvent(e) {
        return this._nativeEventTarget.dispatchEvent(e);
      }
      removeEventListener(e, o, s) {
        let n = o === null ? void 0 : this._listeners.get(o);
        this._nativeEventTarget.removeEventListener(
          e,
          n === void 0 ? null : n,
          s
        );
      }
    };
  var $i = (r) => (t, e, o) => {
    Object.defineProperties(r, {
      currentFrame: {
        configurable: !0,
        get() {
          return Math.round(t * e);
        }
      },
      currentTime: {
        configurable: !0,
        get() {
          return t;
        }
      }
    });
    try {
      return o();
    } finally {
      r !== null && (delete r.currentFrame, delete r.currentTime);
    }
  };
  var Ki = (r) => async (t) => {
    try {
      let e = await fetch(t);
      if (e.ok) return [await e.text(), e.url];
    } catch {}
    throw r();
  };
  var zl = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      gain: 1
    },
    Ji = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = s(i),
            l = { ...zl, ...c },
            h = o(u, l),
            f = n(u),
            m = f ? e() : null;
          super(i, !1, h, m), (this._gain = t(this, f, h.gain, ft, xt));
        }
        get gain() {
          return this._gain;
        }
      };
  var ta = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = async (i, c) => {
        let u = e(i),
          l = tt(u, c);
        if (!l) {
          let h = {
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            gain: u.gain.value
          };
          u = t(c, h);
        }
        return (
          n.set(c, u),
          l ? await r(c, i.gain, u.gain) : await o(c, i.gain, u.gain),
          await s(i, c, u),
          u
        );
      };
    return {
      render(i, c) {
        let u = n.get(c);
        return u !== void 0 ? Promise.resolve(u) : a(i, c);
      }
    };
  };
  var ea = (r, t) => (e) => t(r, e);
  var ra = (r) => (t) => {
    let e = r(t);
    if (e.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioNode in the audio graph."
      );
    return e.renderer;
  };
  var oa = (r) => (t) => {
    var e;
    return (e = r.get(t)) !== null && e !== void 0 ? e : 0;
  };
  var sa = (r) => (t) => {
    let e = r(t);
    if (e.renderer === null)
      throw new Error(
        "Missing the renderer of the given AudioParam in the audio graph."
      );
    return e.renderer;
  };
  var na = (r) => (t) => r.get(t);
  var ut = () => new DOMException("", "InvalidStateError");
  var ia = (r) => (t) => {
    let e = r.get(t);
    if (e === void 0) throw ut();
    return e;
  };
  var aa = (r, t) => (e) => {
    let o = r.get(e);
    if (o !== void 0) return o;
    if (t === null)
      throw new Error("Missing the native OfflineAudioContext constructor.");
    return (o = new t(1, 1, 44100)), r.set(e, o), o;
  };
  var ca = (r) => (t) => {
    let e = r.get(t);
    if (e === void 0)
      throw new Error("The context has no set of AudioWorkletNodes.");
    return e;
  };
  var Sr = () => new DOMException("", "InvalidAccessError");
  var ua = (r) => {
    r.getFrequencyResponse = ((t) => (e, o, s) => {
      if (e.length !== o.length || o.length !== s.length) throw Sr();
      return t.call(r, e, o, s);
    })(r.getFrequencyResponse);
  };
  var Ul = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers"
    },
    la = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = o(i),
            l = s(u),
            h = { ...Ul, ...c },
            f = t(u, l ? null : i.baseLatency, h),
            m = l ? e(h.feedback, h.feedforward) : null;
          super(i, !1, f, m),
            ua(f),
            (this._nativeIIRFilterNode = f),
            n(this, 1);
        }
        getFrequencyResponse(i, c, u) {
          return this._nativeIIRFilterNode.getFrequencyResponse(i, c, u);
        }
      };
  var Bo = (r, t, e, o, s, n, a, i, c, u, l) => {
    let h = u.length,
      f = i;
    for (let m = 0; m < h; m += 1) {
      let p = e[0] * u[m];
      for (let d = 1; d < s; d += 1) {
        let _ = (f - d) & (c - 1);
        (p += e[d] * n[_]), (p -= r[d] * a[_]);
      }
      for (let d = s; d < o; d += 1) p += e[d] * n[(f - d) & (c - 1)];
      for (let d = s; d < t; d += 1) p -= r[d] * a[(f - d) & (c - 1)];
      (n[f] = u[m]), (a[f] = p), (f = (f + 1) & (c - 1)), (l[m] = p);
    }
    return f;
  };
  var Zl = (r, t, e, o) => {
      let s = e instanceof Float64Array ? e : new Float64Array(e),
        n = o instanceof Float64Array ? o : new Float64Array(o),
        a = s.length,
        i = n.length,
        c = Math.min(a, i);
      if (s[0] !== 1) {
        for (let p = 0; p < a; p += 1) n[p] /= s[0];
        for (let p = 1; p < i; p += 1) s[p] /= s[0];
      }
      let u = 32,
        l = new Float32Array(u),
        h = new Float32Array(u),
        f = t.createBuffer(r.numberOfChannels, r.length, r.sampleRate),
        m = r.numberOfChannels;
      for (let p = 0; p < m; p += 1) {
        let d = r.getChannelData(p),
          _ = f.getChannelData(p);
        l.fill(0), h.fill(0), Bo(s, a, n, i, c, l, h, 0, u, d, _);
      }
      return f;
    },
    ha = (r, t, e, o, s) => (n, a) => {
      let i = new WeakMap(),
        c = null,
        u = async (l, h) => {
          let f = null,
            m = t(l),
            p = tt(m, h);
          if (
            (h.createIIRFilter === void 0
              ? (f = r(h, {
                  buffer: null,
                  channelCount: 2,
                  channelCountMode: "max",
                  channelInterpretation: "speakers",
                  loop: !1,
                  loopEnd: 0,
                  loopStart: 0,
                  playbackRate: 1
                }))
              : p || (m = h.createIIRFilter(a, n)),
            i.set(h, f === null ? m : f),
            f !== null)
          ) {
            if (c === null) {
              if (e === null)
                throw new Error(
                  "Missing the native OfflineAudioContext constructor."
                );
              let _ = new e(
                l.context.destination.channelCount,
                l.context.length,
                h.sampleRate
              );
              c = (async () => {
                await o(l, _, _.destination);
                let y = await s(_);
                return Zl(y, h, n, a);
              })();
            }
            let d = await c;
            return (f.buffer = d), f.start(0), f;
          }
          return await o(l, h, m), m;
        };
      return {
        render(l, h) {
          let f = i.get(h);
          return f !== void 0 ? Promise.resolve(f) : u(l, h);
        }
      };
    };
  var pa = (r, t, e, o, s, n) => (a) => (i, c) => {
    let u = r.get(i);
    if (u === void 0) {
      if (!a && n(i)) {
        let l = o(i),
          { outputs: h } = e(i);
        for (let f of h)
          if (ze(f)) {
            let m = o(f[0]);
            t(l, m, f[1], f[2]);
          } else {
            let m = s(f[0]);
            l.disconnect(m, f[1]);
          }
      }
      r.set(i, c);
    } else r.set(i, u + c);
  };
  var ma = (r, t) => (e) => {
    let o = r.get(e);
    return t(o) || t(e);
  };
  var fa = (r, t) => (e) => r.has(e) || t(e);
  var da = (r, t) => (e) => r.has(e) || t(e);
  var ga = (r, t) => (e) => {
    let o = r.get(e);
    return t(o) || t(e);
  };
  var _a = (r) => (t) => r !== null && t instanceof r;
  var xa = (r) => (t) =>
    r !== null && typeof r.AudioNode == "function" && t instanceof r.AudioNode;
  var ya = (r) => (t) =>
    r !== null &&
    typeof r.AudioParam == "function" &&
    t instanceof r.AudioParam;
  var va = (r, t) => (e) => r(e) || t(e);
  var wa = (r) => (t) => r !== null && t instanceof r;
  var Ta = (r) => r !== null && r.isSecureContext;
  var ba = (r, t, e, o) =>
    class extends r {
      constructor(n, a) {
        let i = e(n),
          c = t(i, a);
        if (o(i)) throw TypeError();
        super(n, !0, c, null), (this._nativeMediaElementAudioSourceNode = c);
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  var Ql = {
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    },
    Sa = (r, t, e, o) =>
      class extends r {
        constructor(n, a) {
          let i = e(n);
          if (o(i)) throw new TypeError();
          let c = { ...Ql, ...a },
            u = t(i, c);
          super(n, !1, u, null),
            (this._nativeMediaStreamAudioDestinationNode = u);
        }
        get stream() {
          return this._nativeMediaStreamAudioDestinationNode.stream;
        }
      };
  var Aa = (r, t, e, o) =>
    class extends r {
      constructor(n, a) {
        let i = e(n),
          c = t(i, a);
        if (o(i)) throw new TypeError();
        super(n, !0, c, null), (this._nativeMediaStreamAudioSourceNode = c);
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  var Ca = (r, t, e) =>
    class extends r {
      constructor(s, n) {
        let a = e(s),
          i = t(a, n);
        super(s, !0, i, null);
      }
    };
  var Na = (r, t, e, o, s) =>
    class extends o {
      constructor(a = {}) {
        if (s === null)
          throw new Error("Missing the native AudioContext constructor.");
        let i;
        try {
          i = new s(a);
        } catch (l) {
          throw l.code === 12 && l.message === "sampleRate is not in range"
            ? t()
            : l;
        }
        if (i === null) throw e();
        if (!Vo(a.latencyHint))
          throw new TypeError(
            `The provided value '${a.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
          );
        if (a.sampleRate !== void 0 && i.sampleRate !== a.sampleRate) throw t();
        super(i, 2);
        let { latencyHint: c } = a,
          { sampleRate: u } = i;
        if (
          ((this._baseLatency =
            typeof i.baseLatency == "number"
              ? i.baseLatency
              : c === "balanced"
              ? 512 / u
              : c === "interactive" || c === void 0
              ? 256 / u
              : c === "playback"
              ? 1024 / u
              : (Math.max(2, Math.min(128, Math.round((c * u) / 128))) * 128) /
                u),
          (this._nativeAudioContext = i),
          s.name === "webkitAudioContext"
            ? ((this._nativeGainNode = i.createGain()),
              (this._nativeOscillatorNode = i.createOscillator()),
              (this._nativeGainNode.gain.value = 1e-37),
              this._nativeOscillatorNode
                .connect(this._nativeGainNode)
                .connect(i.destination),
              this._nativeOscillatorNode.start())
            : ((this._nativeGainNode = null),
              (this._nativeOscillatorNode = null)),
          (this._state = null),
          i.state === "running")
        ) {
          this._state = "suspended";
          let l = () => {
            this._state === "suspended" && (this._state = null),
              i.removeEventListener("statechange", l);
          };
          i.addEventListener("statechange", l);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null
          ? this._state
          : this._nativeAudioContext.state;
      }
      close() {
        return this.state === "closed"
          ? this._nativeAudioContext.close().then(() => {
              throw r();
            })
          : (this._state === "suspended" && (this._state = null),
            this._nativeAudioContext.close().then(() => {
              this._nativeGainNode !== null &&
                this._nativeOscillatorNode !== null &&
                (this._nativeOscillatorNode.stop(),
                this._nativeGainNode.disconnect(),
                this._nativeOscillatorNode.disconnect()),
                Ge(this);
            }));
      }
      resume() {
        return this._state === "suspended"
          ? new Promise((a, i) => {
              let c = () => {
                this._nativeAudioContext.removeEventListener("statechange", c),
                  this._nativeAudioContext.state === "running"
                    ? a()
                    : this.resume().then(a, i);
              };
              this._nativeAudioContext.addEventListener("statechange", c);
            })
          : this._nativeAudioContext.resume().catch((a) => {
              throw a === void 0 || a.code === 15 ? r() : a;
            });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((a) => {
          throw a === void 0 ? r() : a;
        });
      }
    };
  var Oa = (r, t, e, o, s, n) =>
    class extends e {
      constructor(i, c) {
        super(i),
          (this._nativeContext = i),
          dr.set(this, i),
          o(i) && s.set(i, new Set()),
          (this._destination = new r(this, c)),
          (this._listener = t(this, i)),
          (this._onstatechange = null);
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(i) {
        let c = typeof i == "function" ? n(this, i) : null;
        this._nativeContext.onstatechange = c;
        let u = this._nativeContext.onstatechange;
        this._onstatechange = u !== null && u === c ? i : u;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  var he = (r) => {
    let t = new Uint32Array([
      1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580,
      1635017060, 4, 0
    ]);
    try {
      let e = r.decodeAudioData(t.buffer, () => {});
      return e === void 0 ? !1 : (e.catch(() => {}), !0);
    } catch {}
    return !1;
  };
  var Xl = { numberOfChannels: 1 },
    ka = (r, t, e, o, s) =>
      class extends o {
        constructor(a) {
          let {
              length: i,
              numberOfChannels: c,
              sampleRate: u
            } = { ...Xl, ...a },
            l = e(c, i, u);
          r(he, () => he(l)) ||
            l.addEventListener(
              "statechange",
              (() => {
                let h = 0,
                  f = (m) => {
                    this._state === "running" &&
                      (h > 0
                        ? (l.removeEventListener("statechange", f),
                          m.stopImmediatePropagation(),
                          this._waitForThePromiseToSettle(m))
                        : (h += 1));
                  };
                return f;
              })()
            ),
            super(l, c),
            (this._length = i),
            (this._nativeOfflineAudioContext = l),
            (this._state = null);
        }
        get length() {
          return this._nativeOfflineAudioContext.length === void 0
            ? this._length
            : this._nativeOfflineAudioContext.length;
        }
        get state() {
          return this._state === null
            ? this._nativeOfflineAudioContext.state
            : this._state;
        }
        startRendering() {
          return this._state === "running"
            ? Promise.reject(t())
            : ((this._state = "running"),
              s(this.destination, this._nativeOfflineAudioContext).finally(
                () => {
                  (this._state = null), Ge(this);
                }
              ));
        }
        _waitForThePromiseToSettle(a) {
          this._state === null
            ? this._nativeOfflineAudioContext.dispatchEvent(a)
            : setTimeout(() => this._waitForThePromiseToSettle(a));
        }
      };
  var Da = (r, t) => (e, o, s) => {
    let n = new Set();
    return (
      (e.connect = (
        (a) =>
        (i, c = 0, u = 0) => {
          let l = n.size === 0;
          if (t(i))
            return (
              a.call(e, i, c, u),
              r(
                n,
                [i, c, u],
                (h) => h[0] === i && h[1] === c && h[2] === u,
                !0
              ),
              l && o(),
              i
            );
          a.call(e, i, c),
            r(n, [i, c], (h) => h[0] === i && h[1] === c, !0),
            l && o();
        }
      )(e.connect)),
      (e.disconnect = ((a) => (i, c, u) => {
        let l = n.size > 0;
        if (i === void 0) a.apply(e), n.clear();
        else if (typeof i == "number") {
          a.call(e, i);
          for (let f of n) f[1] === i && n.delete(f);
        } else {
          t(i) ? a.call(e, i, c, u) : a.call(e, i, c);
          for (let f of n)
            f[0] === i &&
              (c === void 0 || f[1] === c) &&
              (u === void 0 || f[2] === u) &&
              n.delete(f);
        }
        let h = n.size === 0;
        l && h && s();
      })(e.disconnect)),
      e
    );
  };
  var et = (r, t, e) => {
    let o = t[e];
    o !== void 0 && o !== r[e] && (r[e] = o);
  };
  var $ = (r, t) => {
    et(r, t, "channelCount"),
      et(r, t, "channelCountMode"),
      et(r, t, "channelInterpretation");
  };
  var Ls = (r) => typeof r.getFloatTimeDomainData == "function";
  var Ea = (r) => {
    r.getFloatTimeDomainData = (t) => {
      let e = new Uint8Array(t.length);
      r.getByteTimeDomainData(e);
      let o = Math.max(e.length, r.fftSize);
      for (let s = 0; s < o; s += 1) t[s] = (e[s] - 128) * 0.0078125;
      return t;
    };
  };
  var Ma = (r, t) => (e, o) => {
    let s = e.createAnalyser();
    if (($(s, o), !(o.maxDecibels > o.minDecibels))) throw t();
    return (
      et(s, o, "fftSize"),
      et(s, o, "maxDecibels"),
      et(s, o, "minDecibels"),
      et(s, o, "smoothingTimeConstant"),
      r(Ls, () => Ls(s)) || Ea(s),
      s
    );
  };
  var Fa = (r) =>
    r === null ? null : r.hasOwnProperty("AudioBuffer") ? r.AudioBuffer : null;
  var ot = (r, t, e) => {
    let o = t[e];
    o !== void 0 && o !== r[e].value && (r[e].value = o);
  };
  var Ra = (r) => {
    r.start = ((t) => {
      let e = !1;
      return (o = 0, s = 0, n) => {
        if (e) throw ut();
        t.call(r, o, s, n), (e = !0);
      };
    })(r.start);
  };
  var Ar = (r) => {
    r.start = (
      (t) =>
      (e = 0, o = 0, s) => {
        if ((typeof s == "number" && s < 0) || o < 0 || e < 0)
          throw new RangeError("The parameters can't be negative.");
        t.call(r, e, o, s);
      }
    )(r.start);
  };
  var Cr = (r) => {
    r.stop = (
      (t) =>
      (e = 0) => {
        if (e < 0) throw new RangeError("The parameter can't be negative.");
        t.call(r, e);
      }
    )(r.stop);
  };
  var Ia = (r, t, e, o, s, n, a, i, c, u, l) => (h, f) => {
    let m = h.createBufferSource();
    return (
      $(m, f),
      ot(m, f, "playbackRate"),
      et(m, f, "buffer"),
      et(m, f, "loop"),
      et(m, f, "loopEnd"),
      et(m, f, "loopStart"),
      t(e, () => e(h)) || Ra(m),
      t(o, () => o(h)) || c(m),
      t(s, () => s(h)) || u(m, h),
      t(n, () => n(h)) || Ar(m),
      t(a, () => a(h)) || l(m, h),
      t(i, () => i(h)) || Cr(m),
      r(h, m),
      m
    );
  };
  var qa = (r) =>
    r === null
      ? null
      : r.hasOwnProperty("AudioContext")
      ? r.AudioContext
      : r.hasOwnProperty("webkitAudioContext")
      ? r.webkitAudioContext
      : null;
  var Pa = (r, t) => (e, o, s) => {
    let n = e.destination;
    if (n.channelCount !== o)
      try {
        n.channelCount = o;
      } catch {}
    s && n.channelCountMode !== "explicit" && (n.channelCountMode = "explicit"),
      n.maxChannelCount === 0 &&
        Object.defineProperty(n, "maxChannelCount", { value: o });
    let a = r(e, {
      channelCount: o,
      channelCountMode: n.channelCountMode,
      channelInterpretation: n.channelInterpretation,
      gain: 1
    });
    return (
      t(
        a,
        "channelCount",
        (i) => () => i.call(a),
        (i) => (c) => {
          i.call(a, c);
          try {
            n.channelCount = c;
          } catch (u) {
            if (c > n.maxChannelCount) throw u;
          }
        }
      ),
      t(
        a,
        "channelCountMode",
        (i) => () => i.call(a),
        (i) => (c) => {
          i.call(a, c), (n.channelCountMode = c);
        }
      ),
      t(
        a,
        "channelInterpretation",
        (i) => () => i.call(a),
        (i) => (c) => {
          i.call(a, c), (n.channelInterpretation = c);
        }
      ),
      Object.defineProperty(a, "maxChannelCount", {
        get: () => n.maxChannelCount
      }),
      a.connect(n),
      a
    );
  };
  var Va = (r) =>
    r === null
      ? null
      : r.hasOwnProperty("AudioWorkletNode")
      ? r.AudioWorkletNode
      : null;
  var La = (r) => {
    let { port1: t } = new MessageChannel();
    try {
      t.postMessage(r);
    } finally {
      t.close();
    }
  };
  var Wa = (r, t, e, o, s) => (n, a, i, c, u, l) => {
    if (i !== null)
      try {
        let h = new i(n, c, l),
          f = new Map(),
          m = null;
        if (
          (Object.defineProperties(h, {
            channelCount: {
              get: () => l.channelCount,
              set: () => {
                throw r();
              }
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw r();
              }
            },
            onprocessorerror: {
              get: () => m,
              set: (p) => {
                typeof m == "function" &&
                  h.removeEventListener("processorerror", m),
                  (m = typeof p == "function" ? p : null),
                  typeof m == "function" &&
                    h.addEventListener("processorerror", m);
              }
            }
          }),
          (h.addEventListener = (
            (p) =>
            (...d) => {
              if (d[0] === "processorerror") {
                let _ =
                  typeof d[1] == "function"
                    ? d[1]
                    : typeof d[1] == "object" &&
                      d[1] !== null &&
                      typeof d[1].handleEvent == "function"
                    ? d[1].handleEvent
                    : null;
                if (_ !== null) {
                  let y = f.get(d[1]);
                  y !== void 0
                    ? (d[1] = y)
                    : ((d[1] = (S) => {
                        S.type === "error"
                          ? (Object.defineProperties(S, {
                              type: { value: "processorerror" }
                            }),
                            _(S))
                          : _(new ErrorEvent(d[0], { ...S }));
                      }),
                      f.set(_, d[1]));
                }
              }
              return p.call(h, "error", d[1], d[2]), p.call(h, ...d);
            }
          )(h.addEventListener)),
          (h.removeEventListener = (
            (p) =>
            (...d) => {
              if (d[0] === "processorerror") {
                let _ = f.get(d[1]);
                _ !== void 0 && (f.delete(d[1]), (d[1] = _));
              }
              return (
                p.call(h, "error", d[1], d[2]), p.call(h, d[0], d[1], d[2])
              );
            }
          )(h.removeEventListener)),
          l.numberOfOutputs !== 0)
        ) {
          let p = e(n, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
          });
          return (
            h.connect(p).connect(n.destination),
            s(
              h,
              () => p.disconnect(),
              () => p.connect(n.destination)
            )
          );
        }
        return h;
      } catch (h) {
        throw h.code === 11 ? o() : h;
      }
    if (u === void 0) throw o();
    return La(l), t(n, a, u, l);
  };
  var Go = (r, t) =>
    r === null
      ? 512
      : Math.max(
          512,
          Math.min(16384, Math.pow(2, Math.round(Math.log2(r * t))))
        );
  var ja = (r) =>
    new Promise((t, e) => {
      let { port1: o, port2: s } = new MessageChannel();
      (o.onmessage = ({ data: n }) => {
        o.close(), s.close(), t(n);
      }),
        (o.onmessageerror = ({ data: n }) => {
          o.close(), s.close(), e(n);
        }),
        s.postMessage(r);
    });
  var Ba = async (r, t) => {
    let e = await ja(t);
    return new r(e);
  };
  var Ga = (r, t, e, o) => {
    let s = fo.get(r);
    s === void 0 && ((s = new WeakMap()), fo.set(r, s));
    let n = Ba(e, o);
    return s.set(t, n), n;
  };
  var za = (r, t, e, o, s, n, a, i, c, u, l, h, f) => (m, p, d, _) => {
    if (_.numberOfInputs === 0 && _.numberOfOutputs === 0) throw c();
    let y = Array.isArray(_.outputChannelCount)
      ? _.outputChannelCount
      : Array.from(_.outputChannelCount);
    if (y.some((W) => W < 1)) throw c();
    if (y.length !== _.numberOfOutputs) throw t();
    if (_.channelCountMode !== "explicit") throw c();
    let S = _.channelCount * _.numberOfInputs,
      C = y.reduce((W, U) => W + U, 0),
      D = d.parameterDescriptors === void 0 ? 0 : d.parameterDescriptors.length;
    if (S + D > 6 || C > 6) throw c();
    let x = new MessageChannel(),
      w = [],
      T = [];
    for (let W = 0; W < _.numberOfInputs; W += 1)
      w.push(
        a(m, {
          channelCount: _.channelCount,
          channelCountMode: _.channelCountMode,
          channelInterpretation: _.channelInterpretation,
          gain: 1
        })
      ),
        T.push(
          s(m, {
            channelCount: _.channelCount,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: _.channelCount
          })
        );
    let v = [];
    if (d.parameterDescriptors !== void 0)
      for (let {
        defaultValue: W,
        maxValue: U,
        minValue: At,
        name: ht
      } of d.parameterDescriptors) {
        let rt = n(m, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          offset:
            _.parameterData[ht] !== void 0
              ? _.parameterData[ht]
              : W === void 0
              ? 0
              : W
        });
        Object.defineProperties(rt.offset, {
          defaultValue: { get: () => (W === void 0 ? 0 : W) },
          maxValue: { get: () => (U === void 0 ? ft : U) },
          minValue: { get: () => (At === void 0 ? xt : At) }
        }),
          v.push(rt);
      }
    let q = o(m, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, S + D)
      }),
      M = Go(p, m.sampleRate),
      E = i(m, M, S + D, Math.max(1, C)),
      N = s(m, {
        channelCount: Math.max(1, C),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, C)
      }),
      j = [];
    for (let W = 0; W < _.numberOfOutputs; W += 1)
      j.push(
        o(m, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: y[W]
        })
      );
    for (let W = 0; W < _.numberOfInputs; W += 1) {
      w[W].connect(T[W]);
      for (let U = 0; U < _.channelCount; U += 1)
        T[W].connect(q, U, W * _.channelCount + U);
    }
    let F = new wr(
      d.parameterDescriptors === void 0
        ? []
        : d.parameterDescriptors.map(({ name: W }, U) => {
            let At = v[U];
            return At.connect(q, 0, S + U), At.start(0), [W, At.offset];
          })
    );
    q.connect(E);
    let A = _.channelInterpretation,
      O = null,
      b = _.numberOfOutputs === 0 ? [E] : j,
      P = {
        get bufferSize() {
          return M;
        },
        get channelCount() {
          return _.channelCount;
        },
        set channelCount(W) {
          throw e();
        },
        get channelCountMode() {
          return _.channelCountMode;
        },
        set channelCountMode(W) {
          throw e();
        },
        get channelInterpretation() {
          return A;
        },
        set channelInterpretation(W) {
          for (let U of w) U.channelInterpretation = W;
          A = W;
        },
        get context() {
          return E.context;
        },
        get inputs() {
          return w;
        },
        get numberOfInputs() {
          return _.numberOfInputs;
        },
        get numberOfOutputs() {
          return _.numberOfOutputs;
        },
        get onprocessorerror() {
          return O;
        },
        set onprocessorerror(W) {
          typeof O == "function" && P.removeEventListener("processorerror", O),
            (O = typeof W == "function" ? W : null),
            typeof O == "function" && P.addEventListener("processorerror", O);
        },
        get parameters() {
          return F;
        },
        get port() {
          return x.port2;
        },
        addEventListener(...W) {
          return E.addEventListener(W[0], W[1], W[2]);
        },
        connect: r.bind(null, b),
        disconnect: u.bind(null, b),
        dispatchEvent(...W) {
          return E.dispatchEvent(W[0]);
        },
        removeEventListener(...W) {
          return E.removeEventListener(W[0], W[1], W[2]);
        }
      },
      k = new Map();
    (x.port1.addEventListener = (
      (W) =>
      (...U) => {
        if (U[0] === "message") {
          let At =
            typeof U[1] == "function"
              ? U[1]
              : typeof U[1] == "object" &&
                U[1] !== null &&
                typeof U[1].handleEvent == "function"
              ? U[1].handleEvent
              : null;
          if (At !== null) {
            let ht = k.get(U[1]);
            ht !== void 0
              ? (U[1] = ht)
              : ((U[1] = (rt) => {
                  l(m.currentTime, m.sampleRate, () => At(rt));
                }),
                k.set(At, U[1]));
          }
        }
        return W.call(x.port1, U[0], U[1], U[2]);
      }
    )(x.port1.addEventListener)),
      (x.port1.removeEventListener = (
        (W) =>
        (...U) => {
          if (U[0] === "message") {
            let At = k.get(U[1]);
            At !== void 0 && (k.delete(U[1]), (U[1] = At));
          }
          return W.call(x.port1, U[0], U[1], U[2]);
        }
      )(x.port1.removeEventListener));
    let L = null;
    Object.defineProperty(x.port1, "onmessage", {
      get: () => L,
      set: (W) => {
        typeof L == "function" && x.port1.removeEventListener("message", L),
          (L = typeof W == "function" ? W : null),
          typeof L == "function" &&
            (x.port1.addEventListener("message", L), x.port1.start());
      }
    }),
      (d.prototype.port = x.port1);
    let R = null;
    Ga(m, P, d, _).then((W) => (R = W));
    let St = br(_.numberOfInputs, _.channelCount),
      Dt = br(_.numberOfOutputs, y),
      Y =
        d.parameterDescriptors === void 0
          ? []
          : d.parameterDescriptors.reduce(
              (W, { name: U }) => ({ ...W, [U]: new Float32Array(128) }),
              {}
            ),
      st = !0,
      _t = () => {
        _.numberOfOutputs > 0 && E.disconnect(N);
        for (let W = 0, U = 0; W < _.numberOfOutputs; W += 1) {
          let At = j[W];
          for (let ht = 0; ht < y[W]; ht += 1) N.disconnect(At, U + ht, ht);
          U += y[W];
        }
      },
      G = new Map();
    E.onaudioprocess = ({ inputBuffer: W, outputBuffer: U }) => {
      if (R !== null) {
        let At = h(P);
        for (let ht = 0; ht < M; ht += 128) {
          for (let rt = 0; rt < _.numberOfInputs; rt += 1)
            for (let mt = 0; mt < _.channelCount; mt += 1)
              Tr(W, St[rt], mt, mt, ht);
          d.parameterDescriptors !== void 0 &&
            d.parameterDescriptors.forEach(({ name: rt }, mt) => {
              Tr(W, Y, rt, S + mt, ht);
            });
          for (let rt = 0; rt < _.numberOfInputs; rt += 1)
            for (let mt = 0; mt < y[rt]; mt += 1)
              Dt[rt][mt].byteLength === 0 &&
                (Dt[rt][mt] = new Float32Array(128));
          try {
            let rt = St.map((Kt, We) => {
              if (At[We].size > 0) return G.set(We, M / 128), Kt;
              let As = G.get(We);
              return As === void 0
                ? []
                : (Kt.every((el) => el.every((rl) => rl === 0)) &&
                    (As === 1 ? G.delete(We) : G.set(We, As - 1)),
                  Kt);
            });
            st = l(m.currentTime + ht / m.sampleRate, m.sampleRate, () =>
              R.process(rt, Dt, Y)
            );
            for (let Kt = 0, We = 0; Kt < _.numberOfOutputs; Kt += 1) {
              for (let Jr = 0; Jr < y[Kt]; Jr += 1)
                Wo(U, Dt[Kt], Jr, We + Jr, ht);
              We += y[Kt];
            }
          } catch (rt) {
            (st = !1),
              P.dispatchEvent(
                new ErrorEvent("processorerror", {
                  colno: rt.colno,
                  filename: rt.filename,
                  lineno: rt.lineno,
                  message: rt.message
                })
              );
          }
          if (!st) {
            for (let rt = 0; rt < _.numberOfInputs; rt += 1) {
              w[rt].disconnect(T[rt]);
              for (let mt = 0; mt < _.channelCount; mt += 1)
                T[ht].disconnect(q, mt, rt * _.channelCount + mt);
            }
            if (d.parameterDescriptors !== void 0) {
              let rt = d.parameterDescriptors.length;
              for (let mt = 0; mt < rt; mt += 1) {
                let Kt = v[mt];
                Kt.disconnect(q, 0, S + mt), Kt.stop();
              }
            }
            q.disconnect(E), (E.onaudioprocess = null), Ht ? _t() : De();
            break;
          }
        }
      }
    };
    let Ht = !1,
      $t = a(m, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      }),
      Qt = () => E.connect($t).connect(m.destination),
      De = () => {
        E.disconnect($t), $t.disconnect();
      },
      Je = () => {
        if (st) {
          De(), _.numberOfOutputs > 0 && E.connect(N);
          for (let W = 0, U = 0; W < _.numberOfOutputs; W += 1) {
            let At = j[W];
            for (let ht = 0; ht < y[W]; ht += 1) N.connect(At, U + ht, ht);
            U += y[W];
          }
        }
        Ht = !0;
      },
      mr = () => {
        st && (Qt(), _t()), (Ht = !1);
      };
    return Qt(), f(P, Je, mr);
  };
  var Ws = (r, t) => {
    let e = r.createBiquadFilter();
    return (
      $(e, t),
      ot(e, t, "Q"),
      ot(e, t, "detune"),
      ot(e, t, "frequency"),
      ot(e, t, "gain"),
      et(e, t, "type"),
      e
    );
  };
  var Ua = (r, t) => (e, o) => {
    let s = e.createChannelMerger(o.numberOfInputs);
    return r !== null && r.name === "webkitAudioContext" && t(e, s), $(s, o), s;
  };
  var Za = (r) => {
    let t = r.numberOfOutputs;
    Object.defineProperty(r, "channelCount", {
      get: () => t,
      set: (e) => {
        if (e !== t) throw ut();
      }
    }),
      Object.defineProperty(r, "channelCountMode", {
        get: () => "explicit",
        set: (e) => {
          if (e !== "explicit") throw ut();
        }
      }),
      Object.defineProperty(r, "channelInterpretation", {
        get: () => "discrete",
        set: (e) => {
          if (e !== "discrete") throw ut();
        }
      });
  };
  var Nr = (r, t) => {
    let e = r.createChannelSplitter(t.numberOfOutputs);
    return $(e, t), Za(e), e;
  };
  var Qa = (r, t, e, o, s) => (n, a) => {
    if (n.createConstantSource === void 0) return e(n, a);
    let i = n.createConstantSource();
    return (
      $(i, a),
      ot(i, a, "offset"),
      t(o, () => o(n)) || Ar(i),
      t(s, () => s(n)) || Cr(i),
      r(n, i),
      i
    );
  };
  var re = (r, t) => (
    (r.connect = t.connect.bind(t)), (r.disconnect = t.disconnect.bind(t)), r
  );
  var Xa =
    (r, t, e, o) =>
    (s, { offset: n, ...a }) => {
      let i = s.createBuffer(1, 2, 44100),
        c = t(s, {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1
        }),
        u = e(s, { ...a, gain: n }),
        l = i.getChannelData(0);
      (l[0] = 1), (l[1] = 1), (c.buffer = i), (c.loop = !0);
      let h = {
          get bufferSize() {},
          get channelCount() {
            return u.channelCount;
          },
          set channelCount(p) {
            u.channelCount = p;
          },
          get channelCountMode() {
            return u.channelCountMode;
          },
          set channelCountMode(p) {
            u.channelCountMode = p;
          },
          get channelInterpretation() {
            return u.channelInterpretation;
          },
          set channelInterpretation(p) {
            u.channelInterpretation = p;
          },
          get context() {
            return u.context;
          },
          get inputs() {
            return [];
          },
          get numberOfInputs() {
            return c.numberOfInputs;
          },
          get numberOfOutputs() {
            return u.numberOfOutputs;
          },
          get offset() {
            return u.gain;
          },
          get onended() {
            return c.onended;
          },
          set onended(p) {
            c.onended = p;
          },
          addEventListener(...p) {
            return c.addEventListener(p[0], p[1], p[2]);
          },
          dispatchEvent(...p) {
            return c.dispatchEvent(p[0]);
          },
          removeEventListener(...p) {
            return c.removeEventListener(p[0], p[1], p[2]);
          },
          start(p = 0) {
            c.start.call(c, p);
          },
          stop(p = 0) {
            c.stop.call(c, p);
          }
        },
        f = () => c.connect(u),
        m = () => c.disconnect(u);
      return r(s, c), o(re(h, u), f, m);
    };
  var Ya = (r, t) => (e, o) => {
    let s = e.createConvolver();
    if (
      ($(s, o),
      o.disableNormalization === s.normalize &&
        (s.normalize = !o.disableNormalization),
      et(s, o, "buffer"),
      o.channelCount > 2 ||
        (t(
          s,
          "channelCount",
          (n) => () => n.call(s),
          (n) => (a) => {
            if (a > 2) throw r();
            return n.call(s, a);
          }
        ),
        o.channelCountMode === "max"))
    )
      throw r();
    return (
      t(
        s,
        "channelCountMode",
        (n) => () => n.call(s),
        (n) => (a) => {
          if (a === "max") throw r();
          return n.call(s, a);
        }
      ),
      s
    );
  };
  var js = (r, t) => {
    let e = r.createDelay(t.maxDelayTime);
    return $(e, t), ot(e, t, "delayTime"), e;
  };
  var Ha = (r) => (t, e) => {
    let o = t.createDynamicsCompressor();
    if (($(o, e), e.channelCount > 2 || e.channelCountMode === "max"))
      throw r();
    return (
      ot(o, e, "attack"),
      ot(o, e, "knee"),
      ot(o, e, "ratio"),
      ot(o, e, "release"),
      ot(o, e, "threshold"),
      o
    );
  };
  var Vt = (r, t) => {
    let e = r.createGain();
    return $(e, t), ot(e, t, "gain"), e;
  };
  var $a = (r) => (t, e, o) => {
    if (t.createIIRFilter === void 0) return r(t, e, o);
    let s = t.createIIRFilter(o.feedforward, o.feedback);
    return $(s, o), s;
  };
  function Yl(r, t) {
    let e = t[0] * t[0] + t[1] * t[1];
    return [(r[0] * t[0] + r[1] * t[1]) / e, (r[1] * t[0] - r[0] * t[1]) / e];
  }
  function Hl(r, t) {
    return [r[0] * t[0] - r[1] * t[1], r[0] * t[1] + r[1] * t[0]];
  }
  function Ka(r, t) {
    let e = [0, 0];
    for (let o = r.length - 1; o >= 0; o -= 1) (e = Hl(e, t)), (e[0] += r[o]);
    return e;
  }
  var Ja =
    (r, t, e, o) =>
    (
      s,
      n,
      {
        channelCount: a,
        channelCountMode: i,
        channelInterpretation: c,
        feedback: u,
        feedforward: l
      }
    ) => {
      let h = Go(n, s.sampleRate),
        f = u instanceof Float64Array ? u : new Float64Array(u),
        m = l instanceof Float64Array ? l : new Float64Array(l),
        p = f.length,
        d = m.length,
        _ = Math.min(p, d);
      if (p === 0 || p > 20) throw o();
      if (f[0] === 0) throw t();
      if (d === 0 || d > 20) throw o();
      if (m[0] === 0) throw t();
      if (f[0] !== 1) {
        for (let v = 0; v < d; v += 1) m[v] /= f[0];
        for (let v = 1; v < p; v += 1) f[v] /= f[0];
      }
      let y = e(s, h, a, a);
      (y.channelCount = a),
        (y.channelCountMode = i),
        (y.channelInterpretation = c);
      let S = 32,
        C = [],
        D = [],
        x = [];
      for (let v = 0; v < a; v += 1) {
        C.push(0);
        let q = new Float32Array(S),
          M = new Float32Array(S);
        q.fill(0), M.fill(0), D.push(q), x.push(M);
      }
      y.onaudioprocess = (v) => {
        let q = v.inputBuffer,
          M = v.outputBuffer,
          E = q.numberOfChannels;
        for (let N = 0; N < E; N += 1) {
          let j = q.getChannelData(N),
            F = M.getChannelData(N);
          C[N] = Bo(f, p, m, d, _, D[N], x[N], C[N], S, j, F);
        }
      };
      let w = s.sampleRate / 2;
      return re(
        {
          get bufferSize() {
            return h;
          },
          get channelCount() {
            return y.channelCount;
          },
          set channelCount(v) {
            y.channelCount = v;
          },
          get channelCountMode() {
            return y.channelCountMode;
          },
          set channelCountMode(v) {
            y.channelCountMode = v;
          },
          get channelInterpretation() {
            return y.channelInterpretation;
          },
          set channelInterpretation(v) {
            y.channelInterpretation = v;
          },
          get context() {
            return y.context;
          },
          get inputs() {
            return [y];
          },
          get numberOfInputs() {
            return y.numberOfInputs;
          },
          get numberOfOutputs() {
            return y.numberOfOutputs;
          },
          addEventListener(...v) {
            return y.addEventListener(v[0], v[1], v[2]);
          },
          dispatchEvent(...v) {
            return y.dispatchEvent(v[0]);
          },
          getFrequencyResponse(v, q, M) {
            if (v.length !== q.length || q.length !== M.length) throw r();
            let E = v.length;
            for (let N = 0; N < E; N += 1) {
              let j = -Math.PI * (v[N] / w),
                F = [Math.cos(j), Math.sin(j)],
                A = Ka(m, F),
                O = Ka(f, F),
                b = Yl(A, O);
              (q[N] = Math.sqrt(b[0] * b[0] + b[1] * b[1])),
                (M[N] = Math.atan2(b[1], b[0]));
            }
          },
          removeEventListener(...v) {
            return y.removeEventListener(v[0], v[1], v[2]);
          }
        },
        y
      );
    };
  var tc = (r, t) => r.createMediaElementSource(t.mediaElement);
  var ec = (r, t) => {
    let e = r.createMediaStreamDestination();
    return (
      $(e, t),
      e.numberOfOutputs === 1 &&
        Object.defineProperty(e, "numberOfOutputs", { get: () => 0 }),
      e
    );
  };
  var rc = (r, { mediaStream: t }) => {
    let e = t.getAudioTracks();
    e.sort((n, a) => (n.id < a.id ? -1 : n.id > a.id ? 1 : 0));
    let o = e.slice(0, 1),
      s = r.createMediaStreamSource(new MediaStream(o));
    return Object.defineProperty(s, "mediaStream", { value: t }), s;
  };
  var oc =
    (r, t) =>
    (e, { mediaStreamTrack: o }) => {
      if (typeof e.createMediaStreamTrackSource == "function")
        return e.createMediaStreamTrackSource(o);
      let s = new MediaStream([o]),
        n = e.createMediaStreamSource(s);
      if (o.kind !== "audio") throw r();
      if (t(e)) throw new TypeError();
      return n;
    };
  var sc = (r) =>
    r === null
      ? null
      : r.hasOwnProperty("OfflineAudioContext")
      ? r.OfflineAudioContext
      : r.hasOwnProperty("webkitOfflineAudioContext")
      ? r.webkitOfflineAudioContext
      : null;
  var nc = (r, t, e, o, s, n) => (a, i) => {
    let c = a.createOscillator();
    return (
      $(c, i),
      ot(c, i, "detune"),
      ot(c, i, "frequency"),
      i.periodicWave !== void 0
        ? c.setPeriodicWave(i.periodicWave)
        : et(c, i, "type"),
      t(e, () => e(a)) || Ar(c),
      t(o, () => o(a)) || n(c, a),
      t(s, () => s(a)) || Cr(c),
      r(a, c),
      c
    );
  };
  var ic = (r) => (t, e) => {
    let o = t.createPanner();
    return o.orientationX === void 0
      ? r(t, e)
      : ($(o, e),
        ot(o, e, "orientationX"),
        ot(o, e, "orientationY"),
        ot(o, e, "orientationZ"),
        ot(o, e, "positionX"),
        ot(o, e, "positionY"),
        ot(o, e, "positionZ"),
        et(o, e, "coneInnerAngle"),
        et(o, e, "coneOuterAngle"),
        et(o, e, "coneOuterGain"),
        et(o, e, "distanceModel"),
        et(o, e, "maxDistance"),
        et(o, e, "panningModel"),
        et(o, e, "refDistance"),
        et(o, e, "rolloffFactor"),
        o);
  };
  var ac =
    (r, t, e, o, s, n, a, i, c, u) =>
    (
      l,
      {
        coneInnerAngle: h,
        coneOuterAngle: f,
        coneOuterGain: m,
        distanceModel: p,
        maxDistance: d,
        orientationX: _,
        orientationY: y,
        orientationZ: S,
        panningModel: C,
        positionX: D,
        positionY: x,
        positionZ: w,
        refDistance: T,
        rolloffFactor: v,
        ...q
      }
    ) => {
      let M = l.createPanner();
      if (q.channelCount > 2 || q.channelCountMode === "max") throw a();
      $(M, q);
      let E = {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete"
        },
        N = e(l, {
          ...E,
          channelInterpretation: "speakers",
          numberOfInputs: 6
        }),
        j = o(l, { ...q, gain: 1 }),
        F = o(l, { ...E, gain: 1 }),
        A = o(l, { ...E, gain: 0 }),
        O = o(l, { ...E, gain: 0 }),
        b = o(l, { ...E, gain: 0 }),
        P = o(l, { ...E, gain: 0 }),
        k = o(l, { ...E, gain: 0 }),
        L = s(l, 256, 6, 1),
        R = n(l, { ...E, curve: new Float32Array([1, 1]), oversample: "none" }),
        J = [_, y, S],
        St = [D, x, w],
        Dt = new Float32Array(1);
      (L.onaudioprocess = ({ inputBuffer: G }) => {
        let Ht = [c(G, Dt, 0), c(G, Dt, 1), c(G, Dt, 2)];
        Ht.some((Qt, De) => Qt !== J[De]) &&
          (M.setOrientation(...Ht), (J = Ht));
        let $t = [c(G, Dt, 3), c(G, Dt, 4), c(G, Dt, 5)];
        $t.some((Qt, De) => Qt !== St[De]) && (M.setPosition(...$t), (St = $t));
      }),
        Object.defineProperty(A.gain, "defaultValue", { get: () => 0 }),
        Object.defineProperty(O.gain, "defaultValue", { get: () => 0 }),
        Object.defineProperty(b.gain, "defaultValue", { get: () => 0 }),
        Object.defineProperty(P.gain, "defaultValue", { get: () => 0 }),
        Object.defineProperty(k.gain, "defaultValue", { get: () => 0 });
      let Y = {
        get bufferSize() {},
        get channelCount() {
          return M.channelCount;
        },
        set channelCount(G) {
          if (G > 2) throw a();
          (j.channelCount = G), (M.channelCount = G);
        },
        get channelCountMode() {
          return M.channelCountMode;
        },
        set channelCountMode(G) {
          if (G === "max") throw a();
          (j.channelCountMode = G), (M.channelCountMode = G);
        },
        get channelInterpretation() {
          return M.channelInterpretation;
        },
        set channelInterpretation(G) {
          (j.channelInterpretation = G), (M.channelInterpretation = G);
        },
        get coneInnerAngle() {
          return M.coneInnerAngle;
        },
        set coneInnerAngle(G) {
          M.coneInnerAngle = G;
        },
        get coneOuterAngle() {
          return M.coneOuterAngle;
        },
        set coneOuterAngle(G) {
          M.coneOuterAngle = G;
        },
        get coneOuterGain() {
          return M.coneOuterGain;
        },
        set coneOuterGain(G) {
          if (G < 0 || G > 1) throw t();
          M.coneOuterGain = G;
        },
        get context() {
          return M.context;
        },
        get distanceModel() {
          return M.distanceModel;
        },
        set distanceModel(G) {
          M.distanceModel = G;
        },
        get inputs() {
          return [j];
        },
        get maxDistance() {
          return M.maxDistance;
        },
        set maxDistance(G) {
          if (G < 0) throw new RangeError();
          M.maxDistance = G;
        },
        get numberOfInputs() {
          return M.numberOfInputs;
        },
        get numberOfOutputs() {
          return M.numberOfOutputs;
        },
        get orientationX() {
          return F.gain;
        },
        get orientationY() {
          return A.gain;
        },
        get orientationZ() {
          return O.gain;
        },
        get panningModel() {
          return M.panningModel;
        },
        set panningModel(G) {
          M.panningModel = G;
        },
        get positionX() {
          return b.gain;
        },
        get positionY() {
          return P.gain;
        },
        get positionZ() {
          return k.gain;
        },
        get refDistance() {
          return M.refDistance;
        },
        set refDistance(G) {
          if (G < 0) throw new RangeError();
          M.refDistance = G;
        },
        get rolloffFactor() {
          return M.rolloffFactor;
        },
        set rolloffFactor(G) {
          if (G < 0) throw new RangeError();
          M.rolloffFactor = G;
        },
        addEventListener(...G) {
          return j.addEventListener(G[0], G[1], G[2]);
        },
        dispatchEvent(...G) {
          return j.dispatchEvent(G[0]);
        },
        removeEventListener(...G) {
          return j.removeEventListener(G[0], G[1], G[2]);
        }
      };
      h !== Y.coneInnerAngle && (Y.coneInnerAngle = h),
        f !== Y.coneOuterAngle && (Y.coneOuterAngle = f),
        m !== Y.coneOuterGain && (Y.coneOuterGain = m),
        p !== Y.distanceModel && (Y.distanceModel = p),
        d !== Y.maxDistance && (Y.maxDistance = d),
        _ !== Y.orientationX.value && (Y.orientationX.value = _),
        y !== Y.orientationY.value && (Y.orientationY.value = y),
        S !== Y.orientationZ.value && (Y.orientationZ.value = S),
        C !== Y.panningModel && (Y.panningModel = C),
        D !== Y.positionX.value && (Y.positionX.value = D),
        x !== Y.positionY.value && (Y.positionY.value = x),
        w !== Y.positionZ.value && (Y.positionZ.value = w),
        T !== Y.refDistance && (Y.refDistance = T),
        v !== Y.rolloffFactor && (Y.rolloffFactor = v),
        (J[0] !== 1 || J[1] !== 0 || J[2] !== 0) && M.setOrientation(...J),
        (St[0] !== 0 || St[1] !== 0 || St[2] !== 0) && M.setPosition(...St);
      let st = () => {
          j.connect(M),
            r(j, R, 0, 0),
            R.connect(F).connect(N, 0, 0),
            R.connect(A).connect(N, 0, 1),
            R.connect(O).connect(N, 0, 2),
            R.connect(b).connect(N, 0, 3),
            R.connect(P).connect(N, 0, 4),
            R.connect(k).connect(N, 0, 5),
            N.connect(L).connect(l.destination);
        },
        _t = () => {
          j.disconnect(M),
            i(j, R, 0, 0),
            R.disconnect(F),
            F.disconnect(N),
            R.disconnect(A),
            A.disconnect(N),
            R.disconnect(O),
            O.disconnect(N),
            R.disconnect(b),
            b.disconnect(N),
            R.disconnect(P),
            P.disconnect(N),
            R.disconnect(k),
            k.disconnect(N),
            N.disconnect(L),
            L.disconnect(l.destination);
        };
      return u(re(Y, M), st, _t);
    };
  var cc =
    (r) =>
    (t, { disableNormalization: e, imag: o, real: s }) => {
      let n = o instanceof Float32Array ? o : new Float32Array(o),
        a = s instanceof Float32Array ? s : new Float32Array(s),
        i = t.createPeriodicWave(a, n, { disableNormalization: e });
      if (Array.from(o).length < 2) throw r();
      return i;
    };
  var Or = (r, t, e, o) => r.createScriptProcessor(t, e, o);
  var uc = (r, t) => (e, o) => {
    let s = o.channelCountMode;
    if (s === "clamped-max") throw t();
    if (e.createStereoPanner === void 0) return r(e, o);
    let n = e.createStereoPanner();
    return (
      $(n, o),
      ot(n, o, "pan"),
      Object.defineProperty(n, "channelCountMode", {
        get: () => s,
        set: (a) => {
          if (a !== s) throw t();
        }
      }),
      n
    );
  };
  var lc = (r, t, e, o, s, n) => {
    let i = new Float32Array([1, 1]),
      c = Math.PI / 2,
      u = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete"
      },
      l = { ...u, oversample: "none" },
      h = (p, d, _, y) => {
        let S = new Float32Array(16385),
          C = new Float32Array(16385);
        for (let q = 0; q < 16385; q += 1) {
          let M = (q / 16384) * c;
          (S[q] = Math.cos(M)), (C[q] = Math.sin(M));
        }
        let D = e(p, { ...u, gain: 0 }),
          x = o(p, { ...l, curve: S }),
          w = o(p, { ...l, curve: i }),
          T = e(p, { ...u, gain: 0 }),
          v = o(p, { ...l, curve: C });
        return {
          connectGraph() {
            d.connect(D),
              d.connect(w.inputs === void 0 ? w : w.inputs[0]),
              d.connect(T),
              w.connect(_),
              _.connect(x.inputs === void 0 ? x : x.inputs[0]),
              _.connect(v.inputs === void 0 ? v : v.inputs[0]),
              x.connect(D.gain),
              v.connect(T.gain),
              D.connect(y, 0, 0),
              T.connect(y, 0, 1);
          },
          disconnectGraph() {
            d.disconnect(D),
              d.disconnect(w.inputs === void 0 ? w : w.inputs[0]),
              d.disconnect(T),
              w.disconnect(_),
              _.disconnect(x.inputs === void 0 ? x : x.inputs[0]),
              _.disconnect(v.inputs === void 0 ? v : v.inputs[0]),
              x.disconnect(D.gain),
              v.disconnect(T.gain),
              D.disconnect(y, 0, 0),
              T.disconnect(y, 0, 1);
          }
        };
      },
      f = (p, d, _, y) => {
        let S = new Float32Array(16385),
          C = new Float32Array(16385),
          D = new Float32Array(16385),
          x = new Float32Array(16385),
          w = Math.floor(16385 / 2);
        for (let b = 0; b < 16385; b += 1)
          if (b > w) {
            let P = ((b - w) / (16384 - w)) * c;
            (S[b] = Math.cos(P)), (C[b] = Math.sin(P)), (D[b] = 0), (x[b] = 1);
          } else {
            let P = (b / (16384 - w)) * c;
            (S[b] = 1), (C[b] = 0), (D[b] = Math.cos(P)), (x[b] = Math.sin(P));
          }
        let T = t(p, {
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: 2
          }),
          v = e(p, { ...u, gain: 0 }),
          q = o(p, { ...l, curve: S }),
          M = e(p, { ...u, gain: 0 }),
          E = o(p, { ...l, curve: C }),
          N = o(p, { ...l, curve: i }),
          j = e(p, { ...u, gain: 0 }),
          F = o(p, { ...l, curve: D }),
          A = e(p, { ...u, gain: 0 }),
          O = o(p, { ...l, curve: x });
        return {
          connectGraph() {
            d.connect(T),
              d.connect(N.inputs === void 0 ? N : N.inputs[0]),
              T.connect(v, 0),
              T.connect(M, 0),
              T.connect(j, 1),
              T.connect(A, 1),
              N.connect(_),
              _.connect(q.inputs === void 0 ? q : q.inputs[0]),
              _.connect(E.inputs === void 0 ? E : E.inputs[0]),
              _.connect(F.inputs === void 0 ? F : F.inputs[0]),
              _.connect(O.inputs === void 0 ? O : O.inputs[0]),
              q.connect(v.gain),
              E.connect(M.gain),
              F.connect(j.gain),
              O.connect(A.gain),
              v.connect(y, 0, 0),
              j.connect(y, 0, 0),
              M.connect(y, 0, 1),
              A.connect(y, 0, 1);
          },
          disconnectGraph() {
            d.disconnect(T),
              d.disconnect(N.inputs === void 0 ? N : N.inputs[0]),
              T.disconnect(v, 0),
              T.disconnect(M, 0),
              T.disconnect(j, 1),
              T.disconnect(A, 1),
              N.disconnect(_),
              _.disconnect(q.inputs === void 0 ? q : q.inputs[0]),
              _.disconnect(E.inputs === void 0 ? E : E.inputs[0]),
              _.disconnect(F.inputs === void 0 ? F : F.inputs[0]),
              _.disconnect(O.inputs === void 0 ? O : O.inputs[0]),
              q.disconnect(v.gain),
              E.disconnect(M.gain),
              F.disconnect(j.gain),
              O.disconnect(A.gain),
              v.disconnect(y, 0, 0),
              j.disconnect(y, 0, 0),
              M.disconnect(y, 0, 1),
              A.disconnect(y, 0, 1);
          }
        };
      },
      m = (p, d, _, y, S) => {
        if (d === 1) return h(p, _, y, S);
        if (d === 2) return f(p, _, y, S);
        throw s();
      };
    return (p, { channelCount: d, channelCountMode: _, pan: y, ...S }) => {
      if (_ === "max") throw s();
      let C = r(p, {
          ...S,
          channelCount: 1,
          channelCountMode: _,
          numberOfInputs: 2
        }),
        D = e(p, { ...S, channelCount: d, channelCountMode: _, gain: 1 }),
        x = e(p, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: y
        }),
        { connectGraph: w, disconnectGraph: T } = m(p, d, D, x, C);
      Object.defineProperty(x.gain, "defaultValue", { get: () => 0 }),
        Object.defineProperty(x.gain, "maxValue", { get: () => 1 }),
        Object.defineProperty(x.gain, "minValue", { get: () => -1 });
      let v = {
          get bufferSize() {},
          get channelCount() {
            return D.channelCount;
          },
          set channelCount(N) {
            D.channelCount !== N &&
              (q && T(),
              ({ connectGraph: w, disconnectGraph: T } = m(p, N, D, x, C)),
              q && w()),
              (D.channelCount = N);
          },
          get channelCountMode() {
            return D.channelCountMode;
          },
          set channelCountMode(N) {
            if (N === "clamped-max" || N === "max") throw s();
            D.channelCountMode = N;
          },
          get channelInterpretation() {
            return D.channelInterpretation;
          },
          set channelInterpretation(N) {
            D.channelInterpretation = N;
          },
          get context() {
            return D.context;
          },
          get inputs() {
            return [D];
          },
          get numberOfInputs() {
            return D.numberOfInputs;
          },
          get numberOfOutputs() {
            return D.numberOfOutputs;
          },
          get pan() {
            return x.gain;
          },
          addEventListener(...N) {
            return D.addEventListener(N[0], N[1], N[2]);
          },
          dispatchEvent(...N) {
            return D.dispatchEvent(N[0]);
          },
          removeEventListener(...N) {
            return D.removeEventListener(N[0], N[1], N[2]);
          }
        },
        q = !1,
        M = () => {
          w(), (q = !0);
        },
        E = () => {
          T(), (q = !1);
        };
      return n(re(v, C), M, E);
    };
  };
  var hc = (r, t, e, o, s, n, a) => (i, c) => {
    let u = i.createWaveShaper();
    if (
      n !== null &&
      n.name === "webkitAudioContext" &&
      i.createGain().gain.automationRate === void 0
    )
      return e(i, c);
    $(u, c);
    let l =
      c.curve === null || c.curve instanceof Float32Array
        ? c.curve
        : new Float32Array(c.curve);
    if (l !== null && l.length < 2) throw t();
    et(u, { curve: l }, "curve"), et(u, c, "oversample");
    let h = null,
      f = !1;
    return (
      a(
        u,
        "curve",
        (d) => () => d.call(u),
        (d) => (_) => (
          d.call(u, _),
          f &&
            (o(_) && h === null
              ? (h = r(i, u))
              : !o(_) && h !== null && (h(), (h = null))),
          _
        )
      ),
      s(
        u,
        () => {
          (f = !0), o(u.curve) && (h = r(i, u));
        },
        () => {
          (f = !1), h !== null && (h(), (h = null));
        }
      )
    );
  };
  var pc =
    (r, t, e, o, s) =>
    (n, { curve: a, oversample: i, ...c }) => {
      let u = n.createWaveShaper(),
        l = n.createWaveShaper();
      $(u, c), $(l, c);
      let h = e(n, { ...c, gain: 1 }),
        f = e(n, { ...c, gain: -1 }),
        m = e(n, { ...c, gain: 1 }),
        p = e(n, { ...c, gain: -1 }),
        d = null,
        _ = !1,
        y = null,
        S = {
          get bufferSize() {},
          get channelCount() {
            return u.channelCount;
          },
          set channelCount(x) {
            (h.channelCount = x),
              (f.channelCount = x),
              (u.channelCount = x),
              (m.channelCount = x),
              (l.channelCount = x),
              (p.channelCount = x);
          },
          get channelCountMode() {
            return u.channelCountMode;
          },
          set channelCountMode(x) {
            (h.channelCountMode = x),
              (f.channelCountMode = x),
              (u.channelCountMode = x),
              (m.channelCountMode = x),
              (l.channelCountMode = x),
              (p.channelCountMode = x);
          },
          get channelInterpretation() {
            return u.channelInterpretation;
          },
          set channelInterpretation(x) {
            (h.channelInterpretation = x),
              (f.channelInterpretation = x),
              (u.channelInterpretation = x),
              (m.channelInterpretation = x),
              (l.channelInterpretation = x),
              (p.channelInterpretation = x);
          },
          get context() {
            return u.context;
          },
          get curve() {
            return y;
          },
          set curve(x) {
            if (x !== null && x.length < 2) throw t();
            if (x === null) (u.curve = x), (l.curve = x);
            else {
              let w = x.length,
                T = new Float32Array(w + 2 - (w % 2)),
                v = new Float32Array(w + 2 - (w % 2));
              (T[0] = x[0]), (v[0] = -x[w - 1]);
              let q = Math.ceil((w + 1) / 2),
                M = (w + 1) / 2 - 1;
              for (let E = 1; E < q; E += 1) {
                let N = (E / q) * M,
                  j = Math.floor(N),
                  F = Math.ceil(N);
                (T[E] =
                  j === F ? x[j] : (1 - (N - j)) * x[j] + (1 - (F - N)) * x[F]),
                  (v[E] =
                    j === F
                      ? -x[w - 1 - j]
                      : -((1 - (N - j)) * x[w - 1 - j]) -
                        (1 - (F - N)) * x[w - 1 - F]);
              }
              (T[q] = w % 2 === 1 ? x[q - 1] : (x[q - 2] + x[q - 1]) / 2),
                (u.curve = T),
                (l.curve = v);
            }
            (y = x),
              _ &&
                (o(y) && d === null
                  ? (d = r(n, h))
                  : d !== null && (d(), (d = null)));
          },
          get inputs() {
            return [h];
          },
          get numberOfInputs() {
            return u.numberOfInputs;
          },
          get numberOfOutputs() {
            return u.numberOfOutputs;
          },
          get oversample() {
            return u.oversample;
          },
          set oversample(x) {
            (u.oversample = x), (l.oversample = x);
          },
          addEventListener(...x) {
            return h.addEventListener(x[0], x[1], x[2]);
          },
          dispatchEvent(...x) {
            return h.dispatchEvent(x[0]);
          },
          removeEventListener(...x) {
            return h.removeEventListener(x[0], x[1], x[2]);
          }
        };
      a !== null &&
        (S.curve = a instanceof Float32Array ? a : new Float32Array(a)),
        i !== S.oversample && (S.oversample = i);
      let C = () => {
          h.connect(u).connect(m),
            h.connect(f).connect(l).connect(p).connect(m),
            (_ = !0),
            o(y) && (d = r(n, h));
        },
        D = () => {
          h.disconnect(u),
            u.disconnect(m),
            h.disconnect(f),
            f.disconnect(l),
            l.disconnect(p),
            p.disconnect(m),
            (_ = !1),
            d !== null && (d(), (d = null));
        };
      return s(re(S, m), C, D);
    };
  var Ft = () => new DOMException("", "NotSupportedError");
  var $l = { numberOfChannels: 1 },
    mc = (r, t, e, o, s) =>
      class extends r {
        constructor(a, i, c) {
          let u;
          if (typeof a == "number" && i !== void 0 && c !== void 0)
            u = { length: i, numberOfChannels: a, sampleRate: c };
          else if (typeof a == "object") u = a;
          else throw new Error("The given parameters are not valid.");
          let {
              length: l,
              numberOfChannels: h,
              sampleRate: f
            } = { ...$l, ...u },
            m = o(h, l, f);
          t(he, () => he(m)) ||
            m.addEventListener(
              "statechange",
              (() => {
                let p = 0,
                  d = (_) => {
                    this._state === "running" &&
                      (p > 0
                        ? (m.removeEventListener("statechange", d),
                          _.stopImmediatePropagation(),
                          this._waitForThePromiseToSettle(_))
                        : (p += 1));
                  };
                return d;
              })()
            ),
            super(m, h),
            (this._length = l),
            (this._nativeOfflineAudioContext = m),
            (this._state = null);
        }
        get length() {
          return this._nativeOfflineAudioContext.length === void 0
            ? this._length
            : this._nativeOfflineAudioContext.length;
        }
        get state() {
          return this._state === null
            ? this._nativeOfflineAudioContext.state
            : this._state;
        }
        startRendering() {
          return this._state === "running"
            ? Promise.reject(e())
            : ((this._state = "running"),
              s(this.destination, this._nativeOfflineAudioContext).finally(
                () => {
                  (this._state = null), Ge(this);
                }
              ));
        }
        _waitForThePromiseToSettle(a) {
          this._state === null
            ? this._nativeOfflineAudioContext.dispatchEvent(a)
            : setTimeout(() => this._waitForThePromiseToSettle(a));
        }
      };
  var Kl = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      detune: 0,
      frequency: 440,
      periodicWave: void 0,
      type: "sine"
    },
    fc = (r, t, e, o, s, n, a) =>
      class extends r {
        constructor(c, u) {
          let l = s(c),
            h = { ...Kl, ...u },
            f = e(l, h),
            m = n(l),
            p = m ? o() : null,
            d = c.sampleRate / 2;
          super(c, !1, f, p),
            (this._detune = t(this, m, f.detune, 153600, -153600)),
            (this._frequency = t(this, m, f.frequency, d, -d)),
            (this._nativeOscillatorNode = f),
            (this._onended = null),
            (this._oscillatorNodeRenderer = p),
            this._oscillatorNodeRenderer !== null &&
              h.periodicWave !== void 0 &&
              (this._oscillatorNodeRenderer.periodicWave = h.periodicWave);
        }
        get detune() {
          return this._detune;
        }
        get frequency() {
          return this._frequency;
        }
        get onended() {
          return this._onended;
        }
        set onended(c) {
          let u = typeof c == "function" ? a(this, c) : null;
          this._nativeOscillatorNode.onended = u;
          let l = this._nativeOscillatorNode.onended;
          this._onended = l !== null && l === u ? c : l;
        }
        get type() {
          return this._nativeOscillatorNode.type;
        }
        set type(c) {
          (this._nativeOscillatorNode.type = c),
            this._oscillatorNodeRenderer !== null &&
              (this._oscillatorNodeRenderer.periodicWave = null);
        }
        setPeriodicWave(c) {
          this._nativeOscillatorNode.setPeriodicWave(c),
            this._oscillatorNodeRenderer !== null &&
              (this._oscillatorNodeRenderer.periodicWave = c);
        }
        start(c = 0) {
          if (
            (this._nativeOscillatorNode.start(c),
            this._oscillatorNodeRenderer !== null &&
              (this._oscillatorNodeRenderer.start = c),
            this.context.state !== "closed")
          ) {
            ue(this);
            let u = () => {
              this._nativeOscillatorNode.removeEventListener("ended", u),
                Pt(this) && Te(this);
            };
            this._nativeOscillatorNode.addEventListener("ended", u);
          }
        }
        stop(c = 0) {
          this._nativeOscillatorNode.stop(c),
            this._oscillatorNodeRenderer !== null &&
              (this._oscillatorNodeRenderer.stop = c);
        }
      };
  var dc = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = null,
      i = null,
      c = null,
      u = async (l, h) => {
        let f = e(l),
          m = tt(f, h);
        if (!m) {
          let p = {
            channelCount: f.channelCount,
            channelCountMode: f.channelCountMode,
            channelInterpretation: f.channelInterpretation,
            detune: f.detune.value,
            frequency: f.frequency.value,
            periodicWave: a === null ? void 0 : a,
            type: f.type
          };
          (f = t(h, p)), i !== null && f.start(i), c !== null && f.stop(c);
        }
        return (
          n.set(h, f),
          m
            ? (await r(h, l.detune, f.detune),
              await r(h, l.frequency, f.frequency))
            : (await o(h, l.detune, f.detune),
              await o(h, l.frequency, f.frequency)),
          await s(l, h, f),
          f
        );
      };
    return {
      set periodicWave(l) {
        a = l;
      },
      set start(l) {
        i = l;
      },
      set stop(l) {
        c = l;
      },
      render(l, h) {
        let f = n.get(h);
        return f !== void 0 ? Promise.resolve(f) : u(l, h);
      }
    };
  };
  var Jl = {
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers",
      coneInnerAngle: 360,
      coneOuterAngle: 360,
      coneOuterGain: 0,
      distanceModel: "inverse",
      maxDistance: 1e4,
      orientationX: 1,
      orientationY: 0,
      orientationZ: 0,
      panningModel: "equalpower",
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      refDistance: 1,
      rolloffFactor: 1
    },
    gc = (r, t, e, o, s, n, a) =>
      class extends r {
        constructor(c, u) {
          let l = s(c),
            h = { ...Jl, ...u },
            f = e(l, h),
            m = n(l),
            p = m ? o() : null;
          super(c, !1, f, p),
            (this._nativePannerNode = f),
            (this._orientationX = t(this, m, f.orientationX, ft, xt)),
            (this._orientationY = t(this, m, f.orientationY, ft, xt)),
            (this._orientationZ = t(this, m, f.orientationZ, ft, xt)),
            (this._positionX = t(this, m, f.positionX, ft, xt)),
            (this._positionY = t(this, m, f.positionY, ft, xt)),
            (this._positionZ = t(this, m, f.positionZ, ft, xt)),
            a(this, 1);
        }
        get coneInnerAngle() {
          return this._nativePannerNode.coneInnerAngle;
        }
        set coneInnerAngle(c) {
          this._nativePannerNode.coneInnerAngle = c;
        }
        get coneOuterAngle() {
          return this._nativePannerNode.coneOuterAngle;
        }
        set coneOuterAngle(c) {
          this._nativePannerNode.coneOuterAngle = c;
        }
        get coneOuterGain() {
          return this._nativePannerNode.coneOuterGain;
        }
        set coneOuterGain(c) {
          this._nativePannerNode.coneOuterGain = c;
        }
        get distanceModel() {
          return this._nativePannerNode.distanceModel;
        }
        set distanceModel(c) {
          this._nativePannerNode.distanceModel = c;
        }
        get maxDistance() {
          return this._nativePannerNode.maxDistance;
        }
        set maxDistance(c) {
          this._nativePannerNode.maxDistance = c;
        }
        get orientationX() {
          return this._orientationX;
        }
        get orientationY() {
          return this._orientationY;
        }
        get orientationZ() {
          return this._orientationZ;
        }
        get panningModel() {
          return this._nativePannerNode.panningModel;
        }
        set panningModel(c) {
          this._nativePannerNode.panningModel = c;
        }
        get positionX() {
          return this._positionX;
        }
        get positionY() {
          return this._positionY;
        }
        get positionZ() {
          return this._positionZ;
        }
        get refDistance() {
          return this._nativePannerNode.refDistance;
        }
        set refDistance(c) {
          this._nativePannerNode.refDistance = c;
        }
        get rolloffFactor() {
          return this._nativePannerNode.rolloffFactor;
        }
        set rolloffFactor(c) {
          this._nativePannerNode.rolloffFactor = c;
        }
      };
  var _c = (r, t, e, o, s, n, a, i, c, u) => () => {
    let l = new WeakMap(),
      h = null,
      f = async (m, p) => {
        let d = null,
          _ = n(m),
          y = {
            channelCount: _.channelCount,
            channelCountMode: _.channelCountMode,
            channelInterpretation: _.channelInterpretation
          },
          S = {
            ...y,
            coneInnerAngle: _.coneInnerAngle,
            coneOuterAngle: _.coneOuterAngle,
            coneOuterGain: _.coneOuterGain,
            distanceModel: _.distanceModel,
            maxDistance: _.maxDistance,
            panningModel: _.panningModel,
            refDistance: _.refDistance,
            rolloffFactor: _.rolloffFactor
          },
          C = tt(_, p);
        if ("bufferSize" in _) d = o(p, { ...y, gain: 1 });
        else if (!C) {
          let D = {
            ...S,
            orientationX: _.orientationX.value,
            orientationY: _.orientationY.value,
            orientationZ: _.orientationZ.value,
            positionX: _.positionX.value,
            positionY: _.positionY.value,
            positionZ: _.positionZ.value
          };
          _ = s(p, D);
        }
        if ((l.set(p, d === null ? _ : d), d !== null)) {
          if (h === null) {
            if (a === null)
              throw new Error(
                "Missing the native OfflineAudioContext constructor."
              );
            let E = new a(6, m.context.length, p.sampleRate),
              N = t(E, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: 6
              });
            N.connect(E.destination),
              (h = (async () => {
                let j = await Promise.all(
                  [
                    m.orientationX,
                    m.orientationY,
                    m.orientationZ,
                    m.positionX,
                    m.positionY,
                    m.positionZ
                  ].map(async (F, A) => {
                    let O = e(E, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "discrete",
                      offset: A === 0 ? 1 : 0
                    });
                    return await i(E, F, O.offset), O;
                  })
                );
                for (let F = 0; F < 6; F += 1)
                  j[F].connect(N, 0, F), j[F].start(0);
                return u(E);
              })());
          }
          let D = await h,
            x = o(p, { ...y, gain: 1 });
          await c(m, p, x);
          let w = [];
          for (let E = 0; E < D.numberOfChannels; E += 1)
            w.push(D.getChannelData(E));
          let T = [w[0][0], w[1][0], w[2][0]],
            v = [w[3][0], w[4][0], w[5][0]],
            q = o(p, { ...y, gain: 1 }),
            M = s(p, {
              ...S,
              orientationX: T[0],
              orientationY: T[1],
              orientationZ: T[2],
              positionX: v[0],
              positionY: v[1],
              positionZ: v[2]
            });
          x.connect(q).connect(M.inputs[0]), M.connect(d);
          for (let E = 128; E < D.length; E += 128) {
            let N = [w[0][E], w[1][E], w[2][E]],
              j = [w[3][E], w[4][E], w[5][E]];
            if (N.some((F, A) => F !== T[A]) || j.some((F, A) => F !== v[A])) {
              (T = N), (v = j);
              let F = E / p.sampleRate;
              q.gain.setValueAtTime(0, F),
                (q = o(p, { ...y, gain: 0 })),
                (M = s(p, {
                  ...S,
                  orientationX: T[0],
                  orientationY: T[1],
                  orientationZ: T[2],
                  positionX: v[0],
                  positionY: v[1],
                  positionZ: v[2]
                })),
                q.gain.setValueAtTime(1, F),
                x.connect(q).connect(M.inputs[0]),
                M.connect(d);
            }
          }
          return d;
        }
        return (
          C
            ? (await r(p, m.orientationX, _.orientationX),
              await r(p, m.orientationY, _.orientationY),
              await r(p, m.orientationZ, _.orientationZ),
              await r(p, m.positionX, _.positionX),
              await r(p, m.positionY, _.positionY),
              await r(p, m.positionZ, _.positionZ))
            : (await i(p, m.orientationX, _.orientationX),
              await i(p, m.orientationY, _.orientationY),
              await i(p, m.orientationZ, _.orientationZ),
              await i(p, m.positionX, _.positionX),
              await i(p, m.positionY, _.positionY),
              await i(p, m.positionZ, _.positionZ)),
          ee(_) ? await c(m, p, _.inputs[0]) : await c(m, p, _),
          _
        );
      };
    return {
      render(m, p) {
        let d = l.get(p);
        return d !== void 0 ? Promise.resolve(d) : f(m, p);
      }
    };
  };
  var th = { disableNormalization: !1 },
    xc = (r, t, e, o) =>
      class yc {
        constructor(n, a) {
          let i = t(n),
            c = o({ ...th, ...a }),
            u = r(i, c);
          return e.add(u), u;
        }
        static [Symbol.hasInstance](n) {
          return (
            (n !== null &&
              typeof n == "object" &&
              Object.getPrototypeOf(n) === yc.prototype) ||
            e.has(n)
          );
        }
      };
  var vc = (r, t) => (e, o, s) => (r(o).replay(s), t(o, e, s));
  var wc = (r, t, e) => async (o, s, n) => {
    let a = r(o);
    await Promise.all(
      a.activeInputs
        .map((i, c) =>
          Array.from(i).map(async ([u, l]) => {
            let f = await t(u).render(u, s),
              m = o.context.destination;
            !e(u) && (o !== m || !e(o)) && f.connect(n, l, c);
          })
        )
        .reduce((i, c) => [...i, ...c], [])
    );
  };
  var Tc = (r, t, e) => async (o, s, n) => {
    let a = t(o);
    await Promise.all(
      Array.from(a.activeInputs).map(async ([i, c]) => {
        let l = await r(i).render(i, s);
        e(i) || l.connect(n, c);
      })
    );
  };
  var bc = (r, t, e, o) => (s) =>
    r(he, () => he(s))
      ? Promise.resolve(r(o, o)).then((n) => {
          if (!n) {
            let a = e(s, 512, 0, 1);
            (s.oncomplete = () => {
              (a.onaudioprocess = null), a.disconnect();
            }),
              (a.onaudioprocess = () => s.currentTime),
              a.connect(s.destination);
          }
          return s.startRendering();
        })
      : new Promise((n) => {
          let a = t(s, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
          });
          (s.oncomplete = (i) => {
            a.disconnect(), n(i.renderedBuffer);
          }),
            a.connect(s.destination),
            s.startRendering();
        });
  var Sc = (r) => (t, e) => {
    r.set(t, e);
  };
  var Ac = (r) => (t, e) => r.set(t, e);
  var Cc = (r, t, e, o, s, n, a, i) => (c, u) =>
    e(c)
      .render(c, u)
      .then(() => Promise.all(Array.from(o(u)).map((l) => e(l).render(l, u))))
      .then(() => s(u))
      .then(
        (l) => (
          typeof l.copyFromChannel != "function"
            ? (a(l), _r(l))
            : t(n, () => n(l)) || i(l),
          r.add(l),
          l
        )
      );
  var eh = {
      channelCount: 2,
      channelCountMode: "explicit",
      channelInterpretation: "speakers",
      pan: 0
    },
    Nc = (r, t, e, o, s, n) =>
      class extends r {
        constructor(i, c) {
          let u = s(i),
            l = { ...eh, ...c },
            h = e(u, l),
            f = n(u),
            m = f ? o() : null;
          super(i, !1, h, m), (this._pan = t(this, f, h.pan));
        }
        get pan() {
          return this._pan;
        }
      };
  var Oc = (r, t, e, o, s) => () => {
    let n = new WeakMap(),
      a = async (i, c) => {
        let u = e(i),
          l = tt(u, c);
        if (!l) {
          let h = {
            channelCount: u.channelCount,
            channelCountMode: u.channelCountMode,
            channelInterpretation: u.channelInterpretation,
            pan: u.pan.value
          };
          u = t(c, h);
        }
        return (
          n.set(c, u),
          l ? await r(c, i.pan, u.pan) : await o(c, i.pan, u.pan),
          ee(u) ? await s(i, c, u.inputs[0]) : await s(i, c, u),
          u
        );
      };
    return {
      render(i, c) {
        let u = n.get(c);
        return u !== void 0 ? Promise.resolve(u) : a(i, c);
      }
    };
  };
  var kc = (r) => () => {
    if (r === null) return !1;
    try {
      new r({ length: 1, sampleRate: 44100 });
    } catch {
      return !1;
    }
    return !0;
  };
  var Dc = (r, t) => async () => {
    if (r === null) return !0;
    if (t === null) return !1;
    let e = new Blob(
        [
          'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
        ],
        { type: "application/javascript; charset=utf-8" }
      ),
      o = new t(1, 128, 44100),
      s = URL.createObjectURL(e),
      n = !1,
      a = !1;
    try {
      await o.audioWorklet.addModule(s);
      let i = new r(o, "a", { numberOfOutputs: 0 }),
        c = o.createOscillator();
      (i.port.onmessage = () => (n = !0)),
        (i.onprocessorerror = () => (a = !0)),
        c.connect(i),
        c.start(0),
        await o.startRendering(),
        await new Promise((u) => setTimeout(u));
    } catch {
    } finally {
      URL.revokeObjectURL(s);
    }
    return n && !a;
  };
  var Ec = (r, t) => () => {
    if (t === null) return Promise.resolve(!1);
    let e = new t(1, 1, 44100),
      o = r(e, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
    return new Promise((s) => {
      (e.oncomplete = () => {
        o.disconnect(), s(e.currentTime !== 0);
      }),
        e.startRendering();
    });
  };
  var Bs = () => new DOMException("", "UnknownError");
  var rh = {
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
      curve: null,
      oversample: "none"
    },
    Mc = (r, t, e, o, s, n, a) =>
      class extends r {
        constructor(c, u) {
          let l = s(c),
            h = { ...rh, ...u },
            f = e(l, h),
            p = n(l) ? o() : null;
          super(c, !0, f, p),
            (this._isCurveNullified = !1),
            (this._nativeWaveShaperNode = f),
            a(this, 1);
        }
        get curve() {
          return this._isCurveNullified
            ? null
            : this._nativeWaveShaperNode.curve;
        }
        set curve(c) {
          if (c === null)
            (this._isCurveNullified = !0),
              (this._nativeWaveShaperNode.curve = new Float32Array([0, 0]));
          else {
            if (c.length < 2) throw t();
            (this._isCurveNullified = !1),
              (this._nativeWaveShaperNode.curve = c);
          }
        }
        get oversample() {
          return this._nativeWaveShaperNode.oversample;
        }
        set oversample(c) {
          this._nativeWaveShaperNode.oversample = c;
        }
      };
  var Fc = (r, t, e) => () => {
    let o = new WeakMap(),
      s = async (n, a) => {
        let i = t(n);
        if (!tt(i, a)) {
          let u = {
            channelCount: i.channelCount,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            curve: i.curve,
            oversample: i.oversample
          };
          i = r(a, u);
        }
        return (
          o.set(a, i), ee(i) ? await e(n, a, i.inputs[0]) : await e(n, a, i), i
        );
      };
    return {
      render(n, a) {
        let i = o.get(a);
        return i !== void 0 ? Promise.resolve(i) : s(n, a);
      }
    };
  };
  var Rc = () => (typeof window > "u" ? null : window);
  var Ic = (r, t) => (e) => {
    (e.copyFromChannel = (o, s, n = 0) => {
      let a = r(n),
        i = r(s);
      if (i >= e.numberOfChannels) throw t();
      let c = e.length,
        u = e.getChannelData(i),
        l = o.length;
      for (let h = a < 0 ? -a : 0; h + a < c && h < l; h += 1) o[h] = u[h + a];
    }),
      (e.copyToChannel = (o, s, n = 0) => {
        let a = r(n),
          i = r(s);
        if (i >= e.numberOfChannels) throw t();
        let c = e.length,
          u = e.getChannelData(i),
          l = o.length;
        for (let h = a < 0 ? -a : 0; h + a < c && h < l; h += 1)
          u[h + a] = o[h];
      });
  };
  var qc = (r) => (t) => {
    (t.copyFromChannel = (
      (e) =>
      (o, s, n = 0) => {
        let a = r(n),
          i = r(s);
        if (a < t.length) return e.call(t, o, i, a);
      }
    )(t.copyFromChannel)),
      (t.copyToChannel = (
        (e) =>
        (o, s, n = 0) => {
          let a = r(n),
            i = r(s);
          if (a < t.length) return e.call(t, o, i, a);
        }
      )(t.copyToChannel));
  };
  var Pc = (r) => (t, e) => {
    let o = e.createBuffer(1, 1, 44100);
    t.buffer === null && (t.buffer = o),
      r(
        t,
        "buffer",
        (s) => () => {
          let n = s.call(t);
          return n === o ? null : n;
        },
        (s) => (n) => s.call(t, n === null ? o : n)
      );
  };
  var Vc = (r, t) => (e, o) => {
    (o.channelCount = 1),
      (o.channelCountMode = "explicit"),
      Object.defineProperty(o, "channelCount", {
        get: () => 1,
        set: () => {
          throw r();
        }
      }),
      Object.defineProperty(o, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw r();
        }
      });
    let s = e.createBufferSource();
    t(
      o,
      () => {
        let i = o.numberOfInputs;
        for (let c = 0; c < i; c += 1) s.connect(o, 0, c);
      },
      () => s.disconnect(o)
    );
  };
  var Gs = (r, t, e) =>
    r.copyFromChannel === void 0
      ? r.getChannelData(e)[0]
      : (r.copyFromChannel(t, e), t[0]);
  var zs = (r) => {
    if (r === null) return !1;
    let t = r.length;
    return t % 2 !== 0
      ? r[Math.floor(t / 2)] !== 0
      : r[t / 2 - 1] + r[t / 2] !== 0;
  };
  var kr = (r, t, e, o) => {
    let s = r;
    for (; !s.hasOwnProperty(t); ) s = Object.getPrototypeOf(s);
    let { get: n, set: a } = Object.getOwnPropertyDescriptor(s, t);
    Object.defineProperty(r, t, { get: e(n), set: o(a) });
  };
  var Lc = (r) => ({
    ...r,
    outputChannelCount:
      r.outputChannelCount !== void 0
        ? r.outputChannelCount
        : r.numberOfInputs === 1 && r.numberOfOutputs === 1
        ? [r.channelCount]
        : Array.from({ length: r.numberOfOutputs }, () => 1)
  });
  var Wc = (r) => ({ ...r, channelCount: r.numberOfOutputs });
  var jc = (r) => {
    let { imag: t, real: e } = r;
    return t === void 0
      ? e === void 0
        ? { ...r, imag: [0, 0], real: [0, 0] }
        : { ...r, imag: Array.from(e, () => 0), real: e }
      : e === void 0
      ? { ...r, imag: t, real: Array.from(t, () => 0) }
      : { ...r, imag: t, real: e };
  };
  var Us = (r, t, e) => {
    try {
      r.setValueAtTime(t, e);
    } catch (o) {
      if (o.code !== 9) throw o;
      Us(r, t, e + 1e-7);
    }
  };
  var Bc = (r) => {
    let t = r.createBufferSource();
    t.start();
    try {
      t.start();
    } catch {
      return !0;
    }
    return !1;
  };
  var Gc = (r) => {
    let t = r.createBufferSource(),
      e = r.createBuffer(1, 1, 44100);
    t.buffer = e;
    try {
      t.start(0, 1);
    } catch {
      return !1;
    }
    return !0;
  };
  var zc = (r) => {
    let t = r.createBufferSource();
    t.start();
    try {
      t.stop();
    } catch {
      return !1;
    }
    return !0;
  };
  var zo = (r) => {
    let t = r.createOscillator();
    try {
      t.start(-1);
    } catch (e) {
      return e instanceof RangeError;
    }
    return !1;
  };
  var Zs = (r) => {
    let t = r.createBuffer(1, 1, 44100),
      e = r.createBufferSource();
    (e.buffer = t), e.start(), e.stop();
    try {
      return e.stop(), !0;
    } catch {
      return !1;
    }
  };
  var Uo = (r) => {
    let t = r.createOscillator();
    try {
      t.stop(-1);
    } catch (e) {
      return e instanceof RangeError;
    }
    return !1;
  };
  var Uc = (r) => {
    let { port1: t, port2: e } = new MessageChannel();
    try {
      t.postMessage(r);
    } finally {
      t.close(), e.close();
    }
  };
  var Zc = (r) => {
    r.start = (
      (t) =>
      (e = 0, o = 0, s) => {
        let n = r.buffer,
          a = n === null ? o : Math.min(n.duration, o);
        n !== null && a > n.duration - 0.5 / r.context.sampleRate
          ? t.call(r, e, 0, 0)
          : t.call(r, e, a, s);
      }
    )(r.start);
  };
  var Qs = (r, t) => {
    let e = t.createGain();
    r.connect(e);
    let o = ((s) => () => {
      s.call(r, e), r.removeEventListener("ended", o);
    })(r.disconnect);
    r.addEventListener("ended", o),
      re(r, e),
      (r.stop = ((s) => {
        let n = !1;
        return (a = 0) => {
          if (n)
            try {
              s.call(r, a);
            } catch {
              e.gain.setValueAtTime(0, a);
            }
          else s.call(r, a), (n = !0);
        };
      })(r.stop));
  };
  var or = (r, t) => (e) => {
    let o = { value: r };
    return (
      Object.defineProperties(e, { currentTarget: o, target: o }),
      typeof t == "function" ? t.call(r, e) : t.handleEvent.call(r, e)
    );
  };
  var oh = In(le),
    sh = Un(le),
    nh = ji(je),
    Xc = new WeakMap(),
    ih = oa(Xc),
    oe = Ti(new Map(), new WeakMap()),
    be = Rc(),
    Yc = Ma(oe, te),
    Xs = ra(Ct),
    Rt = wc(Ct, Xs, Me),
    ah = Yn(Yc, it, Rt),
    ct = ia(dr),
    Fe = sc(be),
    at = wa(Fe),
    Hc = new WeakMap(),
    $c = Hi(or),
    Dr = qa(be),
    Ys = _a(Dr),
    Hs = xa(be),
    Kc = ya(be),
    _o = Va(be),
    yt = pi(
      qn(Mo),
      zn(oh, sh, xr, nh, yr, Ct, ih, we, it, le, Pt, Me, vr),
      oe,
      pa(po, yr, Ct, it, er, Pt),
      te,
      Sr,
      Ft,
      Vi(xr, po, Ct, it, er, ct, Pt, at),
      zi(Hc, Ct, wt),
      $c,
      ct,
      Ys,
      Hs,
      Kc,
      at,
      _o
    ),
    ch = Xn(yt, ah, te, Yc, ct, at);
  var $s = new WeakSet(),
    Qc = Fa(be),
    Jc = Mi(new Uint32Array(1)),
    Ks = Ic(Jc, te),
    Js = qc(Jc),
    uh = Hn($s, oe, Ft, Qc, Fe, kc(Qc), Ks, Js);
  var Zo = Zn(Vt),
    tu = Tc(Xs, Be, Me),
    Se = Ni(tu),
    Er = Ia(Zo, oe, Bc, Gc, zc, zo, Zs, Uo, Zc, Pc(kr), Qs),
    Ae = vc(sa(Be), tu),
    lh = Jn(Se, Er, it, Ae, Rt),
    pe = fi(
      Pn(Fo),
      Hc,
      ho,
      di,
      Gt.createCancelAndHoldAutomationEvent,
      Gt.createCancelScheduledValuesAutomationEvent,
      Gt.createExponentialRampToValueAutomationEvent,
      Gt.createLinearRampToValueAutomationEvent,
      Gt.createSetTargetAutomationEvent,
      Gt.createSetValueAutomationEvent,
      Gt.createSetValueCurveAutomationEvent,
      Dr,
      Us
    ),
    hh = Kn(yt, lh, pe, ut, Er, ct, at, or);
  var ph = ai(yt, ci, te, ut, Pa(Vt, kr), ct, at, Rt),
    mh = wi(Se, Ws, it, Ae, Rt),
    sr = Ac(Xc),
    fh = vi(yt, pe, mh, Sr, Ws, ct, at, sr),
    Ue = Da(le, Hs),
    dh = Vc(ut, Ue),
    Ze = Ua(Dr, dh),
    gh = Si(Ze, it, Rt),
    _h = bi(yt, gh, Ze, ct, at),
    xh = Ci(Nr, it, Rt),
    yh = Ai(yt, xh, Nr, ct, at, Wc),
    vh = Xa(Zo, Er, Vt, Ue),
    Mr = Qa(Zo, oe, vh, zo, Uo),
    wh = Ei(Se, Mr, it, Ae, Rt),
    Th = Di(yt, pe, wh, Mr, ct, at, or),
    eu = Ya(Ft, kr),
    bh = Ri(eu, it, Rt),
    Sh = Fi(yt, bh, eu, ct, at, sr),
    Ah = Wi(Se, js, it, Ae, Rt),
    Ch = Li(yt, pe, Ah, js, ct, at, sr),
    ru = Ha(Ft),
    Nh = Qi(Se, ru, it, Ae, Rt),
    Oh = Zi(yt, pe, Nh, ru, Ft, ct, at, sr),
    kh = ta(Se, Vt, it, Ae, Rt),
    Dh = Ji(yt, pe, kh, Vt, ct, at),
    Eh = Ja(Sr, ut, Or, Ft),
    Qo = bc(oe, Vt, Or, Ec(Vt, Fe)),
    Mh = ha(Er, it, Fe, Rt, Qo),
    Fh = $a(Eh),
    Rh = la(yt, Fh, Mh, ct, at, sr),
    Ih = ui(pe, Ze, Mr, Or, Ft, Gs, at, kr),
    ou = new WeakMap(),
    tn = Oa(ph, Ih, $c, at, ou, or),
    su = nc(Zo, oe, zo, Zs, Uo, Qs),
    qh = dc(Se, su, it, Ae, Rt),
    Ph = fc(yt, pe, su, qh, ct, at, or),
    nu = ki(Er),
    Vh = pc(nu, ut, Vt, zs, Ue),
    Xo = hc(nu, ut, Vh, zs, Ue, Dr, kr),
    Lh = ac(xr, ut, Ze, Vt, Or, Xo, Ft, yr, Gs, Ue),
    iu = ic(Lh),
    Wh = _c(Se, Ze, Mr, Vt, iu, it, Fe, Ae, Rt, Qo),
    jh = gc(yt, pe, iu, Wh, ct, at, sr),
    Bh = cc(te),
    Gh = xc(Bh, ct, new WeakSet(), jc),
    zh = lc(Ze, Nr, Vt, Xo, Ft, Ue),
    au = uc(zh, Ft),
    Uh = Oc(Se, au, it, Ae, Rt),
    Zh = Nc(yt, pe, au, Uh, ct, at),
    Qh = Fc(Xo, it, Rt),
    Xh = Mc(yt, ut, Xo, Qh, ct, at, sr),
    cu = Ta(be),
    en = $i(be),
    uu = new WeakMap(),
    Yh = aa(uu, Fe),
    Hh = cu
      ? Gn(
          oe,
          Ft,
          Yi(be),
          en,
          Ki(Rn),
          ct,
          Yh,
          at,
          _o,
          new WeakMap(),
          new WeakMap(),
          Dc(_o, Fe),
          be
        )
      : void 0,
    $h = va(Ys, at),
    Kh = Pi($s, oe, qi, Xi, new WeakSet(), ct, $h, gr, he, Ks, Js),
    lu = yi(
      Hh,
      ch,
      uh,
      hh,
      fh,
      _h,
      yh,
      Th,
      Sh,
      Kh,
      Ch,
      Oh,
      Dh,
      Rh,
      tn,
      Ph,
      jh,
      Gh,
      Zh,
      Xh
    ),
    Jh = ba(yt, tc, ct, at),
    tp = Sa(yt, ec, ct, at),
    ep = Aa(yt, rc, ct, at),
    rp = oc(ut, at),
    op = Ca(yt, rp, ct),
    hu = ii(lu, ut, Ft, Bs, Jh, tp, ep, op, Dr);
  var rn = ca(ou),
    sp = Qn(rn),
    pu = Oi(te),
    np = Bi(rn),
    mu = Ui(te),
    fu = new WeakMap(),
    ip = ea(fu, wt),
    ap = za(pu, te, ut, Ze, Nr, Mr, Vt, Or, Ft, mu, en, ip, Ue),
    cp = Wa(ut, ap, Vt, Ft, Ue),
    up = xi(Se, pu, Er, Ze, Nr, Mr, Vt, np, mu, en, it, _o, Fe, Ae, Rt, Qo),
    lp = na(uu),
    hp = Sc(fu),
    on = cu
      ? gi(sp, yt, pe, up, cp, Ct, lp, ct, at, _o, Lc, hp, Uc, or)
      : void 0;
  var aF = Na(ut, Ft, Bs, tn, Dr);
  var du = Ii(Ft, Fe),
    gu = Cc($s, oe, Xs, rn, Qo, gr, Ks, Js),
    cF = ka(oe, ut, du, tn, gu);
  var _u = mc(lu, oe, ut, du, gu);
  var xu = ma(dr, Ys),
    yu = fa(fr, Hs),
    vu = da(ho, Kc),
    wu = ga(dr, at);
  function B(r, t) {
    if (!r) throw new Error(t);
  }
  function Nt(r, t, e = 1 / 0) {
    if (!(t <= r && r <= e))
      throw new RangeError(`Value must be within [${t}, ${e}], got: ${r}`);
  }
  function Yo(r) {
    !r.isOffline &&
      r.state !== "running" &&
      Fr(
        'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.'
      );
  }
  var Tu = console;
  function bu(...r) {
    Tu.log(...r);
  }
  function Fr(...r) {
    Tu.warn(...r);
  }
  function Tt(r) {
    return typeof r > "u";
  }
  function Z(r) {
    return !Tt(r);
  }
  function Su(r) {
    return typeof r == "function";
  }
  function It(r) {
    return typeof r == "number";
  }
  function me(r) {
    return (
      Object.prototype.toString.call(r) === "[object Object]" &&
      r.constructor === Object
    );
  }
  function Ho(r) {
    return typeof r == "boolean";
  }
  function vt(r) {
    return Array.isArray(r);
  }
  function Et(r) {
    return typeof r == "string";
  }
  function xo(r) {
    return Et(r) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(r);
  }
  function Au(r) {
    return new hu(r);
  }
  function Cu(r, t, e) {
    return new _u(r, t, e);
  }
  var Ce = typeof self == "object" ? self : null,
    Nu =
      Ce &&
      (Ce.hasOwnProperty("AudioContext") ||
        Ce.hasOwnProperty("webkitAudioContext"));
  function Ou(r, t, e) {
    return (
      B(Z(on), "This node only works in a secure context (https or localhost)"),
      new on(r, t, e)
    );
  }
  function qt(r, t, e, o) {
    var s = arguments.length,
      n =
        s < 3
          ? t
          : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, e))
          : o,
      a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      n = Reflect.decorate(r, t, e, o);
    else
      for (var i = r.length - 1; i >= 0; i--)
        (a = r[i]) && (n = (s < 3 ? a(n) : s > 3 ? a(t, e, n) : a(t, e)) || n);
    return s > 3 && n && Object.defineProperty(t, e, n), n;
  }
  function K(r, t, e, o) {
    function s(n) {
      return n instanceof e
        ? n
        : new e(function (a) {
            a(n);
          });
    }
    return new (e || (e = Promise))(function (n, a) {
      function i(l) {
        try {
          u(o.next(l));
        } catch (h) {
          a(h);
        }
      }
      function c(l) {
        try {
          u(o.throw(l));
        } catch (h) {
          a(h);
        }
      }
      function u(l) {
        l.done ? n(l.value) : s(l.value).then(i, c);
      }
      u((o = o.apply(r, t || [])).next());
    });
  }
  var $o = class {
    constructor(t, e, o) {
      (this._callback = t),
        (this._type = e),
        (this._updateInterval = o),
        this._createClock();
    }
    _createWorker() {
      let t = new Blob(
          [
            `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`
          ],
          { type: "text/javascript" }
        ),
        e = URL.createObjectURL(t),
        o = new Worker(e);
      (o.onmessage = this._callback.bind(this)), (this._worker = o);
    }
    _createTimeout() {
      this._timeout = setTimeout(() => {
        this._createTimeout(), this._callback();
      }, this._updateInterval * 1e3);
    }
    _createClock() {
      if (this._type === "worker")
        try {
          this._createWorker();
        } catch {
          (this._type = "timeout"), this._createClock();
        }
      else this._type === "timeout" && this._createTimeout();
    }
    _disposeClock() {
      this._timeout && (clearTimeout(this._timeout), (this._timeout = 0)),
        this._worker &&
          (this._worker.terminate(), (this._worker.onmessage = null));
    }
    get updateInterval() {
      return this._updateInterval;
    }
    set updateInterval(t) {
      (this._updateInterval = Math.max(t, 128 / 44100)),
        this._type === "worker" &&
          this._worker.postMessage(Math.max(t * 1e3, 1));
    }
    get type() {
      return this._type;
    }
    set type(t) {
      this._disposeClock(), (this._type = t), this._createClock();
    }
    dispose() {
      this._disposeClock();
    }
  };
  function fe(r) {
    return vu(r);
  }
  function Ne(r) {
    return yu(r);
  }
  function Rr(r) {
    return wu(r);
  }
  function Qe(r) {
    return xu(r);
  }
  function Ko(r) {
    return r instanceof AudioBuffer;
  }
  function fp(r, t) {
    return r === "value" || fe(t) || Ne(t) || Ko(t);
  }
  function de(r, ...t) {
    if (!t.length) return r;
    let e = t.shift();
    if (me(r) && me(e))
      for (let o in e)
        fp(o, e[o])
          ? (r[o] = e[o])
          : me(e[o])
          ? (r[o] || Object.assign(r, { [o]: {} }), de(r[o], e[o]))
          : Object.assign(r, { [o]: e[o] });
    return de(r, ...t);
  }
  function ku(r, t) {
    return r.length === t.length && r.every((e, o) => t[o] === e);
  }
  function g(r, t, e = [], o) {
    let s = {},
      n = Array.from(t);
    if (
      (me(n[0]) &&
        o &&
        !Reflect.has(n[0], o) &&
        (Object.keys(n[0]).some((i) => Reflect.has(r, i)) ||
          (de(s, { [o]: n[0] }), e.splice(e.indexOf(o), 1), n.shift())),
      n.length === 1 && me(n[0]))
    )
      de(s, n[0]);
    else for (let a = 0; a < e.length; a++) Z(n[a]) && (s[e[a]] = n[a]);
    return de(r, s);
  }
  function Du(r) {
    return r.constructor.getDefaults();
  }
  function zt(r, t) {
    return Tt(r) ? t : r;
  }
  function Oe(r, t) {
    return (
      t.forEach((e) => {
        Reflect.has(r, e) && delete r[e];
      }),
      r
    );
  }
  var Ot = class {
    constructor() {
      (this.debug = !1), (this._wasDisposed = !1);
    }
    static getDefaults() {
      return {};
    }
    log(...t) {
      (this.debug || (Ce && this.toString() === Ce.TONE_DEBUG_CLASS)) &&
        bu(this, ...t);
    }
    dispose() {
      return (this._wasDisposed = !0), this;
    }
    get disposed() {
      return this._wasDisposed;
    }
    toString() {
      return this.name;
    }
  };
  Ot.version = to;
  function Ir(r, t) {
    return r > t + 1e-6;
  }
  function yo(r, t) {
    return Ir(r, t) || Lt(r, t);
  }
  function Jo(r, t) {
    return r + 1e-6 < t;
  }
  function Lt(r, t) {
    return Math.abs(r - t) < 1e-6;
  }
  function sn(r, t, e) {
    return Math.max(Math.min(r, e), t);
  }
  var Mt = class r extends Ot {
    constructor() {
      super(), (this.name = "Timeline"), (this._timeline = []);
      let t = g(r.getDefaults(), arguments, ["memory"]);
      (this.memory = t.memory), (this.increasing = t.increasing);
    }
    static getDefaults() {
      return { memory: 1 / 0, increasing: !1 };
    }
    get length() {
      return this._timeline.length;
    }
    add(t) {
      if (
        (B(
          Reflect.has(t, "time"),
          "Timeline: events must have a time attribute"
        ),
        (t.time = t.time.valueOf()),
        this.increasing && this.length)
      ) {
        let e = this._timeline[this.length - 1];
        B(
          yo(t.time, e.time),
          "The time must be greater than or equal to the last scheduled time"
        ),
          this._timeline.push(t);
      } else {
        let e = this._search(t.time);
        this._timeline.splice(e + 1, 0, t);
      }
      if (this.length > this.memory) {
        let e = this.length - this.memory;
        this._timeline.splice(0, e);
      }
      return this;
    }
    remove(t) {
      let e = this._timeline.indexOf(t);
      return e !== -1 && this._timeline.splice(e, 1), this;
    }
    get(t, e = "time") {
      let o = this._search(t, e);
      return o !== -1 ? this._timeline[o] : null;
    }
    peek() {
      return this._timeline[0];
    }
    shift() {
      return this._timeline.shift();
    }
    getAfter(t, e = "time") {
      let o = this._search(t, e);
      return o + 1 < this._timeline.length ? this._timeline[o + 1] : null;
    }
    getBefore(t) {
      let e = this._timeline.length;
      if (e > 0 && this._timeline[e - 1].time < t) return this._timeline[e - 1];
      let o = this._search(t);
      return o - 1 >= 0 ? this._timeline[o - 1] : null;
    }
    cancel(t) {
      if (this._timeline.length > 1) {
        let e = this._search(t);
        if (e >= 0)
          if (Lt(this._timeline[e].time, t)) {
            for (let o = e; o >= 0 && Lt(this._timeline[o].time, t); o--) e = o;
            this._timeline = this._timeline.slice(0, e);
          } else this._timeline = this._timeline.slice(0, e + 1);
        else this._timeline = [];
      } else
        this._timeline.length === 1 &&
          yo(this._timeline[0].time, t) &&
          (this._timeline = []);
      return this;
    }
    cancelBefore(t) {
      let e = this._search(t);
      return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
    }
    previousEvent(t) {
      let e = this._timeline.indexOf(t);
      return e > 0 ? this._timeline[e - 1] : null;
    }
    _search(t, e = "time") {
      if (this._timeline.length === 0) return -1;
      let o = 0,
        s = this._timeline.length,
        n = s;
      if (s > 0 && this._timeline[s - 1][e] <= t) return s - 1;
      for (; o < n; ) {
        let a = Math.floor(o + (n - o) / 2),
          i = this._timeline[a],
          c = this._timeline[a + 1];
        if (Lt(i[e], t)) {
          for (let u = a; u < this._timeline.length; u++) {
            let l = this._timeline[u];
            if (Lt(l[e], t)) a = u;
            else break;
          }
          return a;
        } else {
          if (Jo(i[e], t) && Ir(c[e], t)) return a;
          Ir(i[e], t) ? (n = a) : (o = a + 1);
        }
      }
      return -1;
    }
    _iterate(t, e = 0, o = this._timeline.length - 1) {
      this._timeline.slice(e, o + 1).forEach(t);
    }
    forEach(t) {
      return this._iterate(t), this;
    }
    forEachBefore(t, e) {
      let o = this._search(t);
      return o !== -1 && this._iterate(e, 0, o), this;
    }
    forEachAfter(t, e) {
      let o = this._search(t);
      return this._iterate(e, o + 1), this;
    }
    forEachBetween(t, e, o) {
      let s = this._search(t),
        n = this._search(e);
      return (
        s !== -1 && n !== -1
          ? (this._timeline[s].time !== t && (s += 1),
            this._timeline[n].time === e && (n -= 1),
            this._iterate(o, s, n))
          : s === -1 && this._iterate(o, 0, n),
        this
      );
    }
    forEachFrom(t, e) {
      let o = this._search(t);
      for (; o >= 0 && this._timeline[o].time >= t; ) o--;
      return this._iterate(e, o + 1), this;
    }
    forEachAtTime(t, e) {
      let o = this._search(t);
      if (o !== -1 && Lt(this._timeline[o].time, t)) {
        let s = o;
        for (let n = o; n >= 0 && Lt(this._timeline[n].time, t); n--) s = n;
        this._iterate(
          (n) => {
            e(n);
          },
          s,
          o
        );
      }
      return this;
    }
    dispose() {
      return super.dispose(), (this._timeline = []), this;
    }
  };
  var Eu = [];
  function Xe(r) {
    Eu.push(r);
  }
  function Mu(r) {
    Eu.forEach((t) => t(r));
  }
  var Fu = [];
  function Ye(r) {
    Fu.push(r);
  }
  function Ru(r) {
    Fu.forEach((t) => t(r));
  }
  var He = class r extends Ot {
    constructor() {
      super(...arguments), (this.name = "Emitter");
    }
    on(t, e) {
      return (
        t.split(/\W+/).forEach((s) => {
          Tt(this._events) && (this._events = {}),
            this._events.hasOwnProperty(s) || (this._events[s] = []),
            this._events[s].push(e);
        }),
        this
      );
    }
    once(t, e) {
      let o = (...s) => {
        e(...s), this.off(t, o);
      };
      return this.on(t, o), this;
    }
    off(t, e) {
      return (
        t.split(/\W+/).forEach((s) => {
          if (
            (Tt(this._events) && (this._events = {}),
            this._events.hasOwnProperty(t))
          )
            if (Tt(e)) this._events[t] = [];
            else {
              let n = this._events[t];
              for (let a = n.length - 1; a >= 0; a--)
                n[a] === e && n.splice(a, 1);
            }
        }),
        this
      );
    }
    emit(t, ...e) {
      if (this._events && this._events.hasOwnProperty(t)) {
        let o = this._events[t].slice(0);
        for (let s = 0, n = o.length; s < n; s++) o[s].apply(this, e);
      }
      return this;
    }
    static mixin(t) {
      ["on", "once", "off", "emit"].forEach((e) => {
        let o = Object.getOwnPropertyDescriptor(r.prototype, e);
        Object.defineProperty(t.prototype, e, o);
      });
    }
    dispose() {
      return super.dispose(), (this._events = void 0), this;
    }
  };
  var qr = class extends He {
    constructor() {
      super(...arguments), (this.isOffline = !1);
    }
    toJSON() {
      return {};
    }
  };
  var nr = class r extends qr {
    constructor() {
      super(),
        (this.name = "Context"),
        (this._constants = new Map()),
        (this._timeouts = new Mt()),
        (this._timeoutIds = 0),
        (this._initialized = !1),
        (this.isOffline = !1),
        (this._workletModules = new Map());
      let t = g(r.getDefaults(), arguments, ["context"]);
      t.context
        ? (this._context = t.context)
        : (this._context = Au({ latencyHint: t.latencyHint })),
        (this._ticker = new $o(
          this.emit.bind(this, "tick"),
          t.clockSource,
          t.updateInterval
        )),
        this.on("tick", this._timeoutLoop.bind(this)),
        (this._context.onstatechange = () => {
          this.emit("statechange", this.state);
        }),
        this._setLatencyHint(t.latencyHint),
        (this.lookAhead = t.lookAhead);
    }
    static getDefaults() {
      return {
        clockSource: "worker",
        latencyHint: "interactive",
        lookAhead: 0.1,
        updateInterval: 0.05
      };
    }
    initialize() {
      return this._initialized || (Mu(this), (this._initialized = !0)), this;
    }
    createAnalyser() {
      return this._context.createAnalyser();
    }
    createOscillator() {
      return this._context.createOscillator();
    }
    createBufferSource() {
      return this._context.createBufferSource();
    }
    createBiquadFilter() {
      return this._context.createBiquadFilter();
    }
    createBuffer(t, e, o) {
      return this._context.createBuffer(t, e, o);
    }
    createChannelMerger(t) {
      return this._context.createChannelMerger(t);
    }
    createChannelSplitter(t) {
      return this._context.createChannelSplitter(t);
    }
    createConstantSource() {
      return this._context.createConstantSource();
    }
    createConvolver() {
      return this._context.createConvolver();
    }
    createDelay(t) {
      return this._context.createDelay(t);
    }
    createDynamicsCompressor() {
      return this._context.createDynamicsCompressor();
    }
    createGain() {
      return this._context.createGain();
    }
    createIIRFilter(t, e) {
      return this._context.createIIRFilter(t, e);
    }
    createPanner() {
      return this._context.createPanner();
    }
    createPeriodicWave(t, e, o) {
      return this._context.createPeriodicWave(t, e, o);
    }
    createStereoPanner() {
      return this._context.createStereoPanner();
    }
    createWaveShaper() {
      return this._context.createWaveShaper();
    }
    createMediaStreamSource(t) {
      return (
        B(Qe(this._context), "Not available if OfflineAudioContext"),
        this._context.createMediaStreamSource(t)
      );
    }
    createMediaElementSource(t) {
      return (
        B(Qe(this._context), "Not available if OfflineAudioContext"),
        this._context.createMediaElementSource(t)
      );
    }
    createMediaStreamDestination() {
      return (
        B(Qe(this._context), "Not available if OfflineAudioContext"),
        this._context.createMediaStreamDestination()
      );
    }
    decodeAudioData(t) {
      return this._context.decodeAudioData(t);
    }
    get currentTime() {
      return this._context.currentTime;
    }
    get state() {
      return this._context.state;
    }
    get sampleRate() {
      return this._context.sampleRate;
    }
    get listener() {
      return this.initialize(), this._listener;
    }
    set listener(t) {
      B(!this._initialized, "The listener cannot be set after initialization."),
        (this._listener = t);
    }
    get transport() {
      return this.initialize(), this._transport;
    }
    set transport(t) {
      B(
        !this._initialized,
        "The transport cannot be set after initialization."
      ),
        (this._transport = t);
    }
    get draw() {
      return this.initialize(), this._draw;
    }
    set draw(t) {
      B(!this._initialized, "Draw cannot be set after initialization."),
        (this._draw = t);
    }
    get destination() {
      return this.initialize(), this._destination;
    }
    set destination(t) {
      B(
        !this._initialized,
        "The destination cannot be set after initialization."
      ),
        (this._destination = t);
    }
    createAudioWorkletNode(t, e) {
      return Ou(this.rawContext, t, e);
    }
    addAudioWorkletModule(t, e) {
      return K(this, void 0, void 0, function* () {
        B(
          Z(this.rawContext.audioWorklet),
          "AudioWorkletNode is only available in a secure context (https or localhost)"
        ),
          this._workletModules.has(e) ||
            this._workletModules.set(
              e,
              this.rawContext.audioWorklet.addModule(t)
            ),
          yield this._workletModules.get(e);
      });
    }
    workletsAreReady() {
      return K(this, void 0, void 0, function* () {
        let t = [];
        this._workletModules.forEach((e) => t.push(e)), yield Promise.all(t);
      });
    }
    get updateInterval() {
      return this._ticker.updateInterval;
    }
    set updateInterval(t) {
      this._ticker.updateInterval = t;
    }
    get clockSource() {
      return this._ticker.type;
    }
    set clockSource(t) {
      this._ticker.type = t;
    }
    get latencyHint() {
      return this._latencyHint;
    }
    _setLatencyHint(t) {
      let e = 0;
      if (((this._latencyHint = t), Et(t)))
        switch (t) {
          case "interactive":
            e = 0.1;
            break;
          case "playback":
            e = 0.5;
            break;
          case "balanced":
            e = 0.25;
            break;
        }
      (this.lookAhead = e), (this.updateInterval = e / 2);
    }
    get rawContext() {
      return this._context;
    }
    now() {
      return this._context.currentTime + this.lookAhead;
    }
    immediate() {
      return this._context.currentTime;
    }
    resume() {
      return Qe(this._context) ? this._context.resume() : Promise.resolve();
    }
    close() {
      return K(this, void 0, void 0, function* () {
        Qe(this._context) && (yield this._context.close()),
          this._initialized && Ru(this);
      });
    }
    getConstant(t) {
      if (this._constants.has(t)) return this._constants.get(t);
      {
        let e = this._context.createBuffer(1, 128, this._context.sampleRate),
          o = e.getChannelData(0);
        for (let n = 0; n < o.length; n++) o[n] = t;
        let s = this._context.createBufferSource();
        return (
          (s.channelCount = 1),
          (s.channelCountMode = "explicit"),
          (s.buffer = e),
          (s.loop = !0),
          s.start(0),
          this._constants.set(t, s),
          s
        );
      }
    }
    dispose() {
      return (
        super.dispose(),
        this._ticker.dispose(),
        this._timeouts.dispose(),
        Object.keys(this._constants).map((t) =>
          this._constants[t].disconnect()
        ),
        this
      );
    }
    _timeoutLoop() {
      let t = this.now(),
        e = this._timeouts.peek();
      for (; this._timeouts.length && e && e.time <= t; )
        e.callback(), this._timeouts.shift(), (e = this._timeouts.peek());
    }
    setTimeout(t, e) {
      this._timeoutIds++;
      let o = this.now();
      return (
        this._timeouts.add({ callback: t, id: this._timeoutIds, time: o + e }),
        this._timeoutIds
      );
    }
    clearTimeout(t) {
      return (
        this._timeouts.forEach((e) => {
          e.id === t && this._timeouts.remove(e);
        }),
        this
      );
    }
    clearInterval(t) {
      return this.clearTimeout(t);
    }
    setInterval(t, e) {
      let o = ++this._timeoutIds,
        s = () => {
          let n = this.now();
          this._timeouts.add({
            callback: () => {
              t(), s();
            },
            id: o,
            time: n + e
          });
        };
      return s(), o;
    }
  };
  var ts = class extends qr {
    constructor() {
      super(...arguments),
        (this.lookAhead = 0),
        (this.latencyHint = 0),
        (this.isOffline = !1);
    }
    createAnalyser() {
      return {};
    }
    createOscillator() {
      return {};
    }
    createBufferSource() {
      return {};
    }
    createBiquadFilter() {
      return {};
    }
    createBuffer(t, e, o) {
      return {};
    }
    createChannelMerger(t) {
      return {};
    }
    createChannelSplitter(t) {
      return {};
    }
    createConstantSource() {
      return {};
    }
    createConvolver() {
      return {};
    }
    createDelay(t) {
      return {};
    }
    createDynamicsCompressor() {
      return {};
    }
    createGain() {
      return {};
    }
    createIIRFilter(t, e) {
      return {};
    }
    createPanner() {
      return {};
    }
    createPeriodicWave(t, e, o) {
      return {};
    }
    createStereoPanner() {
      return {};
    }
    createWaveShaper() {
      return {};
    }
    createMediaStreamSource(t) {
      return {};
    }
    createMediaElementSource(t) {
      return {};
    }
    createMediaStreamDestination() {
      return {};
    }
    decodeAudioData(t) {
      return Promise.resolve({});
    }
    createAudioWorkletNode(t, e) {
      return {};
    }
    get rawContext() {
      return {};
    }
    addAudioWorkletModule(t, e) {
      return K(this, void 0, void 0, function* () {
        return Promise.resolve();
      });
    }
    resume() {
      return Promise.resolve();
    }
    setTimeout(t, e) {
      return 0;
    }
    clearTimeout(t) {
      return this;
    }
    setInterval(t, e) {
      return 0;
    }
    clearInterval(t) {
      return this;
    }
    getConstant(t) {
      return {};
    }
    get currentTime() {
      return 0;
    }
    get state() {
      return {};
    }
    get sampleRate() {
      return 0;
    }
    get listener() {
      return {};
    }
    get transport() {
      return {};
    }
    get draw() {
      return {};
    }
    set draw(t) {}
    get destination() {
      return {};
    }
    set destination(t) {}
    now() {
      return 0;
    }
    immediate() {
      return 0;
    }
  };
  function V(r, t) {
    vt(t)
      ? t.forEach((e) => V(r, e))
      : Object.defineProperty(r, t, { enumerable: !0, writable: !1 });
  }
  function Pr(r, t) {
    vt(t)
      ? t.forEach((e) => Pr(r, e))
      : Object.defineProperty(r, t, { writable: !0 });
  }
  var Q = () => {};
  var kt = class r extends Ot {
    constructor() {
      super(), (this.name = "ToneAudioBuffer"), (this.onload = Q);
      let t = g(r.getDefaults(), arguments, ["url", "onload", "onerror"]);
      (this.reverse = t.reverse),
        (this.onload = t.onload),
        (t.url && Ko(t.url)) || t.url instanceof r
          ? this.set(t.url)
          : Et(t.url) && this.load(t.url).catch(t.onerror);
    }
    static getDefaults() {
      return { onerror: Q, onload: Q, reverse: !1 };
    }
    get sampleRate() {
      return this._buffer ? this._buffer.sampleRate : dt().sampleRate;
    }
    set(t) {
      return (
        t instanceof r
          ? t.loaded
            ? (this._buffer = t.get())
            : (t.onload = () => {
                this.set(t), this.onload(this);
              })
          : (this._buffer = t),
        this._reversed && this._reverse(),
        this
      );
    }
    get() {
      return this._buffer;
    }
    load(t) {
      return K(this, void 0, void 0, function* () {
        let e = r.load(t).then((o) => {
          this.set(o), this.onload(this);
        });
        r.downloads.push(e);
        try {
          yield e;
        } finally {
          let o = r.downloads.indexOf(e);
          r.downloads.splice(o, 1);
        }
        return this;
      });
    }
    dispose() {
      return super.dispose(), (this._buffer = void 0), this;
    }
    fromArray(t) {
      let e = vt(t) && t[0].length > 0,
        o = e ? t.length : 1,
        s = e ? t[0].length : t.length,
        n = dt(),
        a = n.createBuffer(o, s, n.sampleRate),
        i = !e && o === 1 ? [t] : t;
      for (let c = 0; c < o; c++) a.copyToChannel(i[c], c);
      return (this._buffer = a), this;
    }
    toMono(t) {
      if (It(t)) this.fromArray(this.toArray(t));
      else {
        let e = new Float32Array(this.length),
          o = this.numberOfChannels;
        for (let s = 0; s < o; s++) {
          let n = this.toArray(s);
          for (let a = 0; a < n.length; a++) e[a] += n[a];
        }
        (e = e.map((s) => s / o)), this.fromArray(e);
      }
      return this;
    }
    toArray(t) {
      if (It(t)) return this.getChannelData(t);
      if (this.numberOfChannels === 1) return this.toArray(0);
      {
        let e = [];
        for (let o = 0; o < this.numberOfChannels; o++)
          e[o] = this.getChannelData(o);
        return e;
      }
    }
    getChannelData(t) {
      return this._buffer
        ? this._buffer.getChannelData(t)
        : new Float32Array(0);
    }
    slice(t, e = this.duration) {
      let o = Math.floor(t * this.sampleRate),
        s = Math.floor(e * this.sampleRate);
      B(o < s, "The start time must be less than the end time");
      let n = s - o,
        a = dt().createBuffer(this.numberOfChannels, n, this.sampleRate);
      for (let i = 0; i < this.numberOfChannels; i++)
        a.copyToChannel(this.getChannelData(i).subarray(o, s), i);
      return new r(a);
    }
    _reverse() {
      if (this.loaded)
        for (let t = 0; t < this.numberOfChannels; t++)
          this.getChannelData(t).reverse();
      return this;
    }
    get loaded() {
      return this.length > 0;
    }
    get duration() {
      return this._buffer ? this._buffer.duration : 0;
    }
    get length() {
      return this._buffer ? this._buffer.length : 0;
    }
    get numberOfChannels() {
      return this._buffer ? this._buffer.numberOfChannels : 0;
    }
    get reverse() {
      return this._reversed;
    }
    set reverse(t) {
      this._reversed !== t && ((this._reversed = t), this._reverse());
    }
    static fromArray(t) {
      return new r().fromArray(t);
    }
    static fromUrl(t) {
      return K(this, void 0, void 0, function* () {
        return yield new r().load(t);
      });
    }
    static load(t) {
      return K(this, void 0, void 0, function* () {
        let e = t.match(/\[([^\]\[]+\|.+)\]$/);
        if (e) {
          let i = e[1].split("|"),
            c = i[0];
          for (let u of i)
            if (r.supportsType(u)) {
              c = u;
              break;
            }
          t = t.replace(e[0], c);
        }
        let o =
            r.baseUrl === "" || r.baseUrl.endsWith("/")
              ? r.baseUrl
              : r.baseUrl + "/",
          s = yield fetch(o + t);
        if (!s.ok) throw new Error(`could not load url: ${t}`);
        let n = yield s.arrayBuffer();
        return yield dt().decodeAudioData(n);
      });
    }
    static supportsType(t) {
      let e = t.split("."),
        o = e[e.length - 1];
      return document.createElement("audio").canPlayType("audio/" + o) !== "";
    }
    static loaded() {
      return K(this, void 0, void 0, function* () {
        for (yield Promise.resolve(); r.downloads.length; )
          yield r.downloads[0];
      });
    }
  };
  kt.baseUrl = "";
  kt.downloads = [];
  var ke = class extends nr {
    constructor() {
      super({
        clockSource: "offline",
        context: Rr(arguments[0])
          ? arguments[0]
          : Cu(arguments[0], arguments[1] * arguments[2], arguments[2]),
        lookAhead: 0,
        updateInterval: Rr(arguments[0])
          ? 128 / arguments[0].sampleRate
          : 128 / arguments[2]
      }),
        (this.name = "OfflineContext"),
        (this._currentTime = 0),
        (this.isOffline = !0),
        (this._duration = Rr(arguments[0])
          ? arguments[0].length / arguments[0].sampleRate
          : arguments[1]);
    }
    now() {
      return this._currentTime;
    }
    get currentTime() {
      return this._currentTime;
    }
    _renderClock(t) {
      return K(this, void 0, void 0, function* () {
        let e = 0;
        for (; this._duration - this._currentTime >= 0; ) {
          this.emit("tick"), (this._currentTime += 128 / this.sampleRate), e++;
          let o = Math.floor(this.sampleRate / 128);
          t && e % o === 0 && (yield new Promise((s) => setTimeout(s, 1)));
        }
      });
    }
    render(t = !0) {
      return K(this, void 0, void 0, function* () {
        yield this.workletsAreReady(), yield this._renderClock(t);
        let e = yield this._context.startRendering();
        return new kt(e);
      });
    }
    close() {
      return Promise.resolve();
    }
  };
  var Iu = new ts(),
    Vr = Iu;
  function dt() {
    return Vr === Iu && Nu && nn(new nr()), Vr;
  }
  function nn(r) {
    Qe(r) ? (Vr = new nr(r)) : Rr(r) ? (Vr = new ke(r)) : (Vr = r);
  }
  function an() {
    return Vr.resume();
  }
  if (Ce && !Ce.TONE_SILENCE_LOGGING) {
    let r = "v";
    to === "dev" && (r = "");
    let t = ` * Tone.js ${r}${to} * `;
    console.log(`%c${t}`, "background: #000; color: #fff");
  }
  function $e(r) {
    return Math.pow(10, r / 20);
  }
  function ir(r) {
    return 20 * (Math.log(r) / Math.LN10);
  }
  function ar(r) {
    return Math.pow(2, r / 12);
  }
  var es = 440;
  function qu() {
    return es;
  }
  function Pu(r) {
    es = r;
  }
  function cr(r) {
    return Math.round(cn(r));
  }
  function cn(r) {
    return 69 + 12 * Math.log2(r / es);
  }
  function rs(r) {
    return es * Math.pow(2, (r - 69) / 12);
  }
  var os = class r extends Ot {
    constructor(t, e, o) {
      super(),
        (this.defaultUnits = "s"),
        (this._val = e),
        (this._units = o),
        (this.context = t),
        (this._expressions = this._getExpressions());
    }
    _getExpressions() {
      return {
        hz: {
          method: (t) => this._frequencyToUnits(parseFloat(t)),
          regexp: /^(\d+(?:\.\d+)?)hz$/i
        },
        i: {
          method: (t) => this._ticksToUnits(parseInt(t, 10)),
          regexp: /^(\d+)i$/i
        },
        m: {
          method: (t) =>
            this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
          regexp: /^(\d+)m$/i
        },
        n: {
          method: (t, e) => {
            let o = parseInt(t, 10),
              s = e === "." ? 1.5 : 1;
            return o === 1
              ? this._beatsToUnits(this._getTimeSignature()) * s
              : this._beatsToUnits(4 / o) * s;
          },
          regexp: /^(\d+)n(\.?)$/i
        },
        number: {
          method: (t) =>
            this._expressions[this.defaultUnits].method.call(this, t),
          regexp: /^(\d+(?:\.\d+)?)$/
        },
        s: {
          method: (t) => this._secondsToUnits(parseFloat(t)),
          regexp: /^(\d+(?:\.\d+)?)s$/
        },
        samples: {
          method: (t) => parseInt(t, 10) / this.context.sampleRate,
          regexp: /^(\d+)samples$/
        },
        t: {
          method: (t) => {
            let e = parseInt(t, 10);
            return this._beatsToUnits(8 / (Math.floor(e) * 3));
          },
          regexp: /^(\d+)t$/i
        },
        tr: {
          method: (t, e, o) => {
            let s = 0;
            return (
              t &&
                t !== "0" &&
                (s += this._beatsToUnits(
                  this._getTimeSignature() * parseFloat(t)
                )),
              e && e !== "0" && (s += this._beatsToUnits(parseFloat(e))),
              o && o !== "0" && (s += this._beatsToUnits(parseFloat(o) / 4)),
              s
            );
          },
          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
        }
      };
    }
    valueOf() {
      if ((this._val instanceof r && this.fromType(this._val), Tt(this._val)))
        return this._noArg();
      if (Et(this._val) && Tt(this._units)) {
        for (let t in this._expressions)
          if (this._expressions[t].regexp.test(this._val.trim())) {
            this._units = t;
            break;
          }
      } else if (me(this._val)) {
        let t = 0;
        for (let e in this._val)
          if (Z(this._val[e])) {
            let o = this._val[e],
              s = new this.constructor(this.context, e).valueOf() * o;
            t += s;
          }
        return t;
      }
      if (Z(this._units)) {
        let t = this._expressions[this._units],
          e = this._val.toString().trim().match(t.regexp);
        return e
          ? t.method.apply(this, e.slice(1))
          : t.method.call(this, this._val);
      } else return Et(this._val) ? parseFloat(this._val) : this._val;
    }
    _frequencyToUnits(t) {
      return 1 / t;
    }
    _beatsToUnits(t) {
      return (60 / this._getBpm()) * t;
    }
    _secondsToUnits(t) {
      return t;
    }
    _ticksToUnits(t) {
      return (t * this._beatsToUnits(1)) / this._getPPQ();
    }
    _noArg() {
      return this._now();
    }
    _getBpm() {
      return this.context.transport.bpm.value;
    }
    _getTimeSignature() {
      return this.context.transport.timeSignature;
    }
    _getPPQ() {
      return this.context.transport.PPQ;
    }
    fromType(t) {
      switch (((this._units = void 0), this.defaultUnits)) {
        case "s":
          this._val = t.toSeconds();
          break;
        case "i":
          this._val = t.toTicks();
          break;
        case "hz":
          this._val = t.toFrequency();
          break;
        case "midi":
          this._val = t.toMidi();
          break;
      }
      return this;
    }
    toFrequency() {
      return 1 / this.toSeconds();
    }
    toSamples() {
      return this.toSeconds() * this.context.sampleRate;
    }
    toMilliseconds() {
      return this.toSeconds() * 1e3;
    }
  };
  var Xt = class r extends os {
    constructor() {
      super(...arguments), (this.name = "TimeClass");
    }
    _getExpressions() {
      return Object.assign(super._getExpressions(), {
        now: {
          method: (t) =>
            this._now() + new this.constructor(this.context, t).valueOf(),
          regexp: /^\+(.+)/
        },
        quantize: {
          method: (t) => {
            let e = new r(this.context, t).valueOf();
            return this._secondsToUnits(
              this.context.transport.nextSubdivision(e)
            );
          },
          regexp: /^@(.+)/
        }
      });
    }
    quantize(t, e = 1) {
      let o = new this.constructor(this.context, t).valueOf(),
        s = this.valueOf(),
        i = Math.round(s / o) * o - s;
      return s + i * e;
    }
    toNotation() {
      let t = this.toSeconds(),
        e = ["1m"];
      for (let n = 1; n < 9; n++) {
        let a = Math.pow(2, n);
        e.push(a + "n."), e.push(a + "n"), e.push(a + "t");
      }
      e.push("0");
      let o = e[0],
        s = new r(this.context, e[0]).toSeconds();
      return (
        e.forEach((n) => {
          let a = new r(this.context, n).toSeconds();
          Math.abs(a - t) < Math.abs(s - t) && ((o = n), (s = a));
        }),
        o
      );
    }
    toBarsBeatsSixteenths() {
      let t = this._beatsToUnits(1),
        e = this.valueOf() / t;
      e = parseFloat(e.toFixed(4));
      let o = Math.floor(e / this._getTimeSignature()),
        s = (e % 1) * 4;
      e = Math.floor(e) % this._getTimeSignature();
      let n = s.toString();
      return (
        n.length > 3 && (s = parseFloat(parseFloat(n).toFixed(3))),
        [o, e, s].join(":")
      );
    }
    toTicks() {
      let t = this._beatsToUnits(1),
        e = this.valueOf() / t;
      return Math.round(e * this._getPPQ());
    }
    toSeconds() {
      return this.valueOf();
    }
    toMidi() {
      return cr(this.toFrequency());
    }
    _now() {
      return this.context.now();
    }
  };
  var Wt = class r extends Xt {
      constructor() {
        super(...arguments),
          (this.name = "Frequency"),
          (this.defaultUnits = "hz");
      }
      static get A4() {
        return qu();
      }
      static set A4(t) {
        Pu(t);
      }
      _getExpressions() {
        return Object.assign({}, super._getExpressions(), {
          midi: {
            regexp: /^(\d+(?:\.\d+)?midi)/,
            method(t) {
              return this.defaultUnits === "midi" ? t : r.mtof(t);
            }
          },
          note: {
            regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
            method(t, e) {
              let s = dp[t.toLowerCase()] + (parseInt(e, 10) + 1) * 12;
              return this.defaultUnits === "midi" ? s : r.mtof(s);
            }
          },
          tr: {
            regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
            method(t, e, o) {
              let s = 1;
              return (
                t &&
                  t !== "0" &&
                  (s *= this._beatsToUnits(
                    this._getTimeSignature() * parseFloat(t)
                  )),
                e && e !== "0" && (s *= this._beatsToUnits(parseFloat(e))),
                o && o !== "0" && (s *= this._beatsToUnits(parseFloat(o) / 4)),
                s
              );
            }
          }
        });
      }
      transpose(t) {
        return new r(this.context, this.valueOf() * ar(t));
      }
      harmonize(t) {
        return t.map((e) => this.transpose(e));
      }
      toMidi() {
        return cr(this.valueOf());
      }
      toNote() {
        let t = this.toFrequency(),
          e = Math.log2(t / r.A4),
          o = Math.round(12 * e) + 57,
          s = Math.floor(o / 12);
        return s < 0 && (o += -12 * s), gp[o % 12] + s.toString();
      }
      toSeconds() {
        return 1 / super.toSeconds();
      }
      toTicks() {
        let t = this._beatsToUnits(1),
          e = this.valueOf() / t;
        return Math.floor(e * this._getPPQ());
      }
      _noArg() {
        return 0;
      }
      _frequencyToUnits(t) {
        return t;
      }
      _ticksToUnits(t) {
        return 1 / ((t * 60) / (this._getBpm() * this._getPPQ()));
      }
      _beatsToUnits(t) {
        return 1 / super._beatsToUnits(t);
      }
      _secondsToUnits(t) {
        return 1 / t;
      }
      static mtof(t) {
        return rs(t);
      }
      static ftom(t) {
        return cr(t);
      }
    },
    dp = {
      cbb: -2,
      cb: -1,
      c: 0,
      "c#": 1,
      cx: 2,
      dbb: 0,
      db: 1,
      d: 2,
      "d#": 3,
      dx: 4,
      ebb: 2,
      eb: 3,
      e: 4,
      "e#": 5,
      ex: 6,
      fbb: 3,
      fb: 4,
      f: 5,
      "f#": 6,
      fx: 7,
      gbb: 5,
      gb: 6,
      g: 7,
      "g#": 8,
      gx: 9,
      abb: 7,
      ab: 8,
      a: 9,
      "a#": 10,
      ax: 11,
      bbb: 9,
      bb: 10,
      b: 11,
      "b#": 12,
      bx: 13
    },
    gp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  function vo(r, t) {
    return new Wt(dt(), r, t);
  }
  var se = class extends Xt {
    constructor() {
      super(...arguments), (this.name = "TransportTime");
    }
    _now() {
      return this.context.transport.seconds;
    }
  };
  var lt = class r extends Ot {
    constructor() {
      super();
      let t = g(r.getDefaults(), arguments, ["context"]);
      this.defaultContext
        ? (this.context = this.defaultContext)
        : (this.context = t.context);
    }
    static getDefaults() {
      return { context: dt() };
    }
    now() {
      return this.context.currentTime + this.context.lookAhead;
    }
    immediate() {
      return this.context.currentTime;
    }
    get sampleTime() {
      return 1 / this.context.sampleRate;
    }
    get blockTime() {
      return 128 / this.context.sampleRate;
    }
    toSeconds(t) {
      return new Xt(this.context, t).toSeconds();
    }
    toFrequency(t) {
      return new Wt(this.context, t).toFrequency();
    }
    toTicks(t) {
      return new se(this.context, t).toTicks();
    }
    _getPartialProperties(t) {
      let e = this.get();
      return (
        Object.keys(e).forEach((o) => {
          Tt(t[o]) && delete e[o];
        }),
        e
      );
    }
    get() {
      let t = Du(this);
      return (
        Object.keys(t).forEach((e) => {
          if (Reflect.has(this, e)) {
            let o = this[e];
            Z(o) && Z(o.value) && Z(o.setValueAtTime)
              ? (t[e] = o.value)
              : o instanceof r
              ? (t[e] = o._getPartialProperties(t[e]))
              : vt(o) || It(o) || Et(o) || Ho(o)
              ? (t[e] = o)
              : delete t[e];
          }
        }),
        t
      );
    }
    set(t) {
      return (
        Object.keys(t).forEach((e) => {
          Reflect.has(this, e) &&
            Z(this[e]) &&
            (this[e] && Z(this[e].value) && Z(this[e].setValueAtTime)
              ? this[e].value !== t[e] && (this[e].value = t[e])
              : this[e] instanceof r
              ? this[e].set(t[e])
              : (this[e] = t[e]));
        }),
        this
      );
    }
  };
  var ge = class extends Mt {
    constructor(t = "stopped") {
      super(),
        (this.name = "StateTimeline"),
        (this._initial = t),
        this.setStateAtTime(this._initial, 0);
    }
    getValueAtTime(t) {
      let e = this.get(t);
      return e !== null ? e.state : this._initial;
    }
    setStateAtTime(t, e, o) {
      return (
        Nt(e, 0), this.add(Object.assign({}, o, { state: t, time: e })), this
      );
    }
    getLastState(t, e) {
      let o = this._search(e);
      for (let s = o; s >= 0; s--) {
        let n = this._timeline[s];
        if (n.state === t) return n;
      }
    }
    getNextState(t, e) {
      let o = this._search(e);
      if (o !== -1)
        for (let s = o; s < this._timeline.length; s++) {
          let n = this._timeline[s];
          if (n.state === t) return n;
        }
    }
  };
  var H = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["param", "units", "convert"])),
        (this.name = "Param"),
        (this.overridden = !1),
        (this._minOutput = 1e-7);
      let t = g(r.getDefaults(), arguments, ["param", "units", "convert"]);
      for (
        B(
          Z(t.param) && (fe(t.param) || t.param instanceof r),
          "param must be an AudioParam"
        );
        !fe(t.param);

      )
        t.param = t.param._param;
      (this._swappable = Z(t.swappable) ? t.swappable : !1),
        this._swappable
          ? ((this.input = this.context.createGain()),
            (this._param = t.param),
            this.input.connect(this._param))
          : (this._param = this.input = t.param),
        (this._events = new Mt(1e3)),
        (this._initialValue = this._param.defaultValue),
        (this.units = t.units),
        (this.convert = t.convert),
        (this._minValue = t.minValue),
        (this._maxValue = t.maxValue),
        Z(t.value) &&
          t.value !== this._toType(this._initialValue) &&
          this.setValueAtTime(t.value, 0);
    }
    static getDefaults() {
      return Object.assign(lt.getDefaults(), { convert: !0, units: "number" });
    }
    get value() {
      let t = this.now();
      return this.getValueAtTime(t);
    }
    set value(t) {
      this.cancelScheduledValues(this.now()),
        this.setValueAtTime(t, this.now());
    }
    get minValue() {
      return Z(this._minValue)
        ? this._minValue
        : this.units === "time" ||
          this.units === "frequency" ||
          this.units === "normalRange" ||
          this.units === "positive" ||
          this.units === "transportTime" ||
          this.units === "ticks" ||
          this.units === "bpm" ||
          this.units === "hertz" ||
          this.units === "samples"
        ? 0
        : this.units === "audioRange"
        ? -1
        : this.units === "decibels"
        ? -1 / 0
        : this._param.minValue;
    }
    get maxValue() {
      return Z(this._maxValue)
        ? this._maxValue
        : this.units === "normalRange" || this.units === "audioRange"
        ? 1
        : this._param.maxValue;
    }
    _is(t, e) {
      return this.units === e;
    }
    _assertRange(t) {
      return (
        Z(this.maxValue) &&
          Z(this.minValue) &&
          Nt(t, this._fromType(this.minValue), this._fromType(this.maxValue)),
        t
      );
    }
    _fromType(t) {
      return this.convert && !this.overridden
        ? this._is(t, "time")
          ? this.toSeconds(t)
          : this._is(t, "decibels")
          ? $e(t)
          : this._is(t, "frequency")
          ? this.toFrequency(t)
          : t
        : this.overridden
        ? 0
        : t;
    }
    _toType(t) {
      return this.convert && this.units === "decibels" ? ir(t) : t;
    }
    setValueAtTime(t, e) {
      let o = this.toSeconds(e),
        s = this._fromType(t);
      return (
        B(
          isFinite(s) && isFinite(o),
          `Invalid argument(s) to setValueAtTime: ${JSON.stringify(
            t
          )}, ${JSON.stringify(e)}`
        ),
        this._assertRange(s),
        this.log(this.units, "setValueAtTime", t, o),
        this._events.add({ time: o, type: "setValueAtTime", value: s }),
        this._param.setValueAtTime(s, o),
        this
      );
    }
    getValueAtTime(t) {
      let e = Math.max(this.toSeconds(t), 0),
        o = this._events.getAfter(e),
        s = this._events.get(e),
        n = this._initialValue;
      if (s === null) n = this._initialValue;
      else if (
        s.type === "setTargetAtTime" &&
        (o === null || o.type === "setValueAtTime")
      ) {
        let a = this._events.getBefore(s.time),
          i;
        a === null ? (i = this._initialValue) : (i = a.value),
          s.type === "setTargetAtTime" &&
            (n = this._exponentialApproach(s.time, i, s.value, s.constant, e));
      } else if (o === null) n = s.value;
      else if (
        o.type === "linearRampToValueAtTime" ||
        o.type === "exponentialRampToValueAtTime"
      ) {
        let a = s.value;
        if (s.type === "setTargetAtTime") {
          let i = this._events.getBefore(s.time);
          i === null ? (a = this._initialValue) : (a = i.value);
        }
        o.type === "linearRampToValueAtTime"
          ? (n = this._linearInterpolate(s.time, a, o.time, o.value, e))
          : (n = this._exponentialInterpolate(s.time, a, o.time, o.value, e));
      } else n = s.value;
      return this._toType(n);
    }
    setRampPoint(t) {
      t = this.toSeconds(t);
      let e = this.getValueAtTime(t);
      return (
        this.cancelAndHoldAtTime(t),
        this._fromType(e) === 0 && (e = this._toType(this._minOutput)),
        this.setValueAtTime(e, t),
        this
      );
    }
    linearRampToValueAtTime(t, e) {
      let o = this._fromType(t),
        s = this.toSeconds(e);
      return (
        B(
          isFinite(o) && isFinite(s),
          `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(
            t
          )}, ${JSON.stringify(e)}`
        ),
        this._assertRange(o),
        this._events.add({
          time: s,
          type: "linearRampToValueAtTime",
          value: o
        }),
        this.log(this.units, "linearRampToValueAtTime", t, s),
        this._param.linearRampToValueAtTime(o, s),
        this
      );
    }
    exponentialRampToValueAtTime(t, e) {
      let o = this._fromType(t);
      (o = Lt(o, 0) ? this._minOutput : o), this._assertRange(o);
      let s = this.toSeconds(e);
      return (
        B(
          isFinite(o) && isFinite(s),
          `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(
            t
          )}, ${JSON.stringify(e)}`
        ),
        this._events.add({
          time: s,
          type: "exponentialRampToValueAtTime",
          value: o
        }),
        this.log(this.units, "exponentialRampToValueAtTime", t, s),
        this._param.exponentialRampToValueAtTime(o, s),
        this
      );
    }
    exponentialRampTo(t, e, o) {
      return (
        (o = this.toSeconds(o)),
        this.setRampPoint(o),
        this.exponentialRampToValueAtTime(t, o + this.toSeconds(e)),
        this
      );
    }
    linearRampTo(t, e, o) {
      return (
        (o = this.toSeconds(o)),
        this.setRampPoint(o),
        this.linearRampToValueAtTime(t, o + this.toSeconds(e)),
        this
      );
    }
    targetRampTo(t, e, o) {
      return (
        (o = this.toSeconds(o)),
        this.setRampPoint(o),
        this.exponentialApproachValueAtTime(t, o, e),
        this
      );
    }
    exponentialApproachValueAtTime(t, e, o) {
      (e = this.toSeconds(e)), (o = this.toSeconds(o));
      let s = Math.log(o + 1) / Math.log(200);
      return (
        this.setTargetAtTime(t, e, s),
        this.cancelAndHoldAtTime(e + o * 0.9),
        this.linearRampToValueAtTime(t, e + o),
        this
      );
    }
    setTargetAtTime(t, e, o) {
      let s = this._fromType(t);
      B(isFinite(o) && o > 0, "timeConstant must be a number greater than 0");
      let n = this.toSeconds(e);
      return (
        this._assertRange(s),
        B(
          isFinite(s) && isFinite(n),
          `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(
            t
          )}, ${JSON.stringify(e)}`
        ),
        this._events.add({
          constant: o,
          time: n,
          type: "setTargetAtTime",
          value: s
        }),
        this.log(this.units, "setTargetAtTime", t, n, o),
        this._param.setTargetAtTime(s, n, o),
        this
      );
    }
    setValueCurveAtTime(t, e, o, s = 1) {
      (o = this.toSeconds(o)), (e = this.toSeconds(e));
      let n = this._fromType(t[0]) * s;
      this.setValueAtTime(this._toType(n), e);
      let a = o / (t.length - 1);
      for (let i = 1; i < t.length; i++) {
        let c = this._fromType(t[i]) * s;
        this.linearRampToValueAtTime(this._toType(c), e + i * a);
      }
      return this;
    }
    cancelScheduledValues(t) {
      let e = this.toSeconds(t);
      return (
        B(
          isFinite(e),
          `Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`
        ),
        this._events.cancel(e),
        this._param.cancelScheduledValues(e),
        this.log(this.units, "cancelScheduledValues", e),
        this
      );
    }
    cancelAndHoldAtTime(t) {
      let e = this.toSeconds(t),
        o = this._fromType(this.getValueAtTime(e));
      B(
        isFinite(e),
        `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`
      ),
        this.log(this.units, "cancelAndHoldAtTime", e, "value=" + o);
      let s = this._events.get(e),
        n = this._events.getAfter(e);
      return (
        s && Lt(s.time, e)
          ? n
            ? (this._param.cancelScheduledValues(n.time),
              this._events.cancel(n.time))
            : (this._param.cancelAndHoldAtTime(e),
              this._events.cancel(e + this.sampleTime))
          : n &&
            (this._param.cancelScheduledValues(n.time),
            this._events.cancel(n.time),
            n.type === "linearRampToValueAtTime"
              ? this.linearRampToValueAtTime(this._toType(o), e)
              : n.type === "exponentialRampToValueAtTime" &&
                this.exponentialRampToValueAtTime(this._toType(o), e)),
        this._events.add({ time: e, type: "setValueAtTime", value: o }),
        this._param.setValueAtTime(o, e),
        this
      );
    }
    rampTo(t, e = 0.1, o) {
      return (
        this.units === "frequency" ||
        this.units === "bpm" ||
        this.units === "decibels"
          ? this.exponentialRampTo(t, e, o)
          : this.linearRampTo(t, e, o),
        this
      );
    }
    apply(t) {
      let e = this.context.currentTime;
      t.setValueAtTime(this.getValueAtTime(e), e);
      let o = this._events.get(e);
      if (o && o.type === "setTargetAtTime") {
        let s = this._events.getAfter(o.time),
          n = s ? s.time : e + 2,
          a = (n - e) / 10;
        for (let i = e; i < n; i += a)
          t.linearRampToValueAtTime(this.getValueAtTime(i), i);
      }
      return (
        this._events.forEachAfter(this.context.currentTime, (s) => {
          s.type === "cancelScheduledValues"
            ? t.cancelScheduledValues(s.time)
            : s.type === "setTargetAtTime"
            ? t.setTargetAtTime(s.value, s.time, s.constant)
            : t[s.type](s.value, s.time);
        }),
        this
      );
    }
    setParam(t) {
      B(
        this._swappable,
        "The Param must be assigned as 'swappable' in the constructor"
      );
      let e = this.input;
      return (
        e.disconnect(this._param),
        this.apply(t),
        (this._param = t),
        e.connect(this._param),
        this
      );
    }
    dispose() {
      return super.dispose(), this._events.dispose(), this;
    }
    get defaultValue() {
      return this._toType(this._param.defaultValue);
    }
    _exponentialApproach(t, e, o, s, n) {
      return o + (e - o) * Math.exp(-(n - t) / s);
    }
    _linearInterpolate(t, e, o, s, n) {
      return e + (s - e) * ((n - t) / (o - t));
    }
    _exponentialInterpolate(t, e, o, s, n) {
      return e * Math.pow(s / e, (n - t) / (o - t));
    }
  };
  var I = class r extends lt {
    constructor() {
      super(...arguments),
        (this.name = "ToneAudioNode"),
        (this._internalChannels = []);
    }
    get numberOfInputs() {
      return Z(this.input)
        ? fe(this.input) || this.input instanceof H
          ? 1
          : this.input.numberOfInputs
        : 0;
    }
    get numberOfOutputs() {
      return Z(this.output) ? this.output.numberOfOutputs : 0;
    }
    _isAudioNode(t) {
      return Z(t) && (t instanceof r || Ne(t));
    }
    _getInternalNodes() {
      let t = this._internalChannels.slice(0);
      return (
        this._isAudioNode(this.input) && t.push(this.input),
        this._isAudioNode(this.output) &&
          this.input !== this.output &&
          t.push(this.output),
        t
      );
    }
    _setChannelProperties(t) {
      this._getInternalNodes().forEach((o) => {
        (o.channelCount = t.channelCount),
          (o.channelCountMode = t.channelCountMode),
          (o.channelInterpretation = t.channelInterpretation);
      });
    }
    _getChannelProperties() {
      let t = this._getInternalNodes();
      B(t.length > 0, "ToneAudioNode does not have any internal nodes");
      let e = t[0];
      return {
        channelCount: e.channelCount,
        channelCountMode: e.channelCountMode,
        channelInterpretation: e.channelInterpretation
      };
    }
    get channelCount() {
      return this._getChannelProperties().channelCount;
    }
    set channelCount(t) {
      let e = this._getChannelProperties();
      this._setChannelProperties(Object.assign(e, { channelCount: t }));
    }
    get channelCountMode() {
      return this._getChannelProperties().channelCountMode;
    }
    set channelCountMode(t) {
      let e = this._getChannelProperties();
      this._setChannelProperties(Object.assign(e, { channelCountMode: t }));
    }
    get channelInterpretation() {
      return this._getChannelProperties().channelInterpretation;
    }
    set channelInterpretation(t) {
      let e = this._getChannelProperties();
      this._setChannelProperties(
        Object.assign(e, { channelInterpretation: t })
      );
    }
    connect(t, e = 0, o = 0) {
      return jt(this, t, e, o), this;
    }
    toDestination() {
      return this.connect(this.context.destination), this;
    }
    toMaster() {
      return (
        Fr("toMaster() has been renamed toDestination()"), this.toDestination()
      );
    }
    disconnect(t, e = 0, o = 0) {
      return Vu(this, t, e, o), this;
    }
    chain(...t) {
      return _e(this, ...t), this;
    }
    fan(...t) {
      return t.forEach((e) => this.connect(e)), this;
    }
    dispose() {
      return (
        super.dispose(),
        Z(this.input) &&
          (this.input instanceof r
            ? this.input.dispose()
            : Ne(this.input) && this.input.disconnect()),
        Z(this.output) &&
          (this.output instanceof r
            ? this.output.dispose()
            : Ne(this.output) && this.output.disconnect()),
        (this._internalChannels = []),
        this
      );
    }
  };
  function _e(...r) {
    let t = r.shift();
    r.reduce(
      (e, o) => (e instanceof I ? e.connect(o) : Ne(e) && jt(e, o), o),
      t
    );
  }
  function jt(r, t, e = 0, o = 0) {
    for (
      B(Z(r), "Cannot connect from undefined node"),
        B(Z(t), "Cannot connect to undefined node"),
        (t instanceof I || Ne(t)) &&
          B(t.numberOfInputs > 0, "Cannot connect to node with no inputs"),
        B(r.numberOfOutputs > 0, "Cannot connect from node with no outputs");
      t instanceof I || t instanceof H;

    )
      Z(t.input) && (t = t.input);
    for (; r instanceof I; ) Z(r.output) && (r = r.output);
    fe(t) ? r.connect(t, e) : r.connect(t, e, o);
  }
  function Vu(r, t, e = 0, o = 0) {
    if (Z(t)) for (; t instanceof I; ) t = t.input;
    for (; !Ne(r); ) Z(r.output) && (r = r.output);
    fe(t) ? r.disconnect(t, e) : Ne(t) ? r.disconnect(t, e, o) : r.disconnect();
  }
  var z = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["gain", "units"])),
        (this.name = "Gain"),
        (this._gainNode = this.context.createGain()),
        (this.input = this._gainNode),
        (this.output = this._gainNode);
      let t = g(r.getDefaults(), arguments, ["gain", "units"]);
      (this.gain = new H({
        context: this.context,
        convert: t.convert,
        param: this._gainNode.gain,
        units: t.units,
        value: t.gain,
        minValue: t.minValue,
        maxValue: t.maxValue
      })),
        V(this, "gain");
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        convert: !0,
        gain: 1,
        units: "gain"
      });
    }
    dispose() {
      return (
        super.dispose(), this._gainNode.disconnect(), this.gain.dispose(), this
      );
    }
  };
  var xe = class extends I {
    constructor(t) {
      super(t),
        (this.onended = Q),
        (this._startTime = -1),
        (this._stopTime = -1),
        (this._timeout = -1),
        (this.output = new z({ context: this.context, gain: 0 })),
        (this._gainNode = this.output),
        (this.getStateAtTime = function (e) {
          let o = this.toSeconds(e);
          return this._startTime !== -1 &&
            o >= this._startTime &&
            (this._stopTime === -1 || o <= this._stopTime)
            ? "started"
            : "stopped";
        }),
        (this._fadeIn = t.fadeIn),
        (this._fadeOut = t.fadeOut),
        (this._curve = t.curve),
        (this.onended = t.onended);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        curve: "linear",
        fadeIn: 0,
        fadeOut: 0,
        onended: Q
      });
    }
    _startGain(t, e = 1) {
      B(this._startTime === -1, "Source cannot be started more than once");
      let o = this.toSeconds(this._fadeIn);
      return (
        (this._startTime = t + o),
        (this._startTime = Math.max(this._startTime, this.context.currentTime)),
        o > 0
          ? (this._gainNode.gain.setValueAtTime(0, t),
            this._curve === "linear"
              ? this._gainNode.gain.linearRampToValueAtTime(e, t + o)
              : this._gainNode.gain.exponentialApproachValueAtTime(e, t, o))
          : this._gainNode.gain.setValueAtTime(e, t),
        this
      );
    }
    stop(t) {
      return this.log("stop", t), this._stopGain(this.toSeconds(t)), this;
    }
    _stopGain(t) {
      B(this._startTime !== -1, "'start' must be called before 'stop'"),
        this.cancelStop();
      let e = this.toSeconds(this._fadeOut);
      return (
        (this._stopTime = this.toSeconds(t) + e),
        (this._stopTime = Math.max(this._stopTime, this.context.currentTime)),
        e > 0
          ? this._curve === "linear"
            ? this._gainNode.gain.linearRampTo(0, e, t)
            : this._gainNode.gain.targetRampTo(0, e, t)
          : (this._gainNode.gain.cancelAndHoldAtTime(t),
            this._gainNode.gain.setValueAtTime(0, t)),
        this.context.clearTimeout(this._timeout),
        (this._timeout = this.context.setTimeout(() => {
          let o = this._curve === "exponential" ? e * 2 : 0;
          this._stopSource(this.now() + o), this._onended();
        }, this._stopTime - this.context.currentTime)),
        this
      );
    }
    _onended() {
      if (
        this.onended !== Q &&
        (this.onended(this), (this.onended = Q), !this.context.isOffline)
      ) {
        let t = () => this.dispose();
        typeof window.requestIdleCallback < "u"
          ? window.requestIdleCallback(t)
          : setTimeout(t, 1e3);
      }
    }
    get state() {
      return this.getStateAtTime(this.now());
    }
    cancelStop() {
      return (
        this.log("cancelStop"),
        B(this._startTime !== -1, "Source is not started"),
        this._gainNode.gain.cancelScheduledValues(
          this._startTime + this.sampleTime
        ),
        this.context.clearTimeout(this._timeout),
        (this._stopTime = -1),
        this
      );
    }
    dispose() {
      return super.dispose(), this._gainNode.disconnect(), this;
    }
  };
  var wo = class r extends xe {
    constructor() {
      super(g(r.getDefaults(), arguments, ["offset"])),
        (this.name = "ToneConstantSource"),
        (this._source = this.context.createConstantSource());
      let t = g(r.getDefaults(), arguments, ["offset"]);
      jt(this._source, this._gainNode),
        (this.offset = new H({
          context: this.context,
          convert: t.convert,
          param: this._source.offset,
          units: t.units,
          value: t.offset,
          minValue: t.minValue,
          maxValue: t.maxValue
        }));
    }
    static getDefaults() {
      return Object.assign(xe.getDefaults(), {
        convert: !0,
        offset: 1,
        units: "number"
      });
    }
    start(t) {
      let e = this.toSeconds(t);
      return (
        this.log("start", e), this._startGain(e), this._source.start(e), this
      );
    }
    _stopSource(t) {
      this._source.stop(t);
    }
    dispose() {
      return (
        super.dispose(),
        this.state === "started" && this.stop(),
        this._source.disconnect(),
        this.offset.dispose(),
        this
      );
    }
  };
  var X = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["value", "units"])),
        (this.name = "Signal"),
        (this.override = !0);
      let t = g(r.getDefaults(), arguments, ["value", "units"]);
      (this.output = this._constantSource =
        new wo({
          context: this.context,
          convert: t.convert,
          offset: t.value,
          units: t.units,
          minValue: t.minValue,
          maxValue: t.maxValue
        })),
        this._constantSource.start(0),
        (this.input = this._param = this._constantSource.offset);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        convert: !0,
        units: "number",
        value: 0
      });
    }
    connect(t, e = 0, o = 0) {
      return Lr(this, t, e, o), this;
    }
    dispose() {
      return (
        super.dispose(),
        this._param.dispose(),
        this._constantSource.dispose(),
        this
      );
    }
    setValueAtTime(t, e) {
      return this._param.setValueAtTime(t, e), this;
    }
    getValueAtTime(t) {
      return this._param.getValueAtTime(t);
    }
    setRampPoint(t) {
      return this._param.setRampPoint(t), this;
    }
    linearRampToValueAtTime(t, e) {
      return this._param.linearRampToValueAtTime(t, e), this;
    }
    exponentialRampToValueAtTime(t, e) {
      return this._param.exponentialRampToValueAtTime(t, e), this;
    }
    exponentialRampTo(t, e, o) {
      return this._param.exponentialRampTo(t, e, o), this;
    }
    linearRampTo(t, e, o) {
      return this._param.linearRampTo(t, e, o), this;
    }
    targetRampTo(t, e, o) {
      return this._param.targetRampTo(t, e, o), this;
    }
    exponentialApproachValueAtTime(t, e, o) {
      return this._param.exponentialApproachValueAtTime(t, e, o), this;
    }
    setTargetAtTime(t, e, o) {
      return this._param.setTargetAtTime(t, e, o), this;
    }
    setValueCurveAtTime(t, e, o, s) {
      return this._param.setValueCurveAtTime(t, e, o, s), this;
    }
    cancelScheduledValues(t) {
      return this._param.cancelScheduledValues(t), this;
    }
    cancelAndHoldAtTime(t) {
      return this._param.cancelAndHoldAtTime(t), this;
    }
    rampTo(t, e, o) {
      return this._param.rampTo(t, e, o), this;
    }
    get value() {
      return this._param.value;
    }
    set value(t) {
      this._param.value = t;
    }
    get convert() {
      return this._param.convert;
    }
    set convert(t) {
      this._param.convert = t;
    }
    get units() {
      return this._param.units;
    }
    get overridden() {
      return this._param.overridden;
    }
    set overridden(t) {
      this._param.overridden = t;
    }
    get maxValue() {
      return this._param.maxValue;
    }
    get minValue() {
      return this._param.minValue;
    }
    apply(t) {
      return this._param.apply(t), this;
    }
  };
  function Lr(r, t, e, o) {
    (t instanceof H || fe(t) || (t instanceof X && t.override)) &&
      (t.cancelScheduledValues(0),
      t.setValueAtTime(0, 0),
      t instanceof X && (t.overridden = !0)),
      jt(r, t, e, o);
  }
  var ss = class r extends H {
    constructor() {
      super(g(r.getDefaults(), arguments, ["value"])),
        (this.name = "TickParam"),
        (this._events = new Mt(1 / 0)),
        (this._multiplier = 1);
      let t = g(r.getDefaults(), arguments, ["value"]);
      (this._multiplier = t.multiplier),
        this._events.cancel(0),
        this._events.add({
          ticks: 0,
          time: 0,
          type: "setValueAtTime",
          value: this._fromType(t.value)
        }),
        this.setValueAtTime(t.value, 0);
    }
    static getDefaults() {
      return Object.assign(H.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    setTargetAtTime(t, e, o) {
      (e = this.toSeconds(e)), this.setRampPoint(e);
      let s = this._fromType(t),
        n = this._events.get(e),
        a = Math.round(Math.max(1 / o, 1));
      for (let i = 0; i <= a; i++) {
        let c = o * i + e,
          u = this._exponentialApproach(n.time, n.value, s, o, c);
        this.linearRampToValueAtTime(this._toType(u), c);
      }
      return this;
    }
    setValueAtTime(t, e) {
      let o = this.toSeconds(e);
      super.setValueAtTime(t, e);
      let s = this._events.get(o),
        n = this._events.previousEvent(s),
        a = this._getTicksUntilEvent(n, o);
      return (s.ticks = Math.max(a, 0)), this;
    }
    linearRampToValueAtTime(t, e) {
      let o = this.toSeconds(e);
      super.linearRampToValueAtTime(t, e);
      let s = this._events.get(o),
        n = this._events.previousEvent(s),
        a = this._getTicksUntilEvent(n, o);
      return (s.ticks = Math.max(a, 0)), this;
    }
    exponentialRampToValueAtTime(t, e) {
      e = this.toSeconds(e);
      let o = this._fromType(t),
        s = this._events.get(e),
        n = Math.round(Math.max((e - s.time) * 10, 1)),
        a = (e - s.time) / n;
      for (let i = 0; i <= n; i++) {
        let c = a * i + s.time,
          u = this._exponentialInterpolate(s.time, s.value, e, o, c);
        this.linearRampToValueAtTime(this._toType(u), c);
      }
      return this;
    }
    _getTicksUntilEvent(t, e) {
      if (t === null)
        t = { ticks: 0, time: 0, type: "setValueAtTime", value: 0 };
      else if (Tt(t.ticks)) {
        let a = this._events.previousEvent(t);
        t.ticks = this._getTicksUntilEvent(a, t.time);
      }
      let o = this._fromType(this.getValueAtTime(t.time)),
        s = this._fromType(this.getValueAtTime(e)),
        n = this._events.get(e);
      return (
        n &&
          n.time === e &&
          n.type === "setValueAtTime" &&
          (s = this._fromType(this.getValueAtTime(e - this.sampleTime))),
        0.5 * (e - t.time) * (o + s) + t.ticks
      );
    }
    getTicksAtTime(t) {
      let e = this.toSeconds(t),
        o = this._events.get(e);
      return Math.max(this._getTicksUntilEvent(o, e), 0);
    }
    getDurationOfTicks(t, e) {
      let o = this.toSeconds(e),
        s = this.getTicksAtTime(e);
      return this.getTimeOfTick(s + t) - o;
    }
    getTimeOfTick(t) {
      let e = this._events.get(t, "ticks"),
        o = this._events.getAfter(t, "ticks");
      if (e && e.ticks === t) return e.time;
      if (
        e &&
        o &&
        o.type === "linearRampToValueAtTime" &&
        e.value !== o.value
      ) {
        let s = this._fromType(this.getValueAtTime(e.time)),
          a =
            (this._fromType(this.getValueAtTime(o.time)) - s) /
            (o.time - e.time),
          i = Math.sqrt(Math.pow(s, 2) - 2 * a * (e.ticks - t)),
          c = (-s + i) / a,
          u = (-s - i) / a;
        return (c > 0 ? c : u) + e.time;
      } else
        return e
          ? e.value === 0
            ? 1 / 0
            : e.time + (t - e.ticks) / e.value
          : t / this._initialValue;
    }
    ticksToTime(t, e) {
      return this.getDurationOfTicks(t, e);
    }
    timeToTicks(t, e) {
      let o = this.toSeconds(e),
        s = this.toSeconds(t),
        n = this.getTicksAtTime(o);
      return this.getTicksAtTime(o + s) - n;
    }
    _fromType(t) {
      return this.units === "bpm" && this.multiplier
        ? 1 / (60 / t / this.multiplier)
        : super._fromType(t);
    }
    _toType(t) {
      return this.units === "bpm" && this.multiplier
        ? (t / this.multiplier) * 60
        : super._toType(t);
    }
    get multiplier() {
      return this._multiplier;
    }
    set multiplier(t) {
      let e = this.value;
      (this._multiplier = t),
        this.cancelScheduledValues(0),
        this.setValueAtTime(e, 0);
    }
  };
  var ns = class r extends X {
    constructor() {
      super(g(r.getDefaults(), arguments, ["value"])),
        (this.name = "TickSignal");
      let t = g(r.getDefaults(), arguments, ["value"]);
      this.input = this._param = new ss({
        context: this.context,
        convert: t.convert,
        multiplier: t.multiplier,
        param: this._constantSource.offset,
        units: t.units,
        value: t.value
      });
    }
    static getDefaults() {
      return Object.assign(X.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    ticksToTime(t, e) {
      return this._param.ticksToTime(t, e);
    }
    timeToTicks(t, e) {
      return this._param.timeToTicks(t, e);
    }
    getTimeOfTick(t) {
      return this._param.getTimeOfTick(t);
    }
    getDurationOfTicks(t, e) {
      return this._param.getDurationOfTicks(t, e);
    }
    getTicksAtTime(t) {
      return this._param.getTicksAtTime(t);
    }
    get multiplier() {
      return this._param.multiplier;
    }
    set multiplier(t) {
      this._param.multiplier = t;
    }
    dispose() {
      return super.dispose(), this._param.dispose(), this;
    }
  };
  var is = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["frequency"])),
        (this.name = "TickSource"),
        (this._state = new ge()),
        (this._tickOffset = new Mt());
      let t = g(r.getDefaults(), arguments, ["frequency"]);
      (this.frequency = new ns({
        context: this.context,
        units: t.units,
        value: t.frequency
      })),
        V(this, "frequency"),
        this._state.setStateAtTime("stopped", 0),
        this.setTicksAtTime(0, 0);
    }
    static getDefaults() {
      return Object.assign({ frequency: 1, units: "hertz" }, lt.getDefaults());
    }
    get state() {
      return this.getStateAtTime(this.now());
    }
    start(t, e) {
      let o = this.toSeconds(t);
      return (
        this._state.getValueAtTime(o) !== "started" &&
          (this._state.setStateAtTime("started", o),
          Z(e) && this.setTicksAtTime(e, o)),
        this
      );
    }
    stop(t) {
      let e = this.toSeconds(t);
      if (this._state.getValueAtTime(e) === "stopped") {
        let o = this._state.get(e);
        o &&
          o.time > 0 &&
          (this._tickOffset.cancel(o.time), this._state.cancel(o.time));
      }
      return (
        this._state.cancel(e),
        this._state.setStateAtTime("stopped", e),
        this.setTicksAtTime(0, e),
        this
      );
    }
    pause(t) {
      let e = this.toSeconds(t);
      return (
        this._state.getValueAtTime(e) === "started" &&
          this._state.setStateAtTime("paused", e),
        this
      );
    }
    cancel(t) {
      return (
        (t = this.toSeconds(t)),
        this._state.cancel(t),
        this._tickOffset.cancel(t),
        this
      );
    }
    getTicksAtTime(t) {
      let e = this.toSeconds(t),
        o = this._state.getLastState("stopped", e),
        s = { state: "paused", time: e };
      this._state.add(s);
      let n = o,
        a = 0;
      return (
        this._state.forEachBetween(o.time, e + this.sampleTime, (i) => {
          let c = n.time,
            u = this._tickOffset.get(i.time);
          u && u.time >= n.time && ((a = u.ticks), (c = u.time)),
            n.state === "started" &&
              i.state !== "started" &&
              (a +=
                this.frequency.getTicksAtTime(i.time) -
                this.frequency.getTicksAtTime(c)),
            (n = i);
        }),
        this._state.remove(s),
        a
      );
    }
    get ticks() {
      return this.getTicksAtTime(this.now());
    }
    set ticks(t) {
      this.setTicksAtTime(t, this.now());
    }
    get seconds() {
      return this.getSecondsAtTime(this.now());
    }
    set seconds(t) {
      let e = this.now(),
        o = this.frequency.timeToTicks(t, e);
      this.setTicksAtTime(o, e);
    }
    getSecondsAtTime(t) {
      t = this.toSeconds(t);
      let e = this._state.getLastState("stopped", t),
        o = { state: "paused", time: t };
      this._state.add(o);
      let s = e,
        n = 0;
      return (
        this._state.forEachBetween(e.time, t + this.sampleTime, (a) => {
          let i = s.time,
            c = this._tickOffset.get(a.time);
          c && c.time >= s.time && ((n = c.seconds), (i = c.time)),
            s.state === "started" && a.state !== "started" && (n += a.time - i),
            (s = a);
        }),
        this._state.remove(o),
        n
      );
    }
    setTicksAtTime(t, e) {
      return (
        (e = this.toSeconds(e)),
        this._tickOffset.cancel(e),
        this._tickOffset.add({
          seconds: this.frequency.getDurationOfTicks(t, e),
          ticks: t,
          time: e
        }),
        this
      );
    }
    getStateAtTime(t) {
      return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
    }
    getTimeOfTick(t, e = this.now()) {
      let o = this._tickOffset.get(e),
        s = this._state.get(e),
        n = Math.max(o.time, s.time),
        a = this.frequency.getTicksAtTime(n) + t - o.ticks;
      return this.frequency.getTimeOfTick(a);
    }
    forEachTickBetween(t, e, o) {
      let s = this._state.get(t);
      this._state.forEachBetween(t, e, (a) => {
        s &&
          s.state === "started" &&
          a.state !== "started" &&
          this.forEachTickBetween(
            Math.max(s.time, t),
            a.time - this.sampleTime,
            o
          ),
          (s = a);
      });
      let n = null;
      if (s && s.state === "started") {
        let a = Math.max(s.time, t),
          i = this.frequency.getTicksAtTime(a),
          c = this.frequency.getTicksAtTime(s.time),
          u = i - c,
          l = Math.ceil(u) - u;
        l = Lt(l, 1) ? 0 : l;
        let h = this.frequency.getTimeOfTick(i + l);
        for (; h < e; ) {
          try {
            o(h, Math.round(this.getTicksAtTime(h)));
          } catch (f) {
            n = f;
            break;
          }
          h += this.frequency.getDurationOfTicks(1, h);
        }
      }
      if (n) throw n;
      return this;
    }
    dispose() {
      return (
        super.dispose(),
        this._state.dispose(),
        this._tickOffset.dispose(),
        this.frequency.dispose(),
        this
      );
    }
  };
  var Wr = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["callback", "frequency"])),
        (this.name = "Clock"),
        (this.callback = Q),
        (this._lastUpdate = 0),
        (this._state = new ge("stopped")),
        (this._boundLoop = this._loop.bind(this));
      let t = g(r.getDefaults(), arguments, ["callback", "frequency"]);
      (this.callback = t.callback),
        (this._tickSource = new is({
          context: this.context,
          frequency: t.frequency,
          units: t.units
        })),
        (this._lastUpdate = 0),
        (this.frequency = this._tickSource.frequency),
        V(this, "frequency"),
        this._state.setStateAtTime("stopped", 0),
        this.context.on("tick", this._boundLoop);
    }
    static getDefaults() {
      return Object.assign(lt.getDefaults(), {
        callback: Q,
        frequency: 1,
        units: "hertz"
      });
    }
    get state() {
      return this._state.getValueAtTime(this.now());
    }
    start(t, e) {
      Yo(this.context);
      let o = this.toSeconds(t);
      return (
        this.log("start", o),
        this._state.getValueAtTime(o) !== "started" &&
          (this._state.setStateAtTime("started", o),
          this._tickSource.start(o, e),
          o < this._lastUpdate && this.emit("start", o, e)),
        this
      );
    }
    stop(t) {
      let e = this.toSeconds(t);
      return (
        this.log("stop", e),
        this._state.cancel(e),
        this._state.setStateAtTime("stopped", e),
        this._tickSource.stop(e),
        e < this._lastUpdate && this.emit("stop", e),
        this
      );
    }
    pause(t) {
      let e = this.toSeconds(t);
      return (
        this._state.getValueAtTime(e) === "started" &&
          (this._state.setStateAtTime("paused", e),
          this._tickSource.pause(e),
          e < this._lastUpdate && this.emit("pause", e)),
        this
      );
    }
    get ticks() {
      return Math.ceil(this.getTicksAtTime(this.now()));
    }
    set ticks(t) {
      this._tickSource.ticks = t;
    }
    get seconds() {
      return this._tickSource.seconds;
    }
    set seconds(t) {
      this._tickSource.seconds = t;
    }
    getSecondsAtTime(t) {
      return this._tickSource.getSecondsAtTime(t);
    }
    setTicksAtTime(t, e) {
      return this._tickSource.setTicksAtTime(t, e), this;
    }
    getTimeOfTick(t, e = this.now()) {
      return this._tickSource.getTimeOfTick(t, e);
    }
    getTicksAtTime(t) {
      return this._tickSource.getTicksAtTime(t);
    }
    nextTickTime(t, e) {
      let o = this.toSeconds(e),
        s = this.getTicksAtTime(o);
      return this._tickSource.getTimeOfTick(s + t, o);
    }
    _loop() {
      let t = this._lastUpdate,
        e = this.now();
      (this._lastUpdate = e),
        this.log("loop", t, e),
        t !== e &&
          (this._state.forEachBetween(t, e, (o) => {
            switch (o.state) {
              case "started":
                let s = this._tickSource.getTicksAtTime(o.time);
                this.emit("start", o.time, s);
                break;
              case "stopped":
                o.time !== 0 && this.emit("stop", o.time);
                break;
              case "paused":
                this.emit("pause", o.time);
                break;
            }
          }),
          this._tickSource.forEachTickBetween(t, e, (o, s) => {
            this.callback(o, s);
          }));
    }
    getStateAtTime(t) {
      let e = this.toSeconds(t);
      return this._state.getValueAtTime(e);
    }
    dispose() {
      return (
        super.dispose(),
        this.context.off("tick", this._boundLoop),
        this._tickSource.dispose(),
        this._state.dispose(),
        this
      );
    }
  };
  He.mixin(Wr);
  var jr = class r extends Ot {
    constructor() {
      super(),
        (this.name = "ToneAudioBuffers"),
        (this._buffers = new Map()),
        (this._loadingCount = 0);
      let t = g(
        r.getDefaults(),
        arguments,
        ["urls", "onload", "baseUrl"],
        "urls"
      );
      (this.baseUrl = t.baseUrl),
        Object.keys(t.urls).forEach((e) => {
          this._loadingCount++;
          let o = t.urls[e];
          this.add(e, o, this._bufferLoaded.bind(this, t.onload), t.onerror);
        });
    }
    static getDefaults() {
      return { baseUrl: "", onerror: Q, onload: Q, urls: {} };
    }
    has(t) {
      return this._buffers.has(t.toString());
    }
    get(t) {
      return (
        B(this.has(t), `ToneAudioBuffers has no buffer named: ${t}`),
        this._buffers.get(t.toString())
      );
    }
    _bufferLoaded(t) {
      this._loadingCount--, this._loadingCount === 0 && t && t();
    }
    get loaded() {
      return Array.from(this._buffers).every(([t, e]) => e.loaded);
    }
    add(t, e, o = Q, s = Q) {
      return (
        Et(e)
          ? this._buffers.set(t.toString(), new kt(this.baseUrl + e, o, s))
          : this._buffers.set(t.toString(), new kt(e, o, s)),
        this
      );
    }
    dispose() {
      return (
        super.dispose(),
        this._buffers.forEach((t) => t.dispose()),
        this._buffers.clear(),
        this
      );
    }
  };
  var gt = class extends se {
    constructor() {
      super(...arguments), (this.name = "Ticks"), (this.defaultUnits = "i");
    }
    _now() {
      return this.context.transport.ticks;
    }
    _beatsToUnits(t) {
      return this._getPPQ() * t;
    }
    _secondsToUnits(t) {
      return Math.floor((t / (60 / this._getBpm())) * this._getPPQ());
    }
    _ticksToUnits(t) {
      return t;
    }
    toTicks() {
      return this.valueOf();
    }
    toSeconds() {
      return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
    }
  };
  var un = class extends lt {
    constructor() {
      super(...arguments),
        (this.name = "Draw"),
        (this.expiration = 0.25),
        (this.anticipation = 0.008),
        (this._events = new Mt()),
        (this._boundDrawLoop = this._drawLoop.bind(this)),
        (this._animationFrame = -1);
    }
    schedule(t, e) {
      return (
        this._events.add({ callback: t, time: this.toSeconds(e) }),
        this._events.length === 1 &&
          (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)),
        this
      );
    }
    cancel(t) {
      return this._events.cancel(this.toSeconds(t)), this;
    }
    _drawLoop() {
      let t = this.context.currentTime;
      for (
        ;
        this._events.length &&
        this._events.peek().time - this.anticipation <= t;

      ) {
        let e = this._events.shift();
        e && t - e.time <= this.expiration && e.callback();
      }
      this._events.length > 0 &&
        (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
    }
    dispose() {
      return (
        super.dispose(),
        this._events.dispose(),
        cancelAnimationFrame(this._animationFrame),
        this
      );
    }
  };
  Xe((r) => {
    r.draw = new un({ context: r });
  });
  Ye((r) => {
    r.draw.dispose();
  });
  var as = class extends Ot {
      constructor() {
        super(...arguments),
          (this.name = "IntervalTimeline"),
          (this._root = null),
          (this._length = 0);
      }
      add(t) {
        B(Z(t.time), "Events must have a time property"),
          B(Z(t.duration), "Events must have a duration parameter"),
          (t.time = t.time.valueOf());
        let e = new ln(t.time, t.time + t.duration, t);
        for (
          this._root === null ? (this._root = e) : this._root.insert(e),
            this._length++;
          e !== null;

        )
          e.updateHeight(), e.updateMax(), this._rebalance(e), (e = e.parent);
        return this;
      }
      remove(t) {
        if (this._root !== null) {
          let e = [];
          this._root.search(t.time, e);
          for (let o of e)
            if (o.event === t) {
              this._removeNode(o), this._length--;
              break;
            }
        }
        return this;
      }
      get length() {
        return this._length;
      }
      cancel(t) {
        return this.forEachFrom(t, (e) => this.remove(e)), this;
      }
      _setRoot(t) {
        (this._root = t), this._root !== null && (this._root.parent = null);
      }
      _replaceNodeInParent(t, e) {
        t.parent !== null
          ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
            this._rebalance(t.parent))
          : this._setRoot(e);
      }
      _removeNode(t) {
        if (t.left === null && t.right === null)
          this._replaceNodeInParent(t, null);
        else if (t.right === null) this._replaceNodeInParent(t, t.left);
        else if (t.left === null) this._replaceNodeInParent(t, t.right);
        else {
          let e = t.getBalance(),
            o,
            s = null;
          if (e > 0)
            if (t.left.right === null)
              (o = t.left), (o.right = t.right), (s = o);
            else {
              for (o = t.left.right; o.right !== null; ) o = o.right;
              o.parent &&
                ((o.parent.right = o.left),
                (s = o.parent),
                (o.left = t.left),
                (o.right = t.right));
            }
          else if (t.right.left === null)
            (o = t.right), (o.left = t.left), (s = o);
          else {
            for (o = t.right.left; o.left !== null; ) o = o.left;
            o.parent &&
              ((o.parent.left = o.right),
              (s = o.parent),
              (o.left = t.left),
              (o.right = t.right));
          }
          t.parent !== null
            ? t.isLeftChild()
              ? (t.parent.left = o)
              : (t.parent.right = o)
            : this._setRoot(o),
            s && this._rebalance(s);
        }
        t.dispose();
      }
      _rotateLeft(t) {
        let e = t.parent,
          o = t.isLeftChild(),
          s = t.right;
        s && ((t.right = s.left), (s.left = t)),
          e !== null ? (o ? (e.left = s) : (e.right = s)) : this._setRoot(s);
      }
      _rotateRight(t) {
        let e = t.parent,
          o = t.isLeftChild(),
          s = t.left;
        s && ((t.left = s.right), (s.right = t)),
          e !== null ? (o ? (e.left = s) : (e.right = s)) : this._setRoot(s);
      }
      _rebalance(t) {
        let e = t.getBalance();
        e > 1 && t.left
          ? t.left.getBalance() < 0
            ? this._rotateLeft(t.left)
            : this._rotateRight(t)
          : e < -1 &&
            t.right &&
            (t.right.getBalance() > 0
              ? this._rotateRight(t.right)
              : this._rotateLeft(t));
      }
      get(t) {
        if (this._root !== null) {
          let e = [];
          if ((this._root.search(t, e), e.length > 0)) {
            let o = e[0];
            for (let s = 1; s < e.length; s++) e[s].low > o.low && (o = e[s]);
            return o.event;
          }
        }
        return null;
      }
      forEach(t) {
        if (this._root !== null) {
          let e = [];
          this._root.traverse((o) => e.push(o)),
            e.forEach((o) => {
              o.event && t(o.event);
            });
        }
        return this;
      }
      forEachAtTime(t, e) {
        if (this._root !== null) {
          let o = [];
          this._root.search(t, o),
            o.forEach((s) => {
              s.event && e(s.event);
            });
        }
        return this;
      }
      forEachFrom(t, e) {
        if (this._root !== null) {
          let o = [];
          this._root.searchAfter(t, o),
            o.forEach((s) => {
              s.event && e(s.event);
            });
        }
        return this;
      }
      dispose() {
        return (
          super.dispose(),
          this._root !== null && this._root.traverse((t) => t.dispose()),
          (this._root = null),
          this
        );
      }
    },
    ln = class {
      constructor(t, e, o) {
        (this._left = null),
          (this._right = null),
          (this.parent = null),
          (this.height = 0),
          (this.event = o),
          (this.low = t),
          (this.high = e),
          (this.max = this.high);
      }
      insert(t) {
        t.low <= this.low
          ? this.left === null
            ? (this.left = t)
            : this.left.insert(t)
          : this.right === null
          ? (this.right = t)
          : this.right.insert(t);
      }
      search(t, e) {
        t > this.max ||
          (this.left !== null && this.left.search(t, e),
          this.low <= t && this.high > t && e.push(this),
          !(this.low > t) && this.right !== null && this.right.search(t, e));
      }
      searchAfter(t, e) {
        this.low >= t &&
          (e.push(this), this.left !== null && this.left.searchAfter(t, e)),
          this.right !== null && this.right.searchAfter(t, e);
      }
      traverse(t) {
        t(this),
          this.left !== null && this.left.traverse(t),
          this.right !== null && this.right.traverse(t);
      }
      updateHeight() {
        this.left !== null && this.right !== null
          ? (this.height = Math.max(this.left.height, this.right.height) + 1)
          : this.right !== null
          ? (this.height = this.right.height + 1)
          : this.left !== null
          ? (this.height = this.left.height + 1)
          : (this.height = 0);
      }
      updateMax() {
        (this.max = this.high),
          this.left !== null && (this.max = Math.max(this.max, this.left.max)),
          this.right !== null &&
            (this.max = Math.max(this.max, this.right.max));
      }
      getBalance() {
        let t = 0;
        return (
          this.left !== null && this.right !== null
            ? (t = this.left.height - this.right.height)
            : this.left !== null
            ? (t = this.left.height + 1)
            : this.right !== null && (t = -(this.right.height + 1)),
          t
        );
      }
      isLeftChild() {
        return this.parent !== null && this.parent.left === this;
      }
      get left() {
        return this._left;
      }
      set left(t) {
        (this._left = t),
          t !== null && (t.parent = this),
          this.updateHeight(),
          this.updateMax();
      }
      get right() {
        return this._right;
      }
      set right(t) {
        (this._right = t),
          t !== null && (t.parent = this),
          this.updateHeight(),
          this.updateMax();
      }
      dispose() {
        (this.parent = null),
          (this._left = null),
          (this._right = null),
          (this.event = null);
      }
    };
  var ne = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["volume"])), (this.name = "Volume");
      let t = g(r.getDefaults(), arguments, ["volume"]);
      (this.input = this.output =
        new z({ context: this.context, gain: t.volume, units: "decibels" })),
        (this.volume = this.output.gain),
        V(this, "volume"),
        (this._unmutedVolume = t.volume),
        (this.mute = t.mute);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { mute: !1, volume: 0 });
    }
    get mute() {
      return this.volume.value === -1 / 0;
    }
    set mute(t) {
      !this.mute && t
        ? ((this._unmutedVolume = this.volume.value),
          (this.volume.value = -1 / 0))
        : this.mute && !t && (this.volume.value = this._unmutedVolume);
    }
    dispose() {
      return super.dispose(), this.input.dispose(), this.volume.dispose(), this;
    }
  };
  var hn = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments)),
        (this.name = "Destination"),
        (this.input = new ne({ context: this.context })),
        (this.output = new z({ context: this.context })),
        (this.volume = this.input.volume);
      let t = g(r.getDefaults(), arguments);
      _e(this.input, this.output, this.context.rawContext.destination),
        (this.mute = t.mute),
        (this._internalChannels = [
          this.input,
          this.context.rawContext.destination,
          this.output
        ]);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { mute: !1, volume: 0 });
    }
    get mute() {
      return this.input.mute;
    }
    set mute(t) {
      this.input.mute = t;
    }
    chain(...t) {
      return (
        this.input.disconnect(),
        t.unshift(this.input),
        t.push(this.output),
        _e(...t),
        this
      );
    }
    get maxChannelCount() {
      return this.context.rawContext.destination.maxChannelCount;
    }
    dispose() {
      return super.dispose(), this.volume.dispose(), this;
    }
  };
  Xe((r) => {
    r.destination = new hn({ context: r });
  });
  Ye((r) => {
    r.destination.dispose();
  });
  var cs = class extends Ot {
    constructor(t) {
      super(),
        (this.name = "TimelineValue"),
        (this._timeline = new Mt({ memory: 10 })),
        (this._initialValue = t);
    }
    set(t, e) {
      return this._timeline.add({ value: t, time: e }), this;
    }
    get(t) {
      let e = this._timeline.get(t);
      return e ? e.value : this._initialValue;
    }
  };
  var Re = class r {
    constructor(t, e) {
      this.id = r._eventId++;
      let o = Object.assign(r.getDefaults(), e);
      (this.transport = t),
        (this.callback = o.callback),
        (this._once = o.once),
        (this.time = o.time);
    }
    static getDefaults() {
      return { callback: Q, once: !1, time: 0 };
    }
    invoke(t) {
      this.callback &&
        (this.callback(t), this._once && this.transport.clear(this.id));
    }
    dispose() {
      return (this.callback = void 0), this;
    }
  };
  Re._eventId = 0;
  var us = class r extends Re {
    constructor(t, e) {
      super(t, e),
        (this._currentId = -1),
        (this._nextId = -1),
        (this._nextTick = this.time),
        (this._boundRestart = this._restart.bind(this));
      let o = Object.assign(r.getDefaults(), e);
      (this.duration = new gt(t.context, o.duration).valueOf()),
        (this._interval = new gt(t.context, o.interval).valueOf()),
        (this._nextTick = o.time),
        this.transport.on("start", this._boundRestart),
        this.transport.on("loopStart", this._boundRestart),
        (this.context = this.transport.context),
        this._restart();
    }
    static getDefaults() {
      return Object.assign({}, Re.getDefaults(), {
        duration: 1 / 0,
        interval: 1,
        once: !1
      });
    }
    invoke(t) {
      this._createEvents(t), super.invoke(t);
    }
    _createEvents(t) {
      let e = this.transport.getTicksAtTime(t);
      e >= this.time &&
        e >= this._nextTick &&
        this._nextTick + this._interval < this.time + this.duration &&
        ((this._nextTick += this._interval),
        (this._currentId = this._nextId),
        (this._nextId = this.transport.scheduleOnce(
          this.invoke.bind(this),
          new gt(this.context, this._nextTick).toSeconds()
        )));
    }
    _restart(t) {
      this.transport.clear(this._currentId),
        this.transport.clear(this._nextId),
        (this._nextTick = this.time);
      let e = this.transport.getTicksAtTime(t);
      e > this.time &&
        (this._nextTick =
          this.time +
          Math.ceil((e - this.time) / this._interval) * this._interval),
        (this._currentId = this.transport.scheduleOnce(
          this.invoke.bind(this),
          new gt(this.context, this._nextTick).toSeconds()
        )),
        (this._nextTick += this._interval),
        (this._nextId = this.transport.scheduleOnce(
          this.invoke.bind(this),
          new gt(this.context, this._nextTick).toSeconds()
        ));
    }
    dispose() {
      return (
        super.dispose(),
        this.transport.clear(this._currentId),
        this.transport.clear(this._nextId),
        this.transport.off("start", this._boundRestart),
        this.transport.off("loopStart", this._boundRestart),
        this
      );
    }
  };
  var ls = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments)),
        (this.name = "Transport"),
        (this._loop = new cs(!1)),
        (this._loopStart = 0),
        (this._loopEnd = 0),
        (this._scheduledEvents = {}),
        (this._timeline = new Mt()),
        (this._repeatedEvents = new as()),
        (this._syncedSignals = []),
        (this._swingAmount = 0);
      let t = g(r.getDefaults(), arguments);
      (this._ppq = t.ppq),
        (this._clock = new Wr({
          callback: this._processTick.bind(this),
          context: this.context,
          frequency: 0,
          units: "bpm"
        })),
        this._bindClockEvents(),
        (this.bpm = this._clock.frequency),
        (this._clock.frequency.multiplier = t.ppq),
        this.bpm.setValueAtTime(t.bpm, 0),
        V(this, "bpm"),
        (this._timeSignature = t.timeSignature),
        (this._swingTicks = t.ppq / 2);
    }
    static getDefaults() {
      return Object.assign(lt.getDefaults(), {
        bpm: 120,
        loopEnd: "4m",
        loopStart: 0,
        ppq: 192,
        swing: 0,
        swingSubdivision: "8n",
        timeSignature: 4
      });
    }
    _processTick(t, e) {
      if (
        (this._loop.get(t) &&
          e >= this._loopEnd &&
          (this.emit("loopEnd", t),
          this._clock.setTicksAtTime(this._loopStart, t),
          (e = this._loopStart),
          this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
          this.emit("loop", t)),
        this._swingAmount > 0 &&
          e % this._ppq !== 0 &&
          e % (this._swingTicks * 2) !== 0)
      ) {
        let o = (e % (this._swingTicks * 2)) / (this._swingTicks * 2),
          s = Math.sin(o * Math.PI) * this._swingAmount;
        t += new gt(this.context, (this._swingTicks * 2) / 3).toSeconds() * s;
      }
      this._timeline.forEachAtTime(e, (o) => o.invoke(t));
    }
    schedule(t, e) {
      let o = new Re(this, {
        callback: t,
        time: new se(this.context, e).toTicks()
      });
      return this._addEvent(o, this._timeline);
    }
    scheduleRepeat(t, e, o, s = 1 / 0) {
      let n = new us(this, {
        callback: t,
        duration: new Xt(this.context, s).toTicks(),
        interval: new Xt(this.context, e).toTicks(),
        time: new se(this.context, o).toTicks()
      });
      return this._addEvent(n, this._repeatedEvents);
    }
    scheduleOnce(t, e) {
      let o = new Re(this, {
        callback: t,
        once: !0,
        time: new se(this.context, e).toTicks()
      });
      return this._addEvent(o, this._timeline);
    }
    clear(t) {
      if (this._scheduledEvents.hasOwnProperty(t)) {
        let e = this._scheduledEvents[t.toString()];
        e.timeline.remove(e.event),
          e.event.dispose(),
          delete this._scheduledEvents[t.toString()];
      }
      return this;
    }
    _addEvent(t, e) {
      return (
        (this._scheduledEvents[t.id.toString()] = { event: t, timeline: e }),
        e.add(t),
        t.id
      );
    }
    cancel(t = 0) {
      let e = this.toTicks(t);
      return (
        this._timeline.forEachFrom(e, (o) => this.clear(o.id)),
        this._repeatedEvents.forEachFrom(e, (o) => this.clear(o.id)),
        this
      );
    }
    _bindClockEvents() {
      this._clock.on("start", (t, e) => {
        (e = new gt(this.context, e).toSeconds()), this.emit("start", t, e);
      }),
        this._clock.on("stop", (t) => {
          this.emit("stop", t);
        }),
        this._clock.on("pause", (t) => {
          this.emit("pause", t);
        });
    }
    get state() {
      return this._clock.getStateAtTime(this.now());
    }
    start(t, e) {
      let o;
      return Z(e) && (o = this.toTicks(e)), this._clock.start(t, o), this;
    }
    stop(t) {
      return this._clock.stop(t), this;
    }
    pause(t) {
      return this._clock.pause(t), this;
    }
    toggle(t) {
      return (
        (t = this.toSeconds(t)),
        this._clock.getStateAtTime(t) !== "started"
          ? this.start(t)
          : this.stop(t),
        this
      );
    }
    get timeSignature() {
      return this._timeSignature;
    }
    set timeSignature(t) {
      vt(t) && (t = (t[0] / t[1]) * 4), (this._timeSignature = t);
    }
    get loopStart() {
      return new Xt(this.context, this._loopStart, "i").toSeconds();
    }
    set loopStart(t) {
      this._loopStart = this.toTicks(t);
    }
    get loopEnd() {
      return new Xt(this.context, this._loopEnd, "i").toSeconds();
    }
    set loopEnd(t) {
      this._loopEnd = this.toTicks(t);
    }
    get loop() {
      return this._loop.get(this.now());
    }
    set loop(t) {
      this._loop.set(t, this.now());
    }
    setLoopPoints(t, e) {
      return (this.loopStart = t), (this.loopEnd = e), this;
    }
    get swing() {
      return this._swingAmount;
    }
    set swing(t) {
      this._swingAmount = t;
    }
    get swingSubdivision() {
      return new gt(this.context, this._swingTicks).toNotation();
    }
    set swingSubdivision(t) {
      this._swingTicks = this.toTicks(t);
    }
    get position() {
      let t = this.now(),
        e = this._clock.getTicksAtTime(t);
      return new gt(this.context, e).toBarsBeatsSixteenths();
    }
    set position(t) {
      let e = this.toTicks(t);
      this.ticks = e;
    }
    get seconds() {
      return this._clock.seconds;
    }
    set seconds(t) {
      let e = this.now(),
        o = this._clock.frequency.timeToTicks(t, e);
      this.ticks = o;
    }
    get progress() {
      if (this.loop) {
        let t = this.now();
        return (
          (this._clock.getTicksAtTime(t) - this._loopStart) /
          (this._loopEnd - this._loopStart)
        );
      } else return 0;
    }
    get ticks() {
      return this._clock.ticks;
    }
    set ticks(t) {
      if (this._clock.ticks !== t) {
        let e = this.now();
        if (this.state === "started") {
          let o = this._clock.getTicksAtTime(e),
            s = this._clock.frequency.getDurationOfTicks(Math.ceil(o) - o, e),
            n = e + s;
          this.emit("stop", n),
            this._clock.setTicksAtTime(t, n),
            this.emit("start", n, this._clock.getSecondsAtTime(n));
        } else this._clock.setTicksAtTime(t, e);
      }
    }
    getTicksAtTime(t) {
      return Math.round(this._clock.getTicksAtTime(t));
    }
    getSecondsAtTime(t) {
      return this._clock.getSecondsAtTime(t);
    }
    get PPQ() {
      return this._clock.frequency.multiplier;
    }
    set PPQ(t) {
      this._clock.frequency.multiplier = t;
    }
    nextSubdivision(t) {
      if (((t = this.toTicks(t)), this.state !== "started")) return 0;
      {
        let e = this.now(),
          o = this.getTicksAtTime(e),
          s = t - (o % t);
        return this._clock.nextTickTime(s, e);
      }
    }
    syncSignal(t, e) {
      if (!e) {
        let s = this.now();
        if (t.getValueAtTime(s) !== 0) {
          let a = 1 / (60 / this.bpm.getValueAtTime(s) / this.PPQ);
          e = t.getValueAtTime(s) / a;
        } else e = 0;
      }
      let o = new z(e);
      return (
        this.bpm.connect(o),
        o.connect(t._param),
        this._syncedSignals.push({ initial: t.value, ratio: o, signal: t }),
        (t.value = 0),
        this
      );
    }
    unsyncSignal(t) {
      for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
        let o = this._syncedSignals[e];
        o.signal === t &&
          (o.ratio.dispose(),
          (o.signal.value = o.initial),
          this._syncedSignals.splice(e, 1));
      }
      return this;
    }
    dispose() {
      return (
        super.dispose(),
        this._clock.dispose(),
        Pr(this, "bpm"),
        this._timeline.dispose(),
        this._repeatedEvents.dispose(),
        this
      );
    }
  };
  He.mixin(ls);
  Xe((r) => {
    r.transport = new ls({ context: r });
  });
  Ye((r) => {
    r.transport.dispose();
  });
  var nt = class extends I {
    constructor(t) {
      super(t),
        (this.input = void 0),
        (this._state = new ge("stopped")),
        (this._synced = !1),
        (this._scheduled = []),
        (this._syncedStart = Q),
        (this._syncedStop = Q),
        (this._state.memory = 100),
        (this._state.increasing = !0),
        (this._volume = this.output =
          new ne({ context: this.context, mute: t.mute, volume: t.volume })),
        (this.volume = this._volume.volume),
        V(this, "volume"),
        (this.onstop = t.onstop);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { mute: !1, onstop: Q, volume: 0 });
    }
    get state() {
      return this._synced
        ? this.context.transport.state === "started"
          ? this._state.getValueAtTime(this.context.transport.seconds)
          : "stopped"
        : this._state.getValueAtTime(this.now());
    }
    get mute() {
      return this._volume.mute;
    }
    set mute(t) {
      this._volume.mute = t;
    }
    _clampToCurrentTime(t) {
      return this._synced ? t : Math.max(t, this.context.currentTime);
    }
    start(t, e, o) {
      let s =
        Tt(t) && this._synced
          ? this.context.transport.seconds
          : this.toSeconds(t);
      if (
        ((s = this._clampToCurrentTime(s)),
        !this._synced && this._state.getValueAtTime(s) === "started")
      )
        B(
          Ir(s, this._state.get(s).time),
          "Start time must be strictly greater than previous start time"
        ),
          this._state.cancel(s),
          this._state.setStateAtTime("started", s),
          this.log("restart", s),
          this.restart(s, e, o);
      else if (
        (this.log("start", s),
        this._state.setStateAtTime("started", s),
        this._synced)
      ) {
        let n = this._state.get(s);
        n &&
          ((n.offset = this.toSeconds(zt(e, 0))),
          (n.duration = o ? this.toSeconds(o) : void 0));
        let a = this.context.transport.schedule((i) => {
          this._start(i, e, o);
        }, s);
        this._scheduled.push(a),
          this.context.transport.state === "started" &&
            this.context.transport.getSecondsAtTime(this.immediate()) > s &&
            this._syncedStart(this.now(), this.context.transport.seconds);
      } else Yo(this.context), this._start(s, e, o);
      return this;
    }
    stop(t) {
      let e =
        Tt(t) && this._synced
          ? this.context.transport.seconds
          : this.toSeconds(t);
      if (
        ((e = this._clampToCurrentTime(e)),
        this._state.getValueAtTime(e) === "started" ||
          Z(this._state.getNextState("started", e)))
      ) {
        if ((this.log("stop", e), !this._synced)) this._stop(e);
        else {
          let o = this.context.transport.schedule(this._stop.bind(this), e);
          this._scheduled.push(o);
        }
        this._state.cancel(e), this._state.setStateAtTime("stopped", e);
      }
      return this;
    }
    restart(t, e, o) {
      return (
        (t = this.toSeconds(t)),
        this._state.getValueAtTime(t) === "started" &&
          (this._state.cancel(t), this._restart(t, e, o)),
        this
      );
    }
    sync() {
      return (
        this._synced ||
          ((this._synced = !0),
          (this._syncedStart = (t, e) => {
            if (e > 0) {
              let o = this._state.get(e);
              if (o && o.state === "started" && o.time !== e) {
                let s = e - this.toSeconds(o.time),
                  n;
                o.duration && (n = this.toSeconds(o.duration) - s),
                  this._start(t, this.toSeconds(o.offset) + s, n);
              }
            }
          }),
          (this._syncedStop = (t) => {
            let e = this.context.transport.getSecondsAtTime(
              Math.max(t - this.sampleTime, 0)
            );
            this._state.getValueAtTime(e) === "started" && this._stop(t);
          }),
          this.context.transport.on("start", this._syncedStart),
          this.context.transport.on("loopStart", this._syncedStart),
          this.context.transport.on("stop", this._syncedStop),
          this.context.transport.on("pause", this._syncedStop),
          this.context.transport.on("loopEnd", this._syncedStop)),
        this
      );
    }
    unsync() {
      return (
        this._synced &&
          (this.context.transport.off("stop", this._syncedStop),
          this.context.transport.off("pause", this._syncedStop),
          this.context.transport.off("loopEnd", this._syncedStop),
          this.context.transport.off("start", this._syncedStart),
          this.context.transport.off("loopStart", this._syncedStart)),
        (this._synced = !1),
        this._scheduled.forEach((t) => this.context.transport.clear(t)),
        (this._scheduled = []),
        this._state.cancel(0),
        this._stop(0),
        this
      );
    }
    dispose() {
      return (
        super.dispose(),
        (this.onstop = Q),
        this.unsync(),
        this._volume.dispose(),
        this._state.dispose(),
        this
      );
    }
  };
  var Ie = class r extends xe {
    constructor() {
      super(g(r.getDefaults(), arguments, ["url", "onload"])),
        (this.name = "ToneBufferSource"),
        (this._source = this.context.createBufferSource()),
        (this._internalChannels = [this._source]),
        (this._sourceStarted = !1),
        (this._sourceStopped = !1);
      let t = g(r.getDefaults(), arguments, ["url", "onload"]);
      jt(this._source, this._gainNode),
        (this._source.onended = () => this._stopSource()),
        (this.playbackRate = new H({
          context: this.context,
          param: this._source.playbackRate,
          units: "positive",
          value: t.playbackRate
        })),
        (this.loop = t.loop),
        (this.loopStart = t.loopStart),
        (this.loopEnd = t.loopEnd),
        (this._buffer = new kt(t.url, t.onload, t.onerror)),
        this._internalChannels.push(this._source);
    }
    static getDefaults() {
      return Object.assign(xe.getDefaults(), {
        url: new kt(),
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        onload: Q,
        onerror: Q,
        playbackRate: 1
      });
    }
    get fadeIn() {
      return this._fadeIn;
    }
    set fadeIn(t) {
      this._fadeIn = t;
    }
    get fadeOut() {
      return this._fadeOut;
    }
    set fadeOut(t) {
      this._fadeOut = t;
    }
    get curve() {
      return this._curve;
    }
    set curve(t) {
      this._curve = t;
    }
    start(t, e, o, s = 1) {
      B(this.buffer.loaded, "buffer is either not set or not loaded");
      let n = this.toSeconds(t);
      this._startGain(n, s),
        this.loop ? (e = zt(e, this.loopStart)) : (e = zt(e, 0));
      let a = Math.max(this.toSeconds(e), 0);
      if (this.loop) {
        let i = this.toSeconds(this.loopEnd) || this.buffer.duration,
          c = this.toSeconds(this.loopStart),
          u = i - c;
        yo(a, i) && (a = ((a - c) % u) + c),
          Lt(a, this.buffer.duration) && (a = 0);
      }
      if (
        ((this._source.buffer = this.buffer.get()),
        (this._source.loopEnd =
          this.toSeconds(this.loopEnd) || this.buffer.duration),
        Jo(a, this.buffer.duration) &&
          ((this._sourceStarted = !0), this._source.start(n, a)),
        Z(o))
      ) {
        let i = this.toSeconds(o);
        (i = Math.max(i, 0)), this.stop(n + i);
      }
      return this;
    }
    _stopSource(t) {
      !this._sourceStopped &&
        this._sourceStarted &&
        ((this._sourceStopped = !0),
        this._source.stop(this.toSeconds(t)),
        this._onended());
    }
    get loopStart() {
      return this._source.loopStart;
    }
    set loopStart(t) {
      this._source.loopStart = this.toSeconds(t);
    }
    get loopEnd() {
      return this._source.loopEnd;
    }
    set loopEnd(t) {
      this._source.loopEnd = this.toSeconds(t);
    }
    get buffer() {
      return this._buffer;
    }
    set buffer(t) {
      this._buffer.set(t);
    }
    get loop() {
      return this._source.loop;
    }
    set loop(t) {
      (this._source.loop = t), this._sourceStarted && this.cancelStop();
    }
    dispose() {
      return (
        super.dispose(),
        (this._source.onended = null),
        this._source.disconnect(),
        this._buffer.dispose(),
        this.playbackRate.dispose(),
        this
      );
    }
  };
  var yV = 44100 * 5;
  function Ut(r, t) {
    return K(this, void 0, void 0, function* () {
      let e = t / r.context.sampleRate,
        o = new ke(1, e, r.context.sampleRate);
      return (
        new r.constructor(
          Object.assign(r.get(), { frequency: 2 / e, detune: 0, context: o })
        )
          .toDestination()
          .start(0),
        (yield o.render()).getChannelData(0)
      );
    });
  }
  var To = class r extends xe {
    constructor() {
      super(g(r.getDefaults(), arguments, ["frequency", "type"])),
        (this.name = "ToneOscillatorNode"),
        (this._oscillator = this.context.createOscillator()),
        (this._internalChannels = [this._oscillator]);
      let t = g(r.getDefaults(), arguments, ["frequency", "type"]);
      jt(this._oscillator, this._gainNode),
        (this.type = t.type),
        (this.frequency = new H({
          context: this.context,
          param: this._oscillator.frequency,
          units: "frequency",
          value: t.frequency
        })),
        (this.detune = new H({
          context: this.context,
          param: this._oscillator.detune,
          units: "cents",
          value: t.detune
        })),
        V(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(xe.getDefaults(), {
        detune: 0,
        frequency: 440,
        type: "sine"
      });
    }
    start(t) {
      let e = this.toSeconds(t);
      return (
        this.log("start", e),
        this._startGain(e),
        this._oscillator.start(e),
        this
      );
    }
    _stopSource(t) {
      this._oscillator.stop(t);
    }
    setPeriodicWave(t) {
      return this._oscillator.setPeriodicWave(t), this;
    }
    get type() {
      return this._oscillator.type;
    }
    set type(t) {
      this._oscillator.type = t;
    }
    dispose() {
      return (
        super.dispose(),
        this.state === "started" && this.stop(),
        this._oscillator.disconnect(),
        this.frequency.dispose(),
        this.detune.dispose(),
        this
      );
    }
  };
  var pt = class r extends nt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["frequency", "type"])),
        (this.name = "Oscillator"),
        (this._oscillator = null);
      let t = g(r.getDefaults(), arguments, ["frequency", "type"]);
      (this.frequency = new X({
        context: this.context,
        units: "frequency",
        value: t.frequency
      })),
        V(this, "frequency"),
        (this.detune = new X({
          context: this.context,
          units: "cents",
          value: t.detune
        })),
        V(this, "detune"),
        (this._partials = t.partials),
        (this._partialCount = t.partialCount),
        (this._type = t.type),
        t.partialCount &&
          t.type !== "custom" &&
          (this._type = this.baseType + t.partialCount.toString()),
        (this.phase = t.phase);
    }
    static getDefaults() {
      return Object.assign(nt.getDefaults(), {
        detune: 0,
        frequency: 440,
        partialCount: 0,
        partials: [],
        phase: 0,
        type: "sine"
      });
    }
    _start(t) {
      let e = this.toSeconds(t),
        o = new To({ context: this.context, onended: () => this.onstop(this) });
      (this._oscillator = o),
        this._wave
          ? this._oscillator.setPeriodicWave(this._wave)
          : (this._oscillator.type = this._type),
        this._oscillator.connect(this.output),
        this.frequency.connect(this._oscillator.frequency),
        this.detune.connect(this._oscillator.detune),
        this._oscillator.start(e);
    }
    _stop(t) {
      let e = this.toSeconds(t);
      this._oscillator && this._oscillator.stop(e);
    }
    _restart(t) {
      let e = this.toSeconds(t);
      return (
        this.log("restart", e),
        this._oscillator && this._oscillator.cancelStop(),
        this._state.cancel(e),
        this
      );
    }
    syncFrequency() {
      return this.context.transport.syncSignal(this.frequency), this;
    }
    unsyncFrequency() {
      return this.context.transport.unsyncSignal(this.frequency), this;
    }
    _getCachedPeriodicWave() {
      if (this._type === "custom")
        return r._periodicWaveCache.find(
          (e) => e.phase === this._phase && ku(e.partials, this._partials)
        );
      {
        let t = r._periodicWaveCache.find(
          (e) => e.type === this._type && e.phase === this._phase
        );
        return (
          (this._partialCount = t ? t.partialCount : this._partialCount), t
        );
      }
    }
    get type() {
      return this._type;
    }
    set type(t) {
      this._type = t;
      let e = ["sine", "square", "sawtooth", "triangle"].indexOf(t) !== -1;
      if (this._phase === 0 && e)
        (this._wave = void 0),
          (this._partialCount = 0),
          this._oscillator !== null && (this._oscillator.type = t);
      else {
        let o = this._getCachedPeriodicWave();
        if (Z(o)) {
          let { partials: s, wave: n } = o;
          (this._wave = n),
            (this._partials = s),
            this._oscillator !== null &&
              this._oscillator.setPeriodicWave(this._wave);
        } else {
          let [s, n] = this._getRealImaginary(t, this._phase),
            a = this.context.createPeriodicWave(s, n);
          (this._wave = a),
            this._oscillator !== null &&
              this._oscillator.setPeriodicWave(this._wave),
            r._periodicWaveCache.push({
              imag: n,
              partialCount: this._partialCount,
              partials: this._partials,
              phase: this._phase,
              real: s,
              type: this._type,
              wave: this._wave
            }),
            r._periodicWaveCache.length > 100 && r._periodicWaveCache.shift();
        }
      }
    }
    get baseType() {
      return this._type.replace(this.partialCount.toString(), "");
    }
    set baseType(t) {
      this.partialCount && this._type !== "custom" && t !== "custom"
        ? (this.type = t + this.partialCount)
        : (this.type = t);
    }
    get partialCount() {
      return this._partialCount;
    }
    set partialCount(t) {
      Nt(t, 0);
      let e = this._type,
        o = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
      if ((o && (e = o[1]), this._type !== "custom"))
        t === 0 ? (this.type = e) : (this.type = e + t.toString());
      else {
        let s = new Float32Array(t);
        this._partials.forEach((n, a) => (s[a] = n)),
          (this._partials = Array.from(s)),
          (this.type = this._type);
      }
    }
    _getRealImaginary(t, e) {
      let s = 2048,
        n = new Float32Array(s),
        a = new Float32Array(s),
        i = 1;
      if (t === "custom") {
        if (
          ((i = this._partials.length + 1),
          (this._partialCount = this._partials.length),
          (s = i),
          this._partials.length === 0)
        )
          return [n, a];
      } else {
        let c = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
        c
          ? ((i = parseInt(c[2], 10) + 1),
            (this._partialCount = parseInt(c[2], 10)),
            (t = c[1]),
            (i = Math.max(i, 2)),
            (s = i))
          : (this._partialCount = 0),
          (this._partials = []);
      }
      for (let c = 1; c < s; ++c) {
        let u = 2 / (c * Math.PI),
          l;
        switch (t) {
          case "sine":
            (l = c <= i ? 1 : 0), (this._partials[c - 1] = l);
            break;
          case "square":
            (l = c & 1 ? 2 * u : 0), (this._partials[c - 1] = l);
            break;
          case "sawtooth":
            (l = u * (c & 1 ? 1 : -1)), (this._partials[c - 1] = l);
            break;
          case "triangle":
            c & 1 ? (l = 2 * (u * u) * (((c - 1) >> 1) & 1 ? -1 : 1)) : (l = 0),
              (this._partials[c - 1] = l);
            break;
          case "custom":
            l = this._partials[c - 1];
            break;
          default:
            throw new TypeError("Oscillator: invalid type: " + t);
        }
        l !== 0
          ? ((n[c] = -l * Math.sin(e * c)), (a[c] = l * Math.cos(e * c)))
          : ((n[c] = 0), (a[c] = 0));
      }
      return [n, a];
    }
    _inverseFFT(t, e, o) {
      let s = 0,
        n = t.length;
      for (let a = 0; a < n; a++)
        s += t[a] * Math.cos(a * o) + e[a] * Math.sin(a * o);
      return s;
    }
    getInitialValue() {
      let [t, e] = this._getRealImaginary(this._type, 0),
        o = 0,
        s = Math.PI * 2,
        n = 32;
      for (let a = 0; a < n; a++)
        o = Math.max(this._inverseFFT(t, e, (a / n) * s), o);
      return sn(-this._inverseFFT(t, e, this._phase) / o, -1, 1);
    }
    get partials() {
      return this._partials.slice(0, this.partialCount);
    }
    set partials(t) {
      (this._partials = t),
        (this._partialCount = this._partials.length),
        t.length && (this.type = "custom");
    }
    get phase() {
      return this._phase * (180 / Math.PI);
    }
    set phase(t) {
      (this._phase = (t * Math.PI) / 180), (this.type = this._type);
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this._oscillator !== null && this._oscillator.dispose(),
        (this._wave = void 0),
        this.frequency.dispose(),
        this.detune.dispose(),
        this
      );
    }
  };
  pt._periodicWaveCache = [];
  var Yt = class r extends I {
    constructor() {
      super(Object.assign(g(r.getDefaults(), arguments, ["context"])));
    }
    connect(t, e = 0, o = 0) {
      return Lr(this, t, e, o), this;
    }
  };
  var ie = class r extends Yt {
    constructor() {
      super(
        Object.assign(g(r.getDefaults(), arguments, ["mapping", "length"]))
      ),
        (this.name = "WaveShaper"),
        (this._shaper = this.context.createWaveShaper()),
        (this.input = this._shaper),
        (this.output = this._shaper);
      let t = g(r.getDefaults(), arguments, ["mapping", "length"]);
      vt(t.mapping) || t.mapping instanceof Float32Array
        ? (this.curve = Float32Array.from(t.mapping))
        : Su(t.mapping) && this.setMap(t.mapping, t.length);
    }
    static getDefaults() {
      return Object.assign(X.getDefaults(), { length: 1024 });
    }
    setMap(t, e = 1024) {
      let o = new Float32Array(e);
      for (let s = 0, n = e; s < n; s++) {
        let a = (s / (n - 1)) * 2 - 1;
        o[s] = t(a, s);
      }
      return (this.curve = o), this;
    }
    get curve() {
      return this._shaper.curve;
    }
    set curve(t) {
      this._shaper.curve = t;
    }
    get oversample() {
      return this._shaper.oversample;
    }
    set oversample(t) {
      let e = ["none", "2x", "4x"].some((o) => o.includes(t));
      B(e, "oversampling must be either 'none', '2x', or '4x'"),
        (this._shaper.oversample = t);
    }
    dispose() {
      return super.dispose(), this._shaper.disconnect(), this;
    }
  };
  var Br = class extends Yt {
    constructor() {
      super(...arguments),
        (this.name = "AudioToGain"),
        (this._norm = new ie({
          context: this.context,
          mapping: (t) => (t + 1) / 2
        })),
        (this.input = this._norm),
        (this.output = this._norm);
    }
    dispose() {
      return super.dispose(), this._norm.dispose(), this;
    }
  };
  var bt = class r extends X {
    constructor() {
      super(Object.assign(g(r.getDefaults(), arguments, ["value"]))),
        (this.name = "Multiply"),
        (this.override = !1);
      let t = g(r.getDefaults(), arguments, ["value"]);
      (this._mult =
        this.input =
        this.output =
          new z({
            context: this.context,
            minValue: t.minValue,
            maxValue: t.maxValue
          })),
        (this.factor = this._param = this._mult.gain),
        this.factor.setValueAtTime(t.value, 0);
    }
    static getDefaults() {
      return Object.assign(X.getDefaults(), { value: 0 });
    }
    dispose() {
      return super.dispose(), this._mult.dispose(), this;
    }
  };
  var bo = class r extends nt {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["frequency", "type", "modulationType"])
      ),
        (this.name = "AMOscillator"),
        (this._modulationScale = new Br({ context: this.context })),
        (this._modulationNode = new z({ context: this.context }));
      let t = g(r.getDefaults(), arguments, [
        "frequency",
        "type",
        "modulationType"
      ]);
      (this._carrier = new pt({
        context: this.context,
        detune: t.detune,
        frequency: t.frequency,
        onstop: () => this.onstop(this),
        phase: t.phase,
        type: t.type
      })),
        (this.frequency = this._carrier.frequency),
        (this.detune = this._carrier.detune),
        (this._modulator = new pt({
          context: this.context,
          phase: t.phase,
          type: t.modulationType
        })),
        (this.harmonicity = new bt({
          context: this.context,
          units: "positive",
          value: t.harmonicity
        })),
        this.frequency.chain(this.harmonicity, this._modulator.frequency),
        this._modulator.chain(this._modulationScale, this._modulationNode.gain),
        this._carrier.chain(this._modulationNode, this.output),
        V(this, ["frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
      return Object.assign(pt.getDefaults(), {
        harmonicity: 1,
        modulationType: "square"
      });
    }
    _start(t) {
      this._modulator.start(t), this._carrier.start(t);
    }
    _stop(t) {
      this._modulator.stop(t), this._carrier.stop(t);
    }
    _restart(t) {
      this._modulator.restart(t), this._carrier.restart(t);
    }
    get type() {
      return this._carrier.type;
    }
    set type(t) {
      this._carrier.type = t;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(t) {
      this._carrier.baseType = t;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(t) {
      this._carrier.partialCount = t;
    }
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(t) {
      this._modulator.type = t;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(t) {
      (this._carrier.phase = t), (this._modulator.phase = t);
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(t) {
      this._carrier.partials = t;
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this.frequency.dispose(),
        this.detune.dispose(),
        this.harmonicity.dispose(),
        this._carrier.dispose(),
        this._modulator.dispose(),
        this._modulationNode.dispose(),
        this._modulationScale.dispose(),
        this
      );
    }
  };
  var Gr = class r extends nt {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["frequency", "type", "modulationType"])
      ),
        (this.name = "FMOscillator"),
        (this._modulationNode = new z({ context: this.context, gain: 0 }));
      let t = g(r.getDefaults(), arguments, [
        "frequency",
        "type",
        "modulationType"
      ]);
      (this._carrier = new pt({
        context: this.context,
        detune: t.detune,
        frequency: 0,
        onstop: () => this.onstop(this),
        phase: t.phase,
        type: t.type
      })),
        (this.detune = this._carrier.detune),
        (this.frequency = new X({
          context: this.context,
          units: "frequency",
          value: t.frequency
        })),
        (this._modulator = new pt({
          context: this.context,
          phase: t.phase,
          type: t.modulationType
        })),
        (this.harmonicity = new bt({
          context: this.context,
          units: "positive",
          value: t.harmonicity
        })),
        (this.modulationIndex = new bt({
          context: this.context,
          units: "positive",
          value: t.modulationIndex
        })),
        this.frequency.connect(this._carrier.frequency),
        this.frequency.chain(this.harmonicity, this._modulator.frequency),
        this.frequency.chain(this.modulationIndex, this._modulationNode),
        this._modulator.connect(this._modulationNode.gain),
        this._modulationNode.connect(this._carrier.frequency),
        this._carrier.connect(this.output),
        this.detune.connect(this._modulator.detune),
        V(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
      return Object.assign(pt.getDefaults(), {
        harmonicity: 1,
        modulationIndex: 2,
        modulationType: "square"
      });
    }
    _start(t) {
      this._modulator.start(t), this._carrier.start(t);
    }
    _stop(t) {
      this._modulator.stop(t), this._carrier.stop(t);
    }
    _restart(t) {
      return this._modulator.restart(t), this._carrier.restart(t), this;
    }
    get type() {
      return this._carrier.type;
    }
    set type(t) {
      this._carrier.type = t;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(t) {
      this._carrier.baseType = t;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(t) {
      this._carrier.partialCount = t;
    }
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(t) {
      this._modulator.type = t;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(t) {
      (this._carrier.phase = t), (this._modulator.phase = t);
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(t) {
      this._carrier.partials = t;
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this.frequency.dispose(),
        this.harmonicity.dispose(),
        this._carrier.dispose(),
        this._modulator.dispose(),
        this._modulationNode.dispose(),
        this.modulationIndex.dispose(),
        this
      );
    }
  };
  var ur = class r extends nt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["frequency", "width"])),
        (this.name = "PulseOscillator"),
        (this._widthGate = new z({ context: this.context, gain: 0 })),
        (this._thresh = new ie({
          context: this.context,
          mapping: (e) => (e <= 0 ? -1 : 1)
        }));
      let t = g(r.getDefaults(), arguments, ["frequency", "width"]);
      (this.width = new X({
        context: this.context,
        units: "audioRange",
        value: t.width
      })),
        (this._triangle = new pt({
          context: this.context,
          detune: t.detune,
          frequency: t.frequency,
          onstop: () => this.onstop(this),
          phase: t.phase,
          type: "triangle"
        })),
        (this.frequency = this._triangle.frequency),
        (this.detune = this._triangle.detune),
        this._triangle.chain(this._thresh, this.output),
        this.width.chain(this._widthGate, this._thresh),
        V(this, ["width", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(nt.getDefaults(), {
        detune: 0,
        frequency: 440,
        phase: 0,
        type: "pulse",
        width: 0.2
      });
    }
    _start(t) {
      (t = this.toSeconds(t)),
        this._triangle.start(t),
        this._widthGate.gain.setValueAtTime(1, t);
    }
    _stop(t) {
      (t = this.toSeconds(t)),
        this._triangle.stop(t),
        this._widthGate.gain.cancelScheduledValues(t),
        this._widthGate.gain.setValueAtTime(0, t);
    }
    _restart(t) {
      this._triangle.restart(t),
        this._widthGate.gain.cancelScheduledValues(t),
        this._widthGate.gain.setValueAtTime(1, t);
    }
    get phase() {
      return this._triangle.phase;
    }
    set phase(t) {
      this._triangle.phase = t;
    }
    get type() {
      return "pulse";
    }
    get baseType() {
      return "pulse";
    }
    get partials() {
      return [];
    }
    get partialCount() {
      return 0;
    }
    set carrierType(t) {
      this._triangle.type = t;
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this._triangle.dispose(),
        this.width.dispose(),
        this._widthGate.dispose(),
        this._thresh.dispose(),
        this
      );
    }
  };
  var So = class r extends nt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["frequency", "type", "spread"])),
        (this.name = "FatOscillator"),
        (this._oscillators = []);
      let t = g(r.getDefaults(), arguments, ["frequency", "type", "spread"]);
      (this.frequency = new X({
        context: this.context,
        units: "frequency",
        value: t.frequency
      })),
        (this.detune = new X({
          context: this.context,
          units: "cents",
          value: t.detune
        })),
        (this._spread = t.spread),
        (this._type = t.type),
        (this._phase = t.phase),
        (this._partials = t.partials),
        (this._partialCount = t.partialCount),
        (this.count = t.count),
        V(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(pt.getDefaults(), {
        count: 3,
        spread: 20,
        type: "sawtooth"
      });
    }
    _start(t) {
      (t = this.toSeconds(t)), this._forEach((e) => e.start(t));
    }
    _stop(t) {
      (t = this.toSeconds(t)), this._forEach((e) => e.stop(t));
    }
    _restart(t) {
      this._forEach((e) => e.restart(t));
    }
    _forEach(t) {
      for (let e = 0; e < this._oscillators.length; e++)
        t(this._oscillators[e], e);
    }
    get type() {
      return this._type;
    }
    set type(t) {
      (this._type = t), this._forEach((e) => (e.type = t));
    }
    get spread() {
      return this._spread;
    }
    set spread(t) {
      if (((this._spread = t), this._oscillators.length > 1)) {
        let e = -t / 2,
          o = t / (this._oscillators.length - 1);
        this._forEach((s, n) => (s.detune.value = e + o * n));
      }
    }
    get count() {
      return this._oscillators.length;
    }
    set count(t) {
      if ((Nt(t, 1), this._oscillators.length !== t)) {
        this._forEach((e) => e.dispose()), (this._oscillators = []);
        for (let e = 0; e < t; e++) {
          let o = new pt({
            context: this.context,
            volume: -6 - t * 1.1,
            type: this._type,
            phase: this._phase + (e / t) * 360,
            partialCount: this._partialCount,
            onstop: e === 0 ? () => this.onstop(this) : Q
          });
          this.type === "custom" && (o.partials = this._partials),
            this.frequency.connect(o.frequency),
            this.detune.connect(o.detune),
            (o.detune.overridden = !1),
            o.connect(this.output),
            (this._oscillators[e] = o);
        }
        (this.spread = this._spread),
          this.state === "started" && this._forEach((e) => e.start());
      }
    }
    get phase() {
      return this._phase;
    }
    set phase(t) {
      (this._phase = t),
        this._forEach(
          (e, o) => (e.phase = this._phase + (o / this.count) * 360)
        );
    }
    get baseType() {
      return this._oscillators[0].baseType;
    }
    set baseType(t) {
      this._forEach((e) => (e.baseType = t)),
        (this._type = this._oscillators[0].type);
    }
    get partials() {
      return this._oscillators[0].partials;
    }
    set partials(t) {
      (this._partials = t),
        (this._partialCount = this._partials.length),
        t.length &&
          ((this._type = "custom"), this._forEach((e) => (e.partials = t)));
    }
    get partialCount() {
      return this._oscillators[0].partialCount;
    }
    set partialCount(t) {
      (this._partialCount = t),
        this._forEach((e) => (e.partialCount = t)),
        (this._type = this._oscillators[0].type);
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this.frequency.dispose(),
        this.detune.dispose(),
        this._forEach((t) => t.dispose()),
        this
      );
    }
  };
  var Ao = class r extends nt {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["frequency", "modulationFrequency"])
      ),
        (this.name = "PWMOscillator"),
        (this.sourceType = "pwm"),
        (this._scale = new bt({ context: this.context, value: 2 }));
      let t = g(r.getDefaults(), arguments, [
        "frequency",
        "modulationFrequency"
      ]);
      (this._pulse = new ur({
        context: this.context,
        frequency: t.modulationFrequency
      })),
        (this._pulse.carrierType = "sine"),
        (this.modulationFrequency = this._pulse.frequency),
        (this._modulator = new pt({
          context: this.context,
          detune: t.detune,
          frequency: t.frequency,
          onstop: () => this.onstop(this),
          phase: t.phase
        })),
        (this.frequency = this._modulator.frequency),
        (this.detune = this._modulator.detune),
        this._modulator.chain(this._scale, this._pulse.width),
        this._pulse.connect(this.output),
        V(this, ["modulationFrequency", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(nt.getDefaults(), {
        detune: 0,
        frequency: 440,
        modulationFrequency: 0.4,
        phase: 0,
        type: "pwm"
      });
    }
    _start(t) {
      (t = this.toSeconds(t)), this._modulator.start(t), this._pulse.start(t);
    }
    _stop(t) {
      (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
    }
    _restart(t) {
      this._modulator.restart(t), this._pulse.restart(t);
    }
    get type() {
      return "pwm";
    }
    get baseType() {
      return "pwm";
    }
    get partials() {
      return [];
    }
    get partialCount() {
      return 0;
    }
    get phase() {
      return this._modulator.phase;
    }
    set phase(t) {
      this._modulator.phase = t;
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        return Ut(this, t);
      });
    }
    dispose() {
      return (
        super.dispose(),
        this._pulse.dispose(),
        this._scale.dispose(),
        this._modulator.dispose(),
        this
      );
    }
  };
  var Lu = { am: bo, fat: So, fm: Gr, oscillator: pt, pulse: ur, pwm: Ao },
    lr = class r extends nt {
      constructor() {
        super(g(r.getDefaults(), arguments, ["frequency", "type"])),
          (this.name = "OmniOscillator");
        let t = g(r.getDefaults(), arguments, ["frequency", "type"]);
        (this.frequency = new X({
          context: this.context,
          units: "frequency",
          value: t.frequency
        })),
          (this.detune = new X({
            context: this.context,
            units: "cents",
            value: t.detune
          })),
          V(this, ["frequency", "detune"]),
          this.set(t);
      }
      static getDefaults() {
        return Object.assign(
          pt.getDefaults(),
          Gr.getDefaults(),
          bo.getDefaults(),
          So.getDefaults(),
          ur.getDefaults(),
          Ao.getDefaults()
        );
      }
      _start(t) {
        this._oscillator.start(t);
      }
      _stop(t) {
        this._oscillator.stop(t);
      }
      _restart(t) {
        return this._oscillator.restart(t), this;
      }
      get type() {
        let t = "";
        return (
          ["am", "fm", "fat"].some((e) => this._sourceType === e) &&
            (t = this._sourceType),
          t + this._oscillator.type
        );
      }
      set type(t) {
        t.substr(0, 2) === "fm"
          ? (this._createNewOscillator("fm"),
            (this._oscillator = this._oscillator),
            (this._oscillator.type = t.substr(2)))
          : t.substr(0, 2) === "am"
          ? (this._createNewOscillator("am"),
            (this._oscillator = this._oscillator),
            (this._oscillator.type = t.substr(2)))
          : t.substr(0, 3) === "fat"
          ? (this._createNewOscillator("fat"),
            (this._oscillator = this._oscillator),
            (this._oscillator.type = t.substr(3)))
          : t === "pwm"
          ? (this._createNewOscillator("pwm"),
            (this._oscillator = this._oscillator))
          : t === "pulse"
          ? this._createNewOscillator("pulse")
          : (this._createNewOscillator("oscillator"),
            (this._oscillator = this._oscillator),
            (this._oscillator.type = t));
      }
      get partials() {
        return this._oscillator.partials;
      }
      set partials(t) {
        !this._getOscType(this._oscillator, "pulse") &&
          !this._getOscType(this._oscillator, "pwm") &&
          (this._oscillator.partials = t);
      }
      get partialCount() {
        return this._oscillator.partialCount;
      }
      set partialCount(t) {
        !this._getOscType(this._oscillator, "pulse") &&
          !this._getOscType(this._oscillator, "pwm") &&
          (this._oscillator.partialCount = t);
      }
      set(t) {
        return (
          Reflect.has(t, "type") && t.type && (this.type = t.type),
          super.set(t),
          this
        );
      }
      _createNewOscillator(t) {
        if (t !== this._sourceType) {
          this._sourceType = t;
          let e = Lu[t],
            o = this.now();
          if (this._oscillator) {
            let s = this._oscillator;
            s.stop(o),
              this.context.setTimeout(() => s.dispose(), this.blockTime);
          }
          (this._oscillator = new e({ context: this.context })),
            this.frequency.connect(this._oscillator.frequency),
            this.detune.connect(this._oscillator.detune),
            this._oscillator.connect(this.output),
            (this._oscillator.onstop = () => this.onstop(this)),
            this.state === "started" && this._oscillator.start(o);
        }
      }
      get phase() {
        return this._oscillator.phase;
      }
      set phase(t) {
        this._oscillator.phase = t;
      }
      get sourceType() {
        return this._sourceType;
      }
      set sourceType(t) {
        let e = "sine";
        this._oscillator.type !== "pwm" &&
          this._oscillator.type !== "pulse" &&
          (e = this._oscillator.type),
          t === "fm"
            ? (this.type = "fm" + e)
            : t === "am"
            ? (this.type = "am" + e)
            : t === "fat"
            ? (this.type = "fat" + e)
            : t === "oscillator"
            ? (this.type = e)
            : t === "pulse"
            ? (this.type = "pulse")
            : t === "pwm" && (this.type = "pwm");
      }
      _getOscType(t, e) {
        return t instanceof Lu[e];
      }
      get baseType() {
        return this._oscillator.baseType;
      }
      set baseType(t) {
        !this._getOscType(this._oscillator, "pulse") &&
          !this._getOscType(this._oscillator, "pwm") &&
          t !== "pulse" &&
          t !== "pwm" &&
          (this._oscillator.baseType = t);
      }
      get width() {
        if (this._getOscType(this._oscillator, "pulse"))
          return this._oscillator.width;
      }
      get count() {
        if (this._getOscType(this._oscillator, "fat"))
          return this._oscillator.count;
      }
      set count(t) {
        this._getOscType(this._oscillator, "fat") &&
          It(t) &&
          (this._oscillator.count = t);
      }
      get spread() {
        if (this._getOscType(this._oscillator, "fat"))
          return this._oscillator.spread;
      }
      set spread(t) {
        this._getOscType(this._oscillator, "fat") &&
          It(t) &&
          (this._oscillator.spread = t);
      }
      get modulationType() {
        if (
          this._getOscType(this._oscillator, "fm") ||
          this._getOscType(this._oscillator, "am")
        )
          return this._oscillator.modulationType;
      }
      set modulationType(t) {
        (this._getOscType(this._oscillator, "fm") ||
          this._getOscType(this._oscillator, "am")) &&
          Et(t) &&
          (this._oscillator.modulationType = t);
      }
      get modulationIndex() {
        if (this._getOscType(this._oscillator, "fm"))
          return this._oscillator.modulationIndex;
      }
      get harmonicity() {
        if (
          this._getOscType(this._oscillator, "fm") ||
          this._getOscType(this._oscillator, "am")
        )
          return this._oscillator.harmonicity;
      }
      get modulationFrequency() {
        if (this._getOscType(this._oscillator, "pwm"))
          return this._oscillator.modulationFrequency;
      }
      asArray(t = 1024) {
        return K(this, void 0, void 0, function* () {
          return Ut(this, t);
        });
      }
      dispose() {
        return (
          super.dispose(),
          this.detune.dispose(),
          this.frequency.dispose(),
          this._oscillator.dispose(),
          this
        );
      }
    };
  function ps(r, t = 1 / 0) {
    let e = new WeakMap();
    return function (o, s) {
      Reflect.defineProperty(o, s, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return e.get(this);
        },
        set: function (n) {
          Nt(n, r, t), e.set(this, n);
        }
      });
    };
  }
  function Zt(r, t = 1 / 0) {
    let e = new WeakMap();
    return function (o, s) {
      Reflect.defineProperty(o, s, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return e.get(this);
        },
        set: function (n) {
          Nt(this.toSeconds(n), r, t), e.set(this, n);
        }
      });
    };
  }
  var Co = class r extends nt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["url", "onload"])),
        (this.name = "Player"),
        (this._activeSources = new Set());
      let t = g(r.getDefaults(), arguments, ["url", "onload"]);
      (this._buffer = new kt({
        onload: this._onload.bind(this, t.onload),
        onerror: t.onerror,
        reverse: t.reverse,
        url: t.url
      })),
        (this.autostart = t.autostart),
        (this._loop = t.loop),
        (this._loopStart = t.loopStart),
        (this._loopEnd = t.loopEnd),
        (this._playbackRate = t.playbackRate),
        (this.fadeIn = t.fadeIn),
        (this.fadeOut = t.fadeOut);
    }
    static getDefaults() {
      return Object.assign(nt.getDefaults(), {
        autostart: !1,
        fadeIn: 0,
        fadeOut: 0,
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        onload: Q,
        onerror: Q,
        playbackRate: 1,
        reverse: !1
      });
    }
    load(t) {
      return K(this, void 0, void 0, function* () {
        return yield this._buffer.load(t), this._onload(), this;
      });
    }
    _onload(t = Q) {
      t(), this.autostart && this.start();
    }
    _onSourceEnd(t) {
      this.onstop(this),
        this._activeSources.delete(t),
        this._activeSources.size === 0 &&
          !this._synced &&
          this._state.getValueAtTime(this.now()) === "started" &&
          (this._state.cancel(this.now()),
          this._state.setStateAtTime("stopped", this.now()));
    }
    start(t, e, o) {
      return super.start(t, e, o), this;
    }
    _start(t, e, o) {
      this._loop ? (e = zt(e, this._loopStart)) : (e = zt(e, 0));
      let s = this.toSeconds(e),
        n = o;
      o = zt(o, Math.max(this._buffer.duration - s, 0));
      let a = this.toSeconds(o);
      (a = a / this._playbackRate), (t = this.toSeconds(t));
      let i = new Ie({
        url: this._buffer,
        context: this.context,
        fadeIn: this.fadeIn,
        fadeOut: this.fadeOut,
        loop: this._loop,
        loopEnd: this._loopEnd,
        loopStart: this._loopStart,
        onended: this._onSourceEnd.bind(this),
        playbackRate: this._playbackRate
      }).connect(this.output);
      !this._loop &&
        !this._synced &&
        (this._state.cancel(t + a),
        this._state.setStateAtTime("stopped", t + a, { implicitEnd: !0 })),
        this._activeSources.add(i),
        this._loop && Tt(n)
          ? i.start(t, s)
          : i.start(t, s, a - this.toSeconds(this.fadeOut));
    }
    _stop(t) {
      let e = this.toSeconds(t);
      this._activeSources.forEach((o) => o.stop(e));
    }
    restart(t, e, o) {
      return super.restart(t, e, o), this;
    }
    _restart(t, e, o) {
      this._stop(t), this._start(t, e, o);
    }
    seek(t, e) {
      let o = this.toSeconds(e);
      if (this._state.getValueAtTime(o) === "started") {
        let s = this.toSeconds(t);
        this._stop(o), this._start(o, s);
      }
      return this;
    }
    setLoopPoints(t, e) {
      return (this.loopStart = t), (this.loopEnd = e), this;
    }
    get loopStart() {
      return this._loopStart;
    }
    set loopStart(t) {
      (this._loopStart = t),
        this.buffer.loaded && Nt(this.toSeconds(t), 0, this.buffer.duration),
        this._activeSources.forEach((e) => {
          e.loopStart = t;
        });
    }
    get loopEnd() {
      return this._loopEnd;
    }
    set loopEnd(t) {
      (this._loopEnd = t),
        this.buffer.loaded && Nt(this.toSeconds(t), 0, this.buffer.duration),
        this._activeSources.forEach((e) => {
          e.loopEnd = t;
        });
    }
    get buffer() {
      return this._buffer;
    }
    set buffer(t) {
      this._buffer.set(t);
    }
    get loop() {
      return this._loop;
    }
    set loop(t) {
      if (
        this._loop !== t &&
        ((this._loop = t),
        this._activeSources.forEach((e) => {
          e.loop = t;
        }),
        t)
      ) {
        let e = this._state.getNextState("stopped", this.now());
        e && this._state.cancel(e.time);
      }
    }
    get playbackRate() {
      return this._playbackRate;
    }
    set playbackRate(t) {
      this._playbackRate = t;
      let e = this.now(),
        o = this._state.getNextState("stopped", e);
      o &&
        o.implicitEnd &&
        (this._state.cancel(o.time),
        this._activeSources.forEach((s) => s.cancelStop())),
        this._activeSources.forEach((s) => {
          s.playbackRate.setValueAtTime(t, e);
        });
    }
    get reverse() {
      return this._buffer.reverse;
    }
    set reverse(t) {
      this._buffer.reverse = t;
    }
    get loaded() {
      return this._buffer.loaded;
    }
    dispose() {
      return (
        super.dispose(),
        this._activeSources.forEach((t) => t.dispose()),
        this._activeSources.clear(),
        this._buffer.dispose(),
        this
      );
    }
  };
  qt([Zt(0)], Co.prototype, "fadeIn", void 0);
  qt([Zt(0)], Co.prototype, "fadeOut", void 0);
  var Bt = class r extends I {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])
      ),
        (this.name = "Envelope"),
        (this._sig = new X({ context: this.context, value: 0 })),
        (this.output = this._sig),
        (this.input = void 0);
      let t = g(r.getDefaults(), arguments, [
        "attack",
        "decay",
        "sustain",
        "release"
      ]);
      (this.attack = t.attack),
        (this.decay = t.decay),
        (this.sustain = t.sustain),
        (this.release = t.release),
        (this.attackCurve = t.attackCurve),
        (this.releaseCurve = t.releaseCurve),
        (this.decayCurve = t.decayCurve);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        attack: 0.01,
        attackCurve: "linear",
        decay: 0.1,
        decayCurve: "exponential",
        release: 1,
        releaseCurve: "exponential",
        sustain: 0.5
      });
    }
    get value() {
      return this.getValueAtTime(this.now());
    }
    _getCurve(t, e) {
      if (Et(t)) return t;
      {
        let o;
        for (o in ms) if (ms[o][e] === t) return o;
        return t;
      }
    }
    _setCurve(t, e, o) {
      if (Et(o) && Reflect.has(ms, o)) {
        let s = ms[o];
        me(s) ? t !== "_decayCurve" && (this[t] = s[e]) : (this[t] = s);
      } else if (vt(o) && t !== "_decayCurve") this[t] = o;
      else throw new Error("Envelope: invalid curve: " + o);
    }
    get attackCurve() {
      return this._getCurve(this._attackCurve, "In");
    }
    set attackCurve(t) {
      this._setCurve("_attackCurve", "In", t);
    }
    get releaseCurve() {
      return this._getCurve(this._releaseCurve, "Out");
    }
    set releaseCurve(t) {
      this._setCurve("_releaseCurve", "Out", t);
    }
    get decayCurve() {
      return this._decayCurve;
    }
    set decayCurve(t) {
      B(
        ["linear", "exponential"].some((e) => e === t),
        `Invalid envelope curve: ${t}`
      ),
        (this._decayCurve = t);
    }
    triggerAttack(t, e = 1) {
      this.log("triggerAttack", t, e), (t = this.toSeconds(t));
      let s = this.toSeconds(this.attack),
        n = this.toSeconds(this.decay),
        a = this.getValueAtTime(t);
      if (a > 0) {
        let i = 1 / s;
        s = (1 - a) / i;
      }
      if (s < this.sampleTime)
        this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
      else if (this._attackCurve === "linear") this._sig.linearRampTo(e, s, t);
      else if (this._attackCurve === "exponential")
        this._sig.targetRampTo(e, s, t);
      else {
        this._sig.cancelAndHoldAtTime(t);
        let i = this._attackCurve;
        for (let c = 1; c < i.length; c++)
          if (i[c - 1] <= a && a <= i[c]) {
            (i = this._attackCurve.slice(c)), (i[0] = a);
            break;
          }
        this._sig.setValueCurveAtTime(i, t, s, e);
      }
      if (n && this.sustain < 1) {
        let i = e * this.sustain,
          c = t + s;
        this.log("decay", c),
          this._decayCurve === "linear"
            ? this._sig.linearRampToValueAtTime(i, n + c)
            : this._sig.exponentialApproachValueAtTime(i, c, n);
      }
      return this;
    }
    triggerRelease(t) {
      this.log("triggerRelease", t), (t = this.toSeconds(t));
      let e = this.getValueAtTime(t);
      if (e > 0) {
        let o = this.toSeconds(this.release);
        o < this.sampleTime
          ? this._sig.setValueAtTime(0, t)
          : this._releaseCurve === "linear"
          ? this._sig.linearRampTo(0, o, t)
          : this._releaseCurve === "exponential"
          ? this._sig.targetRampTo(0, o, t)
          : (B(
              vt(this._releaseCurve),
              "releaseCurve must be either 'linear', 'exponential' or an array"
            ),
            this._sig.cancelAndHoldAtTime(t),
            this._sig.setValueCurveAtTime(this._releaseCurve, t, o, e));
      }
      return this;
    }
    getValueAtTime(t) {
      return this._sig.getValueAtTime(t);
    }
    triggerAttackRelease(t, e, o = 1) {
      return (
        (e = this.toSeconds(e)),
        this.triggerAttack(e, o),
        this.triggerRelease(e + this.toSeconds(t)),
        this
      );
    }
    cancel(t) {
      return this._sig.cancelScheduledValues(this.toSeconds(t)), this;
    }
    connect(t, e = 0, o = 0) {
      return Lr(this, t, e, o), this;
    }
    asArray(t = 1024) {
      return K(this, void 0, void 0, function* () {
        let e = t / this.context.sampleRate,
          o = new ke(1, e, this.context.sampleRate),
          s = this.toSeconds(this.attack) + this.toSeconds(this.decay),
          n = s + this.toSeconds(this.release),
          a = n * 0.1,
          i = n + a,
          c = new this.constructor(
            Object.assign(this.get(), {
              attack: (e * this.toSeconds(this.attack)) / i,
              decay: (e * this.toSeconds(this.decay)) / i,
              release: (e * this.toSeconds(this.release)) / i,
              context: o
            })
          );
        return (
          c._sig.toDestination(),
          c.triggerAttackRelease((e * (s + a)) / i, 0),
          (yield o.render()).getChannelData(0)
        );
      });
    }
    dispose() {
      return super.dispose(), this._sig.dispose(), this;
    }
  };
  qt([Zt(0)], Bt.prototype, "attack", void 0);
  qt([Zt(0)], Bt.prototype, "decay", void 0);
  qt([ps(0, 1)], Bt.prototype, "sustain", void 0);
  qt([Zt(0)], Bt.prototype, "release", void 0);
  var ms = (() => {
    let t,
      e,
      o = [];
    for (t = 0; t < 128; t++) o[t] = Math.sin((t / (128 - 1)) * (Math.PI / 2));
    let s = [],
      n = 6.4;
    for (t = 0; t < 128 - 1; t++) {
      e = t / (128 - 1);
      let f = Math.sin(e * (Math.PI * 2) * n - Math.PI / 2) + 1;
      s[t] = f / 10 + e * 0.83;
    }
    s[128 - 1] = 1;
    let a = [],
      i = 5;
    for (t = 0; t < 128; t++) a[t] = Math.ceil((t / (128 - 1)) * i) / i;
    let c = [];
    for (t = 0; t < 128; t++)
      (e = t / (128 - 1)), (c[t] = 0.5 * (1 - Math.cos(Math.PI * e)));
    let u = [];
    for (t = 0; t < 128; t++) {
      e = t / (128 - 1);
      let f = Math.pow(e, 3) * 4 + 0.2,
        m = Math.cos(f * Math.PI * 2 * e);
      u[t] = Math.abs(m * (1 - e));
    }
    function l(f) {
      let m = new Array(f.length);
      for (let p = 0; p < f.length; p++) m[p] = 1 - f[p];
      return m;
    }
    function h(f) {
      return f.slice(0).reverse();
    }
    return {
      bounce: { In: l(u), Out: u },
      cosine: { In: o, Out: h(o) },
      exponential: "exponential",
      linear: "linear",
      ripple: { In: s, Out: l(s) },
      sine: { In: c, Out: l(c) },
      step: { In: a, Out: l(a) }
    };
  })();
  var ye = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments)),
        (this._scheduledEvents = []),
        (this._synced = !1),
        (this._original_triggerAttack = this.triggerAttack),
        (this._original_triggerRelease = this.triggerRelease);
      let t = g(r.getDefaults(), arguments);
      (this._volume = this.output =
        new ne({ context: this.context, volume: t.volume })),
        (this.volume = this._volume.volume),
        V(this, "volume");
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { volume: 0 });
    }
    sync() {
      return (
        this._syncState() &&
          (this._syncMethod("triggerAttack", 1),
          this._syncMethod("triggerRelease", 0)),
        this
      );
    }
    _syncState() {
      let t = !1;
      return this._synced || ((this._synced = !0), (t = !0)), t;
    }
    _syncMethod(t, e) {
      let o = (this["_original_" + t] = this[t]);
      this[t] = (...s) => {
        let n = s[e],
          a = this.context.transport.schedule((i) => {
            (s[e] = i), o.apply(this, s);
          }, n);
        this._scheduledEvents.push(a);
      };
    }
    unsync() {
      return (
        this._scheduledEvents.forEach((t) => this.context.transport.clear(t)),
        (this._scheduledEvents = []),
        this._synced &&
          ((this._synced = !1),
          (this.triggerAttack = this._original_triggerAttack),
          (this.triggerRelease = this._original_triggerRelease)),
        this
      );
    }
    triggerAttackRelease(t, e, o, s) {
      let n = this.toSeconds(o),
        a = this.toSeconds(e);
      return this.triggerAttack(t, n, s), this.triggerRelease(n + a), this;
    }
    dispose() {
      return (
        super.dispose(),
        this._volume.dispose(),
        this.unsync(),
        (this._scheduledEvents = []),
        this
      );
    }
  };
  var ae = class r extends ye {
    constructor() {
      super(g(r.getDefaults(), arguments));
      let t = g(r.getDefaults(), arguments);
      (this.portamento = t.portamento), (this.onsilence = t.onsilence);
    }
    static getDefaults() {
      return Object.assign(ye.getDefaults(), {
        detune: 0,
        onsilence: Q,
        portamento: 0
      });
    }
    triggerAttack(t, e, o = 1) {
      this.log("triggerAttack", t, e, o);
      let s = this.toSeconds(e);
      return this._triggerEnvelopeAttack(s, o), this.setNote(t, s), this;
    }
    triggerRelease(t) {
      this.log("triggerRelease", t);
      let e = this.toSeconds(t);
      return this._triggerEnvelopeRelease(e), this;
    }
    setNote(t, e) {
      let o = this.toSeconds(e),
        s = t instanceof Wt ? t.toFrequency() : t;
      if (this.portamento > 0 && this.getLevelAtTime(o) > 0.05) {
        let n = this.toSeconds(this.portamento);
        this.frequency.exponentialRampTo(s, n, o);
      } else this.frequency.setValueAtTime(s, o);
      return this;
    }
  };
  qt([Zt(0)], ae.prototype, "portamento", void 0);
  var zr = class r extends Bt {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])
      ),
        (this.name = "AmplitudeEnvelope"),
        (this._gainNode = new z({ context: this.context, gain: 0 })),
        (this.output = this._gainNode),
        (this.input = this._gainNode),
        this._sig.connect(this._gainNode.gain),
        (this.output = this._gainNode),
        (this.input = this._gainNode);
    }
    dispose() {
      return super.dispose(), this._gainNode.dispose(), this;
    }
  };
  var qe = class r extends ae {
    constructor() {
      super(g(r.getDefaults(), arguments)), (this.name = "Synth");
      let t = g(r.getDefaults(), arguments);
      (this.oscillator = new lr(
        Object.assign(
          {
            context: this.context,
            detune: t.detune,
            onstop: () => this.onsilence(this)
          },
          t.oscillator
        )
      )),
        (this.frequency = this.oscillator.frequency),
        (this.detune = this.oscillator.detune),
        (this.envelope = new zr(
          Object.assign({ context: this.context }, t.envelope)
        )),
        this.oscillator.chain(this.envelope, this.output),
        V(this, ["oscillator", "frequency", "detune", "envelope"]);
    }
    static getDefaults() {
      return Object.assign(ae.getDefaults(), {
        envelope: Object.assign(
          Oe(Bt.getDefaults(), Object.keys(I.getDefaults())),
          { attack: 0.005, decay: 0.1, release: 1, sustain: 0.3 }
        ),
        oscillator: Object.assign(
          Oe(lr.getDefaults(), [
            ...Object.keys(nt.getDefaults()),
            "frequency",
            "detune"
          ]),
          { type: "triangle" }
        )
      });
    }
    _triggerEnvelopeAttack(t, e) {
      if (
        (this.envelope.triggerAttack(t, e),
        this.oscillator.start(t),
        this.envelope.sustain === 0)
      ) {
        let o = this.toSeconds(this.envelope.attack),
          s = this.toSeconds(this.envelope.decay);
        this.oscillator.stop(t + o + s);
      }
    }
    _triggerEnvelopeRelease(t) {
      this.envelope.triggerRelease(t),
        this.oscillator.stop(t + this.toSeconds(this.envelope.release));
    }
    getLevelAtTime(t) {
      return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
    }
    dispose() {
      return (
        super.dispose(),
        this.oscillator.dispose(),
        this.envelope.dispose(),
        this
      );
    }
  };
  var ds = class r extends qe {
    constructor() {
      super(g(r.getDefaults(), arguments)),
        (this.name = "MembraneSynth"),
        (this.portamento = 0);
      let t = g(r.getDefaults(), arguments);
      (this.pitchDecay = t.pitchDecay),
        (this.octaves = t.octaves),
        V(this, ["oscillator", "envelope"]);
    }
    static getDefaults() {
      return de(ae.getDefaults(), qe.getDefaults(), {
        envelope: {
          attack: 0.001,
          attackCurve: "exponential",
          decay: 0.4,
          release: 1.4,
          sustain: 0.01
        },
        octaves: 10,
        oscillator: { type: "sine" },
        pitchDecay: 0.05
      });
    }
    setNote(t, e) {
      let o = this.toSeconds(e),
        s = this.toFrequency(t instanceof Wt ? t.toFrequency() : t),
        n = s * this.octaves;
      return (
        this.oscillator.frequency.setValueAtTime(n, o),
        this.oscillator.frequency.exponentialRampToValueAtTime(
          s,
          o + this.toSeconds(this.pitchDecay)
        ),
        this
      );
    }
    dispose() {
      return super.dispose(), this;
    }
  };
  qt([ps(0)], ds.prototype, "octaves", void 0);
  qt([Zt(0)], ds.prototype, "pitchDecay", void 0);
  var ju = new Set();
  function Zr(r) {
    ju.add(r);
  }
  function gs(r, t) {
    let e = `registerProcessor("${r}", ${t})`;
    ju.add(e);
  }
  var vp = `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;
  Zr(vp);
  var wp = `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;
  Zr(wp);
  var Tp = `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;
  Zr(Tp);
  var Bu = "feedback-comb-filter",
    bp = `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;
  gs(Bu, bp);
  var _s = class r extends ye {
    constructor() {
      super(
        g(r.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")
      ),
        (this.name = "Sampler"),
        (this._activeSources = new Map());
      let t = g(
          r.getDefaults(),
          arguments,
          ["urls", "onload", "baseUrl"],
          "urls"
        ),
        e = {};
      Object.keys(t.urls).forEach((o) => {
        let s = parseInt(o, 10);
        if (
          (B(
            xo(o) || (It(s) && isFinite(s)),
            `url key is neither a note or midi pitch: ${o}`
          ),
          xo(o))
        ) {
          let n = new Wt(this.context, o).toMidi();
          e[n] = t.urls[o];
        } else It(s) && isFinite(s) && (e[s] = t.urls[s]);
      }),
        (this._buffers = new jr({
          urls: e,
          onload: t.onload,
          baseUrl: t.baseUrl,
          onerror: t.onerror
        })),
        (this.attack = t.attack),
        (this.release = t.release),
        (this.curve = t.curve),
        this._buffers.loaded && Promise.resolve().then(t.onload);
    }
    static getDefaults() {
      return Object.assign(ye.getDefaults(), {
        attack: 0,
        baseUrl: "",
        curve: "exponential",
        onload: Q,
        onerror: Q,
        release: 0.1,
        urls: {}
      });
    }
    _findClosest(t) {
      let o = 0;
      for (; o < 96; ) {
        if (this._buffers.has(t + o)) return -o;
        if (this._buffers.has(t - o)) return o;
        o++;
      }
      throw new Error(`No available buffers for note: ${t}`);
    }
    triggerAttack(t, e, o = 1) {
      return (
        this.log("triggerAttack", t, e, o),
        Array.isArray(t) || (t = [t]),
        t.forEach((s) => {
          let n = cn(new Wt(this.context, s).toFrequency()),
            a = Math.round(n),
            i = n - a,
            c = this._findClosest(a),
            u = a - c,
            l = this._buffers.get(u),
            h = ar(c + i),
            f = new Ie({
              url: l,
              context: this.context,
              curve: this.curve,
              fadeIn: this.attack,
              fadeOut: this.release,
              playbackRate: h
            }).connect(this.output);
          f.start(e, 0, l.duration / h, o),
            vt(this._activeSources.get(a)) || this._activeSources.set(a, []),
            this._activeSources.get(a).push(f),
            (f.onended = () => {
              if (this._activeSources && this._activeSources.has(a)) {
                let m = this._activeSources.get(a),
                  p = m.indexOf(f);
                p !== -1 && m.splice(p, 1);
              }
            });
        }),
        this
      );
    }
    triggerRelease(t, e) {
      return (
        this.log("triggerRelease", t, e),
        Array.isArray(t) || (t = [t]),
        t.forEach((o) => {
          let s = new Wt(this.context, o).toMidi();
          if (this._activeSources.has(s) && this._activeSources.get(s).length) {
            let n = this._activeSources.get(s);
            (e = this.toSeconds(e)),
              n.forEach((a) => {
                a.stop(e);
              }),
              this._activeSources.set(s, []);
          }
        }),
        this
      );
    }
    releaseAll(t) {
      let e = this.toSeconds(t);
      return (
        this._activeSources.forEach((o) => {
          for (; o.length; ) o.shift().stop(e);
        }),
        this
      );
    }
    sync() {
      return (
        this._syncState() &&
          (this._syncMethod("triggerAttack", 1),
          this._syncMethod("triggerRelease", 1)),
        this
      );
    }
    triggerAttackRelease(t, e, o, s = 1) {
      let n = this.toSeconds(o);
      return (
        this.triggerAttack(t, n, s),
        vt(e)
          ? (B(vt(t), "notes must be an array when duration is array"),
            t.forEach((a, i) => {
              let c = e[Math.min(i, e.length - 1)];
              this.triggerRelease(a, n + this.toSeconds(c));
            }))
          : this.triggerRelease(t, n + this.toSeconds(e)),
        this
      );
    }
    add(t, e, o) {
      if (
        (B(xo(t) || isFinite(t), `note must be a pitch or midi: ${t}`), xo(t))
      ) {
        let s = new Wt(this.context, t).toMidi();
        this._buffers.add(s, e, o);
      } else this._buffers.add(t, e, o);
      return this;
    }
    get loaded() {
      return this._buffers.loaded;
    }
    dispose() {
      return (
        super.dispose(),
        this._buffers.dispose(),
        this._activeSources.forEach((t) => {
          t.forEach((e) => e.dispose());
        }),
        this._activeSources.clear(),
        this
      );
    }
  };
  qt([Zt(0)], _s.prototype, "attack", void 0);
  qt([Zt(0)], _s.prototype, "release", void 0);
  var Qr = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["callback", "value"])),
        (this.name = "ToneEvent"),
        (this._state = new ge("stopped")),
        (this._startOffset = 0);
      let t = g(r.getDefaults(), arguments, ["callback", "value"]);
      (this._loop = t.loop),
        (this.callback = t.callback),
        (this.value = t.value),
        (this._loopStart = this.toTicks(t.loopStart)),
        (this._loopEnd = this.toTicks(t.loopEnd)),
        (this._playbackRate = t.playbackRate),
        (this._probability = t.probability),
        (this._humanize = t.humanize),
        (this.mute = t.mute),
        (this._playbackRate = t.playbackRate),
        (this._state.increasing = !0),
        this._rescheduleEvents();
    }
    static getDefaults() {
      return Object.assign(lt.getDefaults(), {
        callback: Q,
        humanize: !1,
        loop: !1,
        loopEnd: "1m",
        loopStart: 0,
        mute: !1,
        playbackRate: 1,
        probability: 1,
        value: null
      });
    }
    _rescheduleEvents(t = -1) {
      this._state.forEachFrom(t, (e) => {
        let o;
        if (e.state === "started") {
          e.id !== -1 && this.context.transport.clear(e.id);
          let s = e.time + Math.round(this.startOffset / this._playbackRate);
          if (this._loop === !0 || (It(this._loop) && this._loop > 1)) {
            (o = 1 / 0),
              It(this._loop) && (o = this._loop * this._getLoopDuration());
            let n = this._state.getAfter(s);
            n !== null && (o = Math.min(o, n.time - s)),
              o !== 1 / 0 &&
                (this._state.setStateAtTime("stopped", s + o + 1, { id: -1 }),
                (o = new gt(this.context, o)));
            let a = new gt(this.context, this._getLoopDuration());
            e.id = this.context.transport.scheduleRepeat(
              this._tick.bind(this),
              a,
              new gt(this.context, s),
              o
            );
          } else
            e.id = this.context.transport.schedule(
              this._tick.bind(this),
              new gt(this.context, s)
            );
        }
      });
    }
    get state() {
      return this._state.getValueAtTime(this.context.transport.ticks);
    }
    get startOffset() {
      return this._startOffset;
    }
    set startOffset(t) {
      this._startOffset = t;
    }
    get probability() {
      return this._probability;
    }
    set probability(t) {
      this._probability = t;
    }
    get humanize() {
      return this._humanize;
    }
    set humanize(t) {
      this._humanize = t;
    }
    start(t) {
      let e = this.toTicks(t);
      return (
        this._state.getValueAtTime(e) === "stopped" &&
          (this._state.add({ id: -1, state: "started", time: e }),
          this._rescheduleEvents(e)),
        this
      );
    }
    stop(t) {
      this.cancel(t);
      let e = this.toTicks(t);
      if (this._state.getValueAtTime(e) === "started") {
        this._state.setStateAtTime("stopped", e, { id: -1 });
        let o = this._state.getBefore(e),
          s = e;
        o !== null && (s = o.time), this._rescheduleEvents(s);
      }
      return this;
    }
    cancel(t) {
      t = zt(t, -1 / 0);
      let e = this.toTicks(t);
      return (
        this._state.forEachFrom(e, (o) => {
          this.context.transport.clear(o.id);
        }),
        this._state.cancel(e),
        this
      );
    }
    _tick(t) {
      let e = this.context.transport.getTicksAtTime(t);
      if (!this.mute && this._state.getValueAtTime(e) === "started") {
        if (this.probability < 1 && Math.random() > this.probability) return;
        if (this.humanize) {
          let o = 0.02;
          Ho(this.humanize) || (o = this.toSeconds(this.humanize)),
            (t += (Math.random() * 2 - 1) * o);
        }
        this.callback(t, this.value);
      }
    }
    _getLoopDuration() {
      return Math.round((this._loopEnd - this._loopStart) / this._playbackRate);
    }
    get loop() {
      return this._loop;
    }
    set loop(t) {
      (this._loop = t), this._rescheduleEvents();
    }
    get playbackRate() {
      return this._playbackRate;
    }
    set playbackRate(t) {
      (this._playbackRate = t), this._rescheduleEvents();
    }
    get loopEnd() {
      return new gt(this.context, this._loopEnd).toSeconds();
    }
    set loopEnd(t) {
      (this._loopEnd = this.toTicks(t)), this._loop && this._rescheduleEvents();
    }
    get loopStart() {
      return new gt(this.context, this._loopStart).toSeconds();
    }
    set loopStart(t) {
      (this._loopStart = this.toTicks(t)),
        this._loop && this._rescheduleEvents();
    }
    get progress() {
      if (this._loop) {
        let t = this.context.transport.ticks,
          e = this._state.get(t);
        if (e !== null && e.state === "started") {
          let o = this._getLoopDuration();
          return ((t - e.time) % o) / o;
        } else return 0;
      } else return 0;
    }
    dispose() {
      return super.dispose(), this.cancel(), this._state.dispose(), this;
    }
  };
  var No = class r extends lt {
    constructor() {
      super(g(r.getDefaults(), arguments, ["callback", "interval"])),
        (this.name = "Loop");
      let t = g(r.getDefaults(), arguments, ["callback", "interval"]);
      (this._event = new Qr({
        context: this.context,
        callback: this._tick.bind(this),
        loop: !0,
        loopEnd: t.interval,
        playbackRate: t.playbackRate,
        probability: t.probability
      })),
        (this.callback = t.callback),
        (this.iterations = t.iterations);
    }
    static getDefaults() {
      return Object.assign(lt.getDefaults(), {
        interval: "4n",
        callback: Q,
        playbackRate: 1,
        iterations: 1 / 0,
        probability: 1,
        mute: !1,
        humanize: !1
      });
    }
    start(t) {
      return this._event.start(t), this;
    }
    stop(t) {
      return this._event.stop(t), this;
    }
    cancel(t) {
      return this._event.cancel(t), this;
    }
    _tick(t) {
      this.callback(t);
    }
    get state() {
      return this._event.state;
    }
    get progress() {
      return this._event.progress;
    }
    get interval() {
      return this._event.loopEnd;
    }
    set interval(t) {
      this._event.loopEnd = t;
    }
    get playbackRate() {
      return this._event.playbackRate;
    }
    set playbackRate(t) {
      this._event.playbackRate = t;
    }
    get humanize() {
      return this._event.humanize;
    }
    set humanize(t) {
      this._event.humanize = t;
    }
    get probability() {
      return this._event.probability;
    }
    set probability(t) {
      this._event.probability = t;
    }
    get mute() {
      return this._event.mute;
    }
    set mute(t) {
      this._event.mute = t;
    }
    get iterations() {
      return this._event.loop === !0 ? 1 / 0 : this._event.loop;
    }
    set iterations(t) {
      t === 1 / 0 ? (this._event.loop = !0) : (this._event.loop = t);
    }
    dispose() {
      return super.dispose(), this._event.dispose(), this;
    }
  };
  var hr = class r extends I {
    constructor() {
      super(Object.assign(g(r.getDefaults(), arguments, ["pan"]))),
        (this.name = "Panner"),
        (this._panner = this.context.createStereoPanner()),
        (this.input = this._panner),
        (this.output = this._panner);
      let t = g(r.getDefaults(), arguments, ["pan"]);
      (this.pan = new H({
        context: this.context,
        param: this._panner.pan,
        value: t.pan,
        minValue: -1,
        maxValue: 1
      })),
        (this._panner.channelCount = t.channelCount),
        (this._panner.channelCountMode = "explicit"),
        V(this, "pan");
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { pan: 0, channelCount: 1 });
    }
    dispose() {
      return (
        super.dispose(), this._panner.disconnect(), this.pan.dispose(), this
      );
    }
  };
  var zu = "bit-crusher",
    Dp = `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;
  gs(zu, Dp);
  var Ve = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["channels"])), (this.name = "Split");
      let t = g(r.getDefaults(), arguments, ["channels"]);
      (this._splitter =
        this.input =
        this.output =
          this.context.createChannelSplitter(t.channels)),
        (this._internalChannels = [this._splitter]);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { channels: 2 });
    }
    dispose() {
      return super.dispose(), this._splitter.disconnect(), this;
    }
  };
  var y5 = [
    1557 / 44100,
    1617 / 44100,
    1491 / 44100,
    1422 / 44100,
    1277 / 44100,
    1356 / 44100,
    1188 / 44100,
    1116 / 44100
  ];
  var N5 = [1687 / 25e3, 1601 / 25e3, 2053 / 25e3, 2251 / 25e3];
  var Xr = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["type", "size"])),
        (this.name = "Analyser"),
        (this._analysers = []),
        (this._buffers = []);
      let t = g(r.getDefaults(), arguments, ["type", "size"]);
      (this.input =
        this.output =
        this._gain =
          new z({ context: this.context })),
        (this._split = new Ve({ context: this.context, channels: t.channels })),
        this.input.connect(this._split),
        Nt(t.channels, 1);
      for (let e = 0; e < t.channels; e++)
        (this._analysers[e] = this.context.createAnalyser()),
          this._split.connect(this._analysers[e], e, 0);
      (this.size = t.size), (this.type = t.type);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        size: 1024,
        smoothing: 0.8,
        type: "fft",
        channels: 1
      });
    }
    getValue() {
      return (
        this._analysers.forEach((t, e) => {
          let o = this._buffers[e];
          this._type === "fft"
            ? t.getFloatFrequencyData(o)
            : this._type === "waveform" && t.getFloatTimeDomainData(o);
        }),
        this.channels === 1 ? this._buffers[0] : this._buffers
      );
    }
    get size() {
      return this._analysers[0].frequencyBinCount;
    }
    set size(t) {
      this._analysers.forEach((e, o) => {
        (e.fftSize = t * 2), (this._buffers[o] = new Float32Array(t));
      });
    }
    get channels() {
      return this._analysers.length;
    }
    get type() {
      return this._type;
    }
    set type(t) {
      B(t === "waveform" || t === "fft", `Analyser: invalid type: ${t}`),
        (this._type = t);
    }
    get smoothing() {
      return this._analysers[0].smoothingTimeConstant;
    }
    set smoothing(t) {
      this._analysers.forEach((e) => (e.smoothingTimeConstant = t));
    }
    dispose() {
      return (
        super.dispose(),
        this._analysers.forEach((t) => t.disconnect()),
        this._split.dispose(),
        this._gain.dispose(),
        this
      );
    }
  };
  var Ke = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments)),
        (this.name = "MeterBase"),
        (this.input =
          this.output =
          this._analyser =
            new Xr({ context: this.context, size: 256, type: "waveform" }));
    }
    dispose() {
      return super.dispose(), this._analyser.dispose(), this;
    }
  };
  var Oo = class r extends Ke {
    constructor() {
      super(g(r.getDefaults(), arguments, ["smoothing"])),
        (this.name = "Meter"),
        (this._rms = 0);
      let t = g(r.getDefaults(), arguments, ["smoothing"]);
      (this.input =
        this.output =
        this._analyser =
          new Xr({
            context: this.context,
            size: 256,
            type: "waveform",
            channels: t.channels
          })),
        (this.smoothing = t.smoothing),
        (this.normalRange = t.normalRange);
    }
    static getDefaults() {
      return Object.assign(Ke.getDefaults(), {
        smoothing: 0.8,
        normalRange: !1,
        channels: 1
      });
    }
    getLevel() {
      return Fr("'getLevel' has been changed to 'getValue'"), this.getValue();
    }
    getValue() {
      let t = this._analyser.getValue(),
        o = (this.channels === 1 ? [t] : t).map((s) => {
          let n = s.reduce((i, c) => i + c * c, 0),
            a = Math.sqrt(n / s.length);
          return (
            (this._rms = Math.max(a, this._rms * this.smoothing)),
            this.normalRange ? this._rms : ir(this._rms)
          );
        });
      return this.channels === 1 ? o[0] : o;
    }
    get channels() {
      return this._analyser.channels;
    }
    dispose() {
      return super.dispose(), this._analyser.dispose(), this;
    }
  };
  var Yr = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["solo"])), (this.name = "Solo");
      let t = g(r.getDefaults(), arguments, ["solo"]);
      (this.input = this.output = new z({ context: this.context })),
        r._allSolos.has(this.context) ||
          r._allSolos.set(this.context, new Set()),
        r._allSolos.get(this.context).add(this),
        (this.solo = t.solo);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), { solo: !1 });
    }
    get solo() {
      return this._isSoloed();
    }
    set solo(t) {
      t ? this._addSolo() : this._removeSolo(),
        r._allSolos.get(this.context).forEach((e) => e._updateSolo());
    }
    get muted() {
      return this.input.gain.value === 0;
    }
    _addSolo() {
      r._soloed.has(this.context) || r._soloed.set(this.context, new Set()),
        r._soloed.get(this.context).add(this);
    }
    _removeSolo() {
      r._soloed.has(this.context) && r._soloed.get(this.context).delete(this);
    }
    _isSoloed() {
      return (
        r._soloed.has(this.context) && r._soloed.get(this.context).has(this)
      );
    }
    _noSolos() {
      return (
        !r._soloed.has(this.context) ||
        (r._soloed.has(this.context) && r._soloed.get(this.context).size === 0)
      );
    }
    _updateSolo() {
      this._isSoloed()
        ? (this.input.gain.value = 1)
        : this._noSolos()
        ? (this.input.gain.value = 1)
        : (this.input.gain.value = 0);
    }
    dispose() {
      return (
        super.dispose(),
        r._allSolos.get(this.context).delete(this),
        this._removeSolo(),
        this
      );
    }
  };
  Yr._allSolos = new Map();
  Yr._soloed = new Map();
  var ws = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["pan", "volume"])),
        (this.name = "PanVol");
      let t = g(r.getDefaults(), arguments, ["pan", "volume"]);
      (this._panner = this.input =
        new hr({
          context: this.context,
          pan: t.pan,
          channelCount: t.channelCount
        })),
        (this.pan = this._panner.pan),
        (this._volume = this.output =
          new ne({ context: this.context, volume: t.volume })),
        (this.volume = this._volume.volume),
        this._panner.connect(this._volume),
        (this.mute = t.mute),
        V(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        mute: !1,
        pan: 0,
        volume: 0,
        channelCount: 1
      });
    }
    get mute() {
      return this._volume.mute;
    }
    set mute(t) {
      this._volume.mute = t;
    }
    dispose() {
      return (
        super.dispose(),
        this._panner.dispose(),
        this.pan.dispose(),
        this._volume.dispose(),
        this.volume.dispose(),
        this
      );
    }
  };
  var ko = class r extends I {
    constructor() {
      super(g(r.getDefaults(), arguments, ["volume", "pan"])),
        (this.name = "Channel");
      let t = g(r.getDefaults(), arguments, ["volume", "pan"]);
      (this._solo = this.input =
        new Yr({ solo: t.solo, context: this.context })),
        (this._panVol = this.output =
          new ws({
            context: this.context,
            pan: t.pan,
            volume: t.volume,
            mute: t.mute,
            channelCount: t.channelCount
          })),
        (this.pan = this._panVol.pan),
        (this.volume = this._panVol.volume),
        this._solo.connect(this._panVol),
        V(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        pan: 0,
        volume: 0,
        mute: !1,
        solo: !1,
        channelCount: 1
      });
    }
    get solo() {
      return this._solo.solo;
    }
    set solo(t) {
      this._solo.solo = t;
    }
    get muted() {
      return this._solo.muted || this.mute;
    }
    get mute() {
      return this._panVol.mute;
    }
    set mute(t) {
      this._panVol.mute = t;
    }
    _getBus(t) {
      return (
        r.buses.has(t) || r.buses.set(t, new z({ context: this.context })),
        r.buses.get(t)
      );
    }
    send(t, e = 0) {
      let o = this._getBus(t),
        s = new z({ context: this.context, units: "decibels", gain: e });
      return this.connect(s), s.connect(o), s;
    }
    receive(t) {
      return this._getBus(t).connect(this), this;
    }
    dispose() {
      return (
        super.dispose(),
        this._panVol.dispose(),
        this.pan.dispose(),
        this.volume.dispose(),
        this._solo.dispose(),
        this
      );
    }
  };
  ko.buses = new Map();
  var fn = class extends I {
    constructor() {
      super(...arguments),
        (this.name = "Listener"),
        (this.positionX = new H({
          context: this.context,
          param: this.context.rawContext.listener.positionX
        })),
        (this.positionY = new H({
          context: this.context,
          param: this.context.rawContext.listener.positionY
        })),
        (this.positionZ = new H({
          context: this.context,
          param: this.context.rawContext.listener.positionZ
        })),
        (this.forwardX = new H({
          context: this.context,
          param: this.context.rawContext.listener.forwardX
        })),
        (this.forwardY = new H({
          context: this.context,
          param: this.context.rawContext.listener.forwardY
        })),
        (this.forwardZ = new H({
          context: this.context,
          param: this.context.rawContext.listener.forwardZ
        })),
        (this.upX = new H({
          context: this.context,
          param: this.context.rawContext.listener.upX
        })),
        (this.upY = new H({
          context: this.context,
          param: this.context.rawContext.listener.upY
        })),
        (this.upZ = new H({
          context: this.context,
          param: this.context.rawContext.listener.upZ
        }));
    }
    static getDefaults() {
      return Object.assign(I.getDefaults(), {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        forwardX: 0,
        forwardY: 0,
        forwardZ: -1,
        upX: 0,
        upY: 1,
        upZ: 0
      });
    }
    dispose() {
      return (
        super.dispose(),
        this.positionX.dispose(),
        this.positionY.dispose(),
        this.positionZ.dispose(),
        this.forwardX.dispose(),
        this.forwardY.dispose(),
        this.forwardZ.dispose(),
        this.upX.dispose(),
        this.upY.dispose(),
        this.upZ.dispose(),
        this
      );
    }
  };
  Xe((r) => {
    r.listener = new fn({ context: r });
  });
  Ye((r) => {
    r.listener.dispose();
  });
  var Ts = dt().transport;
  var dX = dt().destination,
    gX = dt().destination;
  var _X = dt().listener;
  var xX = dt().draw;
  var yX = dt();
  function Qu(r) {
    return Number(r.substring(r.length - 1));
  }
  function Xu({ _seq: r, index: t }) {
    return r[t]?.note || null;
  }
  function Hr(r) {
    return r[Math.floor(Math.random() * r.length)];
  }
  function Yu(r) {
    return r.splice(Math.floor(Math.random() * r.length), 1);
  }
  function qp(r) {
    let t = r.reduce((e, o) => e + o);
    return r.map((e) => e / t);
  }
  function Hu(r, t) {
    let e = [];
    for (let o = 0; o < r; o++) e.push(Math.random());
    return t ? qp(e) : e;
  }
  function $u(r) {
    if (r.length === 0) return [void 0, r];
    let t = [...r];
    return [Yu(t), t];
  }
  function Ku({ chroma: r, prevNote: t, isAscending: e }) {
    if (!t) return [3, !0];
    let o = Qu(t);
    return e
      ? (vo(r + o).toMidi() < vo(t).toMidi() && (o += 1),
        [Math.min(o, 6), o <= 6])
      : (vo(r + o).toMidi() > vo(t).toMidi() && (o -= 1),
        [Math.max(o, 2), o <= 2]);
  }
  function Ju(r = 1) {
    return -1 + Math.pow(Math.random(), r) * 2;
  }
  var $r = {
    activateBeatsModulo: { init: bs, transform: dn },
    silenceBeatsModulo: { init: gn, transform: _n }
  };
  function bs() {
    return {
      transform: "fill-sequence",
      notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
      lastAdditionOnBeat: 0,
      cyclesUntilNextAction: 3,
      isAscending: !0,
      isComplete: !1
    };
  }
  function dn({ _seq: r, _transformState: t }) {
    let e = { ...t },
      o = [...r];
    e.isComplete = t.notePool.length === 0;
    let s = (e.lastAdditionOnBeat + 14) % r.length,
      [n, a] = $u(t.notePool);
    e.notePool = a;
    let [i, c] = Ku({
      chroma: n,
      prevNote: Xu({ _seq: r, index: t.lastAdditionOnBeat }),
      isAscending: t.isAscending
    });
    if (((e.isAscending = c), n && i)) {
      let u = n + i;
      o[s] = { note: u, pan: Ju() };
    }
    return (e.lastAdditionOnBeat = s), { _transformState: e, _seq: o };
  }
  function gn() {
    return {
      transform: "reduce-sequence",
      lastSubtractionOnBeat: 0,
      cyclesUntilNextAction: 3,
      isComplete: !1
    };
  }
  function _n({ _transformState: r, _seq: t }) {
    let e = { ...r },
      o = [...t],
      s = t.reduce((a, i) => a + (i ? 1 : 0), 0),
      n = (e.lastSubtractionOnBeat + 14) % t.length;
    return (
      (o[n] = void 0),
      (e.lastSubtractionOnBeat = n),
      s === 3 && (e.isComplete = !0),
      { _transformState: e, _seq: o }
    );
  }
  var Do = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    tl = [2, 3, 4, 5, 6, 7],
    Kr = {
      allBeatsChromatic: () => {
        let r = [];
        for (let t = 0; t < 20; t++)
          r.push({
            note: Do[t % Do.length] + tl[Math.floor(t / Do.length)],
            pan: 0
          });
        return r;
      },
      alternateBeatsRandom: () => {
        let r = new Array(20);
        for (let t = 0; t < 20; t += 2)
          r[t] = { note: Hr(Do) + Hr(tl), pan: -1 + Math.random() * 2 };
        return r;
      },
      aFewHighBeats: () => {
        let r = new Array(20);
        for (let t = 0; t < 3; t++)
          r[t * 6] = { note: Hr(Do) + 6, pan: -1 + Math.random() * 2 };
        return r;
      }
    };
  new EventSource("/esbuild").addEventListener("change", () =>
    location.reload()
  );
  var Le, pr, ce, Ss;
  Object.keys(Kr).forEach((r) => {
    let t = document.createElement("option");
    (t.value = r),
      (t.innerHTML = r),
      document.querySelector("#sequence").appendChild(t);
  });
  Object.keys($r).forEach((r) => {
    let t = document.createElement("option");
    (t.value = r),
      (t.innerHTML = r),
      document.querySelector("#transform").appendChild(t);
  });
  document.querySelector("#start-audio").addEventListener("click", () => {
    Pp(),
      document
        .querySelectorAll(".control-button")
        .forEach((t) => (t.disabled = !1)),
      (document.querySelector("#start-audio").disabled = !0);
  });
  document.querySelector("#start")?.addEventListener("click", async () => {
    pr = 0;
    let r = document.querySelector("#sequence").value;
    Kr[r]
      ? (Le = Kr[r]())
      : ((Le = new Array(20)), (Le[0] = { note: "A3", pan: 0 }));
    let t = document.querySelector("#transform").value;
    $r[t] ? (ce = $r[t].init()) : (ce = null), Ts.start();
  });
  document.querySelector("#stop")?.addEventListener("click", async () => {
    Ts.stop();
  });
  document.querySelector("#sequence")?.addEventListener("change", (r) => {
    Kr[r.target.value] && (Le = Kr[r.target.value]());
  });
  document.querySelector("#transform")?.addEventListener("change", (r) => {
    $r[r.target.value] && (ce = $r[r.target.value].init());
  });
  async function Pp() {
    await an(),
      (Ts.bpm = 100),
      (Ss = new ko({ channelCount: 2 })),
      Ss.toDestination(),
      Vp(),
      new No(Lp, "16n").start(0);
  }
  function Vp() {
    let r = [new Oo(), new Oo()],
      t = new Ve();
    Ss.connect(t), t.connect(r[0], 0, 0), t.connect(r[1], 1, 0);
    let e = document.querySelector("#meter"),
      o = e.getContext("2d"),
      s = (a, i = 100) => {
        let c = Math.pow($e(a), 0.5) * 200;
        (o.fillStyle = "rgb(255,0,0)"),
          o.fillRect(i, e.height - c, 100, c),
          (o.fillStyle = "rgb(0,0,0)"),
          o.fillText(c, i + 50, 50);
      },
      n = () => {
        let a = r.map((i) => i.getValue());
        o.clearRect(0, 0, e.width, e.height),
          (o.fillStyle = "rgb(0,0,255,0.25)"),
          o.fillRect(0, 0, e.width, e.height),
          s(a[0], 75),
          s(a[1], 225),
          (o.fillStyle = "rgb(0,0,0)"),
          o.fillText(`playbackBeat: ${pr}`, 0, 50),
          ce &&
            (o.fillText(
              `cycles until next action: ${ce.cyclesUntilNextAction}`,
              0,
              100
            ),
            o.fillText(`isAscending: ${ce.isAscending}`, 0, 120)),
          window.requestAnimationFrame(n);
      };
    n();
  }
  function Lp(r) {
    if ((Le[pr] && Wp(Le[pr], r), (ce = jp(ce)), pr === 0))
      if (ce.cyclesUntilNextAction === 0) {
        let { _seq: t, _transformState: e } = Bp({
          _transformState: ce,
          _seq: Le
        });
        (Le = t), (e.cyclesUntilNextAction = Hr([1, 2, 3])), (ce = e);
      } else ce.cyclesUntilNextAction -= 1;
    pr = (pr + 1) % Le.length;
  }
  function Wp(r, t) {
    let e = new hr(r.pan).connect(Ss),
      o = new qe({
        volume: -25,
        oscillator: {
          baseType: "sine",
          partialCount: 10,
          partials: Hu(10, !0)
        },
        envelope: {
          attackCurve: "exponential",
          attack: 0.01,
          decay: 0.3,
          sustain: 0.95,
          release: 5,
          releaseCurve: "exponential"
        },
        onsilence: (s) => {
          s.dispose(), e.dispose();
        }
      });
    o.connect(e), o.triggerAttackRelease(r.note, "16n", t);
  }
  function jp(r) {
    return r ? (r.isComplete ? Gp(r) : r) : bs();
  }
  function Bp({ _transformState: r, _seq: t }) {
    switch (r.transform) {
      case "fill-sequence":
        return dn({ _transformState: r, _seq: t });
      case "reduce-sequence":
        return _n({ _transformState: r, _seq: t });
      default:
        throw new Error("transform not found");
    }
  }
  function Gp(r) {
    return r.transform === "fill-sequence" ? gn() : bs();
  }
})();
/*! Bundled license information:

tone/build/esm/core/Tone.js:
  (**
   * Tone.js
   * @author Yotam Mann
   * @license http://opensource.org/licenses/MIT MIT License
   * @copyright 2014-2019 Yotam Mann
   *)
*/
//# sourceMappingURL=index.js.map
