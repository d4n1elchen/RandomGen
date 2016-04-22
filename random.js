function shuffle(arr) {
  var i = arr.length;
  var j = 0;
  var temp;

  while(i--) {
    j = Math.floor( Math.random() * (i+1) );
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

var arr_s = prompt("Enter a list seperated by space, ex: 'Daniel DC Chen'");
var arr = arr_s.split(" ");
var arr = shuffle(arr);
var str = "";
for (var a in arr) {
  var i = 1 + parseInt(a);
  str += i + ": " + arr[a] + "\n";
}
prompt("Ctrl+C to copy", str);
