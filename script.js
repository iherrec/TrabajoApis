async function obtenerPelicula() {
    const API_KEY = "80241d83";
    const titulo = document.getElementById("titulo").value;

    const url = `https://www.omdbapi.com/?t=${titulo}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            document.getElementById("nombre").textContent = "Película no encontrada";
            document.getElementById("año").textContent = "";
            document.getElementById("genero").textContent = "";
            document.getElementById("director").textContent = "";
            document.getElementById("actores").textContent = "";
            document.getElementById("plot").textContent = "";
            document.getElementById("imdb").textContent = "";
            document.getElementById("poster").src = "";
            return;
        }

        document.getElementById("nombre").textContent = "🎬 " + data.Title;
        document.getElementById("año").textContent = "📅 Año: " + data.Year;
        document.getElementById("genero").textContent = "🎭 Género: " + data.Genre;
        document.getElementById("director").textContent = "🎬 Director: " + data.Director;
        document.getElementById("actores").textContent = "⭐ Actores: " + data.Actors;
        document.getElementById("plot").textContent = "📝 Sinopsis: " + data.Plot;
        document.getElementById("imdb").textContent = "⭐ IMDb: " + data.imdbRating;
        document.getElementById("poster").src = data.Poster;

    } catch (error) {
        document.getElementById("nombre").textContent = "Error al cargar datos";
    }
}