import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.nomorbot = '237676445489' //Nomor Bot
global.owner = [
  ['237676445489', '✰𝐃𝐄𝐍𝐈𝐒✰', true],
  ['237676445489'], '✰𝐃𝐄𝐍𝐈𝐒✰', true],
  ['237676445489', '✰𝐃𝐄𝐍𝐈𝐒✰', true],
] //Numeros

global.mods = ['237676445489'] 
global.prems = ['237676445489', '237676445489', '237676445489']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = '✰𝐃𝐄𝐍𝐈𝐒✰' 
global.author = '✰𝐃𝐄𝐍𝐈𝐒✰' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff\n' 
global.dygp = 'https://github.com/Khalid-niccur/'
global.fgsc = 'https://github.com/Khalid-niccur/DYLUX-BOT' 
global.fgyt = 'https://t.co/3frSXMbUH2'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '💓𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗢𝗨𝗧𝗣𝗨𝗧 𝗖𝗢𝗠𝗥𝗔𝗗𝗘⌛ \n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
