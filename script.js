// Add the following code after the Dice Roller functionality
const armoryRollButton = document.getElementById("armory-roll-button");
const weaponNameInput = document.getElementById("weapon-name");
const weaponDiceSelect = document.getElementById("weapon-dice");
const weaponNumRollsInput = document.getElementById("weapon-num-rolls");
const weaponBonusPointsInput = document.getElementById("weapon-bonus-points");
const armorySaveButton = document.getElementById("armory-save-button");
const savedWeapons = document.getElementById("saved-weapons");
const armoryResult = document.getElementById("armory-result");

const weapons = [];

armoryRollButton.addEventListener("click", function () {
    const diceType = parseInt(weaponDiceSelect.value);
    const numRolls = parseInt(weaponNumRollsInput.value);
    const bonusPoints = parseInt(weaponBonusPointsInput.value);

    let totalResult = 0;
    let rolledNumbers = [];

    for (let i = 0; i < numRolls; i++) {
        const rolledNumber = Math.max(1, Math.floor(Math.random() * diceType) + 1);
        rolledNumbers.push(rolledNumber);
        totalResult += rolledNumber;
    }

    totalResult = Math.max(1, totalResult + bonusPoints);

    armoryResult.innerHTML = `<p>Total Result: ${totalResult}</p><p>Rolled: ${rolledNumbers.join(", ")}</p><p>Bonus Points: ${bonusPoints}</p>`;
});

armorySaveButton.addEventListener("click", function () {
    const name = weaponNameInput.value;
    const diceType = parseInt(weaponDiceSelect.value);
    const numRolls = parseInt(weaponNumRollsInput.value);
    const bonusPoints = parseInt(weaponBonusPointsInput.value);

    const weapon = {
        name: name,
        diceType: diceType,
        numRolls: numRolls,
        bonusPoints: bonusPoints,
    };

    weapons.push(weapon);

    const weaponItem = document.createElement("div");
    weaponItem.className = "saved-weapon
