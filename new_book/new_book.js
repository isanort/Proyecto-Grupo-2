//FRONT

document.addEventListener("DOMContentLoaded", function () {
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

