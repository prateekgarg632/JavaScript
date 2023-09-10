const form=document.querySelector('form')
const msg=document.querySelector('.lowOrHi')
// const lastres=document.querySelector('.lastResult')
const arr=[];
const random=randomfun();
console.log(random);
form.addEventListener('submit',function(e){
e.preventDefault();
const num=parseInt(document.querySelector('#guessField').value)
if(arr.length<10)
arr.push(num);
const lastres=document.querySelector('.lastResult')

if(num!=random && lastres.innerHTML>=1 && num>=1 && num<=100){
    lastres.innerHTML=lastres.innerHTML-1;
}
else if(num==random &&lastres.innerHTML>=1 ){
    displayres(lastres);
}
else if(lastres.innerHTML<=0){
    displayloss();
}
else{
    display();
}

const guesses=document.querySelector('.guesses');
guesses.innerHTML=arr;
})

function randomfun(){
  const rendom=Math.round(Math.random()*100+1)
  return rendom;  
}
function display(){
    msg.innerHTML="Please Enter a valid number."
}
function displayres(lastres){
    msg.style.color="black";
    msg.innerHTML="You have Entered a correct number in " + (10-lastres.innerHTML+1) +" attempts.";
}
function displayloss(){
    msg.innerHTML="You loss the game !! Please try again."
}