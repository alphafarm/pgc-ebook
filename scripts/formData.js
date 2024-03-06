function emailValidate(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function telephoneValidate(telephone) {
    var phoneRegex = /^(\+\d{1,4})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}$/;
    return phoneRegex.test(telephone);
}

function formValidate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;

    if (emailValidate(email) && telephoneValidate(telephone)) {
        var scriptUrl = "https://script.google.com/macros/s/AKfycbwrNrKHEvTsWjy3JyrMxuyVAjsnGsvdUI5V797PGVXlHHZRfDugZTRf6--Et_VOPtWz4g/exec";

        fetch(scriptUrl, {
            method: "POST",
            body: new URLSearchParams({
                'name': name,
                'email': email,
                'telephone': telephone
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error('Erro na solicitação. Status: ' + response.status);
            }
            return response.text();
        }).then(data => {
            console.log(data);
            alert("Dados enviados com sucesso!");
        }).catch(error => {
            console.error("Erro ao enviar dados:", error);
        });

    } else {
        alert('Por favor, insira um e-mail e um telefone válidos.');
    }
}