export const IncompleteTodos = (props) => {
    const { todos, onClickDelete} = props;
    return (
        <div className="incomplete-area">
        <ul>
          {todos.map((todo, index) => (
              <li key={todo}>
                <div className="list-row">
                  <p className="todo-item">{todo}</p>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>    
            )
          )}
        </ul>
      </div>
    );
};