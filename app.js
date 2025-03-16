// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [] //Array para ingresar los nombres de los amigos que se van a sortear

function agregarAmigos() {
    let entradaAmg = document.getElementById('amigo').value;

    if (entradaAmg === "") {
        alert('Por favor, inserte un nombre.');
        return;
    }
    console.log(`Nombre agregado: ${entradaAmg}`);
    amigos.push(entradaAmg);
    console.log(amigos);
    
    updateListaAmigos()
    //document.getElementById('amigo').value = '';
    }

function updateListaAmigos() {
    let vaciarCaja = document.querySelector('#amigo');
    vaciarCaja.value = '';

    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; //Limpiamos el esapcio de la web

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li'); // En este caso, tenemos un elemento li, que basícamente su funcion va a ser identificar cada elemento de la lista, ya que ul, es un elemento para listas desordenadas y hay otra como ol, y creo que es para listas ordenas.
        li.textContent = amigo; 
        listaHTML.appendChild(li); // Añadir el  el amigo al <ul>.
    });
}

function randomAmigo() {
    if (amigos.length < 2) { //Si la longitud de la lista que se va a ingresar es menos a dos, entonces tenemos un alert para que al menos haya 2 o más para sortearlos.
        alert('Debe haber al menos 2 amigos en la lista para sortear.');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li class="result-item">¡El amigo secreto es: ${amigoSorteado}!</li>`;
}

