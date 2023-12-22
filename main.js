let showingModal;
let questionIndex = 0;
let numAgree = 0;

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
}

function response(isAgree) {
	if (isAgree) {
		numAgree++;
	}
	document.getElementById('responses').classList.add('hidden');
	const responseFeedback = document.getElementById('response-feedback');
	responseFeedback.innerHTML =
		data[questionIndex][isAgree ? 'agree' : 'disagree'];
	responseFeedback.classList.remove('hidden');
	// console.log('questionIndex', questionIndex);
	if (questionIndex >= data.length - 1) {
		const rate = (100 * numAgree) / data.length;
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
		document.getElementById('final-score').classList.remove('hidden');
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
