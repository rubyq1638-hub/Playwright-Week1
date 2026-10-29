//even or odd numbers using If else

var number= 10;
    if(number > 0 && number%2 == 0)
        { console.log("It is Positive Even Number");
            console.log(number);}

else if(number > 0 && number%2 !== 0)
{ console.log("It is Positive ODD Number");
            console.log(number);}
    
else if(number < 0 && number%2 == 0)
{console.log("It is Negative Even Number");
            console.log(number);}

else if(number < 0 && number%2 !== 0)
{console.log("It is Negative ODD Number");
            console.log(number);}
else 
    console.log("The number is ZERO");

