// even or odd

// the first way:
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(oddOrEven(5));


// the second way:
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}
console.log(evenOrOdd(8));

// -----------------------------------------------------------------------------------

// get the sum of the positives numbers of the array

// the first way:
function sumOfPositives(arr) {
    let initValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            initValue += arr[i]
        }
    }
    return initValue
}
console.log(sumOfPositives([10, 4, -2, 6]));


// the second way:
function sumPositivesOfArr(arr) {
    return arr.filter((x) => x > 0).reduce(((acc, current) => acc + current), 0)
}
console.log(sumPositivesOfArr([10, 4, -2, 2]));

// reduce function takes callback function and initial value ,
// here the initial value was zero The value resulting from the previous call to callbackFn.
// On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].



// -------------------------------------------------------------------------------------


// sum without the highest and the lowest numbers and if the array is empty return 0.

// the sort method organize the string very well so it treates with the numbers as string also so we should handle it to sort the numbers.
// slice method it takes the array and slice whatever we want without changing the real one.
// if the highest or the lowest number repeated ignore erasing them

// the first way:

function sumWithoutHighAndLow(arr) {
    if (arr == null) return 0
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((accu, current) => accu + current, 0)
}

console.log(sumWithoutHighAndLow([5, 7, 2, 4, 1, 8, 4]));


// the second way:

function sumWithoutHighestandLowest(arr) {
    if (arr == null) return 0
    let sortedArr = arr.sort((a, b) => a - b)
    let slicedArr = sortedArr.slice(1, -1)
    let newArr = slicedArr.reduce((acc, current) => acc + current, 0)
    return newArr
}
console.log(sumWithoutHighestandLowest([3, 9, 1, 7, 4, 5]));


// -------------------------------------------------------------------------------------


// repeat string

// first way:
function repeatStr(number, string) {
    let newStr = ''
    for (let i = 0; i < number; i++) {
        newStr += string
    }
    return newStr
}
console.log(repeatStr(5, "Gehad"));


// the second way:
function strRepeat(number, string) {
    return string.repeat(number)
}
console.log(strRepeat(5, "beauty"));


// --------------------------------------------------------------------------------------

// covert a random number to a reversed array of this number
// convert the number to string then split it to be an array to convert it again to number so we can reverse it

function convertRandomNumtoReversedArray(number) {
    return number.toString().split('').map((x) => Number(x)).reverse()
}
console.log(convertRandomNumtoReversedArray(1272002));


// ---------------------------------------------------------------------------------------


// counting sheep
function countSheeps(arr) {
    let counter = 0
    arr.map((x) => {
        if (x === true) counter += 1
    })
    return counter
}

// ----------------------------------------------------------------------------------------


// return negative

function returnNegativeNum(num) {
    return num > 0 ? -num : num
}


// -----------------------------------------------------------------------------------------

// find the needdle in the haystack


// first way:
function findNeedle(hayStack) {
    for (let i = 0; i < hayStack.length; i++) {
        if (hayStack[i] === "needle") {
            return "found the needle at position " + i
        }
    }
}


// second way:

function needle(arr) {
    return "found the needle at position " + arr.indexOf("needle")
}

// ------------------------------------------------------------------------------------------


// Count of positives / sum of negatives


// first way:
function count(array) {
    let countOfPositives = 0
    let sumOfNegatives = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            countOfPositives += 1
        } else {
            sumOfNegatives += array[i]
        }
    }
    return [countOfPositives, sumOfNegatives]
}
console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3]));


// second way:
function countAndSum(input) {
    let countOfPositives = input.filter((x) => x > 0).length
    let sumOfNegatives = input.filter((x) => x < 0).reduce((acc, current) => acc + current, 0)
    return [countOfPositives, sumOfNegatives]
}

console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3]));


// -------------------------------------------------------------------------------------------


// double char
function doubleChar(str) {
    return str.split('').map((x) => x.repeat(2)).join('')
}
console.log(doubleChar('Gehad'));


// --------------------------------------------------------------------------------------------


// basic mathematical operations

// first way:
function mathOperations(opearation, value1, value2) {
    return eval(opearation + value1 + value2)
}
console.log(mathOperations(5, '*', 6));



// second way:
function basicMath(operation, val1, val2) {
    if (operation === "+") return val1 + val2
    if (operation === "-") return val1 - val2
    if (operation === "*") return val1 * val2
    if (operation === "/") return val1 / val2
}
console.log(basicMath('/', 30, 5));

// -------------------------------------------------------------------------------------------


// square or not square


// first way:
function squareRootOrNOt(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(Math.sqrt(arr[i]))) {
            newArr.push(Math.sqrt(arr[i]))
        } else {
            newArr.push(arr[i] * arr[i])
        }
    }
    return newArr
}

console.log(squareRootOrNOt([2, 4, 6, 8]));


// second way:
function square(arr) {
    return arr.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num)
}

console.log(square([2, 4, 6, 8]));



// Count by X
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).


function countBy(x, n) {
    let newArray = []
    for (let i = 1; i <= needle; i++) {
        let newNum = x * i;
        newArray.push(newNum)
    }
    return newArray
}

console.log(countBy(1, 10));



// Remove string spaces

function removeSpaces(str) {
    return str.split(' ').join('')
}

console.log(removeSpaces('g e ha d'));



// invert values from positive to negative and reverse

function invertValues(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * -1)
    }
    return newArr
}

console.log(invertValues([1, 2, 3]));


// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
    if (bool === true) {
        return 'Yes'
    } else {
        return 'No'
    }
}

console.log(boolToWord(true));




// Reversing Words in a String

function reverse(string) {
    return string.split(' ').reverse().join(' ');
}

console.log(reverse('Hi Gehad'));



// Keep Hydrated!
function litres(time) {
    return Math.floor(time / 2);
}

console.log(litres(9));


//Highest and Lowest

function highAndLow(numbers) {
    let arrayNum = numbers.split(' ').map((num) => Number(num))
    let maxNum = Math.max(...arrayNum)
    let minNum = Math.min(...arrayNum)
    return `${maxNum} ${minNum}`
}

console.log(highAndLow('1 2 3 4 5 6'));

// Count the Digit
function nbDig(n, d) {
    // your code
    let result = 0
    let str = d.toString()
    for (let i = 0; i <= n; i++) {
        let square = (i * i).toString()
        for (let char of square) {
            if (char === str) {
                result++
            }
        }
    }
    return result
}

console.log(nbDig(10, 1));


//  square digits
function squareDigits(num) {
    return Number(num.toString().split('').map((n) => Math.pow(n, 2)).join(''))
}

console.log(squareDigits(127));



// Descending Order
function descendingOrder(n) {
    //...
    return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}


// Get the Middle Character

function getMiddle(s) {
    //Code goes here!
    return s.length % 2 === 0 ? s[(s.length / 2) - 1] + s[s.length / 2] : s[Math.ceil(s.length / 2) - 1];
}

console.log(getMiddle('Gehad'));


// Mumbling

function accum(s) {
    // your code
    return s.toLowerCase().split('').map((letter, i) => letter.toUpperCase() + letter.repeat(i)).join('-')
}
console.log(accum('Gehad'));


// You're a square!

var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(26));


// List Filtering

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((element) => typeof (element) !== 'string')
}

console.log([1, 2, 'g']);


// Isograms

function isIsogram(str) {
    //...
    return new Set(str.toLowerCase().split('')).size === str.length
}

// Exes and Ohs

function XO(str) {
    const xCount = (str.toLowerCase().match(/x/g) || []).length;
    const oCount = (str.toLowerCase().match(/o/g) || []).length;
    return xCount === oCount;
}

console.log(XO('xxoo'));



// Shortest Word

function findShort(s) {
    return Math.min(...s.split(' ').map((word) => word.length))
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));


// Jaden Casing Strings


/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    {
        value:
            function toJadenCase() {
                return this.split(' ')
                    .map((word) => word[0].toUpperCase() + word.substring(1))
                    .join(' ');
            }
    }
);

console.log(toJadenCase('most trees are blue", "Most Trees Are Blue'));


// Odd or Even
function oddOrEven(array) {
    //enter code here
    if(!array.length) return 'even'
    const sum = array.reduce((accu , current) => accu + current)
    return sum % 2 === 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0, 1, 5]));
