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
    body: JSON.stringify(select) // puede ir o no
};
// JSON.stringify({"id": select.selectedOptions[0].value}) 
const nameid = document.getElementById("select")
const listjson = {
    nameid,
    };
//JSON.stringify({id: select.value})

const addBookToList = async (id) => {
    console.log("go to fetch");
    return fetch(`http://localhost:3000/books/${id}/addList`, listheader)
    .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
        });
};



document.getElementById("fav").addEventListener("click", function (){
    console.log(id)
    try {
        changeFavBook(id);
        showfavalert(id);
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
        showtoreadalert(id);
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
        showownedalert(id);
    }
    catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
    }
});

const showfavalert = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("fav libro", book.fav);
            
            if (book.fav === false) {
                fav.style= 'opacity: 1'; 
                alert(`añadido a fav`);
            }
            else if (book.fav === true) {
                fav.style= 'opacity: 0.5'; 
                alert(`eliminado de fav`);
            }
})}

const showfav = async (id) => {
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

const showtoreadalert = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("fav libro", book.toread);
            
            if (book.toread === false) {
                toread.style= 'opacity: 1'; 
                alert(`añadido a toread`);
            }
            else if (book.toread === true) {
                toread.style= 'opacity: 0.5'; 
                alert(`eliminado de toread`);
            }
})}

const showtoread = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("toread libro", book.toread);
            
            if (book.toread === true) {
                toread.style= 'opacity: 1'; 
            
            }
            else if (book.toread === false) {
                toread.style= 'opacity: 0.5'; 

            }
})}
/*const showtoread = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("to read libro", book.toread);
            
            if (book.toread === true) {
                toread.style= 'opacity: 1'; 
            }
            else if (book.toread === false) {
                toread.style= 'opacity: 0.5'; 
            }
})}*/


const showownedalert = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("fav libro", book.owned);
            
            if (book.owned === false) {
                owned.style= 'opacity: 1'; 
                alert(`añadido a owned`);
            }
            else if (book.owned === true) {
                owned.style= 'opacity: 0.5'; 
                alert(`eliminado de owned`);
            }
})}


const showowned = async (id) => {
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
/*const showowned = async (id) => {
    getBook(id)
        .then ((book) => {
            console.log("to read libro", book.owned);
            
            if (book.owned === true) {
                owned.style= 'opacity: 1'; 
            }
            else if (book.owned === false) {
                owned.style= 'opacity: 0.5'; 
            }
})}
*/

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
        //console.log(JSON.stringify({"id": select.selectedOptions[0].value}));
        const response = await fetch('http://localhost:3000/lists');
            if (response.ok) {
            const lists = await response.json();
            loadLists(lists);  // Función para cargar los valores en los select
    } else {
    console.error('Error al obtener las listas');
    }
} catch (error) {
    console.error("Error al cargar las listas:", error);
}
});

document.getElementById("lists").addEventListener("change", async () => {
    console.log("hii");
    console.log(id);
    try {
        const param = new URLSearchParams(document.location.search);
        const id = param.get('id');
        const response = await fetch(`http://localhost:3000/books/${id}/addList`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body:  JSON.stringify({"id": select.value})
        });
        if (response.ok) {
            alert("Lista guardada exitosamente!");// Limpiar el formulario tras éxito
        
        } else {
            alert("Error al guardar la lista.");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
       
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

    const getListbyId = async (id) => {
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


    const printList = async (listId) => {
        try {
            console.log("print");
            console.log(listId)
            const response = await fetch(`http://localhost:3000/lists/${listId}`);
                if (response.ok) {
                    const list = await response.json();
                    console.log(list.name);

                    return await list.name;
                    
                
                } else {
                    console.error('Error al obtener las listas');
                }
            } catch (error) {
            console.error("Error al cargar los filtros:", error);
        }}


        const printBook = async () => {
            showtoread(id);
            showfav(id);
            showowned(id)
            //fetch movie by id
            getBook(id) 
                .then((book) => {
                    const webname = document.getElementById("webname");
                    webname.textContent = book.title;
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
        
                    const lists = document.getElementById('booklists');
                    lists.innerHTML = '';
                    const booklistsid = book.customlists;
                    console.log(booklistsid);
                    booklistsid.forEach(async (listid) => {
                        console.log(listid.id);
                        const list = await getListbyId(listid.id);
                        console.log(list);
                        const link = document.createElement('a');
                        link.href = `../listas_dentro/lists_inside.html?id=${list.id}`;
                        link.textContent = `${list.name}, `;
                        lists.appendChild(link);
                    })

                })
                .catch((error) => {
                    onError(error.message);
                });}

document.addEventListener("DOMContentLoaded", function () {
    printBook(id);


            /*const owned = document.getElementById("owned");
            if (book.owned === true) {
                owned.style= 'opacity: 1'; 
            
            }
            else if (book.owned === false) {
                owned.style= 'opacity: 0.5'; 

            }

            console.log(book.customlists);
            book.customlists.forEach((list)=>{
                console.log(printList(list.id));

                printList(list);*/
                

            //document.getElementById('movie').textContent = `Cargando movie con id: ${id}...`;
        }).catch((error) => {
            onError(error.message);
            console.log(error.message);
});




//const item = books.find((book) => book.id == id);
//list.appendChild(item.title);

//if en cada uno



//Send to edit page
document.getElementById("edit").addEventListener("click", function (){


    window.location.href = `../new_book/edit_book.html?id=${id}`;
  
});