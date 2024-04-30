import { useState } from "react";
import "../styles.css";
import { InputRouletteContent } from "./InputRouletteContent";
import { RouletteContents } from "./RouletteContents";

export const RouletteForm = (props) => {

  const [rouletteContentText, setRouletteContentText] = useState("");
  const [rouletteContents, setRouletteContents] = useState(props.rouletteContents);

  const onChangeText = (e) => {
    if (e.target.value.length === 35) return;
    setRouletteContentText(e.target.value);
  }

  const onClickAdd = () => {
    const rouletteContentObj = {
      option: rouletteContentText
    };
    if (rouletteContentText === "") return;
    const newRouletteContents = [...rouletteContents, rouletteContentObj];
    setRouletteContents(newRouletteContents);
    setRouletteContentText("");
  };

  const onClickDelete = (index) => {
    if (rouletteContents.length === 1) return;
    const newRouletteContents = [...rouletteContents];
    newRouletteContents.splice(index, 1);
    setRouletteContents(newRouletteContents);
  };

  const onClickSet = () => {
    props.onClickSet(rouletteContents);
  }

  return (
    <>
      <InputRouletteContent 
        rouletteContentText={rouletteContentText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />
      <RouletteContents 
        rouletteContents={rouletteContents}
        onClickDelete={onClickDelete}
      />
      <button className="set-button" onClick={onClickSet}>SET</button>
    </>
  )
}