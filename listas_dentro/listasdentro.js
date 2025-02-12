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


const getList = async () => {
    try {
        const response = await fetch('http://localhost:3000/lists/20');
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar la lista');
    }
    throw new Error('Error en la solicitud');
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
                console.log("hola");
                    const title = document.createElement('p');
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

                    document.getElementById("section").appendChild(link);
                })
            .catch((error) => {
                console.log("error heres", error)
                onError(error.message);
                console.log("error heres")
                });
    }

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

printlist(id)
    
/*const printBooks = async (list.bookinlist) (lists.bookinlist.forEach((bookId) => {
    getBook(bookId)
        .then((book) => {

                const img = document.createElement('img');
                img.src= book.bookcover;

                const title = document.createElement('p');
                title.innerHTML = '';
                title.textContent = book.title;

                const author = document.createElement('p');
                author.innerHTML = '';
                author.textContent = book.author;

                const link = document.createElement('a')
                link.href = `../libro/libro.html?id=${book.id}`;

                link.appendChild(img);
                link.appendChild(title);
                link.appendChild(author);
                link.appendChild(author);

                document.getElementById("section".appendChild(link));
            });

        }).catch((error) => {
            onError(error.message);
    }));
   */ 


        





/*const startLoadingData = () => {
    console.log('Cargando datos...');
    const error = document.getElementById('error');
    error.style.display = 'none';
    const list = document.getElementById('section');
    list.innerHTML = '';
};

const finishLoadingData = list => {
    printlist(list);
};

const onLoadData = async () => {
    startLoadingData();
    try {
        const list = await getlist();
        finishLoadingData(list);
    } catch (error) {
    }
}*/




//         <h1>Favorites</h1>
//<section>
//<div class="The Complete Peanuts Vol.1: 1950-1952">
  //  <img src="1.jpg" alt="The Complete Peanuts Vol.1: 1950-1952">
    //<p>The Complete Peanuts Vol.1: 1950-1952</p>
//</div> //

