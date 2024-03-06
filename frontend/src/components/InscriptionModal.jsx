import { useState } from "react";
import Inscription from "./Inscription";
import "./InscriptionModal.css";

function InscriptionModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button type="button" onClick={handleClickOpen} className="btn-modal">
        Ouvrir
      </button>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <Inscription />
          </div>
        </div>
      )}
    </>
  );
}
export default InscriptionModal;
