import {useState} from 'react';
import Die from './Die.js';

function RollDice() {
    const [dice1Num, setDice1Num] = useState(0);
    const [dice2Num, setDice2Num] = useState(0);
    
    const rollDice = () => {
        setDice1Num(Math.floor(Math.random() * 6) + 1);
        setDice2Num(Math.floor(Math.random() * 6) + 1);
    }

    return (
        <>
            <div id="dice-board">
                <Die value ={dice1Num}/>
                <Die value ={dice2Num} />
            </div>
            <button onClick ={rollDice}>Roll Dice</button>
        </>
    );
}

export default RollDice;