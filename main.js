let arrayOfAnswers = [];

function calculateForUsers(name, currentAge, maxAge, estimatedAmount) {
    name = prompt("What's yoyr name?");
    currentAge = prompt("Your age");
    maxAge = 80;
    estimatedAmount = prompt("How much potatoes you eat weekly?");

    let letYearsInWeeks = (maxAge - currentAge) * 365 / 7;
    let eatedPopatoes = letYearsInWeeks * estimatedAmount;
    let eatedPopatoesRounded = Math.round(eatedPopatoes);
    let result = `${name} has ${currentAge} years and will eat ${eatedPopatoesRounded} potatoes untill age of ${maxAge}`;
    arrayOfAnswers.push(result) //Store answers
    alert(result);
}

calculateForUsers();