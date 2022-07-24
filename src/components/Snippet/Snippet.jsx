import React, { useState } from "react";
import { toast } from "react-toastify";
import { deleteSnippet, editSnippet } from "../../api/Snippets/Snippets";
import { useFetch } from "../../hooks/use-fetch";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
import { useSnippetsContext } from "../../store/SnippetsContext/SnippetsContext";
import DeleteConfirmationDialog from "./SnippetComponents/DeleteConfirmationDialog";
import Code from "./SnippetComponents/Code";
import SnippetModal from "./SnippetComponents/SnippetModal";

const Snippet = React.forwardRef((props, ref) => {
  const { authenticated } = useAuthContext();
  const { deleteSnippet: deleteSnippetFromStore, updateSnippet } =
    useSnippetsContext();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const {
    id,
    title,
    content,
    acf: {
      language,
      author: { display_name },
    },
    excerpt: description,
  } = props.snippet;
  const date = new Date(props.snippet.date).toDateString();

  const { sendRequest, loading } = useFetch();

  const handleDelete = async () => {
    sendRequest(
      () => deleteSnippet(id),
      () => {
        deleteSnippetFromStore(id);
        setIsDeleteDialogOpen(false);
        toast.success(`${title.rendered} deleted successfully!`);
      }
    );
  };
  const handleEdit = (newSnippet) => {
    sendRequest(
      () => editSnippet(id, newSnippet),
      () => {
        updateSnippet(id, newSnippet);
        setIsEditing(false);
        toast.success(`${title.rendered} updated successfully!`);
      }
    );
  };
  const showCodeButton = (
    <button
      className="bg-[#9b2c2c] text-white text-sm sm:font-bold sm:py-1 py-[.1rem] mb-1 px-1 sm:px-2 rounded-[0.25rem] border-none "
      onClick={() => setShowCode((prevState) => !prevState)}
    >
      {showCode ? "Hide the Code" : "Show the Code 👇"}
    </button>
  );

  return (
    <>
      <DeleteConfirmationDialog
        snippetTitle={title.rendered}
        showDialog={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={handleDelete}
        loading={loading}
      />
      <SnippetModal
        show={isEditing}
        snippet={props.snippet}
        onClose={() => setIsEditing(false)}
        onSubmit={handleEdit}
        loading={loading}
      />
      <li
        ref={ref}
        className="bg-[#f7fafc] rounded sm:rounded-md my-2 p-1 sm:p-4 shadow-2xl style-none"
      >
        <div className="flex justify-between ">
          <h2 className="text-lg sm:text-xl text-[#2d3748] font-bold ">
            {title.rendered}
          </h2>
          <span className="font-bold text-[.6rem] sm:text-sm text-[#9b2c2c] py-1 px-2 rounded-lg ">
            {language}
          </span>
        </div>
        <div
          className="max-w-[70%] text-[0.75rem] sm:text-[0.9rem] text-[#1a202c] mb-2 truncate sm:truncate-none"
          dangerouslySetInnerHTML={{ __html: description.rendered }}
        ></div>
        {showCodeButton}
        <Code
          content={content?.rendered ?? "Hello World"}
          showCode={showCode}
          language={language}
          editable={authenticated}
        />

        <div className="mt-1 flex justify-between">
          <section>
            {authenticated && props.hasAuthorPermissions && (
              <>
                <span
                  className="cursor-pointer text-[#333] mr-2 font-semibold text-[0.75rem] sm:text-[0.9rem] hover:underline"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </span>
                <span
                  className="cursor-pointer text-[#e33e3e]  font-semibold text-[0.75rem] sm:text-[0.9rem] hover:underline"
                  onClick={() => setIsDeleteDialogOpen(true)}
                >
                  Delete
                </span>
              </>
            )}
          </section>
          <section>
            <span className=" text-[#565656]  font-semibold text-[.6rem] sm:text-[0.75rem] capitalize">
              {display_name ?? "Anonymous"}
            </span>
            <span className=" border-r border-[#565656] mx-1"></span>
            <span className=" text-[#565656]  font-semibold text-[.6rem] sm:text-[0.75rem] ">
              {date}
            </span>
          </section>
        </div>
      </li>
    </>
  );
});

export default Snippet;
