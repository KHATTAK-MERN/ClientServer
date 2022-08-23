import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [user_name, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  //const history = useHistory();

  const postData = async (e) => {
    e.preventDefault();

    // const { user_name, email, password } = user;

    const res = await fetch("http://localhost:3080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name,
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) window.alert("valid");

    //history.pushState("/login");
  };
  return (
    <>
      <div className="d-flex con justify-content-center">
        <div className="wrapper asd">
          <div className=" text-center  ">
            <img
              className="bootstrapLogo "
              src={"logo.png"}
              alt="Bootstrap Logo"
            />
            <h3 className="mt-1">Sign up</h3>
          </div>

          <form method="POST">
            <div className="form-floating mb-3">
              <input
                type="name"
                className="form-control"
                placeholder="name@example.com"
                name="user_name"
                onChange={(e) => setUser(e.target.value)}
                value={user_name}
              />
              <label>UserName</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label>Password</label>
            </div>

            <div className="mt-3 d-grid">
              <input
                type="submit"
                className="btn btn-primary"
                onClick={postData}
              />
            </div>
            <li
              className="text-center mt-3 p"
              onClick={() => navigate("/login")}
            >
              Already have an Account? Login
            </li>
            <p className="text-center mt-4">&#169;2017-2018</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
