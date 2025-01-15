const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fBBiDLoS#cvLPj1HYIQzFhAyLlTskfZDtgSJZnCEkukL02AFkJCc",
MONGODB: process.env.MONGODB || "mongodb://mongo:eKkloPwrUKytiEPfYMPZNtWfXHxsLbQu@autorack.proxy.rlwy.net:13482",
ALIVE_IMG : process.env.ALIVE_IMG || "https://files.catbox.moe/m9rojt.jpg", 
ALIVE_MSG : process.env.ALIVE_MSG || "*👋Hello 𝙸 𝙰𝙼 𝙳𝙰𝚁𝙺_𝙰𝙳𝙰𝙼-𝙼𝙳 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 CHANUKA 💀👨‍💻𝙾𝚆𝙽𝙴𝚁 - 𝙲𝙷𝙰𝙽𝚄𝙺𝙰 𝙼𝙰𝙳𝚄𝚂𝙷𝙰𝙽*> DARK_ADAM-MD",
SYSTEM_MSG : process.env.SYSTEM_MSG || "Hi iam the robot",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
