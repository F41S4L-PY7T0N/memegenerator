// Import node-fetch dynamically for CommonJS compatibility
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



/**
 * Fetches a random meme from the meme-api.
 * @returns {Promise<Object>} Meme data object
 */
async function getRandomMeme() {
    const response = await fetch('https://meme-api.com/gimme');
    if (!response.ok) throw new Error('Failed to fetch meme');
    const data = await response.json();
    return data;
}



module.exports = {
    getRandomMeme
};
