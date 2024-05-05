# A bot that does :3
colon-three-bot is a bot that replies to messages with emoticons.

if you send `:3`, it will reply `:3` too.

It's a very useless bot, but we love it.

## How to set up
### 1. Install node and npm (if you don't have them already)
If you type `node --version` or `npm --version` into a terminal, if you see some numbers, it means that you have them installed, if not and it fails, it means will have to install them.

#### 1.1 How to install node and npm
If you are on linux, you can install it through your package manager, or you can install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script), and once installed [follow this](https://github.com/nvm-sh/nvm?tab=readme-ov-file#usage)

If you are on windows, you can install [nvs](https://github.com/jasongin/nvs?tab=readme-ov-file#windows), and once installed [follow this](https://github.com/jasongin/nvs?tab=readme-ov-file#basic-usage)

### 2. Clone the repository
If you have git installed, you can just `git clone https://github.com/idko2004/colon-three-bot.git`

If you don't, then there is a green button up there that reads `<> code`, if you click it, there should be an "download zip" option.

### 3. Install dependencies
Go where you cloned the repository, and in a terminal run `npm install`

### 4. Config file
There should be a file named "config-template.json", make a copy of that file with the name "config.json".

Paste your Discord bot token where it says `<Your Discord bot token>` and a channel ID where it says `<Channel ID of a channel the bot has access to (optional)>`

#### 4.1 Creating a Discord bot
> These steps might change over time

Go to [The Discord Developers Portal](https://discord.com/developers/applications) and create a new application, name it whatever you want.

##### 4.1.1 Installation tab
Go to the installation tab on the left.

In the Install Link section, select `Discord Provided Link` on the dropdown menu. This should create another section below called Default Install Settings.

In the Default Install Settings section, there should be a dropdown with the tile "SCOPES", select `bot` on it.

Now you should be able to select permissions, please select these:

- Send Messages

- Read Messages/View Channels

Now save your changes and copy the link in the Install Link section and paste it in a new tab. Now add the bot to your Discord server.

Now you have a Discord bot!

##### 4.1.2 Bot tab
Go to the bot tab on the left.

In the section Privileged Gateway Intents, turn on the `Server Members Intent` and `Message Content Intent` toggle.

In the Build-A-Bot section you can customize your bot's profile picture, name and banner.

In this section should also be a `Reset Token` button, click it and do what it says. After this the token would be displayed, copy it and paste it in your config.json file, where it says `<Your Discord bot token>`.

#### 4.2 Messages at startup
When the bot starts, it sends a message to the channels you added to your config.json file.

If you don't want messages at startup, leave the `[]` empty, with nothing inside.

To get the ID of a channel, go to Discord (the normal one, not the developers portal), enter the settings and search for developers mode. If you turn that setting on, you can copy the channel ID when you right-click a channel.

The way the config file should be formatted is this:
```
MESSAGE_AT_STARTUP:
[
	"<Channel ID>",
	"<Channel ID>", // <- notice the , before another one
	"<Channel ID>"  // <- the last one shouldn't have the ,
]
```

### 5. Run the bot
Now it's time to run the bot!

In a terminal, execute `npm start` or `node main.js`, if nothing goes wrong, the bot will run as long as that terminal remains open.

## Run in an android device
If you have an old android phone, you can use [termux](https://termux.dev/) to run the bot.
