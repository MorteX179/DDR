document.addEventListener("DOMContentLoaded", function () {
    const diceTab = document.getElementById("dice-tab");
    const armoryTab = document.getElementById("armory-tab");
    const diceContent = document.getElementById("dice-content");
    const armoryContent = document.getElementById("armory-content");

    diceTab.addEventListener("click", function () {
        diceContent.style.display = "block";
        armoryContent.style.display = "none";
    });

    armoryTab.addEventListener("click", function () {
        armoryContent.style.display = "block";
        diceContent.style.display = "none";
    });

    const rollDiceButton = document.getElementById("roll-dice-button");
    const diceTypeSelect = document.getElementById("dice-type");
    const bonusPointsInput = document.getElementById("bonus-points");
    const diceResult = document.getElementById("dice-result");

    rollDiceButton.addEventListener("click", function () {
        const diceType = parseInt(diceTypeSelect.value);
        const bonusPoints = parseInt(bonusPointsInput.value);

        const rolledNumber = Math.max(1, Math.floor(Math.random() * diceType) + 1);
        const totalResult = Math.max(1, rolledNumber + bonusPoints);

        diceResult.innerHTML = `<p>Total Result: ${totalResult}</p><p>Rolled: ${rolledNumber}</p><p>Bonus Points: ${bonusPoints}</p>`;
    });

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
        weaponItem.className = "saved-weapon";
        weaponItem.innerHTML = `<p>${name}</p>`;

        weaponItem.addEventListener("click", function () {
            const { name, diceType, numRolls, bonusPoints } = weapon;
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

        savedWeapons.appendChild(weaponItem);

        weaponNameInput.value = "";
        weaponNumRollsInput.value = 1;
        weaponBonusPointsInput.value = 0;
    });
});
                 
