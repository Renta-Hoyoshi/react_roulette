const style = {
    width: "400px",
    height: "30px",
    padding: "8px 8px 8px 0",
    margin: "8px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    marginLeft: "40px"
}

export const InputRouletteContent = (props) => {
  const { rouletteContentText, onChangeText, onClickAdd} = props;
  return (
    <div style={style}>
        <input placeholder="Input New Content" value={rouletteContentText} onChange={onChangeText}/>
        <button className="add-button" onClick={onClickAdd}>ADD</button>
    </div>
  );  
};