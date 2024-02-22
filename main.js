const Discord = require('discord.js');

const config = require('./config.json');

let emojis = ['F', ':D', '>:3', ':3', 'uwu', 'unu', 'owo', 'UwU', 'UnU', 'OwO', ':o', ':c', ':v', ':p', ':/', 'c:', ':)'];

console.log(new Date().toString());

const client = new Discord.Client(
{
	ws:
	{
		properties:
		{
			$browser: "Discord Android"
		}
	},
	intents:
	[
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
	],
	partials:
	[
		Discord.Partials.Channel
	]
});

client.on(Discord.Events.ClientReady, async (e) =>
{
	console.log("Discord is ready");

	sendMessagesAtStartup();
});


client.on(Discord.Events.MessageCreate, async (msg) =>
{
	try
	{
		if(msg.author.bot) return;

		const msgSplitted = msg.content.split(' ');
		for(let i = 0; i < msgSplitted.length; i++)
		{
			if(emojis.includes(msgSplitted[i]))
			{
				msg.channel.send(msgSplitted[i]);
				return;
			}
		}
	}
	catch(err)
	{
		console.error('\n--HA OCURRIDO UN ERROR-- (MessageCreate)\n', err);
	}
});

async function sendMessagesAtStartup()
{
	try
	{
		const random = require('./random');

		let channel;
		let emoji;
		for(let i = 0; i < config.MESSAGE_AT_STARTUP.length; i++)
		{
			channel = await client.channels.fetch(config.MESSAGE_AT_STARTUP[i]);
			emoji = emojis[random.range(0, emojis.length - 1)];
			console.log(emoji);
			await channel.send({content: emoji});
		}
	}
	catch(err)
	{
		console.error('\n--HA OCURRIDO UN ERROR-- (sendMessagesAtStartup)\n', err);
	}
}


async function start()
{
	let tryAgain = true;
	while(tryAgain)
	{
		try
		{
			await client.login(config.DISCORD_TOKEN);
			tryAgain = false;
		}
		catch(err)
		{
			console.error('\n--HA OCURRIDO UN ERROR-- (start)\n', err);
			tryAgain = true;
		}
	}
}

start();
