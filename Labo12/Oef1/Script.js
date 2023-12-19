function geefWillekeurigGeheelGetalInclusief(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

let mijnBody = document.querySelector("body");
let kleurenArray = ["#fe8601", "#fff624", "#2b2c67", "#2b2c67", "#ab5b0e"];
let i = 0;
let element;
while (i < 300) {
	element = document.createElement("p");
	element.style.backgroundColor = kleurenArray[geefWillekeurigGeheelGetalInclusief(0, 4)];
	mijnBody.appendChild(element);
	i++;
}

mijnBody.setAttribute("style","height: 100vh;display: grid; grid-template-columns: repeat(20,1fr);gap: .3rem;padding:.3rem;");


