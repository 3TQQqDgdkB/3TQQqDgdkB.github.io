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

			localStorage.setItem("state", 146526);

			location.reload();
		}
	}
	else if (currentState === 1) {
		
		for (let i = 0; i < data.length; i++) {

			if (data[i].toLowerCase() === "past") {
				correct++;
			}
			if (data[i].toLowerCase() === "present") {
				correct++;
			}
			if (data[i].toLowerCase() === "future") {
				correct++;
			}
		}

		if (correct >= 3) {

			localStorage.setItem("state", 481495);
			location.reload();

		}
	}

}

const createStep1 = () => {

	let text = document.createElement("p")
	text.innerHTML = "w̷͉̍h̵̭̕a̶̮͝t̶̞́ ̷̱͛ḭ̸͝s̶̒͜ ̶̱̾t̴̪͛h̶̩̆ȅ̵ͅ ̶͉͗c̷̳̏ŏ̵͖r̷̳͐r̵̹̆ȩ̶̄l̵̠͂a̸̝̕t̶̖̀i̵̩̔ŏ̶̱n̷̥̚?̴͠ͅ"

	let input1 = document.createElement("input");
	input1.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓"
	submit.className = "buttonSubmit";

	document.body.appendChild(text)
	
	document.body.appendChild(input1);
	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input1])})

};

const createStep2 = () => {
	

	let text = document.createElement("p")
	text.innerHTML = "t̷̞̏h̸͚̐ȇ̵̥ ̶̳͗ṱ̵̽h̴̦̐r̸͈̀e̷̐͜e̶̻̋ ̴̲͑s̵͍͂ẗ̴̮́a̸̗͂t̴̥̄ḛ̵͂s̵̩͝,̸͚́ ̷̟̐î̴͇n̵̩͊c̸̖̚ļ̸̔u̸̥̇d̸̬̔i̵̝͑n̵̥̏ģ̴̿ ̵̰̋ţ̵̀h̸̦̔e̵̹̚ ̸͓͌ḿ̶̥ĩ̸͇ŝ̶͉ŝ̴̳ḯ̶̟n̴̼̿g̷̹͑ ̴͖̇l̸͖͋i̶͉̾n̶͓̊k̶̆͜"

	let input1 = document.createElement("input");
	input1.type = "text";
	let input2 = document.createElement("input");
	input2.type = "text";
	let input3 = document.createElement("input");
	input3.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓"
	submit.className = "buttonSubmit";
	
	document.body.appendChild(input1);
	document.body.appendChild(input2);
	document.body.appendChild(input3);

	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input1, input2, input3])})

};

const state = localStorage.getItem("state");
if (state === "146526") { currentState = 1; }
else if (state === "481495") { currentState = 2; }

if (currentState === 0) { createStep1() }
else if (currentState === 1) { createStep2() }