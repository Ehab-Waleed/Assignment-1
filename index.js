// Part 1.1

let x = "123"
console.log(Number(x) + 7);
// *********************************** // 

// Part 1.2 

let value = 0 
if(value == false){
     console.log("Invalid");
}
// *********************************** // 

//Part 1.3

for(var i=0 ; i<=10 ; i++){
    if(i%2==0) {
         continue  
    }else{
        console.log(i);
        
    }
}
// *********************************** // 

//Part 1.4

let arr = [1,2,3,4,5]
let myarr = arr.filter(function(element){
if(element % 2 ==0){
    return element
}
})
 console.log(myarr);
 // *********************************** // 

 //Part 1.5

 let arr1 = [1,2,3]
 let arr2 = [4,5,6]
 let arr3 = [...arr1 , ...arr2]
 console.log(arr3);
  // *********************************** // 

  // Part 1.6 

  let numOfDay = 2
  switch(numOfDay){
    case (1) :
        console.log("Sunday");
        break
    case (2) : 
        console.log("Monday");
        break
    case (3) :
        console.log("Tuesday");
        break
    case (4) :
        console.log("Wednesday");
        break
    case (5) :
        console.log("Thursday");
        break
    case (6) :
        console.log("Friday");
        break
    case (7) :
        console.log("Saturday");
        break
  }
    // *********************************** // 

    //Part 1.7 

let arrOfStr = ["a","ab","abc"]
let newArr = arrOfStr.map(function(element){
return element.length
})
console.log(newArr);
    // *********************************** // 

    //Part 1.8 

function chkDiv (num){
     if(num%3==0 && num%5==0)
           return "Divisible by both";     
    }
console.log(chkDiv(15));
     
    // *********************************** // 

    // Part 1.9

let square = (x) => {
    let result = x * x 
    return result
    }
console.log(square(5));

    // *********************************** // 

    


    







 


