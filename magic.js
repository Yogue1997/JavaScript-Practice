let prompt = require ('prompt-sync')();
console.log(`chose any number from 1 to 5`);

let num = prompt ('enter number: ');
num = Number(num)

switch (num) {
    case 1:
    console.log('keep on coding');
    break;
    case 2:
    console.log(`Don't be like me, stop watching one piece`);
    break;
    case 4:
    console.log(`Practice more`);
    break;
    case 5:
    console.log(`Be proud of yourself`);
    break;
    default :
    console.log(`Why are you trying my code? is this a 1 to 5 number? 🤨`);
}


