const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`:frame_photo: **Avatarınız** :frame_photo:`)
.setImage(`${message.author.avatarURL} `)
.setColor('RANDOM'));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatarım',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
