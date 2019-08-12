const Discord = require("discord.js");
module.exports.run = async(bot, message, args, msg) => {

    let sicon = message.guild.name;
let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(sicon)
    .setTimestamp()
    if (!message.member.roles.find(r => r.name === "root")) return message.channel.send(embeda);
     //if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("❌ Błąd | Nie posiadasz roli  ``Administracja``");//  

          const tekst = args.join(' '); //argument oddzielony spacją
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia"); // tutaj jak nic nie wpisze sie to bot pisze:
          let reportEmbed = new Discord.RichEmbed() // tutaj tabelka sie tworzy
            .setTitle("📝Zmiany Serwera") // tytuł
            .setColor(`RANDOM`) // kolor
            .addField("Opis Devloga", tekst)
            .setFooter(sicon) // tutaj footer (podspodem)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() // tutaj data xd
            .setFooter(`Devlog`)
             
            message.delete().catch(O_o=>{});
            var generalChannel = bot.channels.get("610506850248425482")
            generalChannel.send(reportEmbed);; // zmien id kanalu na twoje gdzie bedzie uzywana komenda
        
            return;        
    }
    
    
    module.exports.help = {
    
      name:"devlog"
    
    }



















//const Discord = require('discord.js');

//exports.run = async (client, message, args) => {
//
 //   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You must specify the number of text to delete');
  //  if(!args[0]) return message.channel.send('Musisz uwzglednic liczbe wiadomosci');
//  message.channel.bulkDelete(args[0]).then(() => { 
 //       message.channel.send(`:pencil2: ${args[0]} Wiadomosci zostaly usuniete`).then(msg => msg.delete(5000));
 //   });

//} 
   
























///exports.run = (client, message, args, tools)

//if (isNaN(args[0])) return message.channel.send('**Prosze podaj prawidlowa ilosc komentarzy do usuniecia');

////if (args[0] > 100) return message.channel.send('**Prosze podaj liczbe mniejsza niz 101**');

//message.channel.bulkDelete(args[0])
 // .then( messages => message.channel.send(`Prawidlowo usunieto \`${messages.size}/${args[0]}\` wiaadomosci**`).then( msg
  //  => msg.delete({ timeout: 10000 })))

    //.catch( error => message.channel.send(`**BLĄD!**`));