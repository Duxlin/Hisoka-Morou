/**
   * Create By Kanambp.
   * Contact Me on https://wa.me/254114148625
   * Follow https://github.com/Kanambp
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['2347082252014']
global.premium = ['2347082252014']
global.packname = 'QUADHIR Wabot'
global.author = 'DUX'
global.sessionName = 'quadhir'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Special features admin group!',
    botAdmin: 'The Bot must be an Admin first!',
    owner: 'Special Owner Bot Features',
    group: 'Features used Only for Group!',
    private: 'Features used only for Private Chat!',
    bot: 'Special features of Bot Number Users',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Been Exhausted, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
