import image1 from "./diceRoll1.png"
import image2 from "./diceRoll2.png"
import image3 from "./diceRoll3.png"
import image4 from "./diceRoll4.png"
import image5 from "./diceRoll5.png"
import image6 from "./diceRoll6.png"

function Dice({dice}) {
    let pic;
    switch (dice) {
        case 1:
            pic = image1;
            break;
        case 2:
            pic = image2;
            break;
        case 3:
            pic = image3;
            break;
        case 4:
            pic = image4;
            break;
        case 5:
            pic = image5;
            break;

        case 6:
            pic = image6;
            break;
        default:
            break;
    }
    return (	
        <img width="200" height="200" src={pic} alt="dice"/>
    )
}

export default Dice;