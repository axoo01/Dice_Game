document.querySelector('.roll-button').addEventListener('click', () => {
    const inputField = document.getElementById('numOfDices');
    const numOfDices = Number(inputField.value);
    const diceResult = document.getElementById('diceResult');
    const diceImage = document.getElementById('diceImage');

    
    diceResult.textContent = "";
    diceImage.innerHTML = "";

    if (isNaN(numOfDices) || numOfDices < 1 || numOfDices > 6) {
        diceResult.textContent = "❌ Please enter a number between 1 and 6.";
        return; 
    }

    const values = [];
    const images = [];

    
    for (let i = 0; i < numOfDices; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.innerHTML = `🎲 Dices: ${values.join(', ')}`;
    diceImage.innerHTML = images.join("");
});
