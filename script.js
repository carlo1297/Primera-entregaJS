const productos = [
    { nombre: "Harina", precio: 50 },
    { nombre: "Queso", precio: 100 },
    { nombre: "Jamon", precio: 150 },
    { nombre: "Gaseosa", precio: 200 },
    { nombre: "Salchicha", precio: 250 }
]
let carrito = []

let seleccion = prompt("Hola desea comprar algun producto si o no")

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Desea comprar algo? (si/no)").toLowerCase();
}

if (seleccion == "si") {
    alert("A continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => `${producto.nombre} ${producto.precio}$`)
    alert(todosLosProductos.join("\n"))
} else if (seleccion === "no") {
    alert("gracias por su visita")
}

while (seleccion === "si") {
    let listaProductos = productos.map((producto) => `${producto.nombre} - ${producto.precio} $`).join("\n")

    let producto = prompt("Producto Disponibles:\n" + listaProductos + "\n\nAgrega un producto a tu carrito:").toLowerCase();
    let precio = 0
    let productoEncontrado = productos.find((item) => item.nombre.toLowerCase() === producto);

    if (productoEncontrado) {
        precio = productoEncontrado.precio;
        let unidades = parseInt(prompt("Cuantas unidades quieres llevar"))

        carrito.push({ producto, unidades, precio })
        console.log("Producto agregado al carrito");
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando? si/no").toLowerCase();
    if (seleccion === "no") {
        alert("gracias por su compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}
                , Total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })

        let detalleDeCompra = carrito.map((carritoFinal) =>
            `Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, 
    Total por producto: ${carritoFinal.unidades * carritoFinal.precio}$`).join("\n");

        const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
        console.log(`el total a pagar por su compra es: ${total}`)
        alert(`Resumen de su compra:\n${detalleDeCompra}\n\nTotal a pagar: ${total}$`)
    }
}


