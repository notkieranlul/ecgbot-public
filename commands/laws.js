module.exports = {
    name: 'laws',
    description: "shows ECGs discord server rules",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle("Earth’s Contemporary Group Rules")
        
        .addFields(
            {name: "1", value: 'Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated.'},
            {name: "2", value: 'No spam or self-promotion (server invites, advertisements, etc) without permission from a staff member. This includes DMing fellow members.'},
            {name: "3", value: 'If you see something against the rules or something that makes you feel unsafe, let staff know. We want this server to be a welcoming space!'},
            {name: "4", value: 'No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.'},
            {name: "5", value: "No usage or posting of ANYONE'S work unless permission was given by all parties."},
            {name: "6", value: "No Dick Eating We're All Human!"},
        )

        .setImage('https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif?cid=790b76119d5c66b0001311107c960356fddd9c4831296884&rid=giphy.gif&ct=g')
        .setFooter("ECG's Rules")

        message.channel.send(newEmbed);
    }
}