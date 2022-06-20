document.getElementById("keyboard-minus").addEventListener("click", function () {
  const keyboardInput = document.getElementById("keyboard-number");
  let keyboardNumber = keyboardInput.value;
  if (keyboardNumber > 0) {
    keyboardNumber--;
  }
  keyboardInput.value = keyboardNumber;
  if (keyboardNumber > 0) {
    document.getElementById("keyboard-total").innerText = keyboardNumber * 40;
  } else {
    alert("Please add one more item");
  }

  const keyboardTotal = parseInt(document.getElementById("keyboard-number").value) * 40;
  const suitTotal = parseInt(document.getElementById("suit-number").value) * 60;

  const subTotal = suitTotal + keyboardTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.1;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
});
