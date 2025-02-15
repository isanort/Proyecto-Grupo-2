
const headers = {
    method: 'GET', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(movie) // puede ir o no
};



document.getElementById("random").addEventListener("click", async () => {
    console.log("hi");
    const getRandomBook = async () => {
        console.log("hi")
        return await fetch(`http://localhost:3000/books/random`, headers)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.status);
                }
                return response.json();
            })
            .catch((error) => {
                console.error('Ocurrió un error:', error.message);
                throw new Error('Error al cargar las películas');
            });
    };
    
    console.log("hi");
    const book = await getRandomBook();
    console.log(book.id);

    
    window.location.href = `../libro/libro.html?id=${book.id}`;


})