// // const array = [1,2,3,4]
// // //number, string, boolean
// // const nomedotenis = "nike"
// // const cordotenis = "preto"

// // const produto = {
// //     name:"tênis",
// //     price: 100,
// //     quantity: 10,
// //     disponible: true
// // }
// const listProducts=[
//     {
//         id:"1",
//         name:"tênis",
//         price: 100,
//         quantity: 10,
//         disponible: true  
//     },
//     {
//         id:"2",
//         name:"camiseta",
//         price: 70,
//         quantity: 10,
//         disponible: true
//     }
// ]

// listProducts.forEach((product)=>{
//     const ul = document.querySelector("#products")
//     const li = document.createElement("li")
//     li.id = product.id
//     const pName = document.createElement("p")
//     pName.innerText = product.name

//     const btnAdd = document.createElement("button")
//     btnAdd.innerText = "Adicionar"
//     btnAdd.classList.add("btn-add") 
//     btnAdd.addEventListener("click",()=>{
//         addToCart(product)
//     })
//     li.append(pName,btnAdd)
//     ul.appendChild(li)
// })
// function addToCart(product){
//     const ulCart = document.querySelector("#cart")
//     const li = document.createElement("li")
//     li.id = product.id
//     const pName = document.createElement("p")
//     pName.innerText = product.name

//     const btnRemove = document.createElement("button")
//     btnRemove.innerText = "X"
//     btnRemove.addEventListener("click",(event)=>{
//         removeToCart(product)
//     })

//     li.append(pName,btnRemove)
//     ulCart.appendChild(li)
//     // console.log(product)
// }
// function removeToCart(product){
//     const ulCart = document.querySelector("#cart")
//     const childrens = Array.from(ulCart.children)
//     let li = ""
//     childrens.forEach((item)=>{
//         if(item.id==product.id){
//             console.log("foi")
//             li = item
//         }
//     })
//     console.log(li)
//     li.remove()
// }

import {data} from  "./ecommerce/database.js"
// console.log(listProducts)
function renderProducts(list=[]){
    const ul = document.querySelector("#products")
    list.forEach((item)=>{
        ul.insertAdjacentHTML("afterbegin",`
        <li>
        <img src=${item.img} alt="">
        <h2 class="p-name"> ${item.tag}</h2>
        <div class="div-texts">
            <p class="p-nameItem">nome: ${item.nameItem}</p>
            <p class="p-value">preço: ${item.value}</p>
            <p class="p-description">descricao: ${item.description}</p>
           
        </div>
        <button class="btn-add">Adicionar</button>
        
    </li>
        `)
        const btnAdd = document.querySelector(".btn-add")
        btnAdd.addEventListener("click",()=>{
        addToCart(item)
        })
    })
    
}
renderProducts(data)
let cartList = []
function addToCart(item){
    // console.log(cartList.length)
    if(cartList.length==0){
        item.id = 1
    }else{
        item.id = parseInt(cartList[cartList.length-1].id) +1
        console.log(item.id)
    }
    cartList.push(item)
    console.log(item)
    // const index =cartList[cartList.length]
    renderCart(cartList)
}
function renderCart(list=[]){
    const ulCart = document.querySelector("#cart")
    ulCart.innerHTML = ""
    list.forEach((item)=>{
        ulCart.insertAdjacentHTML("afterbegin",`
        <li>
            <div >
                <p class="p-nameItem">nome: ${item.nameItem}</p>
                <p class="p-value">preço: ${item.value}</p>
            </div>
            <button class="btn-remove">X</button>
        </li>
    `)
    const btnRemove = document.querySelector(".btn-remove")
    btnRemove.addEventListener("click",()=>{
        removeToCart(item)
    })
    })
}
function removeToCart(item){
    const index = cartList.findIndex((cart)=>cart.id == item.id)
     cartList.splice(index,1)
    
    renderCart(cartList)
    console.log(cartList)
}
