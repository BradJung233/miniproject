// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `      
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  updateItems(items, key, value);
  // const filterd = items.filter(item => item[key] === value);
  // console.log(filterd);
  // displayItems(filterd);
  // console.log(event.target.dataset.key);
  // console.log(event.target.dataset.value);
}

function updateItems(items, key, value) {
  let i = 0;
  const container = document.querySelectorAll('.items');
  // console.log(container);

  items.forEach(item => {
    if (items.filter(item => item[key] === value)) {
      // container[i].style.display = 'none';
      // const filterd = items.filter(item => item[key] === value);
      // console.log(filterd);
      // console.log(value);
      //console.log(filterd);

      console.log(document.querySelector('.item'));
      //item.classList.remove('invisible');
    } else {
      console.log('b');
      //item.classList.add('invisible');
    }
    i++;
  });
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
