document.getElementById("keyboard-plus").addEventListener("click", function () {
  const keyboardInput = document.getElementById("keyboard-number");
  let keyboardNumber = keyboardInput.value;
  keyboardNumber++;
  keyboardInput.value = keyboardNumber;
  document.getElementById("keyboard-total").innerText = keyboardNumber * 40;

  const keyboardTotal = parseInt(document.getElementById("keyboard-number").value) * 40;
  const suitTotal = parseInt(document.getElementById("suit-number").value) * 60;

  const subTotal = keyboardTotal + suitTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.1;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
});
