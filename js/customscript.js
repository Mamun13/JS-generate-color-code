const refreshPage = document.querySelector('.refresh-btn');

const generateHexColor = () => {
  // generate color code
	let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	randomHex = `#${randomHex.padStart(6, '0')}`;
	console.log(randomHex);
};

refreshPage.addEventListener('click', generateHexColor);
