const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "3ro2ARZL#5iQTaJFr2qrH5768W1fw0snylkFMfX8wH7gE3C50bVo",
  MONGODB: process.env.MONGODB || "mongodb://mongo:ohfzuSToAeqwLtyJMlBkjUKBgGgCoDWf@roundhouse.proxy.rlwy.net:48583",
  OWNER_NUM: process.env.OWNER_NUM || "94741469245",
};
