import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      className="404NotFound"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "80vh",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textAlign: "center" }}>
        Retour à la page d'accueil
      </Link>
      <img
        className="img-NotFound"
        style={{ height: "82%", width: "max-content" }}
        src="http://localhost:3310/static/404NotFound.png"
        alt="404NotFoundImage"
      />
    </div>
  );
}
export default NotFoundPage;
