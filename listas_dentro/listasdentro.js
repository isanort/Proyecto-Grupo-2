const getBooks = async () => {
    try {
        const response = await fetch('http://localhost:3000/books');
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar los libros');
    }
    throw new Error('Error en la solicitud');
};

const printBooks = (books) => {
    const list = document.getElementById('section');
    list.innerHTML = '';
    books.forEach((book) => {
        const link = document.createElement('a');
        link.href = `../libro/libro.html?id=${book.id}`;
        link.textContent = book.title;
        const item = document.createElement('div');
        item.appendChild(link);
        list.appendChild(item);
        });
        };



        
const startLoadingData = () => {
    console.log('Cargando datos...');
    const error = document.getElementById('error');
    error.style.display = 'none';
    const list = document.getElementById('section');
    list.innerHTML = '';
};

const finishLoadingData = books => {
    printBooks(books);
};

const onLoadData = async () => {
    startLoadingData();
    try {
        const books = await getBooks();
        finishLoadingData(books);
    } catch (error) {
    }
}


onLoadData();


//         <h1>Favorites</h1>
//<section>
//<div class="The Complete Peanuts Vol.1: 1950-1952">
  //  <img src="1.jpg" alt="The Complete Peanuts Vol.1: 1950-1952">
    //<p>The Complete Peanuts Vol.1: 1950-1952</p>
//</div> //

