const n = Number(prompt('Recursive method, Enter n'));

function getFibonachi(n)
{
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
let result = getFibonachi(n);
alert(result);


const n1 = Number(prompt('Сycle with variables, Enter n'));

function getFibonachi_1(n1) {
  let a = 1,
      b = 1;
  for (let i = 3; i <= n1; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
const result1 = getFibonachi_1(n1);
alert(result1);


const n2 = Number(prompt('Saving values to an array, Enter n'));

function getFibonachi_2(n2) {
    let fib = [];
    fib[0] = 0; 
    fib[1] = 1;
    for (let i = 2; i <= 100; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n2];
}    
const result2 = getFibonachi_2(n2);
alert(result2);
