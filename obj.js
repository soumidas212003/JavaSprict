let a={
    fname : "Soumita",
    lname : "Das",
    email : "soumitad991@gmail.com",
    favSub : ["Computer","Math","Geography"],
    fullname : function(){
        return this.fname+" "+this.lname;
    }
};
document.write(a.fname+"<br>");
document.write(a.favSub[2]+"<br>");
document.write(a.fullname());