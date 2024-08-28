fetch('https://dummyjson.com/products').then((res)=>{
    return res.json()
}).then((data)=>{
    //     // data.products.map((a)=>{
        // console.log(a);       
//     // })
console.log(data);  
//     let div=document.querySelector('ul')
//     data.products.map((a)=>{
//         let li=document.createElement('li')
//         div.append(li)
//         li.innerText=a.title
//     })
//     // div.innerText=data.products.title
// }).catch((err=>{
//     console.log(err);
// }))

let div=document.querySelector('div')
console.log(div);
let p1=document.createElement('p')
div.append(p1)
p1.innerText="AailabilityStatus :"+data.products[0].availabilityStatus
let p2=document.createElement('p')
div.append(p2)
p2.innerText="Brand :"+data.products[0].brand
let p3=document.createElement('p')
div.append(p3)
p3.innerText="Category :"+data.products[0].category
let p4=document.createElement('p')
div.append(p4)
p4.innerText="Description :"+data.products[0].description
let p5=document.createElement('p')
div.append(p5)
p5.innerText="Dimensions :"+"Height"+data.products[0].dimensions.height+"width :"+data.products[0].dimensions.width
let p6=document.createElement('p')
div.append(p6)
p6.innerText="Discountpercentage :"+data.products[0].discountPercentage
let p7=document.createElement('p')
div.append(p7)
p7.innerText="ID :"+data.products[0].id
let img=document.createElement('img')
div.append(img)
img.height=200
img.setAttribute('src',data.products[0].images[0])
let p8=document.createElement('p')
div.append(p8)
p8.innerText="Meta :"+"Createdat -"+data.products[0].meta.createdAt+", Updated at"+data.products[0].meta.updatedAt
let p9=document.createElement('p')
div.append(p9)
p9.innerText="Minimum order quantity :"+data.products[0].minimumorderQuantity
let p10=document.createElement('p')
div.append(p10)
p10.innerText="Price :"+data.products[0].price
let p11=document.createElement('p')
div.append(p11)
p11.innerText="Rating :"+data.products[0].rating
let p12=document.createElement('p')
div.append(p12)
p12.innerText="Return policy :"+data.products[0].returnPolicy
let p13=document.createElement('p')
div.append(p13)
p13.innerText="Reviews :"
data.products[0].reviews.map((a)=>{
    let h=document.createElement('p')
    p13.append(h)
    h.innerText="Rating-"+a.rating+", comment -"+a.comment+",date -"+a.date+", Reviewer name-"+a.reviewerName+", Reviewer Email-"+a.reviewerEmail
})
let p14=document.createElement('p')
div.append(p14)
p14.innerText="Shipping info :"+data.products[0].shippinginformation
let p15=document.createElement('p')
div.append(p15)
p15.innerText="Sku :"+data.products[0].sku
let p16=document.createElement('p')
div.append(p16)
p16.innerText="Stock :"+data.products[0].stock
let p17=document.createElement('p')
div.append(p17)
p17.innerText="Tags :"
data.products[0].tags.map((a)=>{
    let p=document.createElement('p')
    p17.append(p)
    p.innerText=a
})
let p18=document.createElement('p')
div.append(p18)
p18.innerText="Title :"+data.products[0].title
let p19=document.createElement('p')
div.append(p19)
p19.innerText="Warrenty info :"+data.products[0].warrentyInformation
let p20=document.createElement('p')
div.append(p20)
p20.innerText="Weight :"+data.products[0].weight
}).catch((err)=>{
    console.log(err);
})
