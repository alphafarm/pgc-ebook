var labels = {
    button: {
      default: 'Receber meu material',
      loading: 'Gerando sua cópia...',
      success: 'Material recebido com sucesso!'
    },
    form: {
      emailError: 'Por favor, insira um endereço de e-mail válido.',
      phoneError: 'Por favor, insira um número de telefone válido.'
    }
  };
  
  function emailValidate(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function telephoneValidate(telephone) {
    var phoneRegex = /^(\+\d{1,4})?[-.\s]?\(?\d{1,}\)?[-.\s]?\d{1,}[-.\s]?\d{1,}$/;
    return phoneRegex.test(telephone);
  }
  
  function formValidate() {
    enableForm("disable");
  
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
  
    if (!emailValidate(email)) {
      alert(labels.form.emailError);
      enableForm("enable");
      return;
    }
  
    if (!telephoneValidate(telefone)) {
      alert(labels.form.phoneError);
      enableForm("enable");
      return;
    }
  
    var parametros = {
      "nome": nome,
      "email": email,
      "telefone": telefone
    };
  
    var url = 'https://script.google.com/macros/s/AKfycbz9Zz4htfu_B3o-E-bzUZ2AMUgZOGQAmEfN7pN4OTw8sZehpcyH4cIiqL6x7AYozEOtow/exec';
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
    var paramsString = Object.keys(parametros)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(parametros[key]))
      .join('&');
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var serverResponse = JSON.parse(xhr.responseText);
  
          if (serverResponse.success) {
            downloadMaterial();
            displayFeedback('form', 'success', serverResponse.mensagem);
            enableForm("finished");
          } else {
            displayFeedback('form', 'error', serverResponse.mensagem);
            enableForm("enable");
          }
        } else {
          displayFeedback('form', 'error', labels.form.serverError);
          enableForm("enable");
        }
      }
    }
  
    xhr.send(paramsString);
  }
  
  function enableForm(action) {
    var btn = document.getElementById('submit');
  
    btn.disabled = action === "enable" ? false : true;
    btn.style.opacity = action === "enable" ? 1 : 0.5;
    btn.value = action === "enable" ? labels.button.default : (action === "disable" ? labels.button.loading : labels.button.success);
  
    if (btn.disabled) {
      return;
    }
  }
  
  function displayFeedback(messageType, type, serverMessage) {
    var feedbackDiv = document.getElementById('feedback');
  
    var feedbackDivContent = document.createElement('div');
    feedbackDivContent.className = type === 'success' ? 'row align-center t-green bolder' : 'row align-center t-red bolder';
  
    var iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    var iconElement = document.createElement('i');
    iconElement.className = 'fa-solid ' + iconClass + ' fa-shake';
    feedbackDivContent.appendChild(iconElement);
  
    var messageParagraph = document.createElement('p');
    messageParagraph.textContent = serverMessage;
    messageParagraph.className = 'm-left-1 bolder';
    feedbackDivContent.appendChild(messageParagraph);
  
    feedbackDiv.innerHTML = ''; // Limpa mensagens anteriores
    feedbackDiv.appendChild(feedbackDivContent);
  
    setTimeout(function () {
      fadeOut(feedbackDivContent);
    }, 2500);
  }
  
  function fadeOut(element, resetContent = true) {
    var opacity = 1;
    var interval = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(interval);
        element.style.display = 'none';
        if (resetContent) {
          element.innerHTML = ''; // Limpa o conteúdo
          element.style.opacity = 1;
        }
      }
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      opacity -= opacity * 0.1;
    }, 100);
  }
  
  function downloadMaterial() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=1FJpYbgu25nXb3Ymc7iVvTEgOjKgMj3KS';
    link.download = 'Manual_Do_Anunciante_Alpha.pdf';
  
    document.body.appendChild(link);
  
    // Inicia o download imediatamente
    link.click();
    document.body.removeChild(link);
  }
  