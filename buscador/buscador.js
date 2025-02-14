

const printBooks = (books) => {
    const section = document.getElementById("section")
    section.innerHTML = "";
    books.forEach((book)=>{
    const link = document.createElement('a')
    link.href = `../libro/libro.html?id=${book.id}`;
        link.className= "tarjeta";
        link.innerHTML =`
        
        <img src=${book.bookcover} alt="${book.title}">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>`;

        section.appendChild(link);
        });
    };


    

    document.getElementById("filterbtn").addEventListener("click", async (event) => {
        event.preventDefault(); 
            const genre = document.getElementById('genre').value;
            const language = document.getElementById('language').value;
            const format = document.getElementById('format').value;
        //get array of books
            //Filters
            try {
                const response = await fetch(`http://localhost:3000/booksfilter?genre=${genre}&language=${language}&format=${format}`,{
                
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    //body: JSON.stringify(bookData)
                });
        
                if (response.ok) {
                    const filteredBooks = await response.json();
                    printBooks(filteredBooks);
                } else {
                    alert("No se han encontrado libros.");
                }  
            
            } 
            catch (error) {
                console.error("Error en la solicitud:", error);
                alert("No se pudo conectar con el servidor.");
                }
                });