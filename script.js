class Producto {
 constructor(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
 }
}

const producto1 = new Producto("pelota", 500);
const producto2 = new Producto("camiseta", 900);
const producto3 = new Producto("tablero", 1500);
const producto4 = new Producto("zapatillas", 3000);

const PRODUCTOS = [producto1, producto2, producto3, producto4];

let listaDeProductos = PRODUCTOS.map((producto, index) => `${index + 1}-${producto.nombre} - $${producto.precio}`).join("\n");
listaDeProductos += "\n0-para finalizar la compra\n\nIngrese el número del producto que desea comprar";

let opcionSeleccionada;
let carrito = [];

do {
 opcionSeleccionada = parseInt(prompt(listaDeProductos));

 if (opcionSeleccionada > 0 && opcionSeleccionada <= PRODUCTOS.length) {
  carrito.push(PRODUCTOS[opcionSeleccionada - 1].precio);
 } else if (isNaN(opcionSeleccionada)) {
  alert("Elija una opción válida");
 }
} while (opcionSeleccionada !== 0);

if (carrito.length > 0) {
 let incluirEnvio = prompt("¿Desea incluir envío a domicilio? (S/N)");

 if (incluirEnvio.toLowerCase() === "s") {
  let costoEnvio = 300;
  carrito.push(costoEnvio);
 }

 const total = carrito.reduce((acumulador, precio) => acumulador + precio, 0);

 alert(`El total a pagar es: $${total}`);
} else {
 alert("No se han agregado productos al carrito, gracias por visitar nuestra tienda!");
}
