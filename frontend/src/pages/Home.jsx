import { Link } from "react-router-dom";
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
