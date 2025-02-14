console.log('Cargando datos...');

const param = new URLSearchParams(document.location.search);
const id = param.get('id');

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
    console.log("hola")
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


const select = document.getElementById('lists');

const listheader = {
    method: 'PATCH', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"id": select.value}) // puede ir o no
};

const addBookToList = async (id) => {
    console.log("hola");
    return fetch(`http://localhost:3000/books/${id}/addList`, listheader)
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
        showfav(id);
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
        showtoread(id);
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
        showowned(id);
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
            
            if (book.fav === true) {
                fav.style= 'opacity: 1'; 
            }
            else if (book.fav === false) {
                fav.style= 'opacity: 0.5'; 
            }
})}

const showtoread = async () => {
    getBook(id)
        .then ((book) => {
            console.log("to read libro", book.toread);
            
            if (book.toread === true) {
                toread.style= 'opacity: 1'; 
            }
            else if (book.toread === false) {
                toread.style= 'opacity: 0.5'; 
            }
})}

const showowned = async () => {
    getBook(id)
        .then ((book) => {
            console.log("owned libro", book.owned);
            
            if (book.owned === true) {
                owned.style= 'opacity: 1'; 
            }
            else if (book.owned === false) {
                owned.style= 'opacity: 0.5'; 
            }
})}

/*document.getElementById("lists").addEventListener("click", async () => {
    try {
        const response = await fetch('http://localhost:3000/lists');
            if (response.ok) {
            const lists = await response.json();
            loadLists(lists);  // Función para cargar los valores en los select
    } else {
    console.error('Error al obtener los filtros');
    }
} catch (error) {
    console.error("Error al cargar los filtros:", error);
}
});*/

document.getElementById("lists").addEventListener("click", async () => {
    try {
        console.log(JSON.stringify({id: select.value}));
        const response = await fetch('http://localhost:3000/lists');
            if (response.ok) {
            const lists = await response.json();
            loadLists(lists);  // Función para cargar los valores en los select
    } else {
    console.error('Error al obtener los filtros');
    }
} catch (error) {
    console.error("Error al cargar los filtros:", error);
}
});

document.getElementById("lists").addEventListener("change", async () => {
    console.log(id)
    console.log(select.value.toString())
    try {
        console.log(id);
        addBookToList(id);
} catch (error) {
    console.error("Error al añadir lista:", error);
}
});

const loadLists = (lists) => {
    const listsSelect = document.getElementById('lists');
        select.innerHTML = '';
    lists.forEach(list => {
        const option = document.createElement('option');
        option.value = list.id;
        option.textContent = list.name;
        listsSelect.appendChild(option);
    })}

const printBook = async () => {
    showfav()
    showowned()
    showtoread()
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

            const published = document.getElementById('published');
            published.innerHTML = '';
            published.textContent = book.published;

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