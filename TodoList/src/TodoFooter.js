import "./TodoFooter.css";
function TodoFooter({ todos, clearCompleted }) {
  const completedLength = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="todoAppFooter">
      <span>
        {completedLength}/{todos.length} Completed
      </span>
      <button className="todoClearCompleted" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFooter;
