import React from "react";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const postData = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);
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
            <h3 className="mt-1">Sign In</h3>
          </div>

          <form method="POST">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label>Password</label>
            </div>

            <div className="mb-3">
              <div className="custom-control mb-2 mt-2 custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />

                <label
                  className="custom-control-label px-2"
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={postData}
              >
                Submit
              </button>
            </div>

            <p className="text-center mt-4">&#169;2017-2018</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
