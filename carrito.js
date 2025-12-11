// carrito.js

// 1. Inicializamos el carrito (buscamos si ya hay algo guardado)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// 2. Función para añadir productos
function agregarAlCarrito(nombre, precio) {
    // Creamos el objeto producto
    const producto = {
        nombre: nombre,
        precio: precio,
        id: Date.now() // Un ID único por si quieres borrarlo después
    };

    // Lo metemos al array
    carrito.push(producto);

    // 3. Guardamos en el "disco duro" del navegador
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // 4. Feedback al usuario (Alerta simple o algo más "pro")
    alert(`¡Agregaste ${nombre} al carrito!`);
    
    // Opcional: Imprimir en consola para que tú veas que funciona
    console.log("Carrito actual:", carrito);
}