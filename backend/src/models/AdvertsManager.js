/* eslint-disable prettier/prettier */
const AbstractManager = require("./AbstractManager");

class AdvertsManager extends AbstractManager {
  constructor() {
    super({ table: "advert" });
  }

  async findCards() {
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo;`
    );

    return rows;
  }

  async findRecentUniqueItems() {
    const [rows] = await this.database.query(
      `SELECT advert.id, advert.title_search_manga, advert.price, article_condition.name_condition, 
      advert_image.image_path, user.pseudo, user.picture as user_picture, 
      ROUND(joint_table.average, 1) as average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, ROUND(AVG(feedback.rating), 1) as average, COUNT(feedback.rating) as feedback_nber
            FROM user
            JOIN feedback ON user.id = feedback.user_id
            GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.batch=0
      ORDER BY advert.publication_date_advert DESC;`
    );
  
    return rows;
  }

  async findRecentBatch() {
    const [rows] = await this.database.query(
    `SELECT advert.id, advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.id as user_id, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, advert.publication_date_advert
    FROM ${this.table}
    LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
    JOIN article_condition ON advert.article_condition_id=article_condition.id
    JOIN user ON advert.user_id=user.id 
    JOIN (SELECT user.pseudo as rated_pseudo,  ROUND(AVG(feedback.rating), 1) as average, COUNT(feedback.rating) as feedback_nber
        FROM user
        JOIN feedback ON user.id = feedback.user_id
        GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
    WHERE advert.batch=1
    ORDER BY advert.publication_date_advert DESC;`
  );

    return rows;
  }

  async findAdvertQuery(searchQuery) {
    console.info("je suis dans le manager", searchQuery);

    // Constructing the SQL query dynamically
    const searchTerms = searchQuery.split(" "); // Split the search query into individual terms
    const likeConditions = searchTerms.map(
      () => `(title_search_manga LIKE ? OR description LIKE ?)`
    ); // Construct LIKE conditions for each term
    const sqlQuery = `SELECT * FROM advert WHERE ${likeConditions.join(
      " OR "
    )}`; // Join LIKE conditions with OR operator
    const queryParams = searchTerms.flatMap((term) => [
      `%${term}%`,
      `%${term}%`,
    ]); // Construct parameter array for each term

    const [rows] = await this.database.query(sqlQuery, queryParams);
    return rows;
  }

  async getAdvertById(id) {
    const [rows] = await this.database.query(
      `SELECT advert.price, advert.title_search_manga, advert.description, 
      article_condition.name_condition, advert.view_number, advert.publication_date_advert, 
      manga.id as manga_id, manga.title as manga_title, volume.title as volume_title, volume.ISBN, 
      user.pseudo, user.id as user_id, user.picture as user_picture, 
      joint_table.average, joint_table.feedback_nber, 
      JSON_ARRAYAGG(advert_image.image_path) as image_paths
      FROM ${this.table} 
      LEFT JOIN manga ON advert.manga_id=manga.id
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      LEFT JOIN volume ON advert.volume_id=volume.id
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id 
      JOIN user ON advert.user_id=user.id
      JOIN (SELECT user.id as rated_user_id, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
            FROM user
            JOIN feedback ON user.id = feedback.user_id
            GROUP BY user.id) as joint_table ON user.id=joint_table.rated_user_id
      WHERE advert.id = ?`,
      [id]
    );
    return rows;
}

  async getAdvertsBySeller(id) {
    const [rows] = await this.database.query(
      `SELECT advert.id as advert_id, advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.id as user_id, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, user.id as user_id
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
            FROM user
            JOIN feedback ON user.id = feedback.user_id
            GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.user_id = ?`,
      [id]
    );
    return rows;
  }

  async getAdvertsByGenre(id) {
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, manga.genre_id
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN manga ON advert.manga_id=manga.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE manga.genre_id = ?`,
      [id]
    );

    return rows;
  }

  async getAdvertsByCondition(id) {
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, article_condition.id as condition_id
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.article_condition_id = ?`,
      [id]
    );

    return rows;
  }

  async getAdvertsByPrice(price) {
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id 
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
		    FROM user
		    JOIN feedback ON user.id = feedback.user_id
		    GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.price < ?`,
      [price]
    );

    return rows;
  }

  async addAdvert(advert) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (price, description, alert, batch, title_search_manga, view_number, publication_date_advert, delete_advert, user_id, volume_id, article_condition_id, manga_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        advert.price,
        advert.description,
        advert.alert,
        advert.batch,
        advert.title_search_manga,
        advert.view_number,
        advert.publication_date_advert,
        advert.delete_advert,
        advert.user_id,
        advert.volume_id,
        advert.article_condition_id,
        advert.manga_id,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async findAdverts({ batch, genreId, conditionName, maxPrice }) {
    let whereConditions = batch ? "WHERE advert.batch=1" : "WHERE advert.batch=0";
    const queryParams = [];
  
    if (genreId) {
        whereConditions += " AND manga.genre_id = ?";
        queryParams.push(genreId);
    }
  
    if (conditionName) {
        whereConditions += " AND article_condition.name_condition = ?";
        queryParams.push(conditionName);
    }
  
    if (maxPrice) {
        whereConditions += " AND advert.price <= ?";
        queryParams.push(maxPrice);
    }
  
    const query = `
      SELECT advert.id, advert.title_search_manga, advert.price, article_condition.name_condition,
      advert_image.image_path, user.pseudo, user.picture as user_picture, manga.genre_id,
      ROUND(joint_table.average, 1) as average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      JOIN user ON advert.user_id=user.id
      JOIN manga ON advert.manga_id=manga.id
      JOIN (SELECT user.pseudo as rated_pseudo, ROUND(AVG(feedback.rating), 1) as average, COUNT(feedback.rating) as feedback_nber
            FROM user
            JOIN feedback ON user.id = feedback.user_id
            GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      ${whereConditions}
      ORDER BY advert.publication_date_advert DESC;
    `;
  
    const [rows] = await this.database.query(query, queryParams);
    return rows;
  }


}


module.exports = AdvertsManager;
