function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
        var tipAmount = (subtotal * tipPercentage) / 100;
        var totalAmount = subtotal + tipAmount;
        document.getElementById('totalAmount').innerHTML = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById('totalAmount').innerHTML = 'Please enter valid numbers.';
    }
}
