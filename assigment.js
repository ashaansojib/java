// Problem 1: it takes a positive number as function value.
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে,
//  তারপর 10 যোগ করে, 
// তারপর 2 দিয়ে ভাগ করে, 
// তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। 
function mindGame(number){
    let getNum = number *3;
    let numAdd = getNum + 10;
    let numDevide = numAdd / 2;
    let numMinus = numDevide - 5;
    return numMinus;
}
const positiveNum = mindGame(33);
console.log(positiveNum)