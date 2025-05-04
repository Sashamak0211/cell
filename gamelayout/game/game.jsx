import { useState } from "react";
import { Field } from "../Field/Field";
import { GameLayout } from './gamelayout';
import { Information } from "../information/information";
const WIN_PATTERN = [
    [0,1,2],
    [3,4,5],
    [6,7,8], // gorizontal
    [0,3,6],
    [1,4,7],
    [2,5,8], // vertikal
    [0,4,8],
    [2,4,6], // diagonal
];

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)
    const [field, setField] = useState(Array(9).fill(''));

    const checkWinner = (field) => {
        return WIN_PATTERN.some(([a, b, c]) => 
            field[a] && field[a] === field[b] && field[a] === field[c]
        )
    }

    const handleCellClick = (index) => {
        if(field[index] || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);

        if(checkWinner(newField)) {
            setIsGameEnded(true);
        } else if (!newField.includes('')) {
            setIsDraw(true)
        }
        else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
        }
    };

    const resetGame = () => {
        setCurrentPlayer('X')
        setIsGameEnded(false)
        setIsDraw(false)
        setField(Array(9).fill(''));
    };

    return (
        <GameLayout 
        Information={
            <Information
        isDraw={isDraw}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        />
    }
    field={<Field field={field} 
    onCellClick={handleCellClick}
    currentPlayer={currentPlayer}/>} 
    onReset={resetGame}
    />
)
};
