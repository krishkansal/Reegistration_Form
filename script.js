const form = document.querySelector("form"),
        nextBtn=form.querySelector(".nextBtn"),
        backBtn=form.querySelector(".backBtn"),
        allInput=form.querySelector(".first input");

nextBtn.addEventListener("click",()=>{
    allInput.forEach(input => {
        if(input.value!=""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})


backBtn.addEventListener("click",() => 
    form.classList.remove('secActive'));



                     // button click Print

// nextBtn.addEventListener('click',(e)=>{
//     e.preventDefault()
// const text=document.querySelector('#my-input').value
//     console.log(text);
// })


                  //  print at the time of filling data
// document.querySelector('#my-input').addEventListener('keyup',(e)=>{
//     console.log(e.target.value)
// })