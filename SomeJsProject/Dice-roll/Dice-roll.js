function rollDice () {
    const NumOfRoll = document.getElementById("NumOfRoll").value;
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const image = [];
    for (let i = 0; i < NumOfRoll; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        image.push(`<img src="Dice-image/${value}.jpg">`);
    }
    DiceResult.textContent = `Dice: ${values.join(', ')}`;
    DiceImages.innerHTML = image.join('');
}