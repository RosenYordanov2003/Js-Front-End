function loadRepos() {
  const inputElement = document.getElementById("username");
  const ulElement = document.getElementById("repos");
  ulElement.textContent = "";
  const username = inputElement.value;
  const baseURL = "https://api.github.com/users/";
  fetch(`${baseURL}${username}/repos`)
    .then((res) => res.json())
    .then((data) =>
      data.forEach((currentData) => {
        const hrefElement = document.createElement("a");
        hrefElement.textContent = `${currentData.full_name}`;
        hrefElement.setAttribute("href", `${currentData.html_url}`);
        const liElement = document.createElement("li");
        liElement.appendChild(hrefElement);
        ulElement.appendChild(liElement);
      })
    )
    .catch((error) => {
      hrefElement.textContent = `${error}`;
      const liElement = document.createElement("li");
      liElement.appendChild(hrefElement);
      ulElement.appendChild(liElement);
    });
}
