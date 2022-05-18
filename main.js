// צרו פונקציה המקבלת מהמשתמש שם פרטי, אם השם מתחיל ב A היא מדפיסה לקונסול "hello" אחרת מדפיסה "bye".
// function user(){
// var name = prompt("type ypur first name");
// if(name[0]=="A"){
//     console.log("hello")
// }
// else
// console.log("bye")


// }
// user()


// צרו פונקציה המקבלת מהמשתמש שם משפחה, אם השם מסתיים ב E היא מחזירה "yes" אחרת היא מחזירה "no".
// יש ללמוד את שקופית 27 ולתרגל ברשת.
// function users(){
// var lastName = prompt("type your last name")
// if(lastName[lastName.length-1] =="E"){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }
// }
// users();



// String	כתוב פונקציה ב-JS המקבלת מחרוזת ומחזירה uppercase שלה	
// function printWithUpperCase(str){
//     return str.toUpperCase();
// }
// console.log(printWithUpperCase("hello world"));

// כתוב פונקציה ב-JS המקבלת מחרוזת עם מספרים מופרדים בעזרת פסיק ומחזירה מערך של המספרים.
// לדוגמא עבור "12,3,455" יוחזר מערך עם המספרים 12,3,455
// function printAndReturnWithOutSrtingType(){
//     var sum = []
//     var cutStr="12,3,455";
//     cutStr.concat();
//     sum+=cutStr
//     return sum
// }
// console.log(printAndReturnWithOutSrtingType());

// כתוב פונקציה ב-JS המקבלת מחרוזת של key:value מופרדים בעזרת פסיק. יש להחזיר את אורך מחרוזת value הארוכה ביותר.
// לדוגמא עבור המחרוזת 7 (האורך של "krasney")
 
// function printBiggestLength(myString){
//     var maxlengthvalue = ""
//     var startValue = ""
// for(var i = 0 ; i<myString.length;i++){

//     if(myString[i]==":"){
//         startIndex = i+1
//     }

//     if(myString[i]==":"){
//         endIndex = i
//        startValue = myString.substring(startIndex,endIndex)

//     }
//     if(myString[i]==":"){
//         endIndex = i+1
//         startValue = myString.substring(startValue,endIndex)
//     }
//     if(startValue.length > maxlengthvalue){
//         maxlengthvalue = startValue ;
//     }
    
// }
// return maxlengthvalue

}
printBiggestLength("lior:hamelech , eldad:barahano , nati:banana")