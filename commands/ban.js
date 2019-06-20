const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Ei leia kasutajat.");
  let reason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Puuduvad vastavad õigused.");
  if(!kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Seda isikut ei saa kickida.");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Bannid")
  .setColor("#960707")
  .addField("Bannitud Kasutaja", `${bUser} ID: ${bUser.id}`)
  .addField("Kasutaja Bannis", `<@${message.author}> ID: ${message.author.id}`)
  .addField("Bannitud Kanalis", message.channel)
  .addField("Aeg", message.createdAt)
  .addField("Põhjus", bReason);

  let banChannel = message.guild.channels.find(`name`, "incidents");
  if(!banChannel) return message.channel.send("Ei leia kanalit.");

  message.guild.member(bUser).kick(bReason);
  banChannel.send(banEmbed);

  return;
}
module.exports.help = {
  name: "botinfo"
}
