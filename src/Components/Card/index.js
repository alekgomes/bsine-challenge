import React, { useContext, useState } from "react";
import CardModal from "../CardModal";
import Modal from "react-modal";
import { LaneContext } from "../../Context/LaneContext";
import "./style.scss";

const Card = ({ title, body, laneId }) => {
  Modal.setAppElement("#root")
  
  const { removeInfos } = useContext(LaneContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation()
    setModalIsOpen(false);
  };

  console.log("RENDER");
  console.log(modalIsOpen);

  const customStyles = {
    content: {
      width: "50%",
      height: "60%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0, 0.3)",
    },
  };

  return (
    <div
      className="card"
      onClick={() => {
        setModalIsOpen(true);
      }}
    >
      <h1>{title}</h1>
      <p className="body">{body}</p>
      <button onClick={() => removeInfos(laneId, title)} className="remove">
        X
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={(e) => {closeModal(e)}}
        
      >
        <h1 className="modal__title">{title}</h1>
        <p className="modal__body">{body}</p>
        <button className="modal__remove" onClick={(e) =>  closeModal(e)}>
          X
        </button>
      </Modal>
      
    </div>
  );
};

export default Card;
