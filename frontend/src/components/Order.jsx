/* eslint-disable react/prop-types */
import "./Order.css";

function Order({ price }) {
  return (
    <div className="component-card">
      <li key={price.id}>
        <div className="card">
          <img src={price.image} alt={price.title} />
          <div className="information-card">
            <h3>{price.title}</h3>
            <p>Auteur : {price.author}</p>
            <p>État : {price.condition}</p>
            <p>ISBN : {price.isbn}</p>
            <p>{price.price} €</p>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Order;
