let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan Ozawa BOT

Kebijakan Privasi
1. ozawa tidak akan merekam data riwayat chat user.
2. ozawa tidak akan menyebarkan nomor users.
3. ozawa tidak akan menyimpan media yang dikirimkan oleh users.
4. ozawa tidak akan menyalah gunakan data data users.
5. Owner ozawa berhak melihat data riwayat chat users.
6. Owner ozawa berhak melihat status users.
7. Owner ozawa dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan ozawa Bot
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Syarat Ketentuan ozawa Bot
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2.  dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ozawa *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. ozawa akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ozawa bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

SC : Tq
-Raditya

Peraturan: 1 Oktober 2021
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
