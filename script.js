const characterName = prompt('What do you want the name of the main character to be?');
let pluralNoun = prompt('Give me a plural noun');
let firstAdjective = prompt('Give me an adjective');
let secondAdjective = prompt('Give me another adjective');
let secondNoun = prompt('Give me another noun');
const thirdNoun = prompt('Give me a magical pet');
let firstVerb = prompt('Give me a verb in the past tense');
const antagonistName = prompt('What do you want the name of the antagonist to be?');
let thirdAdjective = prompt('Give me a mean adjective ex:(jerk, meanie, curse word)')
const challengeStatement = prompt('Write a statement for the main character to challenge the antagonist to a race');
let placeRace = prompt('Where should the race be?');
const fourthNoun = prompt('Give me a magical ANIMAL this time please');
let secondVerb = prompt('Give me a verb please');
const randomLine = prompt('Give me a random line please, seriously, just anything, anything that comes into your head');

let myStory = `${characterName} never ran really fast. ${characterName} just wanted to run really fast like their ${pluralNoun} but as much as they tried and trained they just couldn't. 
Everyone called ${characterName} ${firstAdjective} and it really hurt their feelings. But ${characterName} was going to prove them ${secondAdjective}, "just you wait" ${characterName} said. 
Then one day a magic ${secondNoun} appeared out of nowhere and told ${characterName} that they could make them ${characterName} be able to run fast but ${characterName} had to give ${secondNoun} there ${thirdNoun} 
and then ${characterName} would be able to run super duper fast. The next day ${characterName} ${firstVerb} to ${antagonistName} who was a real big ${thirdAdjective} and said, "${challengeStatement}". 
At the race ${characterName} was very nervous but then the magical ${fourthNoun} appeared, ${secondVerb} and told ${characterName} that they were going to `
console.log(myStory) 

document.getElementById('story').innerHTML = myStory;