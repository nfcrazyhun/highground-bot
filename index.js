/**
 * A simple Discord bot that responds to a specific command.
 */
import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// When the client is ready, run this code (once)
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message is '!hello'
    if (message.content === '!hello') {
        message.channel.send('Hello there!');
    }

    // Check if the message contains the string 'high ground'
    if (message.content.toLowerCase().includes('high ground')) {
        message.channel.send("IT'S OVER ANAKIN!\nI HAVE THE HIGH GROUND!");
    }
});

// Log in to Discord with your app's token
client.login(process.env.DISCORD_BOT_TOKEN);