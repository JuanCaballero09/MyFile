document.addEventListener('DOMContentLoaded', () => { // Espera a que el DOM esté completamente cargado
    // Selecciona los elementos del DOM
    const section = document.getElementById('section-1');
    const links = document.querySelectorAll('#nav-link');

    // Contenidos simulados
    function loadView(viewName){
        fetch(`views/${viewName}.html`)
        .then(res => res.text())
        .then(html => {
            section.innerHTML = html;
        })
        .catch(err => {
            section.innerHTML = '<p>Error al cargar la vista</p><br>';
            console.error('Error al cargar la vista:', err);
        });
    }

    // Cargar menú por defecto
    loadView('menu');
    links[0].classList.add('active');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const views = link.getAttribute('data-section');
            loadView(views);
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
