const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vérification :')
        .setDescription(`Clique sur la réaction ci-dessous pour avoir accès à l'intégralité du serveur.`)
        .setColor('#ff0000')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/782532978135400468/c0f7e981e76a4c09a8c5d84a14dc0dd4_1.gif')
        .setFooter('Copyright by Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif'))
    },
    name: 'vérification'
}    