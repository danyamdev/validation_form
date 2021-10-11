const form = document.querySelector('.form');

const removeClassElems = () => Array.from(form.elements).forEach(elem => elem.classList.remove('error'));

const checkField = (elem) => {
    if (elem.name === 'fname' || elem.name === 'lname' || elem.name === 'tname') {
        if (elem.value.length < 5) elem.classList.add('error')
    }

    if (elem.name === 'password') {
        if (elem.value.length < 5) elem.classList.add('error')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    removeClassElems();

    for (const elem of form.elements) {
        if (elem.tagName !== 'BUTTON') {
            checkField(elem)
        }
    }

    
});