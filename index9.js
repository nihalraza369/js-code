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

function calculate(...num1){
     return num1
}

console.log(calculate(200,300,300));


const userstudent={
    name:"nihalraza",
    age:16
}

function anyuser(anyobject){
    console.log(`username is ${anyobject.name} and your age is ${anyobject.age}`);
}

//anyuser(userstudent)
anyuser({
    name:"huzaifa",
    age:15
})

