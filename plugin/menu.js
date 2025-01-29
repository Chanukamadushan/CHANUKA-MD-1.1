const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const imageUrl = 'https://pomf2.lain.la/f/p24bk9zh.jpg';

//menu cmd
cmd({
    pattern: "menu",
    react: '📜',
    desc: "Get the list of commands",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { 
    from, quoted, pushname, reply 
}) => {
    try {
        
        // Menu selection message
        const selectionMessage = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • OWNER*
*├ 2 • CONVERT*
*├ 3 • AI*
*├ 4 • SEARCH*
*├ 5 • DOWNLOAD*
*├ 6 • MAIN*
*├ 7 • GROUP*
*├ 8 • FUN*
*├ 9 • MOVIE*
*├ 10 • OTHER*
*├ 11 • NEWS*
*├ 12 • TOOLS*
*├ 13 • LOGO*
*╰╼╼╼╼╼╼╼╼╼╼*
╰────────❍──────❍❍➣

_*🌟 Reply with the Number you want to select*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ＣＨＡＮＵＫＡ-ＭＤ*
`;
       // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: selectionMessage,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '🧠 𝗖𝗛𝗔𝗡𝗨𝗞𝗔 𝗠𝗗 | 𝗧𝗘𝗖𝗛 ジ',
          newsletterJid: "12036329660-5464049@newsletter",
          },
          externalAdReply: {
              title: `ＣＨＡＮＵＫＡ-ＭＤ Menu List`,
              body: `https://CHANUKA-MD-main-web.vercel.app/`,
              thumbnailUrl: `https://pomf2.lain.la/f/p24bk9zh.jpg`,
              sourceUrl: ``,
              mediaType: 1,
              renderLargerThumbnail: true
              }
                  }
              }, { quoted: mek });

        // Send the selection message
        // const sentMessage = await conn.sendMessage(from, {
        //     text: selectionMessage,
        // }, { quoted: mek });

        // Wait for the user's response
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                let responseText;

                // Command templates
                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                              await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈──❮ OWNER MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .updatecmd
┝❍ .shutdown
┝❍ .broadcast
┝❍ .setpp
┝❍ .block
┝❍ .unblock
┝❍ .clearchats
┝❍ .jid
┝❍ .gjid
┝❍ .restart
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '2': // MAIN MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ CONVERT MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .sticker
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '3': // GROUP MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ AI MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .ai
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '4': // OWNER MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ SEARCH MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .infodl
┝❍ .yts
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '5': // CONVERT MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ DOWNLOAD MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .Tiktok 
┝❍ .fb
┝❍ .twitter 
┝❍ .mediafire
┝❍ .ig
┝❍ .apk
┝❍ .gdrive
┝❍ .song
┝❍ .song2
┝❍ .video 
┝❍ .video2
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '6': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ MAIN MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .about
┝❍ .alive
┝❍ .ping
┝❍ .menu2
┝❍ .anime
┝❍ .disappear
┝❍ .senddm
┝❍ .menu
┝❍ .menu3
┝❍ .owner
┝❍ .ping2
┝❍ .ping3
┝❍ .script
┝❍ .settings
┝❍ .system
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '7': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ GROUP MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .delete
┝❍ .joinrequests
┝❍ .allreq
┝❍ .mute
┝❍ .unmute
┝❍ .lockgs
┝❍ .unlockgs
┝❍ .leave
┝❍ .updategname
┝❍ .updategdesc
┝❍ .join
┝❍ .invite
┝❍ .revoke
┝❍ .kick
┝❍ .promote
┝❍ .demote
┝❍ .tagall
┝❍ .hidetag
┝❍ .taggp
┝❍ .ginfo
┝❍ .kickall
┝❍ .opentime
┝❍ .closetime
┝❍ .tagadmin
┝❍ .mute
┝❍ .unmute
┝❍ .add
┝❍ .setgoodbye
┝❍ .setwelcome
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });            
                        break;
                    case '8': // SEARCH MENU
                       await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ FUN MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .animegirl
┝❍ .animegirl1
┝❍ .animegirl2
┝❍ .animegirl3
┝❍ .animegirl4
┝❍ .animegirl5
┝❍ .loli
┝❍ .dog
┝❍ .fact
┝❍ .joke
┝❍ .hack
┝❍ .quote
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                         break;
                    case '9': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ MOVIE MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .baiscope
┝❍ .ginisisila
┝❍ .sinhalasub
┝❍ .movieinfo
┝❍ .sub
┝❍ .movie2
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });

                    break;                       
                    case '10': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ OTHER MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .define
┝❍ .github
┝❍ .gpass
┝❍ .git
┝❍ .mn
┝❍ .trt
┝❍ .weather
╰───────────────❍❍➣` }, { quoted: mek });
                        break;
                    case '11': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ NEWS MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .hiru
┝❍ .sirasa
┝❍ .ada
┝❍ .lankadeepa
┝❍ .bbc
┝❍ .itn
┝❍ .siyatha
┝❍ .gagana
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '12': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ TOOLS MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .bass
┝❍ .blown
┝❍ .deep
┝❍ .fast
┝❍ .reverse2
┝❍ .calc
┝❍ .translate
┝❍ .reverse
┝❍ .tempmail
┝❍ .checkmail
┝❍ .delmail
┝❍ .encode
┝❍ .decode
┝❍ .npmstalk
┝❍ .iplookup
┝❍ .instastalk
┝❍ .githubuser
┝❍ .password
┝❍ .hijact
┝❍ .
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '13': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ LOGO MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .
┝❍ .
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜᴀɴᴜᴋᴀ ᴍᴅ*` }, { quoted: mek });
                    break;
                    default:
                        responseText = "❌ Invalid option. Please enter a valid number (1-6).";
                }

                // Show the selected menu
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});
