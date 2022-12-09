// enables deadlinks for top level menubar
Array.from(document.querySelectorAll('.menuparent > a, #mobile-main-menu > ul > li > a')).forEach(function (link) {
    link.href = "";
    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
    });
});

/**
 * Returns the abbreviation of string passed in, getting rid of non-title words such as "the", "a", "an", etc.
 * and captializing the first letter of each remaining word.
 *
 * @param {string} title
 * @returns {string}
 */
function titleToInitials(title) {
    let excludedWords = ['and', 'the', 'for', 'of'];
    let titleWords = title.split(' ').filter(word => word !== ''
                                                    && !excludedWords.includes(word.toLowerCase())
                                                    && /^[a-zA-Z]+$/.test(word));
    return titleWords.map(word => word[0]).join('');
}

// adds the page title to teh page header, abbreviated when needed avoid overflow onto menu bar.
window.addEventListener('load', function () {
    let title = document.querySelector('h1 > a');
    let pageTitle = document.querySelector('#page-title').textContent.toUpperCase().trim();
    if (pageTitle.length > 25) {
        pageTitle = titleToInitials(pageTitle);
    }

    title.parentElement.innerHTML += ` &raquo; ${pageTitle}`;
});


