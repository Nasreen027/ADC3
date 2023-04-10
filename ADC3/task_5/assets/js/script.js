const button = document.getElementById("button");
const input = document.getElementById("number");
const output = document.getElementById("output");
// event on button 
button.addEventListener("click", function() {
  
  output.innerHTML = "";
  
  let num = input.value;
//   looping until number 1
  while (num !== 1) {
    output.innerHTML += num + " \u2192 ";
        // Operation on even number 
    if (num % 2 === 0) {
      num /= 2;

     }
    //   operation on odd number  
    else {
      num = num * 3 + 1;
    }
  }
//   adding 1 in last in sequence number 
  output.innerHTML += "1";
});