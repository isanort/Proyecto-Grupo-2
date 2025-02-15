//FRONT

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Seleccionamos el formulario
    ///////const fileInput = document.getElementById("backgroundimage"); // Input de imagen
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      // Capturamos los valores de los inputs
        const name = document.getElementById("name").value.trim();
        const description = document.getElementById("description").value.trim();
      // Manejo de la imagen (conversión a Base64)
        //////
        /*let backgroundimage = "";
        if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        backgroundimage = await convertToBase64(file); */
        // Convertimos la imagen a Base64}
      // Creamos el objeto que enviaremos al backend
        const listData = {
        name,
        description,
        };

        console.log("Enviando datos:", listData);
      // Enviamos los datos al backend usando Fetch
        try {
        const response = await fetch("http://localhost:3000/lists", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(listData)
        });

        if (response.ok) {
            alert("Lista guardada exitosamente!");
          form.reset(); // Limpiar el formulario tras éxito
        } else {
            alert("Error al guardar la lista.");
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

