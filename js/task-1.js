const items = document.querySelectorAll(".item");
console.log(items.length);
items.forEach(item => {
    console.log(`${item.querySelector("h2").textContent}  ${item.querySelectorAll("ul>li").length}`);
})