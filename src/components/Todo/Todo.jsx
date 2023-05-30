import {
  IconTrash,
  IconEdit,
  IconCircle,
  IconCircleCheckFilled,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import SCTodo from "./Todo.styled";

export default function Todo({ todo, remove_todo, update_todo }) {
  const [name, setName] = useState(todo.name);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  function rename_todo(newName) {
    newName = newName.trim();

    setIsEditing(false);
    setName(newName ? newName : todo.name);

    if (!newName || newName === todo.name) return;

    update_todo(todo.id, { key: "name", value: newName });
  }

  function handle_submission(event) {
    event.preventDefault();

    const form = event.target;
    const name = form["todo-name"].value.trim();

    rename_todo(name);
  }

  function close_text_area() {
    setName(todo.name);
    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  return (
    <SCTodo className={todo.done ? "done" : "not-done"}>
      <div className="controls">
        {isEditing ? (
          <div className="buttons">
            <button className="rename-button" onClick={() => rename_todo(name)}>
              <IconCheck />
            </button>
            <button className="close-textarea" onClick={close_text_area}>
              <IconX />
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button className="edit-todo" onClick={() => setIsEditing(true)}>
              <IconEdit />
            </button>
            <button
              className="remove-todo"
              onClick={() => remove_todo(todo.id)}
            >
              <IconTrash />
            </button>
          </div>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={handle_submission}>
          <textarea
            name="todo-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          ></textarea>
        </form>
      ) : (
        <p className="todo-body" onClick={() => setIsEditing(true)}>
          {todo.name}
        </p>
      )}
      <button
        onClick={() => update_todo(todo.id, { key: "done", value: !todo.done })}
        className="checkmark"
      >
        {todo.done ? <IconCircleCheckFilled /> : <IconCircle />}
      </button>
    </SCTodo>
  );
}
