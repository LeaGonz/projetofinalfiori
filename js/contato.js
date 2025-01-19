document.getElementById("nomesobrenome").addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
  });

// Obtemos o valor armazenado em 'localStorage' com a chave 'reservas'.
// Se não houver, será utilizado um array vazio.
let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault(); // Evita a execução padrão do formulário

    var nome = document.getElementById('nomesobrenome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var modal = document.getElementById("custom-modal"); // Seleciona o modal 
    var modalMessage = document.getElementById("modal-message"); // Seleciona o elemento de mensagem do modal 
    var closeBtn = document.getElementsByClassName("close")[0]; // Seleciona o botão de fechar 

    // Criar contacto
    const novoContacto = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Adicionar a nova reserva ao array
    contactos.push(novoContacto);

    // Salvar o array no localStorage
    localStorage.setItem('contactos', JSON.stringify(contactos));

    // Configura a mensagem do modal
    modalMessage.innerHTML = `
      <img src="./imagens/logo-fs.png" alt="Logo Fiori di Sicilia" style="width: 100px;">
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