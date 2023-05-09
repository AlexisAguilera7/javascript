let productos = [
 {
  nombre: "pelota",
  precio: 500,
 },
 {
  nombre: "camisetas",
  precio: 900,
 },                            //array de productos con nombre y precio
 {
  nombre: "tableros",
  precio: 1500,
 },
 {
  nombre: "zapatillas",
  precio: 3000,
 }
];

let listaDeProductos = "";
let opcionSeleccionada;
let carrito = [];

for (let i = 0; i < productos.length; i++) {
 listaDeProductos = listaDeProductos + ((i + 1) + "-" + productos[i].nombre + " - $" + productos[i].precio + "\n");
}
listaDeProductos += "0-para finalizar la compra\n" + "\n ingrese el producto que desea comprar";

do {
 opcionSeleccionada = prompt(listaDeProductos); //pido que productos agrega
 if ((opcionSeleccionada > 0) && (opcionSeleccionada <= productos.length)) { //condiciones segun la lista de productos 
  carrito.push(productos[opcionSeleccionada - 1].precio);  //resto uno porque arranca de cero
 }
} while (
 opcionSeleccionada != 0             //0 para finalizar la compra
);

let incluirEnvio = prompt("¿Desea incluir envío a domicilio? (S/N)");

if (incluirEnvio.toLowerCase() === "s") {
 let costoEnvio = 300;
 carrito.push(costoEnvio);
}

let total = 0;

calcularTotal(carrito)

alert(`El total a pagar es: $${total}`);

function calcularTotal(listaCarrito) {
 for (let i = 0; i < listaCarrito.length; i++) {
  total += listaCarrito[i];
 }
}