let body = document.querySelector('body');
let inputNumber1 = document.createElement('input');
body.appendChild(inputNumber1)
let inputNumber2 = document.createElement('input');
body.appendChild(inputNumber2)
let btn = document.createElement('button');
btn.textContent = 'Count';
body.appendChild(btn)

function remove(err) {
    if(err == null) {return null};
    err.parentNode.removeChild(err);
}

function validation(inputNumber) {
    if(!isNaN(inputNumber.value)) {
        return true;
    } else {
        let error = document.createElement('div');
        error.setAttribute('class', 'error-message');
        error.textContent = 'This is not a number';
        inputNumber.after(error);
    }
}

btn.onclick = function click(){
    remove(document.querySelectorAll('.error-message')[0]);
    remove(document.querySelectorAll('.error-message')[0]);
    remove(document.querySelector('#result'));
    let valid1 = validation(inputNumber1);
    let valid2 = validation(inputNumber2);
    if(valid1 && valid2) {
        let result = document.createElement("p");
        result.id = 'result';
        result.innerHTML = parseInt(inputNumber1.value) + parseInt(inputNumber2.value);
        body.appendChild(result);
    }
};

