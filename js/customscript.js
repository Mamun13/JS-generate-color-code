const container = document.querySelector('.container');
const refreshPage = document.querySelector('.mn');

const limit = 40;

const generateHexColor = () => {
	for (let i = 0; i >= limit; i++) {
		// generate color code
		let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
		randomHex = `#${randomHex.padStart(6, '0')}`;

		const color = document.createElement('.first');
		color.classList.add('color');
		color.innerHTML = `<div class="first p-1 shadow rounded">
                        <div class="hex-color pt-3 ms-3 me-3 mt-3 rounded"></div>
                        <div class="hex-color-code text-center text-uppercase mt-2">#000000</div>
                      </div>`;

		refreshPage.appendChild(color);
	}
};

refreshPage.addEventListener('click', generateHexColor);
