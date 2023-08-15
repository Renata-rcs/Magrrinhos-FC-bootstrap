var feedbacks = [];

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Cria um objeto feedback com os valores do formulário
    var feedback = {
        name: name,
        email: email,
        message: message
    };

    // Adiciona o feedback ao array de feedbacks
    feedbacks.push(feedback);

    // Limpa o formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Atualiza a exibição dos feedbacks
    exibirFeedbacks();
});

function exibirFeedbacks() {
    var feedbackContainer = document.getElementById("feedbackContainer");
    feedbackContainer.innerHTML = '';

    feedbacks.forEach(function(feedback) {
        var feedbackElement = document.createElement("div");
        feedbackElement.innerHTML = "<h3>" + feedback.name + "</h3>"
            + "<p>Email: " + feedback.email + "</p>"
            + "<p>Mensagem: " + feedback.message + "</p>";

        feedbackContainer.appendChild(feedbackElement);
    });
}

