const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {
  if(cmd == `${prefix}serverinfo`){
    let sicon = message.guild.iconURl;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Serveri informatsioon")
    .setColor("#42a1f4")
    .setThumbnail(sicon)
    .addField("Serveri nimi", message.guild.name)
    .addField("Loodud", message.guild.createdAt)
    .addField("Sina liitusid", message.member.joinedAt)
    .addField("Liikmeid kokku", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
module.exports.help = {
  name: "serverinfo"
}
