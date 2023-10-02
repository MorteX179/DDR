document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            tabContents.forEach(content => content.style.display = "none");
            tabContents[index].style.display = "block";
        });
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

    const armorySaveButton = document.getElementById("armory-save-button");
    const weaponNameInput = document.getElementById("weapon-name");
    const weaponDiceSelect = document.getElementById("weapon-dice");
    const weaponNumRollsInput = document.getElementById("weapon-num-rolls");
    const weaponBonusPointsInput = document.getElementById("weapon-bonus-points");
    const savedWeapons = document.getElementById("saved-weapons");
    const armoryResult = document.getElementById("armory-result");
    const noxiaRulesCheckbox = document.getElementById("noxia-rules");

    const weapons = [];

    armorySaveButton.addEventListener("click", function () {
        const name = weaponNameInput.value;
        const diceType = parseInt(weaponDiceSelect.value);
        const numRolls = parseInt(weaponNumRollsInput.value);
        const bonusPoints = parseInt(weaponBonusPointsInput.value);
        const noxiaRulesChecked = noxiaRulesCheckbox.checked;

        const weapon = {
            name: name,
            diceType: diceType,
            numRolls: numRolls,
            bonusPoints: bonusPoints,
            noxiaRules: noxiaRulesChecked
        };

        weapons.push(weapon);

        const weaponItem = document.createElement("div");
        weaponItem.className = "dice";
        weaponItem.innerHTML = `<p>${name}</p><button class="remove-button">Remove</button>`;

        weaponItem.addEventListener("click", function () {
            const { diceType, numRolls, bonusPoints, noxiaRules } = weapon;
            let totalResult = 0;
            let rolledNumbers = [];

            for (let i = 0; i < numRolls; i++) {
                const rolledNumber = Math.max(1, Math.floor(Math.random() * diceType) + 1);
                rolledNumbers.push(rolledNumber);
                totalResult += rolledNumber;
            }

            if (noxiaRules && diceType === 20 && rolledNumbers.includes(20)) {
                totalResult *= 2;
            }

            totalResult = Math.max(1, totalResult + bonusPoints);

            armoryResult.innerHTML = `<p>Total Result: ${totalResult}</p><p>Rolled: ${rolledNumbers.join(", ")}</p><p>Bonus Points: ${bonusPoints}</p>`;
        });

        const removeButton = weaponItem.querySelector(".remove-button");
        removeButton.addEventListener("click", function (event) {
            event.stopPropagation();

            const index = weapons.indexOf(weapon);
            if (index !== -1) {
                weapons.splice(index, 1);
                savedWeapons.removeChild(weaponItem);
            }
        });

        savedWeapons.appendChild(weaponItem);

        weaponNameInput.value = "";
        weaponNumRollsInput.value = 1;
        weaponBonusPointsInput.value = 0;
        noxiaRulesCheckbox.checked = false;
    });

    const removeWeaponButtons = document.querySelectorAll(".remove-button");

    removeWeaponButtons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();

            weapons.splice(index, 1);
            const weaponItem = button.parentNode;
            savedWeapons.removeChild(weaponItem);
        });
    });
});
            
