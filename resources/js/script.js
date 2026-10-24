const grades = document.querySelectorAll(".grade");
const progress = document.querySelector("progress");
const pointsTotal = document.querySelector("[points-total]");

let points = 0;

grades.forEach(grade => {
    const value = parseFloat(grade.textContent);

    if (!isNaN(value) && value >= 5.5) {
        points += 5;
    }
});

progress.value = points;
pointsTotal.textContent = `${points}/${progress.max}`;