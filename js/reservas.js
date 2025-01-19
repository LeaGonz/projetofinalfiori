document.getElementById("contacto").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

document.getElementById("nome").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});

// localStorage.removeItem('reservas'); // Limpa o localStorage
// Obtemos o valor armazenado em 'localStorage' com a chave 'reservas'.
// Se não houver, será utilizado um array vazio.
let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
document.getElementById("reservation-form").addEventListener('submit', function (e) {
  e.preventDefault(); // Evita a execução padrão do formulário

  // Seleciona os valores do formulario
  var nome = document.getElementById('nome').value;
  var numpeople = document.getElementById('numpeople').value;
  var data = document.getElementById('data').value;
  var hora = document.getElementById('hora').value;
  var contacto = document.getElementById("contacto").value;
  var modal = document.getElementById("custom-modal"); // Seleciona o modal 
  var modalMessage = document.getElementById("modal-message"); // Seleciona o elemento de mensagem do modal 
  var closeBtn = document.getElementsByClassName("close")[0]; // Seleciona o botão de fechar 

  // Criar uma nova reserva
  const novaReserva = {
    nome: nome,
    numpeople: numpeople,
    data: data,
    hora: hora,
    contacto: contacto
  };

  // Adicionar a nova reserva ao array
  reservas.push(novaReserva);

  // Salvar o array no localStorage
  localStorage.setItem('reservas', JSON.stringify(reservas));

  // Configura a mensagem do modal
  modalMessage.innerHTML = `
    <img src="./imagens/logo-fs.png" alt="Logo Fiori di Sicilia" style="width: 100px;">
  <br><br>Reserva confirmada: <strong>${nome.toUpperCase()}</strong>.<br>
  Número de pessoas: <strong>${numpeople}</strong><br>
  Data: <strong>${data}</strong><br>
  Hora: <strong>${hora}</strong><br>
  `;

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