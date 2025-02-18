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

const deleteheader = {
    method: 'DELETE', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(movie) // puede ir o no
};


const getList = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/lists/all/${id}`);
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


const printbook = async(book) => {
        console.log(book);
        console.log("bookId");
        getBook(book.id)
            .then((book) => {
                console.log("llamada libro", book);
                console.log("hola"); /////////cambiar para que sea más simple

                /*link.innerHTML = 
                                <img src=${book.bookcover} alt="${book.title}"/>
                                <p>${book.title}</p>
                                <p>${book.author}</p>;*/


                    const title = document.createElement('h3');
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

            for (const book of books) {
                console.log(book.id);
                printbook(book);
                }
            
            })
        
            .catch((error) => {
                onError(error.message);
                console.log("error in here")
            });
}

printlist(id)

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


document.getElementById("edit").addEventListener("click", async () => {
    const param = new URLSearchParams(document.location.search);
    const id = param.get('id');
    window.location.href = `../editar_lista/editar_lista.html?id=${id}`;
})


const getDeleteList = async (id) => {
    return fetch(`http://localhost:3000/lists/delete/${id}`, deleteheader)
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

document.getElementById("delete").addEventListener("click", async () => {
    const param = new URLSearchParams(document.location.search);
    const id = param.get('id');
    if (confirm("Delete list\nEither OK or Cancel.")===true){
    getDeleteList(id);
    alert(`Deleted list ${id}`);
    window.location.href = `../listas_carrusel/carrusel.html`}
})

document.addEventListener("DOMContentLoaded", function () {
    getList(id) 
        .then((list) => {
            const webname = document.getElementById("webname");
            webname.textContent = list.name;
        })})