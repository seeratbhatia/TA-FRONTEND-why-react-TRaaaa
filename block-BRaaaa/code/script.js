let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector('.movie-list');

let allMovies = [
  {
    name: 'Forest Gump',
    watched: false,
  },
  {
    name: 'Inception',
    watched: true,
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

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, i) => {
    let li = document.createElement('li');
    li.className = 'flex';
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = i;
    input.checked = movie.watched;
    input.addEventListener('change', handleChange);
    let label = document.createElement('label');
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement('span');
    span.innerText = '❌';
    span.setAttribute('data-id', i);
    span.addEventListener('click', deleteMovie);

    div.append(input, label);

    li.append(div, span);

    rootElm.append(li);
  });
}

createMovieUI();