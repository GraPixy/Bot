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
    
          const tekst = args.join(' '); //argument oddzielony spacją
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia"); // tutaj jak nic nie wpisze sie to bot pisze:
          let ogl = new Discord.RichEmbed() // tutaj tabelka sie tworzy
            .setTitle("📋Ogłoszenie") // tytuł
            .setColor(`RANDOM`) // kolor
            .addField("Autor Ogłoszenia", `${message.author}`)
            .addField("Opis Ogłoszenia", tekst)
            .setFooter(sicon) // tutaj footer (podspodem)
            .setThumbnail(message.guild.iconURL)
            .setTimestamp() // tutaj data xd
             
            message.delete().catch(O_o=>{});
            message.guild.channels.get(`610498500047798272`).sendMessage(ogl);
        
            return;        
    }
    
    
    module.exports.help = {
    
      name:"ogl"
    
    }