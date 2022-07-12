import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[2000px] z-[99] bg-[rgba(0,0,0,0.75)] "
      onClick={onClose}
    />
  );
};


const Modal = ({ onClose, children, className }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <div className={`fixed z-[100] ${className}`}>{children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
