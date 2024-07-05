const closeBtn = document.getElementById('closePetPopUP');
const popUp = document.getElementById('popup');

const openBtn = document.getElementById('dog');
const openBtn_two = document.getElementById('cat');
const openBtn_three = document.getElementById('hamster');

const openBtn_four = document.getElementById("walk_dogs");
const openBtn_five = document.getElementById("animal_feeding");
const openBtn_six = document.getElementById("grooming");





openBtn.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

openBtn_two.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

openBtn_three.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

openBtn_four.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

openBtn_five.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

openBtn_six.addEventListener('click', () => {
    popUp.classList.remove('hidden');
});

function ready(){
    var object365 = document.getElementById("name_one").value;
    var appointment_time = document.getElementById("slot").value;
    window.alert("Appointment Booked for " + object365 + " at " + appointment_time +  "!")
    console.log(object365);
    popUp.classList.add('hidden');
}