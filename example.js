var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

function longestString(arr) {
  var long1 = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1 = arr[i];
    }
  }
  return long1;
}


console.log(longestString(plorp));