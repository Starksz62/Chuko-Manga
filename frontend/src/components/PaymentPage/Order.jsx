/* eslint-disable react/prop-types */
import "./Order.css";

function Order({ articleInfo }) {
  return (
    <div className="component-card">
      <li key={articleInfo.id}>
        <div className="card">
          <img src={articleInfo.image} alt={articleInfo.title} />
          <div className="information-card">
            <h3>{articleInfo.title}</h3>
            <p>Vendeur : {articleInfo.nameUser}</p>
            <img src={articleInfo.imageUser} alt="userImage" />
            <p>État : {articleInfo.condition}</p>
            <p>ISBN : {articleInfo.isbn}</p>
            <p>{articleInfo.price} €</p>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Order;
