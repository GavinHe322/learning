"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MinClass_1 = require("./MinClass");
console.log(MinClass_1.A.MinClass);
var min = new MinClass_1.A.MinClass();
min.add(12);
min.add(11);
min.add(20);
console.log(min.min());
