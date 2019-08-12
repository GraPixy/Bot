const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nieznaleziono użytkownika!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Zgłoszenia")
    .setColor("#15f153")
    .addField("Zgłoszony użytkownik", `${rUser} z ID: ${rUser.id}`)
    .addField("Zgłoszony przez", `${message.author} z ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Powód", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reporty");
    if(!reportschannel) return message.channel.send("Nie można znaleźć kanału zdarzeń.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
