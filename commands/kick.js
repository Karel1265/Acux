const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Ei leia kasutajat.");
  let reason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Puuduvad vastavad õigused.");
  if(!kUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Seda isikut ei saa kickida.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kickid")
  .setColor("#960707")
  .addField("Kickitud Kasutaja", `${kUser} ID: ${kUser.id}`)
  .addField("Kasutaja Kickis", `<@${message.author}> ID: ${message.author.id}`)
  .addField("Kickitud Kanalis", message.channel)
  .addField("Aeg", message.createdAt)
  .addField("Põhjus", kReason);

  let kickChannel = message.guild.channels.find(`name`, "incidents");
  if(!kickChannel) return message.channel.send("Ei leia kanalit.");

  message.guild.member(kUser).kick(kReason)
  kickChannel.send(kickEmbed);

  return;
}
module.exports.help = {
  name: "kick"
}
