module.exports = {
    name: 'owners',
    description: "list of all of the owners socials",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle('Earth’s Contemporary Group Owners')
        
        .addFields(
            {name: 'conn9r', value: 'Instagram:https://www.instagram.com/conn9r \‎‎‎‎‎‎Twitter:https://twitter.com/conn9r'},
            {name: 'tjohnatan', value: 'Instagram:https://www.instagram.com/tjohnatan \‎Twitter:https://twitter.com/t_johnatan'},
            {name: 'idiort', value: 'Instagram:https://www.instagram.com/pradaproblem \‎Twitter:https://twitter.com/idiorttt'},

        )

        .setImage('https://cdn.discordapp.com/attachments/411566888846491648/850091217118953472/kierandiscord.jpg')
        .setFooter('Check out their work')

        message.channel.send(newEmbed);
    }
}
