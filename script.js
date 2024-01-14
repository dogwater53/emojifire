let textinp;
let emojiinp;
window.onload = () => {
	textinp = document.getElementById("text");
	emojiinp = document.getElementById("emoji");
	
}

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
let emojis = ['🥪','🍆','🔨','🔧','🛠️','⚒️','🤼‍♂️','💀','☠️','👽','👻','🧌','🗣️','💯','⁉️','🔥','❓','🪛','🧰','🪚','🗜️','⚙️','⛏️','🔩','⚗️','🐪','🪇','🧯','💳','💡','❤️‍🔥','🆗','🥦','🍑','🙀','😻','🍔','🐷','🐶','🙈','🐮','🐸','🔫','🐦','🐈','😩','🫵','👍','👎','🔞','❤️‍🩹','🥓','💔','🪤','🥵','🤯','🥶','🧀','🎮','🤪','💸','🧽','🪑','🪣','‼️'];

function toEmoji() {
	let inp = textinp.value;
	let out = "";
	for (char of btoa(inp)) {
		let inx = chars.indexOf(char);
		out = out + emojis[inx];
		if (emojis[inx] === undefined) {
			console.log(inx);
		}
	}
	emojiinp.value = out;
}

function toText() {
	let inp = emojiinp.value;
	let out = "";
	let inter = "";
	for (char of inp) {
		inter = inter + char;
		if (!emojis.includes(inter)) {
			continue;
		}
		let inx = emojis.indexOf(inter);
		console.log(inx);
		inter = "";
		out = out + chars[inx];
	}
	textinp.value = atob(out);

}