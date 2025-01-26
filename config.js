
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------𝗖𝗛𝗔𝗡𝗨𝗞𝗔-𝗠𝗗---------------------------------------
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gLFAUYjK#27E_jm9W4E7jDZz2mPOIierzKQgdE7LzC5oQ2hjY678",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //TRUE OR FALSE
MODE: process.env.MODE || "public",  // PRIVATE OR PUBLIC
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://pomf2.lain.la/f/p24bk9zh.jpg", // DO NOT CHANGE
ALIVE_MSG: process.env.ALIVE_MSG || "ᴄʜᴀɴᴜᴋᴀ-ᴍᴅ ɪs ᴀʟɪᴠᴇ. ᴋᴇᴇᴘ sᴜᴘᴘᴏʀᴛɪɴɢ *ᴘᴏᴡᴇʀ Cᴏᴅᴇʀs❄️*\n\n> ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ-ᴍᴀᴅᴜꜱʜᴀɴ",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".", // .,!/?
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『 ＣＨＡＮＵＫＡ - ＭＤ 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE BY 𝗖𝗛𝗔𝗡𝗨𝗞𝗔 𝗠𝗔𝗫---------------->-
