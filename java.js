// check biggest numbers in a function
var num1 = 5240;
var num2 = 800;
var num3 = 700;
if(num1 > num2 && num2 > num3){
	// console.log(num1);
}
else if(num2 > num3){
	// console.log(num2);
}
else if(num3> num1){
	// console.log(num3);
}
//============================================
//nested is else block
var num = "66";
if (num > 30) {
	if (typeof num == "string") {
		// console.log("its string");
	}
	else{
		// console.log("this num is 30 but not string");
	}
}
else{
	// console.log("this is not number string");
}
// =========================================================
// chceck typeof ay values
// console.log(typeof false)
// ==========================================================
//grading system
var marks = 54;
if(marks > 100){
	// console.log("marks kamne 100 er upre jay vai..")
}
else if(marks >=0 && marks <=39){
	// console.log("F", marks)
}
else if(marks >=40 && marks <=49){
	// console.log("D", marks);
}
else if(marks >= 50 && marks <=59){
	// console.log("C", marks)
}
else if(marks >= 60 && marks <=69){
	// console.log("B", marks)
}
else if(marks >=70 && marks <=79){
	// console.log("A", marks)
}
else if(marks >=80 && marks <=100){
	// console.log("A+", marks)
}
else{
	// console.log("marks ki 0 er nicheo hy!")
}
//================================================

function add(a, b){
    return a + b;
}
const add = ["adam" + "eve"];
console.log()