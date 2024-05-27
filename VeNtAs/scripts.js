document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Mostrar/ocultar menú en dispositivos móviles
    hamburgerIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    const carritoItems = document.getElementById('carrito-items');
    const enviarWhatsappBtn = document.getElementById('enviar-whatsapp');
    let carrito = [];

    // Añadir productos al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const producto = this.dataset.producto;
            const precio = parseFloat(this.dataset.precio);

            const item = carrito.find(item => item.producto === producto);
            if (item) {
                item.cantidad += 1;
            } else {
                carrito.push({ producto: producto, precio: precio, cantidad: 1 });
            }

            actualizarCarrito();
        });
    });

    // Enviar carrito a WhatsApp
    enviarWhatsappBtn.addEventListener('click', function() {
        const carritoText = carrito.map(item => `${item.producto} - Cantidad: ${item.cantidad}, Precio: $${item.precio}`).join('\n');
        const mensaje = encodeURIComponent(`Hola, me gustaría comprar los siguientes productos:\n\n${carritoText}`);
        const whatsappUrl = `https://wa.me/+51971171831?text=${mensaje}`;
        window.open(whatsappUrl, '_blank');
    });

    // Actualizar el carrito de compras
    function actualizarCarrito() {
        carritoItems.innerHTML = '';
        carrito.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.producto} - Cantidad: ${item.cantidad}, Precio: $${item.precio}`;
            carritoItems.appendChild(div);
        });

        enviarWhatsappBtn.disabled = carrito.length === 0;
    }
});
