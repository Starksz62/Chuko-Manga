// import React from "react";
// import narutoImage from "../assets/Naurto.png";

// import "./MangaDetails.css";

// // Simulation des données de manga reçues d'une API
// const narutoInfo = {
//   title: "NARUTO",
//   description: [
//     "Naruto est un garçon un peu spécial. Solitaire au caractère fougueux, il n'est pas des plus appréciés dans son village. Malgré cela, il garde au fond de lui une ambition: celle de devenir un \"maître Hokage\", la plus haute distinction dans l'ordre des ninjas, et ainsi obtenir la reconnaissance de ses pairs mais cela ne sera pas de tout repos... Suivez l'éternel farceur dans sa quête du secret de sa naissance et de la conquête des fruits de son ambition!",
//     "Naruto offre de l'action, de l'originalité et de l'humour: bref, le parfait dosage du divertissement!",
//   ],
//   status: {
//     japan: "Terminée",
//     france: "Terminée",
//     volumes: "72",
//     category: "Action",
//   },
//   authors: {
//     scenario: "Masashi Kishimoto",
//     drawing: "Masashi Kishimoto",
//     author: "Masashi Kishimoto",
//   },
// };
// function NarutoDetails() {
//   return (
//     <div className="naruto-details">
//       <div className="top-section">
//         <div className="image-container">
//           <img src={narutoImage} alt="Naruto" />
//         </div>
//         <div className="description-manga">
//           <h1>{narutoInfo.title}</h1>
//           {narutoInfo.description.map((paragraph, index) => (
//             // eslint-disable-next-line react/no-array-index-key
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//       </div>
//       <div className="bottom-section">
//         <div className="status-manga">
//           <p>Au Japon {narutoInfo.status.japan}</p>
//           <p>En France {narutoInfo.status.france}</p>
//           <p>Déjà paru {narutoInfo.status.volumes} volumes</p>
//           <p>Catégorie {narutoInfo.status.category}</p>
//         </div>
//         <div className="authors-container">
//           <h2 className="title-author">AUTEURS</h2>
//           <div className="data-authors">
//             <p>
//               <span>Scénario:</span>
//               <br />
//               {narutoInfo.authors.scenario}
//             </p>
//             <p>
//               <span>Dessin:</span>
//               <br />
//               {narutoInfo.authors.drawing}
//             </p>
//             <p>
//               <span>Auteur:</span>
//               <br />
//               {narutoInfo.authors.author}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NarutoDetails;
