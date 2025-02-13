

//document.addEventListener('DOMContentLoaded', async () => {
document.getElementById("filterButton").addEventListener("click", async () => {

    //get array of books
    const getBooks = async () => { if (document.getElementById('ToRead')=== "toread") 
                {
                    try {
                        const response = await fetch(`http://localhost:3000/books/toread`);
                        if (response.ok) {
                        return await response.json();
                        }
                    } catch (error) {
                        console.error('Ocurrió un error: ', error.message);
                        throw new Error('Error al cargar toread');
                    }
                    throw new Error('Error en la solicitud');
                }
                else if (document.getElementById('ToRead')=== "owned")
                    {
                        try {
                            const response = await fetch(`http://localhost:3000/books/owned`);
                            if (response.ok) {
                            return await response.json();
                            }
                        } catch (error) {
                            console.error('Ocurrió un error: ', error.message);
                            throw new Error('Error al cargar owned');
                        }
                        throw new Error('Error en la solicitud');
                    }
                    else if (document.getElementById('ToRead')=== "fav")
                        {
                            try {
                                const response = await fetch(`http://localhost:3000/books/fav`);
                                if (response.ok) {
                                return await response.json();
                                }
                            } catch (error) {
                                console.error('Ocurrió un error: ', error.message);
                                throw new Error('Error al cargar owned');
                            }
                            throw new Error('Error en la solicitud');
                        }
                        else if (document.getElementById('ToRead')=== "allbooks")
                            {
                                try {
                                    const response = await fetch(`http://localhost:3000/books/books`);
                                    if (response.ok) {
                                    return await response.json();
                                    }
                                } catch (error) {
                                    console.error('Ocurrió un error: ', error.message);
                                    throw new Error('Error al cargar owned');
                                }
                                throw new Error('Error en la solicitud');
                            }
        }
        //Filters
        const genre = document.getElementById('genre');
        const language = document.getElementById('language');
        const format = document.getElementById('format');
        const books = await getBooks()

        const result = books.filter(book =>         //json
                        book.genre = genre &&
                        book.language = language &&
                        book.format = format
                            )
        const printbook = async(bookId) => {
                                console.log(bookId);
                                console.log("bookId");
                                getBook(bookId.id)
                                    .then((book) => {
                                        console.log("llamada libro", book);
                                        console.log("hola"); /////////cambiar para que sea más simple
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
        
                            const section = document.getElementById("section")
                            section.innerHTML = "";
                            section.appendChild(link);
                            
                        })
                    .catch((error) => {
                        console.log("error heres", error)
                        onError(error.message);
                        console.log("error heres")
                        });
    
printbook(result);
            }})
    

        