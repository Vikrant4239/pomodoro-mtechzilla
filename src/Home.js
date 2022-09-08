import React from "react";
import { signinwithgoogle } from "./Firebase";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="signin">
      <button onClick={signinwithgoogle} className="signinwith">
        Sign-in
      </button>
      <h4>Welcome</h4>
      After signing in
      <Link to="/changes">
        <h2>{localStorage.getItem("name")}</h2>

        <button>Click me</button>
      </Link>
    </div>
  );
}

export default Home;
