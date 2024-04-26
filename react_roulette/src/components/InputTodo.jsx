const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"      
}

export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd, disabled} = props;
  return (
    <div style={style}>
        <input disabled={disabled} placeholder="TODO" value={todoText} onChange={onChangeText}/>
        <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  );  
};