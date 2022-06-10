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
// Below code resets the grid with for loop and creates new grid
function create(size){
    
    let cleardiv = document.querySelectorAll('.boxClass');
    for (each of cleardiv){
        each.parentElement.removeChild(each);
        }
    let r = document.querySelector(':root');
    r.style.setProperty('--size', size);
    createGrid(size);
    reset();
    
}
// Below function is for colored squares
function color(){
    reset();
    let colorsquares = document.getElementsByClassName('boxClass');
    
    
    for (let i =0; i<colorsquares.length; i++){
    let colorsq = colorsquares[i];    
        
        colorsq.addEventListener('mouseover', colorFunct);
        function colorFunct(){
            var r = () => Math.random()* 255 >> 0;
            colorsq.style.backgroundColor= `rgb(${r()}, ${r()}, ${r()})`;
            
        }   
    }
    }

function black(){
    reset();
    let colorsquares = document.getElementsByClassName('boxClass');  
    
    for (let i =0; i<colorsquares.length; i++){
    let colorsq = colorsquares[i];    
        
        colorsq.addEventListener('mouseover', colorFunct);
        function colorFunct(){
            colorsq.style.backgroundColor= `black`;
            
        }
        
    }
    }
    

