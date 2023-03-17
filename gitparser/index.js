const mainEl = document.querySelector('.main');
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
const formEl = document.createElement('form');
formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputsValue = Object.fromEntries(new FormData(e.target));
  const response = await fetch(`
  https://api.github.com/search/repositories?q=${inputsValue.name}
  `);

  if (response.ok) {
    const data = await response.json();
    const items = data.items
    items.map((item) =>{wrapper.appendChild(createRepoEl(item))})
    mainEl.appendChild(wrapper);
    inputEl.value = '';
  } else {
    alert("Репозитории не найдены не найден")
  }
})

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name')

const searchButtonEl = document.createElement('button')
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Search";

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

function createRepoEl(profileData) {
  const element = document.createElement('div');
  element.classList.add('profile');
  console.log(profileData)
  element.innerHTML = `
    <p class="search-text"><span>ID: </span>${profileData.id}</p>
    <p class="search-text"><span>Name: </span><a href="${profileData.svn_url}">${profileData.name}</a></p>
  `
  return element;
}


