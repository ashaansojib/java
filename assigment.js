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

// =====================================================================================

// Problem 2: Find even or odd number in a string.

function evenOdd(checkEvenOdd){
    if(checkEvenOdd.length % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
const problem2 = evenOdd("Batch7")
console.log(problem2)

// =================================================================
//Problem 3: Is less or grater than seven
/*তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।
এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।
*/

function isLGSeven(numbers){
    if(numbers < 7){
        return numbers -7;
    }
    else if(numbers > 7){
        return numbers *2;
    }
}
const problem3 = isLGSeven(5);
console.log(problem3)

// ====================================================================================

// Problem 4: Finding Bad data
/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
*/ 

function findingBadData(numbers){
    let countBadData = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < 0){
            countBadData++;
        }
        else{
            console.log("Good Data");
        }
    }
    return countBadData;
}
const problem4 = findingBadData([12, -32, -43, -12, 21, -4]);
console.log(problem4)

// =======================================================================

// Problem 5: Convert your gems into diamond
/*
তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
*/
function gemsToDiamond(sojib, babu, kalam){
    let firstFGem = sojib * 21;
    let secondFGem = babu * 32;
    let thirdFGem = kalam * 43;
    let totalFDimond = firstFGem + secondFGem + thirdFGem;
    if(totalFDimond >= 2000){
        return totalFDimond - 2000;
    }else{
        return totalFDimond;
    }
}
const problem5 = gemsToDiamond(100, 5, 1);
console.log(problem5);