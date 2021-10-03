module.exports = {
    name: 'podcast',
    description: "this shouts out the spotify podcast!",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle('ECG Sunday Club Spotify Podcast')
        .setURL('https://open.spotify.com/show/6I4Da2uFhsqm2JNHrW8mJZ')
        
        .addFields(
            {name: 'Check Out The Spotify Podcast', value: 'Click the link above to go to the ECG Sunday Club Spotify Podcast. Here you will find the full recordings of past events.'},
            {name: 'Latest Episode', value: 'To follow your intuition! with Adam Small, Justin Kaminuma and Deeper1.3'}
        )

        .setImage('https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif?cid=790b76119d5c66b0001311107c960356fddd9c4831296884&rid=giphy.gif&ct=g')
        .setFooter('Make sure to give the podcast a follow')

        message.channel.send(newEmbed);
    }
}