import React from "react";

const SignIn = () => {
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
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
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
              <button type="submit" className="btn btn-primary">
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
