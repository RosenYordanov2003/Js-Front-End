function loadRepos() {
  const baseUrl = "https://api.github.com/users/testnakov/repos";
  const divElement = document.getElementById("res");

  fetch(baseUrl)
    .then((res) => res.text())
    .then((data) => (divElement.textContent = data))
    .catch((error) => console.error(error));
}
