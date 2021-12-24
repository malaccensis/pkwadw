import express from "express";
import fs from "fs";
import path from "path";
import {spawn} from "child_process";

const app = express();

app.get("/", (request, response) => {
	response.send("Hey...");
});
app.get("/last-crunch", (request, response) => {
	try {
		let lastCrunch = fs.readFileSync("live/live-ending-crunch.txt", "utf-8");
		response.send(lastCrunch);
	} catch (error) {
		response.status(500).send("Failed to read Ending Crunch");
	}
});
app.get("/output", (request, response) => {
	try {
		let output = fs.readFileSync("output/output.txt", "utf-8");
		response.send(output);
	} catch (error) {
		response.status(500).send("Failed to read Output");
	}
});
app.get("/pvk", (request, response) => {
	const query = request.query.query;
	if (query) {
		spawn("node", query.split(" "), {
			detached: true
		});
		response.send(query.split(" "));
	} else {
		response.status(500).send("Use query params");
	}
});
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));