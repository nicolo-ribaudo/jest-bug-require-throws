try {
	const dep = require("./dep.js");
	console.log("FIRST TIME IMPORTED, NOT OK!", dep);
} catch {
	console.log("FIRST TIME ERROR, OK!");
}

try {
	const dep = require("./dep.js");
	console.log("SECOND TIME IMPORTED, NOT OK!", dep);
} catch {
	console.log("SECOND TIME ERROR, OK!");
}
