  const express = require('express');

  const app = express();

  const prefix = "+"

  app.get('/', (req, res) => {
    res.send('gooo')
  });

  app.listen(3000, () => {
    console.log('the bot is WORK!');
  });


  const Discord = require("discord.js");
  const client = new Discord.Client();
  client.login("MTIwNTY0MTM1NjcxNDg0NDE3MA.GqmrZb.xAvOObNLbeKEU8gtqgvLFaOT-M_tw484S_CMY8"); ///توكن هنا

  client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`𝐆𝐀𝐍𝐆 𝐗 𝐂𝐇𝐄𝐀𝐓`, { type: "STREAMING" });
  });



  //خط تلقائي 
  client.on("message", async message => {

    if (message.guild.id != "1179388353049788496" ) return; 
    if (message.channel.id != "1179388947827269813") return;    
    if(message.author.id === client.user.id) return;
        if (message.author.send) {
      message.channel.send({files: ["https://cdn.discordapp.com/attachments/1145020936739897374/1210901883871297586/GangLine.gif?ex=65ec3f42&is=65d9ca42&hm=6163ecd180e03040bda4e08300587093aef4e846da84be2009a256f6f8eb81ac&"]});


    }  

  });


  /// امر الخط
  client.on('message', msg => {
    if (msg.content === 'line') {
      msg.delete();
      msg.reply({files: ["https://cdn.discordapp.com/attachments/1145020936739897374/1210901883871297586/GangLine.gif?ex=65ec3f42&is=65d9ca42&hm=6163ecd180e03040bda4e08300587093aef4e846da84be2009a256f6f8eb81ac&"]});

    }

  });




  client.on('message', message => {
      if (message.channel.id != '1179388947827269813') return;
      if (message.member.user.bot) return;
      message.react('<a:JSP69:1184941579752972389>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<:DjexoXcube:1205806393064685598>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<:1043136259767406652:1205806847055896586>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:emoji_20:1205915564485115965> ') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:funnyanimalscrazy:1205807509131104307>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:35:1205807476583301220> ') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<:52:1205807359772065802>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:Stfu:1184941604914593944>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:EVs_02catrageuwu:1205806576556834876>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<:unknown1:1205917172992581714>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<:Swimox:1205917302655160361>') ;
  }); 


  client.on('message', message => {
      if (message.channel.id != '1202726284141273150') return;
      if (message.member.user.bot) return;
      message.react('<a:JBF_actingSusNotMeOwO:1205807384623317023> ') ;
  }); 

  //react yt
  client.on('message', message => {
      if (message.channel.id != '1193343424619876362') return;
      if (message.member.user.bot) return;
      message.react('<a:emoji_4:1205807801784336384> ') ;
  }); 

  //react tik tok
  client.on('message', message => {
      if (message.channel.id != '1183104673180307616') return;
      if (message.member.user.bot) return;
      message.react('<a:emoji_5:1205807783031738378> ') ;
  }); 




  let rg = [
  "**ايش اسمك؟**",
  "**كم عمرك؟؟**",
  "**من فين انت؟؟**",
  "**ايش تسوي في الحياة؟ بعيدا عن الديسكورد**",
  "**كم صارلك داخل السيرفر؟؟**",
  "**هل عندك فكرة علي البرمجة؟**",
  "**ايش اختصاصك؟**",
  "**ايش تبي تصير في المستقبل؟**",
  "**هل تعطي الثقة في احد؟**",
  "**هل عندك فكرة علي مالك السيرفر؟**",
  "**كم صارلك في الديسكورد؟**",
  ]
  client.on("message", msg => {
    if (msg.content.startsWith(prefix + "qst")) {
      let rg1 = new Discord.MessageEmbed()
        .setDescription(rg[Math.floor(Math.random() * rg.length)] )

      msg.channel.send(rg1)
    }

  })





  //+setnick
  client.on("message", message => {
      if (message.content.startsWith(prefix + "setname")) {
        if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("ليس لديك إذن")
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username === args[1])
        if (!member) return message.reply(`**__اكتب كذا عشان يتغير : ${prefix}تغير @منشنه __**`)
        let nick = message.content.split(" ").slice(2).join(" ")
        let g = message.guild.members.cache.get(member.id)
        if (!nick) {
          g.setNickname(member.username)
        }
        g.setNickname(nick)
        const l = g.nickname || member.username
        let embed = new Discord.MessageEmbed()
          .setAuthor(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
          .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
          .setTitle("الاسم المستعار الجديد:")
          .addField(`الشخص الذي تم تغير اسمه`, `${member}`, true)
          .addField(`القديم:`, `**${l}**`, true)
          .addField(`الجديد:`, `**${nick}**`, true)


          .setFooter(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
          .setTimestamp()
        message.channel.send(embed)
      }
  })





  client.on('message', message => {
    if (message.content.startsWith(prefix + 'here')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return
      if (message.author.bot) return
      message.channel.send(`@here`)
  }
  })
  client.on('message', message => {
    if (message.content.startsWith(prefix + 'everyone')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return
      if (message.author.bot) return
      message.channel.send(`@everyone`)
  }
  })




  client.on("message", msg => {
      if (
        msg.content == prefix + "dice"
      ) {
        if (msg.author.bot) return;
        if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **لا يمكنك استخدام هذا الأمر في الخاص!**`).setFooter(`طلب بواسطة ${msg.author.tag}`).setTimestamp())

        var x = ["0", "0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",];// تقدر تضيف اكثر ان شاء الله لو مليون بس يكونو نفس الستايل
        var x3 = Math.floor(Math.random() * x.length);
        msg.channel.send(`${x[x3]}`)
      }
    })




  client.on('message', async message => {
      if (message.content.startsWith(prefix + 'block images')) {
          if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`** ليس لديك صلاحية لإستعمال الأمر ! 🙄 **`);
          let channel = message.mentions.channels.first();
          let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
          if (!channel) channel_find = message.channel
          if (!channel_find) return;
          channel_find.updateOverwrite(message.guild.id, {
              ATTACH_FILES: false
          });
          message.channel.send(`\n🌌 | **تم منع الصور بـ**<#${channel_find.id}>\n`);

      }
  });
  client.on('message', async message => {
      if (message.content.startsWith(prefix + 'allow images')) {
          if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`** ليس لديك صلاحية لإستعمال الأمر ! 🙄 **`);
          let channel = message.mentions.channels.first();
          let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
          if (!channel) channel_find = message.channel;
          if (!channel_find) return;
          channel_find.updateOverwrite(message.guild.id, {
              ATTACH_FILES: true
          });
          message.channel.send(`\n🌌 | **تم سماح الصور بـ **<#${channel_find.id}>\n`);
      }
  });





  const logmsg = "1207403224219390046" 
  client.on("messageDelete", message => {
  if (message.deleted == true){
       if (message.content.lenght == 0) return
  let embed = new Discord.MessageEmbed()
  .setTitle('Message Delete')
  .setDescription(`Message : ${message.content}\n \nBy : ${message.author}`)
  .setColor(`BLACK`)
  .setTimestamp()
  .setFooter(`Log messages | (name server) `)
  client.channels.cache.get(logmsg).send(embed)
     }
  })


  //rules 

  client.on('message', badboy => {
    if(badboy.content.startsWith(prefix + "rule")){
      if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

      var embed = new Discord.MessageEmbed()
      .setTitle(`قوانين سيرفر ${badboy.guild.name}`)
  .setDescription(`
  **- 𝐆𝐀𝐍𝐆 𝐗 𝐂𝐇𝐄𝐀𝐓 Rules :  
  English 

  1- Respect all server members and not harass them in any way 

  2- It is forbidden to insult and curse in all its forms 

  3- It is forbidden to buy or sell inside the server 

  4- It is forbidden to talk about hacking in all its forms 

  5- It is forbidden from physical organic materials, recharging (recharging gems -  codes - credit - nitro ...) 

  6- Avoid spam in chat rooms 

  7- It is forbidden to publish links to other servers in the public chat 

  8- Do not interfere in management decisions and do not assume the role of  supervisors 

  9- It is forbidden to ask for equal ranks 

  10- Any impersonation of the supervisors is prohibited, leading to permanent  expulsion from the server 

  11- It is forbidden to mention the names of other servers or the name of any other YouTuber in bad terms, as respect is a must 

  12- It is forbidden to trade inside the server in all its forms 

  13- A source of annoyance to the members 

  14- The accumulation of warnings leads to banning from the server 


  Arabic 

  1- احترام أعضاء السرفر جميعا و عدم مضايقتهم بأي شكل من الأشكال 

  2- ممنوع السب والشتم بجميع انواعه 

  3-ممنوع البيع و شراء داخل السيرفر 

  4- ممنوع الحديث عن الهكر بجميع اشكاله 

  5- ممنوع طلب اشياء مادية ومعنوية 

  6- تجنب السبام في الشات 

  7- ممنوع نشر روابط سرفرات اخرى في الشات العام 

  8- لا تتدخل في قرارات الإدارة ولا تتقمص دور المشرفين 

  9- ممنوع طلب الرتب تساويها 

  10-ممنوع أي انتحال لشخصية المشرفين المشرفين إلى الطرد الدائم من السيرفر 

  11- ممنوع ذكر أسامي سرفرات أخرى أو اسم اي يوتوبر آخر بالسوء فالإحترام واجب 

  12- ممنوع التجارة داخل السرفر بجميع أشكالها 

  13- مصدر إزعاج للأعضاء  **

  `)
  .setColor("PURPLE")

      .setThumbnail(badboy.guild.iconURL({dynamic: true}))
      badboy.channel.send(embed)
    }
  });



  //waren

  client.on('message', message => {

       if(message.content.startsWith(prefix + "waren")) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
   let args = message.content.split(" ").slice(1);

      var user = message.mentions.users.first();
      var reason = args.slice(1).join(' ');
      const embed = new Discord.MessageEmbed()
          .setColor('black')
          .setTimestamp();

      if (!user) {
          embed.addField("**لأرسال انذار عليك .. ** ", ` **منشن الشخص** `)
              .setTimestamp();
          return message.channel.send(embed);
      } if (!reason) {
          embed.addField("**لأرسال انذار عليك..**  ", `ارفق سبب الانذار مع الامر`)
          return message.channel.send(embed);
      }
      embed.addField(" تم ", ` **تم ارسال الانذار ✅️** `)
          .setTimestamp();
      message.channel.send(embed);
      const embed1 = new Discord.MessageEmbed()
          .setColor('#0083ff')
          .setTimestamp()
          .addField("لقد تم انذارك", `

            السبب : **${reason}**`)
          .setFooter(`
          انذار بواسطة ${message.author.tag}.`);
      user.send(embed1);
      message.delete();
  }
  });



  client.on('message', msg => {
    if (msg.content === 'hi') {
      msg.reply('hello bro');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.channel.send ('وعليكم السلام ورحمة الله وبركاته');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'panel') {
      msg.channel.send ('Contact  <@1144986830513639485> to purchase the painting');
  }
  });


  client.on('message', msg => {
    if (msg.content === 'اللوحة') {
      msg.channel.send ('تواصل مع <@1144986830513639485> من اجل شراء اللوحة');
  }
  });

  //ban

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith( prefix + 'ban')) {
          if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
        return message.reply("** ليس لديك إذن 'KICK_MEMBERS' **");
      if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
        return message.reply("** ليس لدي إذن 'KICK_MEMBERS' **");      

      const user = message.mentions.users.first();

      if (user) {

        const member = message.guild.member(user);

        if (member) {

          member
            .ban({
              reason: 'They were bad!',
            })
            .then(() => {

                          const embed = new Discord.MessageEmbed()
             .setColor("0F750E")
            .setTitle(` تم الحظر بنجاح`)
            message.channel.send(embed);
            })
            .catch(err => {

              message.reply('لم أتمكن من حظر العضو' );

              console.error(err);
            });
        } else {

          message.reply("هذا المستخدم ليس في هذا السيرفر");
        }
      } else {

        const embed = new Discord.MessageEmbed()
  .setColor("FF0000")
  .setTitle("`` لم تذكر المستخدم لحظره!`` ❌")
  message.channel.send(embed);
      }
    }
  });





  client.on("message",async message =>{
  if (message.content.startsWith(prefix + 'hide')){
  if (message.author.bot) return;
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.react('❌') 

  if (!message.channel.guild) return;
  message.channel.updateOverwrite(message.guild.id, {VIEW_CHANNEL: false})
  message.react('✅').catch(err => console.log(`No perms to react`))
  }
  })
  client.on("message",async message =>{
  if (message.content.startsWith(prefix + 'show')){
  if (message.author.bot) return;
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.react('❌') 
  if (!message.channel.guild) return;
  message.channel.updateOverwrite(message.guild.id, {VIEW_CHANNEL: true})
  message.react('✅').catch(err => console.log(`No perms to react`))
  }
  })




  //say

    client.on('message', msg => {
    if (msg.author.bot) return;
    let args = msg.content.split(" ").slice(1).join(" ")
    if (msg.content.startsWith(prefix + "قول")) {
      msg.delete(100);
      const embed = new Discord.MessageEmbed()
        .setColor(`purple`)
        .setDescription(args)
      msg.channel.send(embed)
    }
  });




  ///////////////////////
  ////////////
  ////_/_/




  client.on("message", (message) => {
    if (!message.guild || message.author.bot) return;
    const command = message.content.split(" ")[0];
    if (command == prefix + "server") {
      const text = message.guild.channels.cache.filter((r) => r.type === "text").size;// Made By: SLASH
      const voice = message.guild.channels.cache.filter((r) => r.type === "voice").size;
      const online = message.guild.members.cache.filter((m) => m.presence.status === "online").size;
      const idle = message.guild.members.cache.filter((m) => m.presence.status === "idle").size;
      const dnd = message.guild.members.cache.filter((m) => m.presence.status === "dnd").size;
      const embed = new Discord.MessageEmbed()// Made By: SLASH
        .setAuthor(message.guild.name, message.guild.iconURL({ format: "png", dynamic: true }))
        .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true }))// Made By: SLASH
        .setColor("black")// Made By: SLASH
        .addFields( // Made By: SLASH
          {name: `✨ Server Name`, value: `${message.guild.name}`, inline: false},
          {name: `👑 Owner`, value: `<@1150378180503404664>`, inline: false},
          {name: `🆔 Server ID`, value: `${message.guild.id}`, inline: false},
          {name: `📆 Created At`, value: `**<t:${parseInt(message.guild.createdAt / 1000)}:R> **`, inline: false},
          {name: `💼 Roles (${message.guild.roles.cache.size})`, value: `­-`, inline: false},
          {name: `👥 Members (${message.guild.memberCount})`, value: `**${online + idle + dnd}** Online 🟢\n**${message.guild.premiumSubscriptionCount.toString()}** Boosts ✨`, inline: false},
          {name: `💬 Rooms (${text + voice})`, value: `**${text}** Text 📄 | **${voice}** Voice 🎤`, inline: false}
        )// Made By: SLASH
        .setFooter(`Made By: 'Y12XZ4K`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
      message.channel.send(embed).catch((err) => { return; });// Made By: SLASH
    }
  });



  client.on("message", (message) => {
    if (!message.guild || message.author.bot) return;
    const args = message.content.split(" ");
    const command = args[0];
    let mem = message.mentions.members.first();
    if (command == prefix + "user") {
      if (args[1] && !args[1].includes("<@")) mem = message.guild.members.cache.get(args[1]); // Made By: SLASH
      if (!mem || !args[1]) {
        const embed = new Discord.MessageEmbed() // Made By: SLASH
          .setColor("black")// Made By: SLASH
          .addFields( 
            {name: `**🪪 User Name**`, value: message.author.username, inline: false},
            {name: `**🆔 User ID**`, value: message.author.id, inline: false},
            {name: `**✨ User Discriminator**`, value: message.author.discriminator, inline: false},
            {name: "**🛬 Joined Discord:**", value: `** <t:${parseInt(message.author.createdAt / 1000)}:R> **`, inline: false},
            {name: "**🛬 Joined Server:**", value: `** <t:${parseInt(message.guild.members.cache.get(message.author.id).joinedAt / 1000)}:R> **`, inline: false}
          )
          .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
          .setThumbnail(message.author.avatarURL({ dynamic: true })) // Made By: SLASH
          .setFooter(`Made By: Y12XZ4K  `, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
        message.reply(embed).catch((err) => { return; }); // Made By: SLASH
      } else {
        const embed = new Discord.MessageEmbed()// Made By: SLASH
          .setColor("purple")// Made By: SLASH
          .addFields( 
            {name: `**🪪 User Name**`, value: mem.user.username, inline: false},
            {name: `**🆔 User ID**`, value: mem.id, inline: false},
            {name: `**✨ User Discriminator**`, value: mem.user.discriminator, inline: false},
            {name: "**🛬 Joined Discord:**", value: `** <t:${parseInt(mem.user.createdAt / 1000)}:R> **`, inline: false},
            {name: "**🛬 Joined Server:**", value: `** <t:${parseInt(message.guild.members.cache.get(mem.id).joinedAt / 1000)}:R> **`, inline: false}
          )
          .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))// Made By: SLASH
          .setThumbnail(mem.user.avatarURL({ dynamic: true }))// Made By: SLASH
          .setFooter(`Made By: Y12XZ4K`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
        message.reply(embed).catch((err) => { return; });// Made By: SLASH
      }
    }
  });


  client.on("message", async(message) => {
    if (!message.guild || message.author.bot) return;
    const command = message.content.split(" ")[0];
    if (command == prefix + "ping") {
      const msg = Date.now() - message.createdTimestamp; // Made By: SLASH
      const api = Math.round(client.ws.ping);
      let states = "🟢 Excellent"; // Made By: SLASH
      let states2 = "🟢 Excellent";
      if (Number(msg) > 70) states = "🟢 Good"; // Made By: SLASH
      if (Number(msg) > 170) states = "🟡 Not Bad";
      if (Number(msg) > 350) states = "🔴 Soo Bad"; // Made By: SLASH
      if (Number(api) > 70) states2 = "🟢 Good";
      if (Number(api) > 170) states2 = "🟡 Not Bad"; // Made By: SLASH
      if (Number(api) > 350) states2 = "🔴 Soo Bad";
      const embed = new Discord.MessageEmbed() // Made By: SLASH
        .setAuthor(client.user.username, client.user.avatarURL({ format: 'png' }))
        .addField("**Time Taken:**", msg + " ms 📶 | " + states, true) // Made By: SLASH
        .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
        .setFooter(`Made By: 'Y12XZ4K`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`) // Made By: SLASH
        .setTimestamp();
      message.channel.send(embed).catch((err) => { return; }); // Made By: SLASH
    }
  });


  //تثبيت البوت برم صوتي
  setInterval(() => {
    const channelid = "1183134564433022986" //ايدي الروم
    const channel = client.channels.cache.get(channelid);
    if (!channel) return
    channel.join()
  }, 1000);





  client.on('ready',() => {
    let saif = client.channels.cache.find(channel => channel.id === '1183541174359838832')
    if(!saif) return;
    saif.send('**__I\'m ready now__**')
  });


