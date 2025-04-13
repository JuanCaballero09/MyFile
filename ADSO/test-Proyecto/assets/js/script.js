document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('section-1');
    const links = document.querySelectorAll('#nav-link');
    const loginBtn = document.getElementById('login-btn');
    const userInfo = document.getElementById('user-info');

    // Cargar vista por defecto
    function loadView(viewName){
        fetch(`views/${viewName}.html`)
            .then(res => res.text())
            .then(html => section.innerHTML = html)
            .catch(err => {
                section.innerHTML = '<p>Error al cargar la vista</p><br>';
                console.error('Error al cargar la vista:', err);
            });
    }

    // Activar links dinámicos
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const views = link.getAttribute('data-section');
            loadView(views);
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Cargar vista menú por defecto
    loadView('menu');
    links[0].classList.add('active');

    // Login
    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('a');       // Oculta el botón
        userInfo.classList.remove('a');    // Muestra la info del usuario
    });

    // Asegúrate de ocultar el usuario por defecto (aunque ya tiene clase .hidden)
    userInfo.classList.add('hidden');
});