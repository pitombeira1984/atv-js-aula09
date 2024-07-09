document.getElementById('addButton').addEventListener('click', function() {
    const inputBox = document.getElementById('inputBox');
    const wordList = document.getElementById('wordList');
    const words = inputBox.value.split(' ');

    words.forEach(word => {
        if (word.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = word;
            wordList.appendChild(listItem);
        }
    });

    inputBox.value = ''; // Limpar a caixa de entrada
});
