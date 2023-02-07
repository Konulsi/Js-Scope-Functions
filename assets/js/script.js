"use strict"



//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.



// function numsDividedThreeOrSeven(num) {

//     if (num % 21 == 0) {
//         console.log("Bolunur");
//     }
//     else{
//         console.log("Bolunmur")
//     }

// }

// numsDividedThreeOrSeven(21);



// let numsDividedThreeOrSeven = (num) => {

//     if (num % 21 == 0) {
//         console.log("Bolunur");
//     }
//     else{
//         console.log("Bolunmur")
//     }

// }

// numsDividedThreeOrSeven(21);






//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// function getNumFactorial(num) {
//     let multiple = 1;

//      for(let i = 1; i <= num; i++)
//      {
//         multiple*=i;
//      }

//      console.log(multiple);
// }

// getNumFactorial(5);




// let getNumFactorial = (num) => {
//     let multiple = 1;

//     for (let i = 1; i <= num; i++) {
//         multiple *= i;
//     }

//     console.log(multiple);
// }
// getNumFactorial(5);



//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// let arr = [1,2,3,4];

// function squareSumEvenNumsOfArray(arr) {
//      let sum = 0;
//    let square =1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//          square = arr[i] ** 2;
//          sum += square;
//         }
//     }
//    console.log(sum);
// }

// squareSumEvenNumsOfArray(arr);





// let arr = [1,2,3,4];

// let squareSumEvenNumsOfArray = (arr) => {
//     let sum = 0;
//    let square =1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             square = arr[i] ** 2;
//             sum += square;
//         }
//     }
//    console.log(sum);
// }

// squareSumEvenNumsOfArray(arr);





//4) Funtiona-a  mail ve password gelir. 
//Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin,
// eks halda "Mail ve yaxud password sehvdir" yazilsin. 

// function login(mail, password) {

//     if (mail == "cavid@code.edu.az" && password == 12345) {
//         console.log("Girish ugurludur")
//     }else{
//         console.log("Mail ve yaxud password sehvdir")
//     }
// }

// login("cavid@code.edu.az", 12345);





// let login = (mail, password) =>{

//     if (mail == "cavid@code.edu.az" && password == 12345) {
//         console.log("Girish ugurludur")
//     }else{
//         console.log("Mail ve yaxud password sehvdir")
//     }
// }

// login("cavid@code.edu.az", 12345);




//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.


// let arr = [1,2,3,4,5,6,7]

// function getSumOddNums(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i];
//         }
//     }
//     return sum;
// }

// console.log(getSumOddNums(arr));



// let arr = [1,2,3,4,5,6,7]

// let getSumOddNums = (arr) => {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//      {
//         if (arr[i] % 2 == 1) {
//             sum+= arr[i];
//         }
//     }
//     return sum;
// }

// console.log(getSumOddNums(arr));





//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCountEvenNums(arr) {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getCountEvenNums(arr));




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let getCountEvenNums = (arr) => {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(getCountEvenNums(arr));
