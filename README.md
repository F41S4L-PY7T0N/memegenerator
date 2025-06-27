# Meme Generator Discord Bot

A Discord bot that fetches random memes from Reddit using [meme-api.com](https://meme-api.com/gimme) and sends them as slash command responses.

## Features

- `/meme command` — Fetches and sends a random meme from Reddit.
- `/info command` — Shows information about the bot, developer, and source code.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-memegenerator-repo.git
   cd memegenerator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Complete the `.env` file in the project root:
   ```
   DISCORD_TOKEN=your-bot-token-here
   CLIENT_ID=your-discord-application-client-id
   GUILD_ID=your-discord-guild-id
   ```

4. **Add the bot icon:**

   Place your bot icon at `assets/icon.png` or just use the one in there.

5. **Run the bot:**
   ```bash
   node index.js
   ```

## Usage

- Use `/meme` in your Discord server to get a random meme.
- Use `/info` to see bot and developer info.

## Built With

- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/)
- [meme-api.com](https://meme-api.com/)

## License

MIT

---
**Developer:** Kernel Discord: sudo_update
