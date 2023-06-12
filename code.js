let name = new Array();
let price = new Array();
let pic = new Array();
let sum=0

function addItem(index){
    sum = sum + +price[index]
    let li= document.createElement('li')
    li.innerText=name[index]+"\ncost:"+price[index]
    document.getElementById('side_list').appendChild(li)
    document.getElementById('side_total').innerText='total = '+sum+'$'
}
function order(){
    if(sum == 0){
        alert('order something first')
        return;
    }
    address = document.getElementById("address").value
    if(address === ''){
        alert('please enter your address')
        return;
    }
    const list =document.getElementById('side_list')
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
    document.getElementById('side_total').innerText='total = 0$'
    sum = 0
    alert("your order has been placed")

}
async function loadFlowers(){
    const response = await fetch('flowers.txt')
    const x = await response.text()
    const data = x.split('\n')
    name=[]
    price=[]
    pic=[]
    for(let i = 0 ; i< data.length ; i++){
        const temp = data[i].split(',')
        name[i] = temp[0]
        price[i] = temp[1]
        pic[i] = temp[2]
    }
    
}
async function orderFlowers(){
    await loadFlowers()
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    for(let i =0; i<name.length; i++){
        let dev = document.createElement('div')
        dev.className='item'
        let txt = document.createElement('h1')
        txt.className = 'item_text'
        txt.innerText= name[i]+'\n cost ='+price[i]
        let button = document.createElement('button')
        button.setAttribute('type','button')
        button.className='item_but'
        button.innerText='place order'
        button.addEventListener('click',()=>{
            addItem(i)
        })
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'pictures\\flower'+pic[i]+'.jpeg')
        dev.appendChild(img)
        dev.appendChild(txt)
        dev.appendChild(button)
        main.appendChild(dev)
    }
}
async function loadTrees(){
    const response = await fetch('trees.txt')
    const x = await response.text()
    const data = x.split('\n')
    name=[]
    price=[]
    pic=[]
    for(let i = 0 ; i< data.length ; i++){
        console.log(data)
        const temp = data[i].split(',')
        name[i] = temp[0]
        price[i] = temp[1]
        pic[i] = temp[2]
    }
    
}
async function orderTrees(){
    await loadTrees()
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    for(let i =0; i<name.length; i++){
        let dev = document.createElement('div')
        dev.className='item'
        let txt = document.createElement('h1')
        txt.className = 'item_text'
        txt.innerText= name[i]+'\n cost ='+price[i]
        let button = document.createElement('button')
        button.setAttribute('type','button')
        button.className='item_but'
        button.innerText='place order'
        button.addEventListener('click',()=>{
            addItem(i)
        })
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'pictures\\tree'+pic[i]+'.jpeg')
        dev.appendChild(img)
        dev.appendChild(txt)
        dev.appendChild(button)
        main.appendChild(dev)
    }
}
async function loadTools(){
    const response = await fetch('tool.txt')
    const x = await response.text()
    const data = x.split('\n')
    name=[]
    price=[]
    pic=[]
    for(let i = 0 ; i< data.length ; i++){
        console.log(data)
        const temp = data[i].split(',')
        name[i] = temp[0]
        price[i] = temp[1]
        pic[i] = temp[2]
    }
    
}
async function orderTools(){
    await loadTools()
    const main = document.getElementById('main')
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    for(let i =0; i<name.length; i++){
        let dev = document.createElement('div')
        dev.className='item'
        let txt = document.createElement('h1')
        txt.className = 'item_text'
        txt.innerText= name[i]+'\n cost ='+price[i]
        let button = document.createElement('button')
        button.setAttribute('type','button')
        button.className='item_but'
        button.innerText='place order'
        button.addEventListener('click',()=>{
            addItem(i)
        })
        let img = document.createElement('img')
        img.className='item_img'
        img.setAttribute('src', 'pictures\\tool'+pic[i]+'.jpeg')
        dev.appendChild(img)
        dev.appendChild(txt)
        dev.appendChild(button)
        main.appendChild(dev)
    }
}
document.getElementById("flowers").addEventListener('click',orderFlowers)
document.getElementById("trees").addEventListener('click',orderTrees)
document.getElementById("garden gear").addEventListener('click',orderTools)
document.getElementById("side_but").addEventListener('click',order)