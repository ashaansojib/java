// 1. convert inch to feet and miles to KM:===================
let findFeet = 288;
let inch = 12;
let isFeet = findFeet / inch;
// console.log( "You got The Feet is: ", isFeet);
// 2. mile to kilometre=======================================
const mile = 4;
const perKm = 0.621371;
let total = mile * perKm;
let fix = total.toFixed(2);
// console.log( "four mile this KM: ", fix)
// 3. check even or odd number using function=================
function checkOdd(numbers){
    let check = 2;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element % check == 0){
            // console.log("find the even number in this array: ", element)
        }
        else if(element % check == 1){
            // console.log("here is the odd numberse: ", element)
        }
    }
}
const store = [12, 43, 54, 55, 32, 65, 32, 47];
const checkDone = checkOdd(store);
// console.log(checkDone)
// check year is leap year or not==========================================
function checkLeapYear(numbers){
    let check = 4;
    for(let i = 0; i <numbers.length; i++){
        const element = numbers[i];
        if(element % check == 0){
            // console.log(element)
        }
    }
    return true;
}
const storeYear = [2024, 2018, 2019, 2020, 2021, 2022];
const isLeapYear = checkLeapYear(storeYear);
// console.log(isLeapYear);
// calculate sum all of an array==============================================
function findSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const storeSum = [12, 12, 13];
const isSum = findSum(storeSum);
console.log(isSum);