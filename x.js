//1
let i = 65
let j= 90
for (; i <= j; i++) {
    console.log(String.fromCharCode(i));
}
//2
let u = require ('prompt-sync')();
let user = u ('Enter a word: ');
let p = 0;
while (p < user.length){
    console.log(user.charAt(p));
    p++;
}
// 3

let v = 65
let b= 90
for (; b >= v; b--) {
    console.log(String.fromCharCode(b));
}
//4