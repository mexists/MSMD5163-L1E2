var fs = require("fs");

function appendFileSync() {
	console.log("Begin reading file");

	try {
		var data = fs.readFileSync("input.txt", "utf8");
		console.log(data);
		console.log("End reading file");

		console.log("Begin appending file");
		fs.appendFileSync("input.txt", "\nAdding new text here..");
		console.log("End appending file");

		console.log("Begin re-reading file");
		var newData = fs.readFileSync("input.txt", "utf8");
		console.log(newData);
		console.log("Finish re-reading file");
	} catch (err) {
		console.error(err);
	}
}

appendFileSync();
