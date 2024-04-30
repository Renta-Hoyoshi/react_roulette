export const RouletteContents = (props) => {
    const { rouletteContents, onClickDelete} = props;
    return (
        <div className="roulette-content-area">
        <ul>
          {rouletteContents.map((rouletteContent, index) => (
              <li key={index}>
                <div className="list-row">
                  <input type="text" className="roulette-content-item" value={rouletteContent.option}></input>
                  <button  className="delete-button" onClick={() => onClickDelete(index)}>×</button>
                </div>
              </li>    
            )
          )}
        </ul>
      </div>
    );
};