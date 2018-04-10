// PROBLEM: Verify a word as palindrome.
// SOLUTION: Steps :1. Convert the string to an array.
//                  2. Reverse the array and convert this reversed array to string.
//                  3. Compare the string in step 2 with the original string in step 1.
//                  4. Also check for epmty strings - '' and ' '.
"use strict";
class Pallindrome{
  constructor(){};
  trialFunc(str){
    if((typeof(str) == "string" && str != "") || (typeof(str) == "string" && str != " ")){
      console.log("The initial string is"+str);

      var reversedArray = [];
      var reversedString;
      //Split the string to an array
      var arr = str.split("");
      //Reverse the array
      reversedArray = arr.reverse();
      //Convert the reversed array to a string by joining all the elements of the array
      reversedString = reversedArray.join('')
      //CHeck if the reversed string is equal to the original reversedString
      //if yes, then it is a pallindrome
      //else, it is not
      if(reversedString === str){
        console.log("It is a Palindrome");
      }else{
        console.log("It is not");
      }
    }else{
      console.log("Please enter a valid input");
    }
  }
}

var tri = new Pallindrome();
tri.trialFunc("lal" );
