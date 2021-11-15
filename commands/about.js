module.exports = {
    name: 'about',
    description: "this is the about command",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle("About")
        
        .addFields(
            {name: "Developed by kieranlul for Earth’s Contemporary Group Discord using Discord.js", value: '‏‏‎‏‏‎‏‏‎ ‎'},
            {name: "Bot Support", value: '‏‏‎‏‏‎https://discord.gg/VWsRZRpe5Q'},
        )

        .setImage('https://data.whicdn.com/images/237615525/original.gif')
        .setFooter('a pop tart is just a fruit ravioli :)')

        message.channel.send(newEmbed);
    }
}
