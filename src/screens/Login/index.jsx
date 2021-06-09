import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const history = useHistory()

  const handlerSubmit = (e) => {
    e.preventDefault();

    const obj = {
      email,
      password,
    };
    setEmail("");
    setPassword("");
    console.log(obj);
    history.goBack()   
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col p-5">
          <div className="flex justify-content-center align-items-center">
            <form onSubmit={handlerSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
