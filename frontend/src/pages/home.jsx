import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <div>Home page</div>
      <Link to="/explore">
        <button type="button">Explorer</button>
      </Link>
      <Banner />
    </>
  );
}

export default Home;
