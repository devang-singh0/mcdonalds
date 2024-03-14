let img = document.querySelectorAll('main #thumb img');
let imge = document.querySelectorAll('main #img img');
img[0].onclick = ()=>{
    imge[0].src = 'img4.png'
}
img[1].onclick = ()=>{
    imge[0].src = 'img5.png'
}
img[2].onclick = ()=>{
    imge[0].src = 'img6.png'
}
img[3].onclick = ()=>{
    imge[0].src = 'img7.png'
}

let lab = document.querySelector('label');
let nav = document.querySelector('header ul')
lab.onclick = ()=>{
    nav.classList.toggle('inactive');
    
}