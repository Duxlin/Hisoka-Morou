/**
   * Create By Topan|Store.
   * Contact Me on wa.me/62883833655764
   * Follow https://www.youtube.com/@Topan_offcial
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': 'Your Key',
}

// Other
global.owner = ['2347082252014']
global.premium = ['2347082252014']
global.packname = 'Dux|Bot'
global.author = 'Dux|Bot'
global.sessionName = 'Dux'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Feature!',
    botAdmin: 'Make The Bot Admin First !',
    owner: 'Bot Owner Special Features',
    group: 'This Feature Can Only Be Used In A Group!',
    private: 'This Feature Can Only Be Used In Private Chat!',
    bot: 'Bot Number User Features,
    wait: 'Loading...',
    endLimit: 'your Limit has expired, Wait for 12 hours to reset',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
