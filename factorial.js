
// var factorial= 1;
// for (var i=1; i<=10; i++){
//     factorial=factorial*i;
//     console.log(i, factorial);

// }
// var i=1;
// factorial=1;
// while( i<=10){
//     factorial=factorial*i;
//     //console.log(i,factorial);
//     i++;
// }
// console.log(i,factorial);

// function factorial(){
//     var fact=1;
//     for (var i=1; i<10; i++){
//         fact=fact*i;
//     }
//     return fact;
// }

// var result=factorial();
// console.log(result);

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
let result=factorial(5);
console.log(result);

