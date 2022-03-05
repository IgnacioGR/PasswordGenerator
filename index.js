let passwordButton = document.getElementById("generate-password");
let passwordLength = 12;
let password = "";
passwordButton.setAttribute("onclick", "generatePasswords(passwordLength)");

// const with all keyboard characters
const characters = [...Array(95).keys()].map((i) =>
	String.fromCharCode(i + 32)
);
// const with all keyboard characters

// random number function
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// random number function

function generatePasswords(passwordLength) {
	for (let i = 0; i < 4; i++) {
		password = "";

		for (let i = 0; i < passwordLength; i++) {
			let random = getRandomIntInclusive(0, 94);
			password += characters[random];
		}

		document.getElementById("password" + i).textContent = password;
	}
}
