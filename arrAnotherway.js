//let arr=new Array(10,20,30,40);
let arr=new Array(3);
/*arr[0]=52;
arr[1]=21;
arr[3]=10;*/
for(let g=0;g<3;g++){
    arr[g]=prompt("Enter the value: ");
}
document.write("<ul>");
for (let a=0;a<3;a++){
    document.write("<li>"+ arr[a]+ "</li> <br>");
}
document.write("</ul>");
