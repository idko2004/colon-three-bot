const Discord = require('discord.js');
const random = require('./random');
const config = require('./config.json');

const emojis = [':D', '>:3', ':3', 'D:', 'c:', ':)', ':(', ":'(", 'uwu', 'unu', 'owo', 'twt', 'UwU', 'UnU', 'OwO', 'TwT', ':o', ':O', ':0', ':c', ':v', ':V', ':p', ':P', ':/', ':\\', ':|', ":'c", ':>', ':<', 'F'];

const soVariants = ['so', 'so jsjfsfjsh', 'so hahaha', 'sito', 'sote', 'so :cheese:', 'so asdfhasdfj', 'so asjdfasdfj', 'so asdfjasdf', 'so asdfasdf', 'so jsjs', 'so :D', 'so asjfasjdfasjdfaksdfjaksjdfs'];

console.log(new Date().toString());

const client = new Discord.Client(
{
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

//Poner que el cliente es en realidad Discord de Android, no sé si a discord le guste esto pero es que el bot está corriendo en un móvil con android, no puedo no poner que el icono de que está conectado sea un móvil
Discord.DefaultWebSocketManagerOptions.identifyProperties.browser = 'Discord Android';

const cheeseJokeIsEmpty = Object.keys(config.CHEESE_RESPONSE_THAT_ONLY_MAKES_SENSE_IN_SPANISH) == 0;

client.on(Discord.Events.ClientReady, async (e) =>
{
	console.log("Discord is ready");

	sendMessagesAtStartup();
});

client.on(Discord.Events.Error, (e) =>
{
	console.log("ALGO SALIÓ MAL!!\n", e);
	console.log("Esto podría ser mala idea, pero intentando iniciar sesión otra vez después del error.");
	start();
});

client.on(Discord.Events.Warn, (e) =>
{
	console.log("WARNING\n", e);
});


client.on(Discord.Events.MessageCreate, async (msg) =>
{
	try
	{
		if(msg.author.bot) return;

		const msgSplitted = msg.content.split(' ');
		for(let i = 0; i < msgSplitted.length; i++)
		{
			let toReply = textContainsEmoji(msgSplitted[i]);
			
			if(toReply === null) continue;

			msg.channel.send(toReply);
			console.log(toReply);
			return;
		}

		if(!cheeseJokeIsEmpty)
		{
			if(!config.CHEESE_RESPONSE_THAT_ONLY_MAKES_SENSE_IN_SPANISH[msg.guildId]) return;

			if(textValidForCheeseJoke(msgSplitted[msgSplitted.length - 1]))
			{
				let so;
				if(Math.random() > 0.8) so = soVariants[random.range(0,soVariants.length-1)];
				else so = soVariants[0];
				
				msg.channel.send(so);
				console.log(so);
			}
		}
	}
	catch(err)
	{
		console.error('\n--HA OCURRIDO UN ERROR-- (MessageCreate)\n', err);
	}
});

function textContainsEmoji(text)
{
	let validEmoji = true;

	for(let i = 0; i < emojis.length; i++) //Iterar sobre todos los emojis
	{
		if(text.length < emojis[i].length) continue; //Si el texto es más corto que el emoji, no hay forma de que sea ese emoji

		validEmoji = false;
		for(let iChar = 0; iChar < text.length; iChar++) //Iterar sobre los caracteres del texto
		{
			if(iChar >= emojis[i].length)
			{
				//Si el trozo de mensaje es mas largo que el emoji, pero los caracteres sobrantes son el mismo que el último caracter del emoji, sigue siendo un emoji válido. Ej: :DDDDDDDDDDDDDD
				if(text[iChar] === emojis[i].at(-1))
				{
					validEmoji = true;
					continue;
				}
				else
				{
					validEmoji = false;
					break;
				}
			}

			if(text[iChar] !== emojis[i][iChar])
			{
				validEmoji = false;
				break;
			}

			validEmoji = true;
		}

		if(validEmoji)
		{
			return emojis[i];
		}
	}

	return null;
}

function textValidForCheeseJoke(msg)
{
	msg = msg.toLowerCase();
	switch(msg)
	{
		case 'que':
		case 'qué':
		case 'que?':
		case 'qué?':
		case 'que??':
		case 'qué??':
		case 'q':
		case 'q?':
		return true;
	}
	return false;
}

async function sendMessagesAtStartup()
{
	try
	{
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

function wait(ms)
{
	return new Promise(function(good, bad)
	{
		setTimeout(function()
		{
			good();
		}, ms);
	});
}


async function start()
{
	console.log('start sequence!');
	let tryAgain = true;
	while(tryAgain)
	{
		try
		{
			console.log('Attempting to log in...');
			await client.login(config.DISCORD_TOKEN);
			tryAgain = false;
		}
		catch(err)
		{
			console.error('\n--HA OCURRIDO UN ERROR-- (start)\n', err);
			console.log('Esperando para volver a intentar...');
			await wait(5000);
			tryAgain = true;
		}
	}
}

start();
