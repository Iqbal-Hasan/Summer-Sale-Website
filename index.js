let total = 0;
function handleClikBtn(name, num) {
  const selectedItem = document.getElementById("calculationEntry");
  const count = selectedItem.childElementCount;
  const itemName = name;
  const p = document.createElement("p");
  p.innerText = `${count + 1}. ${name}`;
  selectedItem.appendChild(p);

  const price = num;
  total = total + price;
  document.getElementById("total").innerText = total.toFixed(2);

  const makePurchase = document.getElementById("make-purchase");
  if (total > 0) {
    makePurchase.removeAttribute("disabled");
    makePurchase.classList.remove("cursor-not-allowed");
    makePurchase.style.backgroundColor = "#E527B2";
  }

  const apply = document.getElementById("apply");
  if (total >= 200) {
    apply.removeAttribute("disabled");
    apply.classList.remove("cursor-not-allowed");
    apply.style.backgroundColor = "#E527B2";
  }

  document
    .getElementById("inputFiled")
    .addEventListener("keyup", function (event) {
      const apply = document.getElementById("apply");

      const text = event.target.value;
      if (text === "SELL200") {
        apply.addEventListener("click", function () {
          const discount = document.getElementById("discount");
          discount.innerText = (total.toFixed(2) * (20 / 100)).toFixed(2);

          const totalTotal = document.getElementById("totalTotal");
        totalTotal.innerText = (total - total * (20 / 100)).toFixed(2);
        });
        
      }
    });

  const totalTotal = document.getElementById("totalTotal");
  totalTotal.innerText = total.toFixed(2);
}

