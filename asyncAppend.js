var fs = require("fs");

// Function to append text asynchronously
function appendFile() {
	console.log("Begin reading file");

	// First, read the file asynchronously
	fs.readFile("input.txt", "utf8", function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log(data);
		console.log("End reading file");

		// Next, append the text asynchronously
		console.log("Begin appending file");
		fs.appendFile("input.txt", "\nAdding new text here..", function (err) {
			if (err) {
				return console.error(err);
			}
			console.log("End appending file");

			// Re-read the file to display the latest content
			console.log("Begin re-reading file");
			fs.readFile("input.txt", "utf8", function (err, newData) {
				if (err) {
					return console.error(err);
				}
				console.log(newData);
				console.log("Finish re-reading file");
			});
		});
	});
}

// Call the function
appendFile();
