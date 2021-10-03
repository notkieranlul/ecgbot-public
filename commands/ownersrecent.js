module.exports = {
    name: 'ownersrecent',
    description: "shows all the owners recent posts in one command",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle("Owners Recent Posts")

        .addFields(
            {name: 'concisive', value: '‏‏‎Armani For @EyecraveLa By Me'},
            {name: 'https://www.instagram.com/p/CP1cbuzp7wr', value: '\u200B'},
            {name: 'conn9r', value: '‏‏‎‏‏‎CANDY MOUNTAIN CLIMBER‎'},
            {name: '‏‏‎‏‏‎https://www.instagram.com/p/CPlx81ys6KX', value: '‏‏‎‏‏‎\u200B‎‎'},
            {name: 'tjohnatan', value: '‏‏‎Weekend experiment with @ironnyxavier'},
            {name: "https://www.instagram.com/p/CP3YsVenHfx", value: '\u200B'},
            {name: 'idiort', value: '‏‏‎‏‏‎margiela waist coat : my art'},
            {name: "https://twitter.com/idiorttt/status/1402312181241106436/photo/1", value: '‏‏‎‏‏‎\u200B'},
        )

        .setImage('https://cdn.discordapp.com/attachments/411566888846491648/850091217118953472/kierandiscord.jpg')
        .setFooter('Check out their posts')

        message.channel.send(newEmbed);
    }
}