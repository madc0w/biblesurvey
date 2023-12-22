let showingModal;
let questionIndex = 0;
let numCorrect = 0;

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
	document.getElementById('content').classList.remove('hidden');
	showQuestion();
}

function showQuestion() {
	document.getElementById('responses').classList.remove('hidden');
	document.getElementById('question').innerHTML = data[questionIndex].question;
	document.getElementById('next-question-button').classList.add('hidden');
	const responseFeedback = document.getElementById('response-feedback');
	responseFeedback.classList.add('hidden');

	const questionNumber = document.getElementById('question-number');
	questionNumber.classList.remove('hidden');
	questionNumber.innerHTML = `${questionIndex + 1} / ${data.length}`;
}

function response(isAgree) {
	const question = data[questionIndex];
	if (isAgree == !!question.isAgreeCorrect) {
		numCorrect++;
	}
	document.getElementById('responses').classList.add('hidden');
	const responseFeedback = document.getElementById('response-feedback');

	let html = '';
	html +=
		'<div class="response-message">' +
		'You ' +
		(isAgree ? 'agree' : 'disagree') +
		'.<br/>' +
		question[isAgree ? 'agree' : 'disagree'] +
		'</div>';
	for (const c of question.citations) {
		const link =
			c.link ||
			`https://www.biblegateway.com/passage/?search=${c.citation}&version=NIV`;
		html += `<div class="response-citation"><a href="${link}" target="bs-citation">${c.citation}</a></div>`;
		html += '<div class="response-verse">' + c.verse + '</div>';
	}
	responseFeedback.innerHTML = html;
	responseFeedback.classList.remove('hidden');
	// console.log('questionIndex', questionIndex);
	if (questionIndex >= data.length - 1) {
		const rate = (100 * numCorrect) / data.length;
		document.getElementById('agree-rate').innerHTML = rate.toFixed(0);
		let scoreFeedback;
		if (rate < 50) {
			scoreFeedback = 'a shit';
		} else if (rate < 70) {
			scoreFeedback = 'a mediocre';
		} else {
			scoreFeedback = 'a very good';
		}
		document.getElementById('score-feedback').innerHTML = scoreFeedback;
		showModal('result-modal');
	} else {
		document.getElementById('next-question-button').classList.remove('hidden');
		questionIndex++;
	}
}

function showModal(id) {
	closeModals();
	showingModal = id;
	const modal = document.getElementById(id);
	modal.classList.remove('hidden');
}

function closeModals() {
	const modals = document.getElementsByClassName('modal');
	for (const modal of modals) {
		modal.classList.add('hidden');
	}
	showingModal = null;
}
