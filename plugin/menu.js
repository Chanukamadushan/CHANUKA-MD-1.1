const { cmd, commands } = require('../command');
const config = require('../config');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson , runtime ,sleep } = require('../lib/functions')
const imageUrl = 'https://files.catbox.moe/m9rojt.jpg';

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

╭────────❍──────❍❍➣
┝❍ *TOTAL COMMANDS : 182*
╰────────❍──────❍❍➣

_*🌟 Reply with the Number you want to select*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*
`;
       // Sending the image with caption
          const sentMsg = await conn.sendMessage(from, {


          text: selectionMessage,
          contextInfo: {

          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
          newsletterName: '👨‍💻 𝗗𝗔𝗥𝗞 𝗔𝗗𝗔𝗠 𝗠𝗗 | 𝗧𝗘𝗖𝗛 ジ',
          newsletterJid: "120363296605464049@newsletter",
          },
          externalAdReply: {
              title: `DARK_ADAM-MD Menu List`,
              body: `https://DARK_ADAM-MD-main-web.vercel.app/`,
              thumbnailUrl: `https://files.catbox.moe/m9rojt.jpg`,
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
┝❍ .join
┝❍ .restart
┝❍ .shutdown
┝❍ .broadcast
┝❍ .setpp
┝❍ .block
┝❍ .unblock
┝❍ .clearchats
┝❍ .startnews
┝❍ .stopnews
┝❍ .jid
┝❍ .gjid
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '2': // MAIN MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ CONVERT MENU ❯──◈*

╭───────────────❍❍➣
┝❍  .convert
┝❍ .sticker2
┝❍ .tts
┝❍ .qmake
┝❍ .readmore
┝❍ .sticker
┝❍ .vv
┝❍ .circle
┝❍ .crop
┝❍ .round
┝❍ .toaudio
┝❍ .toanime
┝❍ .currency
┝❍ .url
┝❍ .img2url
┝❍ .trt
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '3': // GROUP MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ AI MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .ai
┝❍ .bing
┝❍ .copilot
┝❍ .blackbox
┝❍ .bingimgai
┝❍ .gemini
┝❍ .gpt4
┝❍ .laland
┝❍ .obfus
┝❍ .prodia
┝❍ .prodia2
┝❍ .texttoimg1
┝❍ .texttoimg2
┝❍ .texttoimg3
┝❍ .aemtv1
┝❍ .aemtv2
┝❍ .aemtv3
┝❍ .aemtv4
┝❍ .aemtv5
┝❍ .aemtv6
┝❍ .aemtv7
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '4': // OWNER MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ SEARCH MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .lyric 
┝❍ .yts
┝❍ .srepo
┝❍ .weather1
┝❍ .tiktoksearch
┝❍ .horo
┝❍ .google
┝❍ .couplepp
┝❍ .snumber
┝❍ .weather
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '5': // CONVERT MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ DOWNLOAD MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .song2
┝❍ .video
┝❍ .fb
┝❍ .tt
┝❍ .gdrive
┝❍ .apkdl
┝❍ .twitter
┝❍ .apk
┝❍ .img
┝❍ .mfire
┝❍ .scloud
┝❍ .song
┝❍ .xnxx
┝❍ .xvideo
┝❍ .mega
┝❍ .gitclone
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '6': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ MAIN MENU ❯──◈*

╭───────────────❍❍➣
┝❍  .runtime
┝❍ .alive
┝❍ .allmenu
┝❍ .owner
┝❍ .support
┝❍ .repo
┝❍ .about
┝❍ .system
┝❍ .ping
┝❍ .allmenu
┝❍ .menu
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '7': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ GROUP MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .mute
┝❍ .unmute
┝❍ .promote
┝❍ .demote
┝❍ .del
┝❍ .add
┝❍ .setgoodbye
┝❍ .setwelcome
┝❍ .admins
┝❍ .groupdesc
┝❍ .groupinfo
┝❍ .grouplink
┝❍ .gname
┝❍ .setsubject
┝❍ .tagall
┝❍ .requests
┝❍ .accept
┝❍ .reject
┝❍ .hidetag
┝❍ .kick
┝❍ .unlock
┝❍ .lock
┝❍ .approve
┝❍ .poll
┝❍ .getpic
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });            
                        break;
                    case '8': // SEARCH MENU
                       await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ FUN MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .animegirl
┝❍ .dog
┝❍ .fact
┝❍ .hack
┝❍ .insult
┝❍ .joke
┝❍ .quote
┝❍ .ronaldo
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                         break;
                    case '9': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ MOVIE MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .movie
┝❍ .jshare (ꜱɪɴʜᴀʟᴀ ꜱᴜʙ ᴍᴏᴠɪᴇ ᴊɪᴅ ꜱʜᴀʀᴇ)
┝❍ .uploadme
┝❍ .ytsmx
┝❍ .uploadmovie
┝❍ .moviekv
┝❍ .uploadtv
┝❍ .uploadtvm
┝❍ .uploadmoviem
┝❍ .uploadzip
┝❍ .uploadzipn
┝❍ .uploadzipfile
┝❍ .imdb
┝❍ .gdmovie
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });

                    break;                       
                    case '10': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ OTHER MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .anime1
┝❍ .anime2
┝❍ .anime3
┝❍ .anime4
┝❍ .anime5
┝❍ .loli
┝❍ .waifu
┝❍ .neko
┝❍ .megumin
┝❍ .maid
┝❍ .awoo
┝❍ .define
┝❍ .githubstalk
┝❍ .gpass
┝❍ .wiki
┝❍ .ss
╰───────────────❍❍➣` }, { quoted: mek });
                        break;
                    case '11': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ NEWS MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .hirunews
┝❍ .sirasanews
┝❍ .derananews
┝❍ .lankadeepanews
┝❍ .bbcnews
┝❍ .ios
┝❍ .esananews
┝❍ .technews
┝❍ .wabeta
┝❍ .news
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
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
┝❍ .antispam
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
                        break;
                    case '13': // SEARCH MENU
                        await conn.sendMessage(from, { image: { url: imageUrl }, caption: `
*◈───❮ LOGO MENU ❯──◈*

╭───────────────❍❍➣
┝❍ .logo1
┝❍ .logo2
╰───────────────❍❍➣

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴀᴅᴀᴍᴀ ᴍᴅ*` }, { quoted: mek });
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
