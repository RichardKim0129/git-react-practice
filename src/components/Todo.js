import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    
    const deleteHandler = (props) => {
        setModalIsOpen(true);
    }

    const closeBackdrop = () => {
        setModalIsOpen(false);
    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Academind 2021 1:20:13 should watch this again */}
      { modalIsOpen && <Modal onCancel={closeBackdrop} onConfirm={closeBackdrop} /> }
      { modalIsOpen && <Backdrop onDisappear={closeBackdrop} /> }
    </div>
  );
};

export default Todo;
