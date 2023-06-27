let carrito = [];

function actualizarCarrito() {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
}

const getProductos = async () => {
  const respuesta = await fetch("productos.json");
  const productos = await respuesta.json();

  function crearCardProducto(productoCard) {
    const cardProductos = document.getElementById("cardProductos");
    actualizarCarrito();
    productoCard.forEach((producto) => {
      let divCard = document.createElement("div");
      divCard.id = producto.id;
      divCard.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio $${producto.precio}</p>
          <input type="button" class="agregarAlCarrito btn btn-primary" value="Agregar al carrito">
        </div>
      </div>`;

      cardProductos.append(divCard);

      const botonAgregar = divCard.querySelector(".agregarAlCarrito");
      botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto);
        Toastify({
          text: "Agregado al carrito",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          duration: 2000,
        }).showToast();
      });
    });
  }

  function agregarAlCarrito(producto) {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  crearCardProducto(productos);
};

getProductos();

const verCarrito = document.getElementById("carrito");
const mostrarCarrito = document.getElementById("carritoDeCompras");

verCarrito.addEventListener("click", () => {
  mostrarCarrito.innerHTML = "";

  const carritoCompras = document.createElement("div");
  carritoCompras.className = "compras";
  carritoCompras.innerHTML = `
    <h2 class="carrito">Carrito</h2>
  `;
  mostrarCarrito.append(carritoCompras);

  carrito.forEach((producto) => {
    let carritocontent = document.createElement("div");
    carritocontent.innerHTML = `
      <img src="${producto.imagen}">
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio}</p>
      <button class="btn btn-primary btnEliminar">Eliminar</button>
    `;
    mostrarCarrito.append(carritocontent);

    const botonEliminar = carritocontent.querySelector(".btnEliminar");
    botonEliminar.addEventListener("click", () => {
      eliminarDelCarrito(producto.id);
      mostrarCarrito.removeChild(carritocontent);
      Toastify({
        text: "Producto eliminado",
        style: {
          background: "red",
        },
        duration: 2000,
      }).showToast();
    });
  });

  function eliminarDelCarrito(id) {
    carrito = carrito.filter((producto) => producto.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  const totalCompra = document.createElement("button");
  totalCompra.id = "finalizarCompra";
  totalCompra.className = "btn btn-primary";
  totalCompra.innerText = `Finalizar compra $${total}`;
  mostrarCarrito.append(totalCompra);

  const finalizarCompra = document.getElementById("finalizarCompra");

  finalizarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Toastify({
        text: "El carrito está vacío",
        style: {
          background: "linear-gradient(to right, #e94545, #ffbf3f)",
        },
        duration: 2000,
      }).showToast();
    } else {
      mostrarAlerta();
    }
  });


  function mostrarAlerta() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Deseas finalizar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Genial',
          'compra realizada',
          'success'
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Compra cancelada',
          'Te invitamos a seguir mirando nuestras ofertas :)',
          'error'
        );
      };
    });
  };
});
