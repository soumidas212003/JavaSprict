var arr=[
    ["Sou","BCA",96],
    ["Ruban","BCA",117],
    ["Susmita","MCA",109],
    ["Souvik","MCA",108],
    ["Altab","MCA",88]
];
//document.write(arr);
/*document.write("<table border='1px' cellspacing='0'>");
for(let a=0;a<4;a++){
    document.write("<tr>");
    for(let b=0;b<3;b++){
        document.write("<td>"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");*/
document.write("<table border='1px' cellspacing='0'>");
for(let a=0;a<arr.length;a++){
    document.write("<tr>");
    for(let b=0;b<arr[a].length;b++){
        document.write("<td>"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");