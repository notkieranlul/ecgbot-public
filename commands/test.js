module.exports = {
    name: 'test',
    description: "this is the test command",
    execute(message, args){
        message.channel.send('Test Complete. I am online and ready!');
    }
}