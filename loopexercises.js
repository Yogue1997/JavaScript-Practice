// count down from 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("________");

// odd number
for (i = 1; i <= 10; i +=2 ){
    console.log(i);
}

console.log("________");

// even number

for(i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("________");

// multiple start 6 by 3

for(i = 6; i <= 60; i *=3) {
    console.log(i);
}

console.log('_____');

for (i =1; i <= 20 ; i +=2) {
    console.log(`${i} odd number`);
    for (i =2 ; i <= 20 ; i+=2){
        console.log(i + " even number");
    }
}