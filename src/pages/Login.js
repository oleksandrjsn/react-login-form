import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthStateContext } from "../context/auth/context";
import { loginUser } from "../context/auth";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { dispatchUser } = useContext(AuthStateContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser(dispatchUser, {
      name: login,
      password,
    });

    if (!response.token) return;

    navigate("/");
  };

  return (
    <form
      style={{ display: "block", padding: "0 1rem" }}
      onSubmit={handleSubmit}
    >
      <h1>Log in</h1>
      <div style={{ margin: "1rem 0" }}>
        <div>
          <label htmlFor="login">Login</label>
        </div>
        <input
          id="login"
          type="text"
          name="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          required
        />
      </div>
      <div style={{ margin: "1rem 0" }}>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <input type="submit" value="Log in" disabled={!login || !password} />
    </form>
  );
};

export default Login;
