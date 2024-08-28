let key='84254d5ce02335eb1d0ed7c9393e2ebb'
// let city='bhopal'
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })
let ip=document.querySelector('input')
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    let city=ip.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
    let div=document.querySelector('div')
    let p1=document.createElement('p')
    div.append(p1)
    p1.innerText="Base :"+data.base
    let p2=document.createElement('p')
    div.append(p2)
    p2.innerText="Clouds:All :"+data.clouds.all
    let p3=document.createElement('p')
    div.append(p3)
    p3.innerText="Cod :"+data.cod
    let p4=document.createElement('p')
    div.append(p4)
    p4.innerText="Coordinate :"+"longitude"+data.coord.lon+", latitude"+data.coord.lat
    let p5=document.createElement('p')
    div.append(p5)
    p5.innerText="dt :"+data.dt
    let p6=document.createElement('p')
    div.append(p6)
    p6.innerText="id :"+data.id
    let p7=document.createElement('p')
    div.append(p7)
    p7.innerText="Main :"+"temp"+data.main.temp+", feels like :"+data.main_like+", min temp :"+data.main.temp_min+", max temp :"
    +data.main.temp_max+", pressure :"+data.main.pressure
})
})