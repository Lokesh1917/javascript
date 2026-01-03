let str= 'Rain in spain mainlys stays in plAin'


//find the occurances of ain 

let result=str.match(/ain/)
console.log(result)


let res=str.match(/ain/g) //g means print all occurances
console.log(res)

let res1=str.match(/ain/gi) //i ignores cases
console.log(res1)


let mystr="I have 14 pens and 16 pencils with me"
console.log(mystr.match(/[0-9]/g))
console.log(mystr.match(/[0-9]{1,2}/g))