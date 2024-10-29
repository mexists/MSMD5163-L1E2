var fs = require("fs");

// Function to append text synchronously
function appendFileSync() {
	console.log("Begin reading file");

	// First, read the file synchronously
	try {
		var data = fs.readFileSync("input.txt", "utf8");
		console.log(data);
		console.log("End reading file");

		// Next, append the text synchronously
		console.log("Begin appending file");
		fs.appendFileSync("input.txt", "\nAdding new text here..");
		console.log("End appending file");

		// Re-read the file to display the latest content
		console.log("Begin re-reading file");
		var newData = fs.readFileSync("input.txt", "utf8");
		console.log(newData);
		console.log("Finish re-reading file");
	} catch (err) {
		console.error(err);
	}
}

// Call the function
appendFileSync();
