// Iteration 1: Names and Input
const hacker1 = 'Juliana';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Monishka';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.lengh}  characters.`);
  } 
  else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } 
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
let result = '';
for (let i = 0; i < hacker1.length; i++)  {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let res = '';
for (let i = hacker2.length - 1; i >= 0; i--)  {
  res += hacker2[i];
}
console.log(res);

function alphabetical (str1, str2) {
  const result = str1.localeCompare(str2);
  if (result === -1) {
      return "The driver\'s name goes first.";
    } else if (result === 1) {
      return "Yo, the navigator goes first definitely.";
    } else {
      return "What?! You both have the same name?";
    }
};

// Bonus 1
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque justo at nisi feugiat tempus. Etiam mattis neque vitae dolor semper feugiat. Proin ac consequat lectus, at eleifend odio. In vestibulum finibus tempus. Donec tristique nisi ac viverra vestibulum. Mauris sed gravida dui, eu vestibulum est. Aliquam posuere lacinia velit, dignissim sollicitudin est eleifend in. Suspendisse scelerisque, felis a vestibulum sodales, sem ipsum accumsan mauris, placerat hendrerit lectus libero sit amet diam. Cras porta sit amet dui ac placerat. Nunc libero urna, convallis ut arcu sit amet, lobortis facilisis velit. Aenean eget iaculis ligula. Quisque arcu felis, condimentum at ultrices sed, aliquet et ex. Donec nec nulla porta, vulputate nibh ut, varius odio. Praesent volutpat dui sed scelerisque volutpat. Mauris molestie eros nec lorem bibendum, et tempus dui varius."

function countWords(str) {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      counter += 1;
    }
  }
  return counter + 1;
};
countWords(text);
console.log(`There are ${counter} words in the text.`);

// easy alternative
countStr = text.split(' ').length;
console.log(countStr);

let countEt = 0;

   let wordsEt = text.split(" "); 
    console.log(wordsEt)
    for (j = 0 ; j < wordsEt.length ; j++){
       if (wordsEt[j].toLowerCase() === 'et') {
          countEt ++;
       }
    }
console.log(`The word "Et" appears ${countEt} times.`);

// Bonus 2
const checkWord = 'amor';
const palindrome = 'roma';

function palindromeCheck(checkWord, palindrome) {
  let reversed = '';
  
  for (let i = palindrome.length - 1; i >= 0; i--) {
    reversed += palindrome[i];
  }
  if(reversed === checkWord) {
    return "The word is palindrome";
  } else {
    return "The word is not palindrome";
  }
}
palindromeCheck(checkWord, palindrome);