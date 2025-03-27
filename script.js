document.querySelector('.roll-button').addEventListener('click', () => {
    const numOfDices = Math.min(6, Math.max(1, Number(document.getElementById('numOfDices').value)));
    const diceResult = document.getElementById('diceResult');
    const diceImage = document.getElementById('diceImage');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDices; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice/${value}.png" alt="Dice ${value}">`);
    }

    

    diceResult.innerHTML = ` Dices: ${values.join(', ')} `;
    diceImage.innerHTML = images.join("");
});