const Command = require("../structures/command.js");

module.exports = new Command({
	name: "seek",
	aliases: ['s'],
	description: "Clears the server queue",
	permission: "SEND_MESSAGES",
	async run(message, args, client, slash) {
        const queue = client.player.getQueue(message.guild);
        if (!queue || !queue.playing || !args[0]) return;
        if (args[0] * 1000 >= queue.current.durationMS) return message.react('❌');
		await queue.seek(args[0] * 1000);

        message.react('⏩');
	}
});