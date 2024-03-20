function rgbColoring(){
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const rgb = `rgb(${red}, ${blue}, ${green})`;
    return rgb;
}

function createGridSquare(rows, columns){
    const container = document.getElementById(`etch-container`);
    for(let i = 1; i <= rows*columns; i++ ){
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        container.appendChild(square);
        let interaction = 0;
        square.addEventListener(`mouseover`, function(){
            interaction++;
            square.style.backgroundColor = '';
            square.style.backgroundColor = rgbColoring();
        });
    }
}
createGridSquare(16, 16);