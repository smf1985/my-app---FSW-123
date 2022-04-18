import {useState} from 'react';
import Dice from './Dice.js';

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
                <Dice value ={dice1Num}/>
                <Dice value ={dice2Num} />
            </div>
            <button onClick ={rollDice}>Roll Dice</button>
        </>
    );
}

export default RollDice;