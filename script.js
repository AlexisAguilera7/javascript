class Producto {
 constructor(nombre, precio) {
  this.nombre = nombre;                                                  //constructor para moldear productos 
  this.precio = precio;
 }
}

const producto1 = new Producto("pelota", 500);
const producto2 = new Producto("camiseta", 900);                         //objetos instanciados
const producto3 = new Producto("tablero", 1500);
const producto4 = new Producto("zapatillas", 3000);

const PRODUCTOS = [producto1, producto2, producto3, producto4];          //agrupo los objetos en un array

let listaDeProductos = "";
let opcionSeleccionada;
let carrito = [];

for (let i = 0; i < PRODUCTOS.length; i++) {                             //generar lista de productos
 listaDeProductos += `${i + 1}-${PRODUCTOS[i].nombre} - $${PRODUCTOS[i].precio}\n`;
}
listaDeProductos += "0-para finalizar la compra\n\nIngrese el número del producto que desea comprar";

do {
 opcionSeleccionada = parseInt(prompt(listaDeProductos));                //ciclo para que el usuario seleccione productos deseados
 if (opcionSeleccionada > 0 && opcionSeleccionada <= PRODUCTOS.length) {
  carrito.push(PRODUCTOS[opcionSeleccionada - 1].precio);
 } else if (opcionSeleccionada > PRODUCTOS.length || opcionSeleccionada < 0 || isNaN(opcionSeleccionada)) {  //validar si opcion es valida 
  alert("Elija una opción válida");
 }
} while (opcionSeleccionada !== 0);

if (carrito.length > 0) {
 let incluirEnvio = prompt("¿Desea incluir envío a domicilio? (S/N)");  //suma envio a domicilio en caso de que sea necesario

 if (incluirEnvio.toLowerCase() === "s") {
  let costoEnvio = 300;
  carrito.push(costoEnvio);
 }

 const total = carrito.reduce((acumulador, precio) => acumulador + precio, 0);  //funcion reduce para sumar los precios de los objetos elejidos 

 alert(`El total a pagar es: $${total}`);                                       //mensaje de alerta con el monto total 
} else {
 alert("No se han agregado productos al carrito. Gracias por visitar nuestra tienda.");
}
