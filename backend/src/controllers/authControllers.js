const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const models = require("../modelsProviders");

const login = async (req, res, next) => {
  try {
    const user = await models.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      delete user.hashed_password;
      const token = await jwt.sign(
        { sub: user.id, role: user.role },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: req.secure || req.headers["x-forwarded-proto"] === "https",
        SameSite: "Strict",
      });
      res.json({
        token,
        user: {
          id: user.id,
          pseudo: user.pseudo,
        },
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
