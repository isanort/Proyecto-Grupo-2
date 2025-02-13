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


const getFavBook = async () => {
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

const getToReadBook = async () => {
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

const getOwnedBook = async () => {
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

const onError = (message) => {
        const error = document.getElementById('error');
        error.textContent = message;
        error.style.display = 'block';
    }

///////////////////////////


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

printBook(id);

//const item = books.find((book) => book.id == id);
//list.appendChild(item.title);

//if en cada uno


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


                const img = document.createElement('img');
                img.src = url(book.img)
                title.innerHTML = '';
                title.textContent = book.title;

                const div1 = document.createElement('div');
                div1.className ="carousel-items";

                const div2 = document.createElement('div');
                div2.className ="carousel-items";


                div1.appendChild(div2);
                div2.appendChild(img);

                const section = document.getElementById("section");
                section.appendChild(link);
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
}