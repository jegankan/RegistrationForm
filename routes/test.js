var str='how are you\\buddy';
// var output=str.split(" ",3);
// console.log(output);
var reqoutput=str.lastIndexOf('\\');
console.log(reqoutput);
console.log(str.length);
var finalout=str.slice(reqoutput+1,str.length)
console.log(finalout);