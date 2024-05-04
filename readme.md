# A bot that does :3
colon-three-bot is a bot that replies to messages with emoticons.

if you send `:3`, it will reply `:3` too.

It's a very useless bot, but we love it.

## How to set up
### 1. Install node and npm (if you don't have them alredy)
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

Paste your Discord bot token where it says `<Your Discord bot token` and a channel ID where it says `<Channel ID of a channel the bot has access to (optional)>`

#### 4.1 Creating a Discord bot
> These steps might change over time

Go to [The Discord Developers Portal](https://discord.com/developers/applications) and create a new application, name it whatever you want.

##### 4.1.1 Installation tab
Go to the installation tab on the left.

In the Install Link section, select `Discord Provided Link` on the dropdown menu. This should create another section below called Default Install Settings.

In the Default Install Settings section, there should be a dropdown with the tile "SCOPES", select `bot` on it.

