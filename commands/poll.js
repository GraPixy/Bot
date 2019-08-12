const Discord = require("discord.js");

module.exports.run = async (client, message, args, level) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Zły format! Poprawny format:** `!poll Opis`')

  let sicon = message.guild.name;
  let embeda = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setThumbnail(message.author.avatarURL)
      .addField(`${message.member.displayName}`, `Odmowa dostępu`)
      .setFooter(sicon)
      .setTimestamp()
      if (!message.member.roles.find(r => r.name === "root")) return message.channel.send(embeda);
      
  const embed = new Discord.RichEmbed()
  .setTitle(":tada:Głosowanie!")
  .setColor("#008000")
  .setDescription(`GŁOSOWANIE NA: ${question}  

👍 - Tak  

👎 - Nie`)
.setFooter(`Glosowanie`)
  .setTimestamp()

  message.channel.send({embed})
  .then(msg => {    
    msg.react('❌')
    msg.react('✅')
  })
  .catch(() => console.error('Emoji źle załadowane!'));

}
module.exports.help = {
  name:"poll"
}