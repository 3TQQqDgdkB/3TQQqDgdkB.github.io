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
	else if (currentState === 2) {
		
		for (let i = 0; i < data.length; i++) {

			if (data[i].toLowerCase() === "you") {
				correct++;
			}
			else if (data[i].toLowerCase() === "me") {
				correct++;
			}
			else if (data[i].toLowerCase() === "i") {
				correct++;
			}
			else if (data[i].toLowerCase() === "we") {
				correct++;
			}
			else if (data[i].toLowerCase() === "us") {
				correct++;
			}
			else if (data[i].toLowerCase() === "all of us") {
				correct++;
			}
		}

		if (correct >= 1) {

			localStorage.setItem("state", 758912);
			location.reload();

		}
	}


}

const createStep1 = () => {

	let text = document.createElement("p");
	text.innerHTML = "w̷͉̍h̵̭̕a̶̮͝t̶̞́ ̷̱͛ḭ̸͝s̶̒͜ ̶̱̾t̴̪͛h̶̩̆ȅ̵ͅ ̶͉͗c̷̳̏ŏ̵͖r̷̳͐r̵̹̆ȩ̶̄l̵̠͂a̸̝̕t̶̖̀i̵̩̔ŏ̶̱n̷̥̚?̴͠ͅ";

	let input1 = document.createElement("input");
	input1.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓";
	submit.className = "buttonSubmit";

	document.body.appendChild(text);
	
	document.body.appendChild(input1);
	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input1])});

}

const createStep2 = () => {

	let text = document.createElement("p");
	let text2 = document.createElement("p");
	text.innerHTML = "t̴̩͝h̷́ͅḙ̴̈́ ̸̛̖c̵̪̒ŭ̷͕r̴͈͝r̸̝̓e̷̖͑n̸͖̒t̵̐ͅ ̸͓̅a̷̦̓n̵͖̔d̴̟͝ ̴͙̀p̵͖͠r̸͉̋ê̴͜v̸̮̂î̷̼ŏ̷̰u̷͚͊s̴̯̉ ̶̻̒a̶̻͠t̸̼̒t̴͖̕e̷̺̔m̶̞͗p̵͖̅t̴̩̒s̵̹̓";
	text2.innerHTML = "a̷̟͊n̴̰͠d̴̡͝ ̶͓̓t̷̫͠h̵̬̀ḛ̷̀ ██████ ą̷̓t̴̞̽t̷͉͑ë̸̞́m̵̮̑p̶̳̃ț̸͒";

	let input1 = document.createElement("input");
	input1.type = "text";
	let input2 = document.createElement("input");
	input2.type = "text";
	let input3 = document.createElement("input");
	input3.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓";
	submit.className = "buttonSubmit";

	document.body.appendChild(text);
	document.body.appendChild(text2);
	
	document.body.appendChild(input1);
	document.body.appendChild(input2);
	document.body.appendChild(input3);

	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input1, input2, input3])});

}

const createStep3 = () => {

	let text = document.createElement("p");
	text.innerHTML = 'w̵̫̌h̶̻́o̴͎͗ ̷̠̓à̶̩r̶̰̅ê̸̫ ̶̪͠"̴͔͒t̷͔́h̵̡͒e̴̠͂y̶͙͋"̶͇͊';

	let input1 = document.createElement("input");
	input1.type = "text";
	
	let submit = document.createElement("button");
	submit.innerHTML = "S̴̡̠̓̊̚͜ê̵̜͍͑͐n̵͔̊͋͐ḑ̷͕͐̓";
	submit.className = "buttonSubmit";

	document.body.appendChild(text);
	
	document.body.appendChild(input1);

	document.body.appendChild(submit);

	submit.addEventListener("click", () => {filterData([input1])});

}

const showVid1 = () => {

	let text = document.createElement("p");
	text.innerHTML = "https://youtu.be/IZIg9mMneqA";

	document.body.appendChild(text);

}

const state = localStorage.getItem("state");
if (state === "146526") { currentState = 1; }
else if (state === "481495") { currentState = 2; }
else if (state === "758912") { currentState = 3; }

if (currentState === 0) { createStep1(); }
else if (currentState === 1) { createStep2(); }
else if (currentState === 2) { createStep3(); }
else if (currentState === 3) { showVid1(); }