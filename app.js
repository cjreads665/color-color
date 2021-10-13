const query=(name)=>{
    return document.querySelector(name)
}
const queryAll=(name)=>{
    return document.querySelectorAll(name)
}
const id=(name)=>{
    return document.getElementById(name)
}
const classT=(name)=>{
    return document.getElementsByClassName(name)
}

let choose= query('#color-picker')
choose.previousElementSibling.style.textAlign='center';

//=======================================================================
let inputs = document.querySelectorAll('input')
function updateStatus(){
    let suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

// inputs.forEach(input=>input.addEventListener('mousemove',updateStatus))
inputs.forEach(input=>input.addEventListener('input',updateStatus))

//============================================================
var pics = [
    'pic-1.jpg',
    'pic-2.jpg',
    'pic-3.jpg'
]
let img = document.getElementById('image');
let i=0; // the current image
//next image fun
function next(){
    i++ // the next image
    if(i>=pics.length){
        i=0
    }
    img.setAttribute('src',pics[i])
    console.log(i);

}

function prev(){
    i-- //previous image
    if(i<0){
        i=pics.length-1
    }
    img.setAttribute('src',pics[i])
    
}
document.getElementById('right').addEventListener('click',next)
document.getElementById('left').addEventListener('click',prev)