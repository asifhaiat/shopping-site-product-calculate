document.getElementById("suit-plus").addEventListener("click", function () {
  const suitInput = document.getElementById("suit-number");
  let suitNumber = suitInput.value;
  suitNumber++;
  suitInput.value = suitNumber;
  document.getElementById("suit-total").innerText = suitNumber * 60;

  const suitTotal = parseInt(document.getElementById("suit-number").value) * 60;
  const keyboardTotal = parseInt(document.getElementById("keyboard-number").value) * 40;

  const subTotal = suitTotal + keyboardTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.1;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
});
