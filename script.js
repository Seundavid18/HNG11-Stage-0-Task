function askQuestion() {
    document.getElementById('overlay').style.display = 'flex';
}

function respond(answer) {
    const popup = document.getElementById('popup');
    if (answer === 'yes') {
        popup.innerHTML = '<h2>Thank you! Unto the next stage</h2>';
    } else {
        popup.innerHTML = '<h2>It\'s okay. I respect your decision.</h2>';
    }
}
