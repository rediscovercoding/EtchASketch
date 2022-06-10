let grid= document.querySelector('#grid');
// let divs = grid.querySelectorAll("div");
// divs.forEach((div) => div.remove());

grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";




    for (let n = 0; n < (16*16); n++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor= 'black';
        });   
        div.style.backgroundColor= "yellow";    
        grid.insertAdjacentElement("beforeend", div);
        
    }



// function createGrid(gridSize){
// let grid= document.querySelector('.grid1');
// let divs = grid.querySelectorAll("div");
// divs.forEach((div) => div.remove());

// grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
// grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;




//     for (let n = 0; n < (gridSize*gridSize); n++){
//         let div = document.createElement('div');
//         div.addEventListener("mouseover", () =>{
//             div.style.backgroundColor= 'black';
//         });   
//         div.style.backgroundColor= 'white';    
//         grid.insertAdjacentElement("beforeend", div);
        
//     }
// }
// createGrid(16);

// function createGrid(gridSize){
//     grid.style.gridTemplateColumns = "repeat("+gridSize+",10px)";
//     grid.style.gridTemplateRows = "repeat("+gridSize+",10px)";
//     for (let n = 0; n < (gridSize*gridSize); n++){
//         let div = document.createElement('div');
//         div.addEventListener("mouseover", () =>{
//             div.style.backgroundColor= 'black';
//         })   
            
//         grid.insertAdjacentElement("beforeend", div);
        
//     }
// }    
// const div1 = document.querySelector("#ele");
// div1.addEventListener("mouseover",function(event){
//     event.target.classList.add("color");
// });




// function createGrid(gridSize){
    
    
//     for (let n = 0; n < (gridSize*gridSize); n++){
//         div2 = document.createElement('div');
//         grid.appendChild(div2);
        
//         div2.style.cssText = 'width: 10px; height: 10px';
//         // div2.className='elements';
//         // div2.setAttribute("id", "ele");

//     }
//     document.getElementById("grid").style.gridTemplateColumns = "repeat("+gridSize+",10px)";
// }

