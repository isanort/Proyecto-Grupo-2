const param = new URLSearchParams(document.location.search);
const id = param.get('id');


//Autofill with previous data
document.addEventListener("DOMContentLoaded", async function () {

  getBookbyId(id) 
      .then((book) => {
          const webname = document.getElementById("webname");
          webname.textContent = `Edit ${book.title}`;

          const title = document.getElementById("title");
          const author = document.getElementById("author");
          const genre = document.getElementById("genre");
          const summary = document.getElementById("summary");
          const format = document.getElementById("format");
          const language = document.getElementById("language");
          const pages = document.getElementById("pages");
          const published = document.getElementById("published");
          const dateread = document.getElementById("dateread");
          let preview = document.getElementById("preview");
          preview.hidden = false;

          title.value = book.title;
          author.value = book.author;
          genre.value = book.genre;
          summary.value = book.summary;
          format.value = book.format;
          language.value = book.language;
          pages.value = book.pages;
          published.value = book.published;
          dateread.value = book.dateread;

          preview.src = book.bookcover;


           /*/ Manejo de la imagen (conversión a Base64)
        let preview = "";
        if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        preview = await convertToBase64(file); // Convertimos la imagen a Base64
        }*/

      })})


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


const headers = {
  method: 'GET', // PUT, DELETE, GET, PATCH
  headers: {
      'Content-Type': 'application/json'
  },
  //body: JSON.stringify(movie) // puede ir o no
};




function convertToBase64(file) {
  return new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
  });
}

















//FRONT

document.addEventListener("DOMContentLoaded", function () {
  const returnback = document.getElementById("returnback") ;
  returnback.href= `../libro/libro.html?id=${id}`;
    const form = document.querySelector("form"); // Seleccionamos el formulario
    const fileInput = document.getElementById("bookcover"); // Input de imagen
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      // Capturamos los valores de los inputs
        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const genre = document.getElementById("genre").value;
        const summary = document.getElementById("summary").value.trim();
        const format = document.getElementById("format").value;
        const language = document.getElementById("language").value.trim();
        const pages = document.getElementById("pages").value;
        const published = document.getElementById("published").value;
        const dateread = document.getElementById("dateread").value;
       


      // Manejo de la imagen (conversión a Base64)
        let bookcover = "";
        if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        bookcover = await convertToBase64(file); // Convertimos la imagen a Base64
        }
      // Creamos el objeto que enviaremos al backend
        const bookData = {
        title,
        author,
        genre,
        summary,
        format,
        language,
        pages: parseInt(pages),
        published: parseInt(published),
        dateread,
        bookcover // Imagen en Base64
        };

        console.log("Enviando datos:", bookData);
      // Enviamos los datos al backend usando Fetch
        try {
        const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(bookData)
        });

        if (response.ok) {
            alert(`Libro guardado exitosamente!`);
          form.reset(); // Limpiar el formulario tras éxito
          window.location.href = `../listas_carrusel/carrusel.html`;
        } else {
            alert("Error al guardar el libro.");
        }
        } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar con el servidor.");
        }
    });

    // Función para convertir una imagen a Base64
    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        });
    }
    });


const fileInput = document.getElementById('bookcover'); 
const preview = document.getElementById('preview'); 

fileInput.addEventListener('change', function(event) { 
    const file = event.target.files[0]; 
    if (file) { 
        const reader = new FileReader(); 
        reader.onload = function(e) { 
            preview.src = e.target.result; 
            preview.hidden = false; // Show the image preview 
        } 
        reader.readAsDataURL(file); // Convert the file to a data URL 
    } else { 
        preview.hidden = true; // Hide the preview if no file is selected 
    } 
})




//Cancel button, return to book view
