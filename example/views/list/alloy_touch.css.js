/* AlloyTouch v0.1.0
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */
;(function () {

  var Matrix3D = function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    this.elements = window.Float32Array ? new Float32Array(16) : [];
    var te = this.elements;
    te[0] = (n11 !== undefined) ? n11 : 1;
    te[4] = n12 || 0;
    te[8] = n13 || 0;
    te[12] = n14 || 0;
    te[1] = n21 || 0;
    te[5] = (n22 !== undefined) ? n22 : 1;
    te[9] = n23 || 0;
    te[13] = n24 || 0;
    te[2] = n31 || 0;
    te[6] = n32 || 0;
    te[10] = (n33 !== undefined) ? n33 : 1;
    te[14] = n34 || 0;
    te[3] = n41 || 0;
    te[7] = n42 || 0;
    te[11] = n43 || 0;
    te[15] = (n44 !== undefined) ? n44 : 1;
  };

  Matrix3D.DEG_TO_RAD = Math.PI / 180;

  Matrix3D.prototype = {
    set: function (n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      var te = this.elements;
      te[0] = n11;
      te[4] = n12;
      te[8] = n13;
      te[12] = n14;
      te[1] = n21;
      te[5] = n22;
      te[9] = n23;
      te[13] = n24;
      te[2] = n31;
      te[6] = n32;
      te[10] = n33;
      te[14] = n34;
      te[3] = n41;
      te[7] = n42;
      te[11] = n43;
      te[15] = n44;
      return this;
    },
    identity: function () {
      this.set(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      );
      return this;
    },
    multiplyMatrices: function (a, be) {

      var ae = a.elements;
      var te = this.elements;
      var a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
      var a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
      var a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
      var a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

      var b11 = be[0], b12 = be[1], b13 = be[2], b14 = be[3];
      var b21 = be[4], b22 = be[5], b23 = be[6], b24 = be[7];
      var b31 = be[8], b32 = be[9], b33 = be[10], b34 = be[11];
      var b41 = be[12], b42 = be[13], b43 = be[14], b44 = be[15];

      te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
      te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
      te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
      te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

      te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
      te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
      te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
      te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

      te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
      te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
      te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
      te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

      te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
      te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
      te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
      te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

      return this;

    },
    // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
    _rounded: function (value, i) {
      i = Math.pow(10, i || 15);
      // default
      return Math.round(value * i) / i;
    },
    appendTransform: function (x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

      var rx = rotateX * Matrix3D.DEG_TO_RAD;
      var cosx = this._rounded(Math.cos(rx));
      var sinx = this._rounded(Math.sin(rx));
      var ry = rotateY * Matrix3D.DEG_TO_RAD;
      var cosy = this._rounded(Math.cos(ry));
      var siny = this._rounded(Math.sin(ry));
      var rz = rotateZ * Matrix3D.DEG_TO_RAD;
      var cosz = this._rounded(Math.cos(rz * -1));
      var sinz = this._rounded(Math.sin(rz * -1));

      this.multiplyMatrices(this, [
        1, 0, 0, x,
        0, cosx, sinx, y,
        0, -sinx, cosx, z,
        0, 0, 0, 1
      ]);

      this.multiplyMatrices(this, [
        cosy, 0, siny, 0,
        0, 1, 0, 0,
        -siny, 0, cosy, 0,
        0, 0, 0, 1
      ]);

      this.multiplyMatrices(this, [
        cosz * scaleX, sinz * scaleY, 0, 0,
        -sinz * scaleX, cosz * scaleY, 0, 0,
        0, 0, 1 * scaleZ, 0,
        0, 0, 0, 1
      ]);

      if (skewX || skewY) {
        this.multiplyMatrices(this, [
          this._rounded(Math.cos(skewX * Matrix3D.DEG_TO_RAD)), this._rounded(Math.sin(skewX * Matrix3D.DEG_TO_RAD)), 0, 0,
          -1 * this._rounded(Math.sin(skewY * Matrix3D.DEG_TO_RAD)), this._rounded(Math.cos(skewY * Matrix3D.DEG_TO_RAD)), 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
        ]);
      }

      if (originX || originY || originZ) {
        this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
        this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
        this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
      }
      return this;
    }
  };

  function observe(target, props, callback) {
    for (var i = 0, len = props.length; i < len; i++) {
      var prop = props[i];
      watch(target, prop, callback);
    }
  }

  function watch(target, prop, callback) {
    Object.defineProperty(target, prop, {
      get: function () {
        return this["__" + prop];
      },
      set: function (value) {
        if (value !== this["__" + prop]) {
          this["__" + prop] = value;
          callback();
        }

      }
    });
  }

  var Transform = function (element) {

    observe(
      element,
      ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"],
      function () {
        var mtx = element.matrix3D.identity().appendTransform(element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ, element.skewX, element.skewY, element.originX, element.originY, element.originZ);
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
      });

    observe(
      element,
      ["perspective"],
      function () {
        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(element.matrix3D.elements).join(",") + ")";
      });

    element.matrix3D = new Matrix3D();
    element.perspective = 500;
    element.scaleX = element.scaleY = element.scaleZ = 1;
    //由于image自带了x\y\z，所有加上translate前缀
    element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ = element.skewX = element.skewY = element.originX = element.originY = element.originZ = 0;
  }
//=========================================================================================
  var lastTime = 0;
  var ticker = function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  var clearTicker = window.clearTimeout;

  var _elementStyle = document.createElement('div').style,
    endTransitionEventName,
    transitionDuration,
    transitionTimingFunction,
    transform;

  if ('transform' in _elementStyle) {
    transform = 'transform';
    endTransitionEventName = 'transitionend';
    transitionDuration = 'transitionDuration';
    transitionTimingFunction = 'transitionTimingFunction';
  } else if ('webkitTransform' in _elementStyle) {
    transform = 'webkitTransform';
    endTransitionEventName = 'webkitTransitionEnd';
    transitionDuration = 'webkitTransitionDuration';
    transitionTimingFunction = 'webkitTransitionTimingFunction';
  } else {
    throw 'please use a modern browser'
  }

  var ease = 'cubic-bezier(0.1, 0.57, 0.1, 1)',
    backEase = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';


  function reverseEase(y) {
    return 1 - Math.sqrt(1 - y * y);
  }

  function bind(element, type, callback) {
    element.addEventListener(type, callback, false);
  }

  function unbind(element, type, callback) {
    element.removeEventListener(type, callback);
  }

  function preventDefaultTest(el, exceptions) {
    for (var i in exceptions) {
      if (exceptions[i].test(el[i])) {
        return true;
      }
    }
    return false;
  }

  var AlloyTouch = function (option) {
    Transform(option.target);
    this.disablePullUp = option.disablePullUp === undefined ? false : option.disablePullUp;
    this.disablePullDown = option.disablePullDown === undefined ? false : option.disablePullDown;
    this.scroller = option.target;
    this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
    this.vertical = option.vertical;
    this.vertical === undefined && (this.vertical = true);
    this.property = option.property;

    this.preX;
    this.preY;
    this.sensitivity = option.sensitivity === undefined ? 1 : option.sensitivity;
    this.factor = option.factor === undefined ? 1 : option.factor;
    this.sMf = this.sensitivity * this.factor;
    //拖动时候的摩擦因子
    this.factor1 = 1;
    this.min = option.min;
    this.max = option.max;
    this.startTime;
    this.start;
    this.recording = false;
    this.deceleration = 0.0006;
    //css版本不再支持change事件
    //this.change = option.change || function () { };
    this.touchEnd = option.touchEnd || function () {
      };
    this.touchStart = option.touchStart || function () {
      };
    this.touchMove = option.touchMove || function () {
      };
    this.animationEnd = option.animationEnd || function () {
      };

    this.preventDefaultException = {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/};
    this.hasMin = !(this.min === undefined);
    this.hasMax = !(this.max === undefined);
    this.isTouchStart = false;
    this.step = option.step;
    this.inertia = option.inertia;
    this.inertia === undefined && (this.inertia = true);

    if (this.hasMax && this.hasMin) {
      if (this.min > this.max) throw "min value can't be greater than max value";
      this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
    }

    this._startHandler = this._start.bind(this);
    this._moveHandler = this._move.bind(this);
    this._transitionEndHandler = this._transitionEnd.bind(this);
    this._endHandler = this._end.bind(this);

    bind(this.element, "touchstart", this._startHandler);
    bind(this.scroller, endTransitionEventName, this._transitionEndHandler);
    bind(window, "touchmove", this._moveHandler);
    bind(window, "touchend", this._endHandler);
    //当有step设置的时候防止执行两次end
    this._endCallbackTag = true;
  }

  AlloyTouch.prototype = {
    _transitionEnd: function () {
      if (this.step) {
        this.correction(this.scroller, this.property);
        if (this._endCallbackTag) {
          setTimeout(function () {
            this.animationEnd(this.getComputedPosition());
          }.bind(this), 400)
          this._endCallbackTag = false;
        }
      } else {
        this.animationEnd(this.getComputedPosition());
      }
    },
    _cancelAnimation: function () {
      //console.log(window.getComputedStyle(this.scroller)[transform])
      this.scroller.style[transitionDuration] = '0ms';
      this.scroller.style[transform] = window.getComputedStyle(this.scroller)[transform];

    },
    getComputedPosition: function () {
      var matrix = window.getComputedStyle(this.scroller, null),
        x, y;
      matrix = matrix[transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
      return {x: x, y: y};
    },
    _start: function (evt) {
      this._endCallbackTag = true;
      this.isTouchStart = true;
      this._firstTouchMove = true;
      this._preventMoveDefault = true;
      this.touchStart(this.scroller[this.property]);
      this._cancelAnimation();

      if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
      }
      this.startTime = new Date().getTime();
      this._startX = this.preX = evt.touches[0].pageX;
      this._startY = this.preY = evt.touches[0].pageY;
      this.start = this.vertical ? this.preY : this.preX;
    },
    _move: function (evt) {
      if (this.isTouchStart) {
        if (this._firstTouchMove) {
          var dDis = Math.abs(evt.touches[0].pageX - this._startX) - Math.abs(evt.touches[0].pageY - this._startY);
          if (dDis > 0 && this.vertical) {
            this._preventMoveDefault = false;
          } else if (dDis < 0 && !this.vertical) {
            this._preventMoveDefault = false;
          }
          this._firstTouchMove = false;
        }
        if (this._preventMoveDefault) {
          var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sMf;
          if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
            this.factor1 = 0.3;
          } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
            this.factor1 = 0.3;
          } else {
            this.factor1 = 1;
          }
          d *= this.factor1;
          this.preX = evt.touches[0].pageX;
          this.preY = evt.touches[0].pageY;

          //d = this.disablePullUp && d < 0 ? 0 : d;
          //d = this.disablePullDown && d > 0 ? 0 : d;
          //d = this.disablePullDown && this.disablePullUp ? d = 0 : d
          this.scroller[this.property] += d;

          console.log(this.scroller[this.property]);
          var timestamp = new Date().getTime();
          if (timestamp - this.startTime > 300) {
            this.startTime = timestamp;
            this.start = this.vertical ? this.preY : this.preX;
          }
          this.touchMove(this.scroller[this.property]);

          evt.preventDefault();
        }
      }
    },
    _end: function (evt) {
      if (this.isTouchStart && this._preventMoveDefault) {
        var self = this;
        this.touchEnd(this.scroller[this.property]);
        if (this.hasMax && this.scroller[this.property] > this.max) {
          this.to(this.scroller, this.property, this.max, 200, ease);
        } else if (this.hasMin && this.scroller[this.property] < this.min) {
          this.to(this.scroller, this.property, this.min, 200, ease);
        } else if (this.inertia) {
          //var y = evt.changedTouches[0].pageY;
          var duration = new Date().getTime() - this.startTime;
          if (duration < 300) {

            var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
              speed = Math.abs(distance) / duration,
              speed2 = this.factor * speed,
              destination = this.scroller[this.property] + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);
            var tRatio = 1;
            if (destination < this.min) {
              tRatio = reverseEase((this.scroller[this.property] - this.min) / (this.scroller[this.property] - destination));
              destination = this.min;

            } else if (destination > this.max) {
              tRatio = reverseEase((this.max - this.scroller[this.property]) / (destination - this.scroller[this.property]));
              destination = this.max;
            }
            var duration = Math.round(speed / self.deceleration) * tRatio;
            if (duration < 600) duration = 600;
            self.to(this.scroller, this.property, Math.round(destination), duration, (tRatio === 1) ? ease : backEase);
          } else {
            if (self.step) {
              self.correction(self.scroller, self.property);
            }
          }
        } else {
          if (self.step) {
            self.correction(self.scroller, self.property);
          }
        }
        if (!preventDefaultTest(evt.target, this.preventDefaultException)) {
          evt.preventDefault();
        }
        this.isTouchStart = false;
      }
    },
    to: function (el, property, value, time, ease) {
      var current = el[property];
      el.style[transitionDuration] = time + 'ms';
      el.style[transitionTimingFunction] = ease;
      el[property] = value;
    },
    correction: function (el, property) {
      var value = el[property];
      var rpt = Math.floor(Math.abs(value / this.step));
      var dy = value % this.step;
      if (Math.abs(dy) > this.step / 2) {
        this.to(el, property, (value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, ease);
      } else {
        this.to(el, property, (value < 0 ? -1 : 1) * rpt * this.step, 400, ease);
      }
    },
    destroy: function () {
      unbind(this.element, "touchstart", this._startHandler);
      unbind(this.element, endTransitionEventName, this._transitionEndHandler)
      unbind(window, "touchmove", this._moveHandler);
      unbind(window, "touchend", this._endHandler);
    }
  }

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = AlloyTouch;
  } else {
    window.AlloyTouch = AlloyTouch;
  }

})();
