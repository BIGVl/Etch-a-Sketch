// Important variables
const grid = document.querySelector('.grid');
const rows = document.getElementsByClassName('gridRows');
const cells = document.getElementsByClassName('gridCells');
const clear = document.querySelector('.clear');
const whiteBlack = document.querySelector('.whiteBlack');
const colorful = document.querySelector('.colorful');
const eraser = document.querySelector('.eraser');
const colorPicker = document.querySelector('#colorPicker');
let cellsarr;

// Making the grid and setting number of the squares to be adjustable
function makeRows (rowNum) {

     for (let i=0; i<rowNum; i++) {
         let row = document.createElement('div');                               
         grid.appendChild(row).className = 'gridRows';

     }
}


function makeColumns (cellNum) {

    for (let i=0; i<rows.length;i++) { 
        for (let j=0;j<cellNum;j++){
        let cell = document.createElement('div');
        rows[j].appendChild(cell).className = 'gridCells';    
        }
    }
}

//Function for the default grid
function defaultGrid () {
  
    makeRows(16);
    makeColumns(16);

    const cellsarr = Array.from(cells);
cellsarr.forEach(element=>{
    element.addEventListener('mouseover', ()=>{
        element.setAttribute('style', "background-color:black");
    })
})
}




//Changes the color of the squares to black while hovering over the squares after the button "White/Black" is pressed
whiteBlack.addEventListener('click',()=>{
    const cellsarr = Array.from(cells);
cellsarr.forEach(element=>{
    element.addEventListener('mouseover', ()=>{
        element.setAttribute('style', "background-color:black");
    })
})
} );

//Changes the color of the squares to random RGB while hovering over the squares after the button "Colorful" is pressed
colorful.addEventListener('click', ()=>{
    const cellsarr = Array.from(cells);
    cellsarr.forEach(element=>{
        element.addEventListener('mouseover', ()=>{
            let randomColour = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            element.style.backgroundColor = '#' + randomColour;
    
        })
})});

//Changes the color of the squares to white while hovering over the squares after the button "Eraser" is pressed
eraser.addEventListener('click', ()=> {
    const cellsarr = Array.from(cells);
    cellsarr.forEach(element=>{
        element.addEventListener('mouseover', ()=>{
            element.setAttribute('style', "background-color:white");
        })
    })
})

//Changes the color of the squares to the chosen one while hovering over the squares after the button input type color is pressed
colorPicker.addEventListener('change', e=>{
    newColor= e.target.value;
    const cellsarr = Array.from(cells);
    cellsarr.forEach(element=>{
        element.addEventListener('mouseover', ()=>{
            element.style.backgroundColor = newColor;
        })
    })
})

// Resets the content when the 'Reset' button is clicked
function resetSketch () {

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }; 
cellsarr = Array.from(cells);
   cellsarr.forEach(element=>{
    element.setAttribute('style', 'background-color:white');
   });

   let newGrid = prompt('Choose how you want the grid to be between 1 and 64');
   if (newGrid<1 || newGrid>64) {
       return 
   }
   makeRows(newGrid);
   makeColumns(newGrid);

   //Changes the color of the newCells created while hovering
   const newCells = Array.from(cells);
   newCells.forEach(element=>{
    element.addEventListener('mouseover', ()=>{
        element.setAttribute('style', "background-color:black");
    })
})
}
clear.addEventListener('click', resetSketch);

window.onload = () => defaultGrid();

