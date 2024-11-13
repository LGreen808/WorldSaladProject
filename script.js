let characterName = prompt('What do you want the name of the main character to be?');
let firstNoun = prompt('Give me a noun');
let firstAdjective = prompt('Give me an adjective');
console.log(firstNoun)


let myStory =`${characterName} never ran really fast. ${characterName} just wanted to run really fast like their ${firstNoun} but as much as they tried and train they just couldn't.` 
console.log(myStory) 

document.getElementById('story').innerHTML = myStory;