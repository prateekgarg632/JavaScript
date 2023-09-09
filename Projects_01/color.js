const button=document.querySelectorAll('button');
const body=document.querySelector('body')


button.forEach(function(button){
button.addEventListener('click',function(e){
    // console.log(e);
console.log(e.target.id);
body.style.backgroundColor=e.target.id;
})
})