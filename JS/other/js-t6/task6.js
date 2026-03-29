'use strict';
const numOfMovies = prompt('Num of movies');
const movies = [];

for (let i = 0; i < numOfMovies; i++) {
    const name = prompt('Give name');
    const rating = prompt('Give rating');
    movies.push({
        name: name,
        grade: rating,
    });
}
movies.sort(function (a, b) {
    return b.grade - a.grade;
});

document.querySelector('#fav').insertAdjacentHTML('afterbegin', movies[0].name);

for (const movie of movies) {
    document.querySelector('#target').innerHTML += `<li>
            ${movie.name}, ${movie.grade}
        </li>`;
}
