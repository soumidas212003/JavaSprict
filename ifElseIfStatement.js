var per=0.5;
if(per >= 80 && per <= 100){
    document.write("You are in Merit.");
}else if(per >= 60 && per < 80){
    document.write("You are in 1st Division");
}else if(per >= 45 && per < 60){
    document.write("You are in 2nd Division");
}else if(per >= 33 && per < 45){
    document.write("You are in 3rd Division");
}else if(per < 33){
    document.write("You are Fail");
}else{
    document.write("Please enter valid percent");
}