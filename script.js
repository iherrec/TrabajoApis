async function obtenerPelicula() {
            const API_KEY = "80241d83";
            const titulo = document.getElementById("titulo").value;

            const url = `https://www.omdbapi.com/?t=${titulo}&apikey=${API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "False") {
                document.getElementById("nombre").textContent = "Película no encontrada";
                document.getElementById("anio").textContent = "";
                document.getElementById("genero").textContent = "";
                document.getElementById("poster").src = "";
                return;
            }

            document.getElementById("nombre").textContent = "Título: " + data.Title;
            document.getElementById("año").textContent = "Año: " + data.Year;
            document.getElementById("genero").textContent = "Género: " + data.Genre;
            document.getElementById("poster").src = data.Poster;
        }
