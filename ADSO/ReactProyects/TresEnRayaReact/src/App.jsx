import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'

import { TURNS, WINNER_COMBOS } from './constant'

export function App() {
    // Estado del tablero
    const [board, setBoard] = useState(Array(9).fill(null))

    // Estado del turno
    const [turn, setTurn] = useState(TURNS.X)

    // Estado del ganador
    const [winner, setWinner] = useState(null)

    // Funcion para saber si hay ganador
    const checkWinner = (boardToCheck) => {
        for(const combo of WINNER_COMBOS){
            const [a,b,c] = combo
            if (
                boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]
            ){
                return boardToCheck[a];
            }
        }

        return false
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    const checkEndGame = (boardToCheck) => {
        return boardToCheck.every((square) => square !== null)
    }

    const updateBoard = (index) => {
        // comprobacion si ya tiene algo o ya hay un ganador
        if(board[index] || winner) return

        // Actualizar tablero
        const newBoard = [ ...board ]
        newBoard[index] = turn
        setBoard(newBoard)

        // Cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        // Revisar si hay ganador
        const newWinner = checkWinner(newBoard)
        if (newWinner){
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>volver a jugar</button>
            <section className="game">
                {
                    board.map((_,index) => {
                        return (
                            <Square 
                            key={index} 
                            index={index}
                            updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
        </main>
    )
}