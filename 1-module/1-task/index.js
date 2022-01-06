let result = 1;
let n;

function factorial(n) {
while ( n >= 1) {
   result = result * n;
   n--;
}
return alert(result);
}


factorial(5);