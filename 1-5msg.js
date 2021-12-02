var age = 15;

if (age > 0) {
    if (age >= 5 && age <=10) {
        console.log("you are an elementary schooler");
    } else if(age >= 11 && age <=13){
        console.log("you are a middle schooler");
    } else if (age >= 14 && age <= 17) {
        if (age >= 16) {
            console.log("you are an high schooler and eligible to drive");
        }
        else{
            console.log("you are an high schooler");
        }
    }
}
else{
    console.log("you are not in school");
}

