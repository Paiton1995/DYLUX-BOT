import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['254736958034', '*KHALID-TECHNOLOGIES*', true],
  ['923470027813'], 
  ['254793618247'] 
] //Numeros de owner 

global.mods = ['254793618247'] 
global.prems = ['254793618247', '923470027813', '254736958034']
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
  'https://api-fgmods.ddns.net': 'TU-APIKEY' //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = 'KHALID-tech' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/hi_niccur\n' 
global.dygp = 'https://github.com/Khalid-niccur'
global.fgsc = 'https://github.com/Khalid-niccur/DYLUX-BOT' 
global.fgyt = 'https://t.me/dextrousmodsKENYA'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '💓ℙ𝕃𝔼𝔸𝕊𝔼 𝔸𝕎𝔸𝕀𝕋 ℂ𝕆𝕄ℝ𝔸𝔻𝔼⌛ \n*▰▰▰▱▱▱▱▱*'
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
