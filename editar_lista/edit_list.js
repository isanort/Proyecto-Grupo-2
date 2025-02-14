const param = new URLSearchParams(document.location.search);
const listid = param.get('id');
console.log(listid);

const newname = document.getElementById('name');
const newdescription = document.getElementById('description');


const headers = {
    method: 'PATCH', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify([{name: newname}, {description: newdescription}]) // puede ir o no
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
    const listid = param.get('id');
    console.log(listid);
    window.location.href = `../listas_dentro/lists_inside.html?id=${listid}`;
})

document.getElementById("save").addEventListener("click", async () => {
    editList(id);
})