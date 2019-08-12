const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.name;
  let sicon2 = message.guild.iconURL;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error 204 Brak permisji");
    let serverembed = new Discord.RichEmbed()
    .setTitle("Komendy Administracyjne (Potrzebna ranga ROOT)")
    .setColor("RANDOM")
    .addField(`!mute`,` @NICK 1s/m/d - nadaje komuś mute`)
    .addField(`!poll`,` TRESC - robi głosowanie na chacie`)
    .addField(`!ogl`,` TRESC - robi ogłoszenie na kanał #ogłoszenia`)
    .addField(`!devlog`,` TRESC - robi ogłoszenie na kanale #devlog`)
    .addField(`!kick`,` @NICK POWÓD - nadaje komuś kicka`)
    .addField(`!ban`,` @NICK POWÓD - nadaje komuś bana`)
    .addField(`!clear`,` ILOŚĆ - usuwa wiadomości na kanale`)
    .addField(`!say`,` TRESC - pisze jako bot`)
    .addField(`!hex`, `HEX - Hex (Tylko z rangą root)`)
    .setThumbnail(sicon2)
    .setFooter(sicon)
    .setTimestamp()

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"helpadmin"
}