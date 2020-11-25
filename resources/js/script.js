const form = document.getElementById('form');
const passord1El = document.getElementById('password1');
const passord2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;



// Armazenar dados do formulário 

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password.value
    };

    // Acção a realizar com os dados 
    console.log(user);
}

// Verificar se o form é válido
function validateForm() {
    //Usando API Constraints
    isValid = form.checkValidity();

    // Dar estilo se o form for inválido
    if (!isValid) {
        message.textContent = "Por favor preencha todos campos";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Validar passwords
    if (passord1El.value === passord2El.value) {
        passwordsMatch = true;
        passord1El.style.borderColor = 'green';
        passord2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = "As senhas não combinam";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passord1El.style.borderColor = 'red';
        passord2El.style.borderColor = 'red';
        return;
    }

    // Formulário válido
    if (isValid && passwordsMatch) {
        message.textContent = "Registado com Sucesso!";
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }




}

// Processar os dados ao submeter
function processFormData(e) {
    e.preventDefault();
    validateForm();

    // Submeter os dados se válidos
    if (isValid && passwordsMatch) {
        storeFormData();
    }


}

// Evento ao clicar o botão submmit
form.addEventListener('submit', processFormData);
