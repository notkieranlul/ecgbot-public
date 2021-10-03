const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "%"

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ECG Caretaker is online!')
    client.user.setActivity("ECG | %spotlight | %help | %about", {
        type: "WATCHING",
      });
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'owners'){
        client.commands.get('owners').execute(message, args, Discord);
    }else if (command == 'podcast'){
        client.commands.get('podcast').execute(message, args, Discord);
    }else if (command == 'recentconn9r'){
        client.commands.get('recentconn9r').execute(message, args, Discord);
    }else if (command == 'recentconcisive'){
        client.commands.get('recentconcisive').execute(message, args, Discord);
    }else if (command == 'recenttjohnatan'){
        client.commands.get('recenttjohnatan').execute(message, args, Discord);
    }else if (command == 'recentidiort'){
        client.commands.get('recentidiort').execute(message, args, Discord);
    }else if (command == 'about'){
        client.commands.get('about').execute(message, args, Discord);
    }else if (command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if (command == 'test'){
        client.commands.get('test').execute(message, args);
    }else if (command == 'spotlight'){
        client.commands.get('spotlight').execute(message, args, Discord);
    }else if (command == 'submit'){
        client.commands.get('submit').execute(message, args);
    }else if (command == 'ownersrecent'){
        client.commands.get('ownersrecent').execute(message, args, Discord);
    }else if (command == 'laws'){
        client.commands.get('laws').execute(message, args, Discord);
    }



    
});

