            //Work-1

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var Rajshahi = kilometerToMeter(10);
console.log(Rajshahi);
var Dhaka = kilometerToMeter(30);
console.log(Dhaka);
var sylhet = kilometerToMeter(50);
console.log(sylhet);


                // Work-2

function budgetCalculator(watch, phone, laptop){
    var result = watch*50 + phone*100 + laptop*500;
    return result;
}
var total = budgetCalculator(10, 15, 25);
console.log(total);


                // Work-3

function hotelCost(days){
    var rent = 0;
    if(days<=10){
        rent = days*100;
    }else if (days<=20){
        var tenDays = 10*100;
        var remaining = days -10;
        var secondTenDays = remaining*80;
       rent = tenDays + secondTenDays;
    }else{
        var tenDays = 10*100;
        var secondTenDays = 10*80;
        var remainning = (days - 20)*50;
        rent = tenDays + secondTenDays + remainning;
    }
    return rent;
}
var total = hotelCost(31);
console.log(total);



        //    Work-4

function megaFriend(name){
    var largest = name[0];
    for (var i = 0; i< name.length; i++){
        if(name[i].length>largest.length){
            largest = name[i];
        }
    }
    return largest;
}
var name = ["Apple", "Orange", "Benanas", "Anamika","Sagorika"];
console.log(megaFriend(name));


// Bonus-part = couldn't understand


function LeapYear(year) {
    const remainder = year % 4;
     if (remainder == 0) {
         return true;
     } else {
         return false;
     }
 }
 
 const trial = LeapYear(2121);
 console.log(trial);

 








