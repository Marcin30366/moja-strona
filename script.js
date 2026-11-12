const goal = 3;
function totalMinutes(list) { 
    let sum = 0;
    list.forEach((t) => {
        sum = sum + t.minutes; 
    }); 
    return sum;
}


const msg = document.querySelector('#msg');
const circles = document.querySelectorAll('.circle');
msg.textContent = 'Do celu brakuje: 3';


const form = document.querySelector('#form');
const list = document.querySelector('#list');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const data = new FormData(form); 
    trainings.push({
        type: data.get('type'), 
        minutes: Number(data.get('minutes')), 
    }); 
    render(); 
});


function render() { 
    list.innerHTML = ''; 
    trainings.forEach((t) => {
        const li = document.createElement('li');
        li.textContent = `${t.type} · ${t.minutes} min`;
        list.appendChild(li); 
    }); 
    
    circles.forEach((circle, i) => {
        const done = i < trainings.length; 
        circle.classList.toggle('done', done); 
        circle.textContent = done ? '✓' : '+'; 
    });
    const rest = goal - trainings.length;

    if (rest > 0) {
    msg.textContent = `Do celu brakuje: ${rest}`;
    } else {
    msg.textContent = 'Cel tygodnia zrobiony! 🎉';
    }
}

// przy starcie: wczytaj zapisane albo pusta lista
const trainings = 
    JSON.parse(localStorage.getItem('trainings')) || [];
// po każdym dodaniu treningu:
localStorage.setItem('trainings', 
    JSON.stringify(trainings));
