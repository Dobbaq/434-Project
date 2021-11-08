const productOptions = document.querySelectorAll(".product-options");

productOptions.forEach((node) => {
  const itemCount = node.querySelector(".item-quantity");
  const add = node.querySelector("button[action='add']");
  const remove = node.querySelector("button[action='remove']");

  add.addEventListener("click", () => {
    itemCount.value = parseInt(itemCount.value, 10) + 1;
  });

  remove.addEventListener("click", () => {
    itemCount.value = parseInt(itemCount.value, 10) - 1;
  });
});
