// var a=10; //Reinitialize & Redeclare
// let  b=20; //Reinitialize
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=10;
// var str="Ganashri";
// var undefine;
// var Null=null;
// var boolean=true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefine);
// console.log(typeof null);
// console.log(typeof boolean);

                                                                                                                                                        
// var bigInt= 123n;
// var symbol = Symbol('li');                                                 

// console.log(typeof bigInt)
// console.log(typeof symbol)

// var arr=[10,20,30,40];
// console.log(typeof arr,arr);
// var obj={
//     name:"Ganashri",
//     dept:"Bsc CT",
// }
// console.log(typeof obj,obj)

//arithmetic operator (+,-,*,%,/)

// var a =10;
// var b =20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a%b);
// console.log(a/b);

//logical operator (&&,||,!)
//                 &&       ||      
 // true  true     true     true
 // true  false    false    true
 // false true     false    true
 // false false    false    false

// var a=true;
// var b=false;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

//relational operator (>,>=,<,<=,==,!=)

// a=10;
// b="20";

// console.log(a>b);
// console.log(a>=b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);

//assignment operator
// a=10;
// b=20;

// a+=b; //30
// console.log(a);
// a-=b;
// console.log(a);

//unary operator (--,++)

// var a=10;

// console.log(a++);
// console.log(++a);

// var a=10;

// console.log(a--);
// console.log(--a);

// var a=10;
// var b=20;

// if(true){
//     console.log(`${a} + ${b} = ${a+b}`)
// }

// if(true){
//     a=10;
//     console.log(a);
// }

//var a; //Hoisting
// console.log(a);
// var a=10;

// var a=10;//global scope
// let b=20;//block scope
// const c=20;//block scope
// if(true){
//     var a=40;
//     console.log(a);
//     //let b=30;//block scope
//     const c=30;//block scope
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a=10;
// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// var mark=90;
// if(mark>=90){
//     console.log(`O grade`);
// }
// else if(mark>=70){
//     console.log(`a grade`);
// }
// else if(mark>=35){
//     console.log(`pass`);
// }
// else{
//     console.log(`fail`);
// }

// var a=10;
//  //condition?true statement:false statement;
//  var result = a%2===0 ? "even number" : "odd number";
//  console.log(result)

// mark=90;
// var result = (mark>=90) ? "O grade" :
//              (mark>=70) ? "A Grade" :
//              (mark>=35) ? "pass" :
//              "Fail";
// console.log(result);

// var day = 2;
// switch(day){
//     case 1:{
//         console.log("Sunday");
//         break;
//     }
//     case 2:{
//         console.log("Monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("Wednesday");
//         break;
//     }
//     case 5:{
//         console.log("Thursday");
//         break;
//     }
//     case 6:{
//         console.log("Friday");
//         break;
//     }
//     case 7:{
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invaild Input");
//     }
// }

//Looping Statement

// 1 time 11 times 10 times
// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val = 1024;
// var count = 0;
// while(val > 0){
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count);

// do{
//     console.log("do..while")
// }while(false);

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         break;
//     }
//     console.log(i);
// }


// function add(a=5,b=5){
//     console.log(a+b);
// }

// add(); //hoisting

// //Arrow Function
// var demo = (a = 5,b = 5) => {
//      console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr2)

//Destructuring Operator

// var [m1,m2,m3,m4,m5] = [91,92,93,94,95];
// console.log(m1,m2,m3,m4,m5);

// var {name,mobile,dept,email,isActive} = {
//     name:"Ganashri",
//     mobile:"9934567888",
//     dept:"BSc CT",
//     email:"shrivkgana@gmail.com",
//     isActive:true
// }
// console.log(name,mobile,dept,email,isActive);

// var arr = [10,20,30,40,50];
// //for..in
// for(let index in arr){
//     console.log(index)
// }
// //for..of
// for(let value of arr){
//     console.log(value)
// }
// var obj = {
//     name:"Ganashri",
//     mobile:"9934567888",
//     dept:"BSc CT",
// }
// for(let key in obj){
//      console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val)=>(val*2));
// console.log(result);

// var even = arr.filter((val)=>val%2===0);
// console.log(even)

// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var username = {
    name:"Ganashri",
    dept:"BSc CT",
    skills:{
        Programming:["Javascript,C++,C"],
        Database:["SQL"]
    }
}
var user = {
    ...username,
    password:123435
}
console.log(user)