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
    const armorySaveButton = document.getElementById("armory-save-button");
    const itemList = document.getElementById("item-list");

    const savedItems = [];

    armoryRollButton.addEventListener("click", function () {
        const diceType = parseInt(weaponDiceSelect.value);
        const numDice = parseInt(weaponNumDiceInput.value);
        const bonusPoints = parseInt(weaponBonusPointsInput.value);
        let totalResult = 0;

        for (let i = 0; i < numDice; i++) {
            const rolledNumber = Math.floor(Math.random() * diceType) + 1;
            totalResult += rolledNumber;
        }

        totalResult += bonusPoints;
        armoryResultText.textContent = `Rolled: ${totalResult}`;
    });

    armorySaveButton.addEventListener("click", function () {
        const name = weaponNameInput.value;
        const diceType = parseInt(weaponDiceSelect.value);
        const numDice = parseInt(weaponNumDiceInput.value);
        const bonusPoints = parseInt(weaponBonusPointsInput.value);

        const savedItem = {
            name: name,
            diceType: diceType,
            numDice: numDice,
            bonusPoints: bonusPoints,
        };

        savedItems.push(savedItem);

        const listItem = document.createElement("li");
        listItem.textContent = name;

        listItem.addEventListener("click", function () {
            const totalResult = rollSavedItem(savedItem);
            armoryResultText.textContent = `${name} Damage: ${totalResult}`;
        });

        itemList.appendChild(listItem);

        weaponNameInput.value = "";
        weaponNumDiceInput.value = 1;
        weaponBonusPointsInput.value = 0;
    });

    function rollSavedItem(item) {
        let totalResult = 0;

        for (let i = 0; i < item.numDice; i++) {
            const rolledNumber = Math.floor(Math.random() * item.diceType) + 1;
            totalResult += rolledNumber;
        }

        totalResult += item.bonusPoints;

        return totalResult;
    }
});
