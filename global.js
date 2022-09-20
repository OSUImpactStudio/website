// enables deadlinks for top level menubar
Array.from(document.querySelectorAll('.menuparent > a, #mobile-main-menu > ul > li > a')).forEach(function (link) {
    link.href = "";
    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
    });
});


function titleToInitials(title) {
    let excludedWords = ['and', 'the', 'for', 'of'];
    let titleWords = title.split(' ').filter(word => word !== '' && !excludedWords.includes(word.toLowerCase()) && /^[a-zA-Z]+$/.test(word));
    return titleWords.map(word => word[0]).join('');
}

// TODO - figure out how to only do this for 30 chars or more, or maybe for all pages but make sure all abreivations are correct (HCE edge case)
window.addEventListener('load', function () {
    let title = document.querySelector('h1 > a');
    let pageTitle = document.querySelector('#page-title').textContent.toUpperCase().trim();
    if (pageTitle.length > 25) {
        pageTitle = titleToInitials(pageTitle);
    }

    title.parentElement.innerHTML += ` &raquo; ${pageTitle}`;
});


