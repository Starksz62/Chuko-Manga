/* eslint-disable react/prop-types */
import "./Order.css";

function Order({ articleInfo }) {
  return (
    <div className="component-card">
      <li key={articleInfo.id}>
        <div className="card">
          <img
            src={articleInfo.image_paths?.[0]}
            alt={articleInfo.title_search_manga}
          />
          <div className="information-card">
            <h3>{articleInfo.title_search_manga}</h3>
            <div className="user-section">
              <img src={articleInfo.user_picture} alt="userImage" />
              <p> {articleInfo.pseudo}</p>
            </div>
            <p>État : {articleInfo.name_condition}</p>
            <p>{articleInfo.price} €</p>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Order;
