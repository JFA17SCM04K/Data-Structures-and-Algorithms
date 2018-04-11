// PROBLEM:Check whether any two numbers in an array sums to a given number
// SOLUTION: 1. Take the first two numbers and start comparing the sum to all the members of the array
"use strict";
class Sum{
    constructor(){};
    check(arr){
      var sum;
      for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
          sum = arr[i]+arr[j];
          for(var x=0; x<arr.length; x++){
            if(sum == arr[x]){
              console.log("arr[i]"+arr[i]+"+arr[j]"+arr[j]+" = arr[x]"+arr[x]);
            }
          }
        }
      }
    }
}

var obj = new Sum();
var array = [1,2,5,3,4,2];
obj.check(array);
