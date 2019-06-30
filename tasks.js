/// 1
//Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
const RATE = 8;
function convert(amount) {
  return amount*RATE;
}

/// 2
//A function which returns reversed string.
//Without str.split('').reverse().join('')
function reverse(str) {
  str = str.split('')
  
  for (let i = 0; i< str.length; i++){
	str.unshift(str[i])
	str.splice(i+1, 1);
  }
  return str.join('');
}

/// 3
//A function which prints the stair picture of size n
function printStairs(n) {
  if (n!=0) {
    let stairs = '';
    for (let i = 0; i<n; i++){
    stairs = stairs.concat('#');
    console.log(stairs);
    }
  }
  console.log('');
}

/// 4
//A function which returns total sum of a range
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i<=end; i++) {
    sum = sum + i;
  }
  return sum;
}

/// 5
//Write a function which returns the smallest of three numbers.
//Without Math.min()
function min(a, b, c) {
  let min;

  (a - b < 0) && (a - c < 0) ? min = a :
  (a - b > 0) && (b - c < 0) ? min = b : 
  (a - c > 0) && (b - c > 0) ? min = c : 
  min = c;
  
  return min;
}

/// 6
//A function which prints the pyramid picture of size n
function printPyramid(n) {
  if (n!=0) {
    let stairs = new Array(2*n-1);
        for (let i = 0; i < stairs.length ; i++){
            i === n-1 ? stairs[i] = '#' : stairs[i] = ' ';
        }
        console.log(stairs.join(''));
    
    for (let i = n; i < 2*n-1; i++){
		stairs[i] = '#';
        stairs[2*n - 2 - i] = '#';
        console.log(stairs.join(''));
      }
    } else {
		console.log(' ');
	}
}

/// 7
//A function which transforms first and last letter to uppercase (use built in string’s method).
function firstAndLastToUpper(str) {
  str = str.split('');
  str.splice(0, 1, str[0].toUpperCase());
  str.splice(str.length-1, 1, str[str.length-1].toUpperCase());
  return str.join('');
}

/// 8
//A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
function cursorCheck(str) {
  str = str.toLowerCase().split(' ');
  return str.includes('ironman') || str.includes('cursor') || str.includes('ostap');
}

/// 9
//A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
function toUppercase(str) {
  const sm = 'abcdefghijklmnopqrstuvwxyz';
  const bg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
    .replace(/\w/g, x => sm.indexOf(x) >= 0 ? bg[sm.indexOf(x)] : x);
}
//Using String.prototype
function toUppercase2(str) {
  return str.
    replace(/\w/g, x => x === '' || x.charCodeAt(0) < 97 || x.charCodeAt(0) > 122 ? x : String.fromCharCode(x.charCodeAt(0) - 32) );
}

/// 10
//A function which removes duplication of letters in string. The function must be case-insensitive.
function removeDuplicationLetters(str) {
  return str
    .split('')
    .filter(
      (letter, index, array) => 
        array
        .join('')
        .toLowerCase()
        .indexOf(letter.toLowerCase()) == index
        || letter ===' '
		)
    .join('');  
}

function removeDuplicationLettersRegEx(str) {
  return str
    .match(/\w/gi)
    .filter(
      (letter, index, array) => 
        array
        .join('')
        .toLowerCase()
        .indexOf(letter.toLowerCase()) == index
        || letter ===' '
		)
    .join('');  
}

/// 11
//A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
function fibonacci(n) {
  switch(n) {
    case 0: return 0;
    case 1: return 1;
    case 2: return 1;
    default: return fibonacci(n-1) + fibonacci(n-2);
  }
}
//Without recursion
function fibonacci2(n) {
  let a = 1, b = 1, c = 0;
  if (n == 0) {
     return c;
  }

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}