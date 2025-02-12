// Display these items dynamically
const fruits = ["Apple", "Banana", "Cherry"];

const arrayList = document.getElementById("arrList");

for (let fruit in fruits) {
  const list = document.createElement("li");
  list.innerText = fruits[fruit];
  arrayList.appendChild(list);
}
