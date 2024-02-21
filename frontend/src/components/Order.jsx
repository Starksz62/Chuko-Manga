import "./Order.css";

function Order({ panier }) {
  return (
    <div className="component-card">
      <li key={panier.id}>
        <div className="card">
          <img src={panier.image} alt={panier.title} />
          <div className="information-card">
            <h3>{panier.title}</h3>
            <p>Auteur : {panier.author}</p>
            <p>État : {panier.condition}</p>
            <p>ISBN : {panier.isbn}</p>
            <p>{panier.price} €</p>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Order;
