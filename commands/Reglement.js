const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Règlement :')
        .setDescription(`1. **Interdiction** de faire sa pub sur le serveur ou grace au serveur.
        2. **Respectez** le **tos** de discord.
        https://discord.com/terms`)
        .setColor('#ff0000')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/778725880289165333/tumblr_3b85c368336c51fcc760a58af94a6fc9_84e050a1_540.gifnod')
        .setFooter('Copyright by Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif'))
    },
    name: 'reglement'
}    