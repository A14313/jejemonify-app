const paragraph = document.querySelector('#paragraph');
const jejemonifyTextArea = document.querySelector('#jejemonifyTextArea');
const copyBtn = document.querySelector('#copyBtn');
const resetBtn = document.querySelector('#resetBtn');
const toolTipText = document.querySelector('#toolTipText');
const signatureCheckbox = document.querySelector('#signature');

const signature = 'Copied from jejemonify app';
const placeholder = 'I can translate your words 😜';

const dictionary = {
	a: ['@', '4', 'à'],
	e: ['3', 'ê', 'é', 'ē', 'È', 'Ë', 'É', 'Ê'],
	i: ['!', 'î', 'ï'],
	o: ['0', 'ö', 'ô', 'ø'],
	g: ['9', 'q', 'G'],
	u: ['û', 'ü', 'ū'],
	'.': [',,', '.~'],
};

function jejemonify(words) {
	return [...words.toLowerCase()]
		.map((el, index) => {
			// Check the letter or element in the dictionary
			// parang ganito yan dictionary['e'] lalabas ang value 3
			// Yan ang syntax pag nag access sa object
			// dahil object ang dictionary.
			// in this case nag save tayo ng parameter na "el" for each element
			// ng function na jejemonify
			// for each element, ng word i check mo sa object ng dictionary
			// pag meron ganong letter, labas mo yung value.

			// Parang shorthand yung naka sulat dito sa if statement.
			// tandaan na laging truth ang nasa if statement
			// unless lagyan ng "!" exclamation, mababaliktad kaya magiging falsy

			//H,e,l,l,o
			if (dictionary[el]) {
				const rand = Math.floor(Math.random() * dictionary[el].length);
				return dictionary[el][rand];
			}

			// We want to check every index if it is an odd number
			// If add number get the index and the value of the element.
			// and return it
			if (index % 2 !== 0) {
				return el.toUpperCase();
			}

			//this is always returning the rest of the element
			return el;
		})
		.join('');
	//The code above is what we call chaining of methods
	//Basically it is something just like this
	//[...words].map().join('')
	// The array of words parameter, (it is now array because we spread it)
	// the map method
	// the join method, We use blank string to avoid the default comma separator
}

//Defaults when the page loads
jejemonifyTextArea.value = '';
copyBtn.setAttribute('disabled', '');
jejemonifyTextArea.setAttribute(
	'placeholder',
	`Type anything here\n\n${jejemonify(placeholder)}`
);

jejemonifyTextArea.addEventListener('input', () => {
	if (jejemonifyTextArea.value.length !== 0) {
		paragraph.innerText = jejemonify(jejemonifyTextArea.value);
		copyBtn.removeAttribute('disabled');
	} else {
		paragraph.innerText = 'Type anywords you want to jejemonify';
		copyBtn.setAttribute('disabled', '');
	}
});

// signatureCheckbox.addEventListener('input', (e) => {
// 	if (e.target.checked === true) {
// 		console.log('checked');
// 	} else {
// 		console.log('unchecked');
// 	}
// });

copyBtn.addEventListener('click', () => {
	//Select the text field
	jejemonifyTextArea.select();
	jejemonifyTextArea.setSelectionRange(0, 99999); //For mobile devices

	//Copy the text inside the text field
	navigator.clipboard.writeText(
		`${jejemonify(jejemonifyTextArea.value)}\n ---${signature}`
	);

	//Set the text to tool tip
	toolTipText.innerText = 'Copied to clipboard';
	setTimeout(() => {
		toolTipText.innerText = 'Copy to clipboard';
	}, 3000);
});

resetBtn.addEventListener('click', () => {
	paragraph.innerText = 'Type anywords you want to jejemonify';
	jejemonifyTextArea.value = '';
	copyBtn.setAttribute('disabled', '');
});
