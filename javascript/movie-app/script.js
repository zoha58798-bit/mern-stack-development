const API_KEY = "6b09ffdb";
const API_BASE = "https://www.omdbapi.com/";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movieGrid = document.getElementById("movieGrid");
const loadingSpinner = document.getElementById("loadingSpinner");
const noResults = document.getElementById("noResults");


searchInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        handleSearch()
    };
});

function handleSearch() {
    const query = searchInput.value.trim() || "movie";
    searchMovies(query);
}



async function searchMovies(query) {
    loadingSpinner.classList.remove("hidden");
    noResults.classList.add("hidden");
    movieGrid.innerHTML = "";

    try {
        const res = await fetch(
            `${API_BASE}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=1`,
        );
        const data = await res.json();

        if (data.Response === "True" && data.Search.length > 0) {
            data.Search.forEach((movie) => {
                movieGrid.appendChild(createMovieCard(movie));
            });
        } else {
            noResults.classList.remove("hidden");
        }
    } catch (err) {
        noResults.classList.remove("hidden");
    } finally {
        loadingSpinner.classList.add("hidden");
    }
}


function createMovieCard(movie) {
    const card = document.createElement("div");

    card.className =
        "movie-card group relaive bg-gray-800 rounded-lg overflow-hidden animate-fade-in";
    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

    card.innerHTML = `
          <div class="h-64 overflow-hidden relative" >
            <img src="${poster}" alt="${movie.Title}" class="poster-img" loading="lazy" />
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/70 flex items-center justify-center
            opacity-0 group-hover:opacity-100 transition duration-300">

            <button 
                onclick="showDetails('${movie.imdbID}')"
                class="bg-white text-black px-4 py-2 rounded font-semibold">
                View Details
            </button>

          </div>

          <div class="p-4">
            <h3 class="font-bold text-base mb-1 line-clamp-2">${movie.Title}</h3>
            <p class="text-gray-400 text-sm">${movie.Year}</p>
          </div>
        `;



    return card;
}

searchMovies("movie");

async function showDetails(id) {

    const res = await fetch(`${API_BASE}?apikey=${API_KEY}&i=${id}`);
    const data = await res.json();

    alert(
`Title: ${data.Title}
Year: ${data.Year}
Rating: ${data.imdbRating}
Genre: ${data.Genre}
Plot: ${data.Plot}`
    );
}