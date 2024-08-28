let btn=document.querySelector('button')
let inp=document.querySelector('input')
let ul=document.querySelector('ul')
btn.addEventListener('click',()=>{
   let data=inp.value
    let li=document.createElement('li')
    li.innerText=data
    ul.appendChild(li)
    inp.value=''
    li.addEventListener('click',()=>{
        li.remove()
    })
})