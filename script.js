document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll-button");
    const diceTypeSelect = document.getElementById("dice-type");
    const numDiceInput = document.getElementById("num-dice");
    const bonusPointsInput = document.getElementById("bonus-points");
    const resultText = document.getElementById("result");
    const noxiaRulesCheckbox = document.getElementById("noxia-rules");

    rollButton.addEventListener("click", function () {
        const diceType = parseInt(diceTypeSelect.value);
        const numDice = parseInt(numDiceInput.value);
        const bonusPoints = parseInt(bonusPointsInput.value);
        let totalResult = 0;

        for (let i = 0; i < numDice; i++) {
            const rolledNumber = Math.floor(Math.random() * diceType) + 1;
            totalResult += rolledNumber;
        }

        if (noxiaRulesCheckbox.checked && diceType === 20 && totalResult === 20) {
            totalResult *= 2;
        }

        totalResult += bonusPoints;
        resultText.textContent = `Rolled: ${totalResult}`;
    });

    const armoryRollButton = document.getElementById("armory-roll-button");
    const weaponNameInput = document.getElementById("weapon-name");
    const weaponDiceSelect = document.getElementById("weapon-dice");
    const weaponNumDiceInput = document.getElementById("weapon-num-dice");
    const weaponBonusPointsInput = document.getElementById("weapon-bonus-points");
    const armoryResultText = document.getElementById("armory-result");

    armoryRollButton.addEventListener("click", function () {
        const weaponName = weaponNameInput.value;
        const weaponDiceType = parseInt(weaponDiceSelect.value);
        const weaponNumDice = parseInt(weaponNumDiceInput.value);
        const weaponBonusPoints = parseInt(weaponBonusPointsInput.value);
        let totalResult = 0;

        for (let i = 0; i < weaponNumDice; i++) {
            const rolledNumber = Math.floor(Math.random() * weaponDiceType) + 1;
            totalResult += rolledNumber;
        }

        totalResult += weaponBonusPoints;
        armoryResultText.textContent = `${weaponName} Damage: ${totalResult}`;
    });
});
