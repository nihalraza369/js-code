function  addtwonumer(number1,number2){
    let result=number1+number2
    return result
}
const result= addtwonumer(1,4)
console.log("result",result);

function loginit(username){

    if(!username){
        console.log("pleas enter the name");
        return   
    }
    return`${username}just you loggin`
}

console.log(loginit());
