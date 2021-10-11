const form = document.querySelector('.form');

const checkField = (elem) => {
    if (elem.name === 'fname' || elem.name === 'lname' || elem.name === 'tname') {
        if (elem.value < 5) elem.classList.add('error')
    }

    if (elem.)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    for (const elem of form.elements) {
        if (elem.tagName !== 'BUTTON') {
            checkField(elem)
        }
    }

    
});