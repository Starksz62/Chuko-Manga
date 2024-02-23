import { Link, useOutletContext } from "react-router-dom";

import React from "react";

function Home() {
  const [data] = useOutletContext();

  return (
    <>
      <div>Home page</div>
      <Link to="/explore">
        <button type="button">Explorer</button>
      </Link>
      {data.map((manga) => (
        <div className="card" key={manga.id}>
          <h1>Manga: {manga.title}</h1>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${manga.image}`}
            alt="an specific thing"
          />
          <p>{manga.description}</p>
          <h2>Genre: {manga.genre}</h2>
          <h2>Publishing house: {manga.name_publishing_house}</h2>
          <h5>Date france:{manga.date_france}</h5>
          <h5>author:{manga.author}</h5>
          <h5>illustrator:{manga.illustrator}</h5>
          <h5>release_date:{manga.release_date}</h5>
          <h5>Date france:{manga.date_france}</h5>
          <h5>Date japan:{manga.date_japan}</h5>
        </div>
      ))}
    </>
  );
}

export default Home;
