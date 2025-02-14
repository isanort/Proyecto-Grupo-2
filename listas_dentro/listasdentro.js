console.log('Cargando datos...');

const param = new URLSearchParams(document.location.search);
const id = param.get('id');
console.log('ID:', id);

const headers = {
    method: 'GET', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(movie) // puede ir o no
};


const getList = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/lists/${id}`);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar la lista');
    }
    throw new Error('Error en la solicitud');
};

const getBook = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/books/id/${id}`);
        console.log(response);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar la lista');
    }
    throw new Error('Error en la solicitud');
};

//

//fetch get book

const onError = (message) => {
    const error = document.getElementById('error');
    console.log(message)
}


const printbook = async(bookId) => {
        console.log(bookId);
        console.log("bookId");
        getBook(bookId.id)
            .then((book) => {
                console.log("llamada libro", book);
                console.log("hola"); /////////cambiar para que sea más simple

                /*link.innerHTML = 
                                <img src=${book.bookcover} alt="${book.title}"/>
                                <p>${book.title}</p>
                                <p>${book.author}</p>;*/


                    const title = document.createElement('h2');
                    title.innerHTML = '';
                    title.textContent = book.title;

                    const img = document.createElement('img');
                    img.src = book.bookcover;


                    const author = document.createElement('p');
                    author.innerHTML = '';
                    author.textContent = book.author;

                    const link = document.createElement('a')
                    link.href = `../libro/libro.html?id=${book.id}`;

                    link.className ="tarjeta";

                    link.appendChild(img);
                    link.appendChild(title);
                    link.appendChild(author);
                    link.appendChild(author);

                    const section = document.getElementById("section");
                    section.appendChild(link);
                    
                })
            .catch((error) => {
                console.log("error heres", error)
                onError(error.message);
                console.log("error heres")
                });
    }

const printlist = async (id) => {
    getList(id)
        .then((list) => {
            console.log("llamada lista", list);
            
            const name = document.getElementById('name');
            name.innerHTML = '';
            name.textContent = list.name;

            const description = document.getElementById('description');
            description.innerHTML = '';
            description.textContent = list.description;

            const books = list.booksInList;

            console.log(books)

            books.forEach( (bookId) => {
                console.log(bookId);
                console.log("hiiii");
                printbook(bookId);
            
            })})
        
            .catch((error) => {
                onError(error.message);
                console.log("error in here")
            });
}

printlist(id)
    
const getFavBooks = async () => {
    return fetch(`http://localhost:3000/books/fav`, headers)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
            throw new Error('Error al cargar favbooks');
        });
};

const getToReadBooks = async () => {
return fetch(`http://localhost:3000/books/toread`, headers)
    .then((response) => {
        if (!response.ok) 
            throw new Error('Error en la solicitud: ' + response.status);
        
        return response.json();
        })
    .catch((error) => {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar toreadbooks');
    });
};

const getOwnedBooks = async () => {
    return fetch(`http://localhost:3000/books/owned`, headers)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
            throw new Error('Error al cargar ownedbooks');
        });
};

const getReadBooks = async () => {
    return fetch(`http://localhost:3000/books/read`, headers)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
            throw new Error('Error al cargar favbooks');
        });
};


const printFav = async () => {
    
    const name = document.getElementById('name');
    name.innerHTML = '';
    name.textContent = "favorites";
    getFavBooks()
        .then((books) => {

            console.log(books)

            books.forEach( (bookId) => {
                console.log(bookId);
                console.log("hiiii");
                printbook(bookId);
            
            })})
        
            .catch((error) => {
                onError(error.message);
                console.log("error in here")
            });
}


document.getElementById("edit").addEventListener("click", async () => {
    const param = new URLSearchParams(document.location.search);
    const id = param.get('id');
    window.location.href = `../editar_lista/editar_lista.html?id=${id}`;
})

