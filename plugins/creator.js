const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "岽忈础纱岽囀�",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:mursid-bot;Owner;;;\nFN:饾悓饾悢饾悜饾悞饾悎饾悆 饾悂饾悗饾悡馃\nitem1.TEL;waid=6289612698583:6289612698583\nitem1.X-ABLabel:馃搷 Owner\nitem2.EMAIL;type=INTERNET:akunsesi021@gmail.com\nitem2.X-ABLabel:馃拰 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:馃摦 Rest Api\nitem4.ADR:;;馃嚠馃嚛 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:馃實 Region | Indonesia 馃嚠馃嚛\nitem5.X-ABLabel:鈹�鈹�鈹�鈹�鈹�鈹�鈹�[ 饾悓饾悢饾悜饾悞饾悎饾悆 饾悂饾悗饾悡 ]鈹�鈹�鈹�鈹�鈹�鈹�鈹�\nEND:VCARD"
  }, {
    "displayName": "岽忈础纱岽囀�",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Run;Jasa;;;\nFN:Kelvin\nitem1.TEL;waid=6285601142988:6285601142988\nitem1.X-ABLabel:馃搷 Owner\nitem2.EMAIL;type=INTERNET:danzd61060@gmail.com\nitem2.X-ABLabel:馃拰 Email\nitem3.URL:saweria.co/mursid25/\nitem3.X-ABLabel:馃摦 Rest Api\nitem4.ADR:;;馃嚠馃嚛 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:馃實 Region | Pekalongan 馃嚠馃嚛\nitem5.X-ABLabel:鈹�鈹�鈹�鈹�鈹�鈹�鈹�[ 饾悓饾悢饾悜饾悞饾悎饾悆 饾悂饾悗饾悡 ]鈹�鈹�鈹�鈹�鈹�鈹�鈹�\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
