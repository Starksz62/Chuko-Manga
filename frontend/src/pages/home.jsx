import { Link } from "react-router-dom";

import React from "react";

function Home() {
  return (
    <>
      <div>Home page</div>
      <Link to="/explore">
        <button type="button">Explorer</button>
      </Link>
    </>
  );
}

export default Home;
