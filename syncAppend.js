var fs = require("fs");

function appendFileSync() {
	console.log("Begin reading file");

	try {
		var data = fs.readFileSync("input.txt", "utf8");
		console.log(data);
		console.log("End reading file");
	} catch (err) {
		console.error(err);
	}
}

appendFileSync();
