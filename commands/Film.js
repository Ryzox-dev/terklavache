const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Darkest Minds :')
        .setDescription(`Rendez-vous samedi à 17h00 pour le film **Darkest Minds** dans le salon **#🎥・Film**. Pensez à ramener des Pop-corn :popcorn: !`)
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/787059810566799360/images_5.jpg')
        .setFooter('Cordialement, l\'équipe Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif')
        .setURL('https://www.youtube.com/watch?v=AUapkeKCo7M'))
    },
    name: 'film'
}    