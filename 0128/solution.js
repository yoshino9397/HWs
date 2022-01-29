const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter");

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  //clear result
  result.innerHTML = ``;

  const ul = document.createElement("ul");
  container.className = "user-list";
  results.map(() => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const user = document.createElement("div");
    const name = document.createElement("h4");
    const location = document.createElement("p");

    img.setAttribute("src", results.picture.thumbnail);
  });
}

getData();
