// PROBLEM:Remove duplicate members from an array
// SOLUTION: 1. Set the duplicate flag to false and compare first element of the array with every other element of the array
//               a) if this first element is equal to any other element in the array,
//                   then remove the copy of first element by splicing and set the duplicate flag as true.
//                   Repeat this step a untill the first element is compared to all the elements in the array.
//                   Now, if the duplicate flag is true that means the duplicates of the first element existed
//                     then, remove the first element from the array by splicing.
//                 Repeat the entire step 1 for all the elements in the array.

"use strict";

class Duplicate{

  constructor(){}

  duplicacy(arr){
    console.log("original arr is"+arr);
    var cleanedArr = [];
    var duplicateFlag = false;
    for(var i=0; i<arr.length; i++){
      duplicateFlag = false;
      console.log("duplicate flag is: "+duplicateFlag);
      for(var j=i+1; j<arr.length; j++){
        console.log("arr[i]"+arr[i]);
        console.log("arr[j]"+arr[j]);
        if(arr[i] == arr[j]){
          duplicateFlag = true;
          console.log("duplicate flag is: "+duplicateFlag);
          arr.splice(j,1);
          j=j-1;
          console.log("arr after deleting"+arr);
        }
      }
      if(duplicateFlag){
        arr.splice(i,1);
        i=i-1;
      }
      console.log("arr is: "+arr);
    }
    console.log("the cleaned array is"+arr);
  }
}

var obj = new Duplicate();
var arr = [1,2,2,2,1,3,5,9,2,0,1,2];
obj.duplicacy(arr);
