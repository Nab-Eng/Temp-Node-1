// CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

var secret = 'SUPER SECRET'
var john = 'john'
var peter = 'peter'

var sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi('susan');
sayHi(john);
sayHi(peter);

