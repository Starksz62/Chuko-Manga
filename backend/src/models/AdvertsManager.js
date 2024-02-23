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

    // Return the array of items
    return rows;
  }

  async findRecentUniqueItems() {
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
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
    const [rows] = await this.database.query(
      `SELECT advert.title_search_manga, advert.price, article_condition.name_condition, advert_image.image_path, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, advert.publication_date_advert
      FROM ${this.table}
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id AND advert_image.is_primary=1
      JOIN article_condition ON advert.article_condition_id=article_condition.id
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
      `SELECT advert.price, advert.title_search_manga, advert.description, article_condition.name_condition, advert.view_number, advert.publication_date_advert, manga.title as manga_title, volume.title as volume_title, volume.ISBN, user.pseudo, user.picture as user_picture, joint_table.average, joint_table.feedback_nber, JSON_ARRAYAGG(advert_image.image_path) as image_paths
      FROM ${this.table} 
      LEFT JOIN manga ON advert.manga_id=manga.id
      JOIN article_condition ON advert.article_condition_id=article_condition.id
      LEFT JOIN volume ON advert.volume_id=volume.id
      LEFT JOIN advert_image ON advert.id=advert_image.advert_id 
      JOIN user ON advert.user_id=user.id
      JOIN (SELECT user.pseudo as rated_pseudo, AVG(feedback.rating) as average, COUNT(feedback.rating) as feedback_nber
            FROM user
            JOIN feedback ON user.id = feedback.user_id
            GROUP BY user.pseudo) as joint_table ON user.pseudo=joint_table.rated_pseudo
      WHERE advert.id = ?`,
      [id]
    );

    // Return the array of items
    return rows;
  }

  async getAdvertsBySeller(id) {
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
      WHERE advert.user_id = ?`,
      [id]
    );

    // Return the array of items
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

    // Return the array of items
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

    // Return the array of items
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

    // Return the array of items
    return rows;
  }
}

// crée la fonction pour recuperer les adverts (title) puis condition comparer title LIKE %query%

// async findAdvertQuery(query) {
//   console.info(query);
//   try {
//     if (!query) {
//       throw new Error("Query parameter cannot be empty or null.");
//     }

//     const sql = `SELECT * FROM advert WHERE title_search_manga LIKE ?`;
//     const [rows] = await this.database.query(sql, [`%${query}%`]);

//     return rows;
//   } catch (error) {
//     console.error("Error in findAdvertQuery:", error);
//     throw error; // Rethrow the error to handle it upstream
//   }
// }

// async findAdvertQuery(searchQuery) {
//   console.log("je suis dans le manager", searchQuery);
//   const [rows] = await this.database.query(
//     `SELECT * FROM advert WHERE title_search_manga OR description LIKE "%en%";`
//   );
//   return rows;
// }

// async findAdvertQuery(searchQuery) {
//   console.log("je suis dans le manager", searchQuery);
//   const [rows] = await this.database.query(
//     `SELECT * FROM advert WHERE title_search_manga OR description LIKE ?`,
//     [`%${searchQuery}%`]
//   );
//   return rows;
// }

//
// const [rows] = await this.database.query(`SELECT advert where id = 1;`);

// IGNORER
// async createSearchQuery() {
//   const [rows] = await this.database.query(
//     `INSERT INTO search_query (query)
//   VALUES (?)
//   ON DUPLICATE KEY UPDATE query = VALUES(query);
//   `
//   );
//   return rows;
// }

module.exports = AdvertsManager;
