import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateContext, logoutUser } from "../context/auth";
import { ucFirst } from "../helpers/textUtils";

const HomePage = ({ user }) => {
  const { dispatchUser } = useContext(AuthStateContext);
  const navigate = useNavigate();

  const logOut = () => {
    logoutUser(dispatchUser);
    navigate("/login");
  };

  return (
    <>
      <h1>Hello, {ucFirst(user.name)}</h1>
      <button onClick={logOut}>Log out</button>
    </>
  );
};

export default HomePage;
