const param = new URLSearchParams(document.location.search);
const listid = param.get('id');
console.log(listid);

//const newname = document.getElementById('name');
//const newdescription = document.getElementById('description');


const getList = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/lists/${id}`);
        if (response.ok) {
            return await response.json();

        }
    } catch (error) {
        console.error('Ocurrió un error:', error.message);
        throw new Error('Error al cargar la lista');
    }
    throw new Error('Error en la solicitud');
};

document.addEventListener("DOMContentLoaded", function () {
    getList(listid) 
        .then((list) => {
            const name = document.getElementById("name");
            name.value = list.name;

            const description = document.getElementById("description");
            description.value = list.description;



            const webname = document.getElementById("webname");
            webname.textContent = list.name;
        })})



const headers = {
    method: 'PATCH', // PUT, DELETE, GET, PATCH
    headers: {
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify([{name: newname}, {description: newdescription}]) // puede ir o no
};

const editList = async (listid) => {
    const listname = document.getElementById("name");
    
  
    const listdescription = document.getElementById("description");


    console.log("hello")
    return fetch(`http://localhost:3000/lists/${listid}?name=${listname.value}&description=${listdescription.value}`, headers)

        .then((response) => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            window.location.href = `../listas_dentro/lists_inside.html?id=${listid}`;
            return response.json();
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error.message);
            throw new Error('Error al cargar las películas');
        });
};


//Return to list
document.getElementById("return").addEventListener("click", async () => {
    window.location.href = `../listas_dentro/lists_inside.html?id=${listid}`;
})
console.log(listid);
//console.log(newname);
//console.log(newdescription);

const form = document.querySelector("form"); // Seleccionamos el formulario

form.addEventListener("submit", async function (event) {
  event.preventDefault(); 
 
  
   
    console.log("hello")
    editList(listid);
    alert("Edited list");
})

//On cancel, return to list
document.getElementById("cancel").addEventListener("click", async () => {
    const param = new URLSearchParams(document.location.search);
    const listid = param.get('id');
    console.log(listid);
    window.location.href = `../listas_dentro/lists_inside.html?id=${listid}`;
})