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


const getOption = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/books/option/${id}`);
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
    error.innnerHTML = '';
    error.textContent = message;
    error.style.display = 'block';
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


const printToRead = async () => {
    
    const name = document.getElementById('name');
    name.innerHTML = '';
    name.textContent = "To Read";
    getToReadBooks()
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

printToRead()