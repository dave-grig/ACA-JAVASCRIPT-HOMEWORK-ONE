

// 1 exercise 

// comment for me checked

function frequencyOfUniqueNums(nums) {
    let uniqueNumsCounts = {};
    
    for (let num of nums) {
        if (uniqueNumsCounts[num]) {
            uniqueNumsCounts[num]++;
        } else {
            uniqueNumsCounts[num] = 1;
        }
    }

    for (let numCount of Object.keys(uniqueNumsCounts)) {
        console.log(`${numCount}: ${uniqueNumsCounts[numCount] / nums.length}`);
    }
}

frequencyOfUniqueNums([1,2,3]);

// 2 exercise

// comment for me checked

function countOfTypes(arr) {
    let countOfNumbersInArr = 0;
    let countOfStringsInArr = 0;

    for (let elem of arr) {
        if (typeof elem === "number") {
            countOfNumbersInArr++;
        } else if (typeof elem === "string") {
            countOfStringsInArr++;
        }
    }

    console.log(`Numbers: ${countOfNumbersInArr}, Strings: ${countOfStringsInArr}`);
}

countOfTypes([1, 4, "i am a string", "456"]);

// 4

// comment for me checked

function longestWordInString(str) {
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "," || str[i] === "-") {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            
            currentWord = "";
        } else {
            currentWord += str[i];
        }
    }

    return longestWord;
}



console.log(longestWordInString("Which would be worse - to live as a monster, or to die as a good man?"));

// 5

// comment for me checked

function longestSubString(str) {
    let currentSubString = "";
    let longestSubString = "";
    let visitedChars = {};
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && visitedChars[str[i]]) {
            if (currentSubString.length >= longestSubString.length) {
                longestSubString = currentSubString;    
            }
            
            currentSubString = "";
            i = visitedChars[str[i]] + 1;
            visitedChars = {};

        } else {
            visitedChars[str[i]] = i;
            currentSubString += str[i];   
        }
    }

    return longestSubString;
}

console.log(longestSubString("there are no two words in the english language more harmful than \"good job\"."))

// 6

// comment for me checked

function replaceChars(str) {
    let res = "";
    
    for (let i = 0; i < str.length; i += 3) {
        if (str.length - i >= 3) {
            res += str.slice(i + 1, i + 3) + str[i];
        } else {
            res += str.slice(i);
        }
    }

    return res;
}

console.log(replaceChars("aweyoolp"));

// 7

// comment for me  checked

// i think the name of function is to long but i cant find short logical name
function productOfBiggestNegativeNumbers(array) {
    let isArray = array.every((e) => Array.isArray(e));
    let productOfNums = 1;
    let nonNegativeArraysCount = 0;

    if (!isArray) {
        return "Invalid Argument";
    }

    
    
    for (let i = 0; i < array.length; i++) {
        if (Math.min(...array[i]) >= 0) {
            nonNegativeArraysCount++;
            continue;
        }
        let biggestNegativeNum = -Infinity;
        
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > biggestNegativeNum && array[i][j] < 0) {
                biggestNegativeNum = array[i][j];
            }    
        }

        console.log(biggestNegativeNum,333)

        productOfNums *= biggestNegativeNum;
    }
    
    return nonNegativeArraysCount === array.length ? "No negatives" : productOfNums;
}

console.log(productOfBiggestNegativeNumbers([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));



// 8 recursion

// comment for me checked

function allPossibleSubsetsOfLength3OfArray(arr,leftIndex,middleIndex,rightIndex,res) {
    if (leftIndex === arr.length - 3) {
        res.push([arr[leftIndex],arr[middleIndex],arr[rightIndex]]);
        return res; 
    } else if (middleIndex === arr.length - 2) {
        res.push([arr[leftIndex],arr[middleIndex],arr[rightIndex]]);
        allPossibleSubsetsOfLength3OfArray(arr,leftIndex + 1,leftIndex + 2,leftIndex + 3,res);
        return res;
    } else if (rightIndex === arr.length - 1) {
        res.push([arr[leftIndex],arr[middleIndex],arr[rightIndex]]);
        allPossibleSubsetsOfLength3OfArray(arr,leftIndex,middleIndex + 1, middleIndex + 2,res);
        return res;
    } else {
        res.push([arr[leftIndex],arr[middleIndex],arr[rightIndex]]);

        allPossibleSubsetsOfLength3OfArray(arr,leftIndex,middleIndex,rightIndex + 1,res);
        return res;
    }

    
    
}

console.log(allPossibleSubsetsOfLength3OfArray([5, 9, 23, 0, -2, -1],0,1,2,[]));



















































