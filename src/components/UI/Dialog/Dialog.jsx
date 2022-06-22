import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.75)] "
      onClick={() => console.log("here")}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    // <div className="fixed t-[30vh] l-[10%] w-[80%] z-50 overflow-hidden sm:l-[calc(50% - 20rem)] sm:w-[40rem]">
    // <div className="fixed z-50 w-full h-full">
    <div className="rounded p-4 fixed z-50 max-w-[20rem] sm:max-w-[40rem] mx-auto top-32 sm:top-[30vh] left-[calc(50%-10rem)] sm:left-[calc(50%-20rem)] bg-gradient-to-br from-[#e33e3e] to-[#614925]">
      {/* <div className="w-full flex justify-end "> */}
      <FontAwesomeIcon
        onClick={props.onClose}
        className="absolute right-3 top-2 hover:cursor-pointer hover:text-[#333] transition-colors duration-200"
        icon={faXmark}
        size="2x"
      />
      {/* </div> */}
      <header className="border-b w-[80%] mx-auto mb-1 sm:mb-4">
        <h2 className="mb-2 text-white text-xl sm:text-3xl font-bold capitalize text-center">
          {props.title}
        </h2>
      </header>
      <main className="w-[80%] mx-auto mb-6 block">
        <FontAwesomeIcon
          className="mb-2 mx-auto block text-3xl sm:text-6xl"
          icon={props.icon === "info" ? faInfoCircle : faTriangleExclamation}
        />
        <p>{props.message}</p>
      </main>
      <div className="border-b w-[80%] mx-auto"></div>
      <footer className="p-4 flex justify-center sm:justify-end w-[80%] mx-auto ">
        <button
          className="px-4 py-1 mr-3 hover:cursor-pointer border-b-2 border-transparent hover:border-green-500 transition-colors duration-200"
          onClick={props.onConfirm}
        >
          Confirm
        </button>

        <button
          className="px-4 py-1 hover:cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-colors duration-200"
          onClick={props.onClose}
        >
          Cancel
        </button>
      </footer>
    </div>
    // </div>
  );
};

const Dialog = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default Dialog;
