const list = document.getElementById("inventory");
const single = document.querySelectorAll(".single-product")

single.forEach((node) => {
    const itemCount = node.querySelector(".item-quantity");
    const add = node.querySelector("button[action='add']");
    const remove = node.querySelector("button[action='remove']");

    add.addEventListener("click", () => {
        console.log("hi")
        itemCount.value = parseInt(itemCount.value, 10) + 1;
      });

    remove.addEventListener("click", () => {
        itemCount.value = parseInt(itemCount.value, 10) - 1;
        if (itemCount.value <= 0) {
            list.removeChild(node);
        }
      });

})

