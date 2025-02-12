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


const getBook = async () => {
        return fetch(`http://localhost:3000/books/id/110`, headers)
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


const onError = (message) => {
        const error = document.getElementById('error');
        error.textContent = message;
        error.style.display = 'block';
    }


const printBook = async (id) => {
    //fetch movie by id
    getBook(id) 
        .then((book) => {
            console.log("llamada libro", book);
            
            const bookcover = document.getElementById('bookcover');
            bookcover.src = book.bookcover;
            
            const title = document.getElementById('title');
            title.innerHTML = '';
            title.textContent = book.title;

            const author = document.getElementById('author');
            author.innerHTML = '';
            author.textContent = book.author;

            const genre = document.getElementById('genre');
            genre.innerHTML = '';
            genre.textContent = book.genre;

            const summary = document.getElementById('summary');
            summary.innerHTML = '';
            summary.textContent = book.summary;

            const format = document.getElementById('format');
            format.innerHTML = '';
            format.textContent = book.format;

            const language = document.getElementById('language');
            language.innerHTML = '';
            language.textContent = book.language;

            const pages = document.getElementById('pages');
            pages.innerHTML = '';
            pages.textContent = book.pages;

            const dateread = document.getElementById('dateread');
            dateread.innerHTML = '';
            dateread.textContent = book.dateread;

            //document.getElementById('movie').textContent = `Cargando movie con id: ${id}...`;
        }).catch((error) => {
            onError(error.message);
        });
}

printBook(id);

//const item = books.find((book) => book.id == id);
//list.appendChild(item.title);

//if en cada uno