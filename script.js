let userName = prompt('What is your name?');
let userAge = prompt('How old are you?');
console.log(userName)
console.log(userAge) 

let myStory = `Hello ${userName}, How are you doing today? How does it feel to be ${userAge} years old?`
console.log(myStory) 

document.getElementById('story').innerHTML = myStory;

let characterName = prompt('What do you want the name of the main character to be?');

console.log(characterName)
