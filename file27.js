// let score = 90
// let result
// if (score>50){
//     result = "Pass"
// }
// else{
//     result = "Fail"
// }
// console.log(result)

// let score = 90
// let result = score > 50 ? "Pass" : "Fail"
// console.log(result)

// let score = 9
// let result = score > 50 && "Pass" 
// console.log(result)

// let score
// let result = score || 30 
// console.log(result)

let score = 85;

switch (true) {
    case (score >= 90):
        console.log("A grade");
        break;

    case (score >= 80):
        console.log("B grade");
        break;

    case (score >= 70):
        console.log("C grade");
        break;

    case (score >= 60):
        console.log("D grade");
        break;

    default:
        console.log("Fail");
}
