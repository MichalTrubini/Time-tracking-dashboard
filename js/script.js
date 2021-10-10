/* fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].timeframes.weekly.current);
        document.querySelector('#work-now').innerText = data[0].timeframes.weekly.current;
        document.querySelector('#work-before').innerText = data[0].timeframes.weekly.previous;
        document.querySelector('#play-now').innerText = data[1].timeframes.weekly.current;
        document.querySelector('#play-before').innerText = data[1].timeframes.weekly.previous;
        document.querySelector('#study-now').innerText = data[2].timeframes.weekly.current;
        document.querySelector('#study-before').innerText = data[2].timeframes.weekly.previous;
        document.querySelector('#exercise-now').innerText = data[3].timeframes.weekly.current;
        document.querySelector('#exercise-before').innerText = data[3].timeframes.weekly.previous;
        document.querySelector('#social-now').innerText = data[4].timeframes.weekly.current;
        document.querySelector('#social-before').innerText = data[4].timeframes.weekly.previous;
        document.querySelector('#selfcare-now').innerText = data[5].timeframes.weekly.current;
        document.querySelector('#selfcare-before').innerText = data[5].timeframes.weekly.previous;
    }) */

    const period = 'weekly';

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].timeframes[period].current);
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

function getData (period){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0].timeframes['period'].current);
        document.querySelector('#work-now').innerText = data[0].timeframes['period'].current;
        document.querySelector('#work-before').innerText = data[0].timeframes['period'].previous;
        document.querySelector('#play-now').innerText = data[1].timeframes['period'].current;
        document.querySelector('#play-before').innerText = data[1].timeframes['period'].previous;
        document.querySelector('#study-now').innerText = data[2].timeframes['period'].current;
        document.querySelector('#study-before').innerText = data[2].timeframes['period'].previous;
        document.querySelector('#exercise-now').innerText = data[3].timeframes['period'].current;
        document.querySelector('#exercise-before').innerText = data[3].timeframes['period'].previous;
        document.querySelector('#social-now').innerText = data[4].timeframes['period'].current;
        document.querySelector('#social-before').innerText = data[4].timeframes['period'].previous;
        document.querySelector('#selfcare-now').innerText = data[5].timeframes['period'].current;
        document.querySelector('#selfcare-before').innerText = data[5].timeframes['period'].previous;
    })
};