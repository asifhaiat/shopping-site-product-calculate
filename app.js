/* 
with function to reduce huge number line of code
*/

// handle increase button for suit and keyboard
document.getElementById('suit-plus').addEventListener('click', function () {
    updateProductNumber('suit', 60, true);
})

document.getElementById('keyboard-plus').addEventListener('click', function () {
    updateProductNumber('keyboard', 40, true);
})

// handle decrease button
document.getElementById('suit-minus').addEventListener('click', function () {
    updateProductNumber('suit', 60, false);
})

document.getElementById('keyboard-minus').addEventListener('click', function () {
    updateProductNumber('keyboard', 40, false);
})


function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);

    if(isIncreasing){
        productNumber++;
    }
    else if(productNumber > 0){
        productNumber--;
    }

    productInput.value = productNumber;

    if(productNumber > 0){
        document.getElementById(product + '-total').innerText = productNumber * price;
    }
    else{
        alert('Please add one product');
    }

    calculateTotal();
}

function calculateTotal(){
    const suitTotal = getInputValue('suit', 60);
    const keyboardTotal = getInputValue('keyboard', 40);

    const subTotal = suitTotal + keyboardTotal;
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);

    const tax = subTotal * 0.1;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);

    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

function getInputValue(product, price){
    let productNumber;
    if(document.getElementById(product + '-number') != null){
        productNumber = parseInt(document.getElementById(product + '-number').value);
    }
    else{
        productNumber = 0;
    }
    const productTotal = productNumber * price;
    return productTotal;
}

// remove product using event delegate

document.getElementById('suit-remove').addEventListener('click', function (event) {
    
    document.getElementById('suit-number').value = 0;
    calculateTotal();

    /* console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode);
    console.log(event.target.parentNode.parentNode.parentNode);
    console.log(event.target.parentNode.parentNode.parentNode.parentNode); */

    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('box-item1')); //event delegate
})

document.getElementById('keyboard-remove').addEventListener('click', function (event) {
    
    document.getElementById('keyboard-number').value = 0;
    calculateTotal();
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('box-item2')); //event delegate
})