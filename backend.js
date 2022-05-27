"use strict";

let currentState = 0;

const compileData = (texts) => {

	let allValues = [];

	for (let i = 0; i < texts.length; i++) {allValues.push(texts[i].value); }

	return allValues;

}

const filterData = (inputs) => {

	const data = compileData(inputs);
	let correct = 0;

	if (currentState === 0) {

		for (let i = 0; i < data.length; i++) {

			if (data[i].toLowerCase() === "time") {
				correct++;
			}
		}

		if (correct >= 1) {

		}
	}

}

const createStep1 = () => {

	let input = document.createElement("input");
	input.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓"
	submit.className = "buttonSubmit";
	
	document.body.appendChild(input);
	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input])})

};

createStep1()