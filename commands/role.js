const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Rôles :')
        .setDescription(`**`)
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/782585751249354752/images_4.jpg')
        .setFooter('Cordialement, l\'équipe Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif')
        .setURL('https://www.youtube.com/watch?v=7pDDuroFBGM'))
    },
    name: 'roles'
}    