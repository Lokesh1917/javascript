// wap program to reverse a string 

let str="This is a string"

// for (char of str){
//     console.log(str.length)
// }

let reversed = ""
for(i=str.length-1;i >=0;i--){
    reversed + str[i]
}
console.log(`reveersed string : ${reversed}`)
