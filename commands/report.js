const Discord = require("discord.js");

module.exports.run = async ( bot, message, args) => {
  //!report @user reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Ei leia kasutajat.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Raporteeringud")
    .setColor("#960707")
    .addField("Raporteeritud Kasutaja", `${rUser} ID: ${rUser.id}`)
    .addField("Kasutaja Raporteeris", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Aeg", message.createdAt)
    .addField("Põhjus", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Ei leia kanalit.");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    return;
  }

module.exports.help = {
  name: "report"
}
