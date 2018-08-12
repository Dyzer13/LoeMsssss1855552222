
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '--SA';
client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['--SAhelp','SPEED ART'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});

client.on('message', message => {
    if (message.content.startsWith("--SAhelp")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **--SArole** ' ,' **To Create a Role --SArole** ')
.addField('     **--SAtext**  ' ,' **To Create Room Chat --SAtext** ')
.addField('     **--SAvoice** ' , '**To Create Room Voice --SAvoice **') 
.addField('     **--SAavater** ' , '**To Look To Your Profile Pictuer --SAavater**') 
.addField('     **--SAserver** ' , '**To Look a EveryThing in server Do --SAserver**') 
.addField('     **--SAping** ' , '**To Look a Ping Bot Do --SAping **') 
.addField('     **--SAroll** ' , '**Make a giveaways with number --SAroll <number> **') 
.addField('     **--SAban** ' , '**To Banned Some one Do --SAban @<namehere> **') 
.addField('     **--SAunban** ' , '**To unBanned Some one Do --SAban @<namehere> **') 
.addField('     **--SAkick** ' , '**To kick some one Do  --SAkick @<namehere> **') 
.addField('     **--SAbc** ' , '**To Broadcast Somting Do --SAbc **') 
.addField('     **--SAmutevoice** ' , '**To Mute memeber  --SAmutevoice **') 
.addField('     **--SAunmutevoice** ' , '**To unMute memeber  --SAmutevoice **') 
.addField('     **--SAunmutevoice** ' , '**To unMute memeber  --SAmutevoice **') 
.addField('     **--SAdeafen** ' , '**To Deafen memeber  --SAdeafen **') 
.addField('     **--SAundeafen** ' , '**To unDeafen memeber  --SAundeafen **') 
.addField('     **--SAsetvoice** ' , '**To Make room voice to look number online in all room --SAsetvoice **')
.addField('     **--SAsuggest** ' , '**to make suggest do --SAsuggest **')
.addField('     **--SATOP**' ,'**To look Your inviter list --SATOP **')
.addField('     **--SAwarn**' ,'**To Warn Some one Do --SAwarn **')


.setColor('#24efbd')
message.channel.sendEmbed(embed);
}
});

client.on('message', msg => { 
    if (msg.content.startsWith(`--SAwarn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب ويكون مقنع')
      if (msg.guild.channels.find('name', 'warns')) {
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار ***: ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
     *** `)
      }
    }
})

client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let coins = require("./coins.json");
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#5074b3")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
});

client.on('message', message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = '!!';
    let coins = require("./coins.json");
    
if(cmd === `${prefix}coins`) {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
}
});

client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("471788143637430273").send(yumz)
            }
});

client.on('message', message => {
    if (message.content.startsWith("--SAinv")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  اتيت ب     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    **`))
         
    }
});

client.on('message' , message => {    
    if (message.author.bot) return;
    if (message.content.startsWith("--SAcontact")) {
    if (!message.channel.guild) return;
    
    
    
    let args = message.content.split(" ").slice(1).join(" ");
    
    
    
    client.users.get("الي دي حق صاحب البوت").send(
        "\n" + "**" + "● السيرفر :" + "**" +
        "\n" + "**" + "» " + message.guild.name + "**" +
        "\n" + "**" + " ● المرسل : " + "**" +
        "\n" + "**" + "» " + message.author.tag + "**" +
        "\n" + "**" + " ● الرسالة : " + "**" +
        "\n" + "**" + args + "**")
    
    let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
         .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
         .setThumbnail(message.author.avatarURL)
         .setFooter("By : Elmusaui_GK and SpeedMC")
                                                    
    
    message.channel.send(embed);
    
    
    }
        
    });
    

const devs = ['471788143637430273' , 'ايدي اونر البوث الثاني' , '' , ''];
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith('name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح ?**");
} else
if (message.content.startsWith('pictuer')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});


client.on('message' , najzx => {
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith('--SAunban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
    }
  });


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تنشر",
        color: 0x06DF00,
        description: "يمنع النشر في هذا السيرفر",
        footer: {
          text: "SpeedArt"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
}); 


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('Fuck you ')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "SpeedArt"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 

///all Reghit Resverd 2018/2019 DyzerYT

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '--SA';

if(cmd === `${prefix}suggest`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED);
}
///all Reghit Resverd 2018/2019 DyzerYT

});


client.on('message',async message => {
    if(message.content.startsWith("--SAsetvoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });///all Reghit Resverd 2018/2019 DyzerYT
      setInterval(() => {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });


client.on('message',message =>{
    if(message.content.startsWith('--SATOP')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/OM00xyh.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

  client.on('message', message => {
    if(message.content.startsWith('--SAmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(true);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});

  client.on('message', message => {
    if(message.content.startsWith('--SAunmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(false);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});
///all Reghit Resverd 2018/2019 DyzerYT

  client.on('message', message => {
    if(message.content.startsWith('--SAdeafen')) {
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply('**يجب عليك المنشن اولاّ**❌').catch(console.error);
  }
  if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
    return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**❌').catch(console.error);
  }
 
  const deafenMember = (member) => {
    if (!member || !member.voiceChannel) return;
    if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
    member.setDeaf(true).catch(console.error);
    if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **❌ ").then(m => m.delete(5000));
  };
 
  message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
  message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
    }
    
});


  client.on('message', async message =>{
    if(message.content.startsWith('--SAundeafen')) {
   
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply('**يجب عليك المنشن اولاّ**❌').catch(console.error);
  }
  if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
    return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**❌ ').catch(console.error);
    if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **❌ ").then(m => m.delete(5000));
  }
   
  const undeafenMember = (member) => {
    if (!member || !member.voiceChannel) return;
    if (!member.serverDeaf) return message.channel.send(`${member} `);
    member.setDeaf(false).catch(console.error);
  };
   
  message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
  message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
  }
  });



client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('*** WELCOME TO SERVER DYZERYT***')
.setThumbnail(member.avatarURL)
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`Memeber Exit Server `)
    .setDescription(`GOOD BYE ....`)
    .addField(':bust_in_silhouette:   In Server Now',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`SpeedArt`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});


client.on("message", message => {

    if (message.content.startsWith("--SAbc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});

client.on('message', message => {
    if (message.content.startsWith("--SAban")) {
        var mention = message.mentions.members.first();
        if(!mention) return message.channel.send("يجب منشن العضو");
    
        mention.ban("By: " + message.author.tag);
        
        message.channel.send("تم أعطاء باند الى : " + mention.tag);
    };
    });

    client.on('message', message => {
        if (message.content.startsWith("--SAkick")) {
            var mention = message.mentions.members.first();
            if(!mention) return message.channel.send("يجب منشن العضو");
        
            mention.kick("By: " + message.author.tag);
            
            message.channel.send("تم أعطاء كيك الى : " + mention.tag);
        };
        });

client.on('message', function(message) {
    if(message.content.startsWith('--SAroll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith("--SAping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith ('--SAserver')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
    if (message.content.startsWith("--SAavater")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "role")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'Owner',
  color: '#ef2424',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ 
    name: 'Manager',
    color: '#efb324',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ 
    name: 'Prince',
    color: '#24efaa',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({
    name: 'Admin',
    color: '#efed24',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})///all Reghit Resverd 2018/2019 DyzerYT
message.guild.createRole({ 
    name: 'Permiume',
    color: '#7aef24',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})///all Reghit Resverd 2018/2019 DyzerYT
message.guild.createRole({ 
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_VAD', 'ADD_REACTIONS']
})///all Reghit Resverd 2018/2019 DyzerYT
message.channel.send('**Rule Was Succsesfluy Created**') 
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "text")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('☄⚡️rules', 'text')
	 message.guild.createChannel('☄👋welcome', 'text') 
	 message.guild.createChannel('☄🎉giveaway', 'text') 
     message.guild.createChannel('☄🎀shop', 'text')
     message.guild.createChannel('☄📝chat', 'text')

///all Reghit Resverd 2018/2019 DyzerYT



message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});
///all Reghit Resverd 2018/2019 DyzerYT

client.on('message', message => {
    if (message.content.startsWith(prefix + "voice")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('☄🎵Music', 'voice') 
message.guild.createChannel('☄🔉Voice', 'voice')
message.guild.createChannel('☄🃏GAMES', 'voice')
message.guild.createChannel('☄🔄HELP!', 'voice')
message.guild.createChannel('☄💤AFK', 'voice')

///all Reghit Resverd 2018/2019 DyzerYT


message.channel.sendMessage('**Channel Was Succsesfluy Created**')
.catch(console.error);
    }
});

client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('477548562541183026').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
});

client.on('message', message => { 
    if (message.content.startsWith('--SArole')) {

        const Rank = message.guild.roles.map(e => e.toString()).join(" ");

        const RankList = new Discord.RichEmbed()
            .setTitle('➠ Roles.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(RankList) 
    }
});

///all Reghit Resverd 2018/2019 DyzerYT
client.login(process.env.BOT_TOKEN);
