import FilteredadvertsCard from "./components/FilterAdvert";
import FilterMangaCard from "./components/FilterMangaCard";

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
    <div>
      <FilterMangaCard />
      <FilteredadvertsCard />
    </div>
  );
}

export default App;
