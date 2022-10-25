import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) =>{
          console.log(event.target.value);
        }}/>
        <button>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish frontend" />
        <Todo title="Finish interview" />
        <Todo title="Get a job" />
      </div>
      <Modal title="Are you sure?"/>
    </>
  );
}

export default App;
