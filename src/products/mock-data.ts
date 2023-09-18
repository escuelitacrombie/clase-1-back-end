import crypto from "crypto";

/** Hardcoded post for now, will use a orm and DB in a future */
const allProducts = [
    {
        "id":crypto.randomUUID(),
        "nombre": "Gafas de Sol Retro",
        "descripcion": "Gafas de sol de estilo retro con montura de acetato y lentes polarizadas. Perfectas para lucir a la moda en cualquier ocasión.",
        "precio": "49.99",
        "vendedor": "6",
        "stock": "30"
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Teléfono Inteligente Galaxy",
        "descripcion": "Teléfono inteligente de última generación con pantalla AMOLED, cámara de alta resolución y procesador de alto rendimiento. ¡Eleva tu experiencia móvil!",
        "precio": "699.99",
        "vendedor": "4",
        "stock": "20"
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Zapatillas Deportivas Air Max",
        "descripcion": "Zapatillas deportivas Air Max con tecnología de amortiguación de aire para una comodidad excepcional durante tus entrenamientos y actividades deportivas.",
        "precio": "89.99",
        "vendedor": "1",
        "stock": "40"
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Portátil Ultraligero",
        "descripcion": "Portátil ultraligero con pantalla táctil, procesador de última generación y diseño elegante. Ideal para trabajar y estudiar sobre la marcha.",
        "precio": '999.99',
        "vendedor": "2",
        "stock": '15'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Cámara Réflex Profesional",
        "descripcion": "Cámara réflex digital de nivel profesional con sensor de alta resolución y capacidad para grabación de video en 4K. Captura momentos inolvidables con calidad excepcional.",
        "precio": '1499.99',
        "vendedor": "3",
        "stock": '10'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Reloj de Lujo Elegante",
        "descripcion": "Reloj de lujo elegante con esfera de zafiro, movimiento automático y pulsera de cuero genuino. Un accesorio imprescindible para ocasiones especiales.",
        "precio": '199.99',
        "vendedor": "6",
        "stock": '25'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Tableta Gráfica Profesional",
        "descripcion": "Tableta gráfica profesional con sensibilidad a la presión y amplia área de trabajo. Perfecta para ilustradores y diseñadores gráficos.",
        "precio": '349.99',
        "vendedor": "5",
        "stock": '15'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Altavoz Bluetooth Portátil",
        "descripcion": "Altavoz Bluetooth portátil con sonido envolvente de alta calidad. Llévalo contigo y disfruta de tu música favorita en cualquier lugar.",
        "precio": '79.99',
        "vendedor": "1",
        "stock": '50'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Bicicleta de Montaña Todo Terreno",
        "descripcion": "Bicicleta de montaña todo terreno con cuadro de aluminio, frenos de disco y suspensión delantera. Conquista senderos y montañas con estilo.",
        "precio": '599.99',
        "vendedor": "1",
        "stock": '12'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Silla de Oficina Ergonómica",
        "descripcion": "Silla de oficina ergonómica con soporte lumbar ajustable y reposabrazos acolchados. Mejora tu comodidad y productividad en el trabajo.",
        "precio": '149.99',
        "vendedor": "1",
        "stock": '20'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Juego de Maletas de Viaje",
        "descripcion": "Juego de maletas de viaje con ruedas giratorias, cierre de combinación y compartimentos espaciosos. Prepárate para tus aventuras con estilo.",
        "precio": '199.99',
        "vendedor": "1",
        "stock": '18'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Cafetera Espresso Automática",
        "descripcion": "Cafetera espresso automática con molinillo de granos y espumador de leche. Disfruta del auténtico sabor del café en casa.",
        "precio": '349.99',
        "vendedor": "3",
        "stock": '8'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Kit de Herramientas Profesionales",
        "descripcion": "Kit de herramientas profesionales con llaves, destornilladores y alicates de alta calidad. Perfecto para proyectos de bricolaje y reparaciones.",
        "precio": '129.99',
        "vendedor": "2",
        "stock": '22'
    },

    {
        "id":crypto.randomUUID(),
        "nombre": "Guitarra Acústica Clásica",
        "descripcion": "Guitarra acústica clásica con cuerpo de madera de abeto y caoba. Perfecta para músicos principiantes y avanzados.",
        "precio": '249.99',
        "vendedor": "2",
        "stock": '14'
    },

];

export default allProducts