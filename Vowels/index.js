function countCharacters() {
    var text = document.getElementById('userInput').value.toLowerCase();
    var total_vowels = 0;
    var total_consonants = 0;

    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if ('aeiou'.indexOf(char) !== -1) {
            total_vowels++;
        } else if (char.match(/[a-z]/i)) {
            total_consonants++;
        }
    }

    var outputElement = document.getElementById('final_output');
    outputElement.innerHTML = `<p>Total Count from the given input</p><p>Vowels Count: ${total_vowels}</p><p>Consonants Count: ${total_consonants}</p>`;
}
