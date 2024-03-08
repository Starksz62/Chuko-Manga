/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import PrefilterAdvertByDesc from "../components/PrefilterAdvertByDesc";
import PrefilterAdvertByBatch from "../components/PrefilterAdvertByBatch";

function Home() {
  return (
    <>
      <PrefilterAdvertByDesc />
      <PrefilterAdvertByBatch />
      <Link to="/explore">
        <button type="button">Explorer</button>
      </Link>
    </>
  );
}

export default Home;
