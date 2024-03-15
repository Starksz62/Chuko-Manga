const multer = require("multer");

const fs = require("fs");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./public/images";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    cb(null, `${name}_${Date.now()}.${extension}`);
  },
});
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./public/imgProfile");
//   },
//   filename: (req, file, callback) => {
//     console.log("pouletHello",req.body, req.files);
//     const name = file.originalname.split(" ").join("_");
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, `${name}_${Date.now()}.${extension}`);
//   },
// });

module.exports = multer({ storage }).single("file");
// .array("files", 3);

// module.exports = multer({ storage }).fields([
//   { name: "image1" },
//   { name: "image2" },
//   { name: "image3" },
// ]);
