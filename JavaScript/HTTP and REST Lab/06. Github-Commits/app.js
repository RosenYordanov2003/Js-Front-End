function loadCommits() {
    const usernameInputElement = document.getElementById('username');
    const repositoryElement = document.getElementById('repo');
    const ulElement = document.getElementById('commits');
    ulElement.textContent = '';
    const username = usernameInputElement.value;
    console.log(username);
    const repositoryName = repositoryElement.value;
    const baseURL = 'https://api.github.com/repos/';
    console.log(`${baseURL}${username}/${repositoryName}/commits`);
    fetch(`${baseURL}${username}/${repositoryName}/commits`)
    .then((response)=>response.json())
    .then((data)=>data.forEach(currentData => {
        const liElement = document.createElement('li');
        liElement.textContent = `${currentData.author.login}: ${currentData.commit.message}`;
        ulElement.appendChild(liElement);
    }))
    .catch((e)=>{
      const liElement = document.createElement('li');
      liElement.textContent = `Error: 404 (Not Found)`;
      ulElement.appendChild(liElement);
    });
}