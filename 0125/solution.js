const input = document.querySelector("#add-input");
const btn = document.querySelector("#add-btn");
const ul = document.querySelector("#list");
const li = document.createElement("li");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const newText = input.value;

  if (input.value) {
    li.innerHTML = `
    <p>${newText}</p>
            <p>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-times"></i>
            </p>`;
    ul.appendChild(li);
  } else {
    return;
  }
});
