const mapa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,0,2,0,2,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,2,0,0,0,2,0,0,0,2,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,2,0,0,1,0,0,2,0,2,0],
    [0,2,0,2,0,1,1,1,0,2,0,2,0],
    [0,2,0,2,0,1,1,1,0,2,0,2,0],
    [0,2,0,2,0,0,0,0,0,2,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,0,0,2,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    
]

const game = document.getElementById('game');

const pacman = {fila : 8, columna: 6}
let score = 0;

const marcador = document.createElement('div');
marcador.classList.add('score');
marcador.innerText = `Score: ${score}`;
document.body.insertBefore(marcador, game);

for (let fila = 0; fila < mapa.length; fila++) {
    for (let columna = 0; columna < mapa[fila].length; columna++){
        const celda = document.createElement('div');
        celda.classList.add('cell');

        if (mapa[fila][columna] === 0) celda.classList.add('wall')
        if (mapa[fila][columna] === 1) celda.classList.add('path')
        if (mapa[fila][columna] === 2) celda.classList.add('dot')

        game.appendChild(celda);
    }
    
}

const pacmanDiv = document.createElement('div')
pacmanDiv.classList.add('pacman');
game.appendChild(pacmanDiv);

function actualizarPosicion(){
    const x = pacman.columna * 40;
    const y = pacman.fila * 40;
    pacmanDiv.style.transform = `translate(${x}px, ${y}px)`;
}

actualizarPosicion();

document.addEventListener('keydown', (event) => {
    let nuevaFila = pacman.fila
    let nuevaColumna = pacman.columna

    if(event.key === 'ArrowUp') nuevaFila--;
    if(event.key === 'ArrowDown') nuevaFila++;
    if(event.key === 'ArrowLeft') nuevaColumna--;
    if(event.key === 'ArrowRight') nuevaColumna++;

    if(mapa[nuevaFila][nuevaColumna] !== 0){
        pacman.fila = nuevaFila;
        pacman.columna = nuevaColumna;
        actualizarPosicion();
    }

    if(mapa[pacman.fila][pacman.columna] === 2){

        mapa[pacman.fila][pacman.columna] = 1;

        const index = pacman.fila * mapa[0].length + pacman.columna;
        const cell = game.children[index];

        cell.classList.remove('dot');
        cell.classList.add('path');

        score++;
        marcador.innerText = `Score: ${score}`;
    }

    if (mapa.flat().includes(2) === false) {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
    }
})

document.getElementById('retry').addEventListener('click', () => {
    location.reload();
});