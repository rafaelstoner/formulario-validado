const form = document.getElementById('form');
const passord1El = document.getElementById('password1');
const passord2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

// Verificar se o form é válido
function validateForm() {
    //Usando API Constraints
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = "Por favor preencha todos campos";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
    }



}

// Processar os dados ao submeter
function processFormData(e) {
    e.preventDefault();
    validateForm();


}

// Evento ao clicar o botão submmit
form.addEventListener('submit', processFormData);
