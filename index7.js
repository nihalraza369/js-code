const myarrs=[1,2,3,"nihal",7.9]
const myheroes=["osman","ertughrul","fateh","salahudin"]
console.log(myarrs);
console.log(myheroes);
console.log(myheroes[0]);

myarrs.push(9)
myarrs.push(10)
myarrs.pop()
myarrs.unshift(0)
console.log(myarrs.includes(7));
console.log(myarrs.includes(7.9));
const newa =myarrs.join()
console.log(newa);
console.log(myarrs);


console.log("a",myarrs);
const myn1= myarrs.slice(2,3)
console.log(myn1);
console.log("b",myarrs);


const myn2=myarrs.splice(1,3)
console.log(myn2);




const myheroes1=["osman","gundoz","sawchi"]
const myheroes2=["ertughrul son"]
myheroes2.push(myheroes1)
console.log(myheroes2);


const anotherarray =[1,2,3,4,5,[6,7]]
const real_another=anotherarray.flat(Infinity)
console.log(real_another);
console.log(Array.from("nihal"))


let score=100
let score1=110
let score2=120


console.log(Array.of(score,score1,score2));
