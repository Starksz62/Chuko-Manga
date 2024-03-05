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
            <div className="user-section">
              <img src={articleInfo.imageUser} alt="userImage" />
              <p> {articleInfo.nameUser}</p>
            </div>
            <p>État : {articleInfo.condition}</p>
            <p>{articleInfo.price} €</p>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Order;
