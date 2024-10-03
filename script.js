function makeChoice(choice) {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");

    if (choice === 'explorar') {
        storyElement.innerText = "Você encontra um caminho iluminado. Você quer seguir ou voltar?";
        choicesElement.innerHTML = `
            <button onclick="makeChoice('seguir')">Seguir o caminho</button>
            <button onclick="makeChoice('voltar')">Voltar para a floresta</button>
        `;
    } else if (choice === 'voltar') {
        storyElement.innerText = "Você decidiu voltar para casa. Fim da aventura!";
        choicesElement.innerHTML = '';
    } else if (choice === 'seguir') {
        storyElement.innerText = "Você encontra uma linda cabana. Você quer entrar ou voltar?";
        choicesElement.innerHTML = `
            <button onclick="makeChoice('entrar')">Entrar na cabana</button>
            <button onclick="makeChoice('voltar')">Voltar para o caminho</button>
        `;
    } else if (choice === 'entrar') {
        storyElement.innerText = "Dentro da cabana, você encontra um tesouro! Você ganhou a aventura!";
        choicesElement.innerHTML = '';
    }
}
