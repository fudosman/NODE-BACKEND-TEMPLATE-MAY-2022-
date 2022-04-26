const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  // eslint-disable-next-line no-undef
  cloud_name: process.env.CLOUD_NAME,
  // eslint-disable-next-line no-undef
  api_key: process.env.API_KEY,
  // eslint-disable-next-line no-undef
  api_secret: process.env.API_SECRET
});

exports.uploads = (file, folder) => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) => {
      resolve({
        url: result.url,
        id: result.public_id
      });
    }, {
      resource_type: "auto",
      folder: folder
    });
  });
};