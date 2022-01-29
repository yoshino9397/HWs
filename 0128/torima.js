const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter");

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  const ul = document.createElement("ul");
  ul.className = "user-list";

  results.map((e) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const name = document.createElement("h4");
    const country = document.createElement("p");
    const email = document.createElement("p");

    img.setAttribute("src", e.picture.thumbnail);
    name.textContent = e.name.first;
    country.textContent = e.location.country;
    email.textContent = e.email;

    li.appendChild(img);
    li.appendChild(name);
    li.appendChild(country);
    li.appendChild(email);
    ul.appendChild(li);

    li.style.display = "block";
  });
  result.appendChild(ul);
}

filter.addEventListener("keyup", function (e) {
  let searchChar = e.target.value.toLowerCase();
  let users = result.getElementsByTagName("li");

  Array.from(users).forEach((user) => {
    if (user.toLocaleLowerCase().indexOf(searchChar) !== -1) {
      user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  });
});

getData();
