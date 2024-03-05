const AbstractManager = require("./AbstractManager");

class OrdersManager extends AbstractManager {
  constructor() {
    super({ table: "order" });
  }

  async getHistoryOrderByBuyer(id) {
    const [rows] = await this.database.query(
      `SELECT total_price, order_date, status_order, title_search_manga, advert_image.image_path, article_condition.name_condition FROM \`order\` as o
      JOIN advert on advert.id = o.advert_id
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      LEFT JOIN article_condition ON advert.article_condition_id=article_condition.id
      WHERE id_user_buy = ?`,
      [id]
    );
    return rows;
  }
}
module.exports = OrdersManager;
