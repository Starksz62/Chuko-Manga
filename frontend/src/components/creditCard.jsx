// import { useState } from "react";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./creditCard.css";

function CreditCard() {
  // const [state, setState] = useState({
  //   number: "",
  //   expiry: "",
  //   cvc: "",
  //   name: "",
  //   focus: "",
  // });

  // const handleInputChange = (evt) => {
  //   const { name, value } = evt.target;

  //   setState((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleInputFocus = (evt) => {
  //   setState((prev) => ({ ...prev, focus: evt.target.name }));
  // };
  // const handleValidation = (e) => {
  //   e.stopPropagation();
  // };

  // const handleCancel = (e) => {
  //   e.stopPropagation();
  // };
  return (
    <div />
    // <div className="card-information">
    //   <Cards
    //     number={state.number}
    //     expiry={state.expiry}
    //     cvc={state.cvc}
    //     name={state.name}
    //     focused={state.focus}
    //   />
    //   <form className="renseignement">
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Full Name"
    //       value={state.name}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //     />
    //     <input
    //       type="text"
    //       name="expiry"
    //       placeholder="Valid Thru"
    //       value={state.expiry}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //     />
    //     <input
    //       type="number"
    //       name="cvc"
    //       placeholder="CVC"
    //       value={state.cvc}
    //       onChange={handleInputChange}
    //       onFocus={handleInputFocus}
    //     />
    //     <div className="button-container">
    //       <button
    //         type="button"
    //         className="validate-button"
    //         onClick={handleValidation}
    //       >
    //         Valider
    //       </button>
    //       <button
    //         type="button"
    //         className="cancel-button"
    //         onClick={handleCancel}
    //       >
    //         Annuler
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}
export default CreditCard;
