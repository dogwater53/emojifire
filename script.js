let textinp;
let emojiinp;
let keyinp;

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
let emojis = ['🥪','🍆','🔨','🔧','🛠️','⚒️','🤼‍♂️','💀','☠️','👽','👻','🧌','🗣️','💯','⁉️','🔥','❓','🪛','🧰','🪚','🗜️','⚙️','⛏️','🔩','⚗️','🐪','🪇','🧯','💳','💡','❤️‍🔥','🆗','🥦','🍑','🙀','😻','🍔','🐷','🐶','🙈','🐮','🐸','🔫','🐦','🐈','😩','🫵','👍','👎','🔞','❤️‍🩹','🥓','💔','🪤','🥵','🤯','🥶','🧀','🎮','🤪','💸','🧽','🪑','🪣','‼️'];

window.onload = () => {
	textinp = document.getElementById("text");
	emojiinp = document.getElementById("emoji");
	keyinp = document.getElementById("key");
}

function getKey() {
	return parseInt(key.value) & 63;
}

function toEmoji() {
	let key = getKey();
	let inp = textinp.value;
	let out = "";
	for (char of btoa(inp)) {
		let inx = chars.indexOf(char);
		inx = (inx & 64) ? inx : inx ^ key;
		out = out + emojis[inx];
	}
	emojiinp.value = out;
}

function toText() {
	let key = getKey();
	let inp = emojiinp.value;
	let out = "";
	let inter = "";
	for (char of inp) {
		inter = inter + char;
		if (!emojis.includes(inter)) {
			continue;
		}
		let inx = emojis.indexOf(inter);
		inx = (inx & 64) ? inx : inx ^ key;
		inter = "";
		out = out + chars[inx];
	}
	textinp.value = atob(out);
}