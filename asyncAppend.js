var fs = require("fs");

function appendFile() {
	console.log("Begin reading file");

	fs.readFile("input.txt", "utf8", function (err, data) {
		if (err) {
			return console.error(err);
		}
		console.log(data);
		console.log("End reading file");

		console.log("Begin appending file");
		
	});
}

appendFile();
