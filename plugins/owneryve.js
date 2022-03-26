let handler = function (m) {
	this.sendContact(m.chat, '6285601142988', 'Owner Ozawa :)', m)
}

handler.customPrefix = ['🍭Owner Ozawabot'] 
handler.command = new RegExp

module.exports = handler