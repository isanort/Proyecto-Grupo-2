console.log('Cargando datos...');

const param = new URLSearchParams(document.location.search);
//let id = param.get('id');

console.log('ID:', );
func = function(v){
    console.log(v);
}

const headers = {
    method: 'GET', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(movie) // puede ir o no
};

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

const book =  getRandomBook();
const id =  book.id;
console.log(book+"hi");

const header = {
    method: 'PATCH', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(movie) // puede ir o no
};

const onError = (message) => {
    const error = document.getElementById('error');
    error.textContent = message;
    error.style.display = 'block';
}


const changeToReadBook = async (id) => {
    return fetch(`http://localhost:3000/books/${id}/toread`, header)
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

const changeFavBook = async (id) => {
    return fetch(`http://localhost:3000/books/${id}/fav`, header)
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

const changeOwnedBook = async (id) => {
    return fetch(`http://localhost:3000/books/${id}/owned`, header)
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


const printBook = async () => {
    //fetch book by id
    getRandomBook()

        .then((book) => {
            console.log("llamada libro", book.id);
            const id = book.id;
            console.log("llamada libro", id);

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

            const published = document.getElementById('published');
            published.innerHTML = '';
            published.textContent = book.published;

            const dateread = document.getElementById('dateread');
            dateread.innerHTML = '';
            dateread.textContent = book.dateread;













            
            var numfav = 0;
            var numtoread = 0;
            var numowned = 0;
            
            document.getElementById("fav").addEventListener("click", function (book){
                console.log(id)
                try {
                    changeFavBook(id);
                    if (numfav%2 == 0) {
                        fav.style= 'opacity: 1'; 
                        console.log("añadido a fav", id);numfav++; ///no fucniona console.log
                    }
                    else {
                        fav.style= 'opacity: 0.5';
                        console.log("eliminado fav", id); numfav++;
                    }
                }
                catch (error) {
                    console.error("Error en la solicitud:", error);
                    alert("No se pudo conectar con el servidor.");
                }
            });
            
            document.getElementById("toread").addEventListener("click", function (){
                console.log(id)
                try {
                    changeToReadBook(id);
                    if (numtoread%2 == 0) {
                        toread.style= 'opacity: 1'; 
                        console.log("toread libro", book.id.toread);numtoread++;
                    }
                    else {
                        toread.style= 'opacity: 0.5';
                        console.log("toread libro", book.toread);numtoread++;
                    }
                }
                catch (error) {
                    console.error("Error en la solicitud:", error);
                    alert("No se pudo conectar con el servidor.");
                }
            });
            
            document.getElementById("owned").addEventListener("click", function (){
                console.log(id)
                try {
                    changeOwnedBook(id);
                    if (numowned%2 == 0) {
                        owned.style= 'opacity: 1'; 
                        console.log("owned libro", book.owned);numowned++;
                    }
                    else {
                        owned.style= 'opacity: 0.5';
                        console.log("owned libro", book.owned); numowned++;
                    }
                }
                catch (error) {
                    console.error("Error en la solicitud:", error);
                    alert("No se pudo conectar con el servidor.");
                }
            });
            
            console.log(book)

            //document.getElementById('movie').textContent = `Cargando movie con id: ${id}...`;
        }).catch((error) => {
            onError(error.message);
        });

};

printBook(id);

//const item = books.find((book) => book.id == id);
//list.appendChild(item.title);

//if en cada uno