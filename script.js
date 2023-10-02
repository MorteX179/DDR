document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll-button");
    const diceTypeSelect = document.getElementById("dice-type");
    const resultText = document.getElementById("result");

    rollButton.addEventListener("click", function () {
        const diceType = parseInt(diceTypeSelect.value);
        const rolledNumber = Math.floor(Math.random() * diceType) + 1;
        resultText.textContent = `Rolled: ${rolledNumber}`;
    });
});
