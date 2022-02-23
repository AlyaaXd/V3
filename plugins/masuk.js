function handler(m) {
    m.reply('Konfirmasi ke owner untuk informasi lebih lanjut.')
    this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
    this.sendContact(m.chat, '6289505165400@s.whatsapp.net', 'AlyaaXzy', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
  
