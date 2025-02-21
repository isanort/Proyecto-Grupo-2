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
                        link.href = `../libro/libro.html?id=${book.id}`;
                        link.alt =`${book.title}`;
                        link.className= "tarjeta";
                        link.innerHTML =`
                            <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;

                        

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

                            const carrusel = document.getElementById("favoritesimg");
                            carrusel.innerHTML='';
                            books.forEach((book)=>
                                {
                            console.log("llamada libro", book);
                            
                            const link = document.createElement('a')
                            link.href = `../libro/libro.html?id=${book.id}`;
                            link.alt =`${book.title}`;
                            link.className= "tarjeta";
                            link.innerHTML =`
                                <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;

                            
            
                            
                            carrusel.appendChild(link);
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
                            const carrusel = document.getElementById("toreadimg");
                            carrusel.innerHTML='';
                            books.forEach((book)=>
                                {
                                    console.log("llamada libro", book);
                                    const link = document.createElement('a')
                                    link.href = `../libro/libro.html?id=${book.id}`;
                                    link.alt =`${book.title}`;
                                    link.className= "tarjeta";
                                    link.innerHTML =`
                                        <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;
        
                                    

                            
                            carrusel.appendChild(link);
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
                            const carrusel = document.getElementById("ownedimg");
                            carrusel.innerHTML='';
                            books.forEach((book)=>
                                {
                                    console.log("llamada libro", book);
                                    const link = document.createElement('a')
                                    link.href = `../libro/libro.html?id=${book.id}`;
                                    link.alt =`${book.title}`;
                                    link.className= "tarjeta";
                                    link.innerHTML =`
                                        <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;
        
                                    
            
                            
                            carrusel.appendChild(link);
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
                            const link = document.createElement('a')
                            link.href = `../libro/libro.html?id=${book.id}`;
                            link.alt =`${book.title}`;
                            link.className= "tarjeta";
                            link.innerHTML =`
                                <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;

                            
            
                            const carrusel = document.getElementById("readimg");
                            carrusel.appendChild(link);
                                })
                
            })
        .catch((error) => {
            console.log("error heres", error)
            onError(error.message);
            console.log("error heres")
            });
    }

printReadBooks();

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
                    link.href = `../listas_dentro/lists_inside.html?id=${list.id}`;
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

                                const link = document.createElement('a')
                                link.href = `../libro/libro.html?id=${book.id}`;
                                link.alt =`${book.title}`;
                                link.className= "tarjeta";
                                link.innerHTML =`
                                    <img src=${book.bookcover} alt="${book.title}" class= "carousel-item">`;

                                    div2.appendChild(link);}
                            
                            
                            
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



const button = document.querySelectorAll('.option');
console.log(button);

button.forEach((button) => {
    console.log(button.id);
    button.addEventListener("click", async () => {
    if (button.id === "favtitle") {
        console.log(button.id);
        const fav = document.getElementById("fav");
        console.log(fav.id);
        window.location.href = `../listas_dentro/lists_inside_options.html?option=${fav.id}`;
    }
    else if (button.id === "toreadtitle") {
        const toread = document.getElementById("toread");
        console.log(button.id);
        console.log(toread.id);
        window.location.href = `../listas_dentro/lists_inside_options.html?option=${toread.id}`;
    }
    else if (button.id === "ownedtitle") {
        const owned = document.getElementById("owned");
        console.log(button.id);
        console.log(owned.id);
        window.location.href = `../listas_dentro/lists_inside_options.html?option=${owned.id}`;
    }
    else if (button.id === "allbookstitle") {
        const allbooks = document.getElementById("allbooks");
        console.log(button.id);
        console.log(allbooks.id);
        window.location.href = `../listas_dentro/lists_inside_options.html?option=${allbooks.id}`;
    }

})})


