const movies = [
   {id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8, watched: false},
   {id: 2, title: "The Dark Knight", genre: "Action", rating: 9.0, watched: false},
   {id: 3, title: "Interstellar", genre: "Sci-Fi", rating: 8.6, watched: false},
   {id: 4, title: "Parasite", genre: "Thriller", rating: 8.6, watched: false},
   {id: 4, title: "The Great Wall", genre: "Fantasy", rating: 8.2, watched: false}
];

let duplicateGenre = [];

// genre filter 
const genreContainer = document.getElementById('genre-filter-container');

// movie stats counter 
const totalCounter = document.getElementById('total-counter');
const watchedCounter = document.getElementById('watched-counter');

// movie collections container 
const moviesCollection = document.getElementById('all-movies-collection');


// rendering 
function renderingAllItems(moviesData){
    //-----> get all genre from array
    const moviesGenre = movies.map((movie) => movie.genre);
    // store unique genre from duplicate genre items
    moviesGenre.forEach((items) => {
        if(!duplicateGenre.includes(items)){
            duplicateGenre.push(items);
        }
    });
    // render all genre buttons
    duplicateGenre.forEach(genre => {
        genreContainer.innerHTML += `
        <button data-genre=${genre} class="bg-emerald-200 py-2 px-5 font-medium rounded-full shadow-sm genre-btn">${genre}</button>
    `
    });

    //-----> render all movies collection
    moviesData.forEach(data => {     
        moviesCollection.innerHTML += `
        <!-- movie cards -->
            <div class="text-center bg-[#00ffdd2d] shadow-md rounded-xl w-[250px] py-5 space-y-5">
                <!-- title -->
                <h2 class="font-semibold text-2xl">${data.title}</h2>
                <!-- genre & rating -->
                <div class="flex justify-center gap-x-4">
                    <h3>Genre: ${data.genre}</h3>
                    <h3>Rating: ${data.rating}</h3>
                </div>
                <!-- watch button -->
                <button class="bg-emerald-300 py-2 px-3 rounded-md font-medium text-[#000000be]">Tap To Watch</button>
            </div>
        `
    });
}
renderingAllItems(movies);


//-----> add event delegation on genre button's container 
genreContainer.addEventListener(('click'), (event) => {
    const selectedItems = event.target;
    if(!selectedItems.classList.contains('genre-btn')) return;
    const genreData = selectedItems.dataset.genre;
})