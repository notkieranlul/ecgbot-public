module.exports = {
    name: 'spotlight',
    description: "shows ECGs weekly spotlight artist",
    execute(message, args, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9ABAB9')
        .setTitle("SPECIAL ECG SPOTLIGHT COMEBACK")
        
        .addFields(
            {name: "spike stein", value: 'Artist 1'},
            {name: "egobaby.6000", value: 'Artist 2'},
            {name: "austindzns", value: 'Artist 3'},
            {name: "kepler62f.vision", value: 'Artist 4'},
            {name: "roblukai", value: 'Artist 5'},
        )

        .setImage('https://media4.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif?cid=790b76119d5c66b0001311107c960356fddd9c4831296884&rid=giphy.gif&ct=g')
        .setFooter("SPECIAL ECG SPOTLIGHT COMEBACK")


        message.channel.send(newEmbed);
        message.channel.send("**Piece By spike stein**", {files: ["https://cdn.discordapp.com/attachments/850845989652922438/877353669081833472/2020-12-14_121401.jpg"]});
        message.channel.send("**Piece By egobaby.6000**", {files: ["https://cdn.discordapp.com/attachments/850845989652922438/874487953634771014/image0.jpg"]});
        message.channel.send("**Piece By austindzns**", {files: ["https://cdn.discordapp.com/attachments/850845989652922438/874369716267941908/image0.jpg"]});
        message.channel.send("**Piece By kepler62f.vision**", {files: ["https://cdn.discordapp.com/attachments/850845989652922438/879445599534063686/image0.jpg"]});
        message.channel.send("**Piece By roblukai**", {files: ["https://cdn.discordapp.com/attachments/850845989652922438/874803933778935808/image0.jpg"]});

    
    }
}

