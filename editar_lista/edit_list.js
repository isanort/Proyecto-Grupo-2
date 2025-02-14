const param = new URLSearchParams(document.location.search);
const id = param.get('id');

const headers = {
    method: 'PATCH', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) // puede ir o no
};

const editList = async (id) => {
    return fetch(`http://localhost:3000/lists/${id}`, headers)

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

document.getElementById("return").addEventListener("click", async () => {
    const param = new URLSearchParams(document.location.search);
    const id = param.get('id');
    console.log(id);
    window.location.href = `../listas_dentro/lists_inside.html?${id}`;
})