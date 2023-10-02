document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll-button");
    const diceTypeSelect = document.getElementById("dice-type");
    const numDiceInput = document.getElementById("num-dice");
    const bonusPointsInput = document.getElementById("bonus-points");
    const resultText = document.getElementById("result");
    const noxiaRulesCheckbox = document.getElementById("noxia-rules");

    // ... (previous dice roller code) ...

    const armoryRollButton = document.getElementById("armory-roll-button");
    const weaponNameInput = document.getElementById("weapon-name");
    const weaponDiceSelect = document.getElementById("weapon-dice");
    const weaponNumDiceInput = document.getElementById("weapon-num-dice");
    const weaponBonusPointsInput = document.getElementById("weapon-bonus-points");
    const armoryResultText = document.getElementById("armory-result");
    const armorySaveButton = document.getElementById("armory-save-button");
    const itemList = document.getElementById("item-list");

    // Initialize saved items array
    const savedItems = [];

    armoryRollButton.addEventListener("click", function () {
        // ... (previous armory roll code) ...
    });

    armorySaveButton.addEventListener("click", function () {
        const name = weaponNameInput.value;
        const diceType = parseInt(weaponDiceSelect.value);
        const numDice = parseInt(weaponNumDiceInput.value);
        const bonusPoints = parseInt(weaponBonusPointsInput.value);

        // Save the item/spell
        const savedItem = {
            name: name,
            diceType: diceType,
            numDice: numDice,
            bonusPoints: bonusPoints,
        };

        savedItems.push(savedItem);

        // Create a list item for the saved item
        const listItem = document.createElement("li");
        listItem.textContent = name;

        // Add a click event listener to roll the saved item
        listItem.addEventListener("click", function () {
            const totalResult = rollSavedItem(savedItem);
            armoryResultText.textContent = `${name} Damage: ${totalResult}`;
        });

        itemList.appendChild(listItem);

        // Clear input fields
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
            
