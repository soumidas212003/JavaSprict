let num=6;
let flag=true;
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log("Prime Number");
}else{
    console.log("Not Prime");
}