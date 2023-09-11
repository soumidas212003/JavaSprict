//Slice() Method

/*let a=["sou","soumi","somu","Soumita"];
let b=a.slice(1,3);
let c=a.slice(-3,-1);
let d=a.slice(1);
document.write(b+"<br>");
document.write(c+"<br>");
document.write(d+"<br>");*/

//Splice() Method

/*let a=["sou","soumi","somu","Soumita"];
//a.splice(2,0,"virat","Dhoni");
//a.splice(2,1,"virat","Dhoni");  //Add
//a.splice(2,2);                  //Delete
a.splice(2,1);
document.write(a);*/

//isArray() Method

/*let a=20;
//let a=["sou","soumi","somu","Soumita"];
document.write(a+"<br><br>");
let b=Array.isArray(a);
document.write(b+"<br><br>");*/
/*let a=20;
//let a=["sou","soumi","somu","Soumita"];
document.write(a+"<br><br>");
if(Array.isArray(a)){
    document.write("This is an Array");
}else{
    document.write("This is not an Array");
}*/

//indexOf() & lastIndexOf() method

/*let a=["soumi","sou","somu","Soumita","sou"];
document.write(a+"<br><br>");
//let b=a.indexOf("sou");
//let b=a.indexOf("soumi");
//let b=a.indexOf("sou",2);
let b=a.indexOf("sou",-5);
document.write(b);*/
/*let a=["soumi","sou","somu","Soumita","sou"];
document.write(a+"<br><br>");
//let b=a.lastIndexOf("sou");
//let b=a.lastIndexOf("soumi");
//let b=a.lastIndexOf("sou",2);
document.write(b);*/

//includes() Method

/*let a=["sou",45,82,"👍"];
document.write(a+"<br>");
let b=a.includes("👍");
document.write(b);*/

//some() Method

/*let ages=[10,20,5,15];
document.write(ages+"<br>");
let b=ages.some(CheckAdult);
document.write(b+"<br>");
function CheckAdult(age){
    return age>=18;
}*/

//every() Method

/*let ages=[10,20,5,15];
document.write(ages+"<br>");
let b=ages.every(CheckAdult);
document.write(b+"<br>");
function CheckAdult(age){
    return age>=18;
}*/

//find() Method

/*let ages=[10,20,5,15];
document.write(ages+"<br>");
let b=ages.find(CheckAdult);
document.write(b+"<br>");
function CheckAdult(age){
    return age>=18;
}*/

//findIndex() Method

/*let ages=[10,20,5,15];
document.write(ages+"<br>");
let b=ages.findIndex(CheckAdult);
document.write(b+"<br>");
function CheckAdult(age){
    return age>=18;
}*/

//filter() Method

/*let ages=[10,20,5,18];
document.write(ages+"<br>");
let b=ages.filter(CheckAdult);
document.write(b+"<br>");
function CheckAdult(age){
    return age>=18;
}*/

//tostring() Method

/*let a=["Sou","Mou","Soumi","Suchi"];
let b=a.toString();
document.write(b+"<br>");
document.write(typeof(b));*/

//valueof() Method
/*let a=["Sou","Mou","Soumi","Suchi"];
document.write(a.valueOf());*/

//fill() Method

/*let a=["Sou","Mou","Soumi","Suchi"];
a.fill("virat");
document.write(a);*/

//forEach Method

/*let a=["Sou","Mou","Soumi","Suchi"];
a.forEach(function(value,index){
    document.write(index+":"+value+"<br>");
});*/

let a=["Sou","Mou","Soumi","Suchi"];
a.forEach(loop);
function loop(value,index){
    document.write(index+":"+value+"<br>");
}