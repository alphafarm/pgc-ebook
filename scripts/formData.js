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
            body: "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&telephone=" + encodeURIComponent(telephone),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            console.log(response);
            alert("dados enviados com sucesso!");
        }).catch(error => {
            console.error("Erro ao enviar dados:", error);
        });

        //window.location.href = './../data/ebook.pdf';
    } else {
        alert('Por favor, insira um e-mail e um telefone válidos.');
    }
}