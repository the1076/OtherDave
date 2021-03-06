"use strict";

var xkcd37 = require("xkcd-37");

/**
* Collection of detections and pedantry
*/
async function pedant(logger, client, user, userID, channelID, message) {
	message = message.toLowerCase();

	if(message.includes("-ass")) {
		client.sendMessage({
			to: channelID,
			message: xkcd37(message)
		});
	}

	if(message.includes("issac") && user == "1076") {		
		client.sendMessage({
			to: channelID,
			message: "Oh, did you mean 'Isaac'?"
		});
	}

	if(message.includes("mario")) {
		client.sendMessage({
			to: channelID,
			message: "Mario? Is that like Hop Dude?\n*cough cough*"
		});
	}

	if(message.includes("sonic")) {
		client.sendMessage({
			to: channelID,
			message: "Gotta love that Fast Guy."
		});
	}
}

module.exports = pedant;
