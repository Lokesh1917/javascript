let str1 = 'Hello' // string literals
let str2 = 'Hello' // string literals

let str3 = new String('hello')
let str4 = new String('hello')


console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(typeof str4)

///comparison

console.log(str1 == str2)
console.log(str2 == str3)
console.log(str3 == str4) /// false as it compares the memory locations of the obj not the value



