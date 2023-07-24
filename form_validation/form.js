const form = document.querySelector('.input-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    const idNum = form.idNum.value;
    const idPattern = /^[0-9]{10}$/;

    if(idPattern.test(idNum)){
        feedback.textContent = 'pass'
    } else {
        feedback.textContent = 'fail'
    }
});