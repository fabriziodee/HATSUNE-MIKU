import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/CD6MbGV.jpeg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆ 
┃ ✯〘𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓〙
┃ ✯╭──────────◆
┃ ✯│▢ʜᴏʟᴀ:${taguser}
┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
┃ ✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/393518398856
┃ ✯│▢ғᴇᴄʜᴀ:${week}, ${date}
┃ ✯│▢ᴛɪᴇᴍᴘᴏ:ᴀᴄᴛɪᴠᴏ:${uptime}
┃ ✯│▢ᴜsᴜᴀʀɪᴏs:${rtotalreg}
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐈𝐍𝐅𝐎 𝐁𝐎𝐓----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴛᴇʀᴍɪɴᴏsʏᴄᴏɴᴅɪᴄɪᴏɴᴇs
┃ ✯│▢/ɢʀᴜᴘᴏs
┃ ✯│▢/ᴇsᴛᴀᴅᴏ
┃ ✯│▢/sᴘᴇᴇᴅᴛᴇsᴛ
┃ ✯│▢/ᴅᴏɴᴀʀ
┃ ✯│▢/ɢʀᴏᴜᴘʟɪsᴛ
┃ ✯│▢/ᴏᴡɴᴇʀ
┃ ✯│▢/sᴄʀɪᴘᴛ
┃ ✯│▢/ʙᴏᴛ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐔𝐍𝐄 𝐀𝐋 𝐁𝐎𝐓----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴊᴏɪɴ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯--𝐒𝐄𝐑𝐁𝐎𝐘 𝐉𝐀𝐃𝐈𝐁𝐎𝐓--⦿
┃ ✯╭──────────◆
┃ ✯│▢/sᴇʀʙᴏᴛ
┃ ✯│▢/sᴛᴏᴘ
┃ ✯│▢/ʙᴏᴛs
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑-⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴡᴇʟᴄᴏᴍᴇ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴡᴇʟᴄᴏᴍᴇ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴏʜᴏʀɴʏ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴏʜᴏʀɴʏ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ2
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪʟɪɴᴋ2
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴅᴇᴛᴇᴄᴛ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴅᴇᴛᴇᴄᴛ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀᴜᴅɪᴏs
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀᴜᴅɪᴏs
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴛᴏxɪᴄ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴛᴏxɪᴄ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴛʀᴀʙᴀ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴛʀᴀʙᴀ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴀʀᴀʙᴇs
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴀʀᴀʙᴇs
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴏᴀᴅᴍɪɴ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴏᴀᴅᴍɪɴ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐑𝐄𝐏𝐎𝐑𝐓𝐄 𝐄𝐑𝐑𝐎𝐑𝐄𝐒-⦿
┃ ✯╭──────────◆
┃ ✯│▢/ʀᴇᴘᴏʀᴛᴇ➟ᴛᴇxᴛᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ɪɴsᴛᴀɢʀᴀᴍ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ɪɴsᴛᴀɢʀᴀᴍ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ɪɴsᴛᴀɢʀᴀᴍ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ᴍᴇᴅɪᴀғɪʀᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ɪɴsᴛᴀɢʀᴀᴍ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ɢɪᴛᴄʟᴏɴᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ɢᴅʀɪᴠᴇ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ᴛɪᴋᴛᴏᴋ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/xɴxxᴅʟ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/xᴠɪᴅᴇᴏsᴅʟ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ᴛᴡɪᴛᴛᴇʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ғʙ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ғʙ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ғʙ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ғʙ4➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ғʙ5➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ʏᴛᴍᴘ3➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ʏᴛᴍᴘ4➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ʏᴛᴍᴘ3ᴅᴏᴄ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ʏᴛᴍᴘ4ᴅᴏᴄ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ᴅᴀᴘᴋ2➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/sᴛɪᴄᴋᴇʀᴘᴀᴄᴋ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/ᴘʟᴀʏ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏ.1➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏ.2➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏᴅᴏᴄ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏʟɪsᴛ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏʟɪsᴛ2➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴘᴏᴛɪғʏ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴛɪᴄᴋᴇʀʟʏ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʀɪɴɢᴛᴏɴᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴏᴜɴᴅᴄʟᴏᴜᴅ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ɪᴍᴀɢᴇɴ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘɪɴᴛᴇʀᴇsᴛ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴡᴀʟʟᴘᴀᴘᴇʀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴡᴀʟʟᴘᴀᴘᴇʀ2➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘᴘᴛɪᴋᴛᴏᴋ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃ ✯│▢/ɪɢsᴛᴀʟᴋ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃ ✯│▢/ɪɢsᴛᴏʀʏ➟ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ
┃ ✯│▢/ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ➟ᴜsᴇʀɴᴀᴍᴇ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐆𝐑𝐔𝐏𝐎𝐒----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴀᴅᴅ➟ɴᴜᴍᴇʀᴏ
┃ ✯│▢/ᴋɪᴄᴋ➟@ᴛᴀɢ
┃ ✯│▢/ᴋɪᴄᴋ2➟@ᴛᴀɢ
┃ ✯│▢/ʟɪsᴛᴀɴᴜᴍ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴋɪᴄᴋɴᴜᴍ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ɢʀᴜᴘᴏ➟ᴀʙʀɪʀ➟ᴄᴇʀʀᴀʀ
┃ ✯│▢/ɢʀᴏᴜᴘᴛɪᴍᴇ➟ᴏᴘᴄɪᴏɴ➟ᴛɪᴇᴍᴘᴏ
┃ ✯│▢/ᴘʀᴏᴍᴏᴛᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴀᴅᴍɪɴs➟ᴛᴇxᴛᴏ➟𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜
┃ ✯│▢/ᴅᴇᴍᴏᴛᴇ➟@ᴛᴀɢ
┃ ✯│▢/ɪɴғᴏɢʀᴏᴜᴘ
┃ ✯│▢/ʀᴇsᴇᴛʟɪɴᴋ
┃ ✯│▢/ʟɪɴᴋ
┃ ✯│▢/sᴇᴛɴᴀᴍᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴇᴛᴅᴇsᴄ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ɪɴᴠᴏᴄᴀʀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴇᴛᴡᴇʟᴄᴏᴍᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴇᴛʙʏᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴀᴜᴅɪᴏ
┃ ✯│▢/ʜɪᴅᴇᴛᴀɢ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/ʜɪᴅᴇᴛᴀɢ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/ᴡᴀʀɴ➟@ᴛᴀɢ
┃ ✯│▢/ᴜɴᴡᴀʀɴ➟@ᴛᴀɢ
┃ ✯│▢/ʟɪsᴛᴡᴀʀɴ
┃ ✯│▢/ғᴀɴᴛᴀsᴍᴀs
┃ ✯│▢/ᴅᴇsᴛʀᴀʙᴀ
┃ ✯│▢/sᴇᴛᴘᴘ➟ɪᴍᴀɢᴇɴ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐉𝐔𝐄𝐆𝐎𝐒----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴍᴀᴛᴇs➟ɴᴏᴏʙ➟ᴇᴀsʏ➟ᴍᴇᴅɪᴜᴍ➟ʜᴀʀᴅ➟ᴇxᴛʀᴇᴍᴇ➟ɪᴍᴘᴏssɪʙʟᴇ➟ɪᴍᴘᴏssɪʙʟᴇ2
┃ ✯│▢/ᴘᴘᴛ➟ᴘᴀᴘᴇʟ➟ᴛɪᴊᴇʀᴀ➟ᴘɪᴇᴅʀᴀ
┃ ✯│▢/ᴘʀᴏsᴛɪᴛᴜᴛᴏ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘʀᴏsᴛɪᴛᴜᴛᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ɢᴀʏ2➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ʟᴇsʙɪᴀɴᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘᴀᴊᴇʀᴏ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘᴀᴊᴇʀᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘᴜᴛᴏ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘᴜᴛᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴍᴀɴᴄᴏ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴍᴀɴᴄᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ʀᴀᴛᴀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ʟᴏᴠᴇ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴅᴏxᴇᴀʀ➟ɴᴏᴍʙʀᴇ➟@ᴛᴀɢ
┃ ✯│▢/ᴘʀᴇɢᴜɴᴛᴀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴜɪᴛᴘᴠᴘ➟@ᴛᴀɢ
┃ ✯│▢/sʟᴏᴛ➟ᴀᴘᴜᴇsᴛᴀ
┃ ✯│▢/ᴛᴛᴛ➟ɴᴏᴍʙʀᴇ➟sᴀʟᴀ
┃ ✯│▢/ᴅᴇʟᴛᴛᴛ
┃ ✯│▢/ᴀᴄᴇʀᴛɪᴊᴏ
┃ ✯│▢/sɪᴍɪ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴏᴘ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴏᴘ➟ɢᴀʏs
┃ ✯│▢/ᴛᴏᴘᴏ➟ᴛᴀᴋᴜs
┃ ✯│▢/ғᴏʀᴍᴀʀᴘᴀʀᴇᴊᴀ
┃ ✯│▢/ᴠᴇʀᴅᴀᴅ
┃ ✯│▢/ʀᴇᴛᴏ
┃ ✯│▢/ᴄᴀɴᴄɪᴏɴ
┃ ✯│▢/ᴘɪsᴛᴀ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒-⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴛᴏɢɪғᴀᴜᴅ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/ᴛᴏɪᴍɢ➟sᴛɪᴄᴋᴇʀ
┃ ✯│▢/ᴛᴏᴍᴘ3➟ᴠɪᴅᴇᴏ
┃ ✯│▢/ᴛᴏᴍᴘ3➟ɴᴏᴛᴀ➟ᴅᴇ➟ᴠᴏᴢ
┃ ✯│▢/ᴛᴏᴘᴛᴛ➟ᴠɪᴅᴇᴏ➟ᴀᴜᴅɪᴏ
┃ ✯│▢/ᴛᴏᴠɪᴅᴇᴏ➟sᴛɪᴄᴋᴇʀ
┃ ✯│▢/ᴛᴏᴜʀʟ➟ᴠɪᴅᴇᴏ➟ɪᴍᴀɢᴇɴ➟ᴀᴜᴅɪᴏ
┃ ✯│▢/ᴛᴛs➟ᴇs➟ᴛᴇxᴛᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒-⦿
┃ ✯╭──────────◆
┃ ✯│▢𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒
┃ ✯│▢/ᴘʜᴍᴀᴋᴇʀ➟ᴏᴘᴄɪᴏɴ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/ʟᴏɢᴏs➟ᴇғᴇᴄᴛᴏ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʟᴏɢᴏᴄʜʀɪsᴛᴍᴀs➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʟᴏɢᴏᴄᴏʀᴀᴢᴏɴ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʏᴛᴄᴏᴍᴍᴇɴᴛ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʜᴏʀɴʏᴄᴀʀᴅ➟@ᴛᴀɢ
┃ ✯│▢/sɪᴍᴘᴄᴀʀᴅ➟@ᴛᴀɢ
┃ ✯│▢/ʟᴏʟɪᴄᴇ➟@ᴛᴀɢ
┃ ✯│▢/ɪᴛssᴏsᴛᴜᴘɪᴅ
┃ ✯│▢/ᴘɪxᴇʟᴀʀ
┃ ✯│▢/ʙʟᴜʀ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐀𝐍𝐈𝐌𝐄----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ʜᴀᴅᴇs
┃ ✯│▢/ʜᴇʟᴀɪʟᴀ
┃ ✯│▢/ɢᴀᴡʀɢᴜʀᴀ
┃ ✯│▢/ᴄʀɪsᴛɪᴀɴᴏʀᴏɴᴀʟᴅᴏ
┃ ✯│▢/ᴍᴇssɪ
┃ ✯│▢/ᴍᴇᴍᴇ
┃ ✯│▢/ɪᴛᴢʏ
┃ ✯│▢/ʙʟᴀᴄᴋᴘɪɴᴋ
┃ ✯│▢/ʟᴏʟɪᴠɪᴅ
┃ ✯│▢/ʟᴏʟɪ
┃ ✯│▢/ɴᴀᴠɪᴅᴀᴅ
┃ ✯│▢/ᴘᴘᴄᴏᴜᴘʟᴇ
┃ ✯│▢/ᴡᴘᴍᴏɴᴛᴀñᴀ
┃ ✯│▢/ᴘᴜʙɢ
┃ ✯│▢/ᴡᴘɢᴀᴍɪɴɢ
┃ ✯│▢/ᴡᴘᴀᴇsᴛʜᴇᴛɪᴄ
┃ ✯│▢/ᴡᴘᴀᴇsᴛʜᴇᴛɪᴄ2
┃ ✯│▢/ᴡᴘʀᴀɴᴅᴏᴍ
┃ ✯│▢/ᴡᴀʟʟʜᴘ
┃ ✯│▢/ᴡᴘᴠᴇʜɪᴄᴜʟᴏ
┃ ✯│▢/ᴡᴘᴍᴏᴛᴏ
┃ ✯│▢/ᴄᴏғғᴇᴇ
┃ ✯│▢/ᴘᴇɴᴛᴏʟ
┃ ✯│▢/ᴄᴀʀɪᴄᴀᴛᴜʀᴀ
┃ ✯│▢/ᴄɪʙᴇʀᴇsᴘᴀᴄɪᴏ
┃ ✯│▢/ᴛᴇᴄʜɴᴏʟᴏɢʏ
┃ ✯│▢/ᴅᴏʀᴀᴇᴍᴏɴ
┃ ✯│▢/ʜᴀᴄᴋᴇʀ
┃ ✯│▢/ᴘʟᴀɴᴇᴛᴀ
┃ ✯│▢/ʀᴀɴᴅᴏᴍᴘʀᴏғɪʟᴇ
┃ ✯│▢/ɴᴇᴋᴏ
┃ ✯│▢/ᴡᴀɪғᴜ
┃ ✯│▢/ᴀᴋɪʀᴀ
┃ ✯│▢/ᴀᴋɪʏᴀᴍᴀ
┃ ✯│▢/ᴀɴɴᴀ
┃ ✯│▢/ᴀsᴜɴᴀ
┃ ✯│▢/ᴀʏᴜᴢᴀᴡᴀ
┃ ✯│▢/ʙᴏʀᴜᴛᴏ
┃ ✯│▢/ᴄʜɪʜᴏ
┃ ✯│▢/ᴄʜɪᴛᴏɢᴇ
┃ ✯│▢/ᴅᴇɪᴅᴀʀᴀ
┃ ✯│▢/ᴇʀᴢᴀ
┃ ✯│▢/ᴇʟᴀɪɴᴀ
┃ ✯│▢/ᴇʙᴀ
┃ ✯│▢/ᴇᴍɪʟɪᴀ
┃ ✯│▢/ʜᴇsᴛɪᴀ
┃ ✯│▢/ʜɪɴᴀᴛᴀ
┃ ✯│▢/ɪɴᴏʀɪ
┃ ✯│▢/ɪsᴜᴢᴜ
┃ ✯│▢/ɪᴛᴀᴄʜɪ
┃ ✯│▢/ɪᴛᴏʀɪ
┃ ✯│▢/ᴋᴀɢᴀ
┃ ✯│▢/ᴋᴀɢᴜʀᴀ
┃ ✯│▢/ᴋᴀᴏʀɪ
┃ ✯│▢/ᴋᴇɴᴇᴋɪ
┃ ✯│▢/ᴋᴏᴛᴏʀɪ
┃ ✯│▢/ᴋᴜʀᴜᴍɪ
┃ ✯│▢/ᴍᴀᴅᴀʀᴀ
┃ ✯│▢/ᴍɪᴋᴀsᴀ
┃ ✯│▢/ᴍɪᴋᴜ
┃ ✯│▢/ᴍɪɴᴀᴛᴏ
┃ ✯│▢/ɴᴀʀᴜᴛᴏ
┃ ✯│▢/ɴᴇᴢᴜᴋᴏ
┃ ✯│▢/sᴀɢɪʀɪ
┃ ✯│▢/sᴀsᴜᴋᴇ
┃ ✯│▢/sᴀᴋᴜʀᴀ
┃ ✯│▢/ᴄᴏsᴘʟᴀʏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯-𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒-⦿
┃ ✯╭──────────◆
┃ ✯│▢𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒
┃ ✯│▢/ʙᴀss
┃ ✯│▢/ʙʟᴏᴡɴ
┃ ✯│▢/ᴅᴇᴇᴘ
┃ ✯│▢/ᴇᴀʀʀᴀᴘᴇ
┃ ✯│▢/ғᴀsᴛ
┃ ✯│▢/ғᴀᴛ
┃ ✯│▢/ɴɪɢʜᴛᴄᴏʀᴇ
┃ ✯│▢/0ʀᴇᴠᴇʀsᴇ
┃ ✯│▢/ʀᴏʙᴏᴛ
┃ ✯│▢/sʟᴏᴡ
┃ ✯│▢/sᴍᴏᴏᴛʜ
┃ ✯│▢/ᴛᴜᴘᴀɪ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯--𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎--⦿
┃ ✯╭──────────◆
┃ ✯│▢/sᴛᴀʀᴛ
┃ ✯│▢/ɴᴇxᴛ
┃ ✯│▢/ʟᴇᴀᴠᴇ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒----⦿
┃ ✯╭──────────◆
┃ ✯│▢/ᴍᴏᴅᴀᴘᴋ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃ ✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ2➟ᴛᴇxᴛᴏ
┃ ✯│▢/xɴxxsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴀɴɪᴍᴇɪɴғᴏ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ɢᴏᴏɢʟᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʟᴇᴛʀᴀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴡɪᴋɪᴘᴇᴅɪᴀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʏᴛsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘʟᴀʏsᴛᴏʀᴇ➟ᴛᴇxᴛᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯--𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒--⦿
┃ ✯╭──────────◆
┃ ✯️│▢/ᴄʜᴀᴛɢᴘᴛ➟ᴛᴇxᴛᴏ
┃ ✯│▢/️ᴅᴀʟʟ-ᴇ➟ᴛᴇxᴛᴏ
┃ ✯│▢/️sᴘᴀᴍᴡᴀ➟ɴᴜᴍᴇʀᴏ➟ᴛᴇxᴛᴏ➟ᴄᴀɴᴛɪᴅᴀᴅ
┃ ✯│▢/️ᴛᴀᴍᴀñᴏ➟ᴄᴀɴᴛɪᴅᴀᴅ➟ɪᴍᴀɢᴇɴ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/️ᴄʟɪᴍᴀ➟ᴘᴀís➟ᴄɪᴜᴅᴀᴅ
┃ ✯│▢/️ᴇɴᴄᴜᴇsᴛᴀ➟ᴛᴇxᴛᴏ1|ᴛᴇxᴛᴏ2...
┃ ✯│▢/️ᴀғᴋ➟ᴍᴏᴛɪᴠᴏ
┃ ✯│▢/️ᴏᴄʀ➟ʀᴇsᴘᴏɴᴅᴇ➟ᴀ➟ɪᴍᴀɢᴇɴ
┃ ✯️│▢/ᴀᴄᴏʀᴛᴀʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/️ᴄᴀʟᴄ➟ᴏᴘᴇʀᴀᴄɪᴏɴ➟ᴍᴀᴛʜ
┃ ✯│▢/️ᴅᴇʟ➟ᴍᴇɴsᴀᴊᴇ
┃ ✯│▢/️ᴡʜᴀᴛᴍᴜsɪᴄ➟ᴀᴜᴅɪᴏ
┃ ✯│▢/️ʀᴇᴀᴅǫʀ➟ɪᴍᴀɢᴇɴ➟ǫʀ
┃ ✯│▢/️ǫʀᴄᴏᴅᴇ➟ᴛᴇxᴛᴏ
┃ ✯️│▢/ʀᴇᴀᴅᴍᴏʀᴇ➟ᴛᴇxᴛᴏ1| ᴛᴇxᴛᴏ2
┃ ✯│▢/sᴛʏʟᴇᴛᴇxᴛᴛ➟ᴇxᴛᴏ
┃ ✯│▢/ᴛʀᴀᴅᴜᴄɪʀ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ɴᴏᴡᴀ➟ɴᴜᴍᴇʀᴏ
┃ ✯│▢/ᴄᴏᴠɪᴅ➟ᴘᴀɪs
┃ ✯│▢/ʜᴏʀᴀʀɪᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒 ----⦿
┃ ✯╭──────────◆
┃ ✯│▢/sᴛɪᴄᴋᴇʀ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/sᴛɪᴄᴋᴇʀ➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/s➟ʀᴇsᴘᴏɴᴅᴇʀ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/s➟ᴇɴʟᴀᴄᴇ➟ʟɪɴᴋ
┃ ✯│▢/sғᴜʟʟ➟ɪᴍᴀɢᴇɴ➟ᴏ➟ᴠɪᴅᴇᴏ
┃ ✯│▢/ᴇᴍᴏᴊɪᴍɪx➟ᴇᴍᴏᴊɪ➟1&ᴇᴍᴏᴊɪ 2
┃ ✯│▢/sᴄɪʀᴄʟᴇ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/sʀᴇᴍᴏᴠᴇʙɢ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/sᴇᴍᴏᴊɪ➟ᴛɪᴘᴏ➟ᴇᴍᴏᴊɪ
┃ ✯│▢/ᴀᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴀᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴀᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴛᴘ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴛᴘ2➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴛᴘ3➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴛᴘ4➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴛᴛᴘ5➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴘᴀᴛ➟@ᴛᴀɢ
┃ ✯│▢/sʟᴀᴘ➟@ᴛᴀɢ
┃ ✯│▢/ᴋɪss➟@ᴛᴀɢ
┃ ✯│▢/ᴅᴀᴅᴏ
┃ ✯│▢/ᴡᴍ➟ᴘᴀᴄᴋɴᴀᴍᴇ➟ᴀᴜᴛʜᴏʀ
┃ ✯│▢/sᴛɪᴄᴋᴇʀᴍᴀʀᴋᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/sᴛɪᴄᴋᴇʀғɪʟᴛᴇʀ➟ᴇғᴇᴄᴛᴏ➟ɪᴍᴀɢᴇɴ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷
╭─────────────◆ 
┃✯----𝐎𝐖𝐍𝐄𝐑----⦿
┃ ✯╭──────────◆
┃ ✯│▢/sᴇᴛᴘʀᴇғɪx➟ᴘʀᴇғɪᴊᴏ
┃ ✯│▢/ʀᴇsᴇᴛᴘʀᴇғɪx
┃ ✯│▢/ᴀᴜᴛᴏᴀᴅᴍɪɴ
┃ ✯│▢/ʟᴇᴀᴠᴇɢᴄ
┃ ✯│▢/ʙʟᴏᴄᴋʟɪsᴛ
┃ ✯│▢/ʙʟᴏᴄᴋ➟@ᴛᴀɢ➟ɴᴜᴍᴇʀᴏ
┃ ✯│▢/ᴜɴʙʟᴏᴄᴋ➟@ᴛᴀɢ➟ɴᴜᴍᴇʀᴏ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ʀᴇsᴛʀɪᴄᴛ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ʀᴇsᴛʀɪᴄᴛ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀᴜᴛᴏʀᴇᴀᴅ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀᴜᴛᴏʀᴇᴀᴅ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴘᴜʙʟɪᴄ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴘᴜʙʟɪᴄ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴘᴄᴏɴʟʏ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴘᴄᴏɴʟʏ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ɢᴄᴏɴʟʏ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ɢᴄᴏɴʟʏ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴄᴀʟʟ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴄᴀʟʟ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ
┃ ✯│▢/ᴇɴᴀʙʟᴇ➟ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
┃ ✯│▢/ᴅɪsᴀʙʟᴇ➟ᴍᴏᴅᴇᴊᴀᴅɪʙᴏᴛ
┃ ✯│▢/ᴍsɢ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʙᴀɴᴄʜᴀᴛ
┃ ✯│▢/ᴜɴʙᴀɴᴄʜᴀᴛ
┃ ✯│▢/ʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃ ✯│▢/ᴜɴʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃ ✯│▢/ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs➟@ᴛᴀɢ
┃ ✯│▢/ᴀñᴀᴅɪʀxᴘ➟@ᴛᴀɢ
┃ ✯│▢/ʙᴀɴᴜsᴇʀ➟@ᴛᴀɢ
┃ ✯│▢/ʙᴄ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʙᴄᴄʜᴀᴛs➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʙᴄɢᴄ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ʙᴄɢᴄ2➟ᴀᴜᴅɪᴏ
┃ ✯│▢/ʙᴄɢᴄ2➟ᴠɪᴅᴇᴏ
┃ ✯│▢/ʙᴄɢᴄ2➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/ʙᴄʙᴏᴛ➟ᴛᴇxᴛᴏ
┃ ✯│▢/ᴄʟᴇᴀʀᴛᴘᴍ
┃ ✯│▢/ʀᴇsᴛᴀʀᴛ
┃ ✯│▢/ᴜᴘᴅᴀᴛᴇ
┃ ✯│▢/ʙᴀɴʟɪsᴛ
┃ ✯│▢/ᴀᴅᴅᴘʀᴇᴍ➟@ᴛᴀɢ
┃ ✯│▢/ᴅᴇʟᴘʀᴇᴍ➟@ᴛᴀɢ
┃ ✯│▢/ʟɪsᴛᴘʀᴇᴍ
┃ ✯│▢/ʟɪsᴛᴄᴍᴅ
┃ ✯│▢/sᴇᴛᴘᴘʙᴏᴛ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/ᴀᴅᴅᴄᴍᴅ➟ᴛᴇxᴛᴏ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟sᴛɪᴄᴋᴇʀ➟ɪᴍᴀɢᴇɴ
┃ ✯│▢/ᴅᴇʟᴄᴍᴅ➟ʀᴇsᴘᴏɴᴅᴇʀ➟ᴀ➟sᴛɪᴄᴋᴇʀ➟ɪᴍᴀɢᴇɴ➟ᴄᴏɴ➟ᴄᴏᴍᴀɴᴅᴏ➟ᴏ➟ᴛᴇxᴛᴏ➟ᴀsɪɢɴᴀᴅᴏ
┃ ✯╰───────────◆
╰━━━━━━━━━━━──⊷`.trim()
let buttons = [
{ buttonId: '/cuentasoficiales', buttonText: { displayText: '🧿ᴄᴜᴇɴᴛᴀs🏓' }, type: 1 },
{ buttonId: '/grupos', buttonText: { displayText: '🔮ɢʀᴜᴘᴏs⛄' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '🧿𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐌𝐈𝐊𝐔-𝐁𝐎𝐓🏓',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
