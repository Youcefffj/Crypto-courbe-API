import React, { useState } from 'react';
import CallGraph from "./CallGraph";


const TimeChoice = (props) => {
    const [saisie, setSaisie] = useState("");
    const [showTimeChoice, setShowTimeChoice] = useState(false);
    const [choix, setChoix] = useState();


    const handleChange = (event) => {
        const valueAfterChange = event.target.value
        setSaisie(valueAfterChange);
    }
    const handleChoice = (saisie) => {
        setChoix(saisie)
        setShowTimeChoice(true);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("handleSubmit")
    }

    const { symbol } = props;
    console.log(symbol);
    return (
        <div>
            {showTimeChoice ? (
                <CallGraph time={choix} symbol={symbol} />
            ) : (
                <>
                    <h1>Choix de l'échelle de temps</h1>
                    <input value={saisie}
                        type="number"
                        min="1"
                        max="100"
                        maxLength="3"
                        placeholder='Entrez le nombre de jours..'
                        onChange={handleChange}
                    />
                    <button onClick={() => handleChoice(saisie)}>Choisir</button>
                </>
            )}
        </div>
    );
}

export default TimeChoice;