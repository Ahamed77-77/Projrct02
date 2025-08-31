const containerEI = document.querySelector('.container');

const careers =["We are intelliGenPro","We build software","We build mobile apps","We build websites"];

let careerIndex=0;
let charIndex=0;

updateText();
function updateText(){


containerEI.innerHTML=`<h1>${careers[careerIndex].slice(0,charIndex)}</h1>`;

if(charIndex === careers[careerIndex].length){
    careerIndex++;
    charIndex=0;
}
   setTimeout(updateText,400);
   charIndex++;
}