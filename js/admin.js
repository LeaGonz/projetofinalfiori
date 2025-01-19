var modal = document.getElementById("custom-modal"); // Seleciona o modal 
var modalMessage = document.getElementById("modal-message"); // Seleciona o elemento de mensagem do modal 

function modalAdmin() {
    // Mostra o modal
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.backgroundColor = "white";
    // Configura a mensagem do modal
    modalMessage.innerHTML = `
    <img src="./imagens/logo-fs.png" alt="Logo Fiori di Sicilia" style="width: 100px;">
        <div class="mt-3 mb-3">
            <label class="form-label"><strong>Utilizador:</strong></label>
            <input type="text" class="form-control" id="user" name="user" placeholder="Utilizador" autocomplete="off" required>
        </div>
        <div class="mb-3">
            <label class="form-label"><strong>Password:</strong></label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Password" autocomplete="off" required>
        </div>
        <input type="submit" value="Log in" id="login" class="btn w-100 enviar" />
    `;

    // Validamos utilizador e password
    document.getElementById("admin-form").addEventListener('submit', function (e) {
        e.preventDefault();

        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        // Não case sensitive e aceitamos espaços em branco no utilizador
        if (user.toUpperCase().trim() === "ADMIN" && password === "1234") {
            // Chamamos função  
            mostrarReservas();
            // Fechamos o modal
            modal.style.display = "none";
        } else {
            alert("Utilizador incorreto!");
        }
    });
}
// Função para mostrar os CONTACTOS
function mostrarContactos() {
    // Obtemos o valor armazenado em 'localStorage' com a chave 'reservas'.
    // Se não houver, será utilizado um array vazio.
    let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    const contactosBody = document.getElementById("contactosBody"); // Corpo da tabela

    if (!contactos || contactos.length === 0) {
        contactosBody.innerHTML = ""; // Limpa o conteúdo anterior
        contactosBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">Não há contactos para mostrar</td>
            </tr>
        `;
    } else {
        contactosBody.innerHTML = ""; // Limpa o conteúdo anterior
        contactos.forEach((dados, index) => {
            contactosBody.innerHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${dados.nome.toUpperCase()}</td>
                    <td>${dados.email}</td>
                    <td>${dados.mensagem}</td>
                    <td>
                        <a href="#" class="text-danger" onclick="apagarContacto(${index})">Excluir</a>
                    </td>
                </tr>
            `;
        });
    }
}
// function para apagar um contacto individual pelo id
function apagarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem("contactos"));
    contactos.splice(index, 1);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
}
// Função para limpar todos os contactos
function limparContactos() {
    localStorage.removeItem('contactos');
    mostrarContactos(); // Atualiza a tabela
}
// Chamamos a função limparContactos() quando o botão for clicado
document.getElementById('limparContactosBtn').addEventListener('click', limparContactos);



// Função para mostrar RESERVAS
function mostrarReservas() {
    // Obtemos o valor armazenado em 'localStorage' com a chave 'reservas'.
    // Se não houver, será utilizado um array vazio.
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
mostrarContactos();