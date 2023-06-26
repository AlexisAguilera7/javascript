
class Producto {
 constructor(id, nombre, precio, imagen) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
 }
}

const producto1 = new Producto(1, "Pelota", 500, "./multimedia/pelota.jpeg");
const producto2 = new Producto(2, "Camiseta", 900, "./multimedia/camiseta.jpeg");
const producto3 = new Producto(3, "Tablero", 1500, "./multimedia/tableros.jpeg");
const producto4 = new Producto(4, "Zapatillas", 3000, "./multimedia/zapatillas.jpeg");

const PRODUCTOS = [producto1, producto2, producto3, producto4];