var fs = require("fs");

function appendFile() {
	console.log("Begin reading file");

	fs.readFile("input.txt", "utf8", function (err, data) {
		console.log(data);
		console.log("End reading file");

		console.log("Begin appending file");
		fs.appendFile("input.txt", "\nAdding new text here..", function (err) {
			console.log("End appending file");

			console.log("Begin re-reading file");
			fs.readFile("input.txt", "utf8", function (err, newData) {
				console.log(newData);
				console.log("Finish re-reading file");
			});
		});
	});
}

appendFile();
