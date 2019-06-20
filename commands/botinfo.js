const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Boti informatsioon")
.setColor("#42a1f4")
.setThumbnail(bicon)
.addField("Boti nimi", bot.user.username)
.addField("Loodud", bot.user.createdAt)

return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
