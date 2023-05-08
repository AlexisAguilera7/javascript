let productos = [
 {
  nombre: "pelota",
  precio: 500,
 },
 {
  nombre: "camisetas",
  precio: 900,
 },
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
 listaDeProductos = listaDeProductos + ((i + 1) + "-" + productos[i].nombre + " - $" + productos[i].precio + "\n")
};
listaDeProductos += "0-para finalizar la compra\n" + "\n ingrese el producto que desea comprar";

do {
 opcionSeleccionada = prompt(listaDeProductos); //pido que productos agrega
 if ((opcionSeleccionada > 0) && (opcionSeleccionada <= productos.length)) { //condiciones segun la lista de productos 
  carrito.push(productos[opcionSeleccionada - 1].precio)  //resto uno porque arranca de cero
 };
} while (
 opcionSeleccionada != 0             //0 para finalizar la compra
);

console.log(carrito);

let total = carrito.reduce((a, b) => a + b, 0);

let envio = confirm("¿Desea agregar envío a domicilio por $200?"); // Preguntar si desea envio

if (envio) {
 total += 200;
}
alert(`El total a pagar es: $${total}`);

//mostrar productos al usuario
//pedirle al usuario el producto que desea comprar
//que cantidad desea de cada producto
//agrega envio a domocilio 
//calcular total, productos maas envio 
// Sumamos los precios de los productos seleccionados en el carrito
// Mostramos el total a pagar en un mensaje de alerta
