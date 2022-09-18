Array.from(document.querySelectorAll('.menuparent > a, #mobile-main-menu > ul > li > a')).forEach(function (link) {
    link.href = "";
    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
    });
});

window.addEventListener('load', function () {
    let title = document.querySelector('h1 > a');
    title.innerHTML += ` &raquo; ${document.querySelector('#page-title').textContent.toUpperCase()}`;
});

