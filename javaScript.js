const grid= document.querySelector('#grid');
    
    for (let n = 0; n < (16*16); n++){
        div2 = document.createElement('div');
        grid.appendChild(div2);
        
        div2.style.cssText = 'width: 10px; height: 10px';
        
    }
    document.getElementById("grid").style.gridTemplateColumns = "repeat(16,10px)";

document.getElementById("grid").onmouseover = function() {mouseOver()};
function mouseOver() {
    document.getElementById("grid").style.backgroundColor = "blue";
    console.log('mouseover')
  }


function createGrid(gridSize){
    
    
    for (let n = 0; n < (gridSize*gridSize); n++){
        div2 = document.createElement('div');
        grid.appendChild(div2);
        
        div2.style.cssText = 'width: 10px; height: 10px';
        
    }
    document.getElementById("grid").style.gridTemplateColumns = "repeat("+gridSize+",10px)";
}