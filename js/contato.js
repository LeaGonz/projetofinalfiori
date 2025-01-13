document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault(); // Evita a execução padrão do formulário

    var nome = document.getElementById('nomesobrenome').value;
    var modal = document.getElementById("custom-modal"); // Seleciona o modal 
    var modalMessage = document.getElementById("modal-message"); // Seleciona o elemento de mensagem do modal 
    var closeBtn = document.getElementsByClassName("close")[0]; // Seleciona o botão de fechar 

    // Configura a mensagem do modal
    modalMessage.innerHTML = `
      <img src="./imagens/logo-fs 1.png" alt="Logo Fiori di Sicilia" style="width: 100px;">
    <br><br>Agradecemos o seu contacto, <strong>${nome.toUpperCase()}</strong>.
    <br>Responderemos o mais rapidamente possível.`;

    // Mostra o modal
    modal.style.display = "block";

    // Fecha o modal ao clicar no botão de fechar
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Fecha o modal ao clicar fora do conteúdo do modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    e.target.reset(); // Limpa o formulário
});