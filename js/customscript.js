const refreshPage = document.querySelector('.refresh-btn');
const show = document.querySelector('.row')
const limit = 40;

const generateHexColor = () => {
	for (let i = 0; i < limit ; i++) {
    show.innerHTML = "";
		let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
		randomHex = `#${randomHex.padStart(6, '0')}`; 
		console.log(randomHex)
    const color = document.createElement("p");
    color.classList.add("color")
    color.innerHTML = `<div class="col-lg-3 mt-3 mb-3 mn">
                        <div class="first p-1 shadow rounded">
                          <div class="hex-color pt-3 ms-3 me-3 mt-3 rounded" style="background: ${randomHex}"></div>
                          <div class="hex-color-code text-center text-uppercase mt-2">${randomHex}</div>
                        </div>
                      </div>`;
    show.appendChild(color);   
  }
};
generateHexColor();
refreshPage.addEventListener('click', generateHexColor);
