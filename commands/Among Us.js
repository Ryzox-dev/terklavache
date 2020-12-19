const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Among Us :')
        .setDescription(`Soirée Among Us, ca se passe maintenant dans le salon vocale @🔪・Among Us !`)
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/779399634178539531/tenor_64.gif')
        .setFooter('Cordialement, l\'équipe Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif'))
    },
    name: 'amongus'
}    