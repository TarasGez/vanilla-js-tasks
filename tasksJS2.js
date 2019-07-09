// 1. A function which prints str after n seconds.
function printTimeout(str, n) {
  setTimeout(() => { console.log(str); }, 1000 * n);
}
printTimeout('hello', 10) // hello will appear after 10secs in console


// 2. A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) {
  return n == 0 ? 0 : +n + sumAll(n - 1);
}
sumAll(2); // 3
sumAll(4); // 10

// 3. A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str
function bombTimer(str, time) {
  if (time == 0) {
    console.log(str);
  } else {
    console.log(+time);

    let t = time - 1;
    let timer = setInterval(
      () => { console.log(t--); }, 1000
    );
    setTimeout(
      () => {
        clearInterval(timer);
        setTimeout(
          () => {
            console.log(str);
          }, 1000);
      }, (time - 1) * 1000);
  }
}
bombTimer('Boooom', 3);
3
2
1
Boooom

// 4.A function which returns factorial of number using recursion.
function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1);
}
factorial(3); // 6
factorial(5); // 120

// 5. Implement function from task №3 (bombTimer) using recursion and setTimeout.
function bombTimerRecursion(str, time) {
  if (time == 0) {
    console.log(str);
  } else {
    console.log(+time);
    setTimeout(
      () => {
        bombTimer(str, time - 1)
      }, 1000);
  }
}

// 6. A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) {
  return arr.filter(x => x <= maxNumber);
}
filterNumbers([1, 4, 8, 1, 20], 5) // [1, 4, 1]

// 7. A function that returns object with min and max numbers from array of numbers.
function minMax(arr) {
  return {min: Math.min(...arr), max: Math.max(...arr)};
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }

// 8. A function that returns average of numbers in array.
function average(arr) {
  return arr.reduce((sum, next) => sum + next) / arr.length;
}
average([1, 4, 2]) // 2.33

// 9. A function which concats all first-nested arrays in one array (use reduce):
function concatFirstNestedArrays(arr) {
  return arr.reduce(
    (newArr, val) => newArr.concat(val),
    []
  );
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]

// 10. A function accepts array of users and returns object of users where key is user id and value user data.
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
  let obj  = {};
  users.forEach((val) => obj[val.id] = val );
  return  obj;
}
usersToObject(users)
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

function usersToObjectWithoutID(users) {
  let obj  = {};
  users.forEach((val) => obj[val.id] = ( delete val['id'] ? val : null) );
  return  obj;
}
usersToObjectWithoutID(users)
// {
//  1: { name: 'John', birthday: '1999-2-12' },
//  2: { name: 'Bill', birthday: '1999-1-19' },
//  3: { name: 'Carol', birthday: '1999-3-11' },
//  4: { name: 'Luce', birthday: '1999-2-22' }
// };

// 11. A function returns array of users that have birthdays in a specific month.
const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
  return users.filter(
    user => user['birthday'].split('-')[1] == month + 1
    );
}
filterUsersByMonth(users, 0) // [{ name: 'Bill', birthday: '1999-1-19' }]

// 12. A function returns name and age of users separated by comma that are older than 18.
const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) {  
  return users
  .filter(
    user => (
      new Date() - new Date(user['birthday'])
      ) /365/24/60/60/1000 >= 18 // filter users over 18 years
    )
    .map(
      man => (
        man['name'] +
        ' ' + 
        ( (new Date()).getFullYear() - 1 - man['birthday'].split('-')[0]) // transform user's display
      )
    )
}
getAdultNames(users) // 'John 19, Luce 18'