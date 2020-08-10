const express = require('express');
const router = express.Router();

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

/**
 * [get description]
 */
router.get('/', (req, res) => {
    res.render('index');
});

/**
 * [post description]
 */
router.post('/add', (req, res) => {
    const OBJjavascript = JSON.parse(JSON.stringify(req.body));

    let msg = `:star: _Ayer_\n`;

    OBJjavascript.yesterday.forEach(entry => {
        msg += `> - **${entry.title}:** ${entry.activity}\n`;
    });

    msg += `:sunny: _Hoy_\n`;

    OBJjavascript.today.forEach(entry => {
        msg += `> - **${entry.title}:** ${entry.activity}\n`;
    });

    msg += `:zap: _Bloqueado_\n`;

    OBJjavascript.blocked.forEach(entry => {
        msg += `> - **${entry.title}:** ${entry.activity}\n`;
    });

    /*const embed = new MessageEmbed()
        .setImage('https://mercadopago-degree.herokuapp.com/logo-andrey-poot-may.png')
        .setTitle("_Reporte del día_")
        .setAuthor("AndreyPootMay")
        .setColor("#92BA2F")
        .setTimestamp(Date.now());*/
    
    /*
    embed.addField(`:star: `, '_Ayer_');

    OBJjavascript.yesterday.forEach(entry => {
        embed.addField(`> - **${entry.title}:**`, `${entry.activity}`);
    });
        
    embed.addField(":sunny: ", '_Hoy_');

    OBJjavascript.today.forEach(entry => {
        embed.addField(`> - **${entry.title}:**`, `${entry.activity}`);
    });

    embed.addField(":zap: ", '_Bloqueado_');

    OBJjavascript.blocked.forEach(entry => {
        embed.addField(`> - **${entry.title}:**`, `${entry.activity}`);
    });*/

    client.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send(msg);

    res.redirect('/');
});

module.exports = router;
