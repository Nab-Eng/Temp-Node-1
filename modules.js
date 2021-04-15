//Modules - Are Encapsulated code(enables the sharing of the most minimum)
// CommonJS, Every file is a module(by default)
var names = require('./names')
var sayHi = require('./utils')
var data = require('./6-altenative-flavor')
require('./vanilla-js/7-mindgrinade');

sayHi(names.john);
sayHi(names.peter);
sayHi('Mathew')