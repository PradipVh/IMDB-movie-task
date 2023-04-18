let cl = console.log;
const movieContainer = document.getElementById("movieContainer");
let imgPath = `https://image.tmdb.org/t/p/w1280`;
cl(results)

let cardResult = '';
results.forEach((movie) => {
    cl(movie)
    cardResult += `
    <div class="col-md-3 mb-4">
                    <div class="card">
                        <figure class="movieCard">
                            <img src="https://image.tmdb.org/t/p/w1280//${movie.poster_path}" alt="">
                            <figcaption>
                                <div class="name">
                                    <div class="row">
                                        <div class="col-sm-9">
                                           ${movie.title}
                                        </div>
                                        <div class="col-sm-3">
                                        <span class="rating" id="ratings">${movie.vote_average}</span> 
                                        </div>
                                    </div>
                                </div>
                                <div class="overview p-2">
                                    <h2>Overview</h2>
                                    <p>
                                    ${movie.overview}
                                    </p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>`
})
movieContainer.innerHTML = cardResult;



// rating = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// if (i = 0; i <= 5 === red;
//     i <= 8 === yellow; i <=10===green) {

// }


// var ratings = document.getElementById(`ratings`)
// cl(results)
// var colors = '';
// for (i = 0; i < 5 === red; i <= 8 === grey; i <= 10 === green) {

// }