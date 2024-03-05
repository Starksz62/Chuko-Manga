import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

function Home() {
  const navigate = useNavigate();

  const annonces = [
    {
      id: 1,
      image: "http://localhost:3310/static/NarutoTome13.jpg",
      title: "Naruto - Tome 13",
      price: "5,00",
      condition: "Bon état",
      imageUser: "http://localhost:3310/static/orange.jpg",
      nameUser: "Utilisateur",
      star: "./src/assets/star.png",
      note: "5",
      comment: "24",
    },
    {
      id: 2,
      image: "./src/assets/20centuryboys.jpg",
      title: "20 century boys - Tome 1",
      price: "3,5",
      condition: "Neuf",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur2",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "136",
    },
  ];
  const navigateToPaymentPage = (annonceData) => {
    navigate(`/PaymentPage/${annonceData.id}`, {
      state: { articleData: annonceData },
    });
  };

  return (
    <>
      <div>Home page</div>
      <Link to="/explore">
        <button type="button">Explorer</button>
      </Link>
      <ul className="main">
        {annonces.map((annonce) => (
          <li key={annonce.id} className="annonce-item">
            <Cards
              data={annonce}
              onImageClick={() => navigateToPaymentPage(annonce)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
