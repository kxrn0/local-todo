import { useEffect, useState } from "react";
import Todo from "./components/Todo/Todo";
import sort_by_date from "./utilities/sort_by_date";
import "./style.css";
import SCApp from "./App.styled";

function App() {
  const [db, setDb] = useState(null);
  const [todos, setTodos] = useState([]);
  const TODOS = "todos";
  const RW = "readwrite";
  const RO = "readonly";
  const SUCC = "success";
  const ERR = "error";

  async function handle_submission(event) {
    event.preventDefault();

    const form = event.target;
    const text = form["todo-name"].value;
    const todo = {
      name: text,
      done: false,
      id: crypto.randomUUID(),
      lastUpdated: new Date(),
    };
    const transaction = db.transaction(TODOS, RW);
    const todos = transaction.objectStore(TODOS);
    const request = todos.add(todo);

    request.addEventListener(SUCC, () => {
      setTodos((prev) => [todo, ...prev]);
    });

    request.addEventListener(ERR, () => {
      console.log("error adding todo");
    });

    form.reset();
  }

  function update_todo(id, prop) {
    const transaction = db.transaction(TODOS, RW);
    const store = transaction.objectStore(TODOS);
    const request = store.get(id);

    request.addEventListener(SUCC, (event) => {
      const todo = event.target.result;
      const lastUpdated = new Date();

      todo[prop.key] = prop.value;
      todo.lastUpdated = lastUpdated;

      const updateRequest = store.put(todo);

      updateRequest.addEventListener(SUCC, () =>
        setTodos((prev) => [
          { ...todo, [prop.key]: prop.value, lastUpdated },
          ...prev.filter((other) => other.id !== id),
        ])
      );

      updateRequest.addEventListener(ERR, () =>
        console.log("error updating todo!")
      );
    });
  }

  function remove_todo(id) {
    const transaction = db.transaction(TODOS, RW);
    const store = transaction.objectStore(TODOS);
    const request = store.delete(id);

    request.addEventListener(SUCC, () =>
      setTodos((prev) => prev.filter((other) => other.id !== id))
    );

    request.addEventListener(ERR, () => console.lo("error removing todo!"));
  }

  useEffect(() => {
    const request = indexedDB.open("todos_database", 1);

    request.addEventListener("upgradeneeded", (event) => {
      const db = event.target.result;

      db.createObjectStore(TODOS, { keyPath: "id" });
    });

    request.addEventListener(SUCC, (event) => {
      const db = event.target.result;
      const transaction = db.transaction(TODOS, RO);
      const todos = transaction.objectStore(TODOS);
      const todosRequest = todos.getAll();

      todosRequest.addEventListener(SUCC, (event) => {
        const todos = event.target.result;
        const sortedTodos = sort_by_date(todos, -1);

        setTodos(sortedTodos);
      });

      todosRequest.addEventListener(ERR, () =>
        console.log("error getting todos")
      );

      setDb(db);
    });

    request.addEventListener(ERR, () => console.log("error"));
  }, []);

  return (
    <SCApp>
      <h1 className="title">TODO</h1>
      <form className="todo-form" onSubmit={handle_submission}>
        <input type="text" name="todo-name" />
        <button>Create</button>
      </form>
      <section className="items">
        <div className="todos container">
          {todos.map((todo) =>
            todo.done ? null : (
              <Todo
                key={todo.id}
                todo={todo}
                remove_todo={remove_todo}
                update_todo={update_todo}
              />
            )
          )}
        </div>
        <div className="todones container">
          {todos.map((todo) =>
            todo.done ? (
              <Todo
                key={todo.id}
                todo={todo}
                remove_todo={remove_todo}
                update_todo={update_todo}
              />
            ) : null
          )}
        </div>
      </section>
    </SCApp>
  );
}

export default App;
