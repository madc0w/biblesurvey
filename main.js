let showingModal, questionIndex, numCorrect;

function onLoad() {
	showModal('intro-modal');
	document.addEventListener('keyup', (e) => {
		if (e.key == 'Escape') {
			// console.log('showingModal', showingModal);
			if (showingModal == 'intro-modal') {
				start();
			}
			closeModals();
		}
	});
}

function start() {
	questionIndex = 0;
	numCorrect = 0;
	closeModals();
	hide('results');
	show('content');
	showQuestion();
}

function showQuestion() {
	show('responses');
	document.getElementById('question').innerHTML = data[questionIndex].question;
	hide('next-question-button');
	hide('response-feedback');
	show('question-number');
	updateScore();
}

function response(isAgree) {
	const question = data[questionIndex];
	if (isAgree == !!question.isAgreeCorrect || question.isContradiction) {
		numCorrect++;
	}
	hide('responses');

	let html = '';
	html += `<div class="response-message">You ${
		isAgree ? 'agree' : 'disagree'
	}.</div>`;

	html += '<div id="response-citations-container">';
	let isFirst = true;
	for (const c of question.citations) {
		if (!isFirst) {
			html += '<hr width="40%" />';
		}
		const link =
			c.link ||
			`https://www.biblegateway.com/passage/?search=${c.citation}&version=NIV`;
		html += `<div class="response-citation"><a href="${link}" target="bs-citation">${c.citation}</a></div>`;
		html += '<div class="response-verse">' + c.verse + '</div>';
		isFirst = false;
	}
	html += '</div>';
	html += '<div class="response-message">';
	if (question.isContradiction) {
		html +=
			'That was a tough one. The good news is, whether or not your believe that this is true, the Bible agrees with you! Good work, you get a point.';
	} else {
		html += question[isAgree ? 'agree' : 'disagree'];
	}
	html += '</div>';

	const responseFeedback = document.getElementById('response-feedback');
	responseFeedback.innerHTML = html;
	let opacity = 0;
	responseFeedback.style.opacity = opacity;
	show('response-feedback');
	const opacityIntervalId = setInterval(() => {
		opacity += 0.032;
		responseFeedback.style.opacity = opacity;
		if (opacity >= 1) {
			clearInterval(opacityIntervalId);
		}
	}, 40);

	// console.log('questionIndex', questionIndex);
	if (questionIndex >= data.length - 1) {
		const rate = (100 * numCorrect) / data.length;
		document.getElementById('agree-rate').innerHTML = rate.toFixed(0);
		let scoreFeedback;
		if (rate < 50) {
			scoreFeedback = 'not a very good';
		} else if (rate < 70) {
			scoreFeedback = 'a mediocre';
		} else if (rate < 90) {
			scoreFeedback = 'a pretty good';
		} else if (rate < 98) {
			scoreFeedback = 'a very good';
		} else {
			scoreFeedback = 'a perfect';
		}
		document.getElementById('score-feedback').innerHTML = scoreFeedback;
		show('results');
	} else {
		show('next-question-button');
	}
	updateScore();
	questionIndex++;
}

function showModal(id) {
	closeModals();
	showingModal = id;
	show(id);
}

function closeModals() {
	const modals = document.getElementsByClassName('modal');
	for (const modal of modals) {
		modal.classList.add('hidden');
	}
	showingModal = null;
}

function hide(id) {
	document.getElementById(id).classList.add('hidden');
}

function show(id, effect) {
	document.getElementById(id).classList.remove('hidden');
}

function updateScore() {
	document.getElementById(
		'question-number'
	).innerHTML = `Score: ${numCorrect} / ${
		questionIndex + 1
	} | Current Question: ${questionIndex + 1} / ${data.length}`;
}
