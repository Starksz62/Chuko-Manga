// import LeftNavbar from "./components/LeftNavbar";
import MangaDetails from "./pages/MangaDetails";

function App() {
  // Test to fetch advert cards
  // const getAdvertCards = () => {
  //   axios.get("http://localhost:3310/api/display-adverts/1").then((res) => {
  //     console.info(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getAdvertCards();
  // }, []);

  return (
    <div className="App">
      {/* <LeftNavbar /> */}
      <MangaDetails />
    </div>
  );
}

export default App;
