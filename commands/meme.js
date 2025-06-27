// Import the getRandomMeme function from the API
const { getRandomMeme } = require('../api/jokeApi');



module.exports = {
    // Command metadata
    name: 'meme',
    description: 'Sends a random meme from Reddit',


    // Command execution logic
    async execute(interaction) {

        try {
            // Defer the reply to acknowledge the interaction immediately
            await interaction.deferReply();


            // Fetch a random meme from the API
            const meme = await getRandomMeme();


            // Edit the deferred reply with the meme content and image
            await interaction.editReply({
                content: `Meme Title: ${meme.title}`,
                files: [meme.url]
            });

        } catch (error) {
            // Handle errors and reply appropriately
            console.error(error);

            
            if (interaction.deferred || interaction.replied) {
                await interaction.editReply({ content: 'Failed to fetch a meme. Please try again later.' });
            } else {
                await interaction.reply({ content: 'Failed to fetch a meme. Please try again later.', ephemeral: true });
            }
        }
    }
};
