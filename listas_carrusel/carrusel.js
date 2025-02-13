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


const getBooks = async () => {
    return fetch(`http://localhost:3000/books`, headers)
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


const getLists = async () => {
    return fetch(`http://localhost:3000/lists`, headers)
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

const getBookbyId = async (id) => {
    return fetch(`http://localhost:3000/books/id/${id}`, headers)
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


const onError = (message) => {
        console.log(message);
    }

///////////////////////////

const printAllBooks = async() => {
    getBooks()
        .then((books) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

            /*link.innerHTML = 
                            <img src=${book.bookcover} alt="${book.title}"/>
                            <p>${book.title}</p>
                            <p>${book.author}</p>;*/

                
                books.forEach((book)=>
                    {
                console.log("llamada libro", book);
                const link = document.createElement('a');
                const img = document.createElement('img');
                img.src = book.bookcover;
                link.href = `../libro/libro.html?id=${book.id}`;
                img.className= "carousel-item";
                link.appendChild(img);


                const carrusel = document.getElementById("allbooks");
                carrusel.appendChild(link);
                    })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printAllBooks();


const printFavBooks = async() => {
    getFavBooks()
        .then((books) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

            /*link.innerHTML = 
                            <img src=${book.bookcover} alt="${book.title}"/>
                            <p>${book.title}</p>
                            <p>${book.author}</p>;*/

                
                books.forEach((book)=>
                    {
                console.log("llamada libro", book);
                const img = document.createElement('img');
                img.src = book.bookcover;
                img.className= "carousel-item";

                const carrusel = document.getElementById("carrusel");
                carrusel.appendChild(img);
                    })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printFavBooks();

const printToReadBooks = async() => {
    getToReadBooks()
        .then((books) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

            /*link.innerHTML = 
                            <img src=${book.bookcover} alt="${book.title}"/>
                            <p>${book.title}</p>
                            <p>${book.author}</p>;*/
                
                books.forEach((book)=>
                    {
                console.log("llamada libro", book);
                const img = document.createElement('img');
                img.src = book.bookcover;
                img.className= "carousel-item";

                const carrusel = document.getElementById("carrusel");
                carrusel.appendChild(img);
                    })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printToReadBooks();

const printOwnedBooks = async() => {
    getOwnedBooks()
        .then((books) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

            /*link.innerHTML = 
                            <img src=${book.bookcover} alt="${book.title}"/>
                            <p>${book.title}</p>
                            <p>${book.author}</p>;*/
                
                books.forEach((book)=>
                    {
                console.log("llamada libro", book);
                const img = document.createElement('img');
                img.src = book.bookcover;
                img.className= "carousel-item";

                const carrusel = document.getElementById("owned");
                carrusel.appendChild(img);
                    })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printOwnedBooks();

const printReadBooks = async() => {
    getReadBooks()
        .then((books) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

            /*link.innerHTML = 
                            <img src=${book.bookcover} alt="${book.title}"/>
                            <p>${book.title}</p>
                            <p>${book.author}</p>;*/
                
                books.forEach((book)=>
                    {
                console.log("llamada libro", book);
                const img = document.createElement('img');
                img.src = book.bookcover;
                img.className= "carousel-item";

                const carrusel = document.getElementById("read");
                carrusel.appendChild(img);
                    })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printOwnedBooks();

const printListBook = async() => {
    getLists()
        .then((lists) => {
        
            console.log("hola"); /////////cambiar para que sea más simple

                lists.forEach((list)=> {
                    //crear sección lista
                    console.log(list);
                    const section = document.createElement('section');
                    const div1 = document.createElement('div');
                    const div2 = document.createElement('div');
                    const title = document.createElement('div');
                    const link = document.createElement('a');
                    const name = document.createElement('h2');
                    name.textContent = list.name;
                    link.href = "";
                    section.className = "layout";
                    div1.className = "carousel-container";
                    div2.className = "carousel-items";
                    title.className = "titulo";
                    

                    const main = document.getElementById("main");
                    div1.className = "carousel-container";


                    link.appendChild(name);
                    title.appendChild(link);
                    div1.appendChild(div2);
                    section.appendChild(title)
                    section.appendChild(div1);
                    main.appendChild(section);

                    list.booksInList.forEach((bookId)=> {
                        console.log(bookId.id);
                        getBookbyId(bookId.id)
                            .then ((book) => {
                                if (book !== null){
                                console.log("llamada libro", book);


                                    const img = document.createElement('img');
                                    img.src = book.bookcover;
                                    img.className= "carousel-item";
                                    div2.appendChild(img);}
                            })

                            
                    })
                })
                
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printListBook();