import "./Modal.css";

function Modal({ title, onModalClose }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel " onClick={onModalClose}>
            Cancel
          </button>
          <button className="btn" onClick={onModalClose}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
