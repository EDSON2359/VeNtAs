<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Tienda Online</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="img/Logo de empresa.webp" alt="Mi Tienda Online Logo" class="logo">
            <h1>Mi Tienda Online</h1>
        </div>
        <nav>
            <img src="img/MENU.webp" alt="Menú" class="hamburger" id="hamburger-icon">
            <ul id="nav-menu">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#informatica">Informática</a></li>
                <li><a href="#libros">Libros</a></li>
                <li><a href="#revision">Revisión de Ensayos y Documentos</a></li>
                <li><a href="#empresariales">Libros Empresariales</a></li>
                <li><a href="#carrito">Carrito</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="inicio">
            <h2>Inicio</h2>
            <div class="inicio-content">
                <img src="img/1inicio.png" alt="Imagen de inicio" class="inicio-image">
                <p>Bienvenido a nuestra tienda en línea. Aquí encontrarás una amplia variedad de productos.</p>
            </div>
        </section>
        <section id="informatica">
            <h2>Informática</h2>
            <div class="section-content">
                <img src="img/informatica.webp" alt="Sección de Hacking e Informática" class="section-image">
                <div class="producto">
                    <h3>Producto 1</h3>
                    <p><strong>Tecnología de Vanguardia:</strong> Nuestro producto de drive está equipado con la última tecnología en hacking y seguridad informática. Diseñado por expertos del sector, este producto te proporciona herramientas avanzadas y capacidades de protección sin precedentes. Ya sea para uso personal o profesional, garantiza una seguridad robusta y una eficiencia mejorada.</p>
                    <p><strong>Fácil de Usar:</strong> Además de su potente funcionalidad, el producto (haking de todo) es increíblemente fácil de usar. Con una interfaz intuitiva y soporte técnico disponible las 24 horas, puedes empezar a usarlo de inmediato sin complicaciones. Ideal para expertos y principiantes, este producto hace que la seguridad informática sea accesible para todos.</p>
                    <button class="add-to-cart" data-producto="Producto 1" data-precio="1">Añadir al Carrito</button>
                </div>
                <div class="producto">
                    <h3>Producto 2</h3>
                    <p><strong>Alto Rendimiento:</strong> los archivos en el drive destaca por su alto rendimiento y fiabilidad. Diseñado para manejar tareas complejas y volúmenes grandes de datos, este producto asegura una operación suave y rápida. Perfecto para profesionales que requieren soluciones confiables y eficientes en su día a día.</p>
                    <p><strong>Soporte y Actualizaciones Continuas:</strong> Con el Producto 2, obtienes acceso a soporte y actualizaciones continuas. Nuestro equipo de expertos está siempre disponible para ayudarte y asegurarse de que tu producto esté siempre actualizado con las últimas mejoras y características. Mantente a la vanguardia de la tecnología con un soporte inigualable.</p>
                    <button class="add-to-cart" data-producto="Producto 2" data-precio="1">Añadir al Carrito</button>
                </div>
            </div>
        </section>
        <section id="libros">
            <h2>Libros</h2>
            <div class="section-content">
                <img src="img/libros.webp" alt="Sección de Libros" class="section-image">
                <div class="producto">
                    <h3>Libros Digitales</h3>
                    <p><strong>Inspiración y Conocimiento:</strong> Los libros no solo son una fuente inagotable de conocimiento, sino también una gran fuente de inspiración. Con lecciones prácticas y ejemplos reales, este libro te guía a través de conceptos complejos de manera sencilla y fácil de entender. Es una lectura obligada para cualquiera que desee ampliar sus horizontes y adquirir nuevas habilidades.</p>
                    <p><strong>Reseñas Positivas:</strong> Los libros han recibido críticas excelentes de lectores y expertos por igual. Con cientos de reseñas positivas, este libro se ha establecido como un referente en su categoría. No te pierdas la oportunidad de aprender de uno de los mejores en el campo y únete a la comunidad de lectores satisfechos.</p>
                    <button class="add-to-cart" data-producto="Libro 1" data-precio="1">Añadir al Carrito</button>
                </div>
                <div class="producto">
                    <h3>Aprende a ser Rico</h3>
                    <p><strong>Autores reconocidos:</strong> Estos libros ofrecen una perspectiva única y valiosa. Con años de experiencia y múltiples éxitos en su haber, el autor comparte sus conocimientos y estrategias que han demostrado ser eficaces una y otra vez. Este libro es tu oportunidad de aprender de los mejores.</p>
                    <p><strong>Herramientas Prácticas:</strong> Libro 2 no solo te proporciona teoría, sino también herramientas prácticas que puedes aplicar de inmediato. Con ejercicios, ejemplos y casos de estudio, estos libros te equipan con las habilidades necesarias para enfrentar desafíos reales y mejorar en tu campo. Es una inversión valiosa para tu desarrollo personal y profesional.</p>
                    <button class="add-to-cart" data-producto="Libro 2" data-precio="1">Añadir al Carrito</button>
                </div>
            </div>
        </section>
        <section id="revision">
            <h2>Revisión de Ensayos y Documentos</h2>
            <div class="section-content">
                <img src="img/revision.webp" alt="Imagen de revisión" class="section-image">
                <div class="servicio">
                    <h3>Revisión de Ensayo</h3>
                    <p><strong>Calidad y Precisión Garantizada:</strong> Nuestros servicios de revisión de ensayos y documentos están diseñados para ofrecerte la máxima calidad y precisión. Contamos con un equipo de expertos en redacción y corrección que revisan cada detalle de tu documento, asegurando que esté libre de errores gramaticales, ortográficos y de estilo. Además, proporcionamos sugerencias de mejora y comentarios constructivos para que tu trabajo no solo sea correcto, sino también excelente. Al elegirnos, te aseguras de presentar documentos impecables y profesionales.</p>
                    <button class="add-to-cart" data-producto="Revisión de Ensayo 1" data-precio="1">Añadir al Carrito</button>
                </div>
                <div class="servicio">
                    <h3>Ahorra Tiempo</h3>
                    <p><strong>Ahorra Tiempo y Mejora tus Resultados:</strong> Sabemos lo valioso que es tu tiempo, por eso te ofrecemos un servicio rápido y eficiente de revisión de ensayos y documentos. Mientras tú te enfocas en otras tareas importantes, nosotros nos encargamos de perfeccionar tu trabajo. Con nuestra ayuda, podrás entregar tus documentos a tiempo y con la confianza de que cumplirán con los más altos estándares de calidad. No solo ahorras tiempo, sino que también mejoras significativamente tus resultados académicos o profesionales.</p>
                    <button class="add-to-cart" data-producto="Revisión de Documento 2" data-precio="1">Añadir al Carrito</button>
                </div>
            </div>
        </section>
        <section id="empresariales">
            <h2>Libros Empresariales</h2>
            <div class="section-content">
                <img src="img/empresas.webp" alt="Imagen de libros empresariales" class="section-image">
                <div class="producto">
                    <h3>Libros Empresariales 1</h3>
                    <p><strong>Transformación Personal y Profesional:</strong> Los libros empresariales 1 ofrecen una combinación única de conocimientos y herramientas prácticas que pueden transformar tanto tu vida personal como profesional. Desde estrategias de liderazgo hasta consejos para la gestión del tiempo, estos libros están diseñados para ayudarte a alcanzar tus metas y maximizar tu potencial. Son una lectura esencial para cualquier persona que desee crecer y tener éxito en el mundo empresarial.</p>
                    <p><strong>Testimonios de Éxito:</strong> Los libros empresariales 1 han sido recomendados por líderes de la industria y emprendedores exitosos. Con cientos de testimonios positivos, estos libros han demostrado ser efectivos en la vida real. No pierdas la oportunidad de aprender de los mejores y unirte a una comunidad de lectores satisfechos que han alcanzado el éxito gracias a estas valiosas lecciones.</p>
                    <button class="add-to-cart" data-producto="Libro Empresarial 1" data-precio="1">Añadir al Carrito</button>
                </div>
                <div class="producto">
                    <h3>Libros Empresariales 2</h3>
                    <p><strong>Innovación y Creatividad:</strong> Los libros empresariales 2 se centran en la innovación y la creatividad, proporcionando ideas frescas y perspectivas únicas para resolver problemas y crear nuevas oportunidades. Perfectos para emprendedores y profesionales que buscan diferenciarse en el mercado, estos libros te inspirarán a pensar fuera de la caja y a desarrollar soluciones innovadoras.</p>
                    <p><strong>Aplicación Práctica:</strong> Además de ofrecer teoría, los libros empresariales 2 están llenos de ejemplos prácticos y casos de estudio que puedes aplicar de inmediato en tu negocio o carrera. Con ejercicios y estrategias comprobadas, estos libros te equipan con las habilidades necesarias para implementar cambios positivos y efectivos. Son una inversión valiosa para cualquier profesional.</p>
                    <button class="add-to-cart" data-producto="Libro Empresarial 2" data-precio="1">Añadir al Carrito</button>
                </div>
            </div>
        </section>
        <section id="carrito">
            <h2>Carrito de Compras</h2>
            <div id="carrito-items">
                <!-- Aquí se agregarán dinámicamente los elementos del carrito -->
            </div>
            <button id="enviar-whatsapp" disabled>Enviar a WhatsApp</button>
        </section>
        <section id="contacto">
            <h2>Contacto</h2>
            <div class="contacto-content">
                <img src="img/2imagen_de_contacto.webp" alt="Imagen de contacto" class="section-image">
                <form action="https://wa.me/+51971171831" method="get" target="_blank">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                    
                    <button type="submit">Enviar a WhatsApp</button>
                </form>
                <a href="https://wa.me/+51971171831" class="whatsapp-button" target="_blank">Contactar por WhatsApp</a>
            </div>
        </section>
        <section id="galeria">
            <h2>Galería de Imágenes</h2>
            <div class="galeria">
                <img src="img/1galeria.webp" alt="Imagen 1" class="small-image">
                <img src="img/2galeria.webp" alt="Imagen 2" class="small-image">
                <img src="img/3galeria.webp" alt="Imagen 3" class="small-image">
                <img src="img/4galery.webp" alt="Imagen 4" class="small-image">
                <img src="img/5galery.webp" alt="Imagen 5" class="small-image">
                <img src="img/6galery.webp" alt="Imagen 6" class="small-image">
            </div>
        </section>
        <section id="testimonios">
            <h2>Testimonios de Clientes</h2>
            <img src="img/iconodesatidfaccion.webp" alt="Logo de Satisfacción del Cliente" class="icon-image">
            <div class="testimonio">
                <p>"Excelente servicio y productos de alta calidad. ¡Muy recomendable!"</p>
                <p>- Cliente Satisfecho</p>
            </div>
            <div class="testimonio">
                <p>"Gran experiencia de compra, volveré pronto."</p>
                <p>- Cliente Feliz</p>
            </div>
        </section>
        <section id="blog">
            <h2>Blog</h2>
            <article>
                <h3>Transformando Tu Negocio con la Inteligencia Artificial</h3>
                <p>La inteligencia artificial (IA) está revolucionando la forma en que operan las empresas. Desde mejorar la eficiencia operativa hasta personalizar la experiencia del cliente, la IA ofrece infinitas posibilidades.</p>
                <p>Imagina un mundo donde las tareas repetitivas son automatizadas, permitiendo a los empleados centrarse en actividades más estratégicas. O un sistema de atención al cliente que puede responder preguntas en tiempo real, las 24 horas del día, los 7 días de la semana.</p>
                <p>En este artículo, exploramos cómo la IA puede transformar tu negocio y ofrecerte una ventaja competitiva.</p>
                <a href="articulos/transformando-negocio-ia.html">Leer más</a>
            </article>
            <article>
                <h3>Los Mejores Libros de Negocios que Debes Leer</h3>
                <p>Leer es una de las mejores maneras de adquirir conocimientos y habilidades. En el mundo de los negocios, hay libros que han resistido la prueba del tiempo y siguen siendo relevantes hoy en día.</p>
                <p>Desde "Padre Rico Padre Pobre" de Robert Kiyosaki hasta "Cómo Ganar Amigos e Influir Sobre las Personas" de Dale Carnegie, estos libros ofrecen lecciones invaluables para emprendedores y profesionales.</p>
                <p>Descubre nuestra selección de los mejores libros de negocios que debes agregar a tu biblioteca.</p>
                <a href="articulos/mejores-libros-negocios.html">Leer más</a>
            </article>
            <article>
                <h3>Cómo la IA Está Cambiando el Futuro del Trabajo</h3>
                <p>La inteligencia artificial no solo está cambiando la forma en que hacemos negocios, sino también cómo trabajamos. Desde la automatización de tareas rutinarias hasta la creación de nuevas oportunidades laborales, la IA está moldeando el futuro del trabajo.</p>
                <p>En este artículo, analizamos las tendencias emergentes y cómo puedes prepararte para un futuro impulsado por la IA.</p>
                <p>Explora cómo la inteligencia artificial está redefiniendo el panorama laboral.</p>
                <a href="articulos/futuro-trabajo-ia.html">Leer más</a>
            </article>
            <article>
                <h3>Estrategias Efectivas para Emprendedores</h3>
                <p>Emprender no es una tarea fácil. Requiere determinación, creatividad y una estrategia sólida. Ya sea que estés comenzando un nuevo negocio o buscando llevar tu empresa al siguiente nivel, tener un plan bien definido es crucial.</p>
                <p>Desde la identificación de tu mercado objetivo hasta la gestión de recursos y la creación de una marca sólida, te ofrecemos estrategias efectivas para triunfar en el mundo empresarial.</p>
                <p>Descubre cómo convertirte en un emprendedor exitoso con estos consejos prácticos.</p>
                <a href="articulos/estrategias-emprendedores.html">Leer más</a>
            </article>
            <article>
                <h3>Innovaciones Tecnológicas que Debes Conocer</h3>
                <p>La tecnología avanza a pasos agigantados, y estar al tanto de las últimas innovaciones es esencial para mantenerse competitivo. Desde la inteligencia artificial y la realidad aumentada hasta el Internet de las Cosas, estas tecnologías están cambiando la forma en que vivimos y trabajamos.</p>
                <p>En este artículo, te presentamos algunas de las innovaciones tecnológicas más impactantes y cómo pueden beneficiarte.</p>
                <p>Mantente informado y descubre las tendencias tecnológicas que están dando forma al futuro.</p>
                <a href="articulos/innovaciones-tecnologicas.html">Leer más</a>
            </article>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Mi Tienda Online. Todos los derechos reservados.</p>
        <div id="social-media">
            <a href="https://web.facebook.com/profile.php?id=61558373900088" target="_blank"><img src="img/facebook.jpg" alt="Facebook"></a>
            <a href="https://x.com/JhchVeTAs" target="_blank"><img src="img/twiter.jpg" alt="Twitter"></a>
            <a href="https://www.instagram.com/jhch391/" target="_blank"><img src="img/instagran.jpg" alt="Instagram"></a>
        </div>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>
