let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector('.movie-list');

let allMovies = [
  {
    name: 'Forest Gump',
    watched: false,
  },
  {
    name: 'catch me if you can',
    watched: false,
  },
];

// create UI
input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovieUI();
  }
});

function deleteMovie(id) {
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createMovieUI(data = allMovies) {
  rootElm.innerHTML = '';
  data.forEach((movie, i) => {
    let li = elm(
      'li',
      { className: 'flex' },
      elm('input', { type: 'checkbox', id: i, checked: movie.watched }),
      elm('label', { for: i }, movie.name),
      elm('span', { 'data-id': i }, '❌')
    );
    rootElm.append(li);
  });
}

document.querySelector('.movie-list').addEventListener('click', (e) => {
  const { tagName } = e.target;
  const { id } = e.target.dataset;
  if (tagName === 'SPAN') {
    deleteMovie(id);
  }
});

createMovieUI();