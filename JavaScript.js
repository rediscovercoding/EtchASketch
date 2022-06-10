const box = document.querySelector('#grid');

function createGrid(size){
    
for (let i =0; i<(size*size); i++){
    let div = document.createElement('div');
    div.classList.add('boxClass');
    div.setAttribute('id', 'ele');
    div.style.backgroundColor= 'white';
    
    div.addEventListener("mouseover", magic)
    function magic() {
        div.style.backgroundColor= 'black';
    }; 
          
    box.appendChild(div);
}
}
createGrid(16);

function reset(){
let cleardiv = document.querySelectorAll('.boxClass');
for (each of cleardiv){
each.style.backgroundColor= 'white';
}
}
function create32(){
    let r = document.querySelector(':root');
    r.style.setProperty('--size', '32');
    createGrid(27.7);
    reset();
    document.getElementById("button").disabled= true;
}

function color(){
    reset();
    let colorsquares = document.getElementsByClassName('boxClass');
    
    
    for (colorsq of colorsquares){
        
        colorsq.classList.add('color');
        colorsq.addEventListener('mouseover', colorFunct);
        function colorFunct(){
            colorsq.style.backgroundColor= 'blue';
            console.log('mouse');
        }
        
    }
    }
    