import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useAuthContext } from "../../../store/AuthContext/AuthContext";
import Button from "../../UI/Button/Button";
import ChangePasswordModal from "./MyProfileComponents/ChangePasswordModal";
import EditUserModal from "./MyProfileComponents/EditUserModal";
const MyProfile = (props) => {
  const {
    onChangePassword,
    onEditUser,
    loading,
    onClosePasswordModal,
    onCloseUserModal,
  } = useOutletContext();
  const { user, logout } = useAuthContext();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);

  const changePasswordHandler = (newPassword) => {
    onClosePasswordModal(() => setShowChangePassword(false));
    onChangePassword(newPassword);
  };
  const editUserHandler = (newUserData) => {
    onCloseUserModal(() => setShowEditUser(false));
    onEditUser(newUserData);
  };
  return (
    <div className="relative flex flex-col items-center -translate-y-6">
      <div className=" w-20 md:w-24 h-20 md:h-24 rounded-full shadow-xl z-[80] translate-y-8">
        <img
          className="w-full h-full rounded-full"
          src={user?.avatar_urls[96]}
          alt="user profile"
        />
      </div>
      <div className="text-center py-10 w-full rounded-lg outline bg-[#1f2937]/50 outline-gray-400/20 z-[79] ">
        <h1 className="text-xl md:text-2xl font-bold">{user?.fullName}</h1>
        <h3 className="text-sm md:text-base text-white/70">{user?.email}</h3>
        <div className="w-5/6 mx-auto my-4 border-b border-white/30"></div>
        <div>
          <span
            className="font-500 text-sm md:text-base hover:underline
            hover:cursor-pointer transition-all duration-200 ease"
            onClick={() => setShowChangePassword(true)}
          >
            Change password
          </span>
          <ChangePasswordModal
            show={showChangePassword}
            onClose={() => setShowChangePassword(false)}
            onSubmit={changePasswordHandler}
            loading={loading}
          />
        </div>
        <div className="w-1/2 mx-auto my-4 border-b border-white/30"></div>
        <div className="">
          <Button
            onClick={() => setShowEditUser(true)}
            className="mr-2"
            variant="primary"
          >
            Edit
          </Button>
          <EditUserModal
            show={showEditUser}
            onClose={() => setShowEditUser(false)}
            onSubmit={editUserHandler}
            loading={loading}
          />
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
