'use stric'

const productos = [
    { id: 01, name: 'PISCO TRES ERRES 35°', url_img: '../img/pisco.png', price: 3901.5, discount: 50, category: 'bebidas' },
    { id: 02, name: 'PISCO ALTO DEL CARMEN 35°', url_img: '../img/pisco.png', price: 6800, discount: 50, category: 'bebidas' },
    { id: 03, name: 'PISCO ALTO DEL CARMEN 40°', url_img: '../img/pisco.png', price: 5091.5, discount: 50, category: 'bebidas' },
    { id: 04, name: 'PISCOS ARTESANOS 35°', url_img: '../img/pisco.png', price: 3391.5, discount: 50, category: 'bebidas' },
    { id: 05, name: 'PISCO BAUZA 40°', url_img: '../img/pisco.png', price: 3391.5, discount: 50, category: 'bebidas' },
    { id: 06, name: 'PISCO CAMPANARIO 35°', url_img: '../img/pisco.png', price: 3391.5, discount: 50, category: 'bebidas' },
    { id: 07, name: 'PISCO CAMPANARIO 40°', url_img: '../img/pisco.png', price: 3391.5, discount: 50, category: 'bebidas' },
    { id: 08, name: 'PISCO DEL ESPIRITU DEL ELQUI 40°', url_img: '../img/pisco.png', price: 3391.5, discount: 50, category: 'bebidas' },

]



// declarando variables
const buscador = document.querySelector('#buscador');
const inputSearch = document.querySelector('#search');
// boton // const boton = document.querySelector('#boton'); //
const resultado = document.querySelector('#resultado');

const filtrar = () => {

    resultado.innerHTML = '';

    const texto = search.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.name.toLocaleLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <li>${producto.name} - valor: '${producto.price}'</li>
            `
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
    <li>Producto no encontrado.</li>
    `
    }

}


boton.addEventListener('click', filtrar);
search.addEventListener('keyup', filtrar);
filtrar();