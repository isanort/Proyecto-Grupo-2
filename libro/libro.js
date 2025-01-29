console.log('Cargando datos...');

const param = new URLSearchParams(document.location.search);
const id = param.get('id');
console.log('ID:', id);

const getBook = async (id) => {
        return fetch(`http://localhost:3000/books/${id}`)
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
            const title = document.getElementById('title');
            
            title.innerHTML = '';
            title.textContent = book.title;
            //document.getElementById('movie').textContent = `Cargando movie con id: ${id}...`;
        }).catch((error) => {
            onError(error.message);
        });
}

printBook(id);

//const item = books.find((book) => book.id == id);
//list.appendChild(item.title);