// let btn=document.querySelector('button')
// function fun() {
//     console.log('heyy');
    
// }
// let btn=document.querySelector('button')
// btn.onclick=function() {
//     console.log('heyyyyyy');
    
// }
// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log('heyyyyyy');

// })
let ip=document.querySelector('input')
let div=document.querySelector('div')
ip.addEventListener('input',(a)=>{
    console.log(a.target.value);
    div.innerText=a.target.value
})

// let form=document.querySelector('form')
// let ip=document.querySelector('input')
// let div=document.querySelector('div')
// form.addEventListener('submit',(a)=>{
//     // console.log('hyy');
//     a.preventDefault()
//     div.innerText=ip.value
// })