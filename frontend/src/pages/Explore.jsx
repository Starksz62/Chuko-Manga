import { Link } from "react-router-dom";

function Explore() {
  return (
    <>
      <div>Explore page</div>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </>
  );
}

export default Explore;
