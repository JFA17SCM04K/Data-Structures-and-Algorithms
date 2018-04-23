// Question: Enter three strings of the same length and find out the common characters.
//           Time complexity: O(n)
//           Space Complexity: O(n)
// Solution: A hashmap is created for every string. And for all the three strings, three hashmaps are created.
//           All the created hashmaps are pushed to an array of hashmaps.
//           Now, the keys of all the hashmaps are compared and found out the number of common characters.
function common(str1, str2, str3){
  console.log("String 1: "+str1);
  console.log("String 2: "+str2);
  console.log("String 3: "+str3);
  var hashTable = [{},{},{}];
  var hashTableArray = [];
  var stringArray = [];
  stringArray.push(str1);
  stringArray.push(str2);
  stringArray.push(str3);

  for(var j=0;j<stringArray.length;j++){
    var arr = stringArray[j].split("");
    for(var i=0;i<arr.length;i++){
      if(hashTable[j][arr[i]] != undefined){
        hashTable[j][arr[i]] = hashTable[j][arr[i]] + 1;
      }else{
        hashTable[j][arr[i]] = 1;
      }
    }
    hashTableArray.push(hashTable[j]);
  }
  //console.log(hashTableArray);
  var keys0 = Object.keys(hashTable[0]);
  var keys1 = Object.keys(hashTable[1]);
  var keys2 = Object.keys(hashTable[2]);
  var commonKeysArray = [];
  var min;
  var oneCommonStringForAllKeys = "";
  keys0.forEach(function(key){
    if( hashTable[1][key] != undefined && hashTable[2][key] != undefined){
      //console.log(hashTable[1][key]);
      //console.log(hashTable[2][key]);
      //console.log("Key: "+key+" is present in all the hashtables- "+hashTable[1][key]+": "+hashTable[2][key]);
      commonKeysArray.push(hashTable[0][key]);
      commonKeysArray.push(hashTable[1][key]);
      commonKeysArray.push(hashTable[2][key]);
      //console.log(commonKeysArray);
      min = commonKeysArray[0];
      for(var z=0;z<commonKeysArray.length;z++){
        if(commonKeysArray[z] < min){
          min = commonKeysArray[z];
        }
      }
      //console.log("Minimum common is: "+min);
      var commonStringofOneKey = "";
      while(min > 0){
        commonStringofOneKey += key;
        min -= 1;
      }
      //console.log(commonStringofOneKey);
      oneCommonStringForAllKeys += commonStringofOneKey;
    }
    //console.log(hashTable[0][key]);
  })

  console.log("Common Characters: "+oneCommonStringForAllKeys);

}
var string1 = prompt("Enter string1");
var string2 = prompt("Enter string2");
var string3 = prompt("Enter string3");
if(string1.length === string2.length && string1.length === string3.length){
  common(string1, string2, string3);
}else{
  prompt("Plase make sure that all the atrings you enter are of the same length");
}
