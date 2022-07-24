import Dashboard from "../../components/Dashboard/Dashboard";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
import { useFetch } from "../../hooks/use-fetch";
import {
  changePassword,
  updateUser,
} from "../../api/Authentication/Authentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const DashboardPage = (props) => {
  const navigate = useNavigate();
  const { login, user, authenticated } = useAuthContext();
  const { sendRequest, loading } = useFetch();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  let closeModal = () => {};
  const closePasswordModalHandler = (closeModalFunction) =>
    (closeModal = closeModalFunction);
  const closeUserModalHandler = (closeModalFunction) =>
    (closeModal = closeModalFunction);

  const changePasswordHandler = (data) => {
    sendRequest(
      () => changePassword(data),
      () => {
        toast.success("Password changed successfully");
        closeModal();
      }
    );
  };
  const editUserHandler = (data) => {
    sendRequest(
      () => updateUser(data),
      (data) => {
        toast.success("User updated successfully");
        closeModal();
        login({
          token: user.token,
          username: data.username,
          email: user.user_email ?? user.email,
          avatar_urls: data.avatar_urls,
          fullName: data.name,
          userId: data.id,
        });
      }
    );
  };
  return (
    <Wrapper>
      <Dashboard
        onChangePassword={changePasswordHandler}
        onEditUser={editUserHandler}
        onClosePasswordModal={closePasswordModalHandler}
        onCloseUserModal={closeUserModalHandler}
        loading={loading}
      />
    </Wrapper>
  );
};

export default DashboardPage;
