import React from "react";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Spinner from "../Spinner/Spinner";
const DeleteConfirmationDialog = (props) => {
  const { showDialog, onClose, onDelete, snippetTitle, loading } = props;
  if (!showDialog) return null;
  return (
    <Modal
      className="text-black w-[600px] rounded px-6 py-10 absolute top-32 left-[calc(50%-300px)] bg-white"
      onClose={onClose}
    >
      <h1 className="text-center text-2xl font-bold text-[#2c2b47] mb-4">
        Are you sure you want to delete {snippetTitle}?
      </h1>
      <p className="text-[#3c3c4b] text-center mb-8">
        This action cannot be undone. <b>{snippetTitle}</b> will be permanently
        deleted.
      </p>
      <div className="flex justify-end gap-4">
        <Button
          className="border-2 hover:border-[#7c819c] hover:text-[#7c819c]"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          className=" text-[#e43e3f] border-2 hover:bg-transparent hover:text-[#e43e3f] hover:border-[#e43e3f]"
          onClick={onDelete}
        >
          {loading ? <Spinner /> : "Delete"}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationDialog;
