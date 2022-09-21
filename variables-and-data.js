/*
 * Unsure which code to include from the video, so they're all here and labeled.
 */


/*
 * Variables
 */
let wordData;

wordData = "Word list";

console.log(wordData)

let subTotal = 100;
let tax = subTotal * .07;
let totalWithTax = tax + subTotal;


/*
 * Data Types until 9:50ish in the video before criteria change
 */
let obj = {
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "Internal Object Value"
    }
};

console.log(obj.key1);


/*
 * Data Types after 9:50ish in the video after criteria change
 */
let obj = {
    key1: "Value 1",
    key2: 3,
    obj2: {
        obj2Key1: "value of inner object",
    },
};

console.log(obj.obj2.obj2Key1);


/*
 * Typing Systems - Static/Compiled
 */
let variable: string = "string"


/*
 * Typing Systems - Strong vs Weak
 */
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);


/*
 * Typing Systems - Operators
 */
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);