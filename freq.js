//frequency check
let str ="Hello javascript";
let freq=0;
let k = 'a';
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch===k){
        freq++
    }
}
document.write(freq);