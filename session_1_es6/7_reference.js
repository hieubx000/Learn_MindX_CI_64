console.log(1 === 1);
console.log("hello" === "hello");

console.log({} === {});

let x = {};
let y = x;
console.log(x === y);
x.name = "MindX";
console.log(y);

const t = {}
const z = {}
t.name = "MindX";
console.log(z);
// string, number, bool, null, undefined => primitive Datatype
// object => Reference Datatype