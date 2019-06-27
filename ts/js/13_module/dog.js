"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = __importDefault(require("./Animal"));
var dog = new Animal_1.default.Animal('旺财');
console.log(Animal_1.default);
console.log(dog.eat('狗粮'));
console.log(dog.name);
