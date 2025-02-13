

const printBooks = (books) => {
    const section = document.getElementById("section")
    section.innerHTML = "";
    books.forEach((book)=>{
    const link = document.createElement('a')
        link.innerHTML =`
        <a href="../libro/libro.html?id=${book.id}" class="tarjeta tarjeta-5">
        <img src=${book.bookcover} alt="${book.title}">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        </a>`;

        section.appendChild(link);
        });
    };

//document.addEventListener('DOMContentLoaded', async () => {
document.getElementById("filterbtn").addEventListener("click", async (event) => {
    event.preventDefault(); 
        const genre = document.getElementById('genre').value;
        const language = document.getElementById('language').value;
        const format = document.getElementById('format').value;

    //get array of books
        //Filters
        try {
            const response = await fetch(`http://localhost:3000/books?genre=${genre}&language=${language}&format=${format}`) (
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json"
                },
                //body: JSON.stringify(bookData)
            });
    
            if (response.ok) {
                const filteredBooks = await response.json();
                printBooks(filteredBooks);
                alert("Libro guardado exitosamente!");
              form.reset(); // Limpiar el formulario tras éxito
            } else {
                alert("Error al guardar el libro.");
            }  
        
        } 
        catch (error) {
            console.error("Error en la solicitud:", error);
            alert("No se pudo conectar con el servidor.");
            }

            });
    

        