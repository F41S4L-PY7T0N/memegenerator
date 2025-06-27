// Info command: Provides information about the bot, developer, purpose, and source
const { EmbedBuilder } = require('discord.js');
const path = require('path');

module.exports = {
    name: 'info',
    description: 'Information about the bot, its developer, and source code.',
    async execute(interaction) {
        // Create an embed with bot info and logo
        const embed = new EmbedBuilder()
            .setTitle('Meme Generator Bot')
            .setDescription(
                `**Developer:** Kernel Discord: sudo_update\n` +
                `**What it does:** Fetches random memes from Reddit using the meme-api and sends them as Discord slash command responses.\n` +
                `**How it was made:** Built with Node.js, discord.js, and meme api for meme fetch from reddit repo r/meme.\n\n` +
                `[Source Code](https://github.com/yourusername/your-memegenerator-repo)`
            )
            .setColor(0x00AE86)
            .setThumbnail('attachment://icon.png');

        await interaction.reply({
            embeds: [embed],
            files: [
                { attachment: path.join(__dirname, '../assets/icon.png'), name: 'icon.png' }
            ]
        });
    }
};
