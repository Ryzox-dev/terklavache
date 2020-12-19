const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Commandes :')
        .setDescription(`**Fun**
        \`t!terk\` - la :cow2:
        \`t!69\` - la Trick
        \`t!twilight\` - la femme de Ryzox
        \`t!ryzox\` - le mari de Twilight
        \`t!say\` - [phrase]

        **Info**        
        \`t!reglement\` - Affiche le règlement du serveur
        \`t!help\` - Affiche les commandes et ses informations
        \`t!\` = prefix

        **Moderation**
        \`t!clear\` - [nombre]
        \`t!ban\` - [membre]
        \`t!kick\` - [membre]
        \`t!8ball\` - [question]`)
        .setColor('RANDOM')
        .setImage('https://cdn.discordapp.com/attachments/778725690606485524/780019941067063316/b5f201a2f791dde7b6faa6af71cef781_1.gif')
        .setFooter('Copyright by Akuma.', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif')
        .setTimestamp())
    },
    name: 'help'
}    