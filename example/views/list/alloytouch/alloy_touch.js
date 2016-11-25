﻿/* AlloyTouch v0.1.0
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */
;(function () {
    (function () {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
    }());

    function bind(element, type, callback) {
        element.addEventListener(type, callback, false);
    }

    function iosEase(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }

    function preventDefaultTest (el, exceptions) {
        for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
                return true;
            }
        }
        return false;
    }

    var AlloyTouch = function (option) {
        this.scroller = option.target;
        this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
        this.vertical = option.vertical;
        this.vertical === undefined && (this.vertical = true);
        this.property = option.property;
        this.tickID = 0;
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
        this.deceleration = 0.0006;
        this.change = option.change || function () { };
        this.touchEnd = option.touchEnd || function () { };
        this.touchStart = option.touchStart || function () { };
        this.touchMove = option.touchMove || function () { };
        this.reboundEnd = option.reboundEnd || function () { };
        this.animationEnd = option.animationEnd || function () { };
        this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ };
        this.hasMin = !(this.min === undefined);
        this.hasMax = !(this.max === undefined);
        this.isTouchStart = false;
        this.step = option.step;
        this.inertia = option.inertia;
        this.inertia === undefined && (this.inertia = true);
        this.correctionEnd = option.correctionEnd || function () { };
        this.intelligentCorrection = option.intelligentCorrection;
        if (this.hasMax && this.hasMin) {
            if (this.min > this.max) throw "min value can't be greater than max value";
            this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
        }
        bind(this.element, "touchstart", this._start.bind(this));
        bind(window, "touchmove", this._move.bind(this));
        bind(window, "touchend", this._end.bind(this));
    }

    AlloyTouch.prototype = {
        _start: function (evt) {
            this.isTouchStart = true;
            this._firstTouchMove = true;
            this._preventMoveDefault = true;
            this.touchStart(this.scroller[this.property]);
            cancelAnimationFrame(this.tickID);
            this.correctionEnd(this.scroller[this.property]);
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
                    var dDis=Math.abs(evt.touches[0].pageX - this._startX) - Math.abs(evt.touches[0].pageY - this._startY);
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
                    this.scroller[this.property] += d;
                    this.change(this.scroller[this.property]);
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
                    this.to(this.scroller, this.property, this.max, 200, iosEase, this.change,function(value){
                        this.reboundEnd(value);
                        this.animationEnd(value);
                    }.bind(this));
                } else if (this.hasMin && this.scroller[this.property] < this.min) {
                    this.to(this.scroller, this.property, this.min, 200, iosEase, this.change,function(value){
                        this.reboundEnd(value);
                        this.animationEnd(value);
                    }.bind(this));
                } else if (this.inertia) {
                    //var y = evt.changedTouches[0].pageY;
                    var duration = new Date().getTime() - this.startTime;
                    if (duration < 300) {
                        var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                            speed = Math.abs(distance) / duration,
                            speed2 = this.factor * speed,
                            destination = this.scroller[this.property] + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                        self.to(this.scroller, this.property, Math.round(destination), Math.round(speed / self.deceleration), iosEase, function (value) {

                            if (self.hasMax && self.scroller[self.property] > self.max) {
                                setTimeout(function () {
                                    cancelAnimationFrame(self.tickID);
                                    self.to(self.scroller, self.property, self.max, 200, iosEase, self.change, self.animationEnd);
                                }, 50);
                            } else if (self.hasMin && self.scroller[self.property] < self.min) {
                                setTimeout(function () {
                                    cancelAnimationFrame(self.tickID);
                                    self.to(self.scroller, self.property, self.min, 200, iosEase, self.change, self.animationEnd);
                                }, 50);
                            }

                            self.change(self.scroller[self.property]);
                        }, function () {
                            if (self.step) {
                                self.correction(self.scroller, self.property);
                            } else {
                                self.animationEnd(self.scroller[self.property]);
                            }
                        });
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
        to: function (el, property, value, time, ease, onChange, onEnd) {
            var current = el[property];
            var dv = value - current;
            var beginTime = new Date();
            var self = this;
            var toTick = function () {

                var dt = new Date() - beginTime;
                if (dt >= time) {
                    el[property] = value;
                    onChange && onChange(value);
                    onEnd && onEnd(value);
                    return;
                }
                el[property] = dv * ease(dt / time) + current;
                self.tickID = requestAnimationFrame(toTick);
                //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
                onChange && onChange(el[property]);
            }
            toTick();
        },
        correction: function (el, property) {
            var value = el[property];
            if (this.intelligentCorrection&&this.hasMax && this.hasMin) {              
                var prevPage = this.currentPage;
                var d = this.scroller[this.property] - (this.max - prevPage * this.step);
                if (Math.abs(d) > this.step / 20) {
                    if (d > 0) {
                        this.to(el, property, (value < 0 ? -1 : 1) * (prevPage - 1) * this.step, 400, iosEase, this.change, function (value) {
                            this.correctionEnd(value);
                            this.currentPage = prevPage - 1;
                            this.animationEnd(value);
                        }.bind(this));
                       
                    } else {
                        this.to(el, property, (value < 0 ? -1 : 1) * (prevPage + 1) * this.step, 400, iosEase, this.change, function (value) {
                            this.correctionEnd(value);
                            this.currentPage = prevPage + 1;
                            this.animationEnd(value);
                        }.bind(this));
                    }
                    
                } else {
                    this.to(el, property, (value < 0 ? -1 : 1) * prevPage * this.step, 400, iosEase, this.change, function (value) {
                        this.correctionEnd(value);
                        this.animationEnd(value);
                    }.bind(this));
                }
            } else {              
                var rpt = Math.floor(Math.abs(value / this.step));
                var dy = value % this.step;
                if (Math.abs(dy) > this.step / 2) {
                    this.to(el, property, (value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, iosEase, this.change,  function (value) {
                        this.correctionEnd(value);
                        this.animationEnd(value);
                    }.bind(this));
                } else {
                    this.to(el, property, (value < 0 ? -1 : 1) * rpt * this.step, 400, iosEase, this.change, function (value) {
                        this.correctionEnd(value);
                        this.animationEnd(value);
                    }.bind(this));
                }
            }
        }
    }

    window.AlloyTouch = AlloyTouch;

})();
