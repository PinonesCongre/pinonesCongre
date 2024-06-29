function applyResponsiveStyles() {
    const width = window.innerWidth;

    const container = document.querySelector('.container');
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    if (width <= 375) { // iPhone 8 and similar sizes
        container.style.width = '100%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.width = '100%'; // Adjust as needed for mobile view
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 14px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '25px';
            footer.style.display = 'flex';
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    } else {
        // Adjust styles for larger screens if necessary
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
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.padding = '25px 35px';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    }
}

window.addEventListener('resize', applyResponsiveStyles);
document.addEventListener('DOMContentLoaded', applyResponsiveStyles);

}

window.addEventListener('resize', applyResponsiveStyles);
document.addEventListener('DOMContentLoaded', applyResponsiveStyles);
