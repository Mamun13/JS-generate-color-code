const refreshPage = document.querySelector('.refresh-btn');
const show = document.querySelector('.all-data');
const limit = 40;

const generateHexColor = () => {
	show.innerHTML = '';
	for (let i = 0; i < limit; i++) {
		let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
		randomHex = `#${randomHex.padStart(6, '0')}`;
		// console.log(randomHex);
		const color = document.createElement('div');
    console.log(color);
		color.classList.add('color');
		color.innerHTML = `<div class="col-lg-3 mt-3 mb-2 mn p-2">
                        <div class="first p-1 shadow rounded ">
                          <div class="hex-color pt-3 ms-3 me-3 mt-3 rounded" style="background: ${randomHex}"></div>
                          <div class="hex-color-code text-center text-uppercase mt-2">${randomHex}</div>
                        </div>
                      </div>`;
    color.addEventListener('click', ()=>copyColor(color, randomHex));
		show.appendChild(color);
	}
};
generateHexColor();

const copyColor = (elem, randomHexVal) =>{
  const colorElem =  elem.querySelector(".hex-color-code");

  navigator.clipboard.writeText(randomHexVal).then(()=>{
    colorElem.innerText = "copied";
    setTimeout(()=> colorElem.innerText = randomHexVal, 1000)
  })
}
refreshPage.addEventListener('click', generateHexColor);
