"use strict";

var _rxjs = require("rxjs");

var observer = {
  next: function next(value) {
    return console.log('next', value);
  },
  error: function error(_error) {
    return console.log('error', _error);
  },
  complete: function complete() {
    return console.log('complete');
  }
};
var observable = new _rxjs.Observable(function (subscriber) {
  subscriber.next('Push it to a subscriber');
});
observable.subscribe(observer);
console.log('hell');