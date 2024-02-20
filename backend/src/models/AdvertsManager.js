const AbstractManager = require("./AbstractManager");

class AdvertsManager extends AbstractManager {
  constructor() {
    super({ table: "advert" });
  }

  async findCards() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, advert.item_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo;`
    );

    // Return the array of items
    return rows;
  }

  async findRecentUniqueItems() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, advert.item_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.batch=0
      ORDER BY advert.publication_date_advert DESC;`
    );

    // Return the array of items
    return rows;
  }

  async findRecentBatch() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, advert.item_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.batch=1
      ORDER BY advert.publication_date_advert DESC;`
    );

    // Return the array of items
    return rows;
  }
}

module.exports = AdvertsManager;
