let characterName = prompt('What do you want the name of the main character to be?');
let firstNoun = prompt('Give me a plural noun');
let firstAdjective = prompt('Give me an adjective');
let secondAdjective = prompt('Give me another adjective');




let myStory =`${characterName} never ran really fast. ${characterName} just wanted to run really fast like their ${firstNoun} but as much as they tried and train they just couldn't. Everyone called ${characterName} a ${firstAdjective} and it really hurt their feelings. But ${characterName} was going to prove them ${secondAdjective}, "just you wait" ${characterName} said.` 
console.log(myStory) 

document.getElementById('story').innerHTML = myStory;