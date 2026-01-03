let str='entertainment'

//first non-repetead char

// if index of char and last index of char is same then the the char is not same
//all non - repeated char
for (char of str){
    if (str.indexOf(char) == str.lastIndexOf(char)){
        console.log(char)
    }  
}


//for the first non repeated char 
for (char of str){
    if (str.indexOf(char) == str.lastIndexOf(char)){
        console.log(char)
        break
    }  
}
