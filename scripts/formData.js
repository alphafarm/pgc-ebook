import { app } from "./formStorage.js";

function emailValidate(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function telephoneValidate(telephone) {
    var phoneRegex = /^(\+\d{1,4})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}$/;
    return phoneRegex.test(telephone);
}

function formValidate() {
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;

    if (emailValidate(email) && telephoneValidate(telephone)) {
        var database = app.database();  // Use o objeto 'app' para acessar o banco de dados
        var formData = {
            email: email,
            telephone: telephone,
            timestamp: new Date().toString()
        };

        database.ref('dadosDoFormulario').push(formData);

        alert('Dados armazenados no Firebase. Iniciando download...');
        //window.location.href = './../data/ebook.pdf';
    } else {
        alert('Por favor, insira um e-mail e um telefone válidos.');
    }
}