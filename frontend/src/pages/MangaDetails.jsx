// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function MangaDetails() {
//   const [manga, setManga] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://exemple.com/api/mangas/2")
//       .then((response) => {
//         setManga(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Axios error:", error);
//         setError(error.toString());
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) return <div>Chargement...</div>;
//   if (error) return <div>Erreur : {error}</div>;

//   return (
//     <div>
//       {manga && (
//         <div>
//           <h2>{manga.title}</h2>
//           <p>
//             <strong>Description :</strong> {manga.description}
//           </p>
//           <p>
//             <strong>Auteur :</strong> {manga.author}
//           </p>
//           <p>
//             <strong>Illustrateur :</strong> {manga.illustrator}
//           </p>
//           <p>
//             <strong>Date de sortie :</strong>{" "}
//             {new Date(manga.release_date).getFullYear()}
//           </p>
//           <p>
//             <strong>Maison d'édition :</strong> {manga.publishing_house_id}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MangaDetails;
