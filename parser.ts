export default class Text {
	constructor(source: string) {
		this.source = source;
		this.font = [];
	}

	private source: string;
	// private font: { [key: string]: string[] };
	private font: string[];
	
	private async load_font(): Promise<string[]> {
		const data = await Deno.readTextFile(this.source);
		return JSON.parse(data);
	}

	private async get_char(char: string): Promise<string[]> {
		this.font = await this.load_font();
		return this.font[char];
	}

	public async text_display(value: string): Promise<string> {
		let temp = "";
		const text = value.split("");
		const height = ( await this.get_char(text[0])).length;
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < text.length; x++) {
				const char = await this.get_char(text[x]);
				temp += char[y];
			}
			temp += "\n";
		}
		return temp;
	}
}

// deno run --allow-read parser.ts