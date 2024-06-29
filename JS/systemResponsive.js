function applyResponsiveStyles() {
    const width = window.innerWidth;

    const container = document.querySelector('.container');
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');

    if (width <= 320) {
        container.style.width = '130%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.width = '415px';
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
    } else if (width <= 375) {
        container.style.width = '110%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.width = '415px';
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
    } else if (width <= 425) {
        container.style.width = '100%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.width = '425px';
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
    } else if (width <= 768) {
        container.style.width = '55%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '30px';
            footer.style.display = 'flex';
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.padding = '25px 35px';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    } else if (width <= 1424) {
        container.style.width = '45%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '40px';
            footer.style.display = 'flex';
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.padding = '25px 35px';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    } else if (width <= 1440) {
        container.style.width = '35%';
        container.style.marginTop = '45px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '50px';
            footer.style.display = 'flex';
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.padding = '25px 35px';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    } else if (width <= 1920) {
        container.style.width = '35%';
        container.style.marginTop = '60px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '65px';
            footer.style.display = 'flex';
            footer.style.justifyContent = 'space-between';
            footer.style.alignItems = 'center';
            footer.style.padding = '25px 35px';
            footer.style.backgroundColor = '#353a40';
            footer.style.color = '#fff';
            footer.style.fontSize = '14px';
        }
    } else if (width <= 2560) {
        container.style.width = '25%';
        container.style.marginTop = '75px';

        if (navbar && footer) {
            navbar.style.display = 'flex';
            navbar.style.justifyContent = 'space-between';
            navbar.style.alignItems = 'center';
            navbar.style.padding = '10px 20px';
            navbar.style.backgroundColor = '#353a40';
            navbar.style.color = '#fff';

            footer.style.marginTop = '95px';
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
