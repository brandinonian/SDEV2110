const form = document.querySelector('.input-form');
const feedback = document.querySelector('.feedback');


form.addEventListener('submit', e => {
    e.preventDefault();
    feedback.innerHTML = '';
    
    const idNum = form.idNum.value;
    const idPattern = /^[0-9]{10}$/;
    
    if(idPattern.test(idNum)){
        form.idNum.setAttribute('class', 'pass');
    } else {
        form.idNum.setAttribute('class', 'fail');
        feedback.innerHTML += 'user ID must be 10 digits<br />';
    }
    
    const firstName = form.firstName.value;
    const firstPattern = /^[a-zA-Z]{2,}$/;
    
    if(firstPattern.test(firstName)){
        form.firstName.setAttribute('class', 'pass');
    } else {
        form.firstName.setAttribute('class', 'fail');
        feedback.innerHTML += 'first name but be at least 2 letters only<br />';
    }
    
    const lastName = form.lastName.value;
    const lastPattern = /^[a-zA-Z]{2,}$/;

    if(lastPattern.test(lastName)){
        form.lastName.setAttribute('class', 'pass');
    } else {
        form.lastName.setAttribute('class', 'fail');
        feedback.innerHTML += 'last name must be at least 2 letters only<br />';
    }
});

form.idNum.addEventListener('keyup', e => {
    const idNum = form.idNum.value;
    const idPattern = /^[0-9]{10}$/;

    if(idPattern.test(idNum)){
        form.idNum.setAttribute('class', 'success');
    } else {
        form.idNum.setAttribute('class', 'error');
    }
});

form.firstName.addEventListener('keyup', e => {
    const firstPattern = /^[a-zA-Z]{2,}$/;

    if(firstPattern.test(e.target.value)){
        form.firstName.setAttribute('class', 'success');
    } else {
        form.firstName.setAttribute('class', 'error');
    }
});

form.lastName.addEventListener('keyup', e => {
    const lastPattern = /^[a-zA-Z]{2,}$/;

    if(lastPattern.test(e.target.value)){
        form.lastName.setAttribute('class', 'success');
    } else {
        form.lastName.setAttribute('class', 'error');
    }
});