let arr=[10,20,30,40];
let sum=0
document.write("<ul>");
for (let a=0;a<4;a++){
    document.write("<li>"+ arr[a]+ "</li> <br>")
    sum+=arr[a];
}
document.write("</ul>");
document.write("sum is : "+sum);