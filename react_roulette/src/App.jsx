import React from 'react';
import './styles.css';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { RouletteForm } from "./components/RouletteForm";

const data = [
  { option: 'hoyoshi', style: { backgroundColor: 'green' } },
  { option: '1', style: { backgroundColor: 'red' } },
  { option: '2' },
]

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50', 'green'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;

const App = () => {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(2);
  const [rouletteContents, setRouletteContents] = useState(data);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * rouletteContents.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const onClickSet = (rouletteContents) => {
    setRouletteContents (rouletteContents);
  };

  return (
  <>
    <div className="whole">
      <div className="rouletteApp">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={rouletteContents}
          backgroundColors={backgroundColors}
          textColors={['white']}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={1.0}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className={'spin-button'} onClick={handleSpinClick}>SPIN</button>
      </div>
      <div className="rouletteForm">
          <RouletteForm
            rouletteContents={rouletteContents}
            onClickSet={onClickSet}
          />
      </div>
    </div>
  </>
  )
};

export default App;
