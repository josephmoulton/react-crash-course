import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {

  return <Counter/>
  const [showModal, setShowModal] = useState(false)

  
  return (

    <>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) =>{
          console.log(event.target.value);
        }}/>
        <button onClick={() => {setShowModal(true)}}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish frontend" />
        <Todo title="Finish interview" />
        <Todo title="Get a job" />
      </div>
      {showModal && <Modal title="Are you sure?"/>}
    </>
  );
}

export default App;
