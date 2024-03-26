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

  async addOrder(orderDetails) {
    const sql = `    INSERT INTO \`${this.table}\` 
                 (id_user_buy, total_price, order_date, status_order, feedback_order, advert_id, user_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      orderDetails.id_user_buy,
      orderDetails.total_price,
      orderDetails.order_date,
      orderDetails.status_order,
      orderDetails.feedback_order,
      orderDetails.advert_id,
      orderDetails.user_id,
    ];
    try {
      const [result] = await this.database.query(sql, values);
      return result;
    } catch (error) {
      throw new Error(`Error inserting order into database: ${error.message}`);
    }
  }
}
module.exports = OrdersManager;
