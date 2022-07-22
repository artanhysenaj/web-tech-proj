import React from "react";
import Modal from "../../UI/Modal/Modal";
import SnippetForm from "../SnippetForm/SnippetForm";
import Logo from "../../UI/Logo/Logo";
const SnippetModal = ({ show, onClose, onSubmit, loading, snippet }) => {
  
  const snippetEditHandler = (newSnippet) => {
    onSubmit(newSnippet);
  };

  if (!show) return null;
  return (
    <Modal
      onClose={onClose}
      className="text-black lg:w-[800px] w-[95%] mx-[2.5%] h-5/6 md:mx-[5%] lg:mx-0 rounded fixed top-8
      md:left-[calc(50%-400px)] shadow-2xl overflow-y-auto bg-gradient-to-br from-[#e33e3e] to-[#614925]  "
    >
      <div className="flex justify-center items-center my-4 text-white">
        <Logo />
        <div className="ml-4">
          <h2 className="md:text-2xl text-lg font-bold inline">
            Editing & Creating
          </h2>
          <p className="text-xs md:text-base">Edit or create a new snippet</p>
        </div>
      </div>

      <SnippetForm
        snippet={snippet}
        onClose={onClose}
        loading={loading}
        onSubmit={snippetEditHandler}
      />
    </Modal>
  );
};

export default SnippetModal;
