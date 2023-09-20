"use strict";
// ------ Data types ------- //
// String type -> " "  , ' ' , ` `;
let a;
let str;
// str = 22222;
// Number type -> 1, 1.12 , 0.34444 , -112 , 9999999
// let num: number;
// num = 12;
// // num = false;
// // num = null;
// console.log(num);
// // Boolean type -> true, false
// let load: boolean = true;
// load = false;
// // load = "loading . . .";
// console.log(load);
// // Undefined type -> undefined
// let undef: undefined = undefined;
// // Null type -> null
// let nul: null = null;
// // Object type -> Object
// // let person: object = {
// //     name: "Jahongir",
// //     age: 22,
// //     city: "New York",
// // };
// let person: {name: string; age: number; city: string; isLife: boolean; address: any} = {
//     name: "Jahongir",
//     age: 22,
//     city: "New York",
//     isLife: true,
//     address: "Buxoro",
// };
// person.address = true;
// console.log(person);
// // Any type ->
// let anyVar: any = 123;
// anyVar = "123";
// anyVar = true;
// anyVar = null;
// anyVar = undefined;
// anyVar = {};
// anyVar = [];
// // Function types -> Void function , Never  ,  Overload  , Siganture , Declaration , Expression , Arrow;
//  Void function
function something(message) {
    console.log("sms: ", message);
}
something("Hello TS");
// Never type
// function never():never {
//     throw new Error("nimadur xato");
// }
// never()
// type Decloraton
function add(a, b) {
    return `${a}+${b}=${a + b}`;
}
console.log(typeof add(12, 11));
