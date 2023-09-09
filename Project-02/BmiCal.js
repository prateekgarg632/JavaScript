const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const res=document.querySelector('#result')
                if(h==='' || h<0 || isNaN(h)){
                    res.innerHTML="Please enter valid height";
                }
                else if(w==='' || w<0 || isNaN(w))
                res.innerHTML="Please enter valid weight";
            else{
                const bmi=w*h;
                res.innerHTML=`<span>${bmi}</span>`
            }
})
