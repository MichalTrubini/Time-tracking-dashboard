feedData('weekly');
document.getElementById('weekly').classList.add('selected');

const link = document.querySelectorAll('.profile__period-switcher-item');

link.forEach(e => e.addEventListener('click', function (event) {
    
    link.forEach(e => e.classList.remove('selected'));

    this.classList.add('selected');
    const period = this.id;

    feedData(period);

    event.preventDefault();
    })
);

function feedData(period) {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#work-now').innerText = data[0].timeframes[period].current;
            document.querySelector('#work-before').innerText = data[0].timeframes[period].previous;
            document.querySelector('#play-now').innerText = data[1].timeframes[period].current;
            document.querySelector('#play-before').innerText = data[1].timeframes[period].previous;
            document.querySelector('#study-now').innerText = data[2].timeframes[period].current;
            document.querySelector('#study-before').innerText = data[2].timeframes[period].previous;
            document.querySelector('#exercise-now').innerText = data[3].timeframes[period].current;
            document.querySelector('#exercise-before').innerText = data[3].timeframes[period].previous;
            document.querySelector('#social-now').innerText = data[4].timeframes[period].current;
            document.querySelector('#social-before').innerText = data[4].timeframes[period].previous;
            document.querySelector('#selfcare-now').innerText = data[5].timeframes[period].current;
            document.querySelector('#selfcare-before').innerText = data[5].timeframes[period].previous;
    })
}