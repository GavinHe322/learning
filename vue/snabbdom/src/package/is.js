"use strict";
exports.__esModule = true;
exports.primitive = exports.array = void 0;
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
