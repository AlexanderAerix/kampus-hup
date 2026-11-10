import { dataA } from "./data.js";
// console.log(dataA[0]); // "alex"

const searchInput = document.querySelector("#search");
const articleItems = document.querySelectorAll("#articlechild");

function filterByName(event) {
  const searchTerm = event.target.value.trim().toLowerCase();

  articleItems.forEach(function (item) {
    const matches = item.textContent.toLowerCase().includes(searchTerm);
    item.style.display = matches ? "" : "none";
  });
}

searchInput.addEventListener("input", filterByName);


