let secondCount = 0;

let p1 = document.querySelector(".section-p__ExerciseText_Exercise1");
let text = "Keller";
let array = text.split("");
let wordCount = 0;

const i = setInterval(function () {
    p1.innerText += array[wordCount];
    wordCount++;

    if (wordCount === array.length) {
        clearInterval(i);
    }
}, 1000);

//////////////// Exercise 2
let p2 = document.querySelector(".section-p__ExerciseText_Exercise2");

setInterval(function () {
    if (secondCount % 60 === 0 && secondCount!== 0) {
        p2.innerText = `${secondCount / 60} minutes has passed`
        secondCount++;

    } else {
        p2.innerText = `${secondCount} seconds has passed`;
        secondCount++;
    }

}, 1000);

