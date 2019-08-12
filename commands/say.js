const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(``)
    .setTimestamp()
    if (!message.member.roles.find(r => r.name === "root")) return message.channel.send(embeda);
        let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);


}

module.exports.help = {
    name: "say"
}