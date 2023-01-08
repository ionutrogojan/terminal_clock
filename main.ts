import Text from "./parser.ts";

const text = new Text("./font.json");

function double_digit(value: number): string { return value.toString().padStart(2, "0") }

async function tellTime() {
	const now = new Date();
	const time = {
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds(),
	}
	const current_time = `${double_digit(time.hour)}:${double_digit(time.minute)}:${double_digit(time.second)}`
	const display = await text.text_display(current_time);

	console.clear();
	console.log(display);
}

setInterval(tellTime, 1000);
