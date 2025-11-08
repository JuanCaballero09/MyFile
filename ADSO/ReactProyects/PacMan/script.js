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
let direccion = null;
let moving = false;
let moveInterval;
let posicion;

const marcador = document.createElement('div');
marcador.classList.add('score');
marcador.innerText = `Score: ${score}`;
document.body.insertBefore(marcador, game);


// Creacion del mapa
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

// Creacion de Pacman
const pacmanDiv = document.createElement('div')
pacmanDiv.classList.add('pacman');
game.appendChild(pacmanDiv);

// Actualizacion de posicion de Pacman
function actualizarPosicion(){
    const x = pacman.columna * 40;
    const y = pacman.fila * 40;

    let rotation = 0;
    let scale = 1
    if (direccion === 'up') rotation = -90; scale=1;
    if (direccion === 'down') rotation = 90; scale=1;
    if (direccion === 'left') scale = -1; 
    if (direccion === 'right') scale = 1;

    pacmanDiv.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scaleX(${scale})`;
}

actualizarPosicion();

// Movimiento de Pacman
function moverPacman() {
    let nuevaFila = pacman.fila
    let nuevaColumna = pacman.columna 

    if (direccion === 'up') {
        nuevaFila--;
    }
    if (direccion === 'down') {
        nuevaFila++;
    }
    if (direccion === 'left') {
        nuevaColumna--;
    }
    if (direccion === 'right') {
        nuevaColumna++;
    }


    // Verifica si es un muro (Wall)
    if (mapa[nuevaFila][nuevaColumna] === 0){
        actualizarPosicion()
        clearInterval(moveInterval);
        moving = false;
        return;
    }

    // Actualizacion de posición
    pacman.fila = nuevaFila;
    pacman.columna = nuevaColumna;
    actualizarPosicion();

    // Comer bolitas
    if(mapa[pacman.fila][pacman.columna] === 2){

        mapa[pacman.fila][pacman.columna] = 1;

        const index = pacman.fila * mapa[0].length + pacman.columna;
        const cell = game.children[index];

        cell.classList.remove('dot');
        cell.classList.add('path');

        score++;
        marcador.innerText = `Score: ${score}`;
    }

    // Pantalla de ganaste
    if (mapa.flat().includes(2) === false) {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
        clearInterval(moveInterval);
    }
}


document.addEventListener('keydown', (event) => {
    

    if(event.key === 'ArrowUp') direccion = 'up';
    if(event.key === 'ArrowDown') direccion = 'down'; 
    if(event.key === 'ArrowLeft') direccion = 'left';
    if(event.key === 'ArrowRight') direccion = 'right'; 

    if (!moving) {
        moving = true;
        moveInterval = setInterval(moverPacman, 250);
    }
})

document.getElementById('retry').addEventListener('click', () => {
    location.reload();
});