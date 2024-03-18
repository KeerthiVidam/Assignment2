function checkPalindrome() {
    var input = document.getElementById('userInput').value;
    var reversedInput = input.split('').reverse().join('');

    if (input === reversedInput) {
        document.getElementById('final_output').innerHTML = 'Yes, it is a palindrome.';
    } else {
        document.getElementById('final_output').innerHTML = 'No, it is not a palindrome.';
    }
}
