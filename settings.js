/*

██▓▒­░ ►▬ WELCOME ▬◄ ░▒▓██

© Malvin King 
WhatsApp Me : 263780166288

 - Source ↓
 - t.me/malvintech 
 - wa.me/263780166288
 - https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A

*/

require("./all/module.js")

//========== Setting Owner ==========//

global.owner = "233240224852" //replace with your phone number
global.namaowner = "Okyere Daimine" //replace with your name


//======== Setting Bot & Link ========//
global.namabot = "ᴍᴋ-𝚋𝚘𝚝" 
global.version = "v3.5.0"
global.foother = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"
global.linkgc = 'https://youtube.com/@malvintech2'
global.linksaluran = "https://youtube.com/@malvintech2"
global.linkyt = 'https://youtube.com/@malvintech2'
global.packname = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴋ-ʙᴏᴛ"
global.author = "ᴍᴀʟᴠɪɴ ᴋɪɴɢ"


//========== Setting Event ==========//

// true or false as you like

global.welcome = true
global.autoread = false
global.anticall = false
global.autoreadsw = true // Auto-read statuses
global.autolikesw = true // Auto-like statuses
global.owneroff = false
global.antibug = false

global.caption = '> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ'


//========= Setting Message =========//
global.msg = {
    "error": "🤖 *Oopsie!* Something went wrong. Maybe try again? Or blame the developer. Your call!",
    "done": "✅ *Mission Accomplished!* All systems go, Mk finished the task!", 
    "wait": "⏳ *Hold your horses!* I’m working on it... (No, seriously, I’m not slacking off.", 
    "group": "*• Group Only* This feature is only for groups!", 
    "private": "*• Private Chat* This feature is only for private chats!", 
    "admin": "*• Admin Only* This feature is only for group admins!", 
    "adminbot": "*• Bot Admin* This feature can be used when the bot is an admin", 
    "owner": " 🚫 *Hold up!* This command is for the big boss only. You’re not the boss of me!", 
    "developer": "*• Developer Only* This feature is only for developers"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

//----------------------[ MALVIN-K ]----------------------//
// Mk is like a cat. It might ignore you, but it knows what you’re up to. 🐱
// It only responds when it feels like it. It’s the true master of mystery.
// Please proceed with caution. Our code doesn’t bite, but it might give you an awkward look.
// Malvin? If you’ve found this, you’ve unlocked a secret... but only if you truly understand it.
