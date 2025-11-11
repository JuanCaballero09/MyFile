const mapa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,0,2,0,0,0,0,2,0,2,0,0,0,0,2,0,0,0,2,0],
    [0,2,0,0,0,2,0,0,0,0,2,0,2,0,0,0,0,2,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,0,2,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0],
    [0,2,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0],
    [0,0,0,0,0,2,0,0,0,0,2,0,2,0,0,0,0,2,0,0,0,0,0],
    [1,1,1,1,0,2,0,1,1,1,1,1,1,1,1,1,0,2,0,1,1,1,1], 
    [1,1,1,1,0,2,0,1,0,0,0,1,0,0,0,1,0,2,0,1,1,1,1], 
    [0,0,0,0,0,2,0,1,0,1,1,1,1,1,0,1,0,2,0,0,0,0,0], 
    [0,1,1,1,1,2,1,1,0,1,1,1,1,1,0,1,1,2,1,1,1,1,0], 
    [0,1,1,1,1,2,1,1,0,1,1,1,1,1,0,1,1,2,1,1,1,1,0], 
    [0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0], 
    [1,1,1,1,0,2,0,1,1,1,1,1,1,1,1,1,0,2,0,1,1,1,1], 
    [1,1,1,1,0,2,0,1,1,1,1,1,1,1,1,1,0,2,0,1,1,1,1], 
    [0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0], 
    [0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0], 
    [0,2,0,0,0,2,0,0,0,0,2,0,2,0,0,0,0,2,0,0,0,2,0], 
    [0,2,2,2,0,2,2,2,2,2,2,1,2,2,2,2,2,2,0,2,2,2,0], 
    [0,0,0,2,0,2,0,2,0,0,0,0,0,0,0,2,0,2,0,2,0,0,0], 
    [0,2,2,2,2,2,0,2,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0], 
    [0,2,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,0], 
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0], 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
];

const game = document.getElementById('game');

const pacman = { fila: 19, columna: 11 };
let score = 0;
let direccion = null;
let moving = false;
let moveInterval;
let posicion;

let tiempoInicio = null;
let tiempoTranscurrido = 0;
let timerInterval = null;

let fantasmas = [
    { fila: 12, columna: 10, x: 11 * 24.8, y: 11 * 24.8, direccion: { fila: 0, columna: 1 }, color: 'red',    activo: false, tiempoActivacion: 0 },
    { fila: 12, columna: 11, x: 10 * 24.8, y: 12 * 24.8, direccion: { fila: 0, columna: -1 }, color: 'pink',   activo: false, tiempoActivacion: 6 },
    { fila: 13, columna: 10, x: 11 * 24.8, y: 12 * 24.8, direccion: { fila: 0, columna: 1 }, color: 'cyan',    activo: false, tiempoActivacion: 10 },
    { fila: 13, columna: 11, x: 12 * 24.8, y: 12 * 24.8, direccion: { fila: 0, columna: -1 }, color: 'orange', activo: false, tiempoActivacion: 14 }
];
// Inicializar targets
fantasmas.forEach(f => {
  f.targetX = f.x;
  f.targetY = f.y;
});
let ghostInterval = null;

const info = document.querySelector('.info');
const marcador = document.createElement('div');
marcador.classList.add('score');
marcador.classList.add('hidden');
marcador.innerText = `Score: ${score}`;
info.appendChild(marcador);

const timer = document.createElement('div');
timer.classList.add('timer');
timer.classList.add('hidden');
timer.innerText = `Tiempo: 0s`;
info.appendChild(timer);

const ready = document.createElement('div');
ready.classList.add('ready');
ready.innerText = `Presiona una flecha o WASD para comenzar`;
info.appendChild(ready);

// Crear mapa
for (let fila = 0; fila < mapa.length; fila++) {
    for (let columna = 0; columna < mapa[fila].length; columna++){
        const celda = document.createElement('div');
        celda.classList.add('cell');
        if (mapa[fila][columna] === 0) celda.classList.add('wall');
        if (mapa[fila][columna] === 1) celda.classList.add('path');
        if (mapa[fila][columna] === 2) celda.classList.add('dot');
        game.appendChild(celda);
    }
}

// Crear Pac-Man
const pacmanDiv = document.createElement('div');
pacmanDiv.classList.add('pacman');
game.appendChild(pacmanDiv);

// Crear fantasmas
const ghostDivs = [];
fantasmas.forEach(f => {
    const ghostDiv = document.createElement('div');
    ghostDiv.classList.add('ghost', f.color);
    ghostDiv.style.display = 'block';
    ghostDiv.style.zIndex = 5;
    game.appendChild(ghostDiv);
    ghostDivs.push(ghostDiv);
});

// Actualizar posiciones
function actualizarPosicion() {
    const x = pacman.columna * 24.8;
    const y = pacman.fila * 24.8;
    let rotation = 0;
    if (direccion === 'up') rotation = -90;
    if (direccion === 'down') rotation = 90;
    if (direccion === 'left') rotation = -180;
    if (direccion === 'right') rotation = 0;
    pacmanDiv.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

actualizarPosicion();

function actualizarPosicionFantasmas() {
    fantasmas.forEach((f, i) => {
        ghostDivs[i].style.transform = `translate(${f.x}px, ${f.y}px)`;
        ghostDivs[i].style.display = 'block';
    });
}

actualizarPosicionFantasmas();

// Timer
function actualizarTimer() {
    if (tiempoInicio) {
        tiempoTranscurrido = Math.floor((Date.now() - tiempoInicio) / 1000);
        timer.innerText = `Tiempo: ${tiempoTranscurrido}s`;

        fantasmas.forEach((f, i) => {
            if (!f.activo && tiempoTranscurrido >= f.tiempoActivacion) {
                f.activo = true;
                f.salio = false;
                salirDeCentro(f, i);
            }
        });
    }
}

// --- NUEVA FUNCIÓN: salida suave del centro ---
function salirDeCentro(f, i) {
    const tamCelda = 24.8;

    // Punto de destino: la "puerta" de salida del corral
    const salidaFila = 7;
    const salidaColumna = 11;
    const destinoX = salidaColumna * tamCelda;
    const destinoY = salidaFila * tamCelda;

    // Movimiento suave hacia la puerta
    const anim = setInterval(() => {
        const dx = destinoX - f.x;
        const dy = destinoY - f.y;
        const dist = Math.hypot(dx, dy);
        const step = 1.5;

        if (dist > 1) {
            f.x += (dx / dist) * step;
            f.y += (dy / dist) * step;
            ghostDivs[i].style.transform = `translate(${f.x}px, ${f.y}px)`;
        } else {
            // Llegó a la puerta
            clearInterval(anim);

            // Lo ubicamos justo en la salida
            f.x = destinoX;
            f.y = destinoY;
            f.fila = salidaFila;
            f.columna = salidaColumna;

            // Marca que ya puede moverse libremente
            f.salio = true;
            ghostDivs[i].style.transform = `translate(${f.x}px, ${f.y}px)`;
        }
    }, 16);
}

// Movimiento Pac-Man
function moverPacman() {
    let nuevaFila = pacman.fila;
    let nuevaColumna = pacman.columna;
    if (direccion === 'up') nuevaFila--;
    if (direccion === 'down') nuevaFila++;
    if (direccion === 'left') nuevaColumna--;
    if (direccion === 'right') nuevaColumna++;

    if (mapa[nuevaFila][nuevaColumna] === 0) return;

    pacman.fila = nuevaFila;
    pacman.columna = nuevaColumna;
    actualizarPosicion();

    if (mapa[pacman.fila][pacman.columna] === 2) {
        mapa[pacman.fila][pacman.columna] = 1;
        const index = pacman.fila * mapa[0].length + pacman.columna;
        const cell = game.children[index];
        cell.classList.remove('dot');
        cell.classList.add('path');
        score++;
        marcador.innerText = `Score: ${score}`;
    }

    fantasmas.forEach(f => {
        if (f.activo && Math.abs(f.fila - pacman.fila) < 1 && Math.abs(f.columna - pacman.columna) < 1) {
            gameOver();
        }
    });

    if (!mapa.flat().includes(2)) ganar();
}

// Devuelve la siguiente dirección óptima desde una posición hacia Pac-Man
function direccionHaciaPacman(filaInicio, colInicio, filaObjetivo, colObjetivo) {
    const filas = mapa.length;
    const columnas = mapa[0].length;
    const visitado = Array.from({ length: filas }, () => Array(columnas).fill(false));
    const cola = [];

    cola.push({ fila: filaInicio, col: colInicio, path: [] });
    visitado[filaInicio][colInicio] = true;

    const direcciones = [
        { fila: -1, col: 0, dir: 'up' },
        { fila: 1, col: 0, dir: 'down' },
        { fila: 0, col: -1, dir: 'left' },
        { fila: 0, col: 1, dir: 'right' }
    ];

    while (cola.length > 0) {
        const actual = cola.shift();
        if (actual.fila === filaObjetivo && actual.col === colObjetivo) {
            return actual.path[0]; // primera dirección del camino hacia Pac-Man
        }

        for (const d of direcciones) {
            const nf = actual.fila + d.fila;
            const nc = actual.col + d.col;
            if (
                nf >= 0 && nf < filas &&
                nc >= 0 && nc < columnas &&
                !visitado[nf][nc] &&
                mapa[nf][nc] !== 0 // no es muro
            ) {
                visitado[nf][nc] = true;
                cola.push({
                    fila: nf,
                    col: nc,
                    path: [...actual.path, d]
                });
            }
        }
    }

    return null; // si no hay camino posible
}

// Movimiento fantasmas
function moverFantasmas() {
    const velocidad = 1; // píxeles por frame (ajusta si quieres más/menos suavidad)
    const tamCelda = 24.8;

    fantasmas.forEach((f, i) => {
        if (!f.activo || !f.salio) return;

        // --- Si ya hay un objetivo, muévete hacia él ---
        const dx = f.targetX - f.x;
        const dy = f.targetY - f.y;
        const distancia = Math.hypot(dx, dy);

        if (distancia > 0.1) {
            // Mover hacia el objetivo con velocidad constante
            const step = Math.min(velocidad, distancia);
            f.x += (dx / distancia) * step;
            f.y += (dy / distancia) * step;

            // Si queda menos que un step, poner exacto (snap)
            const restante = Math.hypot(f.targetX - f.x, f.targetY - f.y);
            if (restante < 0.5) {
                f.x = f.targetX;
                f.y = f.targetY;
            }

            // Actualizar visual mientras se mueve
            ghostDivs[i].style.transform = `translate(${f.x}px, ${f.y}px)`;
            // Colisión con Pac-Man durante movimiento
            const distPac = Math.hypot(f.x - pacman.columna * tamCelda, f.y - pacman.fila * tamCelda);
            if (distPac < 20) gameOver();

            // No decidir nueva dirección hasta llegar al objetivo
            return;
        }

        // --- Si estamos en el centro (llegamos al target) decidimos la siguiente celda ---
        // Aseguramos estar exactamente alineados al centro de celda
        const filaActual = Math.round(f.y / tamCelda);
        const columnaActual = Math.round(f.x / tamCelda);
        f.fila = filaActual;
        f.columna = columnaActual;
        f.x = columnaActual * tamCelda;
        f.y = filaActual * tamCelda;
        ghostDivs[i].style.transform = `translate(${f.x}px, ${f.y}px)`;

        // Direcciones posibles
        const direcciones = [
            { fila: -1, columna: 0 }, // arriba
            { fila: 1, columna: 0 },  // abajo
            { fila: 0, columna: -1 }, // izquierda
            { fila: 0, columna: 1 }   // derecha
        ];

        // Filtrar direcciones válidas (no muros)
        let validas = direcciones.filter(d =>
            mapa[filaActual + d.fila] &&
            mapa[filaActual + d.fila][columnaActual + d.columna] !== 0
        );

        // Evitar 180° si hay otras opciones
        const opuesta = { fila: -f.direccion.fila, columna: -f.direccion.columna };
        const sinOpuesta = validas.filter(d => !(d.fila === opuesta.fila && d.columna === opuesta.columna));
        if (sinOpuesta.length > 0) validas = sinOpuesta;

        // Si no hay direcciones válidas (callejón cerrado), permitir la opuesta (vuelta atrás)
        if (validas.length === 0) {
            validas = direcciones.filter(d =>
                mapa[filaActual + d.fila] &&
                mapa[filaActual + d.fila][columnaActual + d.columna] !== 0
            );
        }

        // Si aún no hay ninguna válida (estamos completamente encerrados), quedamos quietos
        if (validas.length === 0) {
            f.direccion = { fila: 0, columna: 0 };
            f.targetX = f.x;
            f.targetY = f.y;
            return;
        }

        // "Inteligencia": 40% intenta acercarse al Pac-Man, 60% al azar
        let elegido;

        if (Math.random() < 0.4) {
            const dir = direccionHaciaPacman(filaActual, columnaActual, pacman.fila, pacman.columna);
            if (dir) {
                // usamos la primera dirección devuelta por BFS
                elegido = { fila: dir.fila, columna: dir.col };
            } else {
                // si no hay camino directo, moverse al azar
                elegido = validas[Math.floor(Math.random() * validas.length)];
            }
        } else {
            elegido = validas[Math.floor(Math.random() * validas.length)];
        }

        // Fijar nueva dirección y objetivo (una celda adelante)
        f.direccion = { fila: elegido.fila, columna: elegido.columna };
        f.targetX = (columnaActual + elegido.columna) * tamCelda;
        f.targetY = (filaActual + elegido.fila) * tamCelda;

        // Por seguridad: si target es muro (no debería), cancelar
        const tfila = filaActual + elegido.fila;
        const tcol = columnaActual + elegido.columna;
        if (!mapa[tfila] || mapa[tfila][tcol] === 0) {
            // evitar cruzar muros; dejar target en la celda actual
            f.targetX = f.x;
            f.targetY = f.y;
            f.direccion = { fila: 0, columna: 0 };
        }
        // Si la nueva dirección está bien, empezará a moverse en el siguiente frame (por el paso inicial de la función)
    });
}

// Funciones de fin
function gameOver() {
    clearInterval(moveInterval);
    clearInterval(timerInterval);
    clearInterval(ghostInterval);
    const modal = document.getElementById('modal');
    modal.querySelector('.modal-h2').innerText = '¡Perdiste!';
    document.getElementById('finalTime').innerText = `Tiempo: ${tiempoTranscurrido}s`;
    modal.classList.remove('hidden');
}

function ganar() {
    clearInterval(moveInterval);
    clearInterval(timerInterval);
    clearInterval(ghostInterval);
    const modal = document.getElementById('modal');
    modal.querySelector('.modal-h2').innerText = '¡Ganaste!';
    document.getElementById('finalTime').innerText = `Tiempo: ${tiempoTranscurrido}s`;
    modal.classList.remove('hidden');
}

// Controles
document.addEventListener('keydown', e => {
    if (!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'].includes(e.key)) return;
    if (e.key === 'ArrowUp' || e.key === 'w') direccion = 'up';
    if (e.key === 'ArrowDown' || e.key === 's') direccion = 'down';
    if (e.key === 'ArrowLeft' || e.key === 'a') direccion = 'left';
    if (e.key === 'ArrowRight' || e.key === 'd') direccion = 'right';
    
    // Iniciar movimiento al primer input
    ready.classList.add('hidden');
    marcador.classList.remove('hidden');
    timer.classList.remove('hidden');

    if (!moving) {
        moving = true;
        if (!tiempoInicio) {
            tiempoInicio = Date.now();
            timerInterval = setInterval(actualizarTimer, 100);
            ghostInterval = setInterval(moverFantasmas, 16);
        }
        moveInterval = setInterval(moverPacman, 300);
    }
});

document.getElementById('retry').addEventListener('click', () => location.reload());
