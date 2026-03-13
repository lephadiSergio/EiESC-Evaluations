const jokes = [

"Electrical engineers do it with resistance.",

"If voltage is present and nothing works → check the ground.",

"Without EE's the world would be dark.",

"It's not a bug, it's a feature.",

"Trust me, I'm an engineer.",

"99% of engineering is turning it off and on again."

];

const jokeText = document.getElementById("jokeText");

if(jokeText){
const randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
jokeText.textContent = randomJoke;
}
