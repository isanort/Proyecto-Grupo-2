console.log('Cargando datos...');

const param = new URLSearchParams(document.location.search);
let id = param.get('id');
id = 110;
console.log('ID:', id);
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

const getBook = async (id) => {
    return fetch(`http://localhost:3000/books/id/${id}`, headers)
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

var numfav = 1;
var numtoread = 1;
var numowned = 1

document.getElementById("fav").addEventListener("click", function (){
    console.log(id)
    try {
        changeFavBook(id);
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
    }
    catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
    }
});

document.getElementById("fav").addEventListener("click", function () {
    try {
            if (numfav%2 == 0) {
                fav.style= 'opacity: 1'; 
                showfav(id);numfav++;
            }
            else {
                fav.style= 'opacity: 0.5';
                showfav(id); numfav++;
            }
    }
    catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
    }
});

document.getElementById("toread").addEventListener("click", function () {
    try {
            if (numtoread%2 == 0) {
                toread.style= 'opacity: 1'; 
                showtoread(id);numtoread++;
            }
            else {
                toread.style= 'opacity: 0.5';
                showtoread(id); numtoread++;
            }
    }
    catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
    }
});

document.getElementById("owned").addEventListener("click", function () {
    try {
            if (numowned%2 == 0) {
                owned.style= 'opacity: 1'; 
                showowned(id);numowned++;
            }
            else {
                owned.style= 'opacity: 0.5';
                showowned(id); numowned++;
            }
    }
    catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
    }
});

const showfav = async () => {
    getBook(id)
        .then ((book) => {
            console.log("fav libro", book.fav);
})}

const showtoread = async () => {
    getBook(id)
        .then ((book) => {
            console.log("toread libro", book.toread);
})}

const showowned = async () => {
    getBook(id)
        .then ((book) => {
            console.log("owned libro", book.owned);
})}

const printBook = async () => {
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