let mysym=Symbol("key1")
let jsuser={
    name:"nihal raza",
    [mysym]:"mykey1",
    age:16,
    location:"karachi",
    email:"nonipaa@goole.com",
    islogin:false
}

console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser[mysym]);

jsuser.email="nonipaachatgpt@.com"
Object.freeze(jsuser)


/*
jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());
*/

const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="nihal"
tinderuser.islogin=false

console.log(tinderuser);



const regulaname ={
    email:"nihalrazagoogle.com",
    fullname:{
        username:{
            firstname:"nihal",
            lastname:"nughman"
        }
    }
}
console.log(regulaname);
console.log(regulaname.fullname.username.firstname);
console.log(Object.keys(regulaname));
console.log("jn");
console.log(Object.values(regulaname));
console.log(Object.entries(regulaname));
console.log(regulaname.hasOwnProperty('email'));






const obj1 ={1:"nihal",2:"huzaifa"}
const obj2 ={3:"khizer",4:"habib"}

const obj3=Object.assign(obj1,obj2)
const obj4={...obj1,...obj2}
const obj5={obj1,obj2}

console.log(obj3);
console.log(obj4);
console.log(obj5);


