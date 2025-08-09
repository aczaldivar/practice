var difference = 45 -33; 
console.log (difference);

var mydecimal= 1.2 + 4.4;
console.log(mydecimal);

var remainder;
remainder= 11 %3;
console.log(remainder);

var a=3;
var b=1;
a+=2;
b+=7;
console.log(a+b);

var myFirstName= "Anna";
var myLastName= "Casey"; 
console.log( "My name is "+ myFirstName +" "+ myLastName);

var ourStr= "I come first";
ourStr += "I come second";

var myStr= "This is the first sentence";
myStr +="This is my second sentence";

console.log(`${ourStr}  ${myStr}`)

var numbernotation="";
var aName="Ada";
var bName="Garcia"
numbernotation= aName[1];
numbernotation= bName[3];
console.log(numbernotation+ numbernotation);

var myArray= [18,60,78];
myArray[0]=13;
console.log(myArray);
myArray.pop(2);
console.log(myArray);


   
var outerWear= "T-shirt";
function myOutfit(){
var outerWear = "pants";
return outerWear;

}
console.log(myOutfit());

function sub(a){
return a/10;
}
console.log(sub(8));

function timesblah (blah){
    return (blah*20/2);
}
console.log(timesblah(10));

var item=400; 
function OverView(item){
    return item;

}
console.log ((item));



function trueorfalse (ThatisTrue){
    if (ThatisTrue){
        return "Yes of Course";
    }
   return "No way go away";
}

console.log (trueorfalse(false));

function Equalizer(variable){
    if (variable==30){
        return "Equal";
    }
    return "not equal"
}
console.log(Equalizer(22));



function Comparing (x,y){
    if (x<3 && y<3){
        return "Happy!";
    }
    if (x>3 && y>3){
        return "oh NO!";
    }
    else {
        return "whatever!";
    }
}
console.log((Comparing(3)));

function dunno(val){
    if (val>20){
        return "too much!";
    } else if (val<5){
        return "too small";
    }
    else {
        return "just right!";
    }
}

console.log (dunno(10));