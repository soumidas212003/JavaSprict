/*let a=[10,20,30];
let b=a.map(multi);
document.write(b);
function multi(x){
    return x*5;
}*/
let a=[
    {
        Name : "sou",
        Age : 20
    },
    {
        Name : "Mou",
        Age : 25
    },
    {
        Name : "Riya",
        Age : 18
    }
];
let b=a.map(nameprint);
document.write(b);
function nameprint(x){
    return x.Name+" "+x.Age;
}