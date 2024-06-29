function applyResponsiveStyles() {
    const width = window.innerWidth;

    const container = document.querySelector('.container');
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    if (width <= 375) { // iPhone 8 and similar sizes
        container.style.width = '85%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.width = '95%'; // Ajusta según sea necesario para la vista móvil
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 14px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '25px';
            footer.style.display = 'flex';
            footer.style.flexDirection = 'column'; // Cambia la dirección del flex para apilar los elementos
            footer.style.alignItems = 'center'; // Centra los elementos verticalmente
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
            footer.style.padding = '10px'; // Añade un padding para separar los elementos del footer
        }
    } else if (width <= 1334) { // Adaptación para 1334x750 píxeles
        container.style.width = '80%'; // Ajusta según sea necesario para este tamaño de pantalla
        container.style.marginTop = '60px';

        if (navbar && footer) {
            navbar.style.width = '100%'; // Ajusta según sea necesario para la vista móvil
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 14px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '40px';
            footer.style.display = 'flex';
            footer.style.flexDirection = 'column'; // Cambia la dirección del flex para apilar los elementos
            footer.style.alignItems = 'center'; // Centra los elementos verticalmente
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
            footer.style.padding = '10px'; // Añade un padding para separar los elementos del footer
        }
    } else {
        // Ajusta los estilos para pantallas más grandes si es necesario
        container.style.width = '70%';
        container.style.marginTop = '60px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '70px';
            footer.style.display = 'flex';
            footer.style.flexDirection = 'column'; // Cambia la dirección del flex para apilar los elementos
            footer.style.alignItems = 'center'; // Centra los elementos verticalmente
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
            footer.style.padding = '10px'; // Añade un padding para separar los elementos del footer
        }
    }
}

window.addEventListener('resize', applyResponsiveStyles);
document.addEventListener('DOMContentLoaded', applyResponsiveStyles);
