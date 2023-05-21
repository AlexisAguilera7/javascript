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

let listaDeProductos = "";
let opcionSeleccionada;
let carrito = [];

for (let i = 0; i < PRODUCTOS.length; i++) {
 listaDeProductos += `${i + 1}-${PRODUCTOS[i].nombre} - $${PRODUCTOS[i].precio}\n`;
}
listaDeProductos += "0-para finalizar la compra\n\nIngrese el número del producto que desea comprar";

do {
 opcionSeleccionada = parseInt(prompt(listaDeProductos));
 if (opcionSeleccionada > 0 && opcionSeleccionada <= PRODUCTOS.length) {
  carrito.push(PRODUCTOS[opcionSeleccionada - 1].precio);
 } else if (opcionSeleccionada > PRODUCTOS.length || opcionSeleccionada < 0 || isNaN(opcionSeleccionada)) {
  alert("Elija una opción válida");
 }
} while (opcionSeleccionada !== 0);

let incluirEnvio = prompt("¿Desea incluir envío a domicilio? (S/N)");

if (incluirEnvio.toLowerCase() === "s") {
 let costoEnvio = 300;
 carrito.push(costoEnvio);
}

let total = 0;

calcularTotal(carrito);

alert(`El total a pagar es: $${total}`);

function calcularTotal(listaCarrito) {
 for (let i = 0; i < listaCarrito.length; i++) {
  total += listaCarrito[i];
 }
}
