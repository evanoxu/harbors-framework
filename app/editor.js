'use strict';

const Events = require('events');

const Electron = require('electron');
const App = Electron.app;

var eventManager = new Events.EventEmitter();

exports.on = function (...args) {
    eventManager.on(...args);
};

exports.once = function (...args) {
    eventManager.once(...args);
};

exports.emit = function (...args) {
    eventManager.emit(...args);
};

App.on('ready', function (...args) {
    exports.emit('ready', ...args);
});