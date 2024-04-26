import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { RouletteForm } from "./RouletteForm";

const data = [
  { option: 'hoyoshi', style: { backgroundColor: 'green' } },
  { option: '1', style: { backgroundColor: 'red' } },
  { option: '2' },
]

const App = () => {

  const [mustSpin, setMustSpin] = useState(false);
  // const [prizeNumber, setPrizeNumber] = useState(2);
  const [rouletteContents, setRouletteContents] = useState(data);

  const handleSpinClick = () => {
    if (!mustSpin) {
      setMustSpin(true);
    }
  };

  const addRoulette = () => {
    const addingRoulette = { option: 'hoyoshi' };

    setRouletteContents ( [...rouletteContents, addingRoulette] );
  };

  return (
  <>
    <div className="rouletteApp">
      <div className="rouletteBody">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={2}
          data={rouletteContents}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['white']}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
      <div className="rouletteButton">
        <button onClick={handleSpinClick}>SPIN</button>
        <button onClick={addRoulette}>ADD</button>
      </div>
      <div className="rouletteForm">
        <RouletteForm />
      </div>
    </div>
  </>
  )
};

export default App;
