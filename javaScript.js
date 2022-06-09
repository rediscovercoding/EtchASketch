
function createGrid16(gridSize){
    const grid= document.querySelector('#grid');
    
    for (let n = 0; n < (gridSize*gridSize); n++){
        div2 = document.createElement('div');
        grid.appendChild(div2);
        
        div2.style.cssText = 'width: 10px; height: 10px';
        
    }
    document.getElementById("grid").style.gridTemplateColumns = "repeat("+gridSize+",10px)";
}