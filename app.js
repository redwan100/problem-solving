// Problem 1
//  Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

reverse("hello world");

// Problem 2
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sum = (arr) => {
  let sum = 0;
  arr.map((num) => {
    if (num > 0) {
      sum += num;
    }
  });

  return sum;
};

sum([2, -5, 10, -3, 7]);

// Problem 3
// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


  const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

  const frequentElement = () => {
    const elementCount = {};
    let mostFrequentElement;
    let maxCount = 0;

    for (let num of arr) {
      elementCount[num] = (elementCount[num] || 0) + 1;
    }

    for (let num in elementCount) {
      if (elementCount[num] > maxCount) {
        maxCount = elementCount[num];
        mostFrequentElement = num;
      }
    }

    return mostFrequentElement;
  };

  console.log(frequentElement());


// Problem 4
// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

  function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    // If no two numbers found that add up to the target
    return [];
  }

  findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 26);


// Problem 5
// : Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Cannot divide by zero!";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator!";
  }
}

calculator(20, '+', 10)


// Problem 6
// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

generateRandomPassword(10)


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
  const romanNumeralMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanNumeralMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
      prevValue = currentValue;
    }
  }

  return result;
}

romanToInt("IX");


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}

findSecondSmallest([3, 5, 2, 5, 3, 3, 1, 4, 5]);
