import React from "react";
import Modal from "../../UI/Modal/Modal";
import SnippetForm from "../SnippetForm/SnippetForm";
const SnippetModal = ({ show, onClose, onEdit, loading, snippet }) => {
  if (!show) return null;
  return (
    <Modal
      onClose={onClose}
      className="text-black md:w-[600px] w-[90%] mx-[5%] md:mx-0 rounded px-6 py-10 absolute top-32 md:left-[calc(50%-300px)] bg-white"
    >
      <h1>Hello</h1>
      <SnippetForm snippet={snippet} onClose={onClose} loading={loading} />
    </Modal>
  );
};

export default SnippetModal;
