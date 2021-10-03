module.exports = {
    name: 'help',
    description: "shows ECG bot help page",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle("ECG Bot Help Page")
        
        .addFields(
            {name: "%podcast", value: '‏‏‎‏‏‎This shows the ECG weekly spotlight artist'},
            {name: "%owners", value: '‏‏‎‏‏‎This shows a list of all the owners of the ECG Discord and their socials'},
            {name: "%podcast", value: '‏‏‎‏‏‎This shows the latest ECG event podcast that is on Spotify'},
            {name: "%ownersrecent", value: '‏‏‎‏‏‎This command allows you to see the recent posts of the ECG owners'},
        )

        .setImage('https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif?cid=790b76119d5c66b0001311107c960356fddd9c4831296884&rid=giphy.gif&ct=g')
        .setFooter('Having Issues? Use the bug-reports channel or create a support ticket')

        message.channel.send(newEmbed);
    }
}