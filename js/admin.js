var modal = document.getElementById("custom-modal"); // Seleciona o modal 
var modalMessage = document.getElementById("modal-message"); // Seleciona o elemento de mensagem do modal 
var loginBtn = document.getElementById("login"); // Seleciona o botão de fechar 


function modalAdmin() {
    // Configura a mensagem do modal
    modalMessage.innerHTML = `
    <img src="./imagens/logo-fs.png" alt="Logo Fiori di Sicilia" style="width: 100px;">
    <br><br><strong>Utilizador: </strong><input type="text" id="user" name="user" autocomplete="off" required /><br><br>
    <strong>Password: </strong><input type="password" id="password" name="password" autocomplete="off" required /><br>
    `;

    // Mostra o modal
    modal.style.display = "block";
    modal.style.backgroundColor = "white";
    // Validamos user e password
    loginBtn.onclick = function () {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        if (user === "admin" && password === "1234") {
            modal.style.display = "none";
        } else {
            alert("Utilizador incorreto!");
        }
    }
}

function mostrarReservas() {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    const reservasBody = document.getElementById("reservasBody"); // Corpo da tabela

    if (!reservas || reservas.length === 0) {
        reservasBody.innerHTML = ""; // Limpa o conteúdo anterior
        reservasBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">Não há reservas para mostrar</td>
            </tr>
        `;
    } else {
        reservasBody.innerHTML = ""; // Limpa o conteúdo anterior
        reservas.forEach((dados, index) => {
            reservasBody.innerHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${dados.nome.toUpperCase()}</td>
                    <td>${dados.contacto || "Não informado"}</td>
                    <td>${dados.data}</td>
                    <td>${dados.hora}</td>
                    <td>${dados.numpeople}</td>
                    <td>
                        <a href="#" class="text-danger" onclick="apagarReserva(${index})">Excluir</a>
                    </td>
                </tr>
            `;
        });
    }
}

// Função para limpar todas as reservas
function limparReservas() {
    localStorage.removeItem('reservas');
    mostrarReservas(); // Atualiza a tabela
}
// Chamamos a função limparReservas() quando o botão for clicado
document.getElementById('limparReservasBtn').addEventListener('click', limparReservas);

// function para apagar uma reserva individual pelo id
function apagarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem("reservas"));
    reservas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    mostrarReservas();
}

// Chama a função ao carregar a página
mostrarReservas();