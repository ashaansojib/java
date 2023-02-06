/*
Problem 1: This problem has a specific function name its called "mindGame()" It will take a positive number as the value of the function. Multiply that value by 3, Then add 10 to that value, And devided that value by 2, and finally subtract 5 with that value which will be shown as output.
*/
function mindGame(number){

    if (isNaN(number)) {
        return "Error: Invalid parameter - expected a string.";
    }

    let multiNum = number *3;
    let numAdd = multiNum + 10;
    let numDevide = numAdd / 2;
    let numMinus = numDevide - 5;
    const total = numMinus;
    return total;
}
// const result = mindGame(5);
// console.log(result)

/*
Problem 2: Find even or odd number in a string. This function name called "evenOdd()". This code acctually return the character value of a stirng. If the char number is even the output show it is even and the number is odd its return odd.
*/
function evenOdd(checkEvenOdd){
    if (typeof checkEvenOdd == "number") {
        return "Error: Invalid parameter - expected a string.";
      }

    if(checkEvenOdd.length % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
// const result = evenOdd("sa");
// console.log(result)

/*
Problem 3: Is less or grater than seven. It has a specific function name its called "isLGSeven()". This function peramitar take a valid number. This problem need to check with the number of 7. Now it needed to comparision to the value and the number. If the value is less than 7 return the minus value. On the other hand, if the value is gratter than 7 then return this value with double multiply.
*/ 
function isLGSeven(numbers){
    if(isNaN(numbers)){
        return "Error: You Provide the invalid arguement!!"
    }

    if(numbers < 7){
        return numbers -7;
    }
    else if(numbers > 7){
        return numbers *2;
    }
}
// const problem3 = isLGSeven("6");
// console.log(problem3)

/*
Problem 4: Finding Bad data. If this function vale is less than 0. Then we called that value as nagetive numbers. Now i have to find the nagetive value and count it and return it.
*/
function findingBadData(numbers){
    // if the code is not exicute it will be show as error message
    if(!Array.isArray(numbers)){
        return "Error: You Provide the invalid arguement!!"
    }

    let countBadData = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < 0){
            countBadData++;
        }
        else{
            // console.log("Good Data");
        }
    }
    return countBadData;
}
// const problem4 = findingBadData([-12, 21, -12, -32, -54]);
// console.log(problem4)

/*
Problem 5: Convert your and your friend gems into diamond. This function has a peramiter called "gemsToDiamond()". Here three friend has different value of gems like 21, 32, 43. Now i need to total gem muliplied by input number. Lastly the total gem is uder 2k just return that value, But the total gems is 2k or above 2 multiple value the to subtract by 2000.
*/
function gemsToDiamond(sojib, babu, kalam){
    // if the code is not exicute it will be show as error message
    if(isNaN(sojib) || isNaN(babu) || isNaN(kalam)){
        return "Error: You Provide the invalid arguement!!"
    }

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
// const problem5 = gemsToDiamond(100, 5, 1);
// console.log(problem5);